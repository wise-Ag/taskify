import { getDashboardList } from "@/api/dashboards";
import { GetDashboardListData } from "@/api/dashboards/dashboards.types";
import Columns from "@/components/Dashboard/Column/Columns";
import DashboardNav from "@/components/common/Nav/DashboardNav";
import SideMenu from "@/components/common/SideMenu/SideMenu";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const DashBoardPage = () => {
  const router = useRouter();
  const { boardid } = router.query;
  const [dashboards, setDashboards] = useState<GetDashboardListData>();

  useEffect(() => {
    const loadDashboardData = async () => {
      const res = await getDashboardList({ navigationMethod: "infiniteScroll", token: localStorage.getItem("accessToken") });

      if (res !== null) {
        setDashboards(res);
      }

      // if (res !== null) {
      //   const index = res.dashboards?.findIndex((v) => v.id == Number(boardid));

      //   console.log(index);

      //   if (index === -1) {
      //     router.push(`/404`);
      //     return;
      //   }
      // }
    };
    if (boardid) loadDashboardData();
  }, [boardid]);

  return (
    <>
      <DashboardNav />
      <SideMenu />
      <ColumnWrapper>
        <Columns />
      </ColumnWrapper>
    </>
  );
};

export default DashBoardPage;

const ColumnWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 7rem);

  position: relative;
  top: 7rem;

  background-color: var(--Grayfa);

  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    top: 6rem;

    height: calc(100vh - 6rem);
  }
`;
