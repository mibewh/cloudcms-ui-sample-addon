define(function (require, exports, module) {



    var Alpaca = require("alpaca");



    Alpaca.Fields.TestField = Alpaca.Fields.SelectField.extend({


        setValue: function(data) {

            var self = this;
   
            this.base(data);

            debugger;
            $(".warning-message").remove();
            if (self.data == 'Yes')
            {
                $(self.getFieldEl()).append("<span class='warning-message'>WARNING!</span>");
            }
        }

    });



    Alpaca.registerFieldClass("sample-dropdown-guy", Alpaca.Fields.TestField);



});