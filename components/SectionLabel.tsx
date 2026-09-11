import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  side?: "left" | "right";
}

export default function SectionLabel({
  children,
  className,
  style,
  side = "left",
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "section-label flex items-center gap-2",
        side === "right" && "justify-end",
        className
      )}
      style={style}
    >
      <span
        style={{
          display: "inline-block",
          width: 16,
          height: 1,
          backgroundColor: "currentColor",
          flexShrink: 0,
        }}
      />
      {children}
    </div>
  );
}
