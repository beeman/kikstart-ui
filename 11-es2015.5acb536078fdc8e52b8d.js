(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"XDt+":function(e,t,a){"use strict";a.r(t),a.d(t,"UiCardDemoModule",(function(){return m}));var n=a("tyNb"),c=a("qoxR"),i=a("7+xq"),r=a("+mFx"),o=a("fXoL"),s=a("/K8e");const d=function(){return{action:"REFRESH",icon:"fa-refresh"}},l=function(){return{action:"DELETE",icon:"fa-trash-o text-danger"}},u=function(e,t){return[e,t]},b={title:"ui-card demos",demos:[r.a.config({title:"Card Demos",description:"The <code>ui-card</code> component can be used to render an card in various ways.",component:(()=>{class e{constructor(){this.card="assets/logo.png",this.examples=[{name:"Simple card",cards:[{label:"Save",action:"SAVE",className:"btn-outline-success"},{label:"Save",action:"DISABLED",className:"btn-outline-success",disabled:!0}]},{name:"Card with icon and color",cards:[{icon:"fa-trash",label:"Delete",action:"DELETE",className:"btn-outline-danger"},{label:"Delete",iconAfter:"fa-trash",action:"DELETE",className:"btn-outline-danger"}]},{name:"Card with custom handler",cards:[{icon:"fa-refresh",className:"btn-sm btn-outline-info",handler:e=>{this.result=Object.assign(Object.assign({},e),{inline:["Handle Card Actions"]})}}]}],this.result={}}handleAction(e){this.result=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["ng-component"]],decls:18,vars:6,consts:[[1,"my-3"],["cardTitle","Card Header","iconAfter","fa-lock text-muted","icon","fa-cubes"],[1,"right"],["icon","fa-spinner fa-spin text-muted",1,"text-center"],[1,"left","text-muted","text-right","ml-2"],["cardTitle","Card Header","iconAfter","fa-lock text-muted","icon","fa-cubes",3,"buttons"],[1,"right","text-muted"],["icon","fa-github"],[1,"text-center"],[1,"text-muted"]],template:function(e,t){1&e&&(o.Ub(0,"ui-card",0),o.Ub(1,"ui-card-header",1),o.Ub(2,"div",2),o.Bc(3," I can sit inside the header "),o.Tb(),o.Tb(),o.Ub(4,"ui-card-body"),o.Bc(5," In here we can do whatever we please! "),o.Tb(),o.Ub(6,"ui-card-footer",3),o.Ub(7,"small",4),o.Bc(8," Loading items... "),o.Tb(),o.Tb(),o.Tb(),o.Ub(9,"ui-card",0),o.Ub(10,"ui-card-header",5),o.Ub(11,"small",6),o.Pb(12,"ui-label",7),o.Tb(),o.Tb(),o.Ub(13,"ui-card-body"),o.Bc(14," In here we can do whatever we please! "),o.Tb(),o.Ub(15,"ui-card-footer",8),o.Ub(16,"div",9),o.Bc(17,"This is some nice summary"),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Bb(10),o.kc("buttons",o.nc(3,u,o.lc(1,d),o.lc(2,l))))},directives:[s.f,s.h,s.e,s.g,s.v],encapsulation:2}),e})(),path:"demos/ui-card",files:["card-simple.component.ts","card-simple.component.html"]})]};let m=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(t){return new(t||e)},imports:[[c.a,n.f.forChild([{path:"",component:i.a,data:b}])]]}),e})()}}]);