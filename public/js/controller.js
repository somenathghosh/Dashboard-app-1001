$(document).ready(function() {
	var dataArray= [91,94,67];

	var dialChart = function(chartselector, iValue,yValue) {

	  var w = 342,
		  h = 190;

	  var layout = [ 
		{ x: 165, y: yValue, r: 85, m: 100, ticks: 2, mark: 'line', label:'Text' }
		
	  ];
	  var charts = layout.map(function(d) { 
		return NBXDialChart()
		  .width(d.r * 2)
		  .height(d.r * 2)
		  .domain([0, d.m])
		  .range([-150, 150])
		  .minorTicks(d.ticks)
		  .minorMark(d.mark);
	  });      
	  
	  var svg = d3.select(chartselector)
		.append('svg:svg')
		  .attr('width', w) 
		  .attr('height', h);
	  
	  var dials = svg.selectAll('g.dial')
		  .data(layout)
		.enter().append('svg:g')
		  .attr('class', 'dial')
		  .attr('id', function(d, i) { return 'dial-' + i; })
		  .attr('transform', function(d) { return 'translate(' + (d.x - d.r) + ',' + (d.y - d.r) + ')'; });
			

	  dials.each(function(d, i) { d3.select(this).data([iValue]).call(charts[i]); });

	  
	this.transition = function(p) {
		dials.each(function(d, i) { 
			//var rand = Math.floor(Math.random() * charts[i].domain()[1]);
			//var rand = Math.floor(Math.random() * 100);
			var rand = p;
			
			d3.select(this)
			  .data([ rand ])
			  //.data([ dataArray[i]])
			.call(charts[i]); 
			
		});
	  };

	};

	var dial1 = new dialChart('#chart1', dataArray[0],85);
	var dial2 = new dialChart('#chart2',dataArray[1],85);
	var dial3 = new dialChart('#chart3',dataArray[2],85);
	var dial11 = new dialChart('#chart11',dataArray[2],85);
	var dial12 = new dialChart('#chart12',dataArray[2],85);
	var dial13 = new dialChart('#chart13',dataArray[2],85);

	
	/*
	$('#inboundProcess').click(function(e){

		e.preventDefault();
		$('#inboundProcess').addClass('redBodyClicked');
		setTimeout(function(){
			$('#FrontPage').toggle('drop',{},1000);
			$('#inboundProcess').removeClass('redBodyClicked');
			setTimeout(function(){
				getLockboxInboundDetail();
				$('#inboundProcessDetail').toggle('drop',{},1000);
				setInterval(function(){
					getLockboxInboundDetail();
					if($('.boxFlip').hasClass('animated zoomIn')){
						$('.boxFlip').removeClass('animated zoomIn');
					
					}
					else{
						
						$('.boxFlip').addClass('animated zoomIn');
					}	
				},350000);
				
			},1200);
		
		
		},100);

		//console.log($('#FrontPage'));
	});
	
	
	$('#back-menu').click(function(e){
		e.preventDefault();
	
		$('#inboundProcessDetail').toggle('drop',{direction:'right'},800);
		
		setTimeout(function(){
			$('#FrontPage').toggle('drop',{},1000);
			//$('.greySubBG-2').removeClass('hidden');
		},800);
	
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
				console.log(percentageIn);
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
				
				dial1.transition(percentageIn);
				dial2.transition(percentageKy);
				dial3.transition(percentageOt);
			}
		});
	
	};
	
	//call for 1st time loading
	(function(){
		
		getLockboxNumbers();
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
			alert('Server-Error-1002');
		}
	}
	
	
	setInterval(function(){
		if($('.boxFlip').hasClass('animated flip')){
			$('.boxFlip').removeClass('animated flip');
			
		}
		else{
			getLockboxNumbers();
			$('.boxFlip').addClass('animated flip');
		}	

	},30000);
	
	
	$('#formSubmit').click(function(e){
		e.preventDefault();
		
		
		$('#progressModal').modal({
			show:true,
			keyboard:false
		});
			
		
		
		io.setSiteNumber($('#siteNumberInput').val());
		io.setOrganization($('#orgInput').val());

		if($('.boxFlip').hasClass('animated flip')){
			$('.boxFlip').removeClass('animated flip');
		}

		setTimeout(function(){
			
			setTimeout(function(){
				getLockboxNumbers();
				$('#progressModal').modal('hide');
				$('.boxFlip').addClass('animated flip');
			},3000);
		},100);
		
		$('#siteNumberInput').val(io.getSiteNumber());

	});
	
});