
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);




//app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/index', routes.index);
app.get('/lockbox-inbound.html', routes.lockboxInbound);
app.get('/lockbox-outbound.html', routes.lockboxOutbound);
app.get('/claim.html', routes.claim);
app.get('/keyin-detail.html', routes.keyinDetail);
app.get('/reports', routes.reports);
app.get('/quality-matrix', routes.qualityMatrix);
app.get('/customer-reported-error', routes.customerReportedError);
app.get('/qc-effectiveness', routes.qcEffectiveness);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});




