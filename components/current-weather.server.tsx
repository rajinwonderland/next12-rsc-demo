import { fToC } from "lib/convert";
import { getWeather } from "lib/openweather";
import useData from "lib/use-data";
import { Suspense } from "react";
import { CityProps } from "./city-info.client";
import { StatBlock } from "./stat-block";
import StatItem, { StatItemLoading } from "./stat-item";

export interface CurrentWeatherProps {
  city: CityProps;
}
export default function CurrentWeather({ city }: CurrentWeatherProps) {
  const { main } = useData(
    `${new Date().toLocaleDateString()}-${city.longitude}${
      city.latitude
    }-weather`,
    () => getWeather(city)
  );
  return (
    <Suspense fallback={<StatItemLoading />}>
      <StatBlock title="Today's Weather">
        <StatItem
          label={"Temperature"}
          value={`${main.temp.toFixed(0)}℉`}
          etc={`${fToC(main.temp)}℃`}
        />
        <StatItem
          label={"High"}
          value={`${main.temp_max.toFixed(0)}℉`}
          etc={`${fToC(main.temp_max)}℃`}
        />
        <StatItem
          label={"Low"}
          value={`${main.temp_min.toFixed(0)}℉`}
          etc={`${fToC(main.temp_min)}℃`}
        />
        <StatItem label={"Humidity"} value={`${main.humidity}%`} />
      </StatBlock>
    </Suspense>
  );
}
