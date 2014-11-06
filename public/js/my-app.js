$(document).ready(function () {



    // Initialize your app
    var myApp = new Framework7({
        swipePanel: 'left',

        actionsCloseByOutside: false,
        modalCloseByOutside: false,
        popupCloseByOutside: false
        //modalPreloaderTitle: "Your Dashboard is getting prepared. Please wait….!!!"
    });

    // Export selectors engine 
    var $$ = Framework7.$;

    // Add view
    var mainView = myApp.addView('.view-main', {
        // Because we use fixed-through navbar we can enable dynamic navbar
        dynamicNavbar: true
    });

    var mySlider = myApp.slider('.slider-container', {
        pagination: '.slider-pagination'
    });


    /**************************************************************************************************/


    var Store = (function(){

        var obj = [];

        var instance;

        var Storage = function(){
            
            this.retrieve = function(type){

                return obj[type];
            };

            this.store = function(data, type){

                obj[type] = data;

            };

        };

        return {
            getInstance: function(){
                if(!instance){
                    var instance = new Storage();

                }
                
                return instance;

            }


        }


    })();


    

      
    var ViewMapper = function( target, port, model) {

        var template = $$(port).html();

        var compiledTemplate = Template7.compile(template);
        
        var html = compiledTemplate(model);
        $(target).html(html);


    };

    var ViewModelHomeInbound = function(){

        this.applyModel = function(data){    

            var date = new Date();

            this.initialize();

            $('#welcomeName').html('<font>'+localStorage.name+'</font>');
            $('#lastLoginTime').html('<font>'+localStorage.lastVisitedDateTime+'</font>');
            $('#todaysDate').html('<font >'+date.dateNow() +'</font>');
            $('#todaysTime').html('<font >'+date.timeNow() +'</font>');
            $('#lockbox-inbound-file-process').html('<font class="digital" color="#00FF00">'+ data.fileInProcess+'</font>');
            $('#lockbox-inbound-file-error').html('<font class="digital" color="#DC3912">'+data.fileInError+'</font>');
            $('#lockbox-inbound-file-processed').html('<font class="digital " color="#FF9900">'+data.fileProcessed+'</font>');
            /*
            $('#keyInAssigned').html('');
            $('#keyInProgress').html('');
            $('#keyInCompleted').html('');
            $('#keyInSubmitted').html('');
            $('#lockbox-outbound-file-process').html('');
            $('#lockbox-outbound-file-process').html('');
            $('#lockbox-outbound-file-processed').html('');
            $('#claim-file-process').html('');
            $('#claim-file-error').html('');
            $('#claim-file-processed').html('');
            */


        };

        this.initialize = function(){
            $('#welcomeName').html('');
            $('#lastLoginTime').html('');
            $('#todaysDate').html('');
            $('#todaysTime').html('');
            $('#lockbox-inbound-file-process').html('');
            $('#lockbox-inbound-file-error').html('');
            $('#lockbox-inbound-file-processed').html('');
            /*
            $('#keyInAssigned').html('');
            $('#keyInProgress').html('');
            $('#keyInCompleted').html('');
            $('#keyInSubmitted').html('');
            $('#lockbox-outbound-file-process').html('');
            $('#lockbox-outbound-file-process').html('');
            $('#lockbox-outbound-file-processed').html('');
            $('#claim-file-process').html('');
            $('#claim-file-error').html('');
            $('#claim-file-processed').html('');
            */

        };


    }


    var ViewModelHomeKeyIn= function(){

        this.applyModel = function(data){    

            var date = new Date();

            this.initialize();

            
            
            $('#keyInAssigned').html('<font class="digital" color="#FF9900">'+data.assigned+'</font>');
            $('#keyInProgress').html('<font class="digital" color="#00FF00">'+data.inProgress+'</font>');
            $('#keyInCompleted').html('<font class="digital" color="#DFC2FC">'+data.completed+'</font>');
            $('#keyInSubmitted').html('<font class="digital" color="#DC3912">'+data.submitted+'</font>');
            /*
            $('#lockbox-outbound-file-process').html('');
            $('#lockbox-outbound-file-process').html('');
            $('#lockbox-outbound-file-processed').html('');
            $('#claim-file-process').html('');
            $('#claim-file-error').html('');
            $('#claim-file-processed').html('');
            */


        };

        this.initialize = function(){
            
          
            $('#keyInAssigned').html('');
            $('#keyInProgress').html('');
            $('#keyInCompleted').html('');
            $('#keyInSubmitted').html('');
              /*
            $('#lockbox-outbound-file-process').html('');
            $('#lockbox-outbound-file-process').html('');
            $('#lockbox-outbound-file-processed').html('');
            $('#claim-file-process').html('');
            $('#claim-file-error').html('');
            $('#claim-file-processed').html('');
            */

        };


    }


 
    var ViewModelInbound = function(){

        this.applyModel = function(data){

            this.initialize();
            $('#WTPGreen').html('<font class="digit" color="#00FF00">' + data.STEP1.fileInProcess +'</font> ');
            $('#SIGreen').html('<font class="digit" color="#00FF00">' + data.STEP2.fileInProcess +'</font> ');
            $('#EVGreen').html('<font class="digit" color="#00FF00">' + data.STEP3.fileInProcess +'</font> ');
            $('#DMGreen').html('<font class="digit" color="#00FF00">' + data.STEP4.fileInProcess +'</font> ');
            $('#PIGreen').html('<font class="digit" color="#00FF00">' + data.STEP5.fileInProcess +'</font> ');
            $('#BSGreen').html('<font class="digit" color="#00FF00">' + data.STEP6.fileInProcess +'</font> ');
            $('#WLGreen').html('<font class="digit" color="#00FF00">' + data.STEP7.fileInProcess +'</font> ');
            $('#IAGreen').html('<font class="digit" color="#00FF00">' + data.STEP8.fileInProcess +'</font> ');
            $('#ISGreen').html('<font class="digit" color="#00FF00">' + data.STEP9.fileInProcess +'</font> ');

            $('#WTPRed').html('<font class="digit" color="#FF0000">' + data.STEP1.fileInError +'</font> ');
            $('#SIRed').html('<font class="digit" color="#FF0000">' + data.STEP2.fileInError +'</font> ');
            $('#EVRed').html('<font class="digit" color="#FF0000">' + data.STEP3.fileInError +'</font> ');
            $('#DMRed').html('<font class="digit" color="#FF0000">' + data.STEP4.fileInError +'</font> ');
            $('#PIRed').html('<font class="digit" color="#FF0000">' + data.STEP5.fileInError +'</font> ');
            $('#BSRed').html('<font class="digit" color="#FF0000">' + data.STEP6.fileInError +'</font> ');
            $('#WLRed').html('<font class="digit" color="#FF0000">' + data.STEP7.fileInError +'</font> ');
            $('#IARed').html('<font class="digit" color="#FF0000">' + data.STEP8.fileInError +'</font> ');
            $('#ISRed').html('<font class="digit" color="#FF0000">' + data.STEP9.fileInError +'</font> ');

            
        };

        this.initialize = function(){
            $('#WTPGreen').html('');
            $('#SIGreen').html('');
            $('#EVGreen').html('');
            $('#DMGreen').html('');
            $('#PIGreen').html('');
            $('#BSGreen').html('');
            $('#WLGreen').html('');
            $('#IAGreen').html('');
            $('#ISGreen').html('');

            $('#WTPRed').html('');
            $('#SIRed').html('');
            $('#EVRed').html('');
            $('#DMRed').html('');
            $('#PIRed').html('');
            $('#BSRed').html('');
            $('#WLRed').html('');
            $('#IARed').html('');
            $('#ISRed').html('');


        };


    };


        



    



    
    (function () {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        Date.prototype.getMonthName = function () {
            return months[this.getMonth()];
        };
        Date.prototype.getDayName = function () {
            return days[this.getDay()];
        };

        Date.prototype.dateNow = function(){
            var date = new Date();
            return date.getDayName() + ' ' + date.getMonthName() + ' ' + date.getDate() + ',' + date.getFullYear();


        };

        Date.prototype.timeNow = function(){
            var date = new Date();
            return date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + ' ' + date.toString().match(/\(([A-Za-z\s].*)\)/)[1];

        };


    })();


    var API = function(){

        this.getIt = function(url, callback){

            $.ajax({
            url: url,
           
            beforeSend: function(xhr) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
            })
            .done(function(data) {
                
                try {
                    
                    var jsonData = JSON.parse(data);
                    callback(true, jsonData);

                }
                catch(e){
                
                    console.log(e);
                    callback(false);
                }
                

            }).fail(function(err) {
                console.log('call fails for ' + url);
                callback(false);

            });

        };


    };
    

    function registration(data, callback) {
        console.log(data);

         $.ajax({
            url: "https://dashboard-server-1001.herokuapp.com/api/v1/users",
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json"
            
        })
        .done(function(data) {
            callback(true);
        
        }).fail(function(err) {
            serverDidConnect = false;
            callback(false);

        });
 
    };

    


    var drawChartHome = function(data, selector, id, r) {
        var svgInbound = d3.select(selector).append("svg").attr("width", 300).attr("height", 300);
       

        svgInbound.append("g").attr("id", id);
   
        
        Donut3D.draw(id, data, 150, 150, 130, 100, 30, r);
        
    };

    var drawChartChangeData = function(id, data, r ) {
            Donut3D.transition(id, data, 130, 100, 30, r);
       
    };

        

        


   var ChartDataCreator = function(data){

        this.chartData = [

                            {
                                label: "File In Error",
                                value: data.fileInError,
                                color: "#DC3912"
                            }, {
                                label: "File in Process",
                                value: data.fileInProcess,
                                color: "#109618"
                            }, {
                                label: "File Processed",
                                value: data.fileProcessed,
                                color: "#FF9900"
                            }
                        ]; 
       
        this.chartKeyinData = [

                                {
                                    label: "File Submitted",
                                    value: data.submitted,
                                    color: "#DC3912"
                                }, {
                                    label: "File in Progress",
                                    value: data.inProgress,
                                    color: "#109618"
                                }, {
                                    label: "File Assigned",
                                    value: data.assigned,
                                    color: "#FF9900"
                                },

                                {
                                    label: "File Completed",
                                    value: data.completed,
                                    color: "#7211CE"
                                }
                            ];

    
   };



    

    
 

    //---------------------------------------------------------------------------------------------//



    /************************************************************************************************/


    var date = new Date();
   
    myApp.showPreloader('Preparing Dashboard');
    
    //localStorage.removeItem("deviceID"); // remove it to Test

    if(!localStorage.deviceID){

        myApp.hidePreloader();
        
        $('#registrationDate').val(date.dateNow());
        myApp.popup('.popup-app-settings');
        $('.appSetButton').click(function(){               
            var data = {};
            var checkFlag = true;
            if($('#name').val()){
                $('#regName').removeClass("errorClass");
                data.name = $('#name').val();
            }else{
                checkFlag = false;
                $('#regName').addClass("errorClass");
                //thow error
            }
            if($('#email').val().indexOf("@")>-1){
                $('#regEmail').removeClass("errorClass");
                data.email = $('#email').val();
            }else{
                $('#regEmail').addClass("errorClass");
                checkFlag = false;
                //throw error
            }
            if($('#deviceID').val()){
                $('#regId').removeClass("errorClass");
                data.deviceID = $('#deviceID').val();
            }else{
                $('#regId').addClass("errorClass");
                checkFlag = false;
            }

            if(checkFlag){
                myApp.closeModal('.popup-app-settings');
            
            data.registrationDate = $('#registrationDate').val();
            myApp.showPreloader('Registering your Device...');
            
            registration(data, function(success){
                if(success){
                    
                    localStorage.deviceID = data.deviceID;
                    localStorage.name = data.name;

                    buildHomePage();


                }
                else{

                    myApp.alert('Could not Connect to the Server while Registering', 'Error:', function() {
                        myApp.hidePreloader();
                        myApp.popup('.popup-app-settings');
                    });
                }


            });

        }

        });




    }

    else{

        localStorage.lastVisitedDateTime = localStorage.visitedNow || (date.dateNow() + ' '+  date.timeNow());
        localStorage.visitedNow = date.dateNow() + ' '+  date.timeNow();
        

        buildHomePage();


    }
   

    function buildHomePage (){

        


        var api = new API();

        function inboundHomeCallback (success, data){

            if(success){

                //ViewMapper('#lockboxInboundHomeBar', '#lockboxInboundHomeTemplate', data);
                var vm = new ViewModelHomeInbound();
                vm.applyModel(data);
                var cData = new ChartDataCreator(data);
                drawChartHome(cData.chartData, "#chartL1","InboundDonut", 0.7);
                var api = new API();
                api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/home",outboundHomeCallback);

            }
            else{
                
                  myApp.alert('Could not Connect to the Server - 1', 'Error:', function() {
                    myApp.hidePreloader();
                  });

            }

        };


        function outboundHomeCallback (success, data){
            
            if(success){
                //ViewMapper('#lockboxOutboundHomeBar', '#lockboxOutboundHomeTemplate', data);
                api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/home",keyInHomeCallback);
                var cData = new ChartDataCreator(data);
                drawChartHome(cData.chartData, "#chartL3","OutboundDonut", 0.7);

            }
            else{
                
                  myApp.alert('Could not Connect to the Server -2 ', 'Error:', function() {
                    myApp.hidePreloader();
                  });

            }

        };

        function keyInHomeCallback (success, data){

            if(success){
                //ViewMapper('#lockboxKeyinHomeBar', '#lockboxKeyinHomeTemplate', data);
                var vm = new ViewModelHomeKeyIn();
                vm.applyModel(data);
                api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/home",claimHomeCallback);
                
                var cData = new ChartDataCreator(data);
                drawChartHome(cData.chartKeyinData, "#chartL2","keyInboundDonut", 0.0);


            }
            else{
            
                  myApp.alert('Could not Connect to the Server - 3', 'Error:', function() {
                    myApp.hidePreloader();
                  });

            }

        };


        function claimHomeCallback (success, data){

            if(success){
                //ViewMapper('#claimHomeBar', '#claimHomeTemplate', data);
                var cData = new ChartDataCreator(data);

                drawChartHome(cData.chartData, "#chartL4","claimDonut", 0.7);

                setTimeout(function(){
                    myApp.hidePreloader();
                    $(".loadingPage").addClass("hidden");
                    $(".views").removeClass("hidden");
                    $(".overlay").removeClass("hidden");


                },2000);

            }
            else{
                
                  myApp.alert('Could not Connect to the Server -4 ', 'Error:', function() {
                    myApp.hidePreloader();
                  });

            }

        };


        api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/home",inboundHomeCallback);

       
    };



    /************************************************************************************************/







    myApp.onPageInit('keyin-detail', function (page) {
        console.log("keyInDetail");
        var salesData2 = [

        {
            label: "Plus",
            value: 1000,
            color: "#DC3912"
        }, {
            label: "Lite",
            value: 800,
            color: "#FF9900"
        }, {
            label: "Elite",
            value: 200,
            color: "#109618"
        }, {
            label: "Super",
            value: 800,
            color: "#0855C0"
        }, {
            label: "Minor",
            value: 200,
            color: "#000000"
        }, {
            label: "Delux",
            value: 100,
            color: "#990099"
        }];
        var svgKeyinDetail = d3.select("#chartL5").append("svg").attr("width", 500).attr("height", 500);
        svgKeyinDetail.append("g").attr("id", "KeyinDetailPie");
        Donut3D.draw("KeyinDetailPie", salesData2, 250, 250, 250, 193, 30, 0.0);

        var salesData3 = [

        {
            label: "Plus",
            value: 1000,
            color: "#DC3912"
        }, {
            label: "Lite",
            value: 800,
            color: "#FF9900"
        }, {
            label: "Elite",
            value: 200,
            color: "#109618"
        }];

        var svgTat = d3.select("#chartL6").append("svg").attr("width", 225).attr("height", 250);
        svgTat.append("g").attr("id", "TatPie");
        Donut3D.draw("TatPie", salesData3, 140, 120, 100, 79, 20, 0.7);



        nv.addGraph(function () {
            var chart = nv.models.discreteBarChart().x(function (d) {
                return d.label
            }) //Specify the data accessors.
            .y(function (d) {
                return d.value
            }).staggerLabels(false) //Too many bars and not enough room? Try staggering labels.
            .tooltips(false) //Don't show tooltips
            .showValues(true) //...instead, show the bar value right on top of each bar.
            .transitionDuration(350).color(['#DC3912', '#FF9900']);

            chart.yAxis.tickFormat(d3.format(',0f'));
            chart.valueFormat(d3.format(',0f'));

            d3.select('#chartL7 svg').datum(exampleData()).call(chart);

            nv.utils.windowResize(chart.update);



            return chart;
        });

        //Each bar represents a single discrete quantity.


        function exampleData() {
            return [{
                key: "Cumulative Return",
                values: [{
                    "label": "Expected Volume",
                    "value": 59000
                }, {
                    "label": "Actual Volume",
                    "value": 58000
                }]
            }]

        }

        nv.addGraph(function () {
            var chart = nv.models.discreteBarChart().x(function (d) {
                return d.label
            }) //Specify the data accessors.
            .y(function (d) {
                return d.value
            }).staggerLabels(false) //Too many bars and not enough room? Try staggering labels.
            .tooltips(false) //Don't show tooltips
            .showValues(true) //...instead, show the bar value right on top of each bar.
            .transitionDuration(350).color(['#DC3912', '#FF9900', '#109618', '#000099', '#000000', '#990099', 'gray']);

            chart.yAxis.tickFormat(d3.format(',0f'));

            chart.valueFormat(d3.format(',0f'));

            d3.select('#chartL8 svg').datum(exampleData2()).call(chart);

            nv.utils.windowResize(chart.update);

            return chart;
        });

        //Each bar represents a single discrete quantity.


        function exampleData2() {
            return [{
                key: "Cumulative Return",
                values: [{
                    "label": "Yesterday",
                    "value": 61
                }, {
                    "label": "Two Day Ago",
                    "value": 67
                }, {
                    "label": "Three days Ago",
                    "value": 51
                }, {
                    "label": "Four Days Ago",
                    "value": 71
                }, {
                    "label": "Five Days Ago",
                    "value": 57
                }, {
                    "label": "Six Days Ago",
                    "value": 75
                }, {
                    "label": "Seven Days Ago",
                    "value": 80
                }]
            }]

        }

    });



    function sequence(i) {
        for (var j = 0; j < document.getElementsByClassName('step-' + i).length; j++) {
            document.getElementsByClassName('step-' + i)[j].classList.remove("hidden")
        }

    }



    myApp.onPageInit('claim', function (page) {
        console.log("claim");
        $('.intClear a').click(function(){
            clearInterval(arrowSequence);
            console.log("back");

        });
        
        var i = 0;
        var arrowSequence = 
            setInterval(function(){
                sequence(i);
                i++;
                if(i==5){
                    console.log(arrowSequence);
                    clearInterval(arrowSequence);
                }
            },1000);
        
        
        $("#isSequnceSelectedClaim").change(function() { 
            if($("#isSequnceSelectedClaim").is(':checked')){
                var i = 0;
                 arrowSequence =    
                    setInterval(function(){
                        sequence(i);
                        i++;
                        if(i==5){
                            clearInterval(arrowSequence);
                        }
                    },1000);
            }else{
                clearInterval(arrowSequence);
                $('.step').addClass('hidden');  
            }
        }); 
        
        
        $$('.popup-services').on('click', function () {
          var popupHTML = '<div class="popup">'+
                            '<div class="content-block">'+
                              '<p>Popup created dynamically.</p>'+
                              '<p><a href="#" class="close-popup">Close me</a></p>'+
                            '</div>'+
                          '</div>'
          myApp.popup(popupHTML);
          
    }); 
    });

    myApp.onPageInit('lockbox-outbound', function (page) {
        getLockboxOutboundDetail(); 
        

        // clear interval when back button is clicked       
        $('.intClear a').click(function(){
            clearInterval(arrowSequence);
            console.log("back");

        });
        
        var i = 0;
        var arrowSequence = 
            setInterval(function(){
                sequence(i);
                i++;
                if(i==5){
                    console.log(arrowSequence);
                    clearInterval(arrowSequence);
                }
            },1000);
        
        
        $("#isSequnceSelectedOut").change(function() { 
            if($("#isSequnceSelectedOut").is(':checked')){
                var i = 0;
                 arrowSequence =    
                    setInterval(function(){
                        sequence(i);
                        i++;
                        if(i==5){
                            clearInterval(arrowSequence);
                        }
                    },1000);
            }else{
                clearInterval(arrowSequence);
                $('.step').addClass('hidden');  
            }
        }); 
        
        
        $$('.popup-services').on('click', function () {
          var popupHTML = '<div class="popup">'+
                            '<div class="content-block">'+
                              '<p>Popup created dynamically.</p>'+
                              '<p><a href="#" class="close-popup">Close me</a></p>'+
                            '</div>'+
                          '</div>'
          myApp.popup(popupHTML);
          
    }); 

    });



    myApp.onPageInit('lockbox-inbound', function (page) {

        getLockboxInboundDetail();
        

       

        // clear interval when back button is clicked       
        $('.intClear a').click(function () {
            clearInterval(arrowSequence);
            //console.log("back");

        });

        var i = 0;
        var arrowSequence = setInterval(function () {
            sequence(i);
            i++;
            if (i == 7) {
                //console.log(arrowSequence);
                clearInterval(arrowSequence);
            }
        }, 1000);


        $("#isSequnceSelected").change(function () {
            if ($("#isSequnceSelected").is(':checked')) {
                var i = 0;
                arrowSequence = setInterval(function () {
                    sequence(i);
                    i++;
                    if (i == 7) {
                        clearInterval(arrowSequence);
                    }
                }, 1000);
            } else {
                clearInterval(arrowSequence);
                $('.step').addClass('hidden');
            }
        });

        
       

       

    });













    








    /*-------------*/
    myApp.onPageInit('reports', function (page) {
        console.log("reports");
        
        $$('.slider-slide input[type="range"]').on('touchmove mousemove', function (e){
          e.stopPropagation();
        });

        $('#goHome').attr("href", "index");
        var noOfDaysFVA = 30;
        var noOfDaysCV = 30;
         var noOfDaysPMU = 30;
         var noOfDaysMLT= 30;
         var noOfDaysTAT= 30;

            $("#VT-slider").on('input', function () {
                $("#VT-slider-text").html(this.value);
                streams = ['Forcasted', 'Actual'];
                noOfDaysFVA=this.value;
            defaultChartConfig("reports-charts-forcasted-vs-actual", dataFactory(2, noOfDaysFVA), {
            delay: 0,
            transitionDuration: 0,
            groupSpacing: .2
        });
            })

        $("#CV-slider").on('input', function () {
                $("#CV-slider-text").html(this.value);
                noOfDaysCV=this.value;
                streams = ['Volume'];
                defaultChartConfig2("reports-claim-data-volume", dataFactory(1, noOfDaysCV), {
                    delay: 0,
                    transitionDuration: 0,
                    groupSpacing: .2
                });
            })

        $("#PMU-slider").on('input', function () {
                $("#PMU-slider-text").html(this.value);
                noOfDaysPMU=this.value;
                 streams = ['% Used'];
        defaultChartConfig3("reports-percentage-MPI-used", dataFactory2(1, noOfDaysPMU), {
            delay: 0,
            transitionDuration: 0,
            groupSpacing: .2
        });
            })

        $("#MLT-slider").on('input', function () {
                $("#MLT-slider-text").html(this.value);
                noOfDaysMLT=this.value;
                    var chart = nv.models.stackedAreaChart().x(function (d) {
                return d[0]
            }).y(function (d) {
                return d[1]
            }) //adjusting, 100% is 1.00, not 100 as it is in the data
            .color(d3.scale.category10().range()).useInteractiveGuideline(true);

            chart.xAxis.tickFormat(d3.format(',0f'));

            chart.yAxis.tickFormat(d3.format(',0f'));
            chart.color(['#00FF00', '#FF9900', '#DC3912']);
            d3.select('#MPI-stacked-area-chart svg').datum(stackedAreaChartData(noOfDaysMLT)).call(chart);

            //TODO: Figure out a good way to do this automatically
            nv.utils.windowResize(chart.update);
            })


        $("#TAT-slider").on('input', function () {
                $("#TAT-slider-text").html(this.value);
                noOfDaysTAT=this.value;
            var chart = nv.models.lineChart().x(function (d) {
                return d[0]
            }).y(function (d) {
                return d[1]
            }) //adjusting, 100% is 1.00, not 100 as it is in the data
            .color(d3.scale.category10().range()).useInteractiveGuideline(true);

            chart.xAxis.tickFormat(d3.format(',0f'));

            chart.yAxis.tickFormat(d3.format(',0f'));
            chart.color(['#00FF00', '#FF9900']);
            d3.select('#TAT-line-chart svg').datum(lineChartData(noOfDaysTAT)).call(chart);

            //TODO: Figure out a good way to do this automatically
            nv.utils.windowResize(chart.update);

            return chart;
            })




        $("#reports-missed-TAT").append('<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Acura1 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Audi1</div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">BMW1</div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Cadillac1 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Chevrolet1 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Chrysler1 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Dodge1 </div>' + '</div>' + '</li>'


        );
        $("#list-selector").change(function () {
            console.log(this.value);
            if (this.value === "Site List Missed TAT") {
                $("#reports-missed-TAT").html("");
                $("#reports-missed-TAT").append('<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Acura1 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Audi1</div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">BMW1</div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Cadillac1 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Chevrolet1 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Chrysler1 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Dodge1 </div>' + '</div>' + '</li>'


                );

            } else {
                $("#reports-missed-TAT").html("");
                $("#reports-missed-TAT").append('<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Acura2</div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Audi2</div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">BMW2</div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Cadillac2 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Chevrolet2 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Chrysler2 </div>' + '</div>' + '</li>' + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">Dodge2 </div>' + '</div>' + '</li>'


                );

            }

        })





        function lineChartData(range) {
            var data = [];
            data.push({
                "key": "AVG",
                "values": []
            });
            data.push( {
                "key": "Median",
                "values": []
            });
            if(range<1){
                range = Math.abs(range);
            }

            for(var i=1;i<=range;i++){
                data[0].values.push([i,Math.floor(Math.random()*24)]);
                data[1].values.push([i,15]);
            }
            return data;
        }


        nv.addGraph(function () {
            var chart = nv.models.lineChart().x(function (d) {
                return d[0]
            }).y(function (d) {
                return d[1]
            }) //adjusting, 100% is 1.00, not 100 as it is in the data
            .color(d3.scale.category10().range()).useInteractiveGuideline(true);

            chart.xAxis.tickFormat(d3.format(',0f'));

            chart.yAxis.tickFormat(d3.format(',0f'));
            chart.color(['#00FF00', '#FF9900']);
            d3.select('#TAT-line-chart svg').datum(lineChartData(noOfDaysTAT)).call(chart);

            //TODO: Figure out a good way to do this automatically
            nv.utils.windowResize(chart.update);

            return chart;
        });



        function stackedAreaChartData(range) {
            var data = [];
            data.push({
                "key": "Top 10th Percentile",
                "values": []
            });
            data.push( {
                "key": "AVG",
                "values": []
            });
            data.push({
                "key": "Bottom 10th Percentile",
                "values": []
            })
            if(range<1){
                range = Math.abs(range);
            }

            for(var i=1;i<=range;i++){
                data[0].values.push([i,Math.floor(Math.random()*20) +4 ]);
                data[1].values.push([i,15]);
                data[2].values.push([i,Math.floor(Math.random()*12)]);
            }
            return data;
        }


        nv.addGraph(function () {
            var chart = nv.models.stackedAreaChart().x(function (d) {
                return d[0]
            }).y(function (d) {
                return d[1]
            }) //adjusting, 100% is 1.00, not 100 as it is in the data
            .color(d3.scale.category10().range()).useInteractiveGuideline(true);

            chart.xAxis.tickFormat(d3.format(',0f'));

            chart.yAxis.tickFormat(d3.format(',0f'));
            chart.color(['#00FF00', '#FF9900', '#DC3912']);
            d3.select('#MPI-stacked-area-chart svg').datum(stackedAreaChartData(noOfDaysMLT)).call(chart);

            //TODO: Figure out a good way to do this automatically
            nv.utils.windowResize(chart.update);

            return chart;
        });





        var streams = ['Forcasted', 'Actual'];

        function dataFactory(seriesNum, perSeries) {
            return new d3.range(0, seriesNum).map(function (d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function (f, j) {
                        return {
                            y: 10 + Math.floor(Math.random() * 100000),
                            x: j + 1
                        }
                    })
                };
            });

        }


        defaultChartConfig("reports-charts-forcasted-vs-actual", dataFactory(2, noOfDaysFVA), {
            delay: 0,
            transitionDuration: 0,
            groupSpacing: .2
        });



        function defaultChartConfig(containerId, data, chartOptions) {
            nv.addGraph(function () {
                var chart;
                chart = nv.models.multiBarChart().margin({
                    bottom: 100
                }).transitionDuration(300);

                chart.options(chartOptions);
                chart.multibar.hideable(true);
                chart.color(['#DC3912', '#FF9900']);
                chart.xAxis.axisLabel("Volume Trend").showMaxMin(true).tickFormat(d3.format(',0f'));

                chart.yAxis.tickFormat(d3.format(',0f'));

                d3.select('#' + containerId + ' svg').datum(data).call(chart);

                nv.utils.windowResize(chart.update);

                chart.dispatch.on('stateChange', function (e) {
                    nv.log('New State:', JSON.stringify(e));
                });

                return chart;
            });
        }

        console.log($('#reports-charts-forcasted-vs-actual'));

        var streams = ['Volume'];




        defaultChartConfig2("reports-claim-data-volume", dataFactory(1, noOfDaysCV), {
            delay: 0,
            transitionDuration: 0,
            groupSpacing: .2
        });



        function defaultChartConfig2(containerId, data, chartOptions) {
            nv.addGraph(function () {
                var chart;
                chart = nv.models.multiBarChart().margin({
                    bottom: 100
                }).transitionDuration(300);

                chart.options(chartOptions);
                chart.multibar.hideable(true);
                chart.color(['#F7C202']);
                chart.xAxis.axisLabel("Claim Volume Trend").showMaxMin(true).tickFormat(d3.format(',0f'));

                chart.yAxis.tickFormat(d3.format(',0f'));

                d3.select('#' + containerId + ' svg').datum(data).call(chart);

                nv.utils.windowResize(chart.update);

                chart.dispatch.on('stateChange', function (e) {
                    nv.log('New State:', JSON.stringify(e));
                });

                return chart;
            });
        }

        //
        var streams = ['% Used'];

        function dataFactory2(seriesNum, perSeries) {
            return new d3.range(0, seriesNum).map(function (d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function (f, j) {
                        return {
                            y: Math.floor(Math.random() * 100),
                            x: j + 1
                        }
                    })
                };
            });

        }


        defaultChartConfig3("reports-percentage-MPI-used", dataFactory2(1, noOfDaysPMU), {
            delay: 0,
            transitionDuration: 0,
            groupSpacing: .2
        });



        function defaultChartConfig3(containerId, data, chartOptions) {
            nv.addGraph(function () {
                var chart;
                chart = nv.models.multiBarChart().margin({
                    bottom: 100
                }).transitionDuration(300);

                chart.options(chartOptions);
                chart.multibar.hideable(true);
                chart.color(['#04D3A6']);
                chart.xAxis.axisLabel("Percentage of MPI Used").showMaxMin(true).tickFormat(d3.format(',0f'));

                chart.yAxis.tickFormat(d3.format(',0f'));

                d3.select('#' + containerId + ' svg').datum(data).call(chart);

                nv.utils.windowResize(chart.update);

                chart.dispatch.on('stateChange', function (e) {
                    nv.log('New State:', JSON.stringify(e));
                });

                return chart;
            });
        }
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////

    var firstTimeFlag = true;


    var getLockboxInboundDetail = function(groupCode , siteNumber){

        myApp.showPreloader('Preparing');

        var api = new API();

        if(groupCode && siteNumber){


        }
        else{


       

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/detail",inboundDetailcallback);
        
        
        }

        
        function inboundDetailcallback (success, data){

            if(success){

                
                
               var vm = new ViewModelInbound();

               vm.applyModel(data);


                
                setTimeout(function(){

                    myApp.hidePreloader();

                },500);
                

            }

            else{

                myApp.alert('Could not Connect to the Server - 5 ', 'Error:', function() {
                    myApp.hidePreloader();
                });
            }



        };


    };

  


    var getLockboxOutboundDetail = function(groupCode , siteNumber){

        myApp.showPreloader('Preparing');

        var api = new API();

        if(groupCode && siteNumber){


        }
        else{


       

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/detail",outboundDetailcallback);
        
        
        }


        function outboundDetailcallback (success, data){

            if(success){
               
    
                setTimeout(function(){

                    myApp.hidePreloader();

                },500);
                

            }

            else{

                myApp.alert('Could not Connect to the Server - 6 ', 'Error:', function() {
                    myApp.hidePreloader();
                });
            }



        };


    };




});