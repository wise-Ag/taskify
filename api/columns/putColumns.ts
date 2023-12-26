import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface putColumnsProps {
  columnId: string;
  token: string;
}
export const putColumns = async ({
  columnId = "16",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: putColumnsProps) => {
  try {
    const res = await instance.put(
      ENDPOINTS.COLUMNS.PUT(columnId),
      { title: "test" },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(res.data);
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.log(error);
  }
};
