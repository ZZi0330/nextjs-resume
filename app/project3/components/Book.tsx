"use client"

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { pageAtom, pages } from './UI'
import { BoxGeometry, Color, MeshStandardMaterial, SkinnedMesh, SRGBColorSpace, Vector3 } from 'three';
import { Uint16BufferAttribute, Float32BufferAttribute, Bone, Skeleton } from 'three';
import { useCursor, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { degToRad } from 'three/src/math/MathUtils.js';
import { useAtom } from 'jotai';
import { easing } from 'maath';


const easingFactor = 0.5
const easingFactorFold = 0.3
const insideCurveStrength = 0.18
const outsideCurveStrength = 0.05
const turningCurveStrength = 0.09

const PAGE_WIDTH = 1.28;
const PAGE_HEIGHT = 1.71;
const PAGE_DEPTH = 0.003;
const PAGE_SEGMENTS = 30;
const SEGMENTS_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

const pageGeometry = new BoxGeometry(
  PAGE_WIDTH,
  PAGE_HEIGHT,
  PAGE_DEPTH,
  PAGE_SEGMENTS,
  2,
)

pageGeometry.translate(PAGE_WIDTH / 2, 0, 0)
const position = pageGeometry.attributes.position;
const vertex = new Vector3()
const skinIndexs = []
const skinWeights = []

for (let i = 0; i < position.count; i++) {
  vertex.fromBufferAttribute(position, i)
  const x = vertex.x

  const skinIndex = Math.max(0, Math.floor(x / SEGMENTS_WIDTH))
  const skinWeight = (x % SEGMENTS_WIDTH) / SEGMENTS_WIDTH

  skinIndexs.push(skinIndex, skinIndex + 1, 0, 0)
  skinWeights.push(1 - skinWeight, skinWeight, 0, 0)
}

pageGeometry.setAttribute(
  "skinIndex",
  new Uint16BufferAttribute(skinIndexs, 4),
)
pageGeometry.setAttribute(
  "skinWeight",
  new Float32BufferAttribute(skinWeights, 4),
)

const whiteColor = new Color("white")

const pageMaterials = [
  new MeshStandardMaterial({
    color: whiteColor,
  }),
  new MeshStandardMaterial({
    color: "#111",
  }),
  new MeshStandardMaterial({
    color: whiteColor,
  }),
  new MeshStandardMaterial({
    color: whiteColor,
  }),
]

interface PageProps {
  number: number;
  front: string;
  back: string;
  page: number;
  opened: boolean;
  bookClosed: boolean
}

pages.forEach((page) => {
  useTexture.preload([page.front, page.back]);
  useTexture.preload([`/project3/textures/book-cover-roughness1.png`]);
})

const Page = ({ number, front, back, page, opened, bookClosed, ...props }: PageProps) => {
  const [picture, picture2, pictureRoughness] = useTexture([
    `${front}`,
    `${back}`,
    ...(number === 0 || number === pages.length - 1 ? [`/project3/textures/book-cover-roughness1.png`] : []),
  ])
  picture.colorSpace = picture2.colorSpace = SRGBColorSpace

  const group = useRef(null)
  const turnedAt = useRef(0)
  const lastOpened = useRef(opened)

  const skinnedMeshRef = useRef<SkinnedMesh>(null);

  const manualSkinnedMesh = useMemo(() => {
    const bones = []
    for (let i = 0; i <= PAGE_SEGMENTS; i++) {
      const bone = new Bone()
      bones.push(bone)
      if (i === 0) {
        bone.position.x = 0;
      } else {
        bone.position.x = SEGMENTS_WIDTH
      }
      if (i > 0) {
        bones[i - 1].add(bone)
      }
    }
    const skeleton = new Skeleton(bones)

    const materials = [...pageMaterials,
    new MeshStandardMaterial({
      color: whiteColor,
      map: picture,
      ...(
        number === 0 ? {
          roughnessMap: pictureRoughness,
        } : {
          roughness: 0.1
        }
      )
    }),
    new MeshStandardMaterial({
      color: whiteColor,
      map: picture2,
      ...(
        number === pages.length - 1 ? {
          roughnessMap: pictureRoughness
        } : {
          roughness: 0.1
        }
      )
    })
    ]
    const mesh = new SkinnedMesh(pageGeometry, materials)
    mesh.castShadow = true
    mesh.receiveShadow = true
    mesh.frustumCulled = false
    mesh.add(skeleton.bones[0])
    mesh.bind(skeleton)
    return mesh
  }, [number, picture, picture2, pictureRoughness])

  // useHelper(skinnedMeshRef, SkeletonHelper, "red")

  useFrame((_, delta) => {
    if (!skinnedMeshRef.current) {
      return
    }

    if (lastOpened.current !== opened) {
      turnedAt.current = +new Date();
      lastOpened.current = opened;
    }
    let turningTime = Math.min(400, new Date().getTime() - turnedAt.current) / 400
    turningTime = Math.sin(turningTime * Math.PI)

    let targetRotation = opened ? -Math.PI / 2 : Math.PI / 2;
    if (!bookClosed) {
      targetRotation += degToRad(number * 0.8)
    }

    const bones = skinnedMeshRef.current?.skeleton?.bones;

    for (let i = 0; i < bones.length; i++) {
      const target = i === 0 ? group.current : bones[i];
      const insideCurveIntensity = i < 8 ? Math.sin(i * 0.2 + 0.25) : 0;
      const outsideCurveIntensity = i >= 8 ? Math.cos(i * 0.3 + 0.09) : 0;
      const turningIntensity =
        Math.sin(i * Math.PI * (1 / bones.length)) * turningTime;

      let rotationAngle =
        insideCurveStrength * insideCurveIntensity * targetRotation -
        outsideCurveStrength * outsideCurveIntensity * targetRotation +
        turningCurveStrength * turningIntensity * targetRotation;

      let foldRotationAngle = degToRad(Math.sign(targetRotation) * 2);

      if (bookClosed) {

        if (i === 0) {
          rotationAngle = targetRotation;
          foldRotationAngle = 0;
        } else {
          rotationAngle = 0;
          foldRotationAngle = 0;
        }
      }
      if (target) {
        easing.dampAngle(
          target.rotation,
          "y",
          rotationAngle,
          easingFactor,
          delta
        );
      }


      const foldIntensity =
        i > 8
          ? Math.sin(i * Math.PI * (1 / bones.length) - 0.5) * turningTime
          : 0;
      if (target) {
        easing.dampAngle(
          target.rotation,
          "x",
          foldRotationAngle * foldIntensity,
          easingFactorFold,
          delta
        );
      }
    }
  });
  const [, setPage] = useAtom(pageAtom)
  const [highlighted, setHighlighted] = useState(false)
  useCursor(highlighted)
  return (
    <group {...props} ref={group}
    onPointerEnter={(e) => {
      e.stopPropagation();
      setHighlighted(true)
    }}
    onPointerLeave={(e) => {
      e.stopPropagation();
      setHighlighted(false)
    }}
    onClick={(e) => {
      e.stopPropagation();
      setPage(opened ? number : number + 1)
      setHighlighted(false)
    }}
    >
      <primitive
        object={manualSkinnedMesh}
        ref={skinnedMeshRef}
        position-z={-number * PAGE_DEPTH + page * PAGE_DEPTH}
      />

    </group>
  )
}

const Book = ({ ...props }) => {
  const [page] = useAtom(pageAtom)
  const [delayedPage, setDelayedPage] = useState(page)

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    const goToPage = () => {
      setDelayedPage((delayedPage) => {
        if (page === delayedPage) {
          return delayedPage
        } else {
          timeout = setTimeout(() => {
            goToPage()
          },
            Math.abs(page - delayedPage) > 2 ? 50 : 150)
          if (page > delayedPage) {
            return delayedPage + 1
          }
          if (page < delayedPage) {
            return delayedPage - 1
          }
          return delayedPage
        }
      })
    }
    goToPage()
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    }

  }, [page])

  return (
    <group {...props} rotation-y={-Math.PI / 2}>
      {[...pages].map((pageData, index) => (

        <Page
          key={index}
          bookClosed={delayedPage === 0 || delayedPage === pages.length}
          page={delayedPage}
          opened={delayedPage > index}
          number={index}
          {...pageData}
        />
      ))}

    </group>
  )
}

export default Book