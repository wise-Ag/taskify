import { atom } from "jotai";

export const selectedColorAtom = atom("");

// 현재 활성화된 드롭다운의 식별자를 저장하는 아톰
export const activeDropdownAtom = atom<string | null>(null);
