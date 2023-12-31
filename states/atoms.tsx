import { atom } from "jotai";
import { Invitation } from "@/api/invitations/invitations.types";
import { DASHBOARD_COLOR } from "@/constants/ColorConstant";
import { Columns } from "@/api/columns/columns.types";

// 현재 활성화된 드롭다운의 식별자를 저장하는 아톰
export const activeDropdownAtom = atom<string | null>(null);

export const invitationsAtom = atom<Invitation[]>([]);

export const columnsAtom = atom<Columns[]>([]);

export const dashboardColorAtom = atom<string>(`${DASHBOARD_COLOR[0]}`);
