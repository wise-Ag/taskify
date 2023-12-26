import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface putCommentsProps {
  commentId: string;
  token: string;
}
export const putComments = async ({
  commentId = "98",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: putCommentsProps) => {
  try {
    const res = await instance.put(
      ENDPOINTS.COMMENT.PUT(commentId),
      {
        content: "나은님 메롱",
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
    console.log(error);
  }
};
