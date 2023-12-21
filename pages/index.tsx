import Head from "next/head";
import MainNav from "@/components/Nav/MainNav";
import MainSection from "@/components/Landing/MainSection";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Taskify helps you manage your tasks with ease. Join now and get organized!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainNav />
      <MainSection />
    </>
  );
}
