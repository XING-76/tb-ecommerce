(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7315d102"],{"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),s=n("2d00"),a=o("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2de3":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o={class:"container mt-5"},s={class:"col-md-6"},a=Object(r["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),c={class:"mb-2"},i=Object(r["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),u={class:"mb-2"},d=Object(r["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),l=Object(r["h"])("div",{class:"text-end mt-4"},[Object(r["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1);function f(t,e,n,f,b,p){return Object(r["A"])(),Object(r["g"])("div",o,[Object(r["h"])("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=Object(r["Y"])((function(){return p.signIn&&p.signIn.apply(p,arguments)}),["prevent"]))},[Object(r["h"])("div",s,[a,Object(r["h"])("div",c,[i,Object(r["X"])(Object(r["h"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=function(t){return b.user.username=t})},null,512),[[r["R"],b.user.username]])]),Object(r["h"])("div",u,[d,Object(r["X"])(Object(r["h"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return b.user.password=t})},null,512),[[r["R"],b.user.password]])]),l])],32)])}n("99af");var b={data:function(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(e,this.user).then((function(e){if(e.data.success){var n=e.data,r=n.token,o=n.expired;document.cookie="hexToken=".concat(r,"; expired=").concat(new Date(o)),t.$router.push("/dashboard/products")}}))}}},p=n("6b0d"),h=n.n(p);const m=h()(b,[["render",f]]);e["default"]=m},8418:function(t,e,n){"use strict";var r=n("a04b"),o=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,s(0,n)):t[a]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),s=n("d039"),a=n("e8b5"),c=n("861d"),i=n("7b0b"),u=n("07fa"),d=n("8418"),l=n("65f0"),f=n("1dde"),b=n("b622"),p=n("2d00"),h=b("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",w=o.TypeError,j=p>=51||!s((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),O=f("concat"),g=function(t){if(!c(t))return!1;var e=t[h];return void 0!==e?!!e:a(t)},x=!j||!O;r({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,r,o,s,a=i(this),c=l(a,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?a:arguments[e],g(s)){if(o=u(s),f+o>m)throw w(v);for(n=0;n<o;n++,f++)n in s&&d(c,f,s[n])}else{if(f>=m)throw w(v);d(c,f++,s)}return c.length=f,c}})}}]);
//# sourceMappingURL=chunk-7315d102.ecbadab2.js.map