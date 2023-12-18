import styled, { css } from "styled-components";

interface ButtonTypeStyles {
  [key: string]: {
    S: ReturnType<typeof css>;
    M: ReturnType<typeof css>;
    L: ReturnType<typeof css>;
  };
}

const TYPES = {
  login: {
    S: css`
      width: 35.1rem;
      padding: 1.4rem 0;
      background-color: var(--Main);
      color: var(--White);
      font-size: 1.8rem;
      font-weight: 500;
      border: none;

      &:disabled {
        background-color: var(--Gray40);
        cursor: not-allowed;
        border: none;
      }
    `,
    M: css`
      width: 52rem;
      padding: 1.4rem 0;
      background-color: var(--Main);
      color: var(--White);
      font-size: 1.8rem;
      font-weight: 500;
      border: none;

      &:disabled {
        background-color: var(--Gray40);
        cursor: not-allowed;
        border: none;
      }
    `,
    L: css`
      width: 52rem;
      padding: 1.4rem 0;
      background-color: var(--Main);
      color: var(--White);
      font-size: 1.8rem;
      font-weight: 500;
      border: none;

      &:disabled {
        background-color: var(--Gray40);
        cursor: not-allowed;
        border: none;
      }
    `,
  },
  accept: {
    S: css`
      width: 10.9rem;
      padding: 0.7rem 0;
      border-radius: 4px;
      background-color: var(--Main);
      color: var(--White);
      font-size: 1.2rem;
      border: none;
    `,
    M: css`
      width: 7.2rem;
      padding: 0.6rem 0;
      border-radius: 4px;
      background-color: var(--Main);
      color: var(--White);
      border: none;
    `,
    L: css`
      width: 8.4rem;
      padding: 0.7rem 0;
      border-radius: 4px;
      background-color: var(--Main);
      color: var(--White);
      border: none;
    `,
  },
  reject: {
    S: css`
      width: 10.9rem;
      padding: 0.7rem 0;
      border-radius: 4px;
      font-size: 1.2rem;
      color: var(--Main);
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
  delete: {
    S: css`
      width: 5.2rem;
      padding: 0.7rem 0;
      border-radius: 4px;
      color: var(--Main);
      font-size: 1.2rem;
    `,
    M: css`
      width: 8.4rem;
      padding: 0.7rem 0;
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
  addNewColumn: {
    S: css`
      width: 28.4rem;
      padding: 2rem 0;
      gap: 1.2rem;
      font-size: 1.6rem;
      font-weight: 700;
    `,
    M: css`
      width: 54.4rem;
      padding: 2.45rem 0;
      gap: 1.2rem;
      font-size: 1.8rem;
      font-weight: 700;
    `,
    L: css`
      width: 35.4rem;
      padding: 2.45rem 0;
      gap: 1.2rem;
      font-size: 1.8rem;
      font-weight: 700;
    `,
  },
  plus: {
    S: css`
      width: 28.4rem;
      padding: 0.6rem 0;
      border-radius: 6px;
    `,
    M: css`
      width: 54.4rem;
      padding: 0.9rem 0;
      border-radius: 6px;
    `,
    L: css`
      width: 31.4rem;
      padding: 0.9rem 0;
      border-radius: 6px;
    `,
  },
  deleteDashboard: {
    S: css`
      width: 28.4rem;
      padding: 1.6rem 0;
      background-color: var(--Gray10);
      font-size: 1.6rem;
    `,
    M: css`
      width: 32rem;
      padding: 2rem 0;
      background-color: var(--Gray10);
      font-size: 1.8rem;
    `,
    L: css`
      width: 32rem;
      padding: 2rem 0;
      background-color: var(--Gray10);
      font-size: 1.8rem;
    `,
  },
  forward: {
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
  backward: {
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
  newDashboard: {
    S: css`
      width: 26rem;
      padding: 1.9rem 0;
      gap: 1.2rem;
      font-size: 1.6rem;
      font-weight: 600;
    `,
    M: css`
      width: 24.7rem;
      padding: 2.3rem 0;
      gap: 1.2rem;
      font-size: 1.6rem;
      font-weight: 600;
    `,
    L: css`
      width: 33.2rem;
      padding: 2.4rem 0;
      gap: 1.2rem;
      font-size: 1.6rem;
      font-weight: 600;
    `,
  },
  dashboardList: {
    S: css`
      justify-content: space-between;
      width: 26rem;
      padding: 2rem 2rem;
      font-weight: 600;
    `,
    M: css`
      justify-content: space-between;
      width: 24.7rem;
      padding: 2.45rem 2rem;
      font-size: 1.6rem;
      font-weight: 600;
    `,
    L: css`
      justify-content: space-between;
      width: 33.2rem;
      padding: 2.55rem 2rem;
      font-size: 1.6rem;
      font-weight: 600;
    `,
  },
  invite: {
    S: css`
      width: 8.6rem;
      padding: 0.7rem 0;
      gap: 0.6rem;
      background-color: var(--Main);
      color: var(--White);
      font-size: 1.2rem;
    `,
    M: css`
      width: 10.5rem;
      padding: 0.75rem 0;
      gap: 0.8rem;
      background-color: var(--Main);
      color: var(--White);
    `,
    L: css`
      width: 10.5rem;
      padding: 0.75rem 0;
      gap: 0.8rem;
      background-color: var(--Main);
      color: var(--White);
    `,
  },
  modalInput: {
    S: css`
      width: 8.4rem;
      padding: 0.9rem 0;
      color: var(--Main);
      font-size: 1.2rem;
    `,
    M: css`
      width: 7.8rem;
      padding: 0.9rem 0;
      color: var(--Main);
      font-size: 1.2rem;
    `,
    L: css`
      width: 8.3rem;
      padding: 0.9rem 0;
      color: var(--Main);
      font-size: 1.2rem;
    `,
  },
  modalCancel: {
    S: css`
      width: 13.8rem;
      padding: 1.2rem 0;
      color: var(--Main);
    `,
    M: css`
      width: 12rem;
      padding: 1.4rem 0;
      color: var(--Main);
      font-size: 1.6rem;
    `,
    L: css`
      width: 12rem;
      padding: 1.4rem 0;
      color: var(--Main);
      font-size: 1.6rem;
    `,
  },
  modalBasic: {
    S: css`
      width: 13.8rem;
      padding: 1.2rem 0;
      background-color: var(--Main);
      color: var(--White);
    `,
    M: css`
      width: 12rem;
      padding: 1.4rem 0;
      color: var(--Main);
      background-color: var(--Main);
      color: var(--White);
    `,
    L: css`
      width: 12rem;
      padding: 1.4rem 0;
      color: var(--Main);
      background-color: var(--Main);
      color: var(--White);
    `,
  },
};

const StyledSpan = styled.span`
  margin: 0 0.8rem 0 1.6rem;
`;

export { TYPES, StyledSpan };
