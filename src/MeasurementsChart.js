import { ResponsiveLineCanvas } from "@nivo/line";

import data from "./data.json";

export const MeasurementsChart = () => (
  <ResponsiveLineCanvas
    data={data.measurements}
    theme={{ textColor: "#dee5ec", grid: { line: { stroke: "#6f7276" } } }}
    enableGridY={false}
    margin={{ top: 15, right: 15, bottom: 50, left: 60 }}
    xScale={{
      type: "time",
      format: "%Y-%m-%d",
      precision: "day"
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{ type: "linear", stacked: false, min: 10, max: 35 }}
    curve="linear"
    axisBottom={{
      format: "%b %d",
      tickValues: "every day",
      legend: "Date",
      legendOffset: 40,
      legendPosition: "middle"
    }}
    axisLeft={{
      tickPadding: 5,
      tickRotation: 0,
      legend: "Inches",
      legendOffset: -50,
      legendPosition: "middle"
    }}
    colors={["#ff67f7", "#59abf7"]}
    pointSize={8}
    pointColor={["#000"]}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    isInteractive={false}
  />
);
