import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getColumnsProps {
  dashboardId?: number;
  token?: string;
}

export const getColumns = async ({
  dashboardId = 5,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getColumnsProps) => {
  try {
    const res = await instance.get(ENDPOINTS.COLUMNS.GET, {
      params: {
        dashboardId: dashboardId,
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
