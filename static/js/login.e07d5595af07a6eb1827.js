webpackJsonp([0],{"/UF9":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my-login hero is-fullheight is-primary"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-one-third"},[a("img",{staticClass:"my-login__logo",attrs:{src:e("zxL1"),alt:"Vue Example Project"}}),a("div",{staticClass:"is-clearfix"}),a("div",{staticClass:"my-subtitle",staticStyle:{"padding-top":"15px","padding-bottom":"15px"}},[t._v("Sign in for more sweetness.")]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[t._m(0),a("b-field",{attrs:{label:"Email"}},[a("b-input",{attrs:{type:"email",value:"demo@email.com",icon:"email"},nativeOn:{click:function(s){t.logout()}}})],1),a("b-field",{attrs:{label:"Password"}},[a("b-input",{attrs:{type:"password",value:"demo",icon:"vpn_key","password-reveal":"password-reveal"}})],1),a("a",{staticClass:"button is-secondary is-fullwidth",class:{"is-loading":t.isLoading},on:{click:t.submit}},[t._v("Sign In")])],1)])])])])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h1",{staticClass:"title has-text-dark has-text-centered"},[a("img",{staticClass:"my-avatar",attrs:{src:e("+rrE"),alt:"Avatar"}})])}],n={render:a,staticRenderFns:i};s.a=n},Eqmo:function(t,s,e){var a=e("S5zd");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("14f1862a",a,!0)},S5zd:function(t,s,e){s=t.exports=e("FZ+f")(!0),s.push([t.i,"#app .my-login__logo{width:260px}","",{version:3,sources:["/home/david/projects/code/vue-example-project/src/components/login/login-page.vue"],names:[],mappings:"AACA,qBACE,WAAa,CACd",file:"login-page.vue",sourcesContent:["\n#app .my-login__logo {\n  width: 260px;\n}"],sourceRoot:""}])},eKsb:function(t,s,e){"use strict";var a=e("TIfe");s.a={name:"login",data:function(){return{credentials:{username:"",password:""},error:"",isLoading:!1}},methods:{logout:function(){a.a.logout()},submit:function(){var t=this;this.isLoading=!0;var s={username:this.credentials.username,password:this.credentials.password};a.a.login(s,"dashboard").then(function(s){setTimeout(function(){a.a._storeToken({body:{data:{accessToken:"123456789",refreshToken:"77777777"}}}),t.$router.push({name:"dashboard"}),t.isLoading=!1},1e3)})}}}},"kP/M":function(t,s,e){"use strict";function a(t){e("Eqmo")}Object.defineProperty(s,"__esModule",{value:!0});var i=e("eKsb"),n=e("/UF9"),o=e("VU/8"),r=a,l=o(i.a,n.a,r,null,null);s.default=l.exports}});
//# sourceMappingURL=login.e07d5595af07a6eb1827.js.map