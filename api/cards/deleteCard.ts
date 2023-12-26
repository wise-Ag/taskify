import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface deleteCardProps {
  cardId?: string;
  token?: string;
}

export const deleteCard = async ({
  cardId = "77",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: deleteCardProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.CARDS.DELETE(cardId), {
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
