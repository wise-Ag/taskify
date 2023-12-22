export const PLACEHOLDER = {
  email: "이메일을 입력해 주세요.",
  password: "비밀번호를 입력해 주세요.",
  nickname: "닉네임을 입력해 주세요.",
  signUpPassword: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
  confirmPassword: "비밀번호를 한 번 더 입력해 주세요.",
};

export const ERROR_MESSAGE = {
  emailRequired: "이메일을 입력해 주세요.",
  emailInvalid: "올바른 이메일 주소가 아닙니다.",
  emailCheck: "이메일을 확인해 주세요.",
  passwordRequired: "비밀번호를 입력해 주세요.",
  passwordInvalid: "영문, 숫자를 조합해 8자 이상 입력해 주세요.",
  passwordCheck: "비밀번호를 확인해 주세요.",
  nicknameRequired: "닉네임을 입력해 주세요.",
  nicknameInvalid: "10자 이하로 작성해 주세요.",
};

export const EMAIL_RULES = {
  required: ERROR_MESSAGE.emailRequired,
  pattern: { value: /\S+@\S+\.\S+/, message: ERROR_MESSAGE.emailInvalid },
};

export const PASSWORD_RULES = {
  required: ERROR_MESSAGE.passwordRequired,
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    message: ERROR_MESSAGE.passwordInvalid,
  },
};
