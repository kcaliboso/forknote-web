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
        "h-screen flex flex-col justify-center py-4 px-4 sm:px-6 md:px-8 xl:px-60 lg:py-6 ",
        className
      )}
    >
      <div
        className={cn("flex flex-col gap-8 lg:gap-2 h-[calc(100vh-64px)]", sx)}
      >
        {children}
      </div>
    </div>
  );
};

export default PageSection;
