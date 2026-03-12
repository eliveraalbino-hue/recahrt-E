import React from 'react';
import Linechart from '../components/ui/LineChart';
import Barchart from '../components/ui/BarChart';
import Echart from '../components/ui/EChart';

export default function Welcome() {
  return (
    <div>
      <div>My very first data visualization Elivera</div>

      <Linechart />
      <Barchart />
      <Echart />
    </div>
  );
}