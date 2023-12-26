import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getDashboardProps {
  dashboardId: string;
  token?: string;
}

export const getDashboard = async ({
  dashboardId = "193",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getDashboardProps) => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET(dashboardId), {
      params: {
        dashboardId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
