import { getDashboardList } from "@/api/dashboards";
import { GetDashboardListData } from "@/api/dashboards/dashboards.types";
import Columns from "@/components/Dashboard/Column/Columns";
import DashboardNav from "@/components/common/Nav/DashboardNav";
import SideMenu from "@/components/common/SideMenu/SideMenu";
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
        const index = res.dashboards?.findIndex((v) => v.id == Number(boardid));

        if (index === -1) {
          router.push(`/404`);
          return;
        }
      }
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
  overflow: scroll;

  background-color: var(--Grayfa);
`;
