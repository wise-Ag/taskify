import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface deleteDashboardProps {
  dashboardId?: string;
  token?: string;
}

export const deleteDashboard = async ({
  dashboardId = "193",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: deleteDashboardProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.DASHBOARDS.DELETE(dashboardId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface deleteDashboardInvitationsProps {
  dashboardId: string;
  invitationId: string;
  token?: string;
}

export const deleteDashboardInvitations = async ({
  dashboardId = "198",
  invitationId = "38",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzQ3MzEsImlzcyI6InNwLXRhc2tpZnkifQ.S8Lvf7DmFuMC3gMvNt1eJylk5oW0hFxHhbXAcQTDP2E",
}: deleteDashboardInvitationsProps) => {
  try {
    const res = await instance.delete(ENDPOINTS.DASHBOARDS.DELETE_INVITATION(dashboardId, invitationId), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) return res.data.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface getDashboardProps {
  dashboardId: string;
  token?: string;
}

export const getDashboard = async ({
  dashboardId = "193",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getDashboardProps) => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET(dashboardId), {
      params: {
        dashboardId,
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

interface getDashboardInvitationsProps {
  dashboardId: string;
  page?: number;
  size?: number;
  token?: string;
}

export const getDashboardInvitations = async ({
  dashboardId = "198",
  size = 5,
  page,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzQ1NTAsImlzcyI6InNwLXRhc2tpZnkifQ.DEJkd2VERk0YaMWoRJzQ3cEdw8I7v_P3fpyqAaGeKK8",
}: getDashboardInvitationsProps) => {
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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface getDashboardListProps {
  navigationMethod: string;
  cursorId?: number;
  page?: number;
  size?: number;
  token?: string;
}

export const getDashboardList = async ({
  size = 20,
  cursorId,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: getDashboardListProps) => {
  try {
    const res = await instance.get(ENDPOINTS.DASHBOARDS.GET_LIST, {
      params: {
        navigationMethod: "infiniteScroll",
        size,
        cursorId,
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

export const postDashboard = async ({
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: {
  token: string;
}) => {
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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface postDashboardInvitationsProps {
  dashboardId: string;
  token?: string;
}

export const postDashboardInvitations = async ({
  dashboardId = "198",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: postDashboardInvitationsProps) => {
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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};

interface putDashboardProps {
  dashboardId: string;
  token?: string;
}
export const putDashboard = async ({
  dashboardId = "193",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NjYyOTgsImlzcyI6InNwLXRhc2tpZnkifQ.zNaGd4uESNMzrDDHokuybQNJs_CkFLY7SpYKgafPBl0",
}: putDashboardProps) => {
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
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
};
