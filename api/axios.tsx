import axios from "axios";
import { BASE_URL } from "@/api/config";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDI5MDQ2NjQsImlzcyI6InNwLXRhc2tpZnkifQ.SLkTowJTOC6iZwTDiO4ZyLwIx6CQWQt4B86YqlMegNc",
  },
});

export default instance;

// export const getRecipientsId = () => axios.get(${DOMAIN_TEAM}/recipients/${id}/);
// try {
//   const data = await getRecipientsId()
// } catch {
//  // 에러 처리
// }

// 쓸 때
// const test =  async () => {
//   try {
//     const data = await getRecipientsId()
//   } catch {
//    // 에러 처리
//   }
//   }
