import React, { useState } from 'react';
import BarChart from './components/BarChart';
import { UserData } from './Data';

export const Graph: React.FunctionComponent = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          '#ff5233',
          '#c074ff',
          '#74acff',
          '#ff79bc',
          '#ffd270',
        ],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  });
  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
};

export default Graph;
