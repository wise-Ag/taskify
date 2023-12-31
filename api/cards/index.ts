import instance from "@/api/axios";
import { Card, CardProps, PutCardProps, DeleteCardProps, GetCardListData, GetCardListProps, GetCardProps } from "@/api/cards/cards.types";
import { ENDPOINTS } from "@/api/config";

export const getCard = async ({ cardId, token }: GetCardProps): Promise<Card | null> => {
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

export const getCardList = async ({ size, cursorId, columnId, token }: GetCardListProps): Promise<GetCardListData | null> => {
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

export const postCards = async ({ assigneeUserId, dashboardId, columnId, title, description, dueDate, tags, imageUrl, token }: CardProps): Promise<Card | null> => {
  try {
    const res = await instance.post(
      ENDPOINTS.CARDS.POST,
      {
        assigneeUserId,
        dashboardId,
        columnId,
        title,
        description,
        dueDate,
        tags,
        imageUrl,
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

export const putCard = async ({ columnId, assigneeUserId, title, description, dueDate, tags, imageUrl, cardId, token }: PutCardProps): Promise<Card | null> => {
  try {
    const res = await instance.put(
      ENDPOINTS.CARDS.PUT(cardId),
      {
        columnId,
        assigneeUserId,
        title,
        description,
        dueDate,
        tags,
        imageUrl,
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

export const deleteCard = async ({ cardId, token }: DeleteCardProps) => {
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
