import { Outlet } from "react-router";
import PageSection from "../components/sections/page-section";
import Header from "@/components/header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function DefaultLayout() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.fromTo(
      "#header",
      {
        y: -75,
      },
      {
        duration: 0.75,
        ease: "circ.inOut",
        y: 0,
      }
    );

    timeline.from(
      ".hero-text",
      {
        yPercent: 60,
        duration: 0.3,
        autoAlpha: 0,
        stagger: 0.1,
        ease: "circ.inOut",
      },
      "<+0.25"
    );

    timeline.fromTo(
      ".hero-button",
      {
        y: 25,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.15,
        ease: "circ.inOut",
      },
      "<+0.2"
    );
  });
  return (
    <>
      <PageSection className="w-full h-full min-h-screen">
        <Header />
        <Outlet />
      </PageSection>
    </>
  );
}
