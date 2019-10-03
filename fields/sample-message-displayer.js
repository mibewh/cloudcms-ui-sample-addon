define(function (require, exports, module) {



    var Alpaca = require("alpaca");



    Alpaca.Fields.ResourceField = Alpaca.Fields.ObjectField.extend({



        getFieldType: function () {

            return "custom-oup-sp-searchengine";

        },



        setup: function () {

            this.base();



            Alpaca.merge(this.schema, {

                "properties": {

                    "showInSearchEngns": {

                        "type": "string",

                        "title": "Hide this page from search engines",

                        "enum": [

                            "Yes",

                            "No"

                        ],

                        "default": "No"

                    }

                }

            });



            Alpaca.merge(this.options, {

                "fields": {

                    "showInSearchEngns": {

                        "type": "select",

                        "removeDefaultNone": true

                    }

                }

            });

            debugger;
            $(this.getFieldEl()).remove("#warning-message");
            $(this.getFieldEl()).append("<span id='warning-message'>WARNING!</span>");
        },



        afterRenderContainer: function(model, callback) {

            var self = this;
   
            this.base(model, function() {
                

                callback();
            });

        }

    });



    Alpaca.registerFieldClass("sample-message-displayer", Alpaca.Fields.ResourceField);



});