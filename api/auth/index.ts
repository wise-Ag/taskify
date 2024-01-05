import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { User, PostLoginProps, PutPasswordProps } from "@/api/auth/auth.types";

export const postLogin = async ({ email, password }: PostLoginProps): Promise<User | null> => {
  try {
    const res = await instance.post(ENDPOINTS.AUTH.POST, {
      email,
      password,
    });

    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const putPassword = async ({ password, newPassword, token }: PutPasswordProps) => {
  try {
    const res = await instance.put(
      ENDPOINTS.AUTH.PUT,
      {
        password: password,
        newPassword: newPassword,
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
    return error.response.data.message;
  }
};
