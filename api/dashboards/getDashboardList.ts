import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getDashboardListProps {
  navigationMethod: string;
  cursorId?: number;
  page?: number;
  size?: number;
  token: string;
}

export const getDashboardList = async ({ size, navigationMethod, cursorId, token }: getDashboardListProps) => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET_LIST, {
      params: {
        navigationMethod,
        size,
        cursorId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
