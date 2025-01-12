'use client';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(Colors);

function PieChartDistribution() {
  return (
    <div style={{ width: '350px', height: '200px', overflow: 'hidden' }}>
      <Doughnut
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: {
                usePointStyle: true,
                boxWidth: 10,
                padding: 10,
              },
            },
          },
        }}
        data={{
          datasets: [
            {
              data: [80, 20],
              backgroundColor: ['#3b82f6', '#f97316'],
            },
          ],
          labels: ['Crowdsale Investors: 80%', 'Foundation: 20%'],
        }}
      />
    </div>
  );
}

export default PieChartDistribution;
