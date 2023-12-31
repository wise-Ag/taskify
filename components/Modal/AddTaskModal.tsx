import { getMembers } from "@/api/members";
import { Member } from "@/api/members/members.types";
import ModalInput from "@/components/Modal/ModalInput/ModalInput";
import TagInput from "@/components/Modal/ModalInput/TagInput";
import ButtonSet from "@/components/common/Buttons/ButtonSet";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ContactDropdown from "./ModalInput/ContactDropdown";

interface AddTaskModalProps {
  onClick?: () => void;
}

const AddTaskModal = ({ onClick }: AddTaskModalProps) => {
  const [membersData, setMembersData] = useState<Member[]>([]);
  const token = localStorage.getItem("accessToken");
  const router = useRouter();
  const { boardid } = router.query;
  const dashboardId = Number(boardid);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const memberData = await getMembers({ dashboardId, token });
        if (memberData) {
          setMembersData(memberData.members);
        }
      } catch (error) {
        console.error("Failed to fetch members", error);
      }
    };

    fetchMembers();
  }, [dashboardId, token]);

  return (
    <Wrapper>
      <TodoTitle>할 일 생성</TodoTitle>
      <ContactDropdown members={membersData} />
      <ModalInput $inputType="설명" label="설명" />
      <ModalInput $inputType="마감일" label="마감일" />
      <TagInput />
      <ButtonWrapper>
        <ButtonSet type="modalSet" onClickLeft={onClick}>
          생성
        </ButtonSet>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default AddTaskModal;

const Wrapper = styled.div`
  width: 50.6rem;

  padding: 3.2rem 2.8rem 2.8rem 2.8rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  border-radius: 8px;
  background: var(--MainLight);

  @media (max-width: ${DeviceSize.mobile}) {
    width: 32.7rem;

    padding: 2.8rem 2rem;
  }
`;

const TodoTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: ${DeviceSize.mobile}) {
    font-size: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
