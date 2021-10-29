import Skeleton from "react-loading-skeleton";
import Spinner from "./spinner";

export default function StatItem({
  label,
  value,
  className,
  etc,
}: {
  label: string;
  value: any;
  className?: string;
  etc: string;
}) {
  return (
    <dl className={`fl fn-l w-50 dib-l w-auto-l lh-title mr5-l ${className}`}>
      <dd className="f6 fw4 ml0">{label}</dd>
      <dd className="f3 fw6 ml0">{value}</dd>
      {etc && <dd className="f6 ml0">{etc}</dd>}
    </dl>
  );
}

export function StatItemLoading() {
  return (
    <div className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
      <Skeleton className="f6 fw4 ml0" />
      <div className="f3 fw6 ml0">
        <Spinner />
      </div>
    </div>
  );
}
