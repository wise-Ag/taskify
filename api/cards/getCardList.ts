import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getCardListProps {
  size?: number;
  cursorId?: number;
  columnId: number;
  token?: string;
}

export const getCardList = async ({
  size = 5,
  cursorId = 5,
  columnId = 16,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getCardListProps) => {
  try {
    const res = await instance.get(ENDPOINTS.CARDS.GET_LIST, {
      params: {
        size,
        cursorId,
        columnId,
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
