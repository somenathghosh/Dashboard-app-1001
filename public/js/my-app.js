$(document).ready(function () {



    // Initialize your app
    var myApp = new Framework7({
        swipePanel: 'left',

        actionsCloseByOutside: false,
        modalCloseByOutside: false,
        popupCloseByOutside: false
    });

    // Export selectors engine 
    var $$ = Framework7.$;

    // Add view
    var mainView = myApp.addView('.view-main', {
        // Because we use fixed-through navbar we can enable dynamic navbar
        dynamicNavbar: true
    });




    $('#siteNumberValue').val(sessionStorage.siteNumber);
    $('#groupIDValue').val('CMC');
    $('div.selectOrg select').val(sessionStorage.organization);
    $('.submitButton a').click(function () {

        if ($("#siteNumberValue-WL").val() != "" && $("#groupIDValue-WL").val() != "" && $("#orgValue-WL").val() != "") {
            var salesData2 = [

            {
                label: "Plus",
                value: 500,
                color: "#DC3912"
            }, {
                label: "Lite",
                value: 900,
                color: "#FF9900"
            }, {
                label: "Elite",
                value: 400,
                color: "#109618"
            }, {
                label: "Super",
                value: 600,
                color: "#000099"
            }, {
                label: "Minor",
                value: 300,
                color: "#000000"
            }, {
                label: "Delux",
                value: 700,
                color: "#990099"
            }];
            Donut3D.transition("KeyinDetailPie", salesData2, 250, 193, 30, 0.0);

        }


        if ($("#groupIDValue-V").val() != "") {
            function exampleData4() {
                return [{
                    key: "Cumulative Return",
                    values: [{
                        "label": "Expected Volume",
                        "value": 65000
                    }, {
                        "label": "Actual Volume",
                        "value": 45000
                    }]
                }]

            }
            var chart = nv.models.discreteBarChart().x(function (d) {
                return d.label
            }) //Specify the data accessors.
            .y(function (d) {
                return d.value
            }).staggerLabels(false) //Too many bars and not enough room? Try staggering labels.
            .tooltips(false) //Don't show tooltips
            .showValues(true) //...instead, show the bar value right on top of each bar.
            .transitionDuration(350).color(['#DC3912', '#FF9900']);


            d3.select('#chartL7 svg').datum(exampleData4()).transition().duration(500).call(chart);

            nv.utils.windowResize(chart.update);



        }
        if ($("#siteNumberValue-TAT").val() != "" && $("#groupIDValue-TAT").val() != "") {

            var salesData3 = [

            {
                label: "Plus",
                value: 900,
                color: "#DC3912"
            }, {
                label: "Lite",
                value: 1000,
                color: "#FF9900"
            }, {
                label: "Elite",
                value: 500,
                color: "#109618"
            }];
            Donut3D.transition("TatPie", salesData3, 100, 79, 20, 0.7);


        }
        if ($("#siteNumberValue-MPI").val() != "" && $("#groupIDValue-MPI").val() != "") {
            function exampleData3() {
                return [{
                    key: "Cumulative Return",
                    values: [{
                        "label": "Yesterday",
                        "value": 77.11
                    }, {
                        "label": "Two Day Ago",
                        "value": 44.12
                    }, {
                        "label": "Three days Ago",
                        "value": 21.87
                    }, {
                        "label": "Four Days Ago",
                        "value": 99.86
                    }, {
                        "label": "Five Days Ago",
                        "value": 55.10
                    }, {
                        "label": "Six Days Ago",
                        "value": 75.87
                    }, {
                        "label": "Seven Days Ago",
                        "value": 100.00
                    }]
                }]

            }
            var chart = nv.models.discreteBarChart().x(function (d) {
                return d.label
            }) //Specify the data accessors.
            .y(function (d) {
                return d.value
            }).staggerLabels(false) //Too many bars and not enough room? Try staggering labels.
            .tooltips(false) //Don't show tooltips
            .showValues(true) //...instead, show the bar value right on top of each bar.
            .transitionDuration(350).color(['#DC3912', '#FF9900', '#109618', '#000099', '#000000', '#990099', 'gray']);
            d3.select('#chartL8 svg').datum(exampleData3()).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update);

        }

        //console.log(sessionStorage.siteNumber);

        io.setSiteNumber($('#siteNumberValue').val());
        io.setOrganization($('#orgValue').val());

        sessionStorage.siteNumber = $('#siteNumberValue').val();
        sessionStorage.organization = $('#orgValue').val();

        if ($('.boxFlip').hasClass('animated flip')) {
            $('.boxFlip').removeClass('animated flip');
        }

        setTimeout(function () {

            getLockboxNumbers();

            getLockboxInboundDetail();

            getLockboxOutboundDetail()

            $('.boxFlip').addClass('animated flip');
        }, 100);

        $('div.selectOrg select').val(io.getOrganization());
        $('#siteNumberValue').val(io.getSiteNumber());

    });






    myApp.onPageInit('index', function (page) {
        console.log("index-init");
        drawChart();
        if ($('.boxFlip').hasClass('animated flip')) {
            $('.boxFlip').removeClass('animated flip');

        } else {
            getLockboxNumbers();
            getLockboxInboundDetail();
            getLockboxOutboundDetail();

            $('.boxFlip').addClass('animated flip');
        }
    });



    $$(document).on('click', '.go-home', function () {
        console.log("home");
        drawChart();
        //mainView.loadPage('/');
    });




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
        console.log('page initiated');

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

        //console.log('page initiated');

        

        $$('#WTPIcon').on('click', function(){
            var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p><Strong>Waiting to be Processed</strong></p>'+
                          '<p>Lorem ipsum dolor sit amet</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
            var target = this;
            var removeOnClose = true;
            myApp.popover(popoverHTML, target, removeOnClose);
        });

        $$('#SIIcon').on('click', function(){
            var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p><Strong>Site Identification</strong></p>'+
                          '<p>Lorem ipsum dolor sit amet</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
            var target = this;
            var removeOnClose = true;
            myApp.popover(popoverHTML, target, removeOnClose);
        });
        
        $$('#EVIcon').on('click', function(){
            var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p><Strong>Extraction and Validation</strong></p>'+
                          '<p>Lorem ipsum dolor sit amet</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
            var target = this;
            var removeOnClose = true;
            myApp.popover(popoverHTML, target, removeOnClose);
        });

        $$('#DMIcon').on('click', function(){
            var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p><Strong>Data Management</strong></p>'+
                          '<p>Lorem ipsum dolor sit amet</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
            var target = this;
            var removeOnClose = true;
            myApp.popover(popoverHTML, target, removeOnClose);
        });
        
        $$('#PIIcon').on('click', function(){
            var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p><Strong>Payer Identification</strong></p>'+
                          '<p>Lorem ipsum dolor sit amet</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
            var target = this;
            var removeOnClose = true;
            myApp.popover(popoverHTML, target, removeOnClose);
        });
        
        $$('#BSIcon').on('click', function(){
            var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p><Strong>Batch Split</strong></p>'+
                          '<p>Lorem ipsum dolor sit amet</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
            var target = this;
            var removeOnClose = true;
            myApp.popover(popoverHTML, target, removeOnClose);
        });

        $$('#WLIcon').on('click', function(){
            var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p><Strong>Worklist Load</strong></p>'+
                          '<p>Lorem ipsum dolor sit amet</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
            var target = this;
            var removeOnClose = true;
            myApp.popover(popoverHTML, target, removeOnClose);
        });

        $$('#IAIcon').on('click', function(){
            var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p><Strong>Image Archive</strong></p>'+
                          '<p>Lorem ipsum dolor sit amet</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
            var target = this;
            var removeOnClose = true;
            myApp.popover(popoverHTML, target, removeOnClose);
        });

        $$('#ISIcon').on('click', function(){
            var popoverHTML = '<div class="popover">'+
                      '<div class="popover-inner">'+
                        '<div class="content-block">'+
                          '<p><Strong>Image Split & Conversion</strong></p>'+
                          '<p>Lorem ipsum dolor sit amet</p>'+
                        '</div>'+
                      '</div>'+
                    '</div>';
            var target = this;
            var removeOnClose = true;
            myApp.popover(popoverHTML, target, removeOnClose);
        });

        getLockboxInboundDetail();

        // clear interval when back button is clicked       
        $('.intClear a').click(function () {
            clearInterval(arrowSequence);
            console.log("back");

        });

        var i = 0;
        var arrowSequence = setInterval(function () {
            sequence(i);
            i++;
            if (i == 7) {
                console.log(arrowSequence);
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


        $$('.popup-services').on('click', function () {
            var popupHTML = '<div class="popup">' + '<div class="content-block">' + '<p>Popup created dynamically.</p>' + '<p><a href="#" class="close-popup">Close me</a></p>' + '</div>' + '</div>'
            myApp.popup(popupHTML);



        });



    });




/*

    

    $$('.pull-to-refresh-content').on('refresh', function(e) {
        // Emulate 2s loading
        if ($('.boxFlip').hasClass('animated flip')) {
            $('.boxFlip').removeClass('animated flip');
        }
        setTimeout(function() {
            //alert('working');
            getLockboxNumbers();
            getLockboxInboundDetail();
            getLockboxOutboundDetail();
            $('.boxFlip').addClass('animated flip');
            myApp.pullToRefreshDone();
        }, 2000);
    });

*/







    var mySlider = myApp.slider('.slider-container', {
        pagination: '.slider-pagination'
    });







    /****************************************************************************************************************************/



    $('#siteNumberInput').val('11');
    sessionStorage.siteNumber = '11';
    sessionStorage.organization = 'HLSC';

    function IPObject(siteNumber, organization) {

        this.siteNumber = siteNumber;
        this.organization = organization;
        this.getSite = function () {

        };

    };

    IPObject.prototype.getSiteNumber = function () {
        return this.siteNumber;
    };

    IPObject.prototype.getOrganization = function () {
        return this.organization;
    };

    IPObject.prototype.setSiteNumber = function (number) {
        this.siteNumber = number;
    };

    IPObject.prototype.setOrganization = function (org) {
        this.organization = org;
    };
    //


    io = new IPObject(sessionStorage.siteNumber, sessionStorage.organization);

    //console.log(io);

    var date = new Date();
    (function () {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        Date.prototype.getMonthName = function () {
            return months[this.getMonth()];
        };
        Date.prototype.getDayName = function () {
            return days[this.getDay()];
        };
    })();

    $('.todaysDate').html('<font class="Helvetica">' + date.getDayName() + ' ' + date.getMonthName() + ' ' + date.getDate() + ',' + date.getFullYear() + '</font>');
    $('.todaysTime').html('<font class="Helvetica">' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + ' ' + date.toString().match(/\(([A-Za-z\s].*)\)/)[1] + '</font>');


    //Get Name and Last Login info from Server

    (function () {
        var loginAPI = "http://server-test42.herokuapp.com/login";
        $.getJSON(loginAPI, {
            format: "json"
        }).done(function (data) {
            $('#welcomeName').html('<font class="Helvetica">' + 'Welcome ' + data[0].userId + '</font>');
            $('#lastLoginTime').html('<font class="Helvetica"> Last Visited: ' + data[0].lastLogin + '</font>');
        });
    })();

    //


    //Define Function to get the data from server

    function getResource(io, callback) {
        var resourceAPI = "http://server-test42.herokuapp.com/resources/" + io.getSiteNumber() + "&" + io.getOrganization();
        $.getJSON(resourceAPI, {
            format: "json"
        }).done(function (data) {
            var err = null;
            try {

                var data = data[0];
                sessionStorage.setItem('data', JSON.stringify(data));
                //console.log(sessionStorage.data);

            } catch (error) {
                err = error;
                console.log(err);
            }
            //console.log(data);
            callback(err, data);
        });




    };



    function getLockboxNumbers() {
        getResource(io, function (err, d) {
            if (err) alert('Server-Error-1001');
            else {

                var sumInGreen = d.S1.G + d.S2.G + d.S3.G + d.S4.G + d.S5.G + d.S6.G + d.S7.G + d.S8.G + d.S9.G;
                var sumInRed = d.S1.R + d.S2.R + d.S3.R + d.S4.R + d.S5.R + d.S6.R + d.S7.R + d.S8.R + d.S9.R;
                var percentageIn = parseInt((sumInGreen / (sumInGreen + sumInRed)) * 100, 10);
                //console.log(percentageIn);
                var sumKyGreen = d.S10.G;
                var sumKyRed = d.S10.R;
                var percentageKy = parseInt((sumKyGreen / (sumKyGreen + sumKyRed)) * 100, 10);
                var sumOtGreen = d.S11.G + d.S12.G + d.S13.G + d.S14.G + d.S15.G + d.S16.G + d.S17.G;
                var sumOtRed = d.S11.R + d.S12.R + d.S13.R + d.S14.R + d.S15.R + d.S16.R + d.S17.R;
                var percentageOt = parseInt((sumOtGreen / (sumOtGreen + sumOtRed)) * 100, 10);


                $('#inboundGreen').html('');
                $('#inboundRed').html('');
                $('#outboundGreen').html('');
                $('#outboundRed').html('');
                $('#keyGreen').html('');
                $('#keyRed').html('');

                $('#inboundGreen').html('<font class="digital"  color="#00FF00">' + sumInGreen + '</font>');
                $('#inboundRed').html('<font class="digital"  color="#FF0000">' + sumInRed + '</font>');

                $('#outboundGreen').html('<font class="digital"  color="#00FF00">' + sumOtGreen + '</font>');
                $('#outboundRed').html('<font class="digital"  color="#FF0000">' + sumOtRed + '</font>');


                $('#keyGreen').html('<font class="digital"  color="#00FF00">' + sumKyGreen + '</font>');
                $('#keyRed').html('<font class="digital"  color="#FF0000">' + sumKyRed + '</font>');


            }
        });

    };

    //call for 1st time loading
    (function () {

        getLockboxNumbers();
        getLockboxInboundDetail();
        getLockboxOutboundDetail();
        $('.boxFlip').addClass('animated flip');

    })();


    function getLockboxInboundDetail() {
        try {
            //console.log(sessionStorage.data);
            var data = $.parseJSON(sessionStorage.data);
            //console.log(data);
            $('#WTPGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S1.G + '</strong></font></div>');
            $('#WTPRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S1.R + '</strong></font></div>');


            $('#SIGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S2.G + '</strong></font></div>');
            $('#SIRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S2.R + '</strong></font></div>');


            $('#EVGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S3.G + '</strong></font></div>');
            $('#EVRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S3.R + '</strong></font></div>');


            $('#BSGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S4.G + '</strong></font></div>');
            $('#BSRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S4.R + '</strong></font></div>');


            $('#PIGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S5.G + '</strong></font></div>');
            $('#PIRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S5.R + '</strong></font></div>');


            $('#DMGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S6.G + '</strong></font></div>');
            $('#DMRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S6.R + '</strong></font></div>');


            $('#ISGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S7.G + '</strong></font></div>');
            $('#ISRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S7.R + '</strong></font></div>');


            $('#IAGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S8.G + '</strong></font></div>');
            $('#IARed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S8.R + '</strong></font></div>');


            $('#WLGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S9.G + '</strong></font></div>');
            $('#WLRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S9.R + '</strong></font></div>');

        } catch (err) {
            console.log(err);
            //alert('Server-Error-1002');
        }
    }

    function getLockboxOutboundDetail() {
        try {
            //console.log(sessionStorage.data);
            var data = $.parseJSON(sessionStorage.data);
            console.log(data);
            $('#CRGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S11.G + '</strong></font></div>');
            $('#CRRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S11.R + '</strong></font></div>');


            $('#PPGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S12.G + '</strong></font></div>');
            $('#PPRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S12.R + '</strong></font></div>');


            $('#DM2Green').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S13.G + '</strong></font></div>');
            $('#DM2Red').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S13.R + '</strong></font></div>');


            $('#OGGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S14.G + '</strong></font></div>');
            $('#OGRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S14.R + '</strong></font></div>');


            $('#MRGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S15.G + '</strong></font></div>');
            $('#MRRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S15.R + '</strong></font></div>');


            $('#RAGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S16.G + '</strong></font></div>');
            $('#RARed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S16.R + '</strong></font></div>');


            $('#THGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>' + data.S17.G + '</strong></font></div>');
            $('#THRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>' + data.S17.R + '</strong></font></div>');


        } catch (err) {
            console.log(err);
            //alert('Server-Error-1002');
        }
    }


    setInterval(function () {
        if ($('.boxFlip').hasClass('animated flip')) {
            $('.boxFlip').removeClass('animated flip');

        } else {
            getLockboxNumbers();
            getLockboxInboundDetail();
            getLockboxOutboundDetail();

            $('.boxFlip').addClass('animated flip');
        }

    }, 300000);



    function drawChart() {
        var salesData = [

        {
            label: "File In Error",
            value: 80,
            color: "#DC3912"
        }, {
            label: "File in Process",
            value: 1000,
            color: "#109618"
        }, {
            label: "File Processed",
            value: 8900,
            color: "#FF9900"
        }];


        var keyInData = [

        {
            label: "File Submitted",
            value: 300,
            color: "#DC3912"
        }, {
            label: "File in Progress",
            value: 481,
            color: "#109618"
        }, {
            label: "File Assigned",
            value: 2890,
            color: "#FF9900"
        },

        {
            label: "File Completed",
            value: 1000,
            color: "#7211CE"
        }];



        var svgInbound = d3.select("#chartL1").append("svg").attr("width", 300).attr("height", 300);
        var svgOutbound = d3.select("#chartL3").append("svg").attr("width", 300).attr("height", 300);
        var svgKeyin = d3.select("#chartL2").append("svg").attr("width", 300).attr("height", 300);
        var svgClaim = d3.select("#chartL4").append("svg").attr("width", 300).attr("height", 300);

        svgInbound.append("g").attr("id", "InboundDonut");
        svgOutbound.append("g").attr("id", "OutboundDonut");
        svgKeyin.append("g").attr("id", "KeyinPie");
        svgClaim.append("g").attr("id", "ClaimDonut");

        Donut3D.draw("InboundDonut", salesData, 150, 150, 130, 100, 30, 0.7);
        Donut3D.draw("OutboundDonut", salesData, 150, 150, 130, 100, 30, 0.7);
        Donut3D.draw("ClaimDonut", salesData, 150, 150, 130, 100, 30, 0.7);
        Donut3D.draw("KeyinPie", keyInData, 150, 150, 130, 100, 30, 0.0);



        function changeData() {
            Donut3D.transition("InboundDonut", salesData, 130, 100, 30, 0.7);
            Donut3D.transition("OutboundDonut", salesData, 130, 100, 30, 0.7);
            Donut3D.transition("KeyinPie", keyInData, 130, 100, 30, 0.0);
            Donut3D.transition("ClaimDonut", salesData, 150, 150, 130, 100, 30, 0.7);
        }
    }

    drawChart();




    /*-------------*/
    myApp.onPageInit('reports', function (page) {
        console.log("reports");
        
        $('#goHome').attr("href", "index");
        var noOfDaysFVA = 30;

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





        function lineChartData() {
            return [{
                "key": "AVG",
                "values": [
                    [1, 13],
                    [2, 14],
                    [3, 12],
                    [4, 15],
                    [5, 18],
                    [6, 20],
                    [7, 17],
                    [8, 9],
                    [9, 8],
                    [10, 15],
                    [11, 16],
                    [12, 18],
                    [13, 20],
                    [14, 11],
                    [15, 13],
                    [16, 22],
                    [17, 21],
                    [18, 20],
                    [19, 11],
                    [20, 14],
                    [21, 15],
                    [22, 16],
                    [23, 13],
                    [24, 18],
                    [25, 20],
                    [26, 21],
                    [27, 20],
                    [28, 18],
                    [29, 19]
                ]
            }, {
                "key": "Median",
                "values": [
                    [1, 15],
                    [1, 15],
                    [2, 15],
                    [3, 15],
                    [4, 15],
                    [5, 15],
                    [6, 15],
                    [7, 15],
                    [8, 15],
                    [9, 15],
                    [10, 15],
                    [11, 15],
                    [12, 15],
                    [13, 15],
                    [14, 15],
                    [15, 15],
                    [16, 15],
                    [17, 15],
                    [18, 15],
                    [19, 15],
                    [20, 15],
                    [21, 15],
                    [22, 15],
                    [23, 15],
                    [24, 15],
                    [25, 15],
                    [26, 15],
                    [27, 15],
                    [28, 15],
                    [30, 15]
                ]
            }];
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
            d3.select('#TAT-line-chart svg').datum(lineChartData()).call(chart);

            //TODO: Figure out a good way to do this automatically
            nv.utils.windowResize(chart.update);

            return chart;
        });



        function stackedAreaChartData() {
            return [{
                "key": "Top 10th Percentile",
                "values": [
                    [1, 13],
                    [2, 14],
                    [3, 12],
                    [4, 15],
                    [5, 18],
                    [6, 20],
                    [7, 17],
                    [8, 9],
                    [9, 8],
                    [10, 15],
                    [11, 16],
                    [12, 18],
                    [13, 20],
                    [14, 11],
                    [15, 13],
                    [16, 22],
                    [17, 21],
                    [18, 20],
                    [19, 11],
                    [20, 14],
                    [21, 15],
                    [22, 16],
                    [23, 13],
                    [24, 18],
                    [25, 20],
                    [26, 21],
                    [27, 20],
                    [28, 18],
                    [29, 19],
                    [30, 21]
                ]
            }, {
                "key": "AVG",
                "values": [
                    [1, 15],
                    [2, 15],
                    [3, 15],
                    [4, 15],
                    [5, 15],
                    [6, 15],
                    [7, 15],
                    [8, 15],
                    [9, 15],
                    [10, 15],
                    [11, 15],
                    [12, 15],
                    [13, 15],
                    [14, 15],
                    [15, 15],
                    [16, 15],
                    [17, 15],
                    [18, 15],
                    [19, 15],
                    [20, 15],
                    [21, 15],
                    [22, 15],
                    [23, 15],
                    [24, 15],
                    [25, 15],
                    [26, 15],
                    [27, 15],
                    [28, 15],
                    [29, 15],
                    [30, 15]
                ]
            }, {
                "key": "Bottom 10th Percentile",
                "values": [
                    [1, 11],
                    [2, 10],
                    [3, 9],
                    [4, 10],
                    [5, 5],
                    [6, 4],
                    [7, 3],
                    [8, 10],
                    [9, 12],
                    [10, 10],
                    [11, 9],
                    [12, 15],
                    [13, 7],
                    [14, 6],
                    [15, 5],
                    [16, 9],
                    [17, 9],
                    [18, 8],
                    [19, 4],
                    [20, 2],
                    [21, 1],
                    [22, 7],
                    [23, 6],
                    [24, 5],
                    [25, 4],
                    [26, 3],
                    [27, 2],
                    [28, 1],
                    [29, 5],
                    [30, 8]
                ]
            }];
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
            d3.select('#MPI-stacked-area-chart svg').datum(stackedAreaChartData()).call(chart);

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




        defaultChartConfig2("reports-claim-data-volume", dataFactory(1, 30), {
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


        defaultChartConfig3("reports-percentage-MPI-used", dataFactory2(1, 30), {
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







});