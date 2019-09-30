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

        },



        postRender: function (callback) {

            var self = this;

            this.base(function() {
                self.displayMessage("WARNING!");

                callback();
            });

        }

    });



    Alpaca.registerFieldClass("sample-message-displayer", Alpaca.Fields.ResourceField);



});