import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getCommentsProps {
  cardId?: number;
  size?: number;
  cursorId?: number;
  token?: string;
}

export const getComments = async ({
  cardId = 4,
  size = 5,
  cursorId,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getCommentsProps) => {
  try {
    const res = await instance.get(ENDPOINTS.COMMENT.GET, {
      params: {
        size,
        cursorId,
        cardId,
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
