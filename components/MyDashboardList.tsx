import { getDashboardList } from "@/api/dashboards";
import Button from "@/components/common/Buttons/Button";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import Link from "next/link";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import ModalContainer from "@/components/Modal/ModalContainer";
import { useAtom } from "jotai";
import { invitationsAtom } from "@/states/atoms";
import { Z_INDEX } from "@/styles/ZindexStyles";

export interface Dashboards {
  id: number;
  title: string;
  color: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
}

const PAGE_SIZE = 30;

const MyDashboardList = () => {
  const [dashboards, setDashboards] = useState<Dashboards[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invitations] = useAtom(invitationsAtom); // 초대 목록!!

  // 새로운 대시보드 클릭 시
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫을 때
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 생성할 때
  const handleAddModal = () => {};

  useEffect(() => {
    const loadDashboardList = async () => {
      const res = await getDashboardList({
        size: PAGE_SIZE,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgxLCJ0ZWFtSWQiOiIxLTA4IiwiaWF0IjoxNzAzNzQ4NDU5LCJpc3MiOiJzcC10YXNraWZ5In0.WYQWWikKqILh4vWyiDSCs0HDO-3TvKg7ci19-NUVexk",
        navigationMethod: "pagination",
        page: currentPage,
      });

      const resDashboards = res?.dashboards || [];
      const totalCount = res?.totalCount || 0;

      setDashboards(resDashboards);
      setTotalPageCount(Math.ceil(totalCount / PAGE_SIZE));
    };
    loadDashboardList();
  }, [currentPage, invitations]);

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
          <ModalContainer title="새로운 대시보드" label="대시보드 이름" buttonType="생성" onClose={handleCloseModal} onAdd={handleAddModal} />
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
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: ${Z_INDEX.MyDashboardList_ModalBackdrop};
`;
