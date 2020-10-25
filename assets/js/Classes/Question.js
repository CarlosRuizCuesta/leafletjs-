class Question {

    constructor() {
        this.questions;
        this.quesLabel;
        this.quesData;
    }

    max() {
        return Object.values(questions).sort((prev, next) => next - prev)[0]
    }

    chartBar(ctx) {
        this.quesLabel = Object.keys(this.questions);
        this.quesData = Object.values(this.questions);

        new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: this.quesLabel,
                datasets: [{
                    barThickness: 25,
                    label: '# of Votes',
                    data: this.quesData,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive : true,
                legend: {
                    display: false,
                    labels: {
                        fontColor: "white"
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontColor : 'white'
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            suggestedMax: 1,
                            fontColor : 'white',
                        }
                    }]
                },
                tooltips: {
                    callbacks: {
                        label: tooltipItem => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
                        title: () => null,
                    }
                },
            }
        });
    }

    chartPie(ctx) {
        this.quesLabel = Object.keys(this.questions);
        this.quesData = Object.values(this.questions);


        // And for a doughnut chart
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                circumference : 10,
                datasets: [{
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    data: this.quesData
                }],

                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: this.quesLabel
            },
            options: {
                responsive : true,
                legend: {
                    labels: {
                        fontColor: "white"
                    }
                }
            }
        });
    }
}