import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface postCardImageProps {
  columnId: string;
  token: string;
}
export const postCardImage = async ({
  columnId = "16",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: postCardImageProps) => {
  try {
    const res = await instance.post(
      ENDPOINTS.COLUMNS.POST_CARDIMAGE(columnId),
      { image: "test" }, // 추후 수정
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
