function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,o){return n&&_defineProperties(e.prototype,n),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{qrJ7:function(e,n,o){"use strict";o.r(n);var t,i,a=o("tyNb"),r=o("qoxR"),c=o("7+xq"),s=o("+mFx"),l=o("/K8e"),f=o("fXoL"),u=((i=function(){function e(){_classCallCheck(this,e),this.fields=[l.b.input("name",{label:"Enter your name"})]}return _createClass(e,[{key:"handleAction",value:function(e){var n=e.payload;console.log({payload:n})}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=f.Jb({type:i,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"fields","action"]],template:function(e,n){1&e&&(f.Vb(0,"ui-form",0),f.dc("action",(function(e){return n.handleAction(e)})),f.Ub()),2&e&&f.lc("fields",n.fields)},directives:[l.u],encapsulation:2}),i),m=((t=function(){function e(n){_classCallCheck(this,e),this.ui=n,this.fields=[l.b.email("email",{label:"Enter your email",required:!0}),l.b.password("password",{label:"Enter your password",required:!0})]}return _createClass(e,[{key:"handleAction",value:function(e){var n=e.payload;this.ui.toastSuccess("We will log you in: ".concat(JSON.stringify(n)))}}]),e}()).\u0275fac=function(e){return new(e||t)(f.Pb(l.n))},t.\u0275cmp=f.Jb({type:t,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"fields","action"]],template:function(e,n){1&e&&(f.Vb(0,"ui-form",0),f.dc("action",(function(e){return n.handleAction(e)})),f.Ub()),2&e&&f.lc("fields",n.fields)},directives:[l.u],encapsulation:2}),t),d="demos/ui-form",p={title:"ui-form demos",demos:[s.a.config({title:"Simple Form",description:'The <code>ui-form</code> component can be used to render a form. It\'s powered by\n<a href="https://github.com/ngx-formly/ngx-formly">ngx-formly</a> providing a convenient abstraction with some helpers\nand defaults.\n',component:u,path:"".concat(d,"/form-simple"),files:["form-simple.component.ts","form-simple.component.html"]}),s.a.config({title:"Login Form",description:"This is an example of a simple login form. The fields have validation and should work as expected with minimal config.",component:m,path:"".concat(d,"/form-login"),files:["form-login.component.ts","form-login.component.html"]})]};o.d(n,"UiFormDemoModule",(function(){return b}));var h,b=((h=function e(){_classCallCheck(this,e)}).\u0275mod=f.Nb({type:h}),h.\u0275inj=f.Mb({factory:function(e){return new(e||h)},imports:[[r.a,a.f.forChild([{path:"",component:c.a,data:p}])]]}),h)}}]);