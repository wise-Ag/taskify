import instance from "@/api/axios";
import Column from "@/components/Dashboard/Column/Column";
import Button from "@/components/common/Buttons/Button";
import { DeviceSize } from "@/styles/DeviceSize";
import { useEffect, useState } from "react";
import { Z_INDEX } from "@/styles/ZindexStyles";
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
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1MTU1OTIsImlzcyI6InNwLXRhc2tpZnkifQ.WXLHBnKbOg00qIuVgOb-FSlCuq2dzqRLOP1OUy2VQjc",
};

const Columns = () => {
  const [columns, setColumns] = useState<Column[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
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
    getColumns();
  }, []);

  return (
    <Wrapper>
      {columns.map((column) => (
        <Column key={column.id} title={column.title} columnId={column.id} />
      ))}
      <ButtonWrapper>
        <Button type="newDashboard" disabled>
          <button>새로운 컬럼 추가하기</button>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Columns;

const Wrapper = styled.div`
  height: 100vh;
  height: 100%;

  display: flex;

  background: var(--Grayfa);

  @media (max-width: ${DeviceSize.tablet}) {
    flex-direction: column;
    width: auto;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 11rem;

  padding-top: 2rem;
  margin-top: 6.3rem;
  margin-left: 2rem;

  background: var(--Grayfa);

  z-index: ${Z_INDEX.Column_ButtonWrapper};

  @media (max-width: ${DeviceSize.tablet}) {
    position: sticky;
    bottom: 0;
  }
`;
