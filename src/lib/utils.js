
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines classNames with Tailwind classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
