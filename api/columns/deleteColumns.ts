import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface deleteColumnsProps {
  columnId?: string;
  token?: string;
}

export const deleteColumns = async ({
  columnId = "623",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: deleteColumnsProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.COLUMNS.DELETE(columnId), {
      params: {
        columnId: columnId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    // if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
