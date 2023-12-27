import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { GetInvitationProps, GetInvitationsData, Invitation, PutInvitationsProps } from "@/api/invitations/invitations.types";

export const getInvitations = async ({ title, size, cursorId, token }: GetInvitationProps): Promise<GetInvitationsData | null> => {
  try {
    const res = await instance.get(ENDPOINTS.INVITATIONS.GET, {
      params: {
        size,
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

export const putInvitations = async ({
  invitationId = "117",
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzUwMTMsImlzcyI6InNwLXRhc2tpZnkifQ.tt5oPAJ6av4leXf3pT-KW4vNarSQZhjcHA62HfXQjio",
}: PutInvitationsProps): Promise<Invitation | null> => {
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
    return res.data;
  } catch (error: any) {
    console.error(error.response.data.message);
    return null;
  }
};
