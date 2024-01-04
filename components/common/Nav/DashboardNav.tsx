import { getDashboard } from "@/api/dashboards";
import { Dashboard } from "@/api/dashboards/dashboards.types";
import NavContainer from "@/components/common/Nav/NavContainer";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { dashboardListAtom } from "@/states/atoms";

const DashboardNav = () => {
  const router = useRouter();
  const { boardid } = router.query;
  const [dashboard, setDashboard] = useState<Dashboard>();
  const [editDashboards, setEditDashboards] = useAtom(dashboardListAtom);

  useEffect(() => {
    const loadDashboardData = async () => {
      const res = await getDashboard({ dashboardId: Number(boardid), token: localStorage.getItem("accessToken") });
      if (res !== null) setDashboard(res);
    };
    if (boardid) loadDashboardData();
  }, [boardid, editDashboards]);

  return <>{dashboard && <NavContainer title={dashboard.title} $isDashboard={true} createdByMe={dashboard.createdByMe} />}</>;
};

export default DashboardNav;
