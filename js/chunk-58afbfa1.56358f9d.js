(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58afbfa1"],{"1dde":function(t,e,r){var c=r("d039"),n=r("b622"),o=r("2d00"),s=n("species");t.exports=function(t){return o>=51||!c((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var c=r("e330"),n=r("1d80"),o=r("577e"),s=r("5899"),a=c("".replace),i="["+s+"]",u=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),b=function(t){return function(e){var r=o(n(e));return 1&t&&(r=a(r,u,"")),2&t&&(r=a(r,l,"")),r}};t.exports={start:b(1),end:b(2),trim:b(3)}},7156:function(t,e,r){var c=r("1626"),n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var s,a;return o&&c(s=e.constructor)&&s!==r&&n(a=s.prototype)&&a!==r.prototype&&o(t,a),t}},8418:function(t,e,r){"use strict";var c=r("a04b"),n=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var s=c(e);s in t?n.f(t,s,o(0,r)):t[s]=r}},"99af":function(t,e,r){"use strict";var c=r("23e7"),n=r("da84"),o=r("d039"),s=r("e8b5"),a=r("861d"),i=r("7b0b"),u=r("07fa"),l=r("8418"),b=r("65f0"),d=r("1dde"),f=r("b622"),h=r("2d00"),p=f("isConcatSpreadable"),O=9007199254740991,j="Maximum allowed index exceeded",g=n.TypeError,m=h>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=d("concat"),y=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},N=!m||!v;c({target:"Array",proto:!0,forced:N},{concat:function(t){var e,r,c,n,o,s=i(this),a=b(s,0),d=0;for(e=-1,c=arguments.length;e<c;e++)if(o=-1===e?s:arguments[e],y(o)){if(n=u(o),d+n>O)throw g(j);for(r=0;r<n;r++,d++)r in o&&l(a,d,o[r])}else{if(d>=O)throw g(j);l(a,d++,o)}return a.length=d,a}})},a866:function(t,e,r){"use strict";var c=r("7a23"),n={class:"row mb-5 cart-progress"};function o(t,e,r,o,s,a){return Object(c["A"])(),Object(c["g"])("div",n,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(s.progress,(function(t){return Object(c["A"])(),Object(c["g"])("div",{class:"col-md-3 mb-3",key:t.id},[Object(c["h"])("div",{class:Object(c["s"])(["text-center progress-text",{active:r.step===t.id}])},Object(c["N"])(t.step),3)])})),128))])}r("a9e3");var s={props:{step:{type:Number,required:!0}},data:function(){return{progress:[{id:0,step:"確認商品"},{id:1,step:"填寫資料"},{id:2,step:"完成訂購"}]}},watch:{step:function(t,e){t!==e&&this.scrollToTop()}},methods:{scrollToTop:function(){window.scrollTo(0,0)}}},a=r("6b0d"),i=r.n(a);const u=i()(s,[["render",o]]);e["a"]=u},a9e3:function(t,e,r){"use strict";var c=r("83ab"),n=r("da84"),o=r("e330"),s=r("94ca"),a=r("6eeb"),i=r("1a2d"),u=r("7156"),l=r("3a9b"),b=r("d9b5"),d=r("c04e"),f=r("d039"),h=r("241c").f,p=r("06cf").f,O=r("9bf2").f,j=r("408a"),g=r("58a8").trim,m="Number",v=n[m],y=v.prototype,N=n.TypeError,I=o("".slice),x=o("".charCodeAt),w=function(t){var e=d(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,c,n,o,s,a,i,u=d(t,"number");if(b(u))throw N("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=g(u),e=x(u,0),43===e||45===e){if(r=x(u,2),88===r||120===r)return NaN}else if(48===e){switch(x(u,1)){case 66:case 98:c=2,n=49;break;case 79:case 111:c=8,n=55;break;default:return+u}for(o=I(u,2),s=o.length,a=0;a<s;a++)if(i=x(o,a),i<48||i>n)return NaN;return parseInt(o,c)}return+u};if(s(m,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var E,T=function(t){var e=arguments.length<1?0:v(w(t)),r=this;return l(y,r)&&f((function(){j(r)}))?u(Object(e),r,T):e},k=c?h(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;k.length>S;S++)i(v,E=k[S])&&!i(T,E)&&O(T,E,p(v,E));T.prototype=y,y.constructor=T,a(n,m,T)}},b0c0:function(t,e,r){var c=r("83ab"),n=r("5e77").EXISTS,o=r("e330"),s=r("9bf2").f,a=Function.prototype,i=o(a.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=o(u.exec),b="name";c&&!n&&s(a,b,{configurable:!0,get:function(){try{return l(u,i(this))[1]}catch(t){return""}}})},ced4:function(t,e,r){"use strict";r.r(e);r("b0c0");var c=r("7a23"),n={class:"container mb-5 cart-content"},o={class:"row justify-content-center"},s={class:"check-table align-middle"},a=Object(c["h"])("thead",{class:"text-center"},[Object(c["h"])("th",null,"產品圖"),Object(c["h"])("th",null,"品名"),Object(c["h"])("th",null,"數量"),Object(c["h"])("th",null,"單價")],-1),i=["src"],u={class:"text-center"},l={class:"check-price"},b=Object(c["h"])("span",{class:"text-end"},"總計金額",-1),d={class:"text-end"},f={class:"table mb-3"},h=Object(c["h"])("th",{width:"150"},"電子信箱",-1),p=Object(c["h"])("th",null,"收件人姓名",-1),O=Object(c["h"])("th",null,"收件人電話",-1),j=Object(c["h"])("th",null,"收件人地址",-1),g=Object(c["h"])("th",null,"付款狀態",-1),m={key:0},v={key:1,class:"text-success"},y={key:0,class:"text-end pay-btn"},N=Object(c["h"])("button",null,"確認付款去",-1),I=[N];function x(t,e,r,N,x,w){var A=Object(c["K"])("CartProgressBar");return Object(c["A"])(),Object(c["g"])("div",n,[Object(c["k"])(A,{class:"",step:x.step},null,8,["step"]),Object(c["h"])("div",o,[Object(c["h"])("form",{class:"check-form",onSubmit:e[0]||(e[0]=Object(c["Y"])((function(){return w.payOrder&&w.payOrder.apply(w,arguments)}),["prevent"]))},[Object(c["h"])("table",s,[a,Object(c["h"])("tbody",null,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["I"])(x.order.products,(function(e){return Object(c["A"])(),Object(c["g"])("tr",{key:e.id},[Object(c["h"])("td",null,[Object(c["h"])("img",{src:e.product.imageUrl,alt:""},null,8,i)]),Object(c["h"])("td",null,Object(c["N"])(e.product.title),1),Object(c["h"])("td",null,Object(c["N"])(e.qty)+" "+Object(c["N"])(e.product.unit),1),Object(c["h"])("td",u,Object(c["N"])(t.$filters.currency(e.final_total)),1)])})),128))])]),Object(c["h"])("div",l,[b,Object(c["h"])("span",d,Object(c["N"])(t.$filters.currency(x.order.total))+" 元",1)]),Object(c["h"])("table",f,[Object(c["h"])("tbody",null,[Object(c["h"])("tr",null,[h,Object(c["h"])("td",null,Object(c["N"])(x.order.user.email),1)]),Object(c["h"])("tr",null,[p,Object(c["h"])("td",null,Object(c["N"])(x.order.user.name),1)]),Object(c["h"])("tr",null,[O,Object(c["h"])("td",null,Object(c["N"])(x.order.user.tel),1)]),Object(c["h"])("tr",null,[j,Object(c["h"])("td",null,Object(c["N"])(x.order.user.address),1)]),Object(c["h"])("tr",null,[g,Object(c["h"])("td",null,[x.order.is_paid?(Object(c["A"])(),Object(c["g"])("span",v,"付款完成")):(Object(c["A"])(),Object(c["g"])("span",m,"尚未付款"))])])])]),!1===x.order.is_paid?(Object(c["A"])(),Object(c["g"])("div",y,I)):Object(c["f"])("",!0)],32)])])}r("99af");var w=r("a866"),A={components:{CartProgressBar:w["a"]},data:function(){return{order:{user:{}},orderId:"",isLoading:!1,step:2}},methods:{getOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("tb-ecommerce","/order/").concat(this.orderId);this.$http.get(e).then((function(e){e.data.success&&(t.order=e.data.order)}))},payOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("tb-ecommerce","/pay/").concat(this.orderId);this.$http.post(e).then((function(e){e.data.success&&t.$swal.fire({toast:!1,position:"center",icon:"success",title:"付款成功，感謝購物",showConfirmButton:!0,showCancelButton:!1,confirmButtonText:"確認",customClass:{title:"custom-text-class"},timer:!1}).then((function(e){e.isConfirmed&&(t.getOrder(),t.$swal.fire({position:"center",icon:"info",title:"將回到首頁…",timer:2500}).then((function(){t.$router.push("/")})))}))}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder()}},E=r("6b0d"),T=r.n(E);const k=T()(A,[["render",x]]);e["default"]=k}}]);
//# sourceMappingURL=chunk-58afbfa1.56358f9d.js.map