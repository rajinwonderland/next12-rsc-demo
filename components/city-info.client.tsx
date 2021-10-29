import numeral from "numeral";
import { PropsWithChildren } from "react";
import VerticalItem from "./vertical-item";
export interface CityProps extends PropsWithChildren<{}> {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
}

export default function CityInfo(props: CityProps) {
  return (
    <div className="ph4 mw7 mxauto">
      <h2 className="f2 fw6">Showing Results for {props.city}</h2>
      <div className="flex flex-wrap">
        <VerticalItem label="State" value={props.state} />
        <VerticalItem
          label="Population"
          value={numeral(props.population).format("0a").toUpperCase()}
        />
        <VerticalItem
          label="Growth"
          value={numeral(props.growth_from_2000_to_2013)
            .format("0%")
            .toUpperCase()}
        />
      </div>
      <div className="cf">{props.children}</div>
    </div>
  );
}
