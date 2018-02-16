import '../scss/charts.scss';

import ScatterChart from './charts/ScatterChart';
import MultiAxisChart from './charts/MultiAxisChart';
import PercentageChart from './charts/PercentageChart';
import PieChart from './charts/PieChart';
import Heatmap from './charts/Heatmap';
import AxisChart from './charts/AxisChart';

// if (ENV !== 'production') {
// 	// Enable LiveReload
// 	document.write(
// 		'<script src="http://' + (location.host || 'localhost').split(':')[0] +
// 		':35729/livereload.js?snipver=1"></' + 'script>'
// 	);
// }

// If type is bar




const chartTypes = {
	mixed: AxisChart,
	multiaxis: MultiAxisChart,
	scatter: ScatterChart,
	percentage: PercentageChart,
	heatmap: Heatmap,
	pie: PieChart
};

function getChartByType(chartType = 'line', options) {
	if(chartType === 'line') {
		options.unitType = 'line';
		return new AxisChart(options);
	} else if (chartType === 'bar') {
		options.unitType = 'bar';
		return new AxisChart(options);
	}

	if (!chartTypes[chartType]) {
		console.error("Undefined chart type: " + chartType);
		return;
	}

	return new chartTypes[chartType](options);
}

export default class Chart {
	constructor(args) {
		return getChartByType(args.type, arguments[0]);
	}
}
