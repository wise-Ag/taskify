import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getCardProps {
  cardId?: string;
  token?: string;
}

export const getCard = async ({
  cardId = "77",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getCardProps) => {
  try {
    const res = await instance.get(ENDPOINTS.CARDS.GET_CARD(cardId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface getCardListProps {
  size?: number;
  cursorId?: number;
  columnId: number;
  token?: string;
}

export const getCardList = async ({
  size = 5,
  cursorId = 5,
  columnId = 16,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getCardListProps) => {
  try {
    const res = await instance.get(ENDPOINTS.CARDS.GET_LIST, {
      params: {
        size,
        cursorId,
        columnId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

export const postCards = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: {
  token: string;
}) => {
  try {
    const res = await instance.post(
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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface deleteCardProps {
  cardId?: string;
  token?: string;
}

export const deleteCard = async ({
  cardId = "77",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: deleteCardProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.CARDS.DELETE(cardId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
