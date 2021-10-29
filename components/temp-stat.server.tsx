import { options } from "lib/acis-options";
import { fToC } from "lib/convert";
import fetchAcisData from "lib/fetch-acis-data";
import fmtSmryResult from "lib/fmt-smy-result";
import useData from "lib/use-data";
import { Suspense } from "react";
import { CityProps } from "./city-info.client";
import StatItem, { StatItemLoading } from "./stat-item";

export interface TempStat {
  type: keyof typeof options;
  city: CityProps;
  label: string;
}
export default function TempStat({ type, city, label }: TempStat) {
  const body = options[type].body(city.longitude, city.latitude);
  const value = useData(`${type}-${city.longitude}${city.latitude}-stat`, () =>
    fetchAcisData(body).then(fmtSmryResult)
  );
  return (
    <Suspense fallback={<StatItemLoading />}>
      <StatItem label={label} value={`${value}℉`} etc={`${fToC(value)}℃`} />
    </Suspense>
  );
}
