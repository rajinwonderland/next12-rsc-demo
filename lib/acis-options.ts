export const yearBody = (lng: number, lat: number) => ({
  loc: `${lng}, ${lat}`,
  sdate: "2010",
  grid: "1",
  elems: [
    {
      name: "avgt",
      interval: "yly",
      duration: "yly",
      reduce: "mean",
      units: "degreeF",
    },
    {
      name: "maxt",
      interval: "yly",
      duration: "yly",
      reduce: "max",
      units: "degreeF",
    },
    {
      name: "mint",
      interval: "yly",
      duration: "yly",
      reduce: "min",
      units: "degreeF",
    },
  ],
  edate: "2020",
});

export const mthBody = (lng: number, lat: number) => ({
  loc: `${lng}, ${lat}`,
  grid: "1",
  edate: "202012",
  elems: [
    {
      name: "avgt",
      interval: "mly",
      duration: "mly",
      reduce: "mean",
      units: "degreeF",
    },
    {
      name: "maxt",
      interval: "mly",
      duration: "mly",
      reduce: "max",
      units: "degreeF",
    },
    {
      name: "mint",
      interval: "mly",
      duration: "mly",
      reduce: "min",
      units: "degreeF",
    },
  ],
  sdate: "201901",
});

const lines = [
  { stroke: "#EF4444", dataKey: "maxTemp" },
  { stroke: "#3B82F6", dataKey: "minTemp" },
  { stroke: "#6B7280", dataKey: "avgTemp" },
];

export const getDefaultStatBody = (lng: number, lat: number) => ({
  loc: `${lng}, ${lat}`,
  grid: "1",
  sdate: "19500101",
  edate: "20201231",
});

export const options = {
  yearly: {
    title: "Yearly Temperatures from 2010-2020",
    body: (lng: number, lat: number) => yearBody(lng, lat),
    xKey: "period",
    lines,
  },
  monthly: {
    title: "Monthly Temperatures from Jan 2019 - Dec 2020",
    body: (lng: number, lat: number) => mthBody(lng, lat),
    xKey: "period",
    lines,
  },
  maxTemp: {
    label: "Max Temperature",
    body: (lng: number, lat: number) => ({
      ...getDefaultStatBody(lng, lat),
      elems: [
        {
          name: "maxt",
          interval: "dly",
          duration: "dly",
          reduce: "max",
          smry: "max",
          smry_only: "1",
          units: "degreeF",
        },
      ],
    }),
  },
  minTemp: {
    label: "Min Temperature",
    body: (lng: number, lat: number) => ({
      ...getDefaultStatBody(lng, lat),
      elems: [
        {
          name: "mint",
          interval: "dly",
          duration: "dly",
          reduce: "min",
          smry: "min",
          smry_only: "1",
          units: "degreeF",
        },
      ],
    }),
  },
  avgTemp: {
    label: "Avg Temperature",
    body: (lng: number, lat: number) => ({
      ...getDefaultStatBody(lng, lat),
      sdate: "20100101",
      elems: [
        {
          name: "avgt",
          interval: "dly",
          duration: "dly",
          reduce: "mean",
          smry: "mean",
          smry_only: "1",
          units: "degreeF",
        },
      ],
    }),
  },
};
