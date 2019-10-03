define(function (require, exports, module) {



    var Alpaca = require("alpaca");



    Alpaca.Fields.TestField = Alpaca.Fields.SelectField.extend({


        afterRenderControl: function(model, callback) {

            var self = this;
   
            this.base(model, function() {
                debugger;
                $(".warning-message").remove();
                if (data[0] == 'Yes')
                {
                    $(self.getFieldEl()).append("<span class='warning-message'>WARNING!</span>");
                }

                callback();
            });



        }

    });



    Alpaca.registerFieldClass("sample-dropdown-guy", Alpaca.Fields.TestField);



});