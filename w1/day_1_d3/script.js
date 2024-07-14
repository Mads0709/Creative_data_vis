var width = 500;
var height = 500;

var canvas = d3
  .select("#vis")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

function createCircle(canvas, cx, cy, r, fill, opacity) {
  return canvas
    .append("circle")
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", r)
    .attr("fill", fill)
    .attr("opacity", opacity);
}

function createCircles(xPos, yPos) {
  var circle1 = createCircle(canvas, xPos, yPos, 20, "red", 0.5);
  var circle2 = createCircle(canvas, xPos + 20, yPos, 20, "blue", 0.5);
}

for (var i = 0; i < height; i += 50) {
  for (var j = 0; j < width; j += 50) {
    createCircles(width / 2 + j, i + 100);
  }
}
