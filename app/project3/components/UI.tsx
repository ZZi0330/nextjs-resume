import { atom, useAtom } from "jotai";
import { useLanguage } from "@/contexts/LanguageContext";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

const getImageUrl = (baseName: string) => {
  if (baseName === "book-cover") {
    return "/project3/textures/book-cover1.png";
  } else if (baseName === "book-back") {
    return "/project3/textures/book-back.jpg";
  } else {
    return `/project3/textures/${baseName}.jpg`;
  }
};

export const pageAtom = atom(0);
export const pages = [
  
  {
    front: getImageUrl("book-cover"),
    back: getImageUrl(pictures[0]),
  },

  
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: getImageUrl(pictures[i % pictures.length]),
    back: getImageUrl(pictures[(i + 1) % pictures.length]),
  });
}

pages.push({
  front: getImageUrl(pictures[pictures.length - 1]),
  back: getImageUrl("book-back"),
});



export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const { t } = useLanguage();

  return (
    <>
      {/* 顶部链接 - 绝对定位，不覆盖整个屏幕 */}
      <a
        className="fixed top-10 left-10 z-20 pointer-events-auto"
        href="https://github.com/ZZi0330"
      >
        <img className="w-20" src="/project3/images/wawasensei-white1.png" />
      </a>
      
      {/* 底部控制按钮 - 绝对定位，只占用需要的空间 */}
      <div className="fixed bottom-0 left-0 right-0 z-20 pointer-events-none flex justify-center">
        <div className="overflow-auto flex items-center gap-4 max-w-full p-10 pointer-events-auto">
          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg shrink-0 border-2 ${
                index === page
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(index)}
            >
              {index === 0 ? t('project3.cover') : t('project3.page').replace('{number}', index.toString())}
            </button>
          ))}
          <button
            className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg shrink-0 border-2 ${
              page === pages.length
                ? "bg-white/90 text-black"
                : "bg-black/30 text-white"
            }`}
            onClick={() => setPage(pages.length)}
          >
            {t('project3.back')}
          </button>
        </div>
      </div>
    </>
  );
};