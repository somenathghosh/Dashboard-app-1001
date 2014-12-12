/**********************************************************************************************************
 * Dashboard App 1.0
 * Full Featured Dashboard App
 *
 * Copyright 2014, TCS 
 *
 * Developed by: Somenath Ghosh & Steve Pettit
 *
 * Licensed under TCS Corporation
 *
 * Released on: November 10, 2014
 ********************************************************************************************************/

"use strict";



$(document).ready(function () {



    // Initialize your app
    var myApp = new Framework7({
        swipePanel: 'left',

        actionsCloseByOutside: false,
        modalCloseByOutside: false,
        popupCloseByOutside: false,
        preloadPreviousPage:false

        //modalPreloaderTitle: "Your Dashboard is getting prepared. Please wait….!!!"
    });

    
    var $$ = Framework7.$;

    
    var mainView = myApp.addView('.view-main', {
        
        dynamicNavbar: true
    });

    var homePopupView = myApp.addView('.popup-view',{
        
        dynamicNavbar: true
    });


    var inboundPopupView = myApp.addView('.popup-view-inbound',{
        
        dynamicNavbar: true
    });


     var outboundPopupView = myApp.addView('.popup-view-outbound',{
        
        dynamicNavbar: true
    });

    var claimPopupView = myApp.addView('.popup-view-claim',{
        
        dynamicNavbar: true
    });

     var keyinPopupView = myApp.addView('.popup-view-keyin',{
        
        dynamicNavbar: true
    });

    /**************************************************************************************************/




    var drawChartHome = function(data, selector, id, r) {
        var svgInbound = d3.select(selector).append("svg").attr("width", 300).attr("height", 300);
       

        svgInbound.append("g").attr("id", id);
   
        
        Donut3D.draw(id, data, 150, 150, 130, 100, 30, r);
        
    };
    
    var drawNvd3Home = function(data, selector, isDonut, donutRatio, page, showLegend, height, width){

//Donut chart example
nv.addGraph(function() {

 var svgInbound = d3.select(selector).append("svg").attr("width", width|300).attr("height", height|300);
 	var colors = [];
 	for(var index in data){
 		colors.push(data[index].color);
 	}
	console.log(colors);
  var chart = nv.models.pieChart(mainView, page)
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .showLabels(true)     //Display pie labels
      .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
      .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
      .donut(isDonut)          //Turn on Donut mode. Makes pie chart look tasty!
      .donutRatio(donutRatio)     //Configure how big you want the donut hole size to be.
      .showLegend(showLegend)
      .width(width|300)
      .height(height|300)
      .color(colors)
      .pieLabelsOutside(false)
      ;
    
     
	console.log(data);
    d3.select(selector+" svg")
        .datum(data)
        .transition().duration(350)
        .call(chart);

  return chart;
});
    }

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
                                color: "#FF9900"
                            }, {
                                label: "File Processed",
                                value: data.fileProcessed,
                                color: "#109618"
                            }
                        ]; 
       
        this.chartKeyinData = [

                                {
                                    label: "File Submitted",
                                    value: data.submitted,
                                    color: "#FF9900"
                                }, {
                                    label: "File in Progress",
                                    value: data.inProgress,
                                    color: "#109618"
                                }, {
                                    label: "File Assigned",
                                    value: data.assigned,
                                    color: "#DC3912"
                                },

                                {
                                    label: "File Completed",
                                    value: data.completed,
                                    color: "#7211CE"
                                }
                            ];

        this.chartKeyinDataWorkList = [

                                    {
                                        label: "File Submitted",
                                        value: data.submitted,
                                        color: "#DC3912"
                                    }, {
                                        label: "File Assigned",
                                        value: data.assigned,
                                        color: "#FF9900"
                                    }, {
                                        label: "File in Progress",
                                        value: data.assigned,
                                        color: "#109618"
                                    }, {
                                        label: "File Completed",
                                        value: data.completed,
                                        color: "#7211CE"
                                    }, {
                                        label: "File UnAssigned",
                                        value: data.unassigned,
                                        color: "#990099"
                                    }, {
                                        label: "File Rejected",
                                        value: data.rejected,
                                        color: "#000000"
                                    }
                                ];

    
   };

    

    function sequence(i) {
        for (var j = 0; j < document.getElementsByClassName('step-' + i).length; j++) {
            document.getElementsByClassName('step-' + i)[j].classList.remove("hidden")
        }

    };

    

    
 

    //---------------------------------------------------------------------------------------------//



    /************************************************************************************************/

    myApp.showPreloader('Loading');

    var date = new Date();
   
    var homelink = $('#goHome');
    localStorage.deviceID = '6ac90d0e-20db-4766-9767-c675bde0ef1f';
    //localStorage.removeItem("deviceID");
    setTimeout(function(){

        if(!localStorage.deviceID){

            myApp.hidePreloader();
            
            $('#registrationDate').val(date.dateNow());
            myApp.popup('.popup-app-settings');
            $('.appSetButton').click(function(){               
                var data = {};
                var checkFlag = true;
                if($('#name').val()){
                    $('#regName').removeClass("errorClass");
                    data.fullName = $('#name').val();
                }else{
                    checkFlag = false;
                    $('#regName').addClass("errorClass");
                    
                }
                if($('#email').val().indexOf("@")>-1){
                    $('#regEmail').removeClass("errorClass");
                    data.email = $('#email').val();
                }else{
                    $('#regEmail').addClass("errorClass");
                    checkFlag = false;
                    
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
                    myApp.showPreloader('Registering your Device');
                    
                    _.registration(data, function(success){
                        if(success){
                            
                            localStorage.deviceID = data.deviceID;
                            localStorage.registeredUser = data.fullName;
                            
                            setTimeout(function(){

                                myApp.hidePreloader();
                                
                                buildHomePage(function(){
                                    setTimeout(function(){
                                         myApp.hidePreloader();

                                    },1000);
                                });

                            },500);



                        }
                        else{


                            myApp.alert('This Device is not registered. Please contact help desk for more information. <br> HelpDesk: 800-XXX-XXXX', 'Error:', function() {
                                myApp.hidePreloader();
                                myApp.popup('.popup-app-settings');
                                
                                
                            });

                            
                        }


                    });

                 }

            });




        }

        else{

            myApp.hidePreloader();

            localStorage.lastVisitedDateTime = localStorage.visitedNow || (date.dateNow() + ' '+  date.timeNow());
            localStorage.visitedNow = date.dateNow() + ' '+  date.timeNow();
            

            buildHomePage(function(){

                setTimeout(function(){
                     myApp.hidePreloader();
                      var labels = document.getElementsByClassName("nv-label");
      					for(var index in labels){
      						if(labels[index].children){
      							labels[index].children[1].style.fill="white";
      						}
      	
      					}
                        $('#main-view-test-fadein').removeClass('animated zoomIn');
                },1000);
                setTimeout(function(){


                },1000);
                
               

            });


        }
   
    },1500);

    $$('.popup-filter').on('open', function () {
      /*
        var vm = new _.ViewModelGroupCode();
        var vmSite = new _.ViewModelSiteNumber();
        var data = ['XXX', 'YYY', 'VVV', 'CCC', 'NNN', 'MMM', 'AAA', 'BBB', 'CCC'];

        


        vm.applyModel(data.sort(), '.group-Code-home-filter', '.item-after'); 
        vmSite.applyModel(data.sort(), '.site-number-home-filter', '.item-after');
		*/
		var data = [{'groupCode':'XXX','siteNumbers':['123','456','789']}, {'groupCode':'YYY','siteNumbers':['098','765','432']}, {'groupCode':'VVV','siteNumbers':['146','257','369']}, {'groupCode':'CCC','siteNumbers':['098','765','432']}, {'groupCode':'NNN','siteNumbers':['111','222','333']}, {'groupCode':'MMM','siteNumbers':['444','555','777']}, {'groupCode':'AAA','siteNumbers':['888','999','000']}, {'groupCode':'BBB','siteNumbers':['112','223','445']}];
		$(".group-codes").html("");
		for(var index in data){
			if(index == 0){
				$(".group-codes").append("<option value="+data[index].groupCode+" selected>"+data[index].groupCode+"</option>");
				$(".group-code-after").html(data[index].groupCode);
                setSiteNumbers(data, index);
			}else{
				$(".group-codes").append("<option value="+data[index].groupCode+">"+data[index].groupCode+"</option>");
			}

		}


    });

    $$('.popup-filter-lockbox-inbound').on('open', function () {
      /*
        var vm = new _.ViewModelGroupCode();
        var vmSite = new _.ViewModelSiteNumber();
        var data = ['XXX', 'YYY', 'VVV', 'CCC', 'NNN', 'MMM', 'AAA', 'BBB', 'CCC'];

        


        vm.applyModel(data.sort(), '.group-Code-home-filter', '.item-after'); 
        vmSite.applyModel(data.sort(), '.site-number-home-filter', '.item-after');
        */
        var data = [{'groupCode':'XXX','siteNumbers':['123','456','789']}, {'groupCode':'YYY','siteNumbers':['098','765','432']}, {'groupCode':'VVV','siteNumbers':['146','257','369']}, {'groupCode':'CCC','siteNumbers':['098','765','432']}, {'groupCode':'NNN','siteNumbers':['111','222','333']}, {'groupCode':'MMM','siteNumbers':['444','555','777']}, {'groupCode':'AAA','siteNumbers':['888','999','000']}, {'groupCode':'BBB','siteNumbers':['112','223','445']}];
        $(".group-codes").html("");
        for(var index in data){
            if(index == 0){
                $(".group-codes").append("<option value="+data[index].groupCode+" selected>"+data[index].groupCode+"</option>");
                $(".group-code-after").html(data[index].groupCode);
                setSiteNumbers(data, index);
            }else{
                $(".group-codes").append("<option value="+data[index].groupCode+">"+data[index].groupCode+"</option>");
            }

        }


    });





	$(".group-codes").on("change", function (e) {
		var data = [{'groupCode':'XXX','siteNumbers':['123','456','789']}, {'groupCode':'YYY','siteNumbers':['098','765','432']}, {'groupCode':'VVV','siteNumbers':['146','257','369']}, {'groupCode':'CCC','siteNumbers':['098','765','432']}, {'groupCode':'NNN','siteNumbers':['111','222','333']}, {'groupCode':'MMM','siteNumbers':['444','555','777']}, {'groupCode':'AAA','siteNumbers':['888','999','000']}, {'groupCode':'BBB','siteNumbers':['112','223','445']}];
		for(var index in data){
            if($(".group-codes").val()==data[index].groupCode){
                setSiteNumbers(data, index);
            }
        }
	});


    function setSiteNumbers(data, index){
                $(".site-numbers").html("");
                for(var index2 in data[index].siteNumbers){
                    if(index2 == 0){
                        $(".site-numbers").append("<option value="+data[index].siteNumbers[index2]+" selected>"+data[index].siteNumbers[index2]+"</option>");
                        $(".site-number-after").html(data[index].siteNumbers[index2]);
                    }else{
                        $(".site-numbers").append("<option value="+data[index].siteNumbers[index2]+" >"+data[index].siteNumbers[index2]+"</option>");
                    }
                }
    }

    function buildHomePage (callback){

        
        myApp.showPreloader('Preparing Dashboard');

        var api = new _.API();

        function inboundHomeCallback (success, data){

            if(success){

                
                var vm = new _.ViewModelHomeInbound();
                vm.applyModel(data);
                var cData = new ChartDataCreator(data);
                //drawChartHome(cData.chartData, "#chartL1","InboundDonut", 0.7);
                drawNvd3Home(cData.chartData, "#chartL1", true,0.35,"lockbox-inbound.html",false);
                $('#chartL1').addClass('animated zoomIn');
               
                var api = new _.API();
                api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/home",outboundHomeCallback);

            }
            else{
                
                  

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                    function () {
                        myApp.hidePreloader();
                    },

                    function () {
                        myApp.hidePreloader();
                    }
                );

            }

        };


        function outboundHomeCallback (success, data){
            
            if(success){
               
                var vm = new _.ViewModelOutboundHome();
                vm.applyModel(data);

                api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/home",keyInHomeCallback);
                var cData = new ChartDataCreator(data);
                //drawChartHome(cData.chartData, "#chartL3","OutboundDonut", 0.7);
                drawNvd3Home(cData.chartData, "#chartL3", true,0.35,"lockbox-outbound.html",false);
                $('#chartL3').addClass('animated zoomIn');
        

            }
            else{
                
                 myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                    function () {
                        myApp.hidePreloader();
                    },

                    function () {
                        myApp.hidePreloader();
                    }
                );
            }

        };

        function keyInHomeCallback (success, data){

            if(success){
                
                var vm = new _.ViewModelHomeKeyIn();
                vm.applyModel(data);
                api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/home",claimHomeCallback);
                
                var cData = new ChartDataCreator(data);
               // drawChartHome(cData.chartKeyinData, "#chartL2","keyInboundDonut", 0.0);
               drawNvd3Home(cData.chartKeyinData, "#chartL2", false,0,"keyin-detail.html",false);
               $('#chartL2').addClass('animated zoomIn');


            }
            else{
            
                 myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                    function () {
                        myApp.hidePreloader();
                    },

                    function () {
                        myApp.hidePreloader();
                    }
                );
            }

        };


        function claimHomeCallback (success, data){

            if(success){
                
                var vm = new _.ViewModelClaim();
                vm.applyModel(data);

                var cData = new ChartDataCreator(data);

                //drawChartHome(cData.chartData, "#chartL4","ClaimDonut", 0.7);
            	drawNvd3Home(cData.chartData, "#chartL4", true,0.35,"claim.html",false);
                $('#chartL4').addClass('animated zoomIn');
             
                    //myApp.hidePreloader();
                $(".loadingPage").addClass("hidden");
                $(".views").removeClass("hidden");
                $(".overlay").removeClass("hidden");
                //$('#main-view-test-fadein').addClass('animated zoomIn');
                callback();

              

            }
            else{
                
                  myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                    function () {
                        myApp.hidePreloader();
                    },

                    function () {
                        myApp.hidePreloader();
                    }
                );

            }

        };


        api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/home",inboundHomeCallback);

       
    };



    function refreshBuildHomePage (groupCode, siteNumber, callback){

        

        myApp.showPreloader('Refreshing');

        var api = new _.API();

        function inboundHomeCallback (success, data){

            if(success){

                
                var vm = new _.ViewModelHomeInbound();
                vm.applyModel(data);
                var cData = new ChartDataCreator(data);
                drawChartChangeData("InboundDonut", cData.chartData, 0.7);

                var api = new _.API();
                api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/home?forGroupCode="+groupCode+"&forSiteNumber="+siteNumber,outboundHomeCallback);

            }
            else{
                
                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                    function () {
                        myApp.hidePreloader();
                    },

                    function () {
                        myApp.hidePreloader();
                    }
                );

            }

        };


        function outboundHomeCallback (success, data){
            
            if(success){
               
                var vm = new _.ViewModelOutboundHome();
                vm.applyModel(data);

                api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/home?forGroupCode="+groupCode+"&forSiteNumber="+siteNumber,keyInHomeCallback);
                var cData = new ChartDataCreator(data);
                //console.log('100');
                drawChartChangeData("OutboundDonut", cData.chartData, 0.7);

            }
            else{
                
                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                    function () {
                        myApp.hidePreloader();
                    },

                    function () {
                        myApp.hidePreloader();
                    }
                );

            }

        };

        function keyInHomeCallback (success, data){

            if(success){
                
                var vm = new _.ViewModelHomeKeyIn();
                vm.applyModel(data);
                api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/home?forGroupCode="+groupCode+"&forSiteNumber="+siteNumber,claimHomeCallback);
                
                var cData = new ChartDataCreator(data);
                //console.log(cData.chartKeyinData);
                drawChartChangeData("keyInboundDonut", cData.chartKeyinData, 0.0);


            }
            else{
            
                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                    function () {
                        myApp.hidePreloader();
                    },

                    function () {
                        myApp.hidePreloader();
                    }
                );

            }

        };


        function claimHomeCallback (success, data){

            if(success){
                
                var vm = new _.ViewModelClaim();
                vm.applyModel(data);

                var cData = new ChartDataCreator(data);
                drawChartChangeData("ClaimDonut", cData.chartData, 0.7);
                callback();

            }
            else{
                
                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                    function () {
                        myApp.hidePreloader();
                    },

                    function () {
                        myApp.hidePreloader();
                    }
                );

            }

        };


        api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/home?forGroupCode="+groupCode+"&forSiteNumber="+siteNumber,inboundHomeCallback);

       
    };


    $('.submitButton-home').click(function(){

        var groupCode = $('#groupCode-home').val();
        var siteNumber = $('#siteNumber-home').val();

        refreshBuildHomePage(groupCode, siteNumber, function(){

            setTimeout(function(){

                    myApp.hidePreloader();
                   
            },500);

        });


    });





    

    /************************************************************************************************/


     myApp.onPageInit('index', function (page) {
        myApp.showPreloader("Preparing");
        buildHomePage(function(){
            setTimeout(function(){
                myApp.hidePreloader();

            },500);
            
        });
        
        homelink.prop("href", "#");
        
        

    });

    

    myApp.onPageInit('*', function (page) {
      console.log(page.name + ' initialized'); 

    });



    function renderKeyInDetailWorklist(groupCode, siteNumber, org){
        myApp.showPreloader('Preparing');
        var api = new _.API();


        if(groupCode && siteNumber && org){

            myApp.showPreloader('Refreshing');
            api.getIt('https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/worklist?forGroupCode='+groupCode+'&forSiteNumber='+siteNumber+'&forOrg='+org,function(success, data){
                if(success){
                    var cData = new ChartDataCreator(data);
                    Donut3D.transition("KeyinDetailPie", cData.chartKeyinDataWorkList,250, 193, 35, 0.0);
                    setTimeout(function(){
                        myApp.hidePreloader();

                    },200);
                    
                }
                else{
                    
                    myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                        function () {
                            myApp.hidePreloader();
                        },

                        function () {
                            myApp.hidePreloader();
                        }
                    );


                }

            });




        }
        else{


        
            api.getIt('https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/worklist',function(success, data){
                if(success){
                    var cData = new ChartDataCreator(data);
                    //var svgKeyinDetail = d3.select("#chartL5").append("svg").attr("width", 500).attr("height", 500);
                    //svgKeyinDetail.append("g").attr("id", "KeyinDetailPie");
                   // Donut3D.draw("KeyinDetailPie", cData.chartKeyinDataWorkList, 250, 250, 250, 193, 35, 0.0);
                   drawNvd3Home(cData.chartKeyinDataWorkList, "#chartL5", false, 0, "", true,500,500);
                   $('#chartL5').addClass('animated zoomIn');

                }
                else{
                    
                    myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                        function () {
                            myApp.hidePreloader();
                        },

                        function () {
                            myApp.hidePreloader();
                        }
                    );


                }

            });

         }


    };

    function renderKeyInDetailTAT(groupCode, siteNumber){
        
        var api = new _.API();

        if(groupCode && siteNumber){
            
            api.getIt('https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/batchTAT?forGroupCode='+groupCode+'&forSiteNumber='+siteNumber,function(success, data){
                if(success){

                    Donut3D.transition("TatPie", data, 100, 79, 20, 0.7);
                    

                   
                }

                else{

                    myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                        function () {
                            myApp.hidePreloader();
                        },

                        function () {
                            myApp.hidePreloader();
                        }
                    );

                }

            });


        }

        else{


        

            api.getIt('https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/batchTAT',function(success, data){
                if(success){

                    //var svgTat = d3.select("#chartL6").append("svg").attr("width", 225).attr("height", 250);
                    //svgTat.append("g").attr("id", "TatPie");
                    //Donut3D.draw("TatPie", data, 140, 120, 100, 79, 20, 0.7);

                    drawNvd3Home(data, "#chartL6", true, 0.35, "", true);
                   
                }

                else{

                    myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                        function () {
                            myApp.hidePreloader();
                        },

                        function () {
                            myApp.hidePreloader();
                        }
                    );

                }

            });

        }

    };


    function renderKeyInDetailVolume(groupCode){
        
        var api = new _.API();
        var url;
        if(groupCode){

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/volume?forGroupCode='+groupCode;

        }
        else{

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/volume';
        }

            

        
        api.getIt(url,function(success, data){
            if(success){

                var discreteBarChart = new D3DiscreteBarChart();

                discreteBarChart.triggerIt({

                    color: ['#DC3912', '#FF9900'],
                    containerId: '#chartL7',
                    data: data


                }, function(success){


                });

            }

            else{

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                        function () {
                            myApp.hidePreloader();
                        },

                        function () {
                            myApp.hidePreloader();
                        }
                );

            }

        });

        


    };

    function renderKeyInDetailMPI(groupCode, siteNumber){
        
        var api = new _.API();
        var url;

        if(groupCode && siteNumber){

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/MPI?forGroupCode='+groupCode+'&forSiteNumber='+siteNumber;
        }
        else{
            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/MPI';

        }
        api.getIt(url,function(success, data){
            if(success){

                var discreteBarChart = new D3DiscreteBarChart();

                discreteBarChart.triggerIt({

                    color: ['#DC3912', '#FF9900', '#109618', '#000099', '#000000', '#990099', 'gray'],
                    containerId: '#chartL8',
                    data: data


                }, function(success){


                });
                

            }
            else{
                
                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                        function () {
                            myApp.hidePreloader();
                        },

                        function () {
                            myApp.hidePreloader();
                        }
                );

            }


        });


    };



    myApp.onPageInit('keyin-detail', function (page) {
        
        
        renderKeyInDetailWorklist();
        renderKeyInDetailVolume();
        renderKeyInDetailTAT();
        renderKeyInDetailMPI();
       
        setTimeout(function(){

            myApp.hidePreloader();
                                                        var labels = document.getElementsByClassName("nv-label");
                        for(var index in labels){
                            if(labels[index].children){
                                labels[index].children[1].style.fill="white";
                            }
        
                        }


        },1000);
       
        $('.submitButton-keyin-worklist').click(function(){


            var groupCode = $('#groupCode-keyin-worklist').val();
            var siteNumber = $('#siteNumber-keyin-worklist').val();
            var org = $('#org-keyin-worklist').val();
            renderKeyInDetailWorklist(groupCode, siteNumber, org);

        });

        $('.submitButton-keyin-volume').click(function(){


            var groupCode = $('#groupCode-keyin-volume').val();
            
            renderKeyInDetailVolume(groupCode);

        });


        $('.submitButton-keyin-TAT').click(function(){


            var groupCode = $('#groupCode-keyin-TAT').val();
            var siteNumber = $('#siteNumber-keyin-TAT').val();
            
            renderKeyInDetailTAT(groupCode, siteNumber);

        });

        $('.submitButton-keyin-MPI').click(function(){


            var groupCode = $('#groupCode-keyin-MPI').val();
            var siteNumber = $('#siteNumber-keyin-MPI').val();
            
            renderKeyInDetailMPI(groupCode, siteNumber);

        });


    });



 



    myApp.onPageInit('claim', function (page) {
        
        getClaimDetail();

        $('.intClear a').click(function(){
            clearInterval(arrowSequence);
            homelink.prop("href", "#");


        });
        
        var i = 0;
        var arrowSequence = 
            setInterval(function(){
                sequence(i);
                i++;
                if(i==5){
                    
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
        


        $('.submitButton-claim-detail').click(function(){

                var groupCode = $('#groupCode-claim').val();
                var siteNumber = $('#siteNumber-claim').val();
                getClaimDetail(groupCode, siteNumber);


        });

        
        
     
    });





    myApp.onPageInit('lockbox-outbound', function (page) {
        getLockboxOutboundDetail(); 
        
     
        $('.intClear a').click(function(){

            clearInterval(arrowSequence);

        });
        
        var i = 0;
        var arrowSequence = 
            setInterval(function(){
                sequence(i);
                i++;
                if(i==5){
                    //console.log(arrowSequence);
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
        
        
            
        $('.submitButton-Outbound-detail').click(function(){

                var groupCode = $('#groupCode-outbound').val();
                var siteNumber = $('#siteNumber-outbound').val();

                getLockboxOutboundDetail(groupCode, siteNumber);


        });

        

    });



    myApp.onPageInit('lockbox-inbound', function (page) {

        getLockboxInboundDetail();
        
       

              
        $('.intClear a').click(function () {
            clearInterval(arrowSequence);
            
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

        
         $('.submitButton-Inbound-detail').click(function(){


                var groupCode = $('#groupCode-inbound').val();
                var siteNumber = $('#siteNumber-inbound').val();

                getLockboxInboundDetail(groupCode, siteNumber);


        });

  

       

    });













    








    /*-------------*/
    myApp.onPageInit('reports', function (page) {
       
        myApp.showPreloader('Preparing');

        var slides = [
                'Forcasted vs Actual Volume',
                'TAT Average and Median',
                'Claim Volume',
                'Percentage of MPI Used',
                'MPI Load Time Statistics',
                'Miscellaneous Reports'

        ];



        var mySlider = myApp.slider('.slider-container', {
            speed: 400,
            spaceBetween: 40,
            nextButton:'#slideLinkName-next',
            prevButton: '#slideLinkName-prev',
            onSlideChangeEnd: function(slider){
                var slideName;
                if(slides[mySlider.activeSlideIndex+1]){

                    slideName = slides[mySlider.activeSlideIndex+1] +  '&nbsp; <span class="fa  fa-angle-right fa-lg"></span>'


                }
                else{

                    slideName = '';
                }
                 
                
                $('#slideLinkName-next').html( slideName );
                

            },
            onSlideChangeStart: function(slider){

                var slideName;
                if(slides[mySlider.activeSlideIndex-1]){

                    slideName = '<span class="fa  fa-angle-left fa-lg"></span> &nbsp;'+ slides[mySlider.activeSlideIndex-1] ;


                }
                else{

                    slideName = '';
                }


                $('#slideLinkName-prev').html(slideName);

            }


        });

        $('#slideLinkName-next').html(slides[mySlider.activeSlideIndex+1] + '&nbsp; <span class="fa  fa-angle-right fa-lg"></span>');
        
        
        
        $$('.slider-slide input[type="range"]').on('touchmove mousemove', function (e){
           e.stopPropagation();
        });

        $('#goHome').prop("href", "index");


        var dataFactory = function (seriesNum, perSeries, streams) {
            return new d3.range(0, seriesNum).map(function (d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function (f, j) {
                        return {
                            y: 10 + Math.floor(Math.random() * 10000) + 30000,
                            x: j + 1
                        }
                    })
                };
            });

        }


        var dataFactoryFilter = function (seriesNum, perSeries, streams) {
            return new d3.range(0, seriesNum).map(function (d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function (f, j) {
                        return {
                            y: 10 + Math.floor(Math.random() * 1000) + 300,
                            x: j + 1
                        }
                    })
                };
            });

        }




        var dataFactory2 = function (seriesNum, perSeries, streams) {
            return new d3.range(0, seriesNum).map(function (d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function (f, j) {
                        return {
                            y: Math.floor(Math.random() * 10)+ 70,
                            x: j + 1
                        }
                    })
                };
            });

        }

        var dataFactory2Filter = function (seriesNum, perSeries, streams) {
            return new d3.range(0, seriesNum).map(function (d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function (f, j) {
                        return {
                            y: Math.floor(Math.random() * 10)+ 50,
                            x: j + 1
                        }
                    })
                };
            });

        }




        var lineChartData = function (range) {
            
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
                data[0].values.push([i,Math.floor(Math.random()*10)+14]);
                data[1].values.push([i,18]);
            }
            return data;
        };


        var stackedAreaChartData = function (range) {
            var data = [];
            data.push({
                "key": "Bottom 10th Percentile",
                "values": []
            });
            
            data.push( {
                "key": "AVG",
                "values": []
            });

            data.push({
                "key": "Top 10th Percentile",
                "values": []
            });
            
            if(range<1){
                range = Math.abs(range);
            }

            for(var i=1;i<=range;i++){
                data[0].values.push([i,Math.floor(Math.random()*10) +1 ]);
                data[1].values.push([i,15]);
                data[2].values.push([i,Math.floor(Math.random()*10)+14]);
            }
            return data;
        }


        var vBar = new D3VerticalBarChart();
        var stackedChart = new D3StackedAreaChart();
        var lChart = new D3LineChart();

        var reportsVolume = function(n,m,c){


        }
        


        ////////

        var colorSlide0 = ['#DC3912', '#FF9900'];
        var streamsSlide0 = ['Forcasted', 'Actual'];

        var publicStorage= _.PublicStore.openPort();
        publicStorage.put('dataVolume', dataFactory);
       


        
        vBar.triggerIt({containerId:'#reports-charts-forcasted-vs-actual',  
                        dataFactory: publicStorage.get('dataVolume')(2, 30,streamsSlide0), 
                        axisLabel: 'Lockbox EOB Volume Trend',
                        color: colorSlide0 
                        }, function(){

                            $('#reports-charts-forcasted-vs-actual').addClass('animated zoomIn');
                        });

       
        $("#VT-slider").on('input', function () {

            $("#VT-slider-text").html(this.value);
           
            vBar.triggerIt({containerId:'#reports-charts-forcasted-vs-actual',
                            dataFactory: publicStorage.get('dataVolume')(2, this.value,streamsSlide0), 
                            axisLabel: 'Lockbox EOB Volume Trend',
                            color: colorSlide0 });
        

        });

        $('.submitButton-reports-volume').click(function(e){

            var groupCode = $('#groupCode-reports-volume').val();

            if(!groupCode || groupCode === ''){
                //console.log(groupCode);
                publicStorage.put('dataVolume', dataFactory);
            }
            else{
                //console.log(groupCode);
                publicStorage.put('dataVolume', dataFactoryFilter);
            }
            
            $("#VT-slider").val(30);
            $("#VT-slider-text").html(30);
            vBar.triggerIt({containerId:'#reports-charts-forcasted-vs-actual',
                            dataFactory: publicStorage.get('dataVolume')(2, 30 ,streamsSlide0), 
                            axisLabel: 'Lockbox EOB Volume Trend',
                            color: colorSlide0 });

        });
    
        ////////

        //////

        var colorSlide2 = ['#FF9900'];
        var streamsSlide2 = ['Volume'];
        publicStorage.put('claimVolume', dataFactory);

        vBar.triggerIt({containerId:'#reports-claim-data-volume',  
                        dataFactory: publicStorage.get('claimVolume')(1, 30,streamsSlide2), 
                        axisLabel: 'Claim Volume Trend',
                        color: colorSlide2 
                        });


        $("#CV-slider").on('input', function () {
                $("#CV-slider-text").html(this.value);
                
                vBar.triggerIt({containerId:'#reports-claim-data-volume',  
                        dataFactory: publicStorage.get('claimVolume')(1, this.value,streamsSlide2), 
                        axisLabel: 'Claim Volume Trend',
                        color: colorSlide2 
                        });
        });

        $('.submitButton-reports-claim').click(function(e){

            var groupCode = $('#groupCode-reports-claim').val();
            var siteNumber = $('#site-number-reports-claim').val();
           
            if(!groupCode || !siteNumber || groupCode === '' || siteNumber === ''){

                publicStorage.put('claimVolume', dataFactory);

            }
            else{
                
                publicStorage.put('claimVolume', dataFactoryFilter);

            }

            $("#CV-slider").val(30);
            $("#CV-slider-text").html(30);
            vBar.triggerIt({containerId:'#reports-claim-data-volume',  
                        dataFactory: publicStorage.get('claimVolume')(1, 30,streamsSlide2), 
                        axisLabel: 'Claim Volume Trend',
                        color: colorSlide2 
                        });

        });
        
        //////

        var colorSlide3 = ['#61C106'];
        var streamsSlide3 = ['% Used'];

        publicStorage.put('PMU', dataFactory2);


        vBar.triggerIt({containerId:'#reports-percentage-MPI-used',  
                        dataFactory: publicStorage.get('PMU')(1, 30,streamsSlide3), 
                        axisLabel: 'Percentage of MPI Used ',
                        color: colorSlide3 
                        });


        $("#PMU-slider").on('input', function () {
                $("#PMU-slider-text").html(this.value);

               

                vBar.triggerIt({containerId:'#reports-percentage-MPI-used',  
                        dataFactory: publicStorage.get('PMU')(1, this.value ,streamsSlide3), 
                        axisLabel: 'Percentage of MPI Used ',
                        color: colorSlide3 
                        });
        });


        $('.submitButton-reports-MPI-used').click(function(e){
            
            var groupCode = $('#roupCode-reports-MPI-used').val();
            var siteNumber = $('#site-number-reports-MPI-used').val();

            if(!groupCode || !siteNumber || groupCode ==='' || siteNumber ===''){
                publicStorage.put('PMU',dataFactory2 );

            }
            else{

                publicStorage.put('PMU',dataFactory2Filter );
            }

            $("#PMU-slider").val(30);
            $("#PMU-slider-text").html(30);

            vBar.triggerIt({containerId:'#reports-percentage-MPI-used',  
                        dataFactory: publicStorage.get('PMU')(1, 30,streamsSlide3), 
                        axisLabel: 'Percentage of MPI Used ',
                        color: colorSlide3 
                        });

        });

        //////


        /////
        

        publicStorage.put('MPI',stackedAreaChartData );


        lChart.triggerIt({

            containerId: '#MPI-stacked-area-chart',
            color: ['#FF2E2E', '#FF9900','#00FF00'],
            data: publicStorage.get('MPI')(30)

        }, function(){


        });


        $("#MLT-slider").on('input', function () {
                $("#MLT-slider-text").html(this.value);
                lChart.triggerIt({

                    containerId: '#MPI-stacked-area-chart',
                    color: ['#FF2E2E', '#FF9900','#00FF00'],
                    data: publicStorage.get('MPI')(this.value)

                });

        });


        

        //////


        /////



        
        publicStorage.put('TAT',lineChartData);

        lChart.triggerIt({

                containerId: '#TAT-line-chart',
                color: ['#00FF00', '#FF9900'],
                data: publicStorage.get('TAT')(30)
        }, function(){


        });

        $("#TAT-slider").on('input', function () {
                
                $("#TAT-slider-text").html(this.value);

                lChart.triggerIt({

                    containerId: '#TAT-line-chart',
                    color: ['#00FF00', '#FF9900'],
                    data: publicStorage.get('TAT')(this.value)
                });  
        });

        $('.submitButton-reports-TAT').click(function(){

            var groupCode = $('#groupCode-resports-TAT').val();
            var siteNumber = $('#siteNumber-reports-TAT').val();
            $("#TAT-slider").val(30);
            $("#TAT-slider-text").html(30);

            lChart.triggerIt({

                    containerId: '#TAT-line-chart',
                    color: ['#00FF00', '#FF9900'],
                    data: publicStorage.get('TAT')(30)
            }); 

        });


        /////


        var TATMissedSites = [
            'AAA - 078 - Lorem ipsum dolor sit amet',
            'AAA - 00V58 - consectetuer adipiscing elit',
            'AAA - 041 - Aenean commodo ligula eget dolor',
            'BBB - 677 - Aenean massa. Cum sociis natoque ',
            'DDD - 00V57 - Donec quam felis, ultricies nec, pellentesque eu',
            'DDD - 051 - Donec pede justo, fringilla vel',
            'DDD - 00C67 - Nullam dictum felis eu pede ',
            'XXX - 00X34 - Aenean leo ligula',
            'XYZ - 067 - viverra quis, feugiat a, tellus'
        ];


        var ClientMPIDecline = [
            'BBB - 078 - Lorem ipsum dolor sit amet',
            'CCC - 00V58 - consectetuer adipiscing elit',
            'DDD - 041 - Aenean commodo ligula eget dolor',
            'EEE - 677 - Aenean massa. Cum sociis natoque ',
            'GGG - 00V57 - Donec quam felis, ultricies nec, pellentesque eu',
            'VVV - 051 - Donec pede justo, fringilla vel',
            'WWW - 00C67 - Nullam dictum felis eu pede ',
            'XXX - 00X34 - Aenean leo ligula',
            'XYZ - 067 - viverra quis, feugiat a, tellus'
        ];




        var vm = new _.ViewModelSiteMissedTATAndClientMPIDecline();

        vm.applyModel(TATMissedSites,"#reports-missed" );


       

        $("#list-selector").change(function () {
            console.log(this.value);
            if (this.value === "Site List Missed TAT") {
                 vm.applyModel(TATMissedSites,"#reports-missed" );

            } else {
                 vm.applyModel(ClientMPIDecline,"#reports-missed" );

            }

        });



        

        setTimeout(function(){
            myApp.hidePreloader();

        },1000);
        
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////



    var getLockboxInboundDetail = function(groupCode , siteNumber){

        myApp.showPreloader('Preparing');

        var api = new _.API();

        if(groupCode && siteNumber){

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/detail?forGroupCode="+groupCode+"&forSiteNumber="+siteNumber,inboundDetailcallback);

        }
        else{


       

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/detail",inboundDetailcallback);
        
        
        }

        
        function inboundDetailcallback (success, data){

            if(success){

                
                
               var vm = new _.ViewModelInbound();

               vm.applyModel(data);


                
                setTimeout(function(){

                    myApp.hidePreloader();

                },500);
                

            }

            else{

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                        function () {
                            myApp.hidePreloader();
                        },

                        function () {
                            myApp.hidePreloader();
                        }
                );
            }



        };


    };

  


    var getLockboxOutboundDetail = function(groupCode , siteNumber){

        myApp.showPreloader('Preparing');

        var api = new _.API();

        if(groupCode && siteNumber){
            
            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/detail?forGroupCode="+groupCode+"&forSiteNumber="+siteNumber,outboundDetailcallback);


        }
        else{


       

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/detail",outboundDetailcallback);
        
        
        }


        function outboundDetailcallback (success, data){

            if(success){
               

               var vm = new _.ViewModelOutbound();

               vm.applyModel(data);
    
                setTimeout(function(){

                    myApp.hidePreloader();

                },500);
                

            }

            else{

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                        function () {
                            myApp.hidePreloader();
                        },

                        function () {
                            myApp.hidePreloader();
                        }
                );
            }



        };


    };




    var getClaimDetail = function(groupCode , siteNumber){

        myApp.showPreloader('Preparing');

        var api = new _.API();

        if(groupCode && siteNumber){

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/detail?forGroupCode="+groupCode+"&forSiteNumber="+siteNumber,claimDetailcallback);


        }
        else{


       

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/detail",claimDetailcallback);
        
        
        }


        function claimDetailcallback (success, data){

            if(success){
               

               var vm = new _.ViewModelClaimDetail();

               vm.applyModel(data);
    
                setTimeout(function(){

                    myApp.hidePreloader();

                },500);
                

            }

            else{

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed', 

                        function () {
                            myApp.hidePreloader();
                        },

                        function () {
                            myApp.hidePreloader();
                        }
                );

            }



        };


    };
    

		$("#inboundTransition").on("click", function(){
	  		 mainView.loadPage("lockbox-inbound.html");
		});
		$("#outboundTransition").on("click", function(){
	  		 mainView.loadPage("lockbox-outbound.html");
		});
		$("#keyinTransition").on("click", function(){
	  		 mainView.loadPage("keyin-detail.html");
		});
		$("#claimTransition").on("click", function(){
	  		 mainView.loadPage("claim.html");
		});








});