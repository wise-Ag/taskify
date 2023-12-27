import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { Columns, GetColumnsProps, GetColumnsData, PutColumnsProps, DeleteColumnsProps, PostCardImageProps, CardImage } from "@/api/columns/columns.types";

export const postColumns = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: {
  token: string;
}): Promise<Columns | null> => {
  try {
    const res = await instance.post(
      ENDPOINTS.COLUMNS.POST_COLUMNS,
      { title: "test", dashboardId: 5 },
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

export const getColumns = async ({
  dashboardId = 5,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: GetColumnsProps): Promise<GetColumnsData | null> => {
  try {
    const res = await instance.get(ENDPOINTS.COLUMNS.GET, {
      params: {
        dashboardId: dashboardId,
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

export const putColumns = async ({
  columnId = "16",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: PutColumnsProps): Promise<Columns | null> => {
  try {
    const res = await instance.put(
      ENDPOINTS.COLUMNS.PUT(columnId),
      { title: "test" },
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

export const deleteColumns = async ({
  columnId = "623",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: DeleteColumnsProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.COLUMNS.DELETE(columnId), {
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

export const postCardImage = async ({
  columnId = "16",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: PostCardImageProps): Promise<CardImage | null> => {
  try {
    const res = await instance.post(
      ENDPOINTS.COLUMNS.POST_CARDIMAGE(columnId),
      { image: "test" }, // 추후 수정
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
