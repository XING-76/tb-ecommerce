(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28557167"],{"1dde":function(t,e,n){var c=n("d039"),o=n("b622"),r=n("2d00"),a=o("species");t.exports=function(t){return r>=51||!c((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.50001f6c.png"},8418:function(t,e,n){"use strict";var c=n("a04b"),o=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var a=c(e);a in t?o.f(t,a,r(0,n)):t[a]=n}},"857a":function(t,e,n){var c=n("e330"),o=n("1d80"),r=n("577e"),a=/"/g,i=c("".replace);t.exports=function(t,e,n,c){var l=r(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+i(r(c),a,"&quot;")+'"'),s+">"+l+"</"+e+">"}},9911:function(t,e,n){"use strict";var c=n("23e7"),o=n("857a"),r=n("af03");c({target:"String",proto:!0,forced:r("link")},{link:function(t){return o(this,"a","href",t)}})},"99af":function(t,e,n){"use strict";var c=n("23e7"),o=n("da84"),r=n("d039"),a=n("e8b5"),i=n("861d"),l=n("7b0b"),s=n("07fa"),u=n("8418"),b=n("65f0"),f=n("1dde"),d=n("b622"),j=n("2d00"),O=d("isConcatSpreadable"),h=9007199254740991,p="Maximum allowed index exceeded",v=o.TypeError,m=j>=51||!r((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),g=f("concat"),k=function(t){if(!i(t))return!1;var e=t[O];return void 0!==e?!!e:a(t)},w=!m||!g;c({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,c,o,r,a=l(this),i=b(a,0),f=0;for(e=-1,c=arguments.length;e<c;e++)if(r=-1===e?a:arguments[e],k(r)){if(o=s(r),f+o>h)throw v(p);for(n=0;n<o;n++,f++)n in r&&u(i,f,r[n])}else{if(f>=h)throw v(p);u(i,f++,r)}return i.length=f,i}})},af03:function(t,e,n){var c=n("d039");t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b0c0:function(t,e,n){var c=n("83ab"),o=n("5e77").EXISTS,r=n("e330"),a=n("9bf2").f,i=Function.prototype,l=r(i.toString),s=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=r(s.exec),b="name";c&&!o&&a(i,b,{configurable:!0,get:function(){try{return u(s,l(this))[1]}catch(t){return""}}})},d504:function(t,e,n){"use strict";n.r(e);var c=n("7a23");function o(t,e,n,o,r,a){var i=Object(c["K"])("Header"),l=Object(c["K"])("router-view"),s=Object(c["K"])("GoTopButton"),u=Object(c["K"])("Footer");return Object(c["A"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(i,{qty:r.cartQty,onUpdateQty:a.updateQty},null,8,["qty","onUpdateQty"]),Object(c["k"])(l,{onUpdateQty:a.updateQty},null,8,["onUpdateQty"]),Object(c["k"])(s),Object(c["k"])(u)],64)}n("99af"),n("9911"),n("b0c0");var r=n("4ffd"),a=n.n(r),i={class:"fixed-top"},l={type:"checkbox",id:"menu-btn",ref:"menuBtn"},s={class:"container header-nav"},u={class:"col-2 text-center"},b=Object(c["h"])("img",{src:a.a},null,-1),f={class:"col-lg-8 col-md-8 header-link"},d={class:"text-center d-flex"},j={class:"col-lg-2 col-md-2 col-sm-5 col-5 header-icon"},O={class:"text-center d-flex"},h={key:0,class:"qty-notice"},p=Object(c["i"])('<li class="mobile-bar"><label class="hamburger-btn" for="menu-btn"><span class="hamburger-icon"></span><span class="hamburger-icon"></span><span class="hamburger-icon"></span></label></li>',1),v={class:"mobile-link"},m={class:"text-center mobile-text"};function g(t,e,n,o,r,a){var g=Object(c["K"])("router-link"),k=Object(c["K"])("font-awesome-icon");return Object(c["A"])(),Object(c["g"])("header",i,[Object(c["h"])("input",l,null,512),Object(c["h"])("div",s,[Object(c["h"])("div",u,[Object(c["k"])(g,{to:"/",class:"logo"},{default:Object(c["W"])((function(){return[b]})),_:1})]),Object(c["h"])("div",f,[Object(c["h"])("ul",d,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(r.navs,(function(t,e){return Object(c["A"])(),Object(c["g"])("li",{key:e},[Object(c["k"])(g,{to:t.link,onClick:Object(c["Y"])(a.closeMenu,["prevent"])},{default:Object(c["W"])((function(){return[Object(c["j"])(Object(c["N"])(t.name),1)]})),_:2},1032,["to","onClick"])])})),128))])]),Object(c["h"])("div",j,[Object(c["h"])("ul",O,[Object(c["h"])("li",null,[Object(c["k"])(g,{to:"/cart/order"},{default:Object(c["W"])((function(){return[0!=n.qty?(Object(c["A"])(),Object(c["g"])("span",h,Object(c["N"])(n.qty),1)):Object(c["f"])("",!0),Object(c["k"])(k,{icon:"shopping-cart"})]})),_:1})]),Object(c["h"])("li",null,[Object(c["h"])("a",{href:"#",onClick:e[0]||(e[0]=Object(c["Y"])((function(){}),["prevent"]))},[Object(c["k"])(k,{icon:"user"})])]),p])])]),Object(c["h"])("div",v,[Object(c["h"])("ul",m,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(r.navs,(function(t){return Object(c["A"])(),Object(c["g"])("li",{key:t.id},[Object(c["k"])(g,{to:t.link,onClick:Object(c["Y"])(a.closeMenu,["prevent"])},{default:Object(c["W"])((function(){return[Object(c["k"])(k,{icon:t.icon},null,8,["icon"]),Object(c["j"])(" "+Object(c["N"])(t.name),1)]})),_:2},1032,["to","onClick"])])})),128))])])])}var k={props:["qty"],data:function(){return{navs:[{id:"001",name:"新聞",link:"/news",icon:"newspaper"},{id:"002",name:"產品",link:"/products/all",icon:"shopping-bag"},{id:"003",name:"球隊",link:"/team/1",icon:"basketball-ball"},{id:"004",name:"關於",link:"/about",icon:"info-circle"}]}},emits:["update-qty"],methods:{closeMenu:function(){this.$refs.menuBtn.click()}},mounted:function(){this.$emit("update-qty")}},w=n("6b0d"),y=n.n(w);const x=y()(k,[["render",g]]);var A=x,q={class:"py-5"},Q={class:"container footer-content mt-3"},S={class:"row"},_={class:"footer-left col-md-9"},C=Object(c["h"])("img",{src:a.a},null,-1),K=Object(c["h"])("pre",null,"            本網站以推廣台灣籃球為理念創作\n            對於近期籃壇發展感到興奮與期待\n            期許鼓勵球迷促成籃球文化的建立\n            進而讓台灣籃球躍上國際\n          ",-1),T={class:"footer-right col-md-3"},W=Object(c["h"])("p",null,"相關連結",-1),B={class:"footer-icon"},I={href:"https://www.facebook.com/PLEAGUE.official",target:"_blank"},E={href:"https://www.instagram.com/p.league.official/?fbclid=IwAR0N6N2QygJvYA53GmHf6D9aPG4gpik4bIfUot5WNij0rWmOkJe8EiqaPBk",target:"_blank"},N=Object(c["h"])("div",{class:"container"},[Object(c["h"])("div",{class:"row"},[Object(c["h"])("div",{class:"footer-copyright"},[Object(c["h"])("p",{class:"text-center"}," © Copyright 2021 TB Inc. 本站僅供個人使用 無商業用途 ")])])],-1);function U(t,e){var n=Object(c["K"])("router-link"),o=Object(c["K"])("font-awesome-icon");return Object(c["A"])(),Object(c["g"])("footer",q,[Object(c["h"])("div",Q,[Object(c["h"])("div",S,[Object(c["h"])("div",_,[Object(c["k"])(n,{to:"/",class:"logo"},{default:Object(c["W"])((function(){return[C]})),_:1}),K]),Object(c["h"])("div",T,[W,Object(c["h"])("div",B,[Object(c["h"])("ul",null,[Object(c["h"])("li",null,[Object(c["h"])("a",I,[Object(c["k"])(o,{icon:["fab","facebook-square"]})])]),Object(c["h"])("li",null,[Object(c["h"])("a",E,[Object(c["k"])(o,{icon:["fab","instagram"]})])])])])])])]),N])}const G={},Y=y()(G,[["render",U]]);var J=Y;function M(t,e,n,o,r,a){var i=Object(c["K"])("font-awesome-icon");return Object(c["A"])(),Object(c["e"])(c["b"],{name:"fade"},{default:Object(c["W"])((function(){return[r.isShow?(Object(c["A"])(),Object(c["g"])("div",{key:0,class:"icon icon-expand",onClick:e[0]||(e[0]=function(){return a.goTop&&a.goTop.apply(a,arguments)})},[Object(c["k"])(i,{icon:"chevron-up"})])):Object(c["f"])("",!0)]})),_:1})}var F={data:function(){return{isShow:!1}},methods:{goTop:function(){window.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){window.scrollY>500?t.isShow=!0:t.isShow=!1}))}};n("e731");const H=y()(F,[["render",M],["__scopeId","data-v-69e7d5d0"]]);var L=H,P={components:{Header:A,Footer:J,GoTopButton:L},data:function(){return{cartQty:0}},methods:{updateQty:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("tb-ecommerce","/cart");this.$http.get(e).then((function(e){t.cartQty=e.data.data.carts.length}))}}};const $=y()(P,[["render",o]]);e["default"]=$},dcc3:function(t,e,n){},e731:function(t,e,n){"use strict";n("dcc3")}}]);
//# sourceMappingURL=chunk-28557167.97152402.js.map