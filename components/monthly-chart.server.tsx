import { options } from "lib/acis-options";
import fetchAcisData from "lib/fetch-acis-data";
import fmtChartResult from "lib/fmt-chart-response";
import useData from "lib/use-data";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import Chart from "./chart.client";
import { CityProps } from "./city-info.client";

export function MonthlyChart({ city }: { city: CityProps }) {
  const body = options.monthly.body(city.longitude, city.latitude);
  const data = useData(`monthly-${city.longitude}${city.latitude}-chart`, () =>
    fetchAcisData(body).then(fmtChartResult)
  );
  return (
    <Suspense fallback={<Skeleton height={350} />}>
      <Chart data={data} {...options.monthly} />
    </Suspense>
  );
}
