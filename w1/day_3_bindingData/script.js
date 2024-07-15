width = 600;
height = 600;
leftMargin = 40;
rightMargin = 40;
//create an svg canvas as a function, can be made without
function createCanvas(select, width, height, color) {
  return d3
    .select(select)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background-color", color);
}

var canvas = createCanvas("#canvas", width, height, "lightgrey");

var skydata = [
  {
    color: "#586474",
    weather: "cloudy",
    humidity: 0.7,
    rain: false,
  },
  {
    color: "#5c6a7a",
    weather: "raining",
    humidity: 0.65,
    rain: true,
  },
  {
    color: "#535f6b",
    weather: "raining",
    humidity: 0.65,
    rain: true,
  },
  {
    color: "#5e6e7c",
    weather: "raining",
    humidity: 0.65,
    rain: true,
  },
  {
    color: "#546273",
    weather: "raining",
    humidity: 0.7,
    rain: true,
  },
  {
    color: "#5c697c",
    weather: "cloudy",
    humidity: 0.7,
    rain: false,
  },
  {
    color: "#5c697c",
    weather: "cloudy",
    humidity: 0.65,
    rain: false,
  },
  {
    color: "#56677c",
    weather: "clody",
    humidity: 0.6,
    rain: false,
  },
  {
    color: "#53657a",
    weather: "cloudy",
    humidity: 0.65,
    rain: false,
  },
  {
    color: "#47586b",
    weather: "cloudy",
    humidity: 0.65,
    rain: false,
  },
];

// Create humidity rectangles
var humidityRect = canvas
  .selectAll(".humidityRect")
  .data(skydata)
  .join("rect")
  .attr("class", "humidityRect")
  .attr("x", function (d, i) {
    return 15 + i * 55;
  })
  .attr("y", function (d, i) {
    return height / 10;
  })
  .attr("width", 50) // Adjusted width for better visualization
  .attr("height", 20)
  .attr("fill", function (d) {
    if (d.humidity <= 0.6) {
      return "red";
    } else if (d.humidity == 0.65) {
      return "orange";
    } else {
      return "blue";
    }
  });

var skyCircles = canvas
  .selectAll("circle")
  .data(skydata)
  .join("circle")
  .attr("cx", function (d, i) {
    return leftMargin + i * 55;
  })
  .attr("cy", function (d) {
    return height / 4;
  })
  .attr("r", 20)
  .attr("fill", function (d) {
    return "white";
  })
  .attr("stroke", "white")
  .on("mouseover", function (event, d) {
    d3.select(this).attr("fill", d.color);
    console.log("color: " + d.color);
    if (d.rain) {
      updateRainVisibility(true);
    }
    return d.color;
  })
  .on("mouseout", function (d) {
    d3.select(this).style("fill", d.color);
    updateRainVisibility(false);
    return d.color;
  });

var rainWidth = 2;
var rainHeight = 20;
var rain = canvas
  .selectAll(".rainRect")
  .data(skydata)
  .join("rect")
  .attr("class", "rainRect")
  .attr("x", function (d, i) {
    return leftMargin + i * 55;
  })
  .attr("y", function (d, i) {
    if (d.rain && d.color != "white") {
      return createRain(i, 200);
    } else {
      return null;
    }
  })
  .attr("width", function (d) {
    if (d.rain) {
      return rainWidth;
    }
  })
  .attr("height", rainHeight)
  .attr("fill", "none");

function updateRainVisibility(visible) {
  canvas
    .selectAll(".rainRect")
    .attr("display", visible ? "block" : "none")
    .attr("fill", "blue");
}
function createRain(i, marginHeight) {
  var a = i + marginHeight;
  console.log(a);
  return a;
}
