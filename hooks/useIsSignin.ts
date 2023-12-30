import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useIsSignin = (redirectPath?: string) => {
  const router = useRouter();
  const [isSignin, setIsSignin] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsSignin(true);
      if (redirectPath) router.push(redirectPath);
    } else setIsSignin(false);
  });

  return { isSignin };
};
