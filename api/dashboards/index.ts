import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import {
  Dashboard,
  GetDashboardListData,
  DeleteDashboardProps,
  DeleteDashboardInvitationsProps,
  GetDashboardProps,
  GetDashboardInvitationsProps,
  GetDashboardListProps,
  PutDashboardProps,
  PostDashboardInvitationsProps,
} from "@/api/dashboards/dashboards.types";
import { Invitation } from "@/api/invitations/invitations.types";

export const deleteDashboard = async ({
  dashboardId = "193",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: DeleteDashboardProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.DASHBOARDS.DELETE(dashboardId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

export const deleteDashboardInvitations = async ({
  dashboardId = "198",
  invitationId = "38",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzQ3MzEsImlzcyI6InNwLXRhc2tpZnkifQ.S8Lvf7DmFuMC3gMvNt1eJylk5oW0hFxHhbXAcQTDP2E",
}: DeleteDashboardInvitationsProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.DASHBOARDS.DELETE_INVITATION(dashboardId, invitationId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

export const getDashboard = async ({
  dashboardId = "193",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: GetDashboardProps): Promise<Dashboard | null> => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET(dashboardId), {
      params: {
        dashboardId,
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

export const getDashboardInvitations = async ({
  dashboardId = "198",
  size = 5,
  page,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzQ1NTAsImlzcyI6InNwLXRhc2tpZnkifQ.DEJkd2VERk0YaMWoRJzQ3cEdw8I7v_P3fpyqAaGeKK8",
}: GetDashboardInvitationsProps) => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET_INVITATION("198"), {
      params: {
        dashboardId,
        size,
        page,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

export const getDashboardList = async ({ navigationMethod, size = 5, cursorId, token }: GetDashboardListProps) => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET_LIST, {
      params: {
        navigationMethod,
        size,
        cursorId,
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

export const postDashboard = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: {
  token: string;
}): Promise<Dashboard | null> => {
  try {
    const res = await instance.post(
      ENDPOINTS.DASHBOARDS.POST,
      {
        title: "메롱메롱~~",
        color: "#ffffff",
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

export const postDashboardInvitations = async ({
  dashboardId = "198",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: PostDashboardInvitationsProps): Promise<Invitation | null> => {
  try {
    const res = await instance.post(
      ENDPOINTS.DASHBOARDS.POST_INVITATION(dashboardId),
      {
        email: "jieun2@codeit.com",
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

export const putDashboard = async ({
  dashboardId = "193",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: PutDashboardProps): Promise<Dashboard | null> => {
  try {
    const res = await instance.put(
      ENDPOINTS.DASHBOARDS.PUT(dashboardId),
      {
        title: "api 만든 사람 완전히 망해라",
        color: "#000000",
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
