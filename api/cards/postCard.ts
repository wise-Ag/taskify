import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

export const postCards = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: {
  token: string;
}) => {
  try {
    const res = await instance.post<any>(
      ENDPOINTS.CARDS.POST,
      {
        assigneeUserId: 13,
        dashboardId: 5,
        columnId: 16,
        title: "happy",
        description: "TEST 입니당~~",
        dueDate: "2023-12-31 00:00",
        tags: ["메롱"],
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
    console.error(error.response.data.message);
  }
};
