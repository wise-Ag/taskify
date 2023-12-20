import { css } from "styled-components";
import { DeviceSize } from "@/styles/DeviceSize";

const TYPES = {
  accept: css`
    width: 8.4rem;

    padding: 0.7rem 0;
    border-radius: 4px;
    border: none;

    background-color: var(--Main);

    color: var(--White);

    @media (max-width: ${DeviceSize.tablet}) {
      width: 7.2rem;

      padding: 0.6rem 0;
      border-radius: 4px;
      border: none;

      background-color: var(--Main);

      color: var(--White);
    }

    @media (max-width: ${DeviceSize.mobile}) {
      width: 10.9rem;

      padding: 0.7rem 0;
      border-radius: 4px;
      border: none;

      background-color: var(--Main);

      color: var(--White);
      font-size: 1.2rem;
    }
  `,

  reject: css`
    width: 8.4rem;

    padding: 0.7rem 0;
    border-radius: 4px;

    color: var(--Main);

    @media (max-width: ${DeviceSize.tablet}) {
      width: 7.2rem;

      padding: 0.6rem 0;
      border-radius: 4px;

      color: var(--Main);
    }

    @media (max-width: ${DeviceSize.mobile}) {
      width: 10.9rem;

      padding: 0.7rem 0;
      border-radius: 4px;

      color: var(--Main);
      font-size: 1.2rem;
    }
  `,

  forward: css`
    width: 4rem;
    height: 4rem;

    border-radius: 0 4px 4px 0;

    transform: scaleX(-1);

    @media (max-width: ${DeviceSize.mobile}) {
      width: 3.6rem;
      height: 3.6rem;

      border-radius: 0 4px 4px 0;

      transform: scaleX(-1);
    }
  `,

  backward: css`
    width: 4rem;
    height: 4rem;

    border-radius: 0 4px 4px 0;

    @media (max-width: ${DeviceSize.mobile}) {
      width: 3.6rem;
      height: 3.6rem;

      border-radius: 0 4px 4px 0;
    }
  `,

  basic: css`
    width: 12rem;

    padding: 1.4rem 0;
    border: none;

    background-color: var(--Main);

    color: var(--White);
    font-size: 1.6rem;

    @media (max-width: ${DeviceSize.mobile}) {
      width: 13.8rem;

      padding: 1.2rem 0;
      border: none;

      background-color: var(--Main);

      color: var(--White);
    }
  `,

  cancel: css`
    width: 12rem;

    padding: 1.4rem 0;

    color: var(--Gray50);
    font-size: 1.6rem;

    @media (max-width: ${DeviceSize.mobile}) {
      width: 13.8rem;

      padding: 1.2rem 0;

      color: var(--Gray50);
    }
  `,
};

export default TYPES;
