(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{cAcB:function(n,t,o){"use strict";o.r(t);var e=o("8Y7J"),i=o("mrSG"),l=o("s7LF"),a=o("lJBl"),s=o("aR35");let r=(()=>{class n{}return n.brand=Object.assign({},s.a.brand,{size:"lg"}),n.footer=s.a.footer,n.loginLink={path:"/login",label:"Log in"},n.logoutLink={path:"/logout",label:"Logging out..."},n.signedOutLink={path:"/logout",label:"You are logged out."},n.registerLink={path:"/register",label:"Register"},n.forgotLink={path:"/reset-password",label:"Forgot password?"},n.loadingLink={path:"/token",label:"Loading..."},n.emailField=a.a.email("email",{label:"Email",required:!0}),n.nameField=a.a.input("name",{label:"Name",required:!0}),n.passwordField=a.a.password("password",{label:"Password",minLength:8}),n.usernameField=a.a.input("username",{label:"Username",required:!0},{focus:!0}),n.registerFields=[n.usernameField,n.nameField,n.emailField,n.passwordField],n.loginFields=[n.usernameField,n.passwordField],n})();class u{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.form=new l.j({}),this.model={username:"admin",password:"password"},this.fields=r.loginFields,this.loading=!1,this.links=[r.loginLink,r.registerLink],this.bottomLink=r.forgotLink,this.ui.setMetaData({title:"Login"})}handleAction({}){return i.a(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable(),setTimeout(()=>(this.form.enable(),this.ui.toastSuccess("You are logged in!"),this.router.navigate(["/"])),1e3)}))}}class d{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.links=[r.logoutLink],this.ui.setMetaData({title:"Logout"})}ngOnInit(){setTimeout(()=>{this.ui.toastSuccess("You are logged out!"),this.links=[r.signedOutLink],setTimeout(()=>this.router.navigate(["/login"]),750)},1e3)}}class b{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.form=new l.j({}),this.model={username:"admin",password:"password",name:"Admin",email:"admin@admin"},this.fields=r.registerFields,this.loading=!1,this.links=[r.loginLink,r.registerLink],this.bottomLink=r.forgotLink,this.ui.setMetaData({title:"Register"})}handleAction({}){return i.a(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable(),setTimeout(()=>(this.form.enable(),this.ui.toastSuccess("You are logged in!"),this.router.navigate(["/"])),1e3)}))}}class c{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.form=new l.j({}),this.fields=[r.emailField],this.loading=!1,this.links=[r.forgotLink,r.registerLink],this.bottomLink=r.loginLink,this.ui.setMetaData({title:"Reset password"})}ngOnInit(){}handleAction({}){return i.a(this,void 0,void 0,(function*(){this.form.disable(),this.loading=!0,setTimeout(()=>(this.ui.toastSuccess("Check you email please!"),this.router.navigate(["/"])),1e3)}))}}class m{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.links=[r.loadingLink],this.ui.setMetaData({title:"Login"})}ngOnInit(){this.handleAction({payload:!0})}handleAction({}){return i.a(this,void 0,void 0,(function*(){setTimeout(()=>(this.ui.toastSuccess("You are now logged in!"),this.router.navigate(["/"])),1e3)}))}}class f{}var g=o("iutN"),h=o("z5nN"),p=o("pMnS"),k=o("YImT"),L=o("1R5E"),v=o("fS5t"),C=o("XePT"),w=o("D5IU"),F=o("iInd"),y=e.qb({encapsulation:2,styles:[],data:{}});function N(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[],null,null,null,w.l,w.b)),e.rb(1,49152,null,0,a.p,[],{brand:[0,"brand"],links:[1,"links"],navigation:[2,"navigation"]},null)],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.links,!1)}),null)}function q(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,N,y)),e.rb(1,114688,null,0,d,[a.e,F.k],null,null)],(function(n,t){n(t,1,0)}),null)}var A=e.ob("ng-component",d,q,{},{},[]),S=e.qb({encapsulation:2,styles:[],data:{}});function j(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[["label","Log in"]],null,[[null,"action"]],(function(n,t,o){var e=!0;return"action"===t&&(e=!1!==n.component.handleAction(o)&&e),e}),w.l,w.b)),e.rb(1,49152,null,0,a.p,[],{brand:[0,"brand"],footer:[1,"footer"],bottomLink:[2,"bottomLink"],links:[3,"links"],label:[4,"label"],loading:[5,"loading"],form:[6,"form"],model:[7,"model"],fields:[8,"fields"],socialButtons:[9,"socialButtons"]},{action:"action"})],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.footer,o.bottomLink,o.links,"Log in",o.loading,o.form,o.model,o.fields,!0)}),null)}function B(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,j,S)),e.rb(1,49152,null,0,u,[a.e,F.k],null,null)],null,null)}var M=e.ob("ng-component",u,B,{},{},[]),T=e.qb({encapsulation:2,styles:[],data:{}});function x(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[["label","Register"]],null,[[null,"action"]],(function(n,t,o){var e=!0;return"action"===t&&(e=!1!==n.component.handleAction(o)&&e),e}),w.l,w.b)),e.rb(1,49152,null,0,a.p,[],{brand:[0,"brand"],footer:[1,"footer"],bottomLink:[2,"bottomLink"],links:[3,"links"],label:[4,"label"],loading:[5,"loading"],form:[6,"form"],model:[7,"model"],fields:[8,"fields"],socialButtons:[9,"socialButtons"]},{action:"action"})],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.footer,o.bottomLink,o.links,"Register",o.loading,o.form,o.model,o.fields,!0)}),null)}function R(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,x,T)),e.rb(1,49152,null,0,b,[a.e,F.k],null,null)],null,null)}var D=e.ob("ng-component",b,R,{},{},[]),O=e.qb({encapsulation:2,styles:[],data:{}});function I(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[["label","Reset password"]],null,[[null,"action"]],(function(n,t,o){var e=!0;return"action"===t&&(e=!1!==n.component.handleAction(o)&&e),e}),w.l,w.b)),e.rb(1,49152,null,0,a.p,[],{brand:[0,"brand"],footer:[1,"footer"],bottomLink:[2,"bottomLink"],links:[3,"links"],label:[4,"label"],loading:[5,"loading"],form:[6,"form"],fields:[7,"fields"]},{action:"action"})],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.footer,o.bottomLink,o.links,"Reset password",o.loading,o.form,o.fields)}),null)}function Y(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,I,O)),e.rb(1,114688,null,0,c,[a.e,F.k],null,null)],(function(n,t){n(t,1,0)}),null)}var z=e.ob("ng-component",c,Y,{},{},[]),E=e.qb({encapsulation:2,styles:[],data:{}});function J(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[],null,null,null,w.l,w.b)),e.rb(1,49152,null,0,a.p,[],{brand:[0,"brand"],footer:[1,"footer"],links:[2,"links"],navigation:[3,"navigation"]},null)],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.footer,o.links,!1)}),null)}function P(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,J,E)),e.rb(1,114688,null,0,m,[a.e,F.k],null,null)],(function(n,t){n(t,1,0)}),null)}var U=e.ob("ng-component",m,P,{},{},[]),X=o("SVse"),G=o("0fkH"),H=o("2uy1"),V=o("z/SZ"),Z=o("LqlI"),K=o("FE24"),Q=o("2Odn"),W=o("7nlb"),$=o("MibS"),_=o("fXz7"),nn=o("EApP");o.d(t,"AuthModuleNgFactory",(function(){return tn}));var tn=e.pb(f,[],(function(n){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[g.a,h.a,h.b,p.a,k.e,k.f,L.a,v.b,v.a,v.d,v.e,v.f,v.c,v.g,C.a,w.u,w.v,A,M,D,z,U]],[3,e.j],e.w]),e.Cb(4608,X.o,X.n,[e.t,[2,X.B]]),e.Cb(4608,l.y,l.y,[]),e.Cb(4608,l.g,l.g,[]),e.Cb(4608,G.h,G.h,[G.e,e.j,e.q]),e.Cb(4608,H.a,H.a,[e.y,e.D,e.A]),e.Cb(4608,V.a,V.a,[e.j,e.y,e.q,H.a,e.g]),e.Cb(4608,Z.b,Z.b,[e.D,V.a]),e.Cb(4608,K.f,K.f,[]),e.Cb(4608,Q.a,Q.b,[]),e.Cb(4608,Q.d,Q.c,[]),e.Cb(1073742336,X.c,X.c,[]),e.Cb(1073742336,K.e,K.e,[]),e.Cb(1073742336,Z.e,Z.e,[]),e.Cb(1073742336,F.o,F.o,[[2,F.t],[2,F.k]]),e.Cb(1073742336,l.x,l.x,[]),e.Cb(1073742336,l.l,l.l,[]),e.Cb(1073742336,l.t,l.t,[]),e.Cb(512,G.e,G.e,[]),e.Cb(1024,G.a,(function(n){return[{wrappers:[{name:"addons",component:W.b}],extensions:[{name:"addons",extension:{postPopulate:W.c}}]},{types:[{name:"input",component:$.c,wrappers:["form-field"]},{name:"checkbox",component:$.b,wrappers:["form-field"]},{name:"radio",component:$.e,wrappers:["form-field"]},{name:"select",component:$.f,wrappers:["form-field"]},{name:"textarea",component:$.g,wrappers:["form-field"]},{name:"multicheckbox",component:$.d,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:$.h}]},G.j(n),{types:[],validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:a.j},{name:"maxlength",message:a.k},{name:"min",message:a.l},{name:"max",message:a.m},{name:"email",message:a.n}],validators:[{name:"email",validation:a.o}]}]}),[G.e]),e.Cb(1073742336,G.i,G.i,[G.e,[2,G.a]]),e.Cb(1073742336,_.a,_.a,[]),e.Cb(1073742336,W.a,W.a,[]),e.Cb(1073742336,$.a,$.a,[]),e.Cb(1073742336,a.i,a.i,[]),e.Cb(1073742336,Q.e,Q.e,[]),e.Cb(1073742336,nn.i,nn.i,[]),e.Cb(1073742336,a.c,a.c,[]),e.Cb(1073742336,f,f,[]),e.Cb(1024,F.i,(function(){return[[],[{path:"",pathMatch:"full",redirectTo:"login"},{path:"logout",component:d},{path:"login",component:u},{path:"register",component:b},{path:"reset-password",component:c},{path:"token",component:m}]]}),[]),e.Cb(256,K.a,{autoClose:!0,insideClick:!1},[]),e.Cb(256,nn.b,{default:nn.a,config:{progressBar:!0,closeButton:!0,positionClass:"toast-top-right",timeOut:3e3}},[])])}))}}]);