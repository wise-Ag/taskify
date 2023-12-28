import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";
import { GetInvitationProps, GetInvitationsData, Invitation, PutInvitationsProps } from "@/api/invitations/invitations.types";

export const getInvitations = async ({ title, size, cursorId, token }: GetInvitationProps): Promise<GetInvitationsData | null> => {
  try {
    const res = await instance.get(ENDPOINTS.INVITATIONS.GET, {
      params: {
        size,
        cursorId,
        title,
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

export const putInvitations = async ({ invitationId, token, inviteAccepted }: PutInvitationsProps): Promise<Invitation | null> => {
  try {
    const res = await instance.put(
      ENDPOINTS.INVITATIONS.PUT(invitationId),
      {
        inviteAccepted,
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
