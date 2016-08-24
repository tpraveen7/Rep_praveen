// var spans  = d3
//              .selectAll('div')
//              .attr('foo','bar')
//              .selectAll('span');
// spans.html('foo').style('color', 'red').style('font-size', '40px');

var WIDTH = 800;
var HEIGHT = 500;
d3.select('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT);

var yScale = d3.scaleLinear();

yScale.range = ([HEIGHT, 0]);
yScale.domain = ([0, 5]);

// console.log(yScale(0.1));
// console.log(yScale.invert(490));

d3
      //     .selectAll('main')
      //     // .classed('awesome', false)
      //     // .classed('super-awesome', true)
      //   .append('section')
      // .html('<div>another</div>');
.json('/runs', function(error, data)
{
  //  console.log(data);
  d3.select('svg').selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('r', 10)
  .attr('cy', function(datum, index){
console.log(datum);
return yScale(datum.distance );

  });

});
