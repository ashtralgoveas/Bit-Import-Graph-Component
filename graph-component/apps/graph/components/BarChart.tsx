import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface IAppProps {
  chartData: {
    labels: number[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
    }[];
  };
}

const BarChart: React.FunctionComponent<IAppProps> = ({ chartData }) => {
  return <Bar data={chartData} />;
};

export default BarChart;
