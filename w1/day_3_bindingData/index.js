//GOAL: can we move shapes around based on their data?
// Can we store more information inside every data piece aside from just numbers?

var w = 600;
var h = 500;

//create an svg canvas as a function, can be made without
function createCanvas(select, width, height, color) {
  return d3
    .select(select)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background-color", color);
}

var canvas = createCanvas("#canvas", w, h, "black");

//creating a javascript object
var dataObjects = [
  {
    name: "annelie",
    age: 35,
    hometown: "new york",
    month: 6,
    day: 12,
  },
  {
    name: "roger",
    age: 28,
    hometown: "copenhagen",
    month: 9,
    day: 1,
  },
  {
    name: "roger",
    age: 28,
    hometown: "copenhagen",
    month: 8,
    day: 1,
  },
  {
    name: "roger",
    age: 28,
    hometown: "copenhagen",
    month: 7,
    day: 1,
  },
  {
    name: "roger",
    age: 28,
    hometown: "copenhagen",
    month: 12,
    day: 1,
  },
  {
    name: "roger",
    age: 28,
    hometown: "copenhagen",
    month: 1,
    day: 1,
  },
];

var rectWidth = 20;
var margin = rectWidth * 2;
var xScale = d3
  .scaleLinear()
  .domain([1, 12])
  .range([margin, w - margin]);

var rects = canvas
  .selectAll("rect")
  .data(dataObjects)
  .join("rect")
  .attr("x", function (d) {
    return xScale(d.month);
  })
  .attr("y", margin)
  .attr("width", rectWidth)
  .attr("height", function (d) {
    return d.age;
  })
  .attr("fill", "white");

// var myData = [60, 28, 27, 25, 18, 50, 35, 100, 545, 10, 12, 22, 25, 26, 50, 20, 8];
// var rectHeight = h/myData.length;

// var myRects = canvas.selectAll("rect")
// 					.data(myData)
// 					.join("rect")
// 					.attr("x", 10)
// 					.attr("y", function(d, i){
// 						return 10+i*50;
// 					})
// 					.attr("width", function(d,i){
// 						// if(i>=3 && i<=6){
// 						// 	return d;
// 						// }else{
// 						// 	return 0;
// 						// }
// 						return d;
// 					})
// 					.attr("height", rectHeight)
// 					.attr("fill","white")
// 					.attr("stroke","pink")

// var participants = [
//   { name: 'Sine', birthyear: 1990},
//   { name: 'Leo', birthyear: 1992},
//   { name: 'Ana', birthyear: 1995},
// ];

// var circ = canvas.selectAll("circle")
// 					.data(participants)
// 					.join("circle")
// 					.attr("cx", function(d,i){
// 						return leftMargin+ i*rad*2;
// 					})
// 					.attr("cy",h/2)
// 					.attr('r', function(d) {
// 					    return 0.01 * d.birthyear;
// 					  })
// 					.attr("fill","white")
