import MainSection from "@/components/Landing/MainSection";
import MainNav from "@/components/common/Nav/MainNav";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isSignin, setIsSignin] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setIsSignin(true);
      router.push("/mydashboard");
    } else setIsSignin(false);
  });
  return (
    <>
      {isSignin || (
        <>
          <Head>
            <meta name="description" content="Taskify helps you manage your tasks with ease. Join now and get organized!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <MainNav />
          <MainSection />
        </>
      )}
    </>
  );
}
