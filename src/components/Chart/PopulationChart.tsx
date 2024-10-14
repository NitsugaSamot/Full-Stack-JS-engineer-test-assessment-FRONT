import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface PopulationData {
  year: number;
  value: number;
}

interface Props {
  populationData: PopulationData[];
}

const PopulationChart: React.FC<Props> = ({ populationData }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);

      const years = populationData.map(data => data.year);
      const values = populationData.map(data => data.value);

      const option = {
        title: {
          text: 'Population over the years',
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: years,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Population',
            type: 'line', 
            data: values,
            smooth: true,
          },
        ],
      };

      chartInstance.setOption(option);

      return () => {
        chartInstance.dispose();
      };
    }
  }, [populationData]);

  return <div ref={chartRef} style={{ height: '400px', width: '100%' }} />;
};

export default PopulationChart;
