import dt from "dayjs";
import { fToC } from "lib/convert";
import { getWeather } from "lib/openweather";
import useData from "lib/use-data";
import { Suspense } from "react";
import { CityProps } from "./city-info.client";
import { StatBlock } from "./stat-block";
import StatItem from "./stat-item";

export interface CurrentWeatherProps {
  city: CityProps;
}
export default function CurrentWeather({ city }: CurrentWeatherProps) {
  const data = useData(
    `${dt().format("YY-MM-DD-hhA")}-${city.longitude}${city.latitude}-weather`,
    () => getWeather(city)
  );
  return (
    <Suspense fallback={<div />}>
      {data?.main && (
        <StatBlock title="Today's Weather">
          <StatItem
            label={"Temperature"}
            value={`${data?.main?.temp.toFixed(0)}℉`}
            etc={`${fToC(data?.main?.temp)}℃`}
          />
          <StatItem
            label={"High"}
            value={`${data?.main?.temp_max.toFixed(0)}℉`}
            etc={`${fToC(data?.main?.temp_max)}℃`}
          />
          <StatItem
            label={"Low"}
            value={`${data?.main?.temp_min.toFixed(0)}℉`}
            etc={`${fToC(data?.main?.temp_min)}℃`}
          />
          <StatItem label={"Humidity"} value={`${data?.main?.humidity}%`} />
        </StatBlock>
      )}
    </Suspense>
  );
}
