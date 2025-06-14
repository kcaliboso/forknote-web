import { Outlet, useLocation } from "react-router";
import PageSection from "../components/sections/page-section";
import Header from "@/components/header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/footer";

export default function DefaultLayout() {
  gsap.registerPlugin(useGSAP);
  const location = useLocation();

  useGSAP(() => {
    if (location.pathname === "/") {
      const timeline = gsap.timeline();
      timeline.fromTo(
        "#header",
        {
          y: -100,
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

      timeline.from(
        ".hero-button",
        {
          autoAlpha: 0,
          y: 25,
          duration: 0.15,
          ease: "circ.inOut",
        },
        "<+0.30"
      );
    }
  });
  return (
    <>
      <PageSection>
        <Header />
        <Outlet />
        <Footer />
      </PageSection>
    </>
  );
}
