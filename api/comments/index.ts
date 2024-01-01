import instance from "@/api/axios";
import { DeleteCommentsProps, GetCommentsData, GetCommentsProps, PostCommentsProps, PutCommentsProps, Comment } from "@/api/comments/comments.types";
import { ENDPOINTS } from "@/api/config";

export const getComments = async ({ cardId, size, cursorId, token }: GetCommentsProps): Promise<GetCommentsData | null> => {
  try {
    const res = await instance.get(ENDPOINTS.COMMENT.GET, {
      params: {
        size,
        cursorId,
        cardId,
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

export const postComments = async ({ content, cardId, columnId, dashboardId, token }: PostCommentsProps): Promise<Comment | null> => {
  try {
    const res = await instance.post(
      ENDPOINTS.COMMENT.POST,
      {
        content,
        cardId,
        columnId,
        dashboardId,
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

export const putComments = async ({ commentId, token, content }: PutCommentsProps): Promise<Comment | null> => {
  try {
    const res = await instance.put(
      ENDPOINTS.COMMENT.PUT(commentId),
      {
        content,
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

export const deleteComments = async ({ commentId, token }: DeleteCommentsProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.COMMENT.DELETE(commentId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};
