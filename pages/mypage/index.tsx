import AccountPassword from "@/components/Account/AccountPassword";
import AccountProfile from "@/components/Account/AccountProfile";
import BackButton from "@/components/common/Buttons/BackButton";
import SettingNav from "@/components/common/Nav/SettingNav";
import SettingSideMenu from "@/components/common/SideMenu/SettingSideMenu";
import { DeviceSize } from "@/styles/DeviceSize";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const Mypage = () => {
  const router = useRouter();
  const { tab } = router.query;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      router.push("/404");
    }
  }, [router]);

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
  height: calc(100vh - 7rem);

  background-color: var(--MainLight);

  position: relative;
  top: 7rem;

  @media (max-width: ${DeviceSize.mobile}) {
    top: 6rem;

    height: calc(100vh - 12rem);
  }
`;

const Container = styled.div`
  margin-left: 30rem;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: ${DeviceSize.tablet}) {
    margin-left: 16rem;
  }

  @media (max-width: ${DeviceSize.mobile}) {
    margin: 5rem 1.2rem 0 1.2rem;
  }
`;
