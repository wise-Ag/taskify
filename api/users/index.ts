import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { UserData, PostImageData, PostProfileImageProps, PostUsersProps, PutUsersProps } from "@/api/users/users.types";

export const getUsers = async ({ token }: { token: string | null }): Promise<UserData | null> => {
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

export const postProfileImage = async ({ formData, token }: PostProfileImageProps): Promise<PostImageData | null> => {
  try {
    const res = await instance.post(ENDPOINTS.USERS.POST_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
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

export const putUsers = async ({ nickname, profileImageUrl, token }: PutUsersProps): Promise<UserData | null> => {
  try {
    const res = await instance.put(
      ENDPOINTS.USERS.PUT,
      {
        nickname,
        profileImageUrl,
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
