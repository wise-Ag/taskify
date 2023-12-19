import instance from "@/api/axios";
import Column from "@/components/Column/Column";
import { DeviceSize } from "@/styles/DeviceSize";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
    <Wrapper>
      {columns.map((column) => {
        return <Column key={column.id} title={column.title} columnId={column.id} />;
      })}
    </Wrapper>
  );
}

export default Columns;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;

  background: var(--Gray10);

  @media (max-width: ${DeviceSize.tablet}) {
    flex-direction: column;
    width: auto;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    flex-direction: column;
  }
`;
