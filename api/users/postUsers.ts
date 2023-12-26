import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

export const postUsers = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: {
  token: string;
}) => {
  try {
    const res = await instance.post(
      ENDPOINTS.USERS.POST,
      {
        email: "test@gmail.com",
        nickname: "메롱이",
        password: "#123ffffff",
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
