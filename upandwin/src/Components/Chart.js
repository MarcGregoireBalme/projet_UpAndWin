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
    caption: 'Skill Analysis of Harry',
    subcaption: 'Scale: 1 (low) to 5 (high)',
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
          label: 'Communication',
        },
        {
          label: 'Punctuality',
        },
        {
          label: 'Problem Solving',
        },
        {
          label: 'Meeting Deadlines',
        },
        {
          label: 'Team Player',
        },
        {
          label: 'Technical Knowledge',
        },
      ],
    },
  ],
  dataset: [
    {
      seriesname: 'User Ratings',
      data: [
        {
          value: '3',
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
class MyComponent extends React.Component {
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

export default MyComponent;
