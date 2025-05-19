import { Outlet } from "react-router";
import PageSection from "../components/sections/page-section";
import Header from "@/components/header";

const DefaultLayout = () => {
  return (
    <>
      <PageSection className="flex flex-col w-full h-full lg:px-4" sx="px-4">
        <Header />
        <Outlet />
      </PageSection>
    </>
  );
};

export default DefaultLayout;
