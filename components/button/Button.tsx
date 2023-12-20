import React from "react";
import styled from "styled-components";
import TYPES from "@/components/button/ButtonStyles";
import AddBoxIcon from "@/assets/icons/add-box.svg";
import ArrowIcon from "@/assets/icons/arrow-forward.svg";
import CrownIcon from "@/assets/icons/crown.svg";
import AddColumn from "@/components/Chip/AddColumn";
import dashboardData from "./mockData";

interface ButtonContentProps {
  type: keyof typeof TYPES;
  children: React.ReactNode;
  disabled?: boolean;
  id?: number;
  color?: string;
  title?: string;
}

const ButtonContent: React.FC<ButtonContentProps> = ({ type, children, id, color, title }) => {
  let dashboard;
  if (type === "dashboardList" && id !== undefined) {
    dashboard = dashboardData.dashboards[0];
  }

  switch (type) {
    case "addNewColumn":
    case "plus":
    case "newDashboard":
      return (
        <>
          <span>{children}</span>
          <AddColumn />
        </>
      );
    case "dashboardList":
      return (
        <>
          <StyledTitleWrapper>
            {dashboard?.color && <Color color={dashboard.color} />}
            {dashboard?.title && <StyledDashboardTitle>{dashboard.title}</StyledDashboardTitle>}
            <CrownIcon />
          </StyledTitleWrapper>
          <ArrowIcon />
        </>
      );
    case "invite":
      return (
        <>
          <StyledAddBoxIcon type={type} />
          <span>{children}</span>
        </>
      );
    default:
      return children;
  }
};

const Button: React.FC<ButtonContentProps> = ({ type, children, id }) => {
  return (
    <StyledButton type={type}>
      <ButtonContent type={type} children={children} id={id} />
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonContentProps>`
  border: 1px solid var(--Grayd9);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--White);
  color: var(--Black33);

  font-weight: 500;

  ${({ type }) => TYPES[type]}
`;

const StyledAddBoxIcon = styled(AddBoxIcon)`
  path {
    fill: ${({ type }) => (type === "invite" ? "var(--White)" : "currentColor")};
  }
`;

const Color = styled.div<{ color: string }>`
  width: 0.8rem;
  height: 0.8rem;

  border-radius: 100%;

  background-color: ${(props) => props.color};
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDashboardTitle = styled.span`
  margin: 0 0.8rem 0 1.6rem;
`;

export default Button;
