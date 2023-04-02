import { ResponsiveBarCanvas } from '@nivo/bar'
import data from './data.json'

const progress = [
  {
    progress: 'Progress',
    'goal weight': data.goalWeight,
    'left to lose': data.currentWeight - data.goalWeight,
  },
]

export const ProgressChart = () => (
  <ResponsiveBarCanvas
    data={progress}
    theme={{ textColor: '#dee5ec', grid: { line: { stroke: '#6f7276' } } }}
    keys={['goal weight', 'left to lose']}
    indexBy="progress"
    margin={{ top: 5, right: 5, bottom: 50, left: 5 }}
    pixelRatio={1}
    padding={0.15}
    innerPadding={0}
    minValue="auto"
    maxValue="auto"
    groupMode="stacked"
    layout="horizontal"
    reverse={false}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    colors={['rgb(147, 109, 249, .4)', '#936df9']}
    colorBy="id"
    borderWidth={0}
    borderRadius={0}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 1.6]],
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'Progress',
      legendPosition: 'middle',
      legendOffset: 40,
    }}
    enableGridX={false}
    enableGridY={false}
    enableLabel={true}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: 'color',
      modifiers: [['darker', 3.6]],
    }}
    isInteractive={false}
  />
)
