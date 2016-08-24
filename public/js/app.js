// var spans  = d3
//              .selectAll('div')
//              .attr('foo','bar')
//              .selectAll('span');
// spans.html('foo').style('color', 'red').style('font-size', '40px');

var WIDTH = 600;
var HEIGHT = 500;
d3.select('svg')
  .attr('width', WIDTH)
  .attr('height', HEIGHT);

var yScale = d3.scaleLinear();
var xScale = d3.scaleTime();

yScale.range([HEIGHT, 0]);
yScale.domain([0, 5]);

xScale.range([0,WIDTH]);
xScale.domain([new Date('2016-1-1'), new Date('2017-1-1')])

// console.log(xScale(new Date('2016-8-1')));
// console.log(yScale(0.1));
// console.log(yScale.invert(490));
var render = function(){
  d3
      //     .selectAll('main')
      //     // .classed('awesome', false)
      //     // .classed('super-awesome', true)
      //   .append('section')
      // .html('<div>another</div>');
      .json('/runs', function(error, data){


  //  console.log(data);
var circles = d3.select('#points').selectAll('circle').data(data, function(datum){
  return datum.id;
   });

          circles.enter()
          .append('circle')
          // .attr('r', 5)
          .attr('cy', function(datum, index){
    // console.log(datum.distance, yScale.invert(datum.distance));
            return yScale(datum.distance );
          })
          .attr('cx', function(datum, index){
            return xScale(new Date(datum.date));
          });

circles.exit().remove();

          d3.selectAll('circle').on('click', function(datum, index){
// console.log(this);

            d3.event.stopPropagation();
// d3.select(this).remove();

            d3.request('/runs/' +datum.id)
              .header("Content-Type", "application/json" )
              .send('DELETE', render);
          });

          var dragEnd = function(d){
          var x = d3.event.x;
          var y = d3.event.y;
          var date = xScale.invert(x);
          var distance = yScale.invert(y);
          // console.log(date, distance);
 d.date = date;
 d.distance = distance;
 d3.request('/runs/'+d.id)
   .header("Content-Type", "application/json" )
   .send('PUT', JSON.stringify(d), render);

          }


            var drag = function(d){
              var x = d3.event.x;
              var y = d3.event.y;
              d3.select(this).attr('cx', x);
              d3.select(this).attr('cy', y);
            }
            var dragBehavior = d3.drag()
              .on('drag', drag)
              .on('end', dragEnd);
              d3.selectAll('circle').call(dragBehavior);
        });
};

render();

var lastTransform = null;
d3.select('svg').on('click',function(){
var x = d3.event.offsetX;
var y = d3.event.offsetY;

if(lastTransform !== null){
  x = lastTransform.invertX(x);
  y = lastTransform.invertY(y);
}


  var distance = yScale.invert(y);
  var date = xScale.invert(x);

  var  runObject = {
    distance: distance,
    date: date
  };
  d3.request('/runs')
  .header("Content-Type", "application/json")
  .post(
    JSON.stringify( runObject),
    render
  );


// console.log(date);
// console.log(distance);
})

var leftAxis = d3.axisLeft(yScale);
d3.select('svg')
.append('g')
.attr('id', 'y-axis')
.call(leftAxis);

var botAxis = d3.axisBottom(xScale);
d3.select('svg')
.append('g')
.attr('id', 'x-axis')
.attr("transform", "translate(0," +HEIGHT+")")
.call(botAxis);


var zoomCallback = function(){
  lastTransform = d3.event.transform;
d3.select('#points')
.attr("transform", d3.event.transform);
d3.select('#x-axis').call(botAxis.scale(d3.event.transform.rescaleX(xScale)));
d3.select('#y-axis').call(leftAxis.scale(d3.event.transform.rescaleY(yScale)));

}
var zoom = d3.zoom()
.on('zoom', zoomCallback);
d3.select('svg').call(zoom);
