import MainSection from "@/components/Landing/MainSection";
import TaskModal from "@/components/Modal/TaskModal";
import MainNav from "@/components/common/Nav/MainNav";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Taskify helps you manage your tasks with ease. Join now and get organized!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <MainNav />
      <MainSection /> */}
      <TaskModal />
    </>
  );
}
