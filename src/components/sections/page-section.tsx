import type { PropsWithChildren } from "react";
import type React from "react";

interface PageSectionProps {
  className: string;
  sx: string;
}

const PageSection: React.FC<PropsWithChildren<PageSectionProps>> = ({
  children,
  className = "",
  sx = "",
}) => {
  return (
    <div className={className}>
      <div className={sx}>{children}</div>
    </div>
  );
};

export default PageSection;
