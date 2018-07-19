define(["ui","alpaca","ratchet/dynamic/empty","content-helpers","jquery","app/gadgets/project/document/view/document-properties"],function(t,e,n,r,o,i){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(e,n){e.exports=t},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,n){t.exports=e},function(t,e,n){t.exports=n(4)},function(t,e,n){var r;void 0===(r=function(t){n(5),n(9),n(12),n(14),n(16),n(17),n(19)}.call(e,n,e,t))||(t.exports=r)},function(t,e,n){var r;void 0===(r=function(t,e,r){n(6);var o=n(7),i=n(8),a=n(0);return a.registerGadget("sample-products-list",i.extend({TEMPLATE:o,setup:function(){this.get("/projects/{projectId}/products",this.index)},prepareModel:function(t,e,n){var r=this.observable("project").get(),o=this.observable("branch").get();this.base(t,e,function(){o.queryNodes({_type:"catalog:product"}).then(function(){e.products=this.asArray();for(var t=0;t<e.products.length;t++){var o=e.products[t];o.imageUrl256="/preview/repository/"+o.getRepositoryId()+"/branch/"+o.getBranchId()+"/node/"+o.getId()+"/default?size=256&name=preview256&force=true",o.imageUrl128="/preview/repository/"+o.getRepositoryId()+"/branch/"+o.getBranchId()+"/node/"+o.getId()+"/default?size=128&name=preview128&force=true",o.browseUrl="/#/projects/"+r._doc+"/documents/"+o._doc}n()})})},afterSwap:function(t,e,n,r){this.base(t,e,n,function(){$(t).find(".media-popup").click(function(t){t.preventDefault();var n=$(this).attr("data-media-index"),r=e.products[n];a.showPopupModal({title:"Viewing: "+r.title,body:"<div style='text-align:center'><img src='"+r.imageUrl256+"'></div>"})}),r()})}}))}.call(e,n,e,t))||(t.exports=r)},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"",""])},function(t,e){t.exports='<div>\n    {{#each products}}\n    <div class="media">\n        <div class="media-left">\n            <a href="#" class="media-popup" data-media-index="{{@index}}">\n                <img class="media-object" src="{{imageUrl128}}" alt="{{title}}">\n            </a>\n        </div>\n        <div class="media-body">\n            <h4 class="media-heading">\n                <a href="{{browseUrl}}">{{title}}</a>\n            </h4>\n            {{description}}\n        </div>\n    </div>\n    {{/each}}\n</div>\n'},function(t,e){t.exports=n},function(t,e,n){var r;void 0===(r=function(t,e,r){var o=n(10);n(11);var i=n(0);return i.registerDashlet("sample-random-product-dashlet",i.AbstractDashlet.extend({TEMPLATE:o,prepareModel:function(t,e,n){var r=this.observable("branch").get();this.base(t,e,function(){r.queryNodes({_type:"catalog:product"}).then(function(){var t=this.asArray(),r=e.product=t[Math.floor(Math.random()*t.length)];r.imageUrl="/preview/repository/"+r.getRepositoryId()+"/branch/"+r.getBranchId()+"/node/"+r.getId()+"/default?size=256&name=preview256",n()})})},afterSwap:function(t,e,n,r){this.base(t,e,n,function(){r()})}}))}.call(e,n,e,t))||(t.exports=r)},function(t,e){t.exports='<div>\n\n    <div style="text-align:center">\n\n        <p>{{product.title}}</p>\n\n        <a href="/#/projects/{{project._doc}}/documents/{{product._doc}}">\n            <img src="{{product.imageUrl}}" alt="{{product.title}}">\n        </a>\n\n    </div>\n\n</div>\n'},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,".dashlet.sample-dashlet .dashlet-body>div{padding:10px}",""])},function(t,e,n){var r;void 0===(r=function(t,e,r){var o=n(0),i=n(13);return o.registerAction("create-sample-space",o.AbstractUIAction.extend({defaultConfiguration:function(){var t=this.base();return t.title="Create Sample Space",t.iconClass="fa fa-plus",t},prepareAction:function(t,e,n){t.currentPath=t.observable("path").get(),n()},executeAction:function(t,e,n){var r=this;o.renderForm(t,{data:{title:"My Sample Space",description:"Description of my sample space"},schema:{type:"object",properties:{title:{type:"string",required:!0},description:{type:"string"}}},options:{fields:{title:{type:"text",label:"Title"},description:{type:"textarea",label:"Description"}},focus:"title"}},function(n){o.showModal({title:e.title,form:n,buttons:[{id:"create",title:"Create",handler:function(e){o.showWaitModal("Creating the sample space...",function(){r.createHandler(t,n.getValue(),function(){o.hideWaitModal()})})}}],bindFormEnterKeyToButton:"create",cancel:!0},function(t){})})},createHandler:function(t,e,n){i.addContent(t,[{type:"folder",properties:e,parentFolderPath:t.currentPath},{type:"folder",properties:{title:"Files"},parentFolderPath:t.currentPath+"/"+e.title},{type:"file",properties:{title:"helloworld.txt"},parentFolderPath:t.currentPath+"/"+e.title+"/Files",text:"Hello World!"}],function(t){n()})}}))}.call(e,n,e,t))||(t.exports=r)},function(t,e){t.exports=r},function(t,e,n){var r;void 0===(r=function(t,e,r){var o=n(0),i=n(2),a=n(15);return o.registerField("sample-city-picker",i.Fields.SelectField.extend({setup:function(){this.base(),this.options.dataSource=function(t){a.ajax({method:"GET",url:"./data/cities.json",dataType:"json"}).done(function(e){t(e.cities)})}}}))}.call(e,n,e,t))||(t.exports=r)},function(t,e){t.exports=o},function(t,e,n){var r;void 0===(r=function(t,e,r){var o=n(0),i=n(2);return o.registerField("sample-content-picker",i.Fields.SelectField.extend({setup:function(){this.base(),this.options.contentType||(this.options.contentType="catalog:product"),this.options.dataSource={connector:!0,config:{query:{_type:this.options.contentType},mappings:{value:"_doc",text:"title"}}}}}))}.call(e,n,e,t))||(t.exports=r)},function(t,e,n){var r;void 0===(r=function(t,e,r){var o=n(18);return n(0).registerGadget("sample-product-document-properties",o.extend({determinePropertyDisplaySettings:function(t,e){return"catalog:product"===t.getTypeQName()&&"sku"===e?{link:"https://www.wickedgoodcupcakes.com"}:this.base()}}))}.call(e,n,e,t))||(t.exports=r)},function(t,e){t.exports=i},function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"",""])}])});