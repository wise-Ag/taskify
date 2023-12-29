import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { UserData, PostImageData, PostProfileImageProps, PostUsersProps } from "@/api/users/users.types";

export const getUsers = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: {
  token: string | null;
}): Promise<UserData | null> => {
  try {
    const res = await instance.get(ENDPOINTS.USERS.GET, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const postProfileImage = async ({
  image,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: PostProfileImageProps): Promise<PostImageData | null> => {
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
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const postUsers = async ({ email, nickname, password }: PostUsersProps): Promise<UserData | null> => {
  try {
    const res = await instance.post(ENDPOINTS.USERS.POST, {
      email,
      nickname,
      password,
    });
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const putUsers = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: {
  token: string;
}): Promise<UserData | null> => {
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
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};
