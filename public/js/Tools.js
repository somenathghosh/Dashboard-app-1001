var TOOL = (function(tool, $) {


    (function() {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        Date.prototype.getMonthName = function() {
            return months[this.getMonth()];
        };
        Date.prototype.getDayName = function() {
            return days[this.getDay()];
        };

        Date.prototype.dateNow = function() {
            var date = new Date();
            return date.getDayName() + ' ' + date.getMonthName() + ' ' + date.getDate() + ',' + date.getFullYear();


        };

        Date.prototype.timeNow = function() {
            var date = new Date();
            return date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + ' ' + date.toString().match(/\(([A-Za-z\s].*)\)/)[1];

        };

        //console.log('executed');

    })();


    tool.API = function() {

        this.getIt = function(url, callback) {

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

                    } catch (e) {

                        console.log(e);
                        callback(false);
                    }


                }).fail(function(err) {
                    console.log('call fails for ' + url);
                    callback(false);

                });

        };


    };


    tool.registration = function(data, callback) {
        //console.log(data);

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



    tool.PublicStore = (function() {

        var obj = {};
        var instance;

        var CreateInstance = function() {

            this.put = function(key, value) {

                obj[key] = value;
            }

            this.get = function(key) {

                return obj[key];
            }


        }

        return {

            openPort: function() {

                if (!instance) {

                    instance = new CreateInstance();

                }

                return instance;
            }



        }




    })();


    tool.ChartDataCreator = function(data) {

        this.chartData = [

            {
                label: "File In Error",
                value: data.fileInError
            }, {
                label: "File in Process",
                value: data.fileInProcess
            }, {
                label: "File Processed",
                value: data.fileProcessed
            }
        ];

        this.chartKeyinData = [

            {
                label: "File Submitted",
                value: data.submitted
            }, {
                label: "File in Progress",
                value: data.inProgress
            }, {
                label: "File Assigned",
                value: data.assigned
            },

            {
                label: "File Completed",
                value: data.completed
            }
        ];

        this.chartKeyinDataWorkList = [

            {
                label: "File Submitted",
                value: data.submitted
            }, {
                label: "File Assigned",
                value: data.assigned
            }, {
                label: "File in Progress",
                value: data.assigned
            }, {
                label: "File Completed",
                value: data.completed
            }, {
                label: "File UnAssigned",
                value: data.unassigned
            }, {
                label: "File Rejected",
                value: data.rejected
            }
        ];


    };




    return tool;


})(_ || {}, $);