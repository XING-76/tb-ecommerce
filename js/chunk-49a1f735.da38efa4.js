(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49a1f735"],{"1dde":function(t,e,c){var n=c("d039"),i=c("b622"),r=c("2d00"),a=i("species");t.exports=function(t){return r>=51||!n((function(){var e=[],c=e.constructor={};return c[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,c){"use strict";var n=c("a04b"),i=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var a=n(e);a in t?i.f(t,a,r(0,c)):t[a]=c}},"90b5":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),i={class:"container news-content"},r={class:"row justify-content-center mb-3 article-row"},a={class:"article-topbar"},o={class:"row justify-content-center mb-5 article-row"},s={class:"article-head"},l={class:"article-img"},u=["src"],d={class:"article-content"},b={class:"article-btn d-flex justify-content-center"},f=Object(n["j"])("返回上一頁");function h(t,e,c,h,j,O){var v=Object(n["K"])("CustomLoading"),p=Object(n["K"])("font-awesome-icon"),w=Object(n["K"])("router-link");return Object(n["A"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(v,{active:j.isLoading},null,8,["active"]),Object(n["h"])("div",i,[Object(n["h"])("div",r,[Object(n["h"])("div",a,[Object(n["h"])("span",null,Object(n["N"])(j.article.tag),1),Object(n["h"])("time",null,[Object(n["k"])(p,{icon:["fas","calendar"]}),Object(n["j"])(Object(n["N"])(t.$filters.date(j.article.create_at)),1)])])]),Object(n["h"])("div",o,[Object(n["h"])("div",s,Object(n["N"])(j.article.title),1),Object(n["h"])("div",l,[Object(n["h"])("img",{src:j.article.image},null,8,u)]),Object(n["h"])("pre",d,Object(n["N"])(j.article.content),1),Object(n["h"])("div",b,[Object(n["k"])(w,{to:"/news"},{default:Object(n["W"])((function(){return[f]})),_:1})])])])],64)}c("99af");var j={data:function(){return{isLoading:!1,article:{},id:"",content:""}},methods:{getArticle:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("tb-ecommerce","/article/").concat(this.id);this.isLoading=!0,this.$http.get(e).then((function(e){e.data.success&&(t.article=e.data.article,t.isLoading=!1)}))}},created:function(){this.id=this.$route.params.newsId,this.getArticle()}},O=c("6b0d"),v=c.n(O);const p=v()(j,[["render",h]]);e["default"]=p},"99af":function(t,e,c){"use strict";var n=c("23e7"),i=c("da84"),r=c("d039"),a=c("e8b5"),o=c("861d"),s=c("7b0b"),l=c("07fa"),u=c("8418"),d=c("65f0"),b=c("1dde"),f=c("b622"),h=c("2d00"),j=f("isConcatSpreadable"),O=9007199254740991,v="Maximum allowed index exceeded",p=i.TypeError,w=h>=51||!r((function(){var t=[];return t[j]=!1,t.concat()[0]!==t})),g=b("concat"),m=function(t){if(!o(t))return!1;var e=t[j];return void 0!==e?!!e:a(t)},k=!w||!g;n({target:"Array",proto:!0,forced:k},{concat:function(t){var e,c,n,i,r,a=s(this),o=d(a,0),b=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?a:arguments[e],m(r)){if(i=l(r),b+i>O)throw p(v);for(c=0;c<i;c++,b++)c in r&&u(o,b,r[c])}else{if(b>=O)throw p(v);u(o,b++,r)}return o.length=b,o}})}}]);
//# sourceMappingURL=chunk-49a1f735.da38efa4.js.map