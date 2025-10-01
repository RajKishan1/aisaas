import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const combinedSlug = (name: string, maxLen = 80): string => {
  const base = name

  if (!base) return 'untitled'

  let s = base
    .normalize('NFKD')
    .replace(/[^\w]+/gu, '_')
    .toLowerCase()
    .replace(/^-+|-+$/g, '')
    .replace(/[à-æø-ÿ]/g, '')

  if (!s) s = 'untitled'

  if (s.length > maxLen) s = s.slice(0, maxLen)

  return s
}