import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { User } from "@/api/auth/auth.types";

export const postLogin = async (): Promise<User | null> => {
  try {
    const res = await instance.post(ENDPOINTS.AUTH.POST, {
      email: "jieun@codeit.com",
      password: "asdf1234",
    });

    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const putPassword = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM2NTI4ODEsImlzcyI6InNwLXRhc2tpZnkifQ.kD4JWHt6x3p9NctoNJKgPN7DZYnyMWGWlL9iSvMM6VA",
}: {
  token: string;
}) => {
  try {
    const res = await instance.put(
      ENDPOINTS.AUTH.PUT,
      {
        password: "asdf1234",
        newPassword: "1234asdf",
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
  }
};
