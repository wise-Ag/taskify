import instance from "@/api/axios";
import Column from "@/components/Dashboard/Column/Column";
import Button from "@/components/common/Buttons/Button";
import { DeviceSize } from "@/styles/DeviceSize";
import { useEffect, useState } from "react";
import { Z_INDEX } from "@/styles/ZindexStyles";
import styled from "styled-components";
import { getColumns } from "@/api/columns";
import { Columns as ColumnsData } from "@/api/columns/columns.types";

const Columns = () => {
  const [columns, setColumns] = useState<ColumnsData[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const loadColumnsData = async () => {
      const res = await getColumns({
        dashboardId: 399,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjE2LCJ0ZWFtSWQiOiIxLTA4IiwiaWF0IjoxNzAzNzQxODYxLCJpc3MiOiJzcC10YXNraWZ5In0.onJAVE-0l39MjS77mTbfnS6UMU5bWMkVgBKlA-rs03U",
      });
      const columns = res?.data;
      setColumns(() => {
        return [...columns];
      });
    };
    loadColumnsData();
  }, []);

  return (
    <Wrapper>
      {columns.map((column) => (
        <Column key={column.id} title={column.title} columnId={column.id} />
      ))}
      <ButtonWrapper>
        <Button type="newDashboard" disabled>
          새로운 컬럼 추가하기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Columns;

const Wrapper = styled.div`
  height: 100vh;
  margin-left: 30rem;

  display: flex;

  /* background: var(--Grayfa); */

  @media (max-width: ${DeviceSize.tablet}) {
    margin-left: 16rem;

    flex-direction: column;
    width: auto;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    margin-left: 6.7rem;
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
