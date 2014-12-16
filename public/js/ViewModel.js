var _ = (function(module, $) {

    module.ViewModelHomeInbound = function() {

        var self = this;

        this.applyModel = function(data) {



            self.initialize();



            $('#lockbox-inbound-file-process').html('<font class="digital animated fadeIn" color="#FCB446">' + data.fileInProcess + '</font>');
            $('#lockbox-inbound-file-error').html('<font class="digital animated fadeIn" color="#FF0044">' + data.fileInError + '</font>');
            $('#lockbox-inbound-file-processed').html('<font class="digital animated fadeIn" color="#00FF00">' + data.fileProcessed + '</font>');



        };

        this.initialize = function() {


            $('#lockbox-inbound-file-process').html('');
            $('#lockbox-inbound-file-error').html('');
            $('#lockbox-inbound-file-processed').html('');


        };


    };



    module.ViewModelHomeWelcome = function() {

        var self = this;

        this.applyModel = function() {

            var date = new Date();

            self.initialize();


            $('#welcomeName').html('<font>' + 'Welcome:  ' + localStorage.registeredUser + '</font>');

            $('#todaysDate').html('<font >' + date.dateNow() + '</font>');
            $('#todaysTime').html('<font >' + date.timeNow() + '</font>');


        };

        this.initialize = function() {

            $('#welcomeName').html('');

            $('#todaysDate').html('');
            $('#todaysTime').html('');


        };


    };


    module.ViewModelHomeKeyIn = function() {

        var self = this;
        this.applyModel = function(data) {


            var date = new Date();

            self.initialize();



            $('#keyInAssigned').html('<font class="digital animated fadeIn" color="#FF0044">' + data.assigned + '</font>');
            $('#keyInProgress').html('<font class="digital animated fadeIn" color="#FCB446">' + data.inProgress + '</font>');
            $('#keyInCompleted').html('<font class="digital animated fadeIn" color="#C184FA">' + data.completed + '</font>');
            $('#keyInSubmitted').html('<font class="digital animated fadeIn" color="#00FF00">' + data.submitted + '</font>');


        };

        this.initialize = function() {


            $('#keyInAssigned').html('');
            $('#keyInProgress').html('');
            $('#keyInCompleted').html('');
            $('#keyInSubmitted').html('');


        };


    };


    module.ViewModelOutboundHome = function() {

        var self = this;
        this.applyModel = function(data) {

            var date = new Date();

            self.initialize();



            $('#lockbox-outbound-file-process').html('<font class="digital animated fadeIn" color="#FCB446">' + data.fileInProcess + '</font>');
            $('#lockbox-outbound-file-error').html('<font class="digital animated fadeIn" color="#FF0044">' + data.fileInError + '</font>');
            $('#lockbox-outbound-file-processed').html('<font class="digital animated fadeIn" color="#00FF00">' + data.fileProcessed + '</font>');



        };

        this.initialize = function() {


            $('#lockbox-outbound-file-process').html('');
            $('#lockbox-outbound-file-error').html('');
            $('#lockbox-outbound-file-processed').html('');


        };


    };


    module.ViewModelClaim = function() {

        var self = this;
        this.applyModel = function(data) {

            var date = new Date();


            self.initialize();



            $('#claim-file-process').html('<font class="digital animated fadeIn" color="#FCB446">' + data.fileInProcess + '</font>');
            $('#claim-file-error').html('<font class="digital animated fadeIn" color="#FF0044">' + data.fileInError + '</font>');
            $('#claim-file-processed').html('<font class="digital animated fadeIn" color="#00FF00">' + data.fileProcessed + '</font>');



        };

        this.initialize = function() {


            $('#claim-file-process').html('');
            $('#claim-file-error').html('');
            $('#claim-file-processed').html('');



        };


    };



    module.ViewModelInbound = function() {

        var self = this;
        this.applyModel = function(data) {




            setTimeout(function() {
                self.initialize();
                $('#WTPGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP1.fileInProcess + '</font> ');
                $('#SIGreen').html('<font class="digit animated fadeIn"  color="#00FF00">' + data.STEP2.fileInProcess + '</font> ');
                $('#EVGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP3.fileInProcess + '</font> ');
                $('#DMGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP4.fileInProcess + '</font> ');
                $('#PIGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP5.fileInProcess + '</font> ');
                $('#BSGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP6.fileInProcess + '</font> ');
                $('#WLGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP7.fileInProcess + '</font> ');
                $('#IAGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP8.fileInProcess + '</font> ');
                $('#ISGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP9.fileInProcess + '</font> ');

                $('#WTPRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP1.fileInError + '</font> ');
                $('#SIRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP2.fileInError + '</font> ');
                $('#EVRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP3.fileInError + '</font> ');
                $('#DMRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP4.fileInError + '</font> ');
                $('#PIRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP5.fileInError + '</font> ');
                $('#BSRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP6.fileInError + '</font> ');
                $('#WLRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP7.fileInError + '</font> ');
                $('#IARed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP8.fileInError + '</font> ');
                $('#ISRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP9.fileInError + '</font> ');
            }, 500);

        };

        this.initialize = function() {

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


    module.ViewModelOutbound = function() {

        var self = this;

        this.applyModel = function(data) {

            setTimeout(function() {
                self.initialize();
                $('#PPGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP1.fileInProcess + '</font> ');
                $('#CRGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP2.fileInProcess + '</font> ');
                $('#DM2Green').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP3.fileInProcess + '</font> ');
                $('#RAGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP4.fileInProcess + '</font> ');
                $('#OGGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP5.fileInProcess + '</font> ');
                $('#MRGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP6.fileInProcess + '</font> ');
                $('#THGreen').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP7.fileInProcess + '</font> ');


                $('#PPRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP1.fileInError + '</font> ');
                $('#CRRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP2.fileInError + '</font> ');
                $('#DM2Red').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP3.fileInError + '</font> ');
                $('#RARed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP4.fileInError + '</font> ');
                $('#OGRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP5.fileInError + '</font> ');
                $('#MRRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP6.fileInError + '</font> ');
                $('#THRed').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP7.fileInError + '</font> ');
            }, 500);

        };

        this.initialize = function() {
            $('#PPGreen').html('');
            $('#CRGreen').html('');
            $('#DM2Green').html('');
            $('#RAGreen').html('');
            $('#OGGreen').html('');
            $('#MRGreen').html('');
            $('#THGreen').html('');


            $('#PPRed').html('');
            $('#CRRed').html('');
            $('#DM2Red').html('');
            $('#RARed').html('');
            $('#OGRed').html('');
            $('#MRRed').html('');
            $('#THRed').html('');



        };


    };



    module.ViewModelClaimDetail = function() {

        var self = this;
        this.applyModel = function(data) {


            setTimeout(function() {


                self.initialize();
                $('#claim-wtp-green').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP1.fileInProcess + '</font> ');
                $('#claim-si-green').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP2.fileInProcess + '</font> ');
                $('#claim-ex-green').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP3.fileInProcess + '</font> ');
                $('#claim-pl-green').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP4.fileInProcess + '</font> ');
                $('#claim-mpi-green').html('<font class="digit animated fadeIn" color="#00FF00">' + data.STEP5.fileInProcess + '</font> ');


                $('#claim-wtp-red').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP1.fileInError + '</font> ');
                $('#claim-si-red').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP2.fileInError + '</font> ');
                $('#claim-ex-red').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP3.fileInError + '</font> ');
                $('#claim-pl-red').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP4.fileInError + '</font> ');
                $('#claim-mpi-red').html('<font class="digit animated fadeIn" color="#FF0000">' + data.STEP5.fileInError + '</font> ');
            }, 500);

        };

        this.initialize = function() {
            $('#claim-wtp-green').html('');
            $('#claim-si-green').html('');
            $('#claim-ex-green').html('');
            $('#claim-pl-green').html('');
            $('#claim-mpi-green').html('');


            $('#claim-wtp-red').html('');
            $('#claim-si-red').html('');
            $('#claim-ex-red').html('');
            $('#claim-pl-red').html('');
            $('#claim-mpi-red').html('');




        };


    };


    module.ViewModelGroupCode = function() {
        this.applyModel = function(data, id, idItemtoShow) {
            $(id).html('');

            var html = '<select name="' + id + '">';
            for (var i = 0; i < data.length; i++) {
                if (i > 0) {
                    html = html + '<option value="' + data[i] + '">' + data[i] + '</option>';
                } else {
                    html = html + '<option value="' + data[i] + '">' + data[i] + '</option>';
                    $(idItemtoShow).html(data[i]);
                }



            }

            html = html + '</select>';

            $(id).html(html);


        }



    };



    module.ViewModelSiteNumber = function() {
        this.applyModel = function(data, id, idItemtoShow) {
            $(id).html('');

            var html = '<select name="' + id + '">';
            for (var i = 0; i < data.length; i++) {
                if (i > 0) {
                    html = html + '<option value="' + data[i] + '">' + data[i] + '</option>';
                } else {
                    html = html + '<option value="' + data[i] + '">' + data[i] + '</option>';
                    $(idItemtoShow).html(data[i]);
                }



            }

            html = html + '</select>';

            $(id).html(html);


        }



    };


    module.ViewModelSiteMissedTATAndClientMPIDecline = function() {
        var self = this;

        this.applyModel = function(data, id) {

            self.initialize(id);

            var html = '';

            for (var i in data) {
                html = html + '<li class="item-content">' + '<div class="item-inner">' + '<div class="item-title">' + data[i] + '</div>' + '</div>' + '</li>'

            }
            $(id).append(html);



        }

        this.initialize = function(id) {

            $(id).html('');

        }


    };


    return module;




})(_ || {}, $);