class Questions {
    constructor(q1, q2, q3) {
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
    }

    printChartsBar(chart1, chart2, chart3) {
        this.q1.chartBar(chart1);
        this.q2.chartBar(chart2);
        this.q3.chartBar(chart3);
    }

    printChartsPie(chart1, chart2, chart3) {
        this.q1.chartPie(chart1);
        this.q2.chartPie(chart2);
        this.q3.chartPie(chart3);
    }
}