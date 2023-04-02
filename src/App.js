import { WeightLossChart } from "./WeightLossChart";
import { MeasurementsChart } from "./MeasurementsChart";
import { ProgressChart } from "./ProgressChart";
import { CaloriesChart } from "./CaloriesChart";

import data from "./data.json";

export const App = () => {
  return (
    <main>
      <div className="container">
        <h1>Dashboard</h1>

        <div className="grid">
          <div className="card">
            <h3>Current Weight</h3>
            <div className="large">{data.currentWeight}</div>
          </div>
          <div className="card">
            <h3>Goal Weight</h3>
            <div className="large">{data.goalWeight}</div>
          </div>
          <div className="card">
            <h3>Pounds to Lose</h3>
            <div className="large">
              {(data.currentWeight - data.goalWeight).toFixed(1)}
            </div>
          </div>
          <div className="card">
            <h3>Days w/o Alcohol (Jan)</h3>
            <div className="large">{data.noAlcohol}/31</div>
          </div>
          <div className="card">
            <h3>BMI</h3>
            <div className="large">{((147 * 703) / (65 * 65)).toFixed(1)}</div>
          </div>
          <div className="column">
            <div className="card small-chart-container">
              <ProgressChart />
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="column">
            <h2>Weight Over Time</h2>
            <div className="card chart-container">
              <WeightLossChart />
            </div>
          </div>
          <div className="column">
            <h2>Measurements</h2>
            <div className="card chart-container">
              <MeasurementsChart />
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="column">
            <h2>Calories</h2>
            <div className="card chart-container">
              <CaloriesChart />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
