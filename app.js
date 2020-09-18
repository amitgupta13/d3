const DUMMY_DATA = [
    { year: 2011, value: 41 },
    { year: 2012, value: 45 },
    { year: 2013, value: 47 },
    { year: 2014, value: 72 },
    { year: 2015, value: 78 },
    { year: 2016, value: 31 },
    { year: 2017, value: 42 }
];

var svg = d3.select("svg")
        margin = 200
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;


    var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
        yScale = d3.scaleLinear().range ([height, 0]);

    var g = svg.append("g")
               .attr("transform", "translate(" + 100 + "," + 100 + ")");

                xScale.domain(DUMMY_DATA.map(function(d) { return d.year; }));
                yScale.domain([0, d3.max(DUMMY_DATA, function(d) { return d.value; })]);
        
                g.append("g")
                 .attr("transform", "translate(0," + height + ")")
                 .call(d3.axisBottom(xScale))
                 .append("text")
                 .attr("y", height - 250)
                 .attr("x", width - 100)
                 .attr("text-anchor", "end")
                 .attr("stroke", "black")
                 .text("Year");
        
                g.append("g")
                 .call(d3.axisLeft(yScale).tickFormat(function(d){
                     return "$" + d;
                 }).ticks(10))
                 .append("text")
                 .attr("transform", "rotate(-90)")
                 .attr("y", 6)
                 .attr("dy", "-5.1em")
                 .attr("text-anchor", "end")
                 .attr("stroke", "black")
                 .text("Stock Price");

                 g.selectAll(".bar")
                 .data(DUMMY_DATA)
                 .enter().append("rect")
                 .attr("class", "bar")
                 .attr("x", function(d) { return xScale(d.year); })
                 .attr("y", function(d) { return yScale(d.value); })
                 .attr("width", xScale.bandwidth())
                 .attr("height", function(d) { return height - yScale(d.value); });

                 svg.append("text")
                 .attr("transform", "translate(100,0)")
                 .attr("x", 50)
                 .attr("y", 50)
                 .attr("font-size", "24px")
                 .text("XYZ Foods Stock Price")