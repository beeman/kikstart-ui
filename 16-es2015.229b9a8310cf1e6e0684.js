(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Mkfp:function(n,e,t){"use strict";t.r(e);var o=t("8Y7J");class l{constructor(){this.label="Default Click Text",this.buttonClass="info",this.action=new o.m}}class a{constructor(n){this.ui=n,this.component=l,this.inputs={label:"Click Me",buttonClass:"success"},this.outputs={action:n=>this.handleAction(n)}}handleAction(n){this.ui.toastSuccess(JSON.stringify(n))}}const s={title:"ui-render demos",demos:[t("+mFx").a.config({title:"Render component",description:"The <code>ui-render</code> component can be used to dynamically render components and wire up their inputs and outputs.",component:a,path:"demos/ui-render",files:["render-demo.component.ts","render-simple.component.ts"]})]};class i{}var u=t("iutN"),c=t("z5nN"),b=t("YImT"),r=t("1R5E"),p=t("fS5t"),m=t("pMnS"),d=t("XePT"),C=t("D5IU"),f=t("8bhk"),h=t("lJBl"),g=o.qb({encapsulation:2,styles:[],data:{}});function w(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,1,"ui-render",[],null,null,null,C.G,C.m)),o.rb(1,4374528,null,0,h.F,[o.j],{component:[0,"component"],inputs:[1,"inputs"],outputs:[2,"outputs"]},null)],(function(n,e){var t=e.component;n(e,1,0,t.component,t.inputs,t.outputs)}),null)}function k(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,1,"ng-component",[],null,null,null,w,g)),o.rb(1,49152,null,0,a,[h.G],null,null)],null,null)}var y=o.ob("ng-component",a,k,{},{},[]),x=o.qb({encapsulation:2,styles:[],data:{}});function v(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,1,"button",[],[[8,"className",0]],[[null,"click"]],(function(n,e,t){var o=!0;return"click"===e&&(o=!1!==n.component.action.emit({type:"click"})&&o),o}),null,null)),(n()(),o.Mb(1,null,[" "," "]))],null,(function(n,e){var t=e.component;n(e,0,0,o.wb(1,"btn btn-",t.buttonClass,"")),n(e,1,0,t.label)}))}function q(n){return o.Ob(0,[(n()(),o.sb(0,0,null,null,1,"ng-component",[],null,null,null,v,x)),o.rb(1,49152,null,0,l,[],null,null)],null,null)}var S=o.ob("ng-component",l,q,{label:"label",buttonClass:"buttonClass"},{action:"action"},[]),M=t("SVse"),O=t("s7LF"),T=t("0fkH"),j=t("2uy1"),R=t("z/SZ"),A=t("LqlI"),B=t("FE24"),D=t("ZcxY"),E=t("IheW"),F=t("cUpR"),I=t("2Odn"),J=t("2ZVE"),N=t("apcT"),P=t("7nlb"),U=t("MibS"),z=t("fXz7"),Y=t("iInd"),Z=t("EApP"),G=t("qoxR"),L=t("+ksE");t.d(e,"UiRenderDemoModuleNgFactory",(function(){return V}));var V=o.pb(i,[],(function(n){return o.Bb([o.Cb(512,o.j,o.ab,[[8,[u.a,c.a,c.b,b.e,b.f,r.a,p.b,p.a,p.d,p.e,p.f,p.c,p.g,m.a,d.a,C.r,C.s,f.a,y,S]],[3,o.j],o.w]),o.Cb(4608,M.o,M.n,[o.t,[2,M.B]]),o.Cb(4608,O.y,O.y,[]),o.Cb(4608,O.g,O.g,[]),o.Cb(4608,T.h,T.h,[T.e,o.j,o.q]),o.Cb(4608,j.a,j.a,[o.y,o.D,o.A]),o.Cb(4608,R.a,R.a,[o.j,o.y,o.q,j.a,o.g]),o.Cb(4608,A.b,A.b,[o.D,R.a]),o.Cb(4608,B.f,B.f,[]),o.Cb(4608,D.c,D.c,[o.A,[2,E.a],F.b,D.d]),o.Cb(4608,I.a,I.b,[]),o.Cb(4608,I.d,I.c,[]),o.Cb(4608,J.e,J.e,[]),o.Cb(1073742336,M.c,M.c,[]),o.Cb(1073742336,B.e,B.e,[]),o.Cb(1073742336,A.e,A.e,[]),o.Cb(1073742336,N.b,N.b,[]),o.Cb(1073742336,O.x,O.x,[]),o.Cb(1073742336,O.l,O.l,[]),o.Cb(1073742336,O.t,O.t,[]),o.Cb(512,T.e,T.e,[]),o.Cb(1024,T.a,(function(n){return[{wrappers:[{name:"addons",component:P.b}],extensions:[{name:"addons",extension:{postPopulate:P.c}}]},{types:[{name:"input",component:U.c,wrappers:["form-field"]},{name:"checkbox",component:U.b,wrappers:["form-field"]},{name:"radio",component:U.e,wrappers:["form-field"]},{name:"select",component:U.f,wrappers:["form-field"]},{name:"textarea",component:U.g,wrappers:["form-field"]},{name:"multicheckbox",component:U.d,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:U.h}]},T.j(n),{types:[],validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:h.P},{name:"maxlength",message:h.Q},{name:"min",message:h.R},{name:"max",message:h.S},{name:"email",message:h.T}],validators:[{name:"email",validation:h.U}]}]}),[T.e]),o.Cb(1073742336,T.i,T.i,[T.e,[2,T.a]]),o.Cb(1073742336,z.a,z.a,[]),o.Cb(1073742336,P.a,P.a,[]),o.Cb(1073742336,U.a,U.a,[]),o.Cb(1073742336,h.t,h.t,[]),o.Cb(1073742336,Y.o,Y.o,[[2,Y.t],[2,Y.k]]),o.Cb(1073742336,D.b,D.b,[]),o.Cb(1073742336,I.f,I.f,[]),o.Cb(1073742336,Z.i,Z.i,[]),o.Cb(1073742336,h.C,h.C,[]),o.Cb(1073742336,J.c,J.c,[]),o.Cb(1073742336,G.a,G.a,[]),o.Cb(1073742336,i,i,[]),o.Cb(1024,Y.i,(function(){return[[],[{path:"",component:L.a,data:s}]]}),[]),o.Cb(256,B.a,{autoClose:!0,insideClick:!1},[]),o.Cb(256,D.d,{gfm:!0,tables:!0},[]),o.Cb(256,Z.b,{default:Z.a,config:{progressBar:!0,closeButton:!0,positionClass:"toast-top-right",timeOut:3e3}},[])])}))}}]);