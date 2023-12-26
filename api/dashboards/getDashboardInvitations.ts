import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getDashboardInvitationsProps {
  dashboardId: string;
  page?: number;
  size?: number;
  token?: string;
}

export const getDashboardInvitations = async ({
  dashboardId = "198",
  size = 5,
  page,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzQ1NTAsImlzcyI6InNwLXRhc2tpZnkifQ.DEJkd2VERk0YaMWoRJzQ3cEdw8I7v_P3fpyqAaGeKK8",
}: getDashboardInvitationsProps) => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET_INVITATION("198"), {
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
