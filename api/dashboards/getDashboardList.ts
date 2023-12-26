import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getDashboardListProps {
  navigationMethod: string;
  cursorId?: number;
  page?: number;
  size?: number;
  token?: string;
}

export const getDashboardList = async ({
  size = 20,
  cursorId,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getDashboardListProps) => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET_LIST, {
      params: {
        navigationMethod: "infiniteScroll",
        size,
        cursorId,
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
