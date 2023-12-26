import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface postProfileImageProps {
  image: string;
  token?: string;
}

export const postProfileImage = async ({
  image,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: postProfileImageProps) => {
  try {
    const res = await instance.post(
      ENDPOINTS.USERS.POST_IMAGE,
      {
        image: "test",
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
    console.log(error.response.data.message);
  }
};
