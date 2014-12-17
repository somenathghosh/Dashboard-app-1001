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

$(document).ready(function() {



    // Initialize your app
    var myApp = new Framework7({
        //swipePanel: 'left',

        actionsCloseByOutside: false,
        modalCloseByOutside: false,
        popupCloseByOutside: false,
        preloadPreviousPage: false,
        notificationCloseOnClick:true

        //modalPreloaderTitle: "Your Dashboard is getting prepared. Please wait….!!!"
    });


    var $$ = Framework7.$;


    var mainView = myApp.addView('.view-main', {

        dynamicNavbar: true
    });

    var homePopupView = myApp.addView('.popup-view', {

        dynamicNavbar: true
    });


    var inboundPopupView = myApp.addView('.popup-view-inbound', {

        dynamicNavbar: true
    });


    var outboundPopupView = myApp.addView('.popup-view-outbound', {

        dynamicNavbar: true
    });

    var claimPopupView = myApp.addView('.popup-view-claim', {

        dynamicNavbar: true
    });

    var keyinPopupView = myApp.addView('.popup-view-keyin', {

        dynamicNavbar: true
    });


    var reportPopupView = myApp.addView('.popup-view-reports', {

        dynamicNavbar: true
    });


    /**************************************************************************************************/


    function sequence(i) {
        for (var j = 0; j < document.getElementsByClassName('step-' + i).length; j++) {
            document.getElementsByClassName('step-' + i)[j].classList.remove("hidden")
            $('#icon-' + i + j).addClass('animated bounce');
        }

    };


    $(".group-codes").on("change", function(e) {
        var changedGroup = $(this);
        var data = [{
            'groupCode': 'XXX',
            'siteNumbers': ['123', '456', '789']
        }, {
            'groupCode': 'YYY',
            'siteNumbers': ['098', '765', '432']
        }, {
            'groupCode': 'VVV',
            'siteNumbers': ['146', '257', '369']
        }, {
            'groupCode': 'CCC',
            'siteNumbers': ['098', '765', '432']
        }, {
            'groupCode': 'NNN',
            'siteNumbers': ['111', '222', '333']
        }, {
            'groupCode': 'MMM',
            'siteNumbers': ['444', '555', '777']
        }, {
            'groupCode': 'AAA',
            'siteNumbers': ['888', '999', '000']
        }, {
            'groupCode': 'BBB',
            'siteNumbers': ['112', '223', '445']
        }];
        for (var index in data) {
            if (changedGroup.val() == data[index].groupCode) {
                setSiteNumbers(data, index);
            }
        }
    });

    function setGroupCodes() {
        var data = [{
            'groupCode': 'XXX',
            'siteNumbers': ['123', '456', '789']
        }, {
            'groupCode': 'YYY',
            'siteNumbers': ['098', '765', '432']
        }, {
            'groupCode': 'VVV',
            'siteNumbers': ['146', '257', '369']
        }, {
            'groupCode': 'CCC',
            'siteNumbers': ['098', '765', '432']
        }, {
            'groupCode': 'NNN',
            'siteNumbers': ['111', '222', '333']
        }, {
            'groupCode': 'MMM',
            'siteNumbers': ['444', '555', '777']
        }, {
            'groupCode': 'AAA',
            'siteNumbers': ['888', '999', '000']
        }, {
            'groupCode': 'BBB',
            'siteNumbers': ['112', '223', '445']
        }];
        $(".group-codes").html("");
        for (var index in data) {
            if (index == 0) {
                $(".group-codes").append("<option value=" + data[index].groupCode + " selected>" + data[index].groupCode + "</option>");
                $(".group-code-after").html(data[index].groupCode);
                setSiteNumbers(data, index);
            } else {
                $(".group-codes").append("<option value=" + data[index].groupCode + ">" + data[index].groupCode + "</option>");
            }
        }
    }


    function setSiteNumbers(data, index) {
        $(".site-numbers").html("");
        for (var index2 in data[index].siteNumbers) {
            if (index2 == 0) {
                $(".site-numbers").append("<option value=" + data[index].siteNumbers[index2] + " selected>" + data[index].siteNumbers[index2] + "</option>");
                $(".site-number-after").html(data[index].siteNumbers[index2]);
            } else {
                $(".site-numbers").append("<option value=" + data[index].siteNumbers[index2] + " >" + data[index].siteNumbers[index2] + "</option>");
            }
        }
    }



    $('.open-popup').on('click', function() {

        $('.open-popup').html('');
        $('.open-popup').html('<i class="icon icon-filterFilled "></i>');
        myApp.popup(this.getAttribute('data-trig'));
    });


    $('.close-popup').on('click', function() {

        $('.open-popup').html('');
        $('.open-popup').html('<i class="icon icon-filter "></i>');

    });


    function showNotification(options){

        myApp.addNotification({
            title: options.title || "HL-Board Notification",
            subtitle: options.subtitle || undefined,
            message: options.message,
            hold:options.hold || 4000,
            media: '<i class="icon icon-notification"></i>',
            closeOnClick: true
        });



    }




    //---------------------------------------------------------------------------------------------//



    /************************************************************************************************/

   

    var homelink = $('#goHome');

    $('.loadingPage').waitForImages({

        waitForAll: true,
        finished: function() {




            //myApp.showPreloader('Loading');
            myApp.showIndicator();
            var date = new Date();


            localStorage.deviceID = '6ac90d0e-20db-4766-9767-c675bde0ef1f';
            //localStorage.removeItem("deviceID");
            setTimeout(function() {

                if (!localStorage.deviceID) {

                    myApp.hideIndicator();

                    $('#registrationDate').val(date.dateNow());
                    myApp.popup('.popup-app-settings');
                    $('.appSetButton').click(function() {
                        var data = {};
                        var checkFlag = true;
                        if ($('#name').val()) {
                            $('#regName').removeClass("errorClass");
                            data.fullName = $('#name').val();
                        } else {
                            checkFlag = false;
                            $('#regName').addClass("errorClass");

                        }
                        if ($('#email').val().indexOf("@") > -1) {
                            $('#regEmail').removeClass("errorClass");
                            data.email = $('#email').val();
                        } else {
                            $('#regEmail').addClass("errorClass");
                            checkFlag = false;

                        }
                        if ($('#deviceID').val()) {
                            $('#regId').removeClass("errorClass");
                            data.deviceID = $('#deviceID').val();
                        } else {
                            $('#regId').addClass("errorClass");
                            checkFlag = false;
                        }

                        if (checkFlag) {
                            myApp.closeModal('.popup-app-settings');

                            data.registrationDate = $('#registrationDate').val();
                            myApp.hideIndicator();
                            myApp.showPreloader('Registering your Device');

                            _.registration(data, function(success) {
                                if (success) {

                                    localStorage.deviceID = data.deviceID;
                                    localStorage.registeredUser = data.fullName;

                                    setTimeout(function() {

                                        myApp.hideIndicator();
                                        myApp.showIndicator();
                                        buildHomePage(function() {
                                            setTimeout(function() {
                                                myApp.hideIndicator();
                                                $('#main-view-test-fadein').removeClass('animated zoomIn');

                                            }, 500);
                                        });

                                    }, 500);



                                } else {


                                    myApp.alert('This Device is not registered. Please contact help desk for more information. <br> HelpDesk: 800-XXX-XXXX', 'Error:', function() {
                                        myApp.hidePreloader();
                                        myApp.popup('.popup-app-settings');


                                    });


                                }


                            });

                        }

                    });




                } else {

                    //myApp.hideIndicator();

                    localStorage.lastVisitedDateTime = localStorage.visitedNow || (date.dateNow() + ' ' + date.timeNow());
                    localStorage.visitedNow = date.dateNow() + ' ' + date.timeNow();

                    //myApp.showIndicator();

                    buildHomePage(function() {

                        setTimeout(function() {
                            myApp.hideIndicator();

                            $('#main-view-test-fadein').removeClass('animated zoomIn');
                            showNotification({
                                
                                message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('homeGrCode') + " and Site Number: "+ sessionStorage.getItem('homeSiteNumber')

                            });

                        }, 200);




                    });


                }

            }, 3000);

        }
    });



    $$('.popup-filter').on('open', function() {
        setGroupCodes();
    });

    $$('.keyin-popup').on('open', function() {
        setGroupCodes();
    });

    $$('.popup-filter-lockbox-inbound').on('open', function() {
        setGroupCodes();
    });

    $$('.popup-filter-lockbox-outbound').on('open', function() {
        setGroupCodes();
    });

    $$('.popup-filter-claim').on('open', function() {
        setGroupCodes();
    });
    $$('.popup-view-reports').on('open', function() {
        setGroupCodes();
    });







    function buildHomePage(callback) {

        sessionStorage.setItem("homeGrCode","All");
        sessionStorage.setItem("homeSiteNumber","All");



        var pie = new D3PieChart();

        function startAnimation(callbackForStartAnimation) {
            var chartData = [

                {
                    label: "File In Error",
                    value: 2
                }, {
                    label: "File in Process",
                    value: 30
                }, {
                    label: "File Processed",
                    value: 68
                }
            ];



            var chartKeyinData = [

                {
                    label: "File Submitted",
                    value: 100
                }, {
                    label: "File in Progress",
                    value: 100
                }, {
                    label: "File Assigned",
                    value: 100
                },

                {
                    label: "File Completed",
                    value: 100
                }
            ];



            $(".loadingPage").addClass('animated zoomOut');

            setTimeout(function() {
                $(".loadingPage").addClass("hidden");
                $(".views").removeClass("hidden");
                $(".overlay").removeClass("hidden");
                var vm = new _.ViewModelHomeWelcome();
                vm.applyModel();
                $('#main-view-test-fadein').addClass('animated zoomIn');



                setTimeout(function() {



                    pie.draw({
                        data: chartData,
                        showLabels: true,
                        labelType: "percent",
                        isDonut: true,
                        donutRatio: 0.35,
                        mainView: mainView,
                        page: "lockbox-inbound.html",
                        colors: ["#DC3912", "#FCB446", "#109618"],
                        selector: "#chartL1",
                        showLegend: false



                    }, function() {
                        $('#chartL1').addClass('animated zoomIn');


                    });


                    setTimeout(function() {


                        pie.draw({
                            data: chartData,
                            showLabels: true,
                            labelType: "percent",
                            isDonut: true,
                            donutRatio: 0.35,
                            mainView: mainView,
                            page: "lockbox-outbound.html",
                            colors: ["#DC3912", "#FCB446", "#109618"],
                            selector: "#chartL3",
                            showLegend: false



                        }, function() {
                            $('#chartL3').addClass('animated zoomIn');


                        });



                        setTimeout(function() {

                            pie.draw({
                                data: chartKeyinData,
                                showLabels: true,
                                labelType: "percent",
                                isDonut: false,
                                donutRatio: 0.0,
                                mainView: mainView,
                                page: "keyin-detail.html",
                                colors: ["#109618", "#FCB446", "#AE2706", "#7211CE"],
                                selector: "#chartL2",
                                showLegend: false



                            }, function() {

                                $('#chartL2').addClass('animated zoomIn');

                            });




                            setTimeout(function() {

                                pie.draw({
                                    data: chartData,
                                    showLabels: true,
                                    labelType: "percent",
                                    isDonut: true,
                                    donutRatio: 0.35,
                                    mainView: mainView,
                                    page: "claim.html",
                                    colors: ["#DC3912", "#FCB446", "#109618"],
                                    selector: "#chartL4",
                                    showLegend: false



                                }, function() {

                                    $('#chartL4').addClass('animated zoomIn');
                                    callbackForStartAnimation();

                                });




                            }, 500);

                        }, 500);

                    }, 500);


                }, 500);
            }, 800);



        }


        startAnimation(function() {

            refreshBuildHomePage(callback);

        });



    };



    function refreshBuildHomePage(callback,groupCode, siteNumber) {


        var pie = new D3PieChart();
       
        myApp.showIndicator();

        var api = new _.API();

        var url;

        if(groupCode && siteNumber){
            url="https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/home?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber;
        }
        else{
            url="https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/home";
        }

        api.getIt(url, inboundHomeCallback);



        function inboundHomeCallback(success, data) {

            if (success) {

                var vm = new _.ViewModelHomeWelcome();
                vm.applyModel();

                var vm = new _.ViewModelHomeInbound();
                vm.applyModel(data);
                var cData = new _.ChartDataCreator(data);

                setTimeout(function() {
                        

                        pie.draw({
                            data: cData.chartData,
                            showLabels: true,
                            labelType: "percent",
                            isDonut: true,
                            donutRatio: 0.35,
                            mainView: mainView,
                            page: "lockbox-inbound.html",
                            colors: ["#DC3912", "#FCB446", "#109618"],
                            selector: "#chartL1",
                            showLegend: false



                        }, function() {



                        });


                }, 200);

                var api = new _.API();
                var url;

                if(groupCode && siteNumber){

                    url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/home?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber;
                }
                else{
                    url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/home";
                }
               
                api.getIt(url, outboundHomeCallback);

            } else {

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                    function() {
                        myApp.hideIndicator();
                    },

                    function() {
                        myApp.hideIndicator();
                    }
                );

            }

        };


        function outboundHomeCallback(success, data) {

            if (success) {

                var vm = new _.ViewModelOutboundHome();
                vm.applyModel(data);

                var cData = new _.ChartDataCreator(data);

                setTimeout(function() {
                pie.draw({
                    data: cData.chartData,
                    showLabels: true,
                    labelType: "percent",
                    isDonut: true,
                    donutRatio: 0.35,
                    mainView: mainView,
                    page: "lockbox-outbound.html",
                    colors: ["#DC3912", "#FCB446", "#109618"],
                    selector: "#chartL3",
                    showLegend: false



                }, function() {


                });
            },400);

                var url;

                if(groupCode && siteNumber){

                    url="https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/home?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber;
                }
                else{
                    url="https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/home";
                }

                api.getIt(url, keyInHomeCallback);
              

            } else {

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                    function() {
                        myApp.hideIndicator();
                    },

                    function() {
                        myApp.hideIndicator();
                    }
                );

            }

        };

        function keyInHomeCallback(success, data) {

            if (success) {

                var vm = new _.ViewModelHomeKeyIn();
                vm.applyModel(data);
                

                var cData = new _.ChartDataCreator(data);

                 setTimeout(function() {
                pie.draw({
                    data: cData.chartKeyinData,
                    showLabels: true,
                    labelType: "percent",
                    isDonut: false,
                    donutRatio: 0.0,
                    mainView: mainView,
                    page: "keyin-detail.html",
                    colors: ["#109618", "#FCB446", "#AE2706", "#7211CE"],
                    selector: "#chartL2",
                    showLegend: false



                }, function() {



                });
            },600);

                var url;

                if(groupCode && siteNumber){

                    url="https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/home?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber
                }
                else{
                    url="https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/home"
                }

                api.getIt(url, claimHomeCallback);

            } else {

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                    function() {
                        myApp.hideIndicator();
                    },

                    function() {
                        myApp.hideIndicator();
                    }
                );

            }

        };


        function claimHomeCallback(success, data) {

            if (success) {

                var vm = new _.ViewModelClaim();
                vm.applyModel(data);

                var cData = new _.ChartDataCreator(data);

                 setTimeout(function() {
                pie.draw({
                    data: cData.chartData,
                    showLabels: true,
                    labelType: "percent",
                    isDonut: true,
                    donutRatio: 0.35,
                    mainView: mainView,
                    page: "claim.html",
                    colors: ["#DC3912", "#FCB446", "#109618"],
                    selector: "#chartL4",
                    showLegend: false



                }, function() {

                    callback();

                });
            },800);

            } else {

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                    function() {
                        myApp.hideIndicator();
                    },

                    function() {
                        myApp.hideIndicator();
                    }
                );

            }

        };

        


    };


    $('.submitButton-home-filter').click(function() {

        var groupCode = $('#groupCode-home').val();
        var siteNumber = $('#siteNumber-home').val();
        sessionStorage.setItem("homeGrCode",groupCode);
        sessionStorage.setItem("homeSiteNumber",siteNumber);
        
        if(groupCode==="All" && siteNumber ==="All"){

            refreshBuildHomePage(function() {

                setTimeout(function() {

                    myApp.hideIndicator();
                    showNotification({
                                
                        message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('homeGrCode') + " and Site Number: "+ sessionStorage.getItem('homeSiteNumber')

                    });

                }, 500);

            });


        }
        else{

            refreshBuildHomePage(function() {

                setTimeout(function() {

                    myApp.hideIndicator();
                    showNotification({
                                
                        message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('homeGrCode') + " and Site Number: "+ sessionStorage.getItem('homeSiteNumber')

                    });

                }, 500);

            },groupCode, siteNumber);

        }


    });


    $('.submitButton-home-reset').click(function() {


        sessionStorage.setItem("homeGrCode","All");
        sessionStorage.setItem("homeSiteNumber","All");

        refreshBuildHomePage(function() {

            setTimeout(function() {

                myApp.hideIndicator();
                showNotification({
                            
                    message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('homeGrCode') + " and Site Number: "+ sessionStorage.getItem('homeSiteNumber')

                });

            }, 500);

        });



    });



    /************************************************************************************************/


    myApp.onPageInit('index', function(page) {
        //myApp.showPreloader("Preparing");
        myApp.showIndicator();
        var groupCode;
        var siteNumber;
        refreshBuildHomePage(function() {

            setTimeout(function() {

                myApp.hideIndicator();

            }, 1000);

        },groupCode, siteNumber);

       
        homelink.prop("href", "#");
        $('.open-popup').on('click', function() {
            console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filterFilled "></i>');
            myApp.popup(this.getAttribute('data-trig'));
        });


        $('.close-popup').on('click', function() {
            //console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filter "></i>');
            //myApp.popup(this.getAttribute('data-trig'));
        });



    });



    myApp.onPageInit('*', function(page) {
        console.log(page.name + ' initialized');

    });



    function renderKeyInDetailWorklist(groupCode, siteNumber, org, callback) {

        var pie = new D3PieChart();
        var api = new _.API();


        if (groupCode && siteNumber && org) {


            api.getIt('https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/worklist?forGroupCode=' + groupCode + '&forSiteNumber=' + siteNumber + '&forOrg=' + org, function(success, data) {
                if (success) {

                    var cData = new _.ChartDataCreator(data);

                    pie.draw({
                        data: cData.chartKeyinDataWorkList,
                        showLabels: true,
                        labelType: "percent",
                        isDonut: false,
                        donutRatio: 0.0,
                        mainView: mainView,
                        page: "",
                        colors: ["#DC3912", "#FF9900", "#109618", "#7211CE", "#990099", "#000000"],
                        selector: "#chartL5",
                        showLegend: false,
                        width: 500,
                        height: 500



                    }, function() {
                        if (callback) {
                            callback();
                        }


                    });



                } else {

                    myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                        function() {
                            myApp.hideIndicator();
                        },

                        function() {
                            myApp.hideIndicator();
                        }
                    );


                }

            });




        } else {



            api.getIt('https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/worklist', function(success, data) {
                if (success) {
                    var cData = new _.ChartDataCreator(data);

                    pie.draw({
                        data: cData.chartKeyinDataWorkList,
                        showLabels: true,
                        labelType: "percent",
                        isDonut: false,
                        donutRatio: 0.0,
                        mainView: mainView,
                        page: "",
                        colors: ["#DC3912", "#FF9900", "#109618", "#7211CE", "#990099", "#000000"],
                        selector: "#chartL5",
                        showLegend: false,
                        width: 500,
                        height: 500



                    }, function() {

                        $('#chartL5').addClass('animated zoomIn');

                    });


                } else {

                    myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                        function() {
                            myApp.hideIndicator();
                        },

                        function() {
                            myApp.hideIndicator();
                        }
                    );


                }

            });

        }


    };

    function renderKeyInDetailTAT(groupCode, siteNumber, callback) {

        var pie = new D3PieChart();
        var api = new _.API();

        if (groupCode && siteNumber) {

            api.getIt('https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/batchTAT?forGroupCode=' + groupCode + '&forSiteNumber=' + siteNumber, function(success, data) {
                if (success) {

                    pie.draw({
                        data: data,
                        showLabels: true,
                        labelType: "percent",
                        isDonut: false,
                        donutRatio: 0.0,
                        mainView: mainView,
                        page: "",
                        colors: ["#DC3912", "#FCB446", "#109618"],
                        selector: "#chartL6",
                        showLegend: false


                    }, function() {

                        if (callback) {

                            callback();
                        }

                    });

                    //console.log(callback);



                } else {

                    myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                        function() {
                            myApp.hideIndicator();
                        },

                        function() {
                            myApp.hideIndicator();
                        }
                    );

                }

            });


        } else {




            api.getIt('https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/batchTAT', function(success, data) {
                if (success) {


                    pie.draw({
                        data: data,
                        showLabels: true,
                        labelType: "percent",
                        isDonut: false,
                        donutRatio: 0.0,
                        mainView: mainView,
                        page: "",
                        colors: ["#DC3912", "#FCB446", "#109618"],
                        selector: "#chartL6",
                        showLegend: false


                    }, function() {

                        $('#chartL6').addClass('animated zoomIn');

                    });


                } else {

                    myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                        function() {
                            myApp.hideIndicator();
                        },

                        function() {
                            myApp.hideIndicator();
                        }
                    );

                }

            });

        }

    };


    function renderKeyInDetailVolume(groupCode, callback) {

        var api = new _.API();
        var url;
        if (groupCode) {

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/volume?forGroupCode=' + groupCode;

        } else {

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/volume';
        }




        api.getIt(url, function(success, data) {

            if (success) {

                var discreteBarChart = new D3DiscreteBarChart();

                discreteBarChart.triggerIt({

                    color: ['#DC3912', '#FF9900'],
                    containerId: '#chartL7',
                    data: data


                }, function(success) {
                    if (callback) {

                        callback();
                    }


                });



            } else {

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                    function() {
                        myApp.hideIndicator();
                    },

                    function() {
                        myApp.hideIndicator();
                    }
                );

            }

        });




    };

    function renderKeyInDetailMPI(groupCode, siteNumber, callback) {

        var api = new _.API();
        var url;

        if (groupCode && siteNumber) {

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/MPI?forGroupCode=' + groupCode + '&forSiteNumber=' + siteNumber;
        } else {
            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/MPI';

        }
        api.getIt(url, function(success, data) {
            if (success) {

                var discreteBarChart = new D3DiscreteBarChart();

                discreteBarChart.triggerIt({

                    color: ['#DC3912', '#FF9900', '#109618', '#000099', '#000000', '#990099', 'gray'],
                    containerId: '#chartL8',
                    data: data


                }, function(success) {
                    if (callback) {

                        callback();
                    }

                });




            } else {

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                    function() {
                        myApp.hideIndicator();
                    },

                    function() {
                        myApp.hideIndicator();
                    }
                );

            }


        });


    };



    myApp.onPageInit('keyin-detail', function(page) {

        $$('#MPI-keyin-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#keyin-filter-mpi");
            }, 100);
        });

        $$('#TAT-keyin-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#keyin-filter-tat");
            }, 100);
        });
        $$('#V-keyin-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#keyin-filter-volume");
            }, 100);
        });

        $$('#WLS-keyin-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#keyin-filter-worklist-status");
            }, 100);
        });

        myApp.showIndicator();

        renderKeyInDetailWorklist();
        renderKeyInDetailVolume();
        renderKeyInDetailTAT();
        renderKeyInDetailMPI();

        setTimeout(function() {

            myApp.hideIndicator();
            /*
            var labels = document.getElementsByClassName("nv-label");
            for(var index in labels){
                if(labels[index].children){
                    labels[index].children[1].style.fill="white";
                }

            }
            */

        }, 1000);

        $('.submitButton-keyin-worklist').click(function() {


            var groupCode = $('#groupCode-keyin-worklist').val();
            var siteNumber = $('#siteNumber-keyin-worklist').val();
            var org = $('#org-keyin-worklist').val();

            myApp.showIndicator();
            renderKeyInDetailWorklist(groupCode, siteNumber, org, function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                }, 500);

            });

        });

        $('.submitButton-keyin-volume').click(function() {


            var groupCode = $('#groupCode-keyin-volume').val();
            myApp.showIndicator();
            renderKeyInDetailVolume(groupCode, function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                }, 500);

            });

        });


        $('.submitButton-keyin-TAT').click(function() {


            var groupCode = $('#groupCode-keyin-TAT').val();
            var siteNumber = $('#siteNumber-keyin-TAT').val();
            myApp.showIndicator();
            renderKeyInDetailTAT(groupCode, siteNumber, function() {

                setTimeout(function() {

                    myApp.hideIndicator();

                }, 500);



            });

        });

        $('.submitButton-keyin-MPI').click(function() {


            var groupCode = $('#groupCode-keyin-MPI').val();
            var siteNumber = $('#siteNumber-keyin-MPI').val();
            myApp, showIndicator();
            renderKeyInDetailMPI(groupCode, siteNumber, function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                }, 500);

            });

        });


        $('.open-popup').on('click', function() {
            //console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filterFilled "></i>');
            myApp.popup(this.getAttribute('data-trig'));
            //myApp.accordionOpen(this.getAttribute('x-link'));

        });


        $('.close-popup').on('click', function() {
            //console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filter "></i>');
            //myApp.popup(this.getAttribute('data-trig'));
        });

    });




    myApp.onPageInit('claim', function(page) {

        sessionStorage.setItem('claimGrCode',"All");
        sessionStorage.setItem('claimSiteNumber',"All");
        myApp.showIndicator();

        getClaimDetail(function() {

            setTimeout(function() {
                myApp.hideIndicator();
                showNotification({
                            subtitle:"You are in Claim",
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('claimGrCode') + " and Site Number: "+ sessionStorage.getItem('claimSiteNumber')

                });
            }, 1000);
        });

        $('.intClear a').click(function() {
            clearInterval(arrowSequence);
            homelink.prop("href", "#");


        });

        var i = 0;
        var arrowSequence =
            setInterval(function() {
                sequence(i);
                i++;

                if (i == 5) {

                    clearInterval(arrowSequence);
                }
            }, 1000);


        $("#isSequnceSelectedClaim").change(function() {
            if ($("#isSequnceSelectedClaim").is(':checked')) {
                var i = 0;
                arrowSequence =
                    setInterval(function() {
                        sequence(i);

                        i++;
                        if (i === 5) {
                            clearInterval(arrowSequence);
                        }
                    }, 1000);
            } else {
                clearInterval(arrowSequence);
                $('.step').addClass('hidden');
            }
        });



        $('.submitButton-claim-detail').click(function() {

            var groupCode = $('#groupCode-claim').val();
            var siteNumber = $('#siteNumber-claim').val();
            sessionStorage.setItem('claimGrCode',groupCode);
            sessionStorage.setItem('claimSiteNumber',siteNumber);

            myApp.showIndicator();


            if(groupCode==="All" && siteNumber === "All"){

                getClaimDetail(function() {

                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({
                            
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('claimGrCode') + " and Site Number: "+ sessionStorage.getItem('claimSiteNumber')

                        });
                    }, 1000);

                });

            }

            else{

                getClaimDetail(function() {

                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({
                            
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('claimGrCode') + " and Site Number: "+ sessionStorage.getItem('claimSiteNumber')

                        });
                    }, 1000);

                }, groupCode, siteNumber);

            }
            
            


        });

        $('.submitButton-claim-detail-reset').click(function() {

            
            sessionStorage.setItem('claimGrCode',"All");
            sessionStorage.setItem('claimSiteNumber',"All");
            myApp.showIndicator();
            getClaimDetail(function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({
                            
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('claimGrCode') + " and Site Number: "+ sessionStorage.getItem('claimSiteNumber')

                        });
                }, 1000);

            });


        });



        $('.open-popup').on('click', function() {
            console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filterFilled "></i>');
            myApp.popup(this.getAttribute('data-trig'));
        });


        $('.close-popup').on('click', function() {
            //console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filter "></i>');
            //myApp.popup(this.getAttribute('data-trig'));
        });



    });




    myApp.onPageInit('lockbox-outbound', function(page) {


        sessionStorage.setItem('outboundGrCode',"All");
        sessionStorage.setItem('outboundSiteNumber',"All");

        myApp.showIndicator();
        getLockboxOutboundDetail(function() {

            setTimeout(function() {
                myApp.hideIndicator();
                showNotification({
                            subtitle:"You are in Outbound",
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('outboundGrCode') + " and Site Number: "+ sessionStorage.getItem('outboundSiteNumber')

                        });
            }, 1000);


        });


        $('.intClear a').click(function() {

            clearInterval(arrowSequence);

        });

        var i = 0;
        var arrowSequence =
            setInterval(function() {
                sequence(i);
                i++;
                if (i == 5) {
                    //console.log(arrowSequence);
                    clearInterval(arrowSequence);
                }
            }, 1000);


        $("#isSequnceSelectedOut").change(function() {
            if ($("#isSequnceSelectedOut").is(':checked')) {
                var i = 0;
                arrowSequence =
                    setInterval(function() {
                        sequence(i);
                        i++;
                        if (i == 5) {
                            clearInterval(arrowSequence);
                        }
                    }, 1000);
            } else {
                clearInterval(arrowSequence);
                $('.step').addClass('hidden');
            }
        });



        $('.submitButton-Outbound-detail').click(function() {

            var groupCode = $('#groupCode-outbound').val();
            var siteNumber = $('#siteNumber-outbound').val();
            sessionStorage.setItem('outboundGrCode',groupCode);
            sessionStorage.setItem('outboundSiteNumber',siteNumber);

            myApp.showIndicator();

            if(groupCode==="All" && siteNumber === "All"){
                getLockboxOutboundDetail(function() {

                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({
                            
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('outboundGrCode') + " and Site Number: "+ sessionStorage.getItem('outboundSiteNumber')

                        });
                    }, 1000);


                });
            }
            else
            {

                getLockboxOutboundDetail(function() {

                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({
                            
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('outboundGrCode') + " and Site Number: "+ sessionStorage.getItem('outboundSiteNumber')

                        });
                    }, 1000);


                }, groupCode, siteNumber);

            

            }


        });


        $('.submitButton-Outbound-detail-reset').click(function() {

            sessionStorage.setItem('outboundGrCode',"All");
            sessionStorage.setItem('outboundSiteNumber',"All");
            
            myApp.showIndicator();
            getLockboxOutboundDetail(function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({
                            

                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('outboundGrCode') + " and Site Number: "+ sessionStorage.getItem('outboundSiteNumber')

                        });
                }, 1000);


            });


        });


        $('.open-popup').on('click', function() {
            console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filterFilled "></i>');
            myApp.popup(this.getAttribute('data-trig'));
        });


        $('.close-popup').on('click', function() {
            //console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filter "></i>');
            //myApp.popup(this.getAttribute('data-trig'));
        });



    });



    myApp.onPageInit('lockbox-inbound', function(page) {


        sessionStorage.setItem('inboundGrCode',"All");
        sessionStorage.setItem('inboundSiteNumber',"All");


        myApp.showIndicator();

        getLockboxInboundDetail(function() {

            setTimeout(function() {
                myApp.hideIndicator();
                showNotification({

                            subtitle:"You are in Inbound",
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('inboundGrCode') + " and Site Number: "+ sessionStorage.getItem('inboundSiteNumber')

                        });
            }, 1000);


        });




        $('.intClear a').click(function() {
            clearInterval(arrowSequence);

        });

        var i = 0;
        var arrowSequence = setInterval(function() {
            sequence(i);
            i++;
            if (i == 7) {
                //console.log(arrowSequence);
                clearInterval(arrowSequence);
            }
        }, 1000);


        $("#isSequnceSelected").change(function() {
            if ($("#isSequnceSelected").is(':checked')) {
                var i = 0;
                arrowSequence = setInterval(function() {
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


        $('.submitButton-Inbound-detail').click(function() {


            var groupCode = $('#groupCode-inbound').val();
            var siteNumber = $('#siteNumber-inbound').val();

            sessionStorage.setItem('inboundGrCode',groupCode);
            sessionStorage.setItem('inboundSiteNumber',siteNumber);

            myApp.showIndicator();

            if(groupCode==="All" && siteNumber === "All"){
                getLockboxInboundDetail(function() {
                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({
                            
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('inboundGrCode') + " and Site Number: "+ sessionStorage.getItem('inboundSiteNumber')

                        });
                    }, 1000);
                });

            }
            else{
                getLockboxInboundDetail(function() {
                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({
                            
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('inboundGrCode') + " and Site Number: "+ sessionStorage.getItem('inboundSiteNumber')

                        });
                    }, 1000);
                }, groupCode, siteNumber);
            }

        });


        $('.submitButton-Inbound-detail-reset').click(function() {

            sessionStorage.setItem('inboundGrCode',"All");
            sessionStorage.setItem('inboundSiteNumber',"All");
           
            myApp.showIndicator();
            getLockboxInboundDetail(function() {
                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({
                            
                            message:"Currently Viewing for Group Code: "+ sessionStorage.getItem('inboundGrCode') + " and Site Number: "+ sessionStorage.getItem('inboundSiteNumber')

                        });
                }, 1000);
            });


        });





        $('.open-popup').on('click', function() {
            //console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filterFilled "></i>');
            myApp.popup(this.getAttribute('data-trig'));
        });


        $('.close-popup').on('click', function() {
            //console.log(this.getAttribute('data-trig'));
            $('.open-popup').html('');
            $('.open-popup').html('<i class="icon icon-filter "></i>');
            //myApp.popup(this.getAttribute('data-trig'));
        });



    });

    myApp.onPageInit('quality-matrix', function(page) {

        var lChart = new D3LineChart();
        var lineChartData = function(range) {

            var data = [];
            data.push({
                "key": "CRE Index",
                "values": []
            });


            if (range < 1) {
                range = Math.abs(range);
            }

            for (var i = 1; i <= range; i++) {
                data[0].values.push([i, Math.floor(Math.random() * 10)]);
            }
            return data;
        };

        var lineChartData2 = function(range) {

            var data = [];
            data.push({
                "key": "QC Effectiveness",
                "values": []
            });


            if (range < 1) {
                range = Math.abs(range);
            }

            for (var i = 1; i <= range; i++) {
                data[0].values.push([i, Math.floor(Math.random() * 100)]);
            }
            return data;
        };

        var dataFactory = function(seriesNum, perSeries, streams) {
            return new d3.range(0, seriesNum).map(function(d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function(f, j) {
                        return {
                            y: 10 + Math.floor(Math.random() * 10000) + 30000,
                            x: j + 1
                        }
                    })
                };
            });

        }


        var publicStorage = _.PublicStore.openPort();
        //publicStorage.put('dataVolume', dataFactory);
        $('#goHome').prop("href", "index");
        publicStorage.put('QM', lineChartData);
        lChart.triggerIt({

            containerId: '#quality-matrix-charts-customer-reported-error',
            color: ['#00FF00'],
            data: publicStorage.get('QM')(10)
        }, function() {


        });

        $("#CRE-slider").on('input', function() {

            $("#CRE-slider-text").html(this.value);

            lChart.triggerIt({

                containerId: '#quality-matrix-charts-customer-reported-error',
                color: ['#00FF00'],
                data: publicStorage.get('QM')(this.value)
            });


        });



        publicStorage.put('QCE', lineChartData2);
        lChart.triggerIt({

            containerId: '#quality-matrix-charts-customer-qc-effectiveness',
            color: ['#00FF00'],
            data: publicStorage.get('QCE')(10)
        }, function() {


        });


         $("#customer-reported-error").on('click', function() {
            //mainView.loadPage('customer-reported-error');
         });

        $("#QCE-slider").on('input', function() {

            $("#QCE-slider-text").html(this.value);
            lChart.triggerIt({
                containerId: '#quality-matrix-charts-customer-qc-effectiveness',
                color: ['#00FF00'],
                data: publicStorage.get('QCE')(this.value)
            });


        });

    });

    /*-------------*/
    myApp.onPageInit('reports', function(page) {

        $$('#FAV-reports-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#reports-filter-fav");
            }, 100);
        });

        $$('#TAT-reports-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#reports-filter-tat");
            }, 100);
        });
        $$('#CV-reports-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#reports-filter-claim-volume");
            }, 100);
        });

        $$('#MPI-reports-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#reports-filter-mpi");
            }, 100);
        });

        //myApp.showPreloader('Preparing');
        myApp.showIndicator();
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
            nextButton: '#slideLinkName-next',
            prevButton: '#slideLinkName-prev',
            onSlideChangeEnd: function(slider) {
                var slideName;
                if (slides[mySlider.activeSlideIndex + 1]) {

                    slideName = slides[mySlider.activeSlideIndex + 1] + '&nbsp; <span class="fa  fa-angle-right fa-lg"></span>'


                } else {

                    slideName = '';
                }


                $('#slideLinkName-next').html(slideName);


            },
            onSlideChangeStart: function(slider) {

                var slideName;
                if (slides[mySlider.activeSlideIndex - 1]) {

                    slideName = '<span class="fa  fa-angle-left fa-lg"></span> &nbsp;' + slides[mySlider.activeSlideIndex - 1];


                } else {

                    slideName = '';
                }


                $('#slideLinkName-prev').html(slideName);

            }


        });

        $('#slideLinkName-next').html(slides[mySlider.activeSlideIndex + 1] + '&nbsp; <span class="fa  fa-angle-right fa-lg"></span>');



        $$('.slider-slide input[type="range"]').on('touchmove mousemove', function(e) {
            e.stopPropagation();
        });

        $('#goHome').prop("href", "index");


        var dataFactory = function(seriesNum, perSeries, streams) {
            return new d3.range(0, seriesNum).map(function(d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function(f, j) {
                        return {
                            y: 10 + Math.floor(Math.random() * 10000) + 30000,
                            x: j + 1
                        }
                    })
                };
            });

        }


        var dataFactoryFilter = function(seriesNum, perSeries, streams) {
            return new d3.range(0, seriesNum).map(function(d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function(f, j) {
                        return {
                            y: 10 + Math.floor(Math.random() * 1000) + 300,
                            x: j + 1
                        }
                    })
                };
            });

        }




        var dataFactory2 = function(seriesNum, perSeries, streams) {
            return new d3.range(0, seriesNum).map(function(d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function(f, j) {
                        return {
                            y: Math.floor(Math.random() * 10) + 70,
                            x: j + 1
                        }
                    })
                };
            });

        }

        var dataFactory2Filter = function(seriesNum, perSeries, streams) {
            return new d3.range(0, seriesNum).map(function(d, i) {
                return {
                    key: streams[i],
                    values: new d3.range(0, perSeries).map(function(f, j) {
                        return {
                            y: Math.floor(Math.random() * 10) + 50,
                            x: j + 1
                        }
                    })
                };
            });

        }




        var lineChartData = function(range) {

            var data = [];
            data.push({
                "key": "AVG",
                "values": []
            });
            data.push({
                "key": "Median",
                "values": []
            });

            if (range < 1) {
                range = Math.abs(range);
            }

            for (var i = 1; i <= range; i++) {
                data[0].values.push([i, Math.floor(Math.random() * 10) + 14]);
                data[1].values.push([i, 18]);
            }
            return data;
        };


        var stackedAreaChartData = function(range) {
            var data = [];
            data.push({
                "key": "Bottom 10th Percentile",
                "values": []
            });

            data.push({
                "key": "AVG",
                "values": []
            });

            data.push({
                "key": "Top 10th Percentile",
                "values": []
            });

            if (range < 1) {
                range = Math.abs(range);
            }

            for (var i = 1; i <= range; i++) {
                data[0].values.push([i, Math.floor(Math.random() * 10) + 1]);
                data[1].values.push([i, 15]);
                data[2].values.push([i, Math.floor(Math.random() * 10) + 14]);
            }
            return data;
        }


        var vBar = new D3VerticalBarChart();
        var stackedChart = new D3StackedAreaChart();
        var lChart = new D3LineChart();

        var reportsVolume = function(n, m, c) {


        }



        ////////

        var colorSlide0 = ["#109618","#FCB446"];
        var streamsSlide0 = ['Forcasted', 'Actual'];

        var publicStorage = _.PublicStore.openPort();
        publicStorage.put('dataVolume', dataFactory);




        vBar.triggerIt({
            containerId: '#reports-charts-forcasted-vs-actual',
            dataFactory: publicStorage.get('dataVolume')(2, 10, streamsSlide0),
            axisLabel: 'Lockbox EOB Volume Trend',
            color: colorSlide0
        }, function() {

            $('#reports-charts-forcasted-vs-actual').addClass('animated zoomIn');
        });


        $("#VT-slider").on('input', function() {

            $("#VT-slider-text").html(this.value);

            vBar.triggerIt({
                containerId: '#reports-charts-forcasted-vs-actual',
                dataFactory: publicStorage.get('dataVolume')(2, this.value, streamsSlide0),
                axisLabel: 'Lockbox EOB Volume Trend',
                color: colorSlide0
            });


        });

        $('.submitButton-reports-volume').click(function(e) {

            var groupCode = $('#groupCode-reports-volume').val();

            if (!groupCode || groupCode === '') {
                //console.log(groupCode);
                publicStorage.put('dataVolume', dataFactory);
            } else {
                //console.log(groupCode);
                publicStorage.put('dataVolume', dataFactoryFilter);
            }

            $("#VT-slider").val(10);
            $("#VT-slider-text").html(10);
            vBar.triggerIt({
                containerId: '#reports-charts-forcasted-vs-actual',
                dataFactory: publicStorage.get('dataVolume')(2, 10, streamsSlide0),
                axisLabel: 'Lockbox EOB Volume Trend',
                color: colorSlide0
            });

        });

        ////////

        //////

        var colorSlide2 = ['#FCB446'];
        var streamsSlide2 = ['Volume'];
        publicStorage.put('claimVolume', dataFactory);

        vBar.triggerIt({
            containerId: '#reports-claim-data-volume',
            dataFactory: publicStorage.get('claimVolume')(1, 10, streamsSlide2),
            axisLabel: 'Claim Volume Trend',
            color: colorSlide2
        });


        $("#CV-slider").on('input', function() {
            $("#CV-slider-text").html(this.value);

            vBar.triggerIt({
                containerId: '#reports-claim-data-volume',
                dataFactory: publicStorage.get('claimVolume')(1, this.value, streamsSlide2),
                axisLabel: 'Claim Volume Trend',
                color: colorSlide2
            });
        });

        $('.submitButton-reports-claim').click(function(e) {

            var groupCode = $('#groupCode-reports-claim').val();
            var siteNumber = $('#site-number-reports-claim').val();

            if (!groupCode || !siteNumber || groupCode === '' || siteNumber === '') {

                publicStorage.put('claimVolume', dataFactory);

            } else {

                publicStorage.put('claimVolume', dataFactoryFilter);

            }

            $("#CV-slider").val(10);
            $("#CV-slider-text").html(10);
            vBar.triggerIt({
                containerId: '#reports-claim-data-volume',
                dataFactory: publicStorage.get('claimVolume')(1, 10, streamsSlide2),
                axisLabel: 'Claim Volume Trend',
                color: colorSlide2
            });

        });

        //////

        var colorSlide3 = ['#0170BF'];
        var streamsSlide3 = ['% Used'];

        publicStorage.put('PMU', dataFactory2);


        vBar.triggerIt({
            containerId: '#reports-percentage-MPI-used',
            dataFactory: publicStorage.get('PMU')(1, 10, streamsSlide3),
            axisLabel: 'Percentage of MPI Used ',
            color: colorSlide3
        });


        $("#PMU-slider").on('input', function() {
            $("#PMU-slider-text").html(this.value);



            vBar.triggerIt({
                containerId: '#reports-percentage-MPI-used',
                dataFactory: publicStorage.get('PMU')(1, this.value, streamsSlide3),
                axisLabel: 'Percentage of MPI Used ',
                color: colorSlide3
            });
        });


        $('.submitButton-reports-MPI-used').click(function(e) {

            var groupCode = $('#roupCode-reports-MPI-used').val();
            var siteNumber = $('#site-number-reports-MPI-used').val();

            if (!groupCode || !siteNumber || groupCode === '' || siteNumber === '') {
                publicStorage.put('PMU', dataFactory2);

            } else {

                publicStorage.put('PMU', dataFactory2Filter);
            }

            $("#PMU-slider").val(10);
            $("#PMU-slider-text").html(10);

            vBar.triggerIt({
                containerId: '#reports-percentage-MPI-used',
                dataFactory: publicStorage.get('PMU')(1, 10, streamsSlide3),
                axisLabel: 'Percentage of MPI Used ',
                color: colorSlide3
            });

        });

        //////


        /////


        publicStorage.put('MPI', stackedAreaChartData);


        stackedChart.triggerIt({

            containerId: '#MPI-stacked-area-chart',
            color: ['#DC3912',"#109618","#FCB446" ],
            data: publicStorage.get('MPI')(10)

        }, function() {


        });


        $("#MLT-slider").on('input', function() {
            $("#MLT-slider-text").html(this.value);
            stackedChart.triggerIt({

                containerId: '#MPI-stacked-area-chart',
                color: ['#DC3912',"#109618","#FCB446" ],
                data: publicStorage.get('MPI')(this.value)

            });

        });




        //////

        /////




        publicStorage.put('TAT', lineChartData);

        lChart.triggerIt({

            containerId: '#TAT-line-chart',
            color: ["#109618","#FCB446"],
            data: publicStorage.get('TAT')(10)
        }, function() {


        });

        $("#TAT-slider").on('input', function() {

            $("#TAT-slider-text").html(this.value);

            lChart.triggerIt({

                containerId: '#TAT-line-chart',
                color: ['#00FF00', '#FF9900'],
                data: publicStorage.get('TAT')(this.value)
            });
        });

        $('.submitButton-reports-TAT').click(function() {

            var groupCode = $('#groupCode-resports-TAT').val();
            var siteNumber = $('#siteNumber-reports-TAT').val();
            $("#TAT-slider").val(10);
            $("#TAT-slider-text").html(10);

            lChart.triggerIt({

                containerId: '#TAT-line-chart',
                color: ['#00FF00', '#FF9900'],
                data: publicStorage.get('TAT')(10)
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

        vm.applyModel(TATMissedSites, "#reports-missed");




        $("#list-selector").change(function() {
            //console.log(this.value);
            if (this.value === "Site List Missed TAT") {
                vm.applyModel(TATMissedSites, "#reports-missed");

            } else {
                vm.applyModel(ClientMPIDecline, "#reports-missed");

            }

        });




        setTimeout(function() {
            myApp.hideIndicator();

        }, 1000);

    });

    /////////////////////////////////////////////////////////////////////////////////////////////////



    var getLockboxInboundDetail = function(callback, groupCode, siteNumber) {


        var api = new _.API();
        //console.log(groupCode);
        //console.log(siteNumber);
        if (groupCode && siteNumber) {

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/detail?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber, inboundDetailcallback);

        } else {




            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/detail", inboundDetailcallback);


        }


        function inboundDetailcallback(success, data) {

            if (success) {



                var vm = new _.ViewModelInbound();

                vm.applyModel(data);

                if (callback) {

                    callback();
                }



            } else {

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                    function() {
                        myApp.hideIndicator();
                    },

                    function() {
                        myApp.hideIndicator();
                    }
                );
            }



        };


    };




    var getLockboxOutboundDetail = function(callback, groupCode, siteNumber) {

        //myApp.showPreloader('Preparing');

        var api = new _.API();

        if (groupCode && siteNumber) {

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/detail?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber, outboundDetailcallback);


        } else {




            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/detail", outboundDetailcallback);


        }


        function outboundDetailcallback(success, data) {

            if (success) {


                var vm = new _.ViewModelOutbound();

                vm.applyModel(data);

                if (callback) {
                    callback();
                }


            } else {

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                    function() {
                        myApp.hideIndicator();
                    },

                    function() {
                        myApp.hideIndicator();
                    }
                );
            }



        };


    };




    var getClaimDetail = function(callback, groupCode, siteNumber) {


        var api = new _.API();

        if (groupCode && siteNumber) {

            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/detail?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber, claimDetailcallback);

        } else {




            api.getIt("https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/detail", claimDetailcallback);


        }




        function claimDetailcallback(success, data) {

            if (success) {


                var vm = new _.ViewModelClaimDetail();

                vm.applyModel(data);
                if (callback) {

                    callback();

                }




            } else {

                myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',

                    function() {
                        myApp.hideIndicator();
                    },

                    function() {
                        myApp.hideIndicator();
                    }
                );

            }



        };


    };


    $("#inboundTransition").on("click", function() {
        mainView.loadPage("lockbox-inbound.html");
    });
    $("#outboundTransition").on("click", function() {
        mainView.loadPage("lockbox-outbound.html");
    });
    $("#keyinTransition").on("click", function() {
        mainView.loadPage("keyin-detail.html");
    });
    $("#claimTransition").on("click", function() {
        mainView.loadPage("claim.html");
    });




});