import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from './statistic.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const initialData = {
  labels: ['Completed', 'It`s left'],
  datasets: [
    {
      label: '% is complete',
      data: [20, 80],
      backgroundColor: ['rgba(10, 215, 6, 1)', 'rgba(0, 107, 23, 1)'],
      borderColor: ['rgba(10, 215, 6, 1)', 'rgba(0, 107, 23, 1)'],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const Statistic = () => {
  const [chartData, setChartData] = useState(initialData);
  const [visibility, setVisibility] = useState([true, true]);

  const handleLegendClick = index => {
    const newVisibility = visibility.map((v, i) => (i === index ? !v : v));
    setVisibility(newVisibility);

    const newData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: chartData.datasets[0].data.map((value, i) =>
            newVisibility[i] ? initialData.datasets[0].data[i] : 0
          ),
        },
      ],
    };
    setChartData(newData);
  };

  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <h3 className={styles.title}>Your progress</h3>
        <p className={styles.desc}>
          Learn without interruption and get achievements. You will succeed!
        </p>
        <ul>
          {chartData.labels.map((label, index) => (
            <li
              key={index}
              className={`${styles.legendItem} ${
                !visibility[index] ? styles.disabled : ''
              }`}
              style={{
                '--circle-color': chartData.datasets[0].backgroundColor[index],
              }}
              onClick={() => handleLegendClick(index)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <Pie className={styles.statistic} data={chartData} options={options} />
    </div>
  );
};

export default Statistic;

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import styles from './statistic.module.css';

// ChartJS.register(ArcElement, Tooltip);

// export const data = {
//   labels: ['Completed', 'It`s left'],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [20, 80],
//       backgroundColor: ['rgba(10, 215, 6, 1)', 'rgba(0, 107, 23, 1)'],
//       borderColor: ['rgba(10, 215, 6, 1)', 'rgba(0, 107, 23, 1)'],
//       borderWidth: 1,
//     },
//   ],
// };

// const Statistic = () => {
//   return (
//     <div className={styles.main}>
//       <div className={styles.text}>
//         <h3>Your progress</h3>
//         <p>
//           Learn without interruption and get achievements. You will succeed!
//         </p>
//         <ul>
//           {data.labels.map((label, index) => (
//             <li
//               key={index}
//               //   style={{ color: data.datasets[0].backgroundColor[index] }}
//             >
//               {label}
//             </li>
//           ))}
//         </ul>
//         {/* <ul>
//           <li>Completed</li>
//           <li>It's left</li>
//         </ul> */}
//       </div>
//       <Pie className={styles.statistic} data={data} />
//     </div>
//   );
// };

// export default Statistic;
