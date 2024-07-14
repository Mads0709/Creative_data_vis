//GOAL: can we set up a local coding environment, webpage and draw 1 shape on it?
//GOAL: can we set up a local coding environment, webpage and draw 1 shape on it?
var w = 500;
var h = 500;

var canvas = d3.select("#vis").append("svg").attr("width", w).attr("height", h);

var circle1FromD3 = canvas
  .append("circle")
  .attr("cx", 200)
  .attr("cy", 220)
  .attr("r", 20)
  .attr("fill", "green")
  .attr("opacity", "0.5");

var circle2FromD3 = canvas
  .append("circle")
  .attr("cx", 300)
  .attr("cy", 220)
  .attr("r", 20)
  .attr("fill", "blue")
  .attr("opacity", "0.5");

var circle3FromD3 = canvas
  .append("circle")
  .attr("cx", 200)
  .attr("cy", 300)
  .attr("r", 20)
  .attr("fill", "red")
  .attr("opacity", "0.5");

var circle4FromD3 = canvas
  .append("circle")
  .attr("cx", 400)
  .attr("cy", 220)
  .attr("r", 20)
  .attr("fill", "purple")
  .attr("opacity", "0.5");

var circle5FromD3 = canvas
  .append("circle")
  .attr("cx", 400)
  .attr("cy", 300)
  .attr("r", 20)
  .attr("fill", "brown")
  .attr("opacity", "0.5");

var squareFromD3 = canvas
  .append("rect")
  .attr("x", w / 2)
  .attr("y", h / 2)
  .attr("width", 100)
  .attr("height", 100)
  .attr("stroke", "black")
  .style("fill", "none")
  .style("stroke-width", border);
// create svg element:
var svg = d3
  .select("#rect")
  .append("svg")
  .attr("width", 400)
  .attr("height", 200);
// Add the path using this helper function
svg
  .append("rect")
  .attr("x", 10)
  .attr("y", 120)
  .attr("width", 600)
  .attr("height", 40)
  .attr("stroke", "black")
  .attr("fill", "#69a3b2");

/* var width = 800;
var height = 500;
var xPos = width / 2;
var yPos = height / 2;
var rad = 10;

var circleFromD3 = canvas
  .append("circle")
  .attr("cx", xPos)
  .attr("cy", yPos)
  .attr("r", rad)
  .attr("fill", "red"); */

// var w = 500;
// var h = 500;
// var rad = 20;

// var svg = d3.select("svg")
// 			.attr("width",w)
// 			.attr("height",h);

// var circles = d3.selectAll("circle")
// 				.attr("r", rad)
// 				.attr("cx", w/2)
// 				.attr("cy", h/2);

// var w = 500;
// var h = 500;
// var rad = 20;

// var svg = d3.select("svg")
// 			.attr("width",w)
// 			.attr("height",h);

// var circles = d3.selectAll("circle")
// 				.attr("r", rad)
// 				.attr("cx", w/2)
// 				.attr("cy", h/2);
