import { getDashboardList, postDashboard } from "@/api/dashboards";
import Button from "@/components/common/Buttons/Button";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import Link from "next/link";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import ModalContainer from "@/components/Modal/ModalContainer";
import { useAtom } from "jotai";
import { dashboardColorAtom, invitationsAtom, modalInputAtom } from "@/states/atoms";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { useModal } from "@/hooks/useModal";
import ModalWrapper from "./Modal/ModalWrapper";
import { usePagination } from "@/hooks/usePagination";
import { DASHBOARD_COLOR } from "@/constants/ColorConstant";

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
  const [totalPageCount, setTotalPageCount] = useState(1);
  const { isModalOpen, openModalFunc, closeModalFunc } = useModal();
  const { currentPage, setCurrentPage, handlePageChange } = usePagination(totalPageCount);
  const [invitations] = useAtom(invitationsAtom);
  const [dashboardTitle, setDashboardTitle] = useAtom(modalInputAtom);
  const [dashboardColor, setDashboardColor] = useAtom(dashboardColorAtom);

  const handleAddModal = async () => {
    const res = await postDashboard({ token: localStorage.getItem("accessToken"), title: dashboardTitle, color: dashboardColor });

    setDashboardColor(`${DASHBOARD_COLOR[0]}`);
    setDashboardTitle("");

    if (res == null) {
      alert("대시보드 생성에 실패했습니다.");
      closeModalFunc();
      return;
    }
    currentPage === 1 ? setDashboards(() => [res, ...dashboards.slice(0, dashboards.length - 1)]) : setCurrentPage(1);

    closeModalFunc();
  };

  const loadDashboardList = async () => {
    const res = await getDashboardList({
      size: PAGE_SIZE,
      token: localStorage.getItem("accessToken"),
      navigationMethod: "pagination",
      page: currentPage,
    });

    if (res !== null) {
      setDashboards([...res.dashboards]);
      setTotalPageCount(Math.ceil(res.totalCount / PAGE_SIZE));
    }
  };

  useEffect(() => {
    loadDashboardList();
  }, [currentPage, invitations]);

  return (
    <Wrapper>
      <Container>
        <Button
          type="newDashboard"
          onClick={() => {
            openModalFunc();
          }}
        >
          새로운 대시보드
        </Button>
        {dashboards &&
          dashboards.map((v) => {
            return (
              <Link key={v.id} href={`/dashboard/${v.id}`}>
                <Button type="dashboardList" title={v.title} color={v.color} id={v.id} createdByMe={v.createdByMe} />
              </Link>
            );
          })}
      </Container>
      <PageContent>
        {totalPageCount} 페이지 중 {currentPage}{" "}
        <ButtonSet
          type="forwardAndBackward"
          isLeftDisabled={currentPage === 1}
          isRightDisabled={currentPage === totalPageCount}
          onClickLeft={() => handlePageChange(-1)}
          onClickRight={() => handlePageChange(1)}
        />
      </PageContent>
      {isModalOpen && (
        <ModalWrapper>
          <ModalContainer title="새로운 대시보드" label="대시보드 이름" buttonType="생성" onClose={closeModalFunc} onAdd={handleAddModal} />
        </ModalWrapper>
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
