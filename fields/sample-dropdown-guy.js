define(function (require, exports, module) {



    var Alpaca = require("alpaca");



    Alpaca.Fields.TestField = Alpaca.Fields.SelectField.extend({


        afterSetValue: function() {

            var self = this;
   
            this.base();
            debugger;
            $(".warning-message").remove();
            if (data[0] == 'Yes')
            {
                $(self.getFieldEl()).append("<span class='warning-message'>WARNING!</span>");
            }
        }

    });



    Alpaca.registerFieldClass("sample-dropdown-guy", Alpaca.Fields.TestField);



});