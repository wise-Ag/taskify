export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  cardId: number;
  author: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
}

export interface CommentData {
  comments: Comment[];
  cursorId: number;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export const MOCK_DATA: Task = {
  id: 3,
  title: "오늘할일정하기",
  description:
    "이 편지는 영국에서 최초로 시작되어 일년에 한바퀴를 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다. 이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다. 복사를 해도 좋습니다. 혹 미신이라 하실지 모르지만 사실입니다. WCH이라는 사람은 어쩌구저쩌구",
  tags: ["일상", "필수", "프론트", "상"],
  dueDate: "2023.12.20. 17:00",
  assignee: {
    profileImageUrl:
      "https://mblogthumb-phinf.pstatic.net/MjAxODEwMTFfMTAy/MDAxNTM5MjI1OTcxNDc0.5Ww2lzCMKDp4TiuZ-V1sPYWJW2xg3rKPylziQ59iXWEg.GreYoty0qMT_4n_UkUkPGVVH8mJjv0tGl_YLI9eLpvYg.PNG.pola0216/%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD%EF%BF%BD_22.png?type=w800",
    nickname: "멋쟁이토마토",
    id: 1,
  },
  imageUrl: "https://i.pinimg.com/564x/46/cb/8b/46cb8b3ea03237da9c847baaf9e0ec43.jpg",
  teamId: "1-08",
  columnId: 3,
  createdAt: "2023-12-23T12:37:14.500Z",
  updatedAt: "2023-12-23T12:37:14.500Z",
};

export const COMMENT_MOCK_DATA: CommentData = {
  cursorId: 123,
  comments: [
    {
      id: 1,
      content: "첫 번째 댓글",
      createdAt: "2023-12-25T10:30:00Z",
      updatedAt: "2023-12-25T10:35:00Z",
      cardId: 123.45,
      author: {
        profileImageUrl: "https://t1.daumcdn.net/cfile/tistory/99867C335C780BEE26",
        nickname: "User1",
        id: 101,
      },
    },
    {
      id: 2,
      content: "두 번째 댓글",
      createdAt: "2023-12-25T11:15:00Z",
      updatedAt: "2023-12-25T11:20:00Z",
      cardId: 123.45,
      author: {
        profileImageUrl: "https://i.pinimg.com/236x/f2/cb/db/f2cbdb972f8d68b0cd66dac681af6e9f.jpg",
        nickname: "User2",
        id: 102,
      },
    },
    {
      id: 3,
      content: "세 번째 댓글 으아아아아아아아아아",
      createdAt: "2023-12-25T12:00:00Z",
      updatedAt: "2023-12-25T12:05:00Z",
      cardId: 123.45,
      author: {
        profileImageUrl: "https://image.cine21.com/resize/cine21/still/2005/1027/M0020038_wallace_gromit_24[S800,800].jpg",
        nickname: "User3",
        id: 103,
      },
    },
  ],
};
