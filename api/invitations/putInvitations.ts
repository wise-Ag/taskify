import instance from "@/api/axios";
import { ENDPOINTS } from "@/api/config";

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
    console.log(res.data);
    if (res.status === 200) return res.data;
  } catch (error: any) {
    console.log(error);
  }
};
