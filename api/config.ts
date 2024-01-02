export const BASE_URL = "https://sp-taskify-api.vercel.app/1-08";

export const ENDPOINTS = {
  AUTH: {
    POST: `/auth/login`,
    PUT: `/auth/password`,
  },

  CARDS: {
    POST: `/cards`,
    GET_LIST: `/cards`,
    PUT: (cardId: number) => `/cards/${cardId}`,
    GET_CARD: (cardId: number) => `/cards/${cardId}`,
    DELETE: (cardId: number) => `/cards/${cardId}`,
  },

  COLUMNS: {
    POST_COLUMNS: `/columns`,
    GET: `/columns`,
    PUT: (columnId: number) => `/columns/${columnId}`,
    DELETE: (columnId: number) => `/columns/${columnId}`,
    POST_CARDIMAGE: (columnId: number) => `/columns/${columnId}/card-image`,
  },

  COMMENT: {
    POST: `/comments`,
    GET: `/comments`,
    PUT: (commentid: number) => `/comments/${commentid}`,
    DELETE: (commentid: number) => `/comments/${commentid}`,
  },

  DASHBOARDS: {
    POST: `/dashboards`,
    GET_LIST: `/dashboards`,
    GET: (dashboardid: number) => `/dashboards/${dashboardid}`,
    PUT: (dashboardid: string) => `/dashboards/${dashboardid}`,
    DELETE: (dashboardid: string) => `/dashboards/${dashboardid}`,
    POST_INVITATION: (dashboardid: number) => `/dashboards/${dashboardid}/invitations`,
    GET_INVITATION: (dashboardid: number) => `/dashboards/${dashboardid}/invitations`,
    DELETE_INVITATION: (dashboardId: number, invitationId: number) => `/dashboards/${dashboardId}/invitations/${invitationId}`,
  },

  INVITATIONS: {
    GET: `/invitations`,
    PUT: (invitationId: number) => `/invitations/${invitationId}`,
  },

  MEMBERS: {
    GET: `/members`,
    DELETE: (memberId: number) => `/members/${memberId}`,
  },

  USERS: {
    POST: `/users`,
    GET: `users/me`,
    PUT: `users/me`,
    POST_IMAGE: `users/me/image`,
  },
};
