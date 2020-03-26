function _createSuper(e){return function(){var t,n=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var o=_getPrototypeOf(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{ZWgz:function(e,t,n){"use strict";n.r(t),n.d(t,"UiCommentFormDemoModule",(function(){return x}));var o,r,i,c,s=n("tyNb"),a=n("qoxR"),u=n("7+xq"),l=n("+mFx"),f=n("2Vo4"),h=n("LRne"),d=n("vkgz"),p=n("D0XW"),m=n("7o/Q"),v=n("EY2u"),y=n("HDdC"),b=((o=function(){function e(t,n,o){_classCallCheck(this,e),this.kind=t,this.value=n,this.error=o,this.hasValue="N"===t}return _createClass(e,[{key:"observe",value:function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}}},{key:"do",value:function(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}}},{key:"accept",value:function(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)}},{key:"toObservable",value:function(){switch(this.kind){case"N":return Object(h.a)(this.value);case"E":return e=this.error,new y.a((function(t){return t.error(e)}));case"C":return Object(v.b)()}var e;throw new Error("unexpected notification kind value")}}],[{key:"createNext",value:function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification}},{key:"createError",value:function(t){return new e("E",void 0,t)}},{key:"createComplete",value:function(){return e.completeNotification}}]),e}()).completeNotification=new o("C"),o.undefinedValueNotification=new o("N",void 0),o),_=function(){function e(t,n){_classCallCheck(this,e),this.delay=t,this.scheduler=n}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new C(e,this.delay,this.scheduler))}}]),e}(),C=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,o,r){var i;return _classCallCheck(this,n),(i=t.call(this,e)).delay=o,i.scheduler=r,i.queue=[],i.active=!1,i.errored=!1,i}return _createClass(n,[{key:"_schedule",value:function(e){this.active=!0,this.destination.add(e.schedule(n.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}},{key:"scheduleNotification",value:function(e){if(!0!==this.errored){var t=this.scheduler,n=new w(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}}},{key:"_next",value:function(e){this.scheduleNotification(b.createNext(e))}},{key:"_error",value:function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleNotification(b.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(e){for(var t=e.source,n=t.queue,o=e.scheduler,r=e.destination;n.length>0&&n[0].time-o.now()<=0;)n.shift().notification.observe(r);if(n.length>0){var i=Math.max(0,n[0].time-o.now());this.schedule(e,i)}else this.unsubscribe(),t.active=!1}}]),n}(m.a),w=function e(t,n){_classCallCheck(this,e),this.time=t,this.notification=n},k=n("fXoL"),g=n("/K8e"),O=((r=function(){function e(t){_classCallCheck(this,e),this.ui=t,this.reset=new f.a(!0),this.reset$=this.reset.asObservable()}return _createClass(e,[{key:"handleAction",value:function(e){var t=this,n=e.payload;return Object(h.a)(!0).pipe(Object(d.a)((function(){return console.log("Storing comment: ".concat(n.text))})),function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p.a,o=(t=e)instanceof Date&&!isNaN(+t)?+e-n.now():Math.abs(e);return function(e){return e.lift(new _(o,n))}}(3e3),Object(d.a)((function(){return t.ui.toastSuccess("Comment saved!")})),Object(d.a)((function(){return t.reset.next(!0)}))).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||r)(k.Ob(g.n))},r.\u0275cmp=k.Ib({type:r,selectors:[["ng-component"]],decls:1,vars:1,consts:[["avatar","assets/logo.png",3,"reset$","action"]],template:function(e,t){1&e&&(k.Ub(0,"ui-comment-form",0),k.cc("action",(function(e){return t.handleAction(e)})),k.Tb()),2&e&&k.kc("reset$",t.reset$)},directives:[g.A],encapsulation:2}),r),N="demos/ui-comment-form",P={title:"ui-comment-form demos",demos:[l.a.config({title:"Simple Comment Form",description:"The <code>ui-comment-form</code> component can be used to render an comment form.",component:(i=function(){function e(){_classCallCheck(this,e),this.avatar="assets/logo.png"}return _createClass(e,[{key:"handleAction",value:function(e){var t=e.payload;console.log({payload:t})}}]),e}(),i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=k.Ib({type:i,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"avatar","action"]],template:function(e,t){1&e&&(k.Ub(0,"ui-comment-form",0),k.cc("action",(function(e){return t.handleAction(e)})),k.Tb()),2&e&&k.kc("avatar",t.avatar)},directives:[g.A],encapsulation:2}),i),path:"".concat(N,"/comment-form-simple"),files:["comment-form-simple.component.ts","comment-form-simple.component.html"]}),l.a.config({title:"Comment Form with Loading indicator",description:"The <code>ui-comment-form</code> has a loading indicator that comes in handy for asynchronous operations",component:O,path:"".concat(N,"/comment-form-loading"),files:["comment-form-loading.component.ts","comment-form-loading.component.html"]})]},x=((c=function e(){_classCallCheck(this,e)}).\u0275mod=k.Mb({type:c}),c.\u0275inj=k.Lb({factory:function(e){return new(e||c)},imports:[[a.a,s.f.forChild([{path:"",component:u.a,data:P}])]]}),c)}}]);