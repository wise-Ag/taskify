import styled from "styled-components";
import SearchIcon from "@/assets/icons/search.svg";
import { DeviceSize } from "@/styles/DeviceSize";

const SearchInput = () => {
  return (
    <Container>
      <SearchIcon alt="search" width={24} height={24} />
      <Input placeholder="검색" />
    </Container>
  );
};

const Container = styled.div`
  padding: 0.8rem 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  border: 1px solid var(--Gray30);

  @media screen and (max-width: ${DeviceSize.mobile}) {
    padding: 0.7rem 1.2rem;
  }
`;

const Input = styled.input`
  width: 100%;

  border: none;
  outline: none;
  font-size: 1.6rem;

  &::placeholder {
    color: var(--Gray40);
  }

  @media screen and (max-width: ${DeviceSize.mobile}) {
    font-size: 1.4rem;
  }
`;

export default SearchInput;
