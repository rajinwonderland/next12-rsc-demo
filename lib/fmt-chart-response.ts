const fmtChartItem = (x: any[]) => {
  return {
    period: x[0],
    avgTemp: x[1],
    maxTemp: x[2],
    minTemp: x[3],
  };
};

const fmtChartResult = (result: any) => {
  return result?.data?.map((x: any[]) => fmtChartItem(x));
};

export default fmtChartResult;
