export function prepareChartData(options) {
    let chartData = [
        ["Element", "Votes"]
    ];

    options.forEach(element => {
        let newRow = [element.value, element.votes];
        chartData.push(newRow);
    });
    return chartData;
}

export function getTotalVotes(options) {
    let totalVotes = 0;
    options.forEach(element => {
        totalVotes = totalVotes + element.votes;
    });
    return totalVotes;
}
