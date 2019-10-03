define(function (require, exports, module) {



    var Alpaca = require("alpaca");



    Alpaca.Fields.TestField = Alpaca.Fields.SelectField.extend({


        setValue: function(data) {

            var self = this;
   
            this.base(data);
            debugger;
            $(self.getFieldEl()).remove(".warning-message");
            if (data[0] == 'Yes')
            {
                $(self.getFieldEl()).append("<span class='warning-message'>WARNING!</span>");
            }

            // callback();


        }

    });



    Alpaca.registerFieldClass("sample-dropdown-guy", Alpaca.Fields.TestField);



});