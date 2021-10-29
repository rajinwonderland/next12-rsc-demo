import Autocomplete from "components/autocomplete";
import { StatItemLoading } from "components/stat-item";
import TempStat from "components/temp-stat.server";
import { options } from "lib/acis-options";
import Head from "next/head";
import { Suspense, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CityInfo from "../components/city-info.client";
import { MonthlyChart } from "../components/monthly-chart.server";
import { YearlyChart } from "../components/yearly-chart.server";
export default function Home() {
  const [city, setCity] = useState({
    city: "Irvine",
    growth_from_2000_to_2013: "61.3%",
    latitude: 33.6839473,
    longitude: -117.7946942,
    population: "236716",
    rank: "85",
    state: "California",
  });

  return (
    <div>
      <Head>
        <title>Temperature Demo</title>
        <meta
          name="description"
          content="Applied Climate Information System – Temperature Demo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Autocomplete onChange={(s) => setCity(s)} />
      <CityInfo {...city}>
        <Suspense fallback={<StatItemLoading />}>
          <TempStat city={city} label="Average Temperature" type="avgTemp" />
        </Suspense>
        <Suspense fallback={<StatItemLoading />}>
          <TempStat city={city} label="Lowest Temperature" type="minTemp" />
        </Suspense>
        <Suspense fallback={<StatItemLoading />}>
          <TempStat city={city} label="Highest Temperature" type="maxTemp" />
        </Suspense>
      </CityInfo>
      <div className="mxauto mw7 pa4">
        <div className="f5 fw5 pb4">{options.yearly.title}</div>
        <Suspense fallback={<Skeleton height={350} />}>
          <YearlyChart city={city} />
        </Suspense>
      </div>
      <div className="mxauto mw7 pa4">
        <div className="f5 fw5 pb4">{options.monthly.title}</div>
        <Suspense fallback={<Skeleton height={350} />}>
          <MonthlyChart city={city} />
        </Suspense>
      </div>
    </div>
  );
}
