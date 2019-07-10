import React from 'react';
// import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, Charts);

// Resolves charts dependancy
// charts(FusionCharts);

const dataSource = {
  chart: {
    caption: 'Skill Analysis',
    subcaption: 'Scale: 0 (low) to 100 (high)',
    theme: 'fusion',
    showlegend: '0',
    showdivlinevalues: '0',
    showlimits: '0',
    showvalues: '1',
    plotfillalpha: '40',
    plottooltext: "Harry's <b>$label</b> skill is rated as <b>$value</b>",
  },
  categories: [
    {
      category: [
        {
          label: 'Teamplay',
        },
        {
          label: 'Sang-froid',
        },
        {
          label: 'Analise',
        },
        {
          label: 'Compétitivité',
        },
        {
          label: 'Experience',
        },
        {
          label: 'Prise d’initiative',
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: 'User Ratings',
      data: [
        {
          value: '1',
        },
        {
          value: '3',
        },
        {
          value: '4',
        },
        {
          value: '3',
        },
        {
          value: '2',
        },
        {
          value: '4',
        },
      ],
    },
  ],
};

// eslint-disable-next-line react/prefer-stateless-function
class Chart extends React.Component {
  render() {
    return (
      <ReactFC
        type="radar"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default Chart;
