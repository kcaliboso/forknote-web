import { Outlet } from "react-router";
import PageSection from "../components/sections/page-section";
import Header from "../components/header";

const DefaultLayout = () => {
  return (
    <>
      <PageSection
        className="flex flex-col w-full h-full lg:px-2"
        sx="px-4 lg:px-8"
      >
        <Header />
        <Outlet />
      </PageSection>
    </>
  );
};

export default DefaultLayout;
