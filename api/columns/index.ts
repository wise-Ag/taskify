import instance from "@/api/axios";
import { CardImage, Columns, DeleteColumnsProps, GetColumnsData, GetColumnsProps, PostCardImageProps, PostColumnsProps, PutColumnsProps } from "@/api/columns/columns.types";
import { ENDPOINTS } from "@/api/config";

export const postColumns = async ({ title, dashboardId, token }: PostColumnsProps): Promise<Columns | null> => {
  try {
    const res = await instance.post(
      ENDPOINTS.COLUMNS.POST_COLUMNS,
      { title, dashboardId },
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

export const getColumns = async ({ dashboardId, token }: GetColumnsProps): Promise<GetColumnsData | null> => {
  try {
    const res = await instance.get(ENDPOINTS.COLUMNS.GET, {
      params: {
        dashboardId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) return res.data;
    return { result: "", data: [] };
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};

export const putColumns = async ({ title, columnId, token }: PutColumnsProps): Promise<Columns | null> => {
  try {
    const res = await instance.put(
      ENDPOINTS.COLUMNS.PUT(columnId),
      { title },
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

export const deleteColumns = async ({ columnId, token }: DeleteColumnsProps) => {
  try {
    await instance.delete(ENDPOINTS.COLUMNS.DELETE(columnId), {
      params: {
        columnId: columnId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

export const postCardImage = async ({ columnId, formData, token }: PostCardImageProps): Promise<CardImage | null> => {
  try {
    const res = await instance.post(ENDPOINTS.COLUMNS.POST_CARDIMAGE(columnId), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};
