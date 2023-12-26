import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getDashboardInvitationsProps {
  dashboardId: string;
  page?: number;
  size?: number;
  token?: string;
}

export const getDashboardInvitations = async ({
  dashboardId = "217",
  size = 5,
  page,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: getDashboardInvitationsProps) => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET_INVITATION("217"), {
      params: {
        dashboardId,
        size,
        page,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
