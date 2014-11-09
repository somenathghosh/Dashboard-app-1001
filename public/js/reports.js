/*myApp.onPageAfterInit('reports', function (page) {

})*/

var MODULE = (function(module, nv){


	window.D3VerticalBarChart = function (){

            var self = this;
            
            this.triggerIt = function (options, callback){
                
                
                self.dataChartConfigVerticalBarChart(options);
                if(callback){

                    callback(true);
                }

            }

            this.dataChartConfigVerticalBarChart = function(options){


                
                self.defaultChartConfig(options.containerId, options.dataFactory, {
                    delay: 0,
                    transitionDuration: 0,
                    groupSpacing: .2
                }, options.axisLabel, options.color);

            };


            this.defaultChartConfig = function (containerId, data, chartOptions, axisLabel, color) {
                nv.addGraph(function () {
                    var chart;
                    chart = nv.models.multiBarChart().margin({
                        bottom: 100
                    }).transitionDuration(300);

                    chart.options(chartOptions);
                    chart.multibar.hideable(true);
                    chart.color(color);
                    chart.xAxis.axisLabel(axisLabel).showMaxMin(true).tickFormat(d3.format(',0f'));

                    chart.yAxis.tickFormat(d3.format(',0f'));

                    d3.select(containerId + ' svg').datum(data).call(chart);

                    nv.utils.windowResize(chart.update);

                    chart.dispatch.on('stateChange', function (e) {
                        //nv.log('New State:', JSON.stringify(e));
                    });

                    return chart;
                });
            }
        };


    window.D3LineChart = function (){

            var self = this;
            this.triggerIt = function(options,callback){

                self.renderChart(options);
                if(callback){

                    callback(true);
                }

            }

            this.renderChart = function (options){

                nv.addGraph(function () {
                    var chart = nv.models.lineChart().x(function (d) {
                        return d[0]
                    }).y(function (d) {
                        return d[1]
                    }) 
                    .color(d3.scale.category10().range()).useInteractiveGuideline(true);

                    chart.xAxis.tickFormat(d3.format(',0f'));

                    chart.yAxis.tickFormat(d3.format(',0f'));
                    chart.color(options.color);
                    d3.select(options.containerId+ ' svg').datum(options.data).call(chart);

                    
                    nv.utils.windowResize(chart.update);

                    return chart;
                });
            }


        }

        window.D3StackedAreaChart = function (){
            var self = this;

            this.triggerIt = function(options, callback){

                self.renderChart(options);
                if(callback){

                    callback(true);
                }
            }

            this.renderChart = function(options){
                nv.addGraph(function () {
                    var chart = nv.models.stackedAreaChart().x(function (d) {
                        return d[0]
                    }).y(function (d) {
                        return d[1]
                    }) 
                    .color(d3.scale.category10().range()).useInteractiveGuideline(true);

                    chart.xAxis.tickFormat(d3.format(',0f'));

                    chart.yAxis.tickFormat(d3.format(',0f'));
                    chart.color(options.color);
                    d3.select(options.containerId + ' svg').datum(options.data).call(chart);

                    
                    nv.utils.windowResize(chart.update);

                    return chart;
                });


            }



        };



        window.D3DiscreteBarChart  = function (){
            var self = this;

            this.triggerIt = function(options, callback){

                self.renderChart(options);
                if(callback){

                    callback(true);
                }
            }



            this.renderChart = function (options){

                nv.addGraph(function () {
                    var chart = nv.models.discreteBarChart().x(function (d) {
                        return d.label
                    }) 
                    .y(function (d) {
                        return d.value
                    }).staggerLabels(false) 
                    .tooltips(false) 
                    .showValues(true) 
                    .transitionDuration(350).color(options.color);

                    chart.yAxis.tickFormat(d3.format(',0f'));
                    chart.valueFormat(d3.format(',0f'));

                    d3.select(options.containerId +' svg').datum(options.data).call(chart);

                    nv.utils.windowResize(chart.update);



                    return chart;
                });


            }


        };





})(MODULE || {}, nv);