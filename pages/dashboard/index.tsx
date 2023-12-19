import instance from "@/api/axios";
import { useEffect, useState } from "react";
import Column from "@/components/Column";

interface Column {
  createdAt: string;
  dashboardId: number;
  id: number;
  teamId: string;
  title: string;
  updatedAt: string;
}

function DashBoardPage() {
  const [columns, setColumns] = useState<Column[]>([]);

  const getColumns = async () => {
    const res = await instance.get("/columns", {
      params: {
        dashboardId: 5,
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDI5MDQ2NjQsImlzcyI6InNwLXRhc2tpZnkifQ.SLkTowJTOC6iZwTDiO4ZyLwIx6CQWQt4B86YqlMegNc",
      },
    });
    const columns = res.data.data;
    setColumns(() => {
      return [...columns];
    });
  };

  useEffect(() => {
    getColumns();
  }, []);

  return (
    <>
      <div>
        {columns.map((column) => {
          return <Column key={column.id} dashboardId={column.dashboardId} title={column.title} columnId={column.id} />;
        })}
      </div>
    </>
  );
}

export default DashBoardPage;
