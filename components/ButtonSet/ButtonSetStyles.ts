import { css } from "styled-components";

interface ButtonTypeStyles {
  [key: string]: {
    S: ReturnType<typeof css>;
    M: ReturnType<typeof css>;
    L: ReturnType<typeof css>;
  };
}

const TYPES = {
  accept: {
    S: css`
      width: 10.9rem;

      padding: 0.7rem 0;
      border-radius: 4px;
      border: none;

      background-color: var(--Main);

      color: var(--White);
      font-size: 1.2rem;
    `,
    M: css`
      width: 7.2rem;

      padding: 0.6rem 0;
      border-radius: 4px;
      border: none;

      background-color: var(--Main);

      color: var(--White);
    `,
    L: css`
      width: 8.4rem;

      padding: 0.7rem 0;
      border-radius: 4px;
      border: none;

      background-color: var(--Main);

      color: var(--White);
    `,
  },
  reject: {
    S: css`
      width: 10.9rem;

      padding: 0.7rem 0;
      border-radius: 4px;

      color: var(--Main);
      font-size: 1.2rem;
    `,
    M: css`
      width: 7.2rem;

      padding: 0.6rem 0;
      border-radius: 4px;

      color: var(--Main);
    `,
    L: css`
      width: 8.4rem;

      padding: 0.7rem 0;
      border-radius: 4px;

      color: var(--Main);
    `,
  },
  forward: {
    S: css`
      width: 3.6rem;
      height: 3.6rem;

      border-radius: 0 4px 4px 0;

      &:disabled {
        svg {
          fill: var(--Gray30);
        }
      }
    `,
    M: css`
      width: 4rem;
      height: 4rem;

      border-radius: 0 4px 4px 0;

      &:disabled {
        svg {
          fill: var(--Gray30);
        }
      }
    `,
    L: css`
      width: 4rem;
      height: 4rem;

      border-radius: 0 4px 4px 0;

      &:disabled {
        svg {
          fill: var(--Gray30);
        }
      }
    `,
  },
  backward: {
    S: css`
      width: 3.6rem;
      height: 3.6rem;

      border-radius: 0 4px 4px 0;

      transform: scaleX(-1);
      &:disabled {
        svg {
          fill: var(--Gray30);
        }
      }
    `,
    M: css`
      width: 4rem;
      height: 4rem;

      border-radius: 0 4px 4px 0;

      transform: scaleX(-1);
      &:disabled {
        svg {
          fill: var(--Gray30);
        }
      }
    `,
    L: css`
      width: 4rem;
      height: 4rem;

      border-radius: 0 4px 4px 0;

      transform: scaleX(-1);
      &:disabled {
        svg {
          fill: var(--Gray30);
        }
      }
    `,
  },
  basic: {
    S: css`
      width: 13.8rem;

      padding: 1.2rem 0;
      border: none;

      background-color: var(--Main);

      color: var(--White);
    `,
    M: css`
      width: 12rem;

      padding: 1.4rem 0;
      border: none;

      background-color: var(--Main);

      color: var(--White);
      font-size: 1.6rem;
    `,
    L: css`
      width: 12rem;

      padding: 1.4rem 0;
      border: none;

      background-color: var(--Main);

      color: var(--White);
      font-size: 1.6rem;
    `,
  },
  cancel: {
    S: css`
      width: 13.8rem;

      padding: 1.2rem 0;

      color: var(--Gray50);
    `,
    M: css`
      width: 12rem;

      padding: 1.4rem 0;

      color: var(--Gray50);
      font-size: 1.6rem;
    `,
    L: css`
      width: 12rem;

      padding: 1.4rem 0;

      color: var(--Gray50);
      font-size: 1.6rem;
    `,
  },
};

export default TYPES;
