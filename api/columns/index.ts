import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface deleteColumnsProps {
  columnId?: string;
  token?: string;
}

export const deleteColumns = async ({
  columnId = "623",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: deleteColumnsProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.COLUMNS.DELETE(columnId), {
      params: {
        columnId: columnId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface getColumnsProps {
  dashboardId?: number;
  token?: string;
}

export const getColumns = async ({
  dashboardId = 5,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getColumnsProps) => {
  try {
    const res = await instance.get(ENDPOINTS.COLUMNS.GET, {
      params: {
        dashboardId: dashboardId,
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

interface postCardImageProps {
  columnId: string;
  token: string;
}
export const postCardImage = async ({
  columnId = "16",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: postCardImageProps) => {
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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

export const postColumns = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: {
  token: string;
}) => {
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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface putColumnsProps {
  columnId: string;
  token: string;
}
export const putColumns = async ({
  columnId = "16",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: putColumnsProps) => {
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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};
