(this.webpackJsonp=this.webpackJsonp||[]).push([["mac-theme-preview"],{BJXX:function(e){e.exports=JSON.parse("{}")},CkOj:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("lSNA"),r=n.n(i),a=n("lO2t"),s=n("lYO9");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e){var t=function(e){var t;if(a.a.isString(e))try{t=JSON.parse(e)}catch(e){return!1}else{if(!a.a.isObject(e)||a.a.isArray(e))return!1;t=e}return t}(e);if(!t)return null;if(!0===t.parsed||!function(e){return void 0!==e.data||void 0!==e.errors||void 0!==e.links||void 0!==e.meta}(t))return t;var n=function(e){var t={links:null,errors:null,data:null,associations:null,aggregations:null};if(e.errors)return t.errors=e.errors,t;var n=function(e){var t=new Map;if(!e||!e.length)return t;return e.forEach((function(e){var n="".concat(e.type,"-").concat(e.id);t.set(n,e)})),t}(e.included);if(a.a.isArray(e.data))t.data=e.data.map((function(e){var i=l(e,n);return Object(s.f)(i,"associationLinks")&&(t.associations=c({},t.associations,{},i.associationLinks),delete i.associationLinks),i}));else if(a.a.isObject(e.data)){var i=l(e.data,n);Object.prototype.hasOwnProperty.call(i,"associationLinks")&&(t.associations=c({},t.associations,{},i.associationLinks),delete i.associationLinks),t.data=i}else t.data=null;e.meta&&Object.keys(e.meta).length&&(t.meta=h(e.meta));e.links&&Object.keys(e.links).length&&(t.links=e.links);e.aggregations&&Object.keys(e.aggregations).length&&(t.aggregations=e.aggregations);return t}(t);return n.parsed=!0,n}function l(e,t){var n={id:e.id,type:e.type,links:e.links||{},meta:e.meta||{}};e.attributes&&Object.keys(e.attributes).length>0&&(n=c({},n,{},h(e.attributes)));if(e.relationships){var i=function(e,t){var n={},i={};return Object.keys(e).forEach((function(r){var s=e[r];if(s.links&&Object.keys(s.links).length&&(i[r]=s.links.related),s.data){var o=s.data;a.a.isArray(o)?n[r]=o.map((function(e){return d(e,t)})):a.a.isObject(o)?n[r]=d(o,t):n[r]=null}})),{mappedRelations:n,associationLinks:i}}(e.relationships,t);n=c({},n,{},i.mappedRelations,{},{associationLinks:i.associationLinks})}return n}function h(e){var t={};return Object.keys(e).forEach((function(n){var i=e[n],r=n.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()}));t[r]=i})),t}function d(e,t){var n="".concat(e.type,"-").concat(e.id);return t.has(n)?l(t.get(n),t):e}},L1sx:function(e,t,n){"use strict";n.r(t);var i=n("Xbn/"),r=n.n(i);const{Component:a}=Shopware,{Criteria:s}=Shopware.Data;a.override("sw-theme-modal",{template:r.a,inject:["macThemePreviewService"],data:()=>({selected:null,themes:[],isLoadingPreview:!1}),computed:{salesChannelRepository(){return this.repositoryFactory.create("sales_channel")}},created(){this.createdComponent()},methods:{createdComponent(){this.loadEntityData()},loadEntityData(){this.$route.params.id&&this.loadSalesChannel()},loadSalesChannel(){this.isLoadingPreview=!0;const e=new s;e.addAssociation("domains"),this.salesChannelRepository.get(this.$route.params.id,Shopware.Context.api,e).then(e=>{this.salesChannel=e,this.isLoadingPreview=!1})},selectPreview(){const e=this.themes.find(e=>e.id===this.selected);e&&this.salesChannel.domains&&(this.isLoadingPreview=!0,this.macThemePreviewService.themeCompile(this.salesChannel.id,e.id).then(()=>{this.isLoadingPreview=!1;const e=this.salesChannel.domains.first().url+"/?preview-theme-id="+this.selected;window.open(e)}))}}});var o=n("SwLI");class c extends o.default{constructor(e,t,n="mac-theme-preview"){super(e,t,n),this.name="macThemePreviewService"}themeCompile(e,t){const n=`/_action/${this.getApiBasePath()}/compile`;return this.httpClient.post(n,{sales_channel_id:e,theme_id:t},{headers:this.getBasicHeaders()}).then(e=>o.default.handleResponse(e))}}var u=c;n("S5vU"),n("BJXX");Shopware.Application.addServiceProvider("macThemePreviewService",(function(){var e=Shopware.Application.getContainer("init");return new u(e.httpClient,Shopware.Service("loginService"))}))},S5vU:function(e){e.exports=JSON.parse("{}")},SwLI:function(e,t,n){"use strict";n.r(t);var i=n("lwsE"),r=n.n(i),a=n("W8MJ"),s=n.n(a),o=n("CkOj"),c=function(){function e(t,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"application/vnd.api+json";r()(this,e),this.httpClient=t,this.loginService=n,this.apiEndpoint=i,this.contentType=a}return s()(e,[{key:"getList",value:function(t){var n=t.page,i=void 0===n?1:n,r=t.limit,a=void 0===r?25:r,s=t.sortBy,o=t.sortDirection,c=void 0===o?"asc":o,u=t.sortings,l=t.queries,h=t.term,d=t.criteria,p=t.aggregations,g=t.associations,f=t.headers,v=t.versionId,m=t.ids,y=this.getBasicHeaders(f),O={page:i,limit:a};return u?O.sort=u:s&&s.length&&(O.sort=("asc"===c.toLowerCase()?"":"-")+s),m&&(O.ids=m.join("|")),h&&(O.term=h),d&&(O.filter=[d.getQuery()]),p&&(O.aggregations=p),g&&(O.associations=g),v&&(y=Object.assign(y,e.getVersionHeader(v))),l&&(O.query=l),O.term&&O.term.length||O.filter&&O.filter.length||O.aggregations||O.sort||O.queries||O.associations?this.httpClient.post("".concat(this.getApiBasePath(null,"search")),O,{headers:y}).then((function(t){return e.handleResponse(t)})):this.httpClient.get(this.getApiBasePath(),{params:O,headers:y}).then((function(t){return e.handleResponse(t)}))}},{key:"getById",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t)return Promise.reject(new Error("Missing required argument: id"));var r=n,a=this.getBasicHeaders(i);return this.httpClient.get(this.getApiBasePath(t),{params:r,headers:a}).then((function(t){return e.handleResponse(t)}))}},{key:"updateById",value:function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!t)return Promise.reject(new Error("Missing required argument: id"));var a=i,s=this.getBasicHeaders(r);return this.httpClient.patch(this.getApiBasePath(t),n,{params:a,headers:s}).then((function(t){return e.handleResponse(t)}))}},{key:"deleteAssociation",value:function(e,t,n,i){if(!e||!n||!n)return Promise.reject(new Error("Missing required arguments."));var r=this.getBasicHeaders(i);return this.httpClient.delete("".concat(this.getApiBasePath(e),"/").concat(t,"/").concat(n),{headers:r}).then((function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(e)}))}},{key:"create",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n,a=this.getBasicHeaders(i);return this.httpClient.post(this.getApiBasePath(),t,{params:r,headers:a}).then((function(t){return e.handleResponse(t)}))}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e)return Promise.reject(new Error("Missing required argument: id"));var i=Object.assign({},t),r=this.getBasicHeaders(n);return this.httpClient.delete(this.getApiBasePath(e),{params:i,headers:r})}},{key:"clone",value:function(t){return t?this.httpClient.post("/_action/clone/".concat(this.apiEndpoint,"/").concat(t),null,{headers:this.getBasicHeaders()}).then((function(t){return e.handleResponse(t)})):Promise.reject(new Error("Missing required argument: id"))}},{key:"versionize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i="/_action/version/".concat(this.apiEndpoint,"/").concat(e),r=Object.assign({},t),a=this.getBasicHeaders(n);return this.httpClient.post(i,{},{params:r,headers:a})}},{key:"mergeVersion",value:function(t,n,i,r){if(!t)return Promise.reject(new Error("Missing required argument: id"));if(!n)return Promise.reject(new Error("Missing required argument: versionId"));var a=Object.assign({},i),s=Object.assign(e.getVersionHeader(n),this.getBasicHeaders(r)),o="_action/version/merge/".concat(this.apiEndpoint,"/").concat(n);return this.httpClient.post(o,{},{params:a,headers:s})}},{key:"getApiBasePath",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="";return t&&t.length&&(n+="".concat(t,"/")),e&&e.length>0?"".concat(n).concat(this.apiEndpoint,"/").concat(e):"".concat(n).concat(this.apiEndpoint)}},{key:"getBasicHeaders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={Accept:this.contentType,Authorization:"Bearer ".concat(this.loginService.getToken()),"Content-Type":"application/json"};return Object.assign({},t,e)}},{key:"apiEndpoint",get:function(){return this.endpoint},set:function(e){this.endpoint=e}},{key:"httpClient",get:function(){return this.client},set:function(e){this.client=e}},{key:"contentType",get:function(){return this.type},set:function(e){this.type=e}}],[{key:"handleResponse",value:function(t){if(null===t.data||void 0===t.data)return t;var n=t.data,i=t.headers;return i&&i["content-type"]&&"application/vnd.api+json"===i["content-type"]&&(n=e.parseJsonApiData(n)),n}},{key:"parseJsonApiData",value:function(e){return Object(o.a)(e)}},{key:"getVersionHeader",value:function(e){return{"sw-version-id":e}}}]),e}();t.default=c},"Xbn/":function(e,t){e.exports='{% block sw_theme_modal_footer %}\n    <template slot="modal-footer">\n        <sw-button v-if="selected" @click="selectPreview" :isLoading="isLoadingPreview">\n            {{ $tc(\'mac-theme-preview.previewButton\') }}\n        </sw-button>\n    </template>\n\n    {% parent %}\n{% endblock %}\n'},lO2t:function(e,t,n){"use strict";n.d(t,"b",(function(){return C}));var i=n("GoyQ"),r=n.n(i),a=n("YO3V"),s=n.n(a),o=n("E+oP"),c=n.n(o),u=n("wAXd"),l=n.n(u),h=n("Z0cm"),d=n.n(h),p=n("lSCD"),g=n.n(p),f=n("YiAA"),v=n.n(f),m=n("4qC0"),y=n.n(m),O=n("Znm+"),b=n.n(O),j=n("Y+p1"),w=n.n(j),k=n("UB5X"),P=n.n(k);function C(e){return void 0===e}t.a={isObject:r.a,isPlainObject:s.a,isEmpty:c.a,isRegExp:l.a,isArray:d.a,isFunction:g.a,isDate:v.a,isString:y.a,isBoolean:b.a,isEqual:w.a,isNumber:P.a,isUndefined:C}},lYO9:function(e,t,n){"use strict";n.d(t,"g",(function(){return v})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return y})),n.d(t,"h",(function(){return O})),n.d(t,"f",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"e",(function(){return w})),n.d(t,"d",(function(){return k}));var i=n("lSNA"),r=n.n(i),a=n("QkVN"),s=n.n(a),o=n("BkRI"),c=n.n(o),u=n("mwIZ"),l=n.n(u),h=n("D1y2"),d=n.n(h),p=n("lO2t");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}s.a,c.a,l.a,d.a;var v=s.a,m=c.a,y=l.a,O=d.a;function b(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return JSON.parse(JSON.stringify(e))}function w(e,t){return e===t?{}:p.a.isObject(e)&&p.a.isObject(t)?p.a.isDate(e)||p.a.isDate(t)?e.valueOf()===t.valueOf()?{}:t:Object.keys(t).reduce((function(n,i){if(!b(e,i))return f({},n,r()({},i,t[i]));if(p.a.isArray(t[i])){var a=k(e[i],t[i]);return Object.keys(a).length>0?f({},n,r()({},i,t[i])):n}if(p.a.isObject(t[i])){var s=w(e[i],t[i]);return!p.a.isObject(s)||Object.keys(s).length>0?f({},n,r()({},i,s)):n}return e[i]!==t[i]?f({},n,r()({},i,t[i])):n}),{}):t}function k(e,t){if(e===t)return[];if(!p.a.isArray(e)||!p.a.isArray(t))return t;if(e.length<=0&&t.length<=0)return[];if(e.length!==t.length)return t;if(!p.a.isObject(t[0]))return t.filter((function(t){return!e.includes(t)}));var n=[];return t.forEach((function(i,r){var a=w(e[r],t[r]);Object.keys(a).length>0&&n.push(t[r])})),n}}},[["L1sx","runtime","vendors-node"]]]);