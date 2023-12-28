import { getDashboardList } from "@/api/dashboards";
import Button from "@/components/common/Buttons/Button";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import Link from "next/link";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import ModalContainer from "@/components/Modal/ModalContainer";

export interface Dashboards {
  id: number;
  title: string;
  color: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
}
const PAGE_SIZE = 5;

const MyDashboardList = () => {
  const [dashboards, setDashboards] = useState<Dashboards[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const loadDashboardList = async () => {
      const res = await getDashboardList({
        size: PAGE_SIZE,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInRlYW1JZCI6IjEtMDgiLCJpYXQiOjE3MDM1NzU1MjgsImlzcyI6InNwLXRhc2tpZnkifQ.vPTurAcm35kevcT9alVW2SxsjFcaKqnmd_mpgVwWfRU",
        navigationMethod: "pagination",
        page: currentPage,
      });

      const resDashboards = res?.dashboards;
      const totalCount = res?.totalCount;

      setDashboards(() => [...resDashboards]);
      setTotalPageCount(Math.ceil(totalCount / PAGE_SIZE));
    };
    loadDashboardList();
  }, [currentPage]);
  return (
    <Wrapper>
      <Container>
        <Button type="newDashboard" onClick={handleOpenModal}>
          새로운 대시보드
        </Button>
        {dashboards &&
          dashboards.map((v) => {
            return (
              <Link key={v.id} href={`/dashboards/${v.id}`}>
                <Button type="dashboardList" title={v.title} color={v.color} id={v.id} createdByMe={v.createdByMe} />
                {/* </div> */}
              </Link>
            );
          })}
      </Container>
      <PageContent>
        {totalPageCount} 페이지 중 {currentPage} <ButtonSet type="forwardAndBackward" />
      </PageContent>
      {isModalOpen && (
        <ModalBackdrop>
          <ModalContainer title="새로운 대시보드" label="대시보드 이름" buttonType="생성" onClose={handleCloseModal} />
        </ModalBackdrop>
      )}
    </Wrapper>
  );
};

export default MyDashboardList;

const Container = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 33.2rem);
  grid-template-rows: repeat(2, 7.15rem);
  gap: 1.2rem;

  @media (max-width: ${DeviceSize.tablet}) {
    grid-template-columns: repeat(2, 24.7rem);
    grid-template-rows: repeat(3, 6.955rem);
  }

  @media (max-width: ${DeviceSize.mobile}) {
    grid-template-columns: repeat(1, 26rem);
    grid-template-rows: repeat(6, 6.56rem);
  }
`;

const PageContent = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  font-size: 1.4rem;
`;

const Wrapper = styled.div`
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: end;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
