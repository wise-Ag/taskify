import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface putDashboardProps {
  dashboardId: string;
  token?: string;
}
export const putDashboard = async ({
  dashboardId = "193",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: putDashboardProps) => {
  try {
    const res = await instance.put(
      ENDPOINTS.DASHBOARDS.PUT(dashboardId),
      {
        title: "api 만든 사람 완전히 망해라",
        color: "#000000",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(res.data);
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
