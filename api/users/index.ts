import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

export const getUsers = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: {
  token: string;
}) => {
  try {
    const res = await instance.get(ENDPOINTS.USERS.GET, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

export const putUsers = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: {
  token: string;
}) => {
  try {
    const res = await instance.put(
      ENDPOINTS.USERS.PUT,
      {
        nickname: "이은행",
        profileImageUrl: null,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};
