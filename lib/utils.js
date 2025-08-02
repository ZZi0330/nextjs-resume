import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 工具函数 - 合并和处理CSS类名
 * 使用clsx处理条件类名，使用twMerge处理Tailwind CSS冲突
 * @param {...any} inputs - 类名参数
 * @returns {string} 处理后的类名字符串
 */
export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}