function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{CmNw:function(n,t,e){"use strict";e.r(t);var o,c,i=e("tyNb"),s=e("qoxR"),a=e("7+xq"),r=e("+mFx"),u=e("fXoL"),l=((o=function n(){_classCallCheck(this,n),this.label="Default Click Text",this.buttonClass="info",this.action=new u.n}).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=u.Jb({type:o,selectors:[["ng-component"]],inputs:{label:"label",buttonClass:"buttonClass"},outputs:{action:"action"},decls:2,vars:4,consts:[[3,"click"]],template:function(n,t){1&n&&(u.Vb(0,"button",0),u.dc("click",(function(n){return t.action.emit({type:"click"})})),u.Cc(1),u.Ub()),2&n&&(u.Eb("btn btn-",t.buttonClass,""),u.Bb(1),u.Ec(" ",t.label," "))},encapsulation:2}),o),p=e("/K8e"),d={title:"ui-render demos",demos:[r.a.config({title:"Render component",description:"The <code>ui-render</code> component can be used to dynamically render components and wire up their inputs and outputs.",component:(c=function(){function n(t){var e=this;_classCallCheck(this,n),this.ui=t,this.component=l,this.inputs={label:"Click Me",buttonClass:"success"},this.outputs={action:function(n){return e.handleAction(n)}}}return _createClass(n,[{key:"handleAction",value:function(n){this.ui.toastSuccess(JSON.stringify(n))}}]),n}(),c.\u0275fac=function(n){return new(n||c)(u.Pb(p.n))},c.\u0275cmp=u.Jb({type:c,selectors:[["ng-component"]],decls:1,vars:3,consts:[[3,"component","inputs","outputs"]],template:function(n,t){1&n&&u.Qb(0,"ui-render",0),2&n&&u.lc("component",t.component)("inputs",t.inputs)("outputs",t.outputs)},directives:[p.m],encapsulation:2}),c),path:"demos/ui-render",files:["render-demo.component.ts","render-simple.component.ts"]})]};e.d(t,"UiRenderDemoModule",(function(){return b}));var f,b=((f=function n(){_classCallCheck(this,n)}).\u0275mod=u.Nb({type:f}),f.\u0275inj=u.Mb({factory:function(n){return new(n||f)},imports:[[s.a,i.f.forChild([{path:"",component:a.a,data:d}])]]}),f)}}]);