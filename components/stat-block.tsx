import { PropsWithChildren } from "react";

export function StatBlock({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="cf">
      {title && <h3 className="f4 mb0">{title}</h3>}
      <div className="flex">{children}</div>
    </div>
  );
}
