import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

export const postLogin = async () => {
  try {
    const res = await instance.post(ENDPOINTS.AUTH.POST, {
      email: "jieun@codeit.com",
      password: "asdf1234",
    });
    console.log(res.data);
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
