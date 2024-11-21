/**
 * 
 * @returns One string
 * 
 */

import { sentences } from "./sentences.ts";

/** This function randomly selects a fortune sentence */
export function fortuneCookie(): string {
    const fortune = sentences[Math.floor(Math.random() * sentences.length)];
    return fortune
}