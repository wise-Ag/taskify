import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

interface getInvitationProps {
  title?: string;
  size?: number;
  cursorId?: number;
  token?: string;
}

export const getInvitations = async ({
  title,
  size = 5,
  cursorId,
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzUwMTMsImlzcyI6InNwLXRhc2tpZnkifQ.tt5oPAJ6av4leXf3pT-KW4vNarSQZhjcHA62HfXQjio",
}: getInvitationProps) => {
  try {
    const res = await instance.get(ENDPOINTS.INVITATIONS.GET, {
      params: {
        size,
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

interface putInvitationsProps {
  invitationId: string;
  token: string;
}
export const putInvitations = async ({
  invitationId = "117",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzUwMTMsImlzcyI6InNwLXRhc2tpZnkifQ.tt5oPAJ6av4leXf3pT-KW4vNarSQZhjcHA62HfXQjio",
}: putInvitationsProps) => {
  try {
    const res = await instance.put(
      ENDPOINTS.INVITATIONS.PUT(invitationId),
      {
        inviteAccepted: true,
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
