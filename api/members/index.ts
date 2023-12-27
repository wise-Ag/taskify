import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getMembersProps {
  dashboardId?: number;
  size?: number;
  page?: number;
  token?: string;
}

export const getMembers = async ({
  dashboardId = 5,
  size = 5,
  page,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: getMembersProps) => {
  try {
    const res = await instance.get(ENDPOINTS.MEMBERS.GET, {
      params: {
        size,
        page,
        dashboardId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface deleteMembersProps {
  memberId: string;
  token?: string;
}

export const deleteMembers = async ({
  memberId = "241",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: deleteMembersProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.MEMBERS.DELETE(memberId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};
