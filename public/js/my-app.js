$(document).ready(function() {

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
$('.submitButton a').click(function(){
	console.log(sessionStorage.siteNumber);
	
	io.setSiteNumber($('#siteNumberValue').val());
	io.setOrganization($('#orgValue').val());
	
	sessionStorage.siteNumber = $('#siteNumberValue').val();
	sessionStorage.organization = $('#orgValue').val();
	
	if($('.boxFlip').hasClass('animated flip')){
		$('.boxFlip').removeClass('animated flip');
	}

	setTimeout(function(){

		getLockboxNumbers();

		getLockboxInboundDetail();

		getLockboxOutboundDetail()

		$('.boxFlip').addClass('animated flip');
	},100);
	
	$('div.selectOrg select').val(io.getOrganization());
	$('#siteNumberValue').val(io.getSiteNumber());
	
});





myApp.onPageAfterAnimation('index', function (page) {
	console.log("index");

});

myApp.onPageInit('index', function (page) {
	console.log("index-init");
	drawChart();
			if($('.boxFlip').hasClass('animated flip')){
			$('.boxFlip').removeClass('animated flip');
			
		}
		else{
			getLockboxNumbers();
			getLockboxInboundDetail();
			getLockboxOutboundDetail();
			
			$('.boxFlip').addClass('animated flip');
		}	
});
	


$$(document).on('click','.go-home',function () {
	console.log("home");
	drawChart();
	//mainView.loadPage('/');
});





myApp.onPageInit('keyin-detail', function (page) {
	console.log("keyInDetail");
		var salesData2=[
			
			{label:"Plus", value: 1000, color:"#DC3912"},
			{label:"Lite", value: 800, color:"#FF9900"},
			{label:"Elite", value: 200,color:"#109618"},
			{label:"Super", value: 800, color:"#000099"},
			{label:"Minor", value: 200,color:"#000000"},
			{label:"Delux", value: 100, color:"#990099"}
		];
		var svgKeyinDetail = d3.select("#chartL5").append("svg").attr("width",500).attr("height",500);
		svgKeyinDetail.append("g").attr("id","KeyinDetailPie");
		Donut3D.draw("KeyinDetailPie", salesData2, 250, 250, 250, 193, 30, 0.0);

		var salesData3=[
			
			{label:"Plus", value: 1000, color:"#DC3912"},
			{label:"Lite", value: 800, color:"#FF9900"},
			{label:"Elite", value: 200,color:"#109618"}
		];

		var svgTat = d3.select("#chartL6").append("svg").attr("width",225).attr("height",225);
		svgTat.append("g").attr("id","TatPie");
		Donut3D.draw("TatPie", salesData3, 140, 120, 100, 79, 20, 0.7);



nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })    //Specify the data accessors.
      .y(function(d) { return d.value })
      .staggerLabels(false)    //Too many bars and not enough room? Try staggering labels.
      .tooltips(false)        //Don't show tooltips
      .showValues(true)       //...instead, show the bar value right on top of each bar.
      .transitionDuration(350)
      .color(['#DC3912', '#FF9900']);


  d3.select('#chartL7 svg')
      .datum(exampleData())
      .call(chart);

  nv.utils.windowResize(chart.update);
  
  

  return chart;
});

//Each bar represents a single discrete quantity.
function exampleData() {
 return  [ 
    {
      key: "Cumulative Return",
      values: [
        { 
          "label" : "Expected Volume" ,
          "value" : 59000
        } , 
        { 
          "label" : "Actual Volume" , 
          "value" : 58000
        } 
      ]
    }
  ]

}

nv.addGraph(function() {
  var chart = nv.models.discreteBarChart()
      .x(function(d) { return d.label })    //Specify the data accessors.
      .y(function(d) { return d.value })
      .staggerLabels(false)    //Too many bars and not enough room? Try staggering labels.
      .tooltips(false)        //Don't show tooltips
      .showValues(true)       //...instead, show the bar value right on top of each bar.
      .transitionDuration(350)
      .color(['#DC3912', '#FF9900','#109618','#000099','#000000','#990099','gray']);


  d3.select('#chartL8 svg')
      .datum(exampleData2())
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});

//Each bar represents a single discrete quantity.
function exampleData2() {
 return  [ 
    {
      key: "Cumulative Return",
      values: [
        { 
          "label" : "Yesterday" ,
          "value" : 61.11
        } , 
                { 
          "label" : "Two Day Ago" ,
          "value" : 67.12
        } , 
                { 
          "label" : "Three days Ago" ,
          "value" : 51.87
        } , 
                { 
          "label" : "Four Days Ago" ,
          "value" : 71.86
        } , 
                { 
          "label" : "Five Days Ago" ,
          "value" : 57.10
        } , 
                { 
          "label" : "Six Days Ago" ,
          "value" : 75.87
        } , 
        { 
          "label" : "Seven Days Ago" , 
          "value" : 80.12
        } 
      ]
    }
  ]

}




