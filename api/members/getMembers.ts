import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { AxiosResponse } from "axios";

interface getMembersProps {
  dashboardId?: number;
  size?: number;
  page?: number;
  token?: string;
}

type Member = {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
};

// const getMembers = () => instance.get(ENDPOINT.MEMBERS.GET);

export const getMembers = async ({
  dashboardId = 5,
  size = 5,
  page,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
}: getMembersProps): Promise<{ members: Member[]; totalCount: number }> => {
  // try {
  const res = await instance.get<{ members: Member[]; totalCount: number }>(ENDPOINTS.MEMBERS.GET, {
    params: {
      size,
      page,
      dashboardId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(res.data);
  if (res.status === 200) return res.data;
  return { members: [], totalCount: 0 };
  // } catch (error: any) {
  //   console.log(error.response.data.message);
  // }
};
