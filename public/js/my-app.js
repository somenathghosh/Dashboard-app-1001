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
        notificationCloseOnClick: true

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

    var keyinPopupViewVolume = myApp.addView('.popup-view-keyin-volume', {

        dynamicNavbar: true
    });


    var keyinPopupViewTAT = myApp.addView('.popup-view-keyin-TAT', {

        dynamicNavbar: true
    });


    var reportPopupView = myApp.addView('.popup-view-reports', {

        dynamicNavbar: true
    });

    /*var creSortView = myApp.addView('.cre-view-sort', {

        dynamicNavbar: true
    });*/

    FastClick.attach(document.body);


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


    function showNotification(options) {


        var message = "Currently Viewing for Group Code: " + sessionStorage.getItem('groupCode') ;

        if( sessionStorage.getItem('siteNumber')){

            message = "Currently Viewing for Group Code: " + sessionStorage.getItem('groupCode') + " and Site Number: " + sessionStorage.getItem('siteNumber');

            if (sessionStorage.getItem('org')) {

                message = "Currently Viewing for Group Code: " + sessionStorage.getItem('groupCode') + ", Site Number: " + sessionStorage.getItem('siteNumber') + " & Org: " + sessionStorage.getItem('org');

            }

        }
        

        console.log(options);

        myApp.addNotification({
            title: options.title || message,
            hold: options.hold || 3000,
            //message:options.message|| message,
            media: '<i class="icon icon-notification"></i>'
        });



    }




    var colorPalleton = Object.create(Object.prototype, {

        violet: {
            writable: false,
            configurable: false,
            value: "#990099"
        },
        indigo: {
            writable: false,
            configurable: false,
            value: "#04B4AE"
        },
        blue: {
            writable: false,
            configurable: false,
            value: "#7211CE"
        },
        green: {
            writable: false,
            configurable: false,
            value: "#109618"
        },
        yellow: {
            writable: false,
            configurable: false,
            value: "#FCB446"
        },
        orange: {
            writable: false,
            configurable: false,
            value: "#FF9900"
        },
        red: {
            writable: false,
            configurable: false,
            value: "#DC3912"
        },
        black: {
            writable: false,
            configurable: false,
            value: "#00000"
        },
        white: {
            writable: false,
            configurable: false,
            value: "#fffff"
        },
        grey: {
            writable: false,
            configurable: false,
            value: "#A4A4A4"
        }

    });

    
    function sendCrashReport () {
        
        var argument = Array.prototype.slice.call(arguments, 1);

        myApp.confirm('Do you want to send Crash Reports?', 'App Crashed',


            function() {
                argument[0]();
            },

            function() {
                argument[1]();
            }
        );
    }
    
    

    //---------------------------------------------------------------------------------------------//



    /************************************************************************************************/

    sessionStorage.removeItem("groupCode");
    sessionStorage.removeItem("siteNumber");
    sessionStorage.removeItem("org");

    var homelink = $('#goHome');

    $('.loadingPage').waitForImages({

        waitForAll: true,
        finished: function() {




            //myApp.showPreloader('Loading');
            myApp.showIndicator();
            var date = new Date();


            localStorage.deviceID = '6ac90d0e-20db-4766-9767-c675bde0ef1f';
            localStorage.registeredUser = "Tapan Mishra";
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

                                        myApp.hidePreloader();
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

    $$('.keyin-popup-volume').on('open', function() {
        setGroupCodes();
    });

    $$('.keyin-popup-TAT').on('open', function() {
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

        sessionStorage.setItem("groupCode", "ALL");
        sessionStorage.setItem("siteNumber", "ALL");



        var pie = new D3PieChart();

        function startAnimation(callbackForStartAnimation) {
            var chartData = [

                {
                    label: "File In Error",
                    value: 2
                }, {
                    label: "File in Process",
                    value: 68
                }, {
                    label: "File Processed",
                    value: 2
                }
            ];



            var chartKeyinData = [

                {
                    label: "File Submitted",
                    value: 10
                }, {
                    label: "File in Progress",
                    value: 1000
                }, {
                    label: "File Assigned",
                    value: 100
                },

                {
                    label: "File Completed",
                    value: 10
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
                        colors: [colorPalleton.red, colorPalleton.yellow, colorPalleton.green],
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
                            colors: [colorPalleton.red, colorPalleton.yellow, colorPalleton.green],
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
                                colors: [colorPalleton.green, colorPalleton.yellow, colorPalleton.red, colorPalleton.violet],
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
                                    colors: [colorPalleton.red, colorPalleton.yellow, colorPalleton.green],
                                    selector: "#chartL4",
                                    showLegend: false



                                }, function() {

                                    $('#chartL4').addClass('animated zoomIn');
                                    callbackForStartAnimation();

                                });




                            }, 800);

                        }, 800);

                    }, 1000);


                }, 1000);
            }, 800);



        }


        startAnimation(function() {

            refreshBuildHomePage(callback);

        });



    };



    function refreshBuildHomePage(callback, groupCode, siteNumber) {


        var pie = new D3PieChart();

        myApp.showIndicator();

        var api = new _.API();

        var url;

        if (groupCode && siteNumber) {
            url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/home?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber;
        } else {
            url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/inbound/home";
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
                        colors: [colorPalleton.red, colorPalleton.yellow, colorPalleton.green],
                        selector: "#chartL1",
                        showLegend: false



                    }, function() {



                    });


                }, 200);

                var api = new _.API();
                var url;

                if (groupCode && siteNumber) {

                    url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/home?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber;
                } else {
                    url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/outbound/home";
                }

                api.getIt(url, outboundHomeCallback);

            } else {

                sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});


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
                        colors: [colorPalleton.red, colorPalleton.yellow, colorPalleton.green],
                        selector: "#chartL3",
                        showLegend: false



                    }, function() {


                    });
                }, 400);

                var url;

                if (groupCode && siteNumber) {

                    url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/home?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber;
                } else {
                    url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/home";
                }

                api.getIt(url, keyInHomeCallback);


            } else {

               sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});

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
                        colors: [colorPalleton.green, colorPalleton.yellow, colorPalleton.red, colorPalleton.violet],
                        selector: "#chartL2",
                        showLegend: false



                    }, function() {



                    });
                }, 600);

                var url;

                if (groupCode && siteNumber) {

                    url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/home?forGroupCode=" + groupCode + "&forSiteNumber=" + siteNumber
                } else {
                    url = "https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/claim/home"
                }

                api.getIt(url, claimHomeCallback);

            } else {

                sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});

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
                        colors: [colorPalleton.red, colorPalleton.yellow, colorPalleton.green],
                        selector: "#chartL4",
                        showLegend: false



                    }, function() {

                        callback();

                    });
                }, 800);

            } else {

                sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});

            }

        };




    };


    $('.submitButton-home-filter').click(function() {

        var groupCode = $('#groupCode-home').val();
        var siteNumber = $('#siteNumber-home').val();
        sessionStorage.setItem("groupCode", groupCode);
        sessionStorage.setItem("siteNumber", siteNumber);

        if (groupCode === "ALL" && siteNumber === "ALL") {

            refreshBuildHomePage(function() {

                setTimeout(function() {

                    myApp.hideIndicator();
                    showNotification({


                    });

                }, 500);

            });


        } else {

            refreshBuildHomePage(function() {

                setTimeout(function() {

                    myApp.hideIndicator();
                    showNotification({


                    });

                }, 500);

            }, groupCode, siteNumber);

        }


    });


    $('.submitButton-home-reset').click(function() {


        sessionStorage.setItem("groupCode", "ALL");
        sessionStorage.setItem("siteNumber", "ALL");

        refreshBuildHomePage(function() {

            setTimeout(function() {

                myApp.hideIndicator();
                showNotification({


                });

            }, 500);

        });



    });




    /************************************************************************************************/

    myApp.onPageInit('*', function(page) {
        //console.log(page.name + ' initialized');
        sessionStorage.removeItem("org");
        sessionStorage.removeItem("groupCode");
        sessionStorage.removeItem("siteNumber");

    });


    myApp.onPageInit('index', function(page) {
        //myApp.showPreloader("Preparing");
        myApp.showIndicator();
        var groupCode;
        var siteNumber;
        refreshBuildHomePage(function() {

            setTimeout(function() {

                myApp.hideIndicator();

            }, 1000);

        });


        homelink.prop("href", "#");
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






    function renderKeyInDetailWorklist(callback, groupCode, siteNumber, org) {

        var pie = new D3PieChart();
        var api = new _.API();
        var url;

        if (groupCode && siteNumber && org) {

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/worklist?forGroupCode=' + groupCode + '&forSiteNumber=' + siteNumber + '&forOrg=' + org;
        } else {

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/worklist';

        }




        api.getIt(url, function(success, data) {
            if (success) {
                var cData = new _.ChartDataCreator(data);

                var chartKeyinDataWorkList = [

                    {
                        label: "File Submitted",
                        value: 100
                    }, {
                        label: "File Assigned",
                        value: 100
                    }, {
                        label: "File in Progress",
                        value: 100
                    }, {
                        label: "File Completed",
                        value: 100
                    }, {
                        label: "File UnAssigned",
                        value: 100
                    }, {
                        label: "File Rejected",
                        value: 100
                    }
                ];
                pie.draw({
                    data: chartKeyinDataWorkList,
                    showLabels: true,
                    labelType: "percent",
                    isDonut: false,
                    donutRatio: 0.0,
                    mainView: mainView,
                    page: "",
                    colors: [colorPalleton.green, colorPalleton.violet, colorPalleton.yellow, colorPalleton.blue, colorPalleton.grey, colorPalleton.red],
                    selector: "#chartL5",
                    showLegend: false,
                    width: 500,
                    height: 500



                }, function() {

                    if (callback.start) {
                        callback.start();
                    }


                    setTimeout(function() {

                        pie.draw({
                            data: cData.chartKeyinDataWorkList,
                            showLabels: true,
                            labelType: "percent",
                            isDonut: false,
                            donutRatio: 0.0,
                            mainView: mainView,
                            page: "",
                            colors: [colorPalleton.green, colorPalleton.violet, colorPalleton.yellow, colorPalleton.blue, colorPalleton.grey, colorPalleton.red],
                            selector: "#chartL5",
                            showLegend: false,
                            width: 500,
                            height: 500



                        }, function() {




                            if (callback.main) {
                                /*console.log('called');
                                console.log(callback.main);*/
                                callback.main();
                            }


                            if (callback.end) {

                                callback.end();

                            }


                        });


                    }, 1000);

                });


            } else {

                sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});

            }

        });




    };

    function renderKeyInDetailTAT(callback, groupCode, siteNumber) {

        var pie = new D3PieChart();
        var api = new _.API();
        var url;
        if (groupCode && siteNumber) {
            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/batchTAT?forGroupCode=' + groupCode + '&forSiteNumber=' + siteNumber;
        } else {
            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/batchTAT';
        }

        api.getIt(url, function(success, data) {
            var recievedData = data;
            if (success) {

                var sData = [{
                    label: "Plus",
                    value: 100
                }, {
                    label: "Lite",
                    value: 1000
                }, {
                    label: "Elite",
                    value: 10000
                }];


                pie.draw({
                    data: sData,
                    showLabels: true,
                    labelType: "percent",
                    isDonut: true,
                    donutRatio: 0.35,
                    mainView: mainView,
                    page: "",
                    colors: [colorPalleton.red, colorPalleton.yellow, colorPalleton.green],
                    selector: "#chartL6",
                    showLegend: false,
                    width: 450,
                    height: 450


                }, function() {

                    setTimeout(function() {



                        pie.draw({
                            data: recievedData,
                            showLabels: true,
                            labelType: "percent",
                            isDonut: true,
                            donutRatio: 0.35,
                            mainView: mainView,
                            page: "",
                            colors: [colorPalleton.red, colorPalleton.yellow, colorPalleton.green],
                            selector: "#chartL6",
                            showLegend: false,
                            width: 450,
                            height: 450


                        }, function() {

                            if (callback) {

                                callback();
                            }

                        });

                    }, 1000);


                });


            } else {

                sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});

            }

        });


    };


    function renderKeyInDetailVolume(callback, groupCode) {

        var api = new _.API();
        var url;
        if (groupCode) {

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/volume?forGroupCode=' + groupCode;

        } else {

            url = 'https://dashboard-server-1001.herokuapp.com/api/v1/dashboard/lockbox/keyin/detail/volume';
        }




        api.getIt(url, function(success, data) {

            var recievedData = data;
            if (success) {

                var discreteBarChart = new D3DiscreteBarChart();
                var sData = [{
                    key: "Cumulative Return",
                    values: [{
                        label: "Expected Volume",
                        value: 0
                    }, {
                        label: "Actual Volume",
                        value: 0
                    }]
                }];

                discreteBarChart.triggerIt({

                    color: [colorPalleton.green, colorPalleton.yellow],
                    containerId: '#chartL7',
                    data: sData


                }, function(success) {

                    setTimeout(function() {
                        discreteBarChart.triggerIt({

                            color: [colorPalleton.green, colorPalleton.yellow],
                            containerId: '#chartL7',
                            data: recievedData


                        }, function(success) {



                            if (callback) {

                                callback();
                            }


                        });
                    }, 1000);

                });



            } else {

                sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});

            }

        });




    };

    /*    function renderKeyInDetailMPI(groupCode, siteNumber, callback) {

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
    */


    myApp.onPageInit('keyin-detail', function(page) {

        /*
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
        */

        sessionStorage.setItem("groupCode", "ALL");
        sessionStorage.setItem("siteNumber", "All");
        sessionStorage.setItem("org", "HLSC");


        myApp.showIndicator();

        var sliderObject = [

            function One() {
                
            },

            function two() {
                myApp.showIndicator();
                renderKeyInDetailVolume(function(){

                    renderKeyInDetailTAT(function(){

                        setTimeout(function(){
                            myApp.hideIndicator();
                        },500);
                    });

                });
                
            }

        ];




        var mySlider = myApp.slider('.slider-container', {
            speed: 400,
            spaceBetween: 40,

            onSlideChangeEnd: function(slider) {
                //console.log(slider);
                sliderObject[slider.activeSlideIndex]();

                sliderObject[slider.activeSlideIndex]= function function_name (argument) {
                    // body...
                };

            },
            onSlideChangeStart: function(slider) {


            }


        });


        renderKeyInDetailWorklist({

            start: function() {
                $('#chartL5').addClass('animated zoomIn');
            },

            end: function() {
                $('#chartL5').removeClass('animated zoomIn');
            },
            main: function() {

                renderKeyInDetailVolume(function() {

                    renderKeyInDetailTAT(function() {
                        setTimeout(function() {

                            myApp.hideIndicator();


                        }, 1000);

                    });

                });

            }


        });




        $('.submitButton-keyin-worklist').unbind('click').click(function() {


            var groupCode = $('#groupCode-keyin-worklist').val();
            var siteNumber = $('#siteNumber-keyin-worklist').val();
            var org = $('#org-keyin-worklist').val();

            sessionStorage.setItem("groupCode", groupCode);
            sessionStorage.setItem("siteNumber", siteNumber);
            sessionStorage.setItem("org", org);




            myApp.showIndicator();
            renderKeyInDetailWorklist({
                main: function() {

                    setTimeout(function() {

                        myApp.hideIndicator();
                        showNotification({});
                        

                    }, 500);


                }
            }, groupCode, siteNumber, org);

        });


        $('.submitButton-keyin-worklist-reset').unbind('click').click(function() {

            sessionStorage.setItem("groupCode", "ALL");
            sessionStorage.setItem("siteNumber", "ALL");
            sessionStorage.setItem("org", "HLSC");


            myApp.showIndicator();
            renderKeyInDetailWorklist({
                main: function() {

                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({});
                    }, 500);

                }
            });

        });

        $('.submitButton-keyin-volume').unbind('click').click(function() {


            var groupCode = $('#groupCode-keyin-volume').val();

            sessionStorage.removeItem("org");
            sessionStorage.removeItem("siteNumber");
            sessionStorage.setItem("groupCode", groupCode);

            myApp.showIndicator();
            renderKeyInDetailVolume(function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});
                }, 500);

            }, groupCode);

        });

        $('.submitButton-keyin-volume-reset').unbind('click').click(function() {

            sessionStorage.setItem("groupCode", "ALL");
            //sessionStorage.setItem("siteNumber", "ALL");
            essionStorage.removeItem("siteNumber");
            sessionStorage.removeItem("org");

            myApp.showIndicator();
            renderKeyInDetailVolume(function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});
                }, 500);

            }, groupCode);

        });


        $('.submitButton-keyin-TAT').unbind('click').click(function() {


            var groupCode = $('#groupCode-keyin-TAT').val();
            var siteNumber = $('#siteNumber-keyin-TAT').val();
            sessionStorage.removeItem("org");

            sessionStorage.setItem("groupCode", groupCode);
            sessionStorage.setItem("siteNumber", siteNumber);

            myApp.showIndicator();
            renderKeyInDetailTAT(function() {

                setTimeout(function() {

                    myApp.hideIndicator();
                    showNotification({});

                }, 500);



            }, groupCode, siteNumber);

        });


        $('.submitButton-keyin-TAT-reset').unbind('click').click(function() {




            sessionStorage.removeItem("org");

            sessionStorage.setItem("groupCode", "ALL");
            sessionStorage.setItem("siteNumber", "ALL");

            myApp.showIndicator();
            renderKeyInDetailTAT(function() {

                setTimeout(function() {

                    myApp.hideIndicator();
                    showNotification({});

                }, 500);



            });

        });


        /*$('.submitButton-keyin-MPI').click(function() {


            var groupCode = $('#groupCode-keyin-MPI').val();
            var siteNumber = $('#siteNumber-keyin-MPI').val();
            myApp.showIndicator();
            renderKeyInDetailMPI(groupCode, siteNumber, function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                }, 500);

            });

        });*/


        $('.open-popup-wl').on('click', function() {

            $('.open-popup-wl').html('');
            $('.open-popup-wl').html('<i class="icon icon-filterFilled "></i>');
            myApp.popup(this.getAttribute('data-trig'));


        });


        $('.close-popup-wl').on('click', function() {

            $('.open-popup-wl').html('');
            $('.open-popup-wl').html('<i class="icon icon-filter "></i>');

        });

        $('.open-popup-vol').on('click', function() {

            $('.open-popup-vol').html('');
            $('.open-popup-vol').html('<i class="icon icon-filterFilled "></i>');
            myApp.popup(this.getAttribute('data-trig'));


        });


        $('.close-popup-vol').on('click', function() {

            $('.open-popup-vol').html('');
            $('.open-popup-vol').html('<i class="icon icon-filter "></i>');

        });

        $('.open-popup-tat').on('click', function() {

            $('.open-popup-tat').html('');
            $('.open-popup-tat').html('<i class="icon icon-filterFilled "></i>');
            myApp.popup(this.getAttribute('data-trig'));


        });


        $('.close-popup-tat').on('click', function() {

            $('.open-popup-tat').html('');
            $('.open-popup-tat').html('<i class="icon icon-filter "></i>');

        });

    });




    myApp.onPageInit('claim', function(page) {

        sessionStorage.setItem('groupCode', "ALL");
        sessionStorage.setItem('siteNumber', "ALL");

        myApp.showIndicator();

        getClaimDetail(function() {

            setTimeout(function() {
                myApp.hideIndicator();
                //showNotification({});
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



        $('.submitButton-claim-detail').unbind('click').click(function() {

            var groupCode = $('#groupCode-claim').val();
            var siteNumber = $('#siteNumber-claim').val();

            sessionStorage.setItem('groupCode', groupCode);
            sessionStorage.setItem('siteNumber', siteNumber);

            myApp.showIndicator();


            if (groupCode === "All" && siteNumber === "All") {

                getClaimDetail(function() {

                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({});
                    }, 1000);

                });

            } else {

                getClaimDetail(function() {

                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({});
                    }, 1000);

                }, groupCode, siteNumber);

            }




        });

        $('.submitButton-claim-detail-reset').unbind('click').click(function() {


            sessionStorage.setItem('groupCode', "ALL");
            sessionStorage.setItem('siteNumber', "ALL");
            myApp.showIndicator();
            getClaimDetail(function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});
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



    myApp.onPageInit('lockbox-outbound', function(page) {


        sessionStorage.setItem('groupCode', "ALL");
        sessionStorage.setItem('siteNumber', "ALL");

        myApp.showIndicator();
        getLockboxOutboundDetail(function() {

            setTimeout(function() {
                myApp.hideIndicator();
                //showNotification({});
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



        $('.submitButton-Outbound-detail').unbind('click').click(function() {

            var groupCode = $('#groupCode-outbound').val();
            var siteNumber = $('#siteNumber-outbound').val();

            sessionStorage.setItem('groupCode', groupCode);
            sessionStorage.setItem('siteNumber', siteNumber);

            myApp.showIndicator();

            if (groupCode === "All" && siteNumber === "All") {
                getLockboxOutboundDetail(function() {

                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({});
                    }, 1000);


                });
            } else {

                getLockboxOutboundDetail(function() {

                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({});
                    }, 1000);


                }, groupCode, siteNumber);



            }


        });


        $('.submitButton-Outbound-detail-reset').unbind('click').click(function() {

            sessionStorage.setItem('groupCode', "ALL");
            sessionStorage.setItem('siteNumber', "ALL");

            myApp.showIndicator();
            getLockboxOutboundDetail(function() {

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});
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



    myApp.onPageInit('lockbox-inbound', function(page) {


        sessionStorage.setItem('groupCode', "ALL");
        sessionStorage.setItem('siteNumber', "ALL");


        myApp.showIndicator();

        getLockboxInboundDetail(function() {

            setTimeout(function() {
                myApp.hideIndicator();
                //showNotification({});
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


        $('.submitButton-Inbound-detail').unbind('click').click(function() {


            var groupCode = $('#groupCode-inbound').val();
            var siteNumber = $('#siteNumber-inbound').val();

            sessionStorage.setItem('groupCode', groupCode);
            sessionStorage.setItem('siteNumber', siteNumber);

            myApp.showIndicator();

            if (groupCode === "All" && siteNumber === "All") {
                getLockboxInboundDetail(function() {
                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({});
                    }, 1000);
                });

            } else {
                getLockboxInboundDetail(function() {
                    setTimeout(function() {
                        myApp.hideIndicator();
                        showNotification({});
                    }, 1000);
                }, groupCode, siteNumber);
            }

        });


        $('.submitButton-Inbound-detail-reset').unbind('click').click(function() {

            sessionStorage.setItem('groupCode', "ALL");
            sessionStorage.setItem('groupCode', "ALL");

            myApp.showIndicator();
            getLockboxInboundDetail(function() {
                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});
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

    myApp.onPageInit('customer-reported-error', function(page) {
        $("#cre-search").attr("disabled", true);


        $('input[type=checkbox]').on('change', function() {
            var clickedBox = this;
            //console.log(document.getElementsByTagName("input").length);
            for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
                if (document.getElementsByTagName("input")[i].type == "checkbox" && clickedBox != document.getElementsByTagName("input")[i]) {
                    //console.log(document.getElementsByTagName("input")[i]);
                    document.getElementsByTagName("input")[i].checked = false;
                }
            }
            //console.log(new Date());
            if (this.checked) {
                //console.log("got-here");
                $("#cre-search").removeAttr("disabled");
                $(".data-item").removeClass("item-title");
                $(".data-item").addClass("item");
                $(".item-header").removeClass("item-title");
                $(".item-header").addClass("item");
                $(".item-" + clickedBox.id).removeClass("item");
                $(".item-" + clickedBox.id).addClass("item-title");
                $(".header-" + clickedBox.id).removeClass("item");
                $(".header-" + clickedBox.id).addClass("item-title");
            } else {
                $("#cre-search").attr("disabled", true);
            }

        });
        var data = [{
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'noOfError': 1,
            'group': 'BOA',
            'site': 123,
            'typeOfIssue': 'No Photo',
            'descriptionData': 'There is no Photo'
        }, {
            'reportedDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'noOfError': 3,
            'group': 'TCS',
            'site': 321,
            'typeOfIssue': 'No Check',
            'descriptionData': 'There is no Check'
        }];

        if (data.length > 0) {
            for (var index in data) {
                if (index != data.length - 1) {
                    $("#customer-reported-error-table").append(
                        '<li class="">' +
                        '<div class="item-inner table-content">' +
                        '<div class="item data-item item-reported-date">' + data[index].reportedDate + '</div>' +
                        '<div class="item data-item item-batch-date">' + data[index].batchDate + '</div>' +
                        '<div class="item data-item item-no-of-error">' + data[index].noOfError + '</div>' +
                        '<div class="item data-item item-group">' + data[index].group + '</div>' +
                        '<div class="item data-item item-site">' + data[index].site + '</div>' +
                        '<div class="item data-item item-type-of-issue">' + data[index].typeOfIssue + '</div>' +
                        '<div class="item data-item item-description">' + data[index].descriptionData + '</div>' +
                        '</div>' +
                        '</li>'
                    );
                } else {
                    $("#customer-reported-error-table").append(
                        '<li class="">' +
                        '<div class="item-inner table-content">' +
                        '<div class="item data-item item-reported-date last">' + data[index].reportedDate + '</div>' +
                        '<div class="item data-item item-batch-date">' + data[index].batchDate + '</div>' +
                        '<div class="item data-item item-no-of-error">' + data[index].noOfError + '</div>' +
                        '<div class="item data-item item-group">' + data[index].group + '</div>' +
                        '<div class="item data-item item-site">' + data[index].site + '</div>' +
                        '<div class="item data-item item-type-of-issue">' + data[index].typeOfIssue + '</div>' +
                        '<div class="item data-item item-description">' + data[index].descriptionData + '</div>' +
                        '</div>' +
                        '</li>'
                    );
                }

            }
        } else {
            $("#customer-reported-error-table").html(
                '<li class="item-content">' +
                '<div class="item-inner">' +
                '<div class="item item-reported-date">Nothing found</div>' +
                '</li>'

            );

        }

    });

    myApp.onPageInit('qc-effectiveness', function(page) {
        $("#cre-search").attr("disabled", true);
        $('#qa-date-selector').on('input', function() {
            $('#qa-date-text').html("QA Date: " + $('#qa-date-selector').val());
        });

        $('input[type=checkbox]').on('change', function() {
            var clickedBox = this;

            //console.log(document.getElementsByTagName("input").length);
            for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
                if (document.getElementsByTagName("input")[i].type == "checkbox" && clickedBox != document.getElementsByTagName("input")[i]) {
                    //console.log(document.getElementsByTagName("input")[i]);
                    document.getElementsByTagName("input")[i].checked = false;
                }
            }
            //console.log(this.checked);
            if (this.checked) {
                //console.log("got-here");
                $("#cre-search").removeAttr("disabled");
                $(".data-item").removeClass("item-title");
                $(".data-item").addClass("item");
                $(".item-header").removeClass("item-title");
                $(".item-header").addClass("item");
                $(".item-" + clickedBox.id).removeClass("item");
                $(".item-" + clickedBox.id).addClass("item-title");
                $(".header-" + clickedBox.id).removeClass("item");
                $(".header-" + clickedBox.id).addClass("item-title");
            } else {
                $("#cre-search").attr("disabled", true);
            }

        });
        var data = [{
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }, {
            'qcDate': '5-15-2014',
            'batchDate': '4-14-2014',
            'group': 'BOA',
            'site': 123,
            'descriptionData': 'There is no Photo'
        }, {
            'qcDate': '5-12-2014',
            'batchDate': '4-24-2014',
            'group': 'TCS',
            'site': 321,
            'descriptionData': 'There is no Check'
        }];

        if (data.length > 0) {
            for (var index in data) {
                if (index != data.length - 1) {
                    $("#customer-reported-error-table").append(
                        '<li class="">' +
                        '<div class="item-inner table-content">' +
                        '<div class="item data-item item-group">' + data[index].group + '</div>' +
                        '<div class="item data-item item-site">' + data[index].site + '</div>' +
                        '<div class="item data-item item-qc-date">' + data[index].qcDate + '</div>' +
                        '<div class="item data-item item-batch-date">' + data[index].batchDate + '</div>' +
                        '<div class="item data-item item-description">' + data[index].descriptionData + '</div>' +
                        '</div>' +
                        '</li>'
                    );
                } else {
                    $("#customer-reported-error-table").append(
                        '<li class="">' +
                        '<div class="item-inner table-content">' +
                        '<div class="item data-item item-group last">' + data[index].group + '</div>' +
                        '<div class="item data-item item-site">' + data[index].site + '</div>' +
                        '<div class="item data-item item-qc-date">' + data[index].qcDate + '</div>' +
                        '<div class="item data-item item-batch-date">' + data[index].batchDate + '</div>' +
                        '<div class="item data-item item-description">' + data[index].descriptionData + '</div>' +
                        '</div>' +
                        '</li>'
                    );
                }

            }
        } else {
            $("#customer-reported-error-table").html(
                '<li class="item-content">' +
                '<div class="item-inner">' +
                '<div class="item item-reported-date">Nothing found</div>' +
                '</li>'

            );

        }

    });


    myApp.onPageInit('quality-matrix', function(page) {
        var lChart = new D3StackedAreaChart();
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
                data[0].values.push([i, Math.floor(Math.random() * 10) ]);
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
                data[0].values.push([i, Math.floor(Math.random() * 10) ]);
            }
            return data;
        };

/*        var dataFactory = function(seriesNum, perSeries, streams) {
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

        }*/
        var publicStorage = _.PublicStore.openPort();
        //publicStorage.put('dataVolume', dataFactory);
        $('#goHome').prop("href", "index");
        publicStorage.put('QM', lineChartData);
        lChart.triggerIt({

            containerId: '#quality-matrix-charts-customer-reported-error',
            color: ['#00FF00'],
            data: publicStorage.get('QM')(10),
            forceY: [0,10],
            showXAxis:true,
                            showYAxis:true
        }, function() {


        });

        $("#CRE-slider").on('input', function() {

            $("#CRE-slider-text").html(this.value);

            lChart.triggerIt({

                containerId: '#quality-matrix-charts-customer-reported-error',
                color: ['#00FF00'],
                data: publicStorage.get('QM')(this.value),
                forceY: [0,10],
                showXAxis:true,
                            showYAxis:true
            });


        });



        publicStorage.put('QCE', lineChartData2);
        lChart.triggerIt({

            containerId: '#quality-matrix-charts-customer-qc-effectiveness',
            color: ['#00FF00'],
            data: publicStorage.get('QCE')(10),
            forceY: [0,10],
            showXAxis:true,
                            showYAxis:true
        }, function() {


        });



        $("#QCE-slider").on('input', function() {

            $("#QCE-slider-text").html(this.value);
            lChart.triggerIt({
                containerId: '#quality-matrix-charts-customer-qc-effectiveness',
                color: ['#00FF00'],
                data: publicStorage.get('QCE')(this.value),
                forceY: [0,10],
                showXAxis:true,
                            showYAxis:true
            });


        });

    });

    /*-------------*/
    myApp.onPageInit('reports', function(page) {

        $$('#FAV-reports-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#reports-filter-fav");
            }, 300);
        });

        $$('#TAT-reports-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#reports-filter-tat");
            }, 300);
        });
        $$('#CV-reports-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#reports-filter-claim-volume");
            }, 300);
        });

        $$('#MPI-reports-popup-icon').on('click', function() {
            setTimeout(function() {
                myApp.accordionOpen("#reports-filter-mpi");
            }, 300);
        });

        //myApp.showPreloader('Preparing');
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

                    slideBuiltFun[mySlider.activeSlideIndex]();
                    slideBuiltFun[mySlider.activeSlideIndex] = function (argument) {};


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
                data[0].values.push([i, Math.floor(Math.random() * 10) + 8]);
                data[1].values.push([i, 12]);
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
                data[1].values.push([i, 5]);
                data[2].values.push([i, Math.floor(Math.random() * 10) + 1]);
            }
            return data;
        }


        var vBar = new D3VerticalBarChart();
        var stackedChart = new D3StackedAreaChart();
        var lChart = new D3LineChart();
        var publicStorage = _.PublicStore.openPort();

         var barChart = function(options, callback){

            if(callback.start){

                callback.start();
            }

            vBar.triggerIt({
                containerId: options.containerId,
                dataFactory: options.dataFactory,
                axisLabel: options.axisLabel,
                color: options.color
            }, function(success) {

                if(success){
                    if(callback.main){
                    
                        callback.main(callback.end());

                        
                    }
                }
                else{

                    sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});

                }
                

            });


        };


         var slideBuiltFun = [

            function one(){

                

            },

            function two (argument) {

                myApp.showIndicator();
                lChart.triggerIt({

                    containerId: '#TAT-line-chart',
                    color: colorSlide1,
                    data: publicStorage.get('TAT')(10),
                    showXAxis:true,
                    showYAxis:true
                }, function(success) {

                    if(success){

                        setTimeout(function(){
                            myApp.hideIndicator();
                        },2500);

                    }

                    else{

                        sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});
                    }
                    

                });
                
            },

            function three (argument) {
                
                myApp.showIndicator();
                vBar.triggerIt({
                    containerId: '#reports-claim-data-volume',
                    dataFactory: publicStorage.get('claimVolume')(1, 10, streamsSlide2),
                    axisLabel: 'Claim Volume Trend',
                    color: colorSlide2
                }, function(success){

                    if(success){

                        setTimeout(function(){
                            myApp.hideIndicator();
                        },3500);

                    }

                    else{

                        sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});
                    }

                });


            },

            function four (argument) {
                
                myApp.showIndicator();
                vBar.triggerIt({
                    containerId: '#reports-percentage-MPI-used',
                    dataFactory: publicStorage.get('PMU')(1, 10, streamsSlide3),
                    axisLabel: 'Percentage of MPI Used ',
                    color: colorSlide3
                }, function(success){

                    if(success){

                        

                        setTimeout(function(){
                            myApp.hideIndicator();
                        },3500);

                    }

                    else{

                        sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});
                    }


                });
            },

            function five (argument) {

                myApp.showIndicator();
                stackedChart.triggerIt({

                    containerId: '#MPI-stacked-area-chart',
                    color: [colorPalleton.green, colorPalleton.yellow, colorPalleton.red],
                    data: publicStorage.get('MPI')(10)

                }, function(success) {
                    if(success){

                        setTimeout(function(){
                            myApp.hideIndicator();
                        },1500);

                    }

                    else{

                        sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});
                    }


                });
            },

            function six (argument) {
                
                myApp.showIndicator();
                setTimeout(function(){
                    myApp.hideIndicator();
                },1500);

            }


        ];





        ////////

        var colorSlide0 = [colorPalleton.green, colorPalleton.yellow];
        var streamsSlide0 = ['Forcasted', 'Actual'];
        publicStorage.put('dataVolume', dataFactory);


       
       
        setTimeout(function() {


            barChart({
                    containerId: '#reports-charts-forcasted-vs-actual',
                    dataFactory: publicStorage.get('dataVolume')(2, 10, streamsSlide0),
                    axisLabel: 'Lockbox EOB Volume Trend',
                    color: colorSlide0


                },{

                    start: function(){myApp.showIndicator()},
                    end: function (){

                                setTimeout(function() {
                                    myApp.hideIndicator();

                                }, 3500);

                    },
                    main: function(callback){

                        if(callback){

                            callback();
                        }
                    }


                });



        }, 1000);


        $("#VT-slider").on('input', function() {

            var self=this;
            
            barChart({
                containerId: '#reports-charts-forcasted-vs-actual',
                dataFactory: publicStorage.get('dataVolume')(2, self.value, streamsSlide0),
                axisLabel: 'Lockbox EOB Volume Trend',
                color: colorSlide0


            },{

                start: function(){myApp.showIndicator(); $("#VT-slider-text").html(self.value)},
                end: function (){

                            setTimeout(function() {
                                myApp.hideIndicator();

                            }, 3500);

                },
                main: function(callback){

                    if(callback){

                        callback();
                    }
                }


            });


        });

        $('.submitButton-reports-volume').unbind('click').click(function(e) {

            publicStorage.put('dataVolume', dataFactoryFilter);

            barChart({

                containerId: '#reports-charts-forcasted-vs-actual',
                dataFactory: publicStorage.get('dataVolume')(2, 10, streamsSlide0),
                axisLabel: 'Lockbox EOB Volume Trend',
                color: colorSlide0


            },{

                start: function(){
                    
                    myApp.showIndicator(); 
                    var groupCode = $('#groupCode-reports-FAV').val();

                    $("#VT-slider").val(10);
                    $("#VT-slider-text").html(10)
                    

                    sessionStorage.removeItem("siteNumber");
                    sessionStorage.setItem("groupCode", groupCode);

                },
                end: function (){

                            setTimeout(function() {
                                myApp.hideIndicator();
                                showNotification({});

                            }, 3500);

                },
                main: function(callback){

                    if(callback){

                        callback();
                    }
                }


            });


        });


        
        $('.submitButton-reports-volume-reset').unbind('click').click(function(e) {

            publicStorage.put('dataVolume', dataFactory);
            barChart({

                containerId: '#reports-charts-forcasted-vs-actual',
                dataFactory: publicStorage.get('dataVolume')(2, 10, streamsSlide0),
                axisLabel: 'Lockbox EOB Volume Trend',
                color: colorSlide0


            },{

                start: function(){
                    
                    myApp.showIndicator(); 
                    //var groupCode = $('#groupCode-reports-FAV').val();

                    $("#VT-slider").val(10);
                    $("#VT-slider-text").html(10)
                    

                    sessionStorage.removeItem("siteNumber");
                    sessionStorage.setItem("groupCode", "ALL");

                },
                end: function (){

                            setTimeout(function() {
                                myApp.hideIndicator();
                                showNotification({});

                            }, 3500);

                },
                main: function(callback){

                    if(callback){

                        callback();
                    }
                }


            });


        });

        ////////
        

        /////




        publicStorage.put('TAT', lineChartData);

        var colorSlide1 = [colorPalleton.yellow, colorPalleton.green];

        $("#TAT-slider").on('input', function() {

            $("#TAT-slider-text").html(this.value);

            lChart.triggerIt({

                containerId: '#TAT-line-chart',
                color: colorSlide1,
                data: publicStorage.get('TAT')(this.value),
                
            });
        });

        $('.submitButton-reports-TAT').unbind('click').click(function() {

            var groupCode = $('#groupCode-reports-TAT').val();
            var siteNumber = $('#siteNumber-reports-TAT').val();

            sessionStorage.setItem("groupCode", groupCode);
            sessionStorage.setItem("siteNumber", siteNumber);

            $("#TAT-slider").val(10);
            $("#TAT-slider-text").html(10);

            myApp.showIndicator();

            lChart.triggerIt({

                containerId: '#TAT-line-chart',
                color: colorSlide1,
                data: publicStorage.get('TAT')(10),
                showXAxis:true,
                            showYAxis:true
            },function(){

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});

                }, 500);


            });

        });


        $('.submitButton-reports-TAT-reset').unbind('click').click(function() {

            var groupCode = $('#groupCode-reports-TAT').val();
            var siteNumber = $('#siteNumber-reports-TAT').val();

            sessionStorage.setItem("groupCode", "ALL");
            sessionStorage.setItem("siteNumber", "ALL");

            $("#TAT-slider").val(10);
            $("#TAT-slider-text").html(10);

            myApp.showIndicator();

            lChart.triggerIt({

                containerId: '#TAT-line-chart',
                color: colorSlide1,
                data: publicStorage.get('TAT')(10),
                showXAxis:true,
                            showYAxis:true
            },function(){

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});

                }, 500);


            });

        });

        /////
        //////

        var colorSlide2 = [colorPalleton.yellow];
        var streamsSlide2 = ['Volume'];
        publicStorage.put('claimVolume', dataFactory);

       /* vBar.triggerIt({
            containerId: '#reports-claim-data-volume',
            dataFactory: publicStorage.get('claimVolume')(1, 10, streamsSlide2),
            axisLabel: 'Claim Volume Trend',
            color: colorSlide2
        });*/


        $("#CV-slider").on('input', function() {
            $("#CV-slider-text").html(this.value);

            vBar.triggerIt({
                containerId: '#reports-claim-data-volume',
                dataFactory: publicStorage.get('claimVolume')(1, this.value, streamsSlide2),
                axisLabel: 'Claim Volume Trend',
                color: colorSlide2
            });
        });

        $('.submitButton-reports-claim').unbind('click').click(function(e) {

            var groupCode = $('#groupCode-reports-claim').val();
            var siteNumber = $('#siteNumber-reports-claim').val();
            publicStorage.put('claimVolume', dataFactoryFilter);

            sessionStorage.setItem("groupCode", groupCode);
            sessionStorage.setItem("siteNumber", siteNumber);

            $("#CV-slider").val(10);
            $("#CV-slider-text").html(10);
            myApp.showIndicator();

            vBar.triggerIt({
                containerId: '#reports-claim-data-volume',
                dataFactory: publicStorage.get('claimVolume')(1, 10, streamsSlide2),
                axisLabel: 'Claim Volume Trend',
                color: colorSlide2
            }, function(){

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});

                }, 500);

            });

        });


        $('.submitButton-reports-claim-reset').unbind('click').click(function(e) {

            var groupCode = $('#groupCode-reports-claim').val();
            var siteNumber = $('#siteNumber-reports-claim').val();
            publicStorage.put('claimVolume', dataFactory);

            sessionStorage.setItem("groupCode", "ALL");
            sessionStorage.setItem("siteNumber", "ALL");

            $("#CV-slider").val(10);
            $("#CV-slider-text").html(10);
            myApp.showIndicator();

            vBar.triggerIt({
                containerId: '#reports-claim-data-volume',
                dataFactory: publicStorage.get('claimVolume')(1, 10, streamsSlide2),
                axisLabel: 'Claim Volume Trend',
                color: colorSlide2
            }, function(){

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});

                }, 500);

            });

        });


        //////

        var colorSlide3 = [colorPalleton.yellow];
        var streamsSlide3 = ['% Used'];

        publicStorage.put('PMU', dataFactory2);


        /*vBar.triggerIt({
            containerId: '#reports-percentage-MPI-used',
            dataFactory: publicStorage.get('PMU')(1, 10, streamsSlide3),
            axisLabel: 'Percentage of MPI Used ',
            color: colorSlide3
        });*/


        $("#PMU-slider").on('input', function() {
            $("#PMU-slider-text").html(this.value);



            vBar.triggerIt({
                containerId: '#reports-percentage-MPI-used',
                dataFactory: publicStorage.get('PMU')(1, this.value, streamsSlide3),
                axisLabel: 'Percentage of MPI Used ',
                color: colorSlide3
            });
        });


        $('.submitButton-reports-MPI-used').unbind('click').click(function(e) {

            var groupCode = $('#groupCode-reports-MPI').val();
            var siteNumber = $('#siteNumber-reports-MPI').val();
            sessionStorage.setItem("groupCode", groupCode);
            sessionStorage.setItem("siteNumber", siteNumber);

            publicStorage.put('PMU', dataFactory2Filter);
            
            $("#PMU-slider").val(10);
            $("#PMU-slider-text").html(10);

            myApp.showIndicator();
            vBar.triggerIt({
                containerId: '#reports-percentage-MPI-used',
                dataFactory: publicStorage.get('PMU')(1, 10, streamsSlide3),
                axisLabel: 'Percentage of MPI Used ',
                color: colorSlide3
            },function(){

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});

                }, 500);

            });

        });


        $('.submitButton-reports-MPI-used-reset').unbind('click').click(function(e) {

            var groupCode = $('#groupCode-reports-MPI').val();
            var siteNumber = $('#siteNumber-reports-MPI').val();
            sessionStorage.setItem("groupCode", "ALL");
            sessionStorage.setItem("siteNumber", "ALL");

            publicStorage.put('PMU', dataFactory2);
            
            $("#PMU-slider").val(10);
            $("#PMU-slider-text").html(10);

            myApp.showIndicator();
            vBar.triggerIt({
                containerId: '#reports-percentage-MPI-used',
                dataFactory: publicStorage.get('PMU')(1, 10, streamsSlide3),
                axisLabel: 'Percentage of MPI Used ',
                color: colorSlide3
            },function(){

                setTimeout(function() {
                    myApp.hideIndicator();
                    showNotification({});

                }, 500);

            });

        });

        //////


        /////


        publicStorage.put('MPI', stackedAreaChartData);


        /*stackedChart.triggerIt({

            containerId: '#MPI-stacked-area-chart',
            color: ['#DC3912', "#109618", "#FCB446"],
            data: publicStorage.get('MPI')(10)

        }, function() {


        });*/


        $("#MLT-slider").on('input', function() {
            $("#MLT-slider-text").html(this.value);
            stackedChart.triggerIt({

                containerId: '#MPI-stacked-area-chart',
                color: [colorPalleton.green, colorPalleton.yellow, colorPalleton.red],
                data: publicStorage.get('MPI')(this.value)

            });

        });




        //////




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

                sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});
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

                sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});
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

                sendCrashReport(function(){myApp.hideIndicator();}, function(){myApp.hideIndicator();});

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

    ////



    /*var defs = svg.append("defs");

      var filter = defs.append("filter")
          .attr("id", "dropshadow")

      filter.append("feGaussianBlur")
          .attr("in", "SourceAlpha")
          .attr("stdDeviation", 4)
          .attr("result", "blur");
      filter.append("feOffset")
          .attr("in", "blur")
          .attr("dx", 2)
          .attr("dy", 2)
          .attr("result", "offsetBlur");

      var feMerge = filter.append("feMerge");

      feMerge.append("feMergeNode")
          .attr("in", "offsetBlur")
      feMerge.append("feMergeNode")
          .attr("in", "SourceGraphic");*/





});