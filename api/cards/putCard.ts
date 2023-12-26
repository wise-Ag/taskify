import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface putCardProps {
  cardId: string;
  token: string;
}
export const putCard = async ({
  cardId = "77",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: putCardProps) => {
  try {
    const res = await instance.put(
      ENDPOINTS.CARDS.PUT(cardId),
      {
        assigneeUserId: 13,
        title: "not happy",
        description: "TEST 다시 해보기",
        dueDate: "2023-12-31 01:00",
        tags: ["누가 만들었는지 참 흥"],
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
    console.log(error);
  }
};
