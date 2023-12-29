import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { GetCardProps, GetCardListProps, PutCardProps, DeleteCardProps, Card, GetCardListData, PostCardProps } from "@/api/cards/cards.types";

export const getCard = async ({
  cardId = 77,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: GetCardProps): Promise<Card | null> => {
  try {
    const res = await instance.get(ENDPOINTS.CARDS.GET_CARD(cardId), {
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

export const getCardList = async ({
  size = 5,
  cursorId = 5,
  columnId = 16,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: GetCardListProps): Promise<GetCardListData | null> => {
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
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const postCards = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: PostCardProps): Promise<Card | null> => {
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
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const putCard = async ({
  cardId = 77,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: PutCardProps): Promise<Card | null> => {
  try {
    const res = await instance.put(
      ENDPOINTS.CARDS.PUT(cardId),
      {
        columnId: 623,
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
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const deleteCard = async ({
  cardId = 77,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: DeleteCardProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.CARDS.DELETE(cardId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    console.log(error.response.data.message);
  }
};
