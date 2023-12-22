import { useState, ChangeEvent } from "react";
import styled from "styled-components";
import DropdownIcon from "@/assets/icons/arrow-drop-down.svg";
import CheckIcon from "@/assets/icons/check.svg";

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

interface ContactDropdownProps {
  members: Member[];
}

const ContactDropdown = ({ members }: ContactDropdownProps) => {
  const [filter, setFilter] = useState("");
  const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setFilter(input);
    setSelectedMember(null);
    if (input) {
      const matchedMembers = members.filter((member) => member.nickname.toLowerCase().startsWith(input.toLowerCase()));
      setFilteredMembers(matchedMembers);
    } else {
      setFilteredMembers([]);
    }
  };

  const handleSelect = (member: Member) => {
    setSelectedMember(member);
    setFilter(member.nickname);
    setFilteredMembers([]);
  };

  return (
    <>
      <Text>담당자</Text>
      <Container>
        <InputContainer>
          {selectedMember && <SelectProfileIcon src={selectedMember.profileImageUrl} alt="Profile" />}
          <Input
            type="text"
            value={selectedMember ? selectedMember.nickname : filter}
            onChange={handleChange}
            placeholder="이름을 입력해 주세요"
            style={{
              paddingLeft: selectedMember ? "4.5rem" : "1.6rem",
            }}
          />
        </InputContainer>
        {filter && <ArrowDownIcon />}
        {filteredMembers.length > 0 && (
          <List>
            {filteredMembers.map((member) => (
              <ListItem key={member.id} onClick={() => handleSelect(member)}>
                <ProfileIcon src={member.profileImageUrl} alt="Profile" />
                {member.nickname}
                <CheckIconStyled />
              </ListItem>
            ))}
          </List>
        )}
      </Container>
    </>
  );
};

export default ContactDropdown;

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

  border-radius: 6px;
  border: 1px solid var(--Grayd9);
  background: var(--White);
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

  &:focus {
    border: 1.4px solid var(--Main);
    outline: none;
  }
`;

const ArrowDownIcon = styled(DropdownIcon)`
  position: absolute;
  top: 50%;
  right: 1.6rem;

  transform: translateY(-50%);
  pointer-events: none;
`;

const List = styled.ul`
  color: var(--Black33);
  font-size: 1.4rem;
  font-weight: 400;

  border-radius: 6px;
  border: 1px solid var(--Grayd9);
  background: var(--White);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
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

const CheckIconStyled = styled(CheckIcon)`
  display: none;

  position: absolute;
  right: 1rem;
  top: 50%;

  transform: translateY(-50%);

  ${ListItem}:hover & {
    display: block;
  }
`;
