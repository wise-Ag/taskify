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
export const MOCK_DATA = {
  dashboardId: 5,
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDI5MDQ2NjQsImlzcyI6InNwLXRhc2tpZnkifQ.SLkTowJTOC6iZwTDiO4ZyLwIx6CQWQt4B86YqlMegNc",
};

function Columns() {
  const [columns, setColumns] = useState<Column[]>([]);

  const getColumns = async () => {
    const res = await instance.get("/columns", {
      params: {
        dashboardId: MOCK_DATA.dashboardId,
      },
      headers: {
        Authorization: `Bearer ${MOCK_DATA.token}`,
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
      {columns.map((column) => {
        return <Column key={column.id} title={column.title} columnId={column.id} />;
      })}
    </>
  );
}

export default Columns;
