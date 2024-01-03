import { css } from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";

const TYPES = {
  login: css`
    width: 100%;

    padding: 1.4rem 0;

    border: none;
    background-color: var(--Main);
    color: var(--White);
    font-size: 1.8rem;
    font-weight: 500;

    &:disabled {
      border: none;
      background-color: var(--Gray9f);
      cursor: default;
    }

    @media (max-width: ${DeviceSize.mobile}) {
      padding: 1.4rem 0;

      border: none;
      background-color: var(--Main);
      color: var(--White);
      font-size: 1.8rem;
      font-weight: 500;
    }
  `,

  delete: css`
    width: 8.4rem;

    padding: 0.7rem 0;

    border-radius: 4px;
    color: var(--Main);

    @media (max-width: ${DeviceSize.mobile}) {
      width: 5.2rem;

      padding: 0.7rem 0;

      border-radius: 4px;
      color: var(--Main);
      font-size: 1.2rem;
    }
  `,
  addNewColumn: css`
    width: 35.4rem;

    padding: 2.45rem 0;

    gap: 1.2rem;

    font-size: 1.8rem;
    font-weight: 700;

    &:disabled {
      color: var(--Gray9f);
      cursor: default;
    }

    @media (max-width: ${DeviceSize.tablet}) {
      width: 54.4rem;

      padding: 2.45rem 0;

      gap: 1.2rem;

      font-size: 1.8rem;
      font-weight: 700;
    }

    @media (max-width: ${DeviceSize.mobile}) {
      width: 28.4rem;

      padding: 2rem 0;

      gap: 1.2rem;

      font-size: 1.6rem;
      font-weight: 700;
    }
  `,

  plus: css`
    width: 31.4rem;

    padding: 0.9rem 0;

    border-radius: 6px;

    @media (max-width: ${DeviceSize.tablet}) {
      width: 54.4rem;

      padding: 0.9rem 0;

      border-radius: 6px;
    }

    @media (max-width: ${DeviceSize.mobile}) {
      width: 28.4rem;

      padding: 0.6rem 0;

      border-radius: 6px;
    }
  `,

  deleteDashboard: css`
    width: 32rem;

    padding: 2rem 0;

    background-color: var(--Grayfa);
    font-size: 1.8rem;

    @media (max-width: ${DeviceSize.mobile}) {
      width: 28.4rem;

      padding: 1.6rem 0;

      background-color: var(--Grayfa);
      font-size: 1.6rem;
    }
  `,

  newDashboard: css`
    width: 100%;

    padding: 2.4rem 0;

    gap: 1.2rem;

    font-size: 1.6rem;
    font-weight: 600;

    @media (max-width: ${DeviceSize.tablet}) {
      padding: 2.3rem 0;

      gap: 1.2rem;

      font-size: 1.6rem;
      font-weight: 600;
    }

    @media (max-width: ${DeviceSize.mobile}) {
      padding: 1.9rem 0;

      gap: 1.2rem;

      font-size: 1.6rem;
      font-weight: 600;
    }
  `,

  dashboardList: css`
    width: 100%;

    padding: 2.55rem 2rem;

    justify-content: space-between;

    font-size: 1.6rem;
    font-weight: 600;

    @media (max-width: ${DeviceSize.tablet}) {
      padding: 2.45rem 2rem;

      justify-content: space-between;

      font-size: 1.6rem;
      font-weight: 600;
    }

    @media (max-width: ${DeviceSize.mobile}) {
      padding: 2rem 2rem;

      justify-content: space-between;

      font-weight: 600;
    }
  `,
  invite: css`
    width: 10.5rem;

    padding: 0.75rem 0;

    gap: 0.8rem;

    background-color: var(--Main);
    color: var(--White);

    @media (max-width: ${DeviceSize.mobile}) {
      width: 8.6rem;

      padding: 0.7rem 0;

      gap: 0.6rem;

      background-color: var(--Main);
      color: var(--White);
      font-size: 1.2rem;
    }
  `,

  modalInput: css`
    width: 8.3rem;

    padding: 0.9rem 0;

    color: var(--Main);
    font-size: 1.2rem;
    font-weight: 500;

    @media (max-width: ${DeviceSize.tablet}) {
      width: 7.8rem;
    }

    @media (max-width: ${DeviceSize.mobile}) {
      width: 8.4rem;
    }
  `,
  modalConfirm: css`
    width: 12rem;

    padding: 1.4rem 0;

    background-color: var(--Main);
    color: var(--White);

    @media (max-width: ${DeviceSize.mobile}) {
      width: 13.8rem;

      padding: 1.2rem 0;

      background-color: var(--Main);
      color: var(--White);
    }
  `,
};

export default TYPES;
