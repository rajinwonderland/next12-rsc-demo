import { PropsWithChildren } from "react";

export default function ChartWrapper(
  props: PropsWithChildren<{ title: string }>
) {
  return (
    <div className="chart">
      <div className="f5 fw5 pb4">{props.title}</div>
      {props.children}
    </div>
  );
}
