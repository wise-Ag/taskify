import { getMembers } from "@/api/members";
import { Member } from "@/api/members/members.types";
import DropdownIcon from "@/assets/icons/arrow-drop-down.svg";
import CheckIcon from "@/assets/icons/check.svg";
import NoProfileImage from "@/components/common/NoProfileImage/ProfileImage";
import { cardAssigneeIdAtom } from "@/states/atoms";
import { Z_INDEX } from "@/styles/ZindexStyles";
import { useAtom } from "jotai";
import { ChangeEvent, useEffect, useState, useRef } from "react";
import styled from "styled-components";

interface ContactDropdownProps {
  dashboardId: number;
  assigneeNickname?: string | null;
}

const ContactDropdown = ({ dashboardId, assigneeNickname }: ContactDropdownProps) => {
  const [membersData, setMembersData] = useState<Member[]>([]);
  const [filter, setFilter] = useState("");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [showList, setShowList] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
  const [, setAssigneeId] = useAtom(cardAssigneeIdAtom);
  const [isSelected, setIsSelected] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const fetchMembers = async () => {
      try {
        const memberData = await getMembers({ dashboardId, token });
        if (memberData) {
          setMembersData(memberData.members);

          if (assigneeNickname) {
            const assignee = memberData.members.find((member) => member.nickname === assigneeNickname);
            if (assignee) {
              setSelectedMember(assignee);
              setFilter(assigneeNickname); // 여기서 필터 상태를 업데이트
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch members", error);
      }
    };

    fetchMembers();
  }, [dashboardId]);

  const toggleList = () => {
    setShowList(!showList);
    if (!showList) {
      setFilteredMembers(membersData);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setFilter(input);
    const matchedMembers = membersData.filter((membersData) => membersData.nickname.toLowerCase().includes(input.toLowerCase()));

    setFilteredMembers(matchedMembers);
    setAssigneeId(null);
    setIsSelected(false);
    if (input) {
      setShowList(true);
    } else {
      setSelectedMember(null);
      setShowList(false);
    }
  };

  const handleSelect = (membersData: Member) => {
    setSelectedMember(membersData);
    setFilter(membersData.nickname);
    setShowList(false);
    setAssigneeId(membersData.userId);
    setIsSelected(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <Text>담당자</Text>
      <Container ref={containerRef}>
        <InputContainer>
          {selectedMember && selectedMember.profileImageUrl && (
            <SelectProfileIcon className={`${isSelected ? "" : "hideProfile"}`} src={selectedMember.profileImageUrl} alt="Profile" />
          )}
          {selectedMember && !selectedMember.profileImageUrl && (
            <SelectedNoProfileImage className={`${isSelected ? "" : "hideProfile"}`}>
              <NoProfileImage id={selectedMember.userId} nickname={selectedMember.nickname} />
            </SelectedNoProfileImage>
          )}
          <Input
            type="text"
            value={filter}
            onChange={handleChange}
            placeholder="이름을 입력해 주세요"
            style={{
              paddingLeft: selectedMember ? "4.5rem" : "1.6rem",
            }}
          />
          <ArrowDownIcon onClick={toggleList} show={showList} style={{ pointerEvents: "auto" }} />
        </InputContainer>

        {showList && (
          <List>
            {filteredMembers.map((membersData) => (
              <ListItem key={membersData.id} onClick={() => handleSelect(membersData)}>
                {membersData.profileImageUrl ? (
                  <ProfileIcon src={membersData.profileImageUrl} alt="Profile" />
                ) : (
                  <NoProfileImageWrapper>
                    <NoProfileImage id={membersData.userId} nickname={membersData.nickname} />
                  </NoProfileImageWrapper>
                )}
                {membersData.nickname}
                <CheckIconStyled />
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </Wrapper>
  );
};

export default ContactDropdown;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.h3`
  margin-bottom: 1rem;

  color: var(--Black33);
  font-size: 1.8rem;
  font-weight: 500;
`;

const Container = styled.div`
  width: 21.7rem;
  height: 4.8rem;

  position: relative;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  position: relative;
`;

const SelectProfileIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  position: absolute;
  left: 1.6rem;
  top: 50%;

  border-radius: 50%;

  transform: translateY(-50%);
  object-fit: cover;

  &.hideProfile {
    display: none;
  }
`;
const SelectedNoProfileImage = styled.div`
  width: 2.4rem;
  line-height: 2.4rem;

  position: absolute;
  left: 1.6rem;
  top: 50%;

  border-radius: 50%;

  transform: translateY(-50%);
  &.hideProfile {
    display: none;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;

  padding: 1.4rem 1.6rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 6px;
  border: 1px solid var(--Grayd9);

  background: var(--White);

  font-size: 1.6rem;

  &:focus {
    border: 1.2px solid var(--Main);
    outline: none;
  }
`;

const ArrowDownIcon = styled(DropdownIcon).withConfig({
  shouldForwardProp: (prop) => prop !== "show",
})`
  position: absolute;
  top: 50%;
  right: 1.6rem;

  transform: translateY(-50%) rotate(${({ show }) => (show ? "180deg" : "0deg")});

  cursor: pointer;
`;

const List = styled.ul`
  color: var(--Black33);
  font-size: 1.4rem;
  font-weight: 400;

  border-radius: 6px;
  border: 1px solid var(--Grayd9);
  background: var(--White);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  position: relative;
  z-index: ${Z_INDEX.ContactDropdown_List};
`;

const ListItem = styled.li`
  height: 4.5rem;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;

  &:hover {
    background: var(--Grayfa);
  }
`;

const ProfileIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  margin-right: 1rem;

  border-radius: 50%;

  object-fit: cover;
`;

const NoProfileImageWrapper = styled.div`
  width: 2.4rem;

  margin-right: 1rem;

  line-height: 2.4rem;
  font-size: 1.3rem;
`;

const CheckIconStyled = styled(CheckIcon)`
  display: none;

  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  color: var(--Gray78);

  ${ListItem}:hover & {
    display: block;
  }
`;
