(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{cAcB:function(n,t,o){"use strict";o.r(t);var e=o("8Y7J"),i=o("mrSG"),l=o("s7LF"),a=o("lJBl"),s=o("aR35");let r=(()=>{class n{}return n.brand=Object.assign({},s.a.brand,{size:"lg"}),n.footer=s.a.footer,n.loginLink={path:"/login",label:"Log in"},n.logoutLink={path:"/logout",label:"Logging out..."},n.signedOutLink={path:"/logout",label:"You are logged out."},n.registerLink={path:"/register",label:"Register"},n.forgotLink={path:"/reset-password",label:"Forgot password?"},n.loadingLink={path:"/token",label:"Loading..."},n.emailField=a.a.email("email",{label:"Email",required:!0}),n.nameField=a.a.input("name",{label:"Name",required:!0}),n.passwordField=a.a.password("password",{label:"Password",minLength:8}),n.usernameField=a.a.input("username",{label:"Username",required:!0},{focus:!0}),n.registerFields=[n.usernameField,n.nameField,n.emailField,n.passwordField],n.loginFields=[n.usernameField,n.passwordField],n})();class u{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.form=new l.j({}),this.model={username:"admin",password:"password"},this.fields=r.loginFields,this.loading=!1,this.links=[r.loginLink,r.registerLink],this.bottomLink=r.forgotLink,this.ui.setMetaData({title:"Login"})}handleAction({}){return i.a(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable(),setTimeout(()=>(this.form.enable(),this.ui.toastSuccess("You are logged in!"),this.router.navigate(["/"])),1e3)}))}}class d{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.links=[r.logoutLink],this.ui.setMetaData({title:"Logout"})}ngOnInit(){setTimeout(()=>{this.ui.toastSuccess("You are logged out!"),this.links=[r.signedOutLink],setTimeout(()=>this.router.navigate(["/login"]),750)},1e3)}}class b{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.form=new l.j({}),this.model={username:"admin",password:"password",name:"Admin",email:"admin@admin"},this.fields=r.registerFields,this.loading=!1,this.links=[r.loginLink,r.registerLink],this.bottomLink=r.forgotLink,this.ui.setMetaData({title:"Register"})}handleAction({}){return i.a(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable(),setTimeout(()=>(this.form.enable(),this.ui.toastSuccess("You are logged in!"),this.router.navigate(["/"])),1e3)}))}}class m{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.form=new l.j({}),this.fields=[r.emailField],this.loading=!1,this.links=[r.forgotLink,r.registerLink],this.bottomLink=r.loginLink,this.ui.setMetaData({title:"Reset password"})}ngOnInit(){}handleAction({}){return i.a(this,void 0,void 0,(function*(){this.form.disable(),this.loading=!0,setTimeout(()=>(this.ui.toastSuccess("Check you email please!"),this.router.navigate(["/"])),1e3)}))}}class c{constructor(n,t){this.ui=n,this.router=t,this.brand=r.brand,this.footer=r.footer,this.links=[r.loadingLink],this.ui.setMetaData({title:"Login"})}ngOnInit(){this.handleAction({payload:!0})}handleAction({}){return i.a(this,void 0,void 0,(function*(){setTimeout(()=>(this.ui.toastSuccess("You are now logged in!"),this.router.navigate(["/"])),1e3)}))}}class f{}var g=o("iutN"),h=o("z5nN"),p=o("pMnS"),k=o("YImT"),L=o("1R5E"),v=o("fS5t"),C=o("XePT"),w=o("D5IU"),F=o("iInd"),y=e.qb({encapsulation:2,styles:[],data:{}});function B(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[],null,null,null,w.m,w.a)),e.rb(1,49152,null,0,a.b,[],{brand:[0,"brand"],links:[1,"links"],navigation:[2,"navigation"]},null)],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.links,!1)}),null)}function N(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,B,y)),e.rb(1,114688,null,0,d,[a.B,F.k],null,null)],(function(n,t){n(t,1,0)}),null)}var q=e.ob("ng-component",d,N,{},{},[]),A=e.qb({encapsulation:2,styles:[],data:{}});function S(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[["label","Log in"]],null,[[null,"action"]],(function(n,t,o){var e=!0;return"action"===t&&(e=!1!==n.component.handleAction(o)&&e),e}),w.m,w.a)),e.rb(1,49152,null,0,a.b,[],{brand:[0,"brand"],footer:[1,"footer"],bottomLink:[2,"bottomLink"],links:[3,"links"],label:[4,"label"],loading:[5,"loading"],form:[6,"form"],model:[7,"model"],fields:[8,"fields"],socialButtons:[9,"socialButtons"]},{action:"action"})],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.footer,o.bottomLink,o.links,"Log in",o.loading,o.form,o.model,o.fields,!0)}),null)}function M(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,S,A)),e.rb(1,49152,null,0,u,[a.B,F.k],null,null)],null,null)}var T=e.ob("ng-component",u,M,{},{},[]),j=e.qb({encapsulation:2,styles:[],data:{}});function x(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[["label","Register"]],null,[[null,"action"]],(function(n,t,o){var e=!0;return"action"===t&&(e=!1!==n.component.handleAction(o)&&e),e}),w.m,w.a)),e.rb(1,49152,null,0,a.b,[],{brand:[0,"brand"],footer:[1,"footer"],bottomLink:[2,"bottomLink"],links:[3,"links"],label:[4,"label"],loading:[5,"loading"],form:[6,"form"],model:[7,"model"],fields:[8,"fields"],socialButtons:[9,"socialButtons"]},{action:"action"})],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.footer,o.bottomLink,o.links,"Register",o.loading,o.form,o.model,o.fields,!0)}),null)}function R(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,x,j)),e.rb(1,49152,null,0,b,[a.B,F.k],null,null)],null,null)}var D=e.ob("ng-component",b,R,{},{},[]),I=e.qb({encapsulation:2,styles:[],data:{}});function O(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[["label","Reset password"]],null,[[null,"action"]],(function(n,t,o){var e=!0;return"action"===t&&(e=!1!==n.component.handleAction(o)&&e),e}),w.m,w.a)),e.rb(1,49152,null,0,a.b,[],{brand:[0,"brand"],footer:[1,"footer"],bottomLink:[2,"bottomLink"],links:[3,"links"],label:[4,"label"],loading:[5,"loading"],form:[6,"form"],fields:[7,"fields"]},{action:"action"})],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.footer,o.bottomLink,o.links,"Reset password",o.loading,o.form,o.fields)}),null)}function Y(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,O,I)),e.rb(1,114688,null,0,m,[a.B,F.k],null,null)],(function(n,t){n(t,1,0)}),null)}var J=e.ob("ng-component",m,Y,{},{},[]),z=e.qb({encapsulation:2,styles:[],data:{}});function E(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ui-auth",[],null,null,null,w.m,w.a)),e.rb(1,49152,null,0,a.b,[],{brand:[0,"brand"],footer:[1,"footer"],links:[2,"links"],navigation:[3,"navigation"]},null)],(function(n,t){var o=t.component;n(t,1,0,o.brand,o.footer,o.links,!1)}),null)}function P(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"ng-component",[],null,null,null,E,z)),e.rb(1,114688,null,0,c,[a.B,F.k],null,null)],(function(n,t){n(t,1,0)}),null)}var G=e.ob("ng-component",c,P,{},{},[]),H=o("SVse"),U=o("0fkH"),X=o("2uy1"),K=o("z/SZ"),V=o("LqlI"),Z=o("FE24"),Q=o("2Odn"),W=o("7nlb"),$=o("MibS"),_=o("fXz7"),nn=o("EApP");o.d(t,"AuthModuleNgFactory",(function(){return tn}));var tn=e.pb(f,[],(function(n){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[g.a,h.a,h.b,p.a,k.e,k.f,L.a,v.b,v.a,v.d,v.e,v.f,v.c,v.g,C.a,w.k,w.l,q,T,D,J,G]],[3,e.j],e.w]),e.Cb(4608,H.o,H.n,[e.t,[2,H.B]]),e.Cb(4608,l.y,l.y,[]),e.Cb(4608,l.g,l.g,[]),e.Cb(4608,U.h,U.h,[U.e,e.j,e.q]),e.Cb(4608,X.a,X.a,[e.y,e.D,e.A]),e.Cb(4608,K.a,K.a,[e.j,e.y,e.q,X.a,e.g]),e.Cb(4608,V.b,V.b,[e.D,K.a]),e.Cb(4608,Z.f,Z.f,[]),e.Cb(4608,Q.a,Q.b,[]),e.Cb(4608,Q.d,Q.c,[]),e.Cb(1073742336,H.c,H.c,[]),e.Cb(1073742336,Z.e,Z.e,[]),e.Cb(1073742336,V.e,V.e,[]),e.Cb(1073742336,F.o,F.o,[[2,F.t],[2,F.k]]),e.Cb(1073742336,l.x,l.x,[]),e.Cb(1073742336,l.l,l.l,[]),e.Cb(1073742336,l.t,l.t,[]),e.Cb(512,U.e,U.e,[]),e.Cb(1024,U.a,(function(n){return[{wrappers:[{name:"addons",component:W.b}],extensions:[{name:"addons",extension:{postPopulate:W.c}}]},{types:[{name:"input",component:$.c,wrappers:["form-field"]},{name:"checkbox",component:$.b,wrappers:["form-field"]},{name:"radio",component:$.e,wrappers:["form-field"]},{name:"select",component:$.f,wrappers:["form-field"]},{name:"textarea",component:$.g,wrappers:["form-field"]},{name:"multicheckbox",component:$.d,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:$.h}]},U.j(n),{types:[],validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:a.G},{name:"maxlength",message:a.H},{name:"min",message:a.I},{name:"max",message:a.J},{name:"email",message:a.K}],validators:[{name:"email",validation:a.L}]}]}),[U.e]),e.Cb(1073742336,U.i,U.i,[U.e,[2,U.a]]),e.Cb(1073742336,_.a,_.a,[]),e.Cb(1073742336,W.a,W.a,[]),e.Cb(1073742336,$.a,$.a,[]),e.Cb(1073742336,a.p,a.p,[]),e.Cb(1073742336,Q.e,Q.e,[]),e.Cb(1073742336,nn.i,nn.i,[]),e.Cb(1073742336,a.y,a.y,[]),e.Cb(1073742336,f,f,[]),e.Cb(1024,F.i,(function(){return[[],[{path:"",pathMatch:"full",redirectTo:"login"},{path:"logout",component:d},{path:"login",component:u},{path:"register",component:b},{path:"reset-password",component:m},{path:"token",component:c}]]}),[]),e.Cb(256,Z.a,{autoClose:!0,insideClick:!1},[]),e.Cb(256,nn.b,{default:nn.a,config:{progressBar:!0,closeButton:!0,positionClass:"toast-top-right",timeOut:3e3}},[])])}))}}]);