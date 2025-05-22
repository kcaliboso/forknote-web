import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import type React from "react";

interface PageSectionProps {
  className?: string;
  sx?: string;
}

const PageSection: React.FC<PropsWithChildren<PageSectionProps>> = ({
  children,
  className = "",
  sx = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-4 px-4 sm:px-6 md:px-8 lg:px-60 lg:py-6 ",
        className
      )}
    >
      <div className={cn("flex-1 flex flex-col h-full", sx)}>{children}</div>
    </div>
  );
};

export default PageSection;
