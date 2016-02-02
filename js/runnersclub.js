var races = document.querySelectorAll(".race");

var runners, distance;

var distancePerRunner = {};

for (var i = 0, len = races.length; i < len; i++) {
  distance = races[i].getAttribute("data-distance");
  runners = races[i].getAttribute("data-runners").split(" ");

  if (races[i].classList.contains("upcoming")) {
    continue;
  }

  runners.forEach(function(runner) {
    if (!distancePerRunner[runner]) {
      distancePerRunner[runner] = 0;
    }
    distancePerRunner[runner] += parseInt(distance);
  });
}

var chartHtml = [];
var teamTotal = 0;
Object.keys(distancePerRunner).forEach(function(runner) {
  chartHtml.push(runner + ": " + distancePerRunner[runner]);
  teamTotal += distancePerRunner[runner];
});
chartHtml.push("Team total: " + teamTotal);

document.getElementById("total").innerHTML = chartHtml.join("\n");
