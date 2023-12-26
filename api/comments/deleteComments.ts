import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface deleteCommentsProps {
  commentId?: string;
  token?: string;
}

export const deleteComments = async ({
  commentId = "98",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: deleteCommentsProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.COMMENT.DELETE(commentId), {
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
