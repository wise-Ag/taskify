import AccountPassword from "@/components/Account/AccountPassword";
import AccountProfile from "@/components/Account/AccountProfile";
import BackButton from "@/components/common/Buttons/BackButton";
import SettingNav from "@/components/common/Nav/SettingNav";
import SettingSideMenu from "@/components/common/SideMenu/SettingSideMenu";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import styled from "styled-components";

const Mypage = () => {
  const router = useRouter();
  const { tab } = router.query;

  return (
    <Wrapper>
      <SettingNav />
      <SettingSideMenu />
      <Container>
        <BackButton href={`/mydashboard`} />
        {tab === "password" ? <AccountPassword /> : <AccountProfile />}
      </Container>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  height: 145.3rem;

  background-color: var(--MainLight);
`;

const Container = styled.div`
  margin-top: 2rem;
  margin-left: 32rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: ${DeviceSize.tablet}) {
    margin-left: 18rem;
    margin-right: 2rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    margin: 7rem 1.2rem 0 1.2rem;
  }
`;