/*
function dataFactory(seriesNum, perSeries) {
   return new d3.range(0,seriesNum).map(function(d,i) { return {
    key: 'Stream ' + i,
    values: new d3.range(0,perSeries).map( function(f,j) {
      return { 
               y: 10 + Math.random()*100,
               x: j
             }
    })
    };  
  });

}


defaultChartConfig("chart1000", dataFactory(4,24), {
  delay: 0,
  transitionDuration:0,
  groupSpacing: .2
});



function defaultChartConfig(containerId, data, chartOptions) {
  nv.addGraph(function() {
      var chart;
      chart = nv.models.multiBarChart()
        .margin({bottom: 100})
        .transitionDuration(300)
        ;

      chart.options(chartOptions);
      chart.multibar
        .hideable(true);

      chart.xAxis
          .axisLabel("Current Index")
          .showMaxMin(true)
          .tickFormat(d3.format(',0f'));

      chart.yAxis
          .tickFormat(d3.format(',.1f'));

      d3.select('#' + containerId + ' svg')
          .datum(data)
         .call(chart);

      nv.utils.windowResize(chart.update);

      chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

      return chart;
  });
}

console.log($('#chart2'));
*/
});



function sequence(i){	
	for(var j = 0; j<document.getElementsByClassName('step-'+i).length;j++){
		document.getElementsByClassName('step-'+i)[j].classList.remove("hidden")
	}	
	
}




	
myApp.onPageInit('lockbox-inbound', function (page) {

		console.log('page initiated');

		getLockboxInboundDetail();
	
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
				if(i==7){
					console.log(arrowSequence);
					clearInterval(arrowSequence);
				}
			},1000);
		
		
		$("#isSequnceSelected").change(function() { 
			if($("#isSequnceSelected").is(':checked')){
    			var i = 0;
			 	 arrowSequence =	
					setInterval(function(){
						sequence(i);
						i++;
						if(i==7){
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




/*
$$('.ac-5').on('click', function () {
    var buttons = [
        {
            text: 'Dashboard',
            onClick: function () {
                window.location.href = '/';
            }
        },
        {
            text: 'Report',
            onClick: function () {
                window.location.href = '/report';
            }
        },
        {
            text: 'Cancel',
            red: true,
            onClick: function () {

				myApp.closeModal('.ac-5');
				
				
            }
        },
    ];
    myApp.actions(buttons);
}); 
*/

$$('.pull-to-refresh-content').on('refresh', function (e) {
    // Emulate 2s loading
	if($('.boxFlip').hasClass('animated flip')){
			$('.boxFlip').removeClass('animated flip');		
	}
    setTimeout(function () {
        //alert('working');
		getLockboxNumbers();
		getLockboxInboundDetail();
	getLockboxOutboundDetail();	
		$('.boxFlip').addClass('animated flip');
        myApp.pullToRefreshDone();
    }, 2000);
});



/*
$$('.pending837').on('opened', function (e) {
  $('.action1').get(0).click();
}); 

*/




var mySlider = myApp.slider('.slider-container', {
    pagination:'.slider-pagination'
});

 


/*
$$('.action1').on('click', function () {
  
});





*/




/****************************************************************************************************************************/



	$('#siteNumberInput').val('11');
	sessionStorage.siteNumber = '11';
	sessionStorage.organization = 'HLSC';
	
	function IPObject (siteNumber, organization){
	
		this.siteNumber = siteNumber;
		this.organization = organization;
		this.getSite = function(){
		
		};

	};
	
	IPObject.prototype.getSiteNumber = function(){
		return this.siteNumber;
	};
	
	IPObject.prototype.getOrganization = function(){
		return this.organization;
	};
	
	IPObject.prototype.setSiteNumber = function(number){
		this.siteNumber = number;
	};
	
	IPObject.prototype.setOrganization = function(org){
		this.organization = org;
	};
	//
	
	
	
	io = new IPObject(sessionStorage.siteNumber,sessionStorage.organization);
	
	//console.log(io);
	
	
	var date = new Date();
	(function() {
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

		var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

		Date.prototype.getMonthName = function() {
			return months[ this.getMonth() ];
		};
		Date.prototype.getDayName = function() {
			return days[ this.getDay() ];
		};
	})();
	
	$('.todaysDate').html('<font class="Helvetica">'+date.getDayName() + ' ' + date.getMonthName() + ' ' + date.getDate() + ',' + date.getFullYear()+'</font>');
	$('.todaysTime').html('<font class="Helvetica">'+date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())  + ':' + (date.getSeconds() <10 ? '0' +date.getSeconds() : date.getSeconds()) + ' '+ date.toString().match(/\(([A-Za-z\s].*)\)/)[1] +'</font>');
	
	
	//Get Name and Last Login info from Server
	
	
	(function() {
	  var loginAPI = "http://server-test42.herokuapp.com/login";
	  $.getJSON( loginAPI, {
		format: "json"
	  })
		.done(function( data ) {
			$('#welcomeName').html('<font class="Helvetica">'+'Welcome ' +data[0].userId+'</font>');
			$('#lastLoginTime').html('<font class="Helvetica"> Last Login: '+data[0].lastLogin+'</font>');
		});
	})();
	
	//
	
	
	
	//Define Function to get the data from server
	
	
	function getResource( io, callback ){
		var resourceAPI = "http://server-test42.herokuapp.com/resources/"+ io.getSiteNumber()+"&"+io.getOrganization();
		$.getJSON( resourceAPI, {
			format: "json"
		}).done(function( data ) {
				var err = null;
				try{
					
					var data = data[0];
					sessionStorage.setItem('data', JSON.stringify(data));
					//console.log(sessionStorage.data);
					
					
				}
				catch(error){
					err = error;
					console.log(err);
				}
				//console.log(data);
				callback(err,data );
			});
		
		
		
	
	};
	
	
	
	function getLockboxNumbers(){
		getResource(io, function(err, d){
			if(err) alert('Server-Error-1001');
			else{

				var sumInGreen 	= d.S1.G + d.S2.G + d.S3.G + d.S4.G + d.S5.G + d.S6.G + d.S7.G + d.S8.G + d.S9.G;
				var sumInRed 	= d.S1.R + d.S2.R + d.S3.R + d.S4.R + d.S5.R + d.S6.R + d.S7.R + d.S8.R + d.S9.R;
				var percentageIn = parseInt((sumInGreen / (sumInGreen+sumInRed))*100,10);
				//console.log(percentageIn);
				var sumKyGreen 	= d.S10.G;
				var sumKyRed 	= d.S10.R;
				var percentageKy = parseInt((sumKyGreen / (sumKyGreen+sumKyRed))*100,10);
				var sumOtGreen 	= d.S11.G+d.S12.G+d.S13.G+d.S14.G+d.S15.G+d.S16.G+d.S17.G;
				var sumOtRed 	= d.S11.R+d.S12.R+d.S13.R+d.S14.R+d.S15.R+d.S16.R+d.S17.R;
				var percentageOt = parseInt((sumOtGreen / (sumOtGreen+sumOtRed))*100,10);
				
				
				$('#inboundGreen').html('');
				$('#inboundRed').html('');
				$('#outboundGreen').html('');
				$('#outboundRed').html('');
				$('#keyGreen').html('');
				$('#keyRed').html('');
				
				$('#inboundGreen').html('<font class="digital"  color="#00FF00">'+sumInGreen+'</font>');
				$('#inboundRed').html('<font class="digital"  color="#FF0000">'+sumInRed+'</font>');
				
				$('#outboundGreen').html('<font class="digital"  color="#00FF00">'+sumOtGreen+'</font>');
				$('#outboundRed').html('<font class="digital"  color="#FF0000">'+sumOtRed+'</font>');
				
				
				$('#keyGreen').html('<font class="digital"  color="#00FF00">'+sumKyGreen+'</font>');
				$('#keyRed').html('<font class="digital"  color="#FF0000">'+sumKyRed+'</font>');
				
				
			}
		});
	
	};
	
	//call for 1st time loading
	(function(){
		
		getLockboxNumbers();
		getLockboxInboundDetail();
	getLockboxOutboundDetail();	
		$('.boxFlip').addClass('animated flip');
		
	})();
	
	
	function getLockboxInboundDetail(){
		try{
			//console.log(sessionStorage.data);
			
			var data = $.parseJSON(sessionStorage.data);
			console.log(data);
			$('#WTPGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S1.G+'</strong></font></div>');
			$('#WTPRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S1.R+'</strong></font></div>');
			
			
			$('#SIGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S2.G+'</strong></font></div>');
			$('#SIRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S2.R+'</strong></font></div>');
			
			
			$('#EVGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S3.G+'</strong></font></div>');
			$('#EVRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S3.R+'</strong></font></div>');
			
			
			$('#BSGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S4.G+'</strong></font></div>');
			$('#BSRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S4.R+'</strong></font></div>');
			
			
			$('#PIGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S5.G+'</strong></font></div>');
			$('#PIRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S5.R+'</strong></font></div>');
			
			
			$('#DMGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S6.G+'</strong></font></div>');
			$('#DMRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S6.R+'</strong></font></div>');
			
			
			$('#ISGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S7.G+'</strong></font></div>');
			$('#ISRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S7.R+'</strong></font></div>');
			
			
			$('#IAGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S8.G+'</strong></font></div>');
			$('#IARed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S8.R+'</strong></font></div>');
			
			
			$('#WLGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S9.G+'</strong></font></div>');
			$('#WLRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S9.R+'</strong></font></div>');
			
		}
		
		catch(err){
			console.log(err);
			//alert('Server-Error-1002');
		}
	}
	
		function getLockboxOutboundDetail(){
		try{
			//console.log(sessionStorage.data);
			
			var data = $.parseJSON(sessionStorage.data);
			console.log(data);
			$('#CRGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S11.G+'</strong></font></div>');
			$('#CRRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S11.R+'</strong></font></div>');
			
			
			$('#PPGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S12.G+'</strong></font></div>');
			$('#PPRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S12.R+'</strong></font></div>');
			
			
			$('#DM2Green').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S13.G+'</strong></font></div>');
			$('#DM2Red').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S13.R+'</strong></font></div>');
			
			
			$('#OGGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S14.G+'</strong></font></div>');
			$('#OGRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S14.R+'</strong></font></div>');
			
			
			$('#MRGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S15.G+'</strong></font></div>');
			$('#MRRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S15.R+'</strong></font></div>');
			
			
			$('#RAGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S16.G+'</strong></font></div>');
			$('#RARed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S16.R+'</strong></font></div>');
			
			
			$('#THGreen').html('<div class="boxFlip"><font class="digit" color="#00FF00"><strong>'+data.S17.G+'</strong></font></div>');
			$('#THRed').html('<div class="boxFlip"><font class="digit" color="#FF0000"><strong>'+data.S17.R+'</strong></font></div>');

			
		}
		
		catch(err){
			console.log(err);
			//alert('Server-Error-1002');
		}
	}
	
	
	setInterval(function(){
		if($('.boxFlip').hasClass('animated flip')){
			$('.boxFlip').removeClass('animated flip');
			
		}
		else{
			getLockboxNumbers();
			getLockboxInboundDetail();
			getLockboxOutboundDetail();
			
			$('.boxFlip').addClass('animated flip');
		}	

	},300000);
	
	

	function drawChart (){
		var salesData=[
			
			{label:"Plus", value: 1000, color:"#DC3912"},
			{label:"Lite", value: 800, color:"#FF9900"},
			{label:"Elite", value: 200,color:"#109618"},
			{label:"Delux", value: 10, color:"#990099"}
		];



		var svgInbound = d3.select("#chartL1").append("svg").attr("width",300).attr("height",300);
		var svgOutbound = d3.select("#chartL3").append("svg").attr("width",300).attr("height",300);
		var svgKeyin = d3.select("#chartL2").append("svg").attr("width",300).attr("height",300);
		var svgClaim = d3.select("#chartL4").append("svg").attr("width",300).attr("height",300);

		svgInbound.append("g").attr("id","InboundDonut");
		svgOutbound.append("g").attr("id","OutboundDonut");
		svgKeyin.append("g").attr("id","KeyinPie");
		svgClaim.append("g").attr("id","ClaimDonut");
		
		Donut3D.draw("InboundDonut", salesData, 150, 150, 130, 100, 30, 0.7);
		Donut3D.draw("OutboundDonut", salesData, 150, 150, 130, 100, 30, 0.7);
		Donut3D.draw("ClaimDonut", salesData, 150, 150, 130, 100, 30, 0.7);
		Donut3D.draw("KeyinPie", salesData, 150, 150, 130, 100, 30, 0.0);


		
		function changeData(){
			Donut3D.transition("InboundDonut", salesData, 130, 100, 30, 0.7);
			Donut3D.transition("OutboundDonut", salesData, 130, 100, 30, 0.7);
			Donut3D.transition("KeyinPie", salesData, 130, 100, 30, 0.0);
			Donut3D.draw("ClaimDonut", salesData, 150, 150, 130, 100, 30, 0.7);
		}
	}
	
	drawChart();
	
});



