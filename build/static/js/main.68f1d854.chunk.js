(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{15:function(e,t,c){"use strict";var a=c(11),n=c.n(a),r=c(20),s=c(3),i=c(1);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],l=Object(i.useState)(null),o=Object(s.a)(l,2),j=o[0],u=o[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(r.a)(n.a.mark((function e(t){var c,r,s,i,l,o=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o.length>1&&void 0!==o[1]?o[1]:"GET",r=o.length>2&&void 0!==o[2]?o[2]:null,s=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:r,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return l=e.sent,a(!1),e.abrupt("return",l);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),u(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:j,clearError:Object(i.useCallback)((function(){return u(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,l=e.clearError,o="https://gateway.marvel.com:443/v1/public/",j="apikey=c5d6fc8b83116d92ed468ce36bac6c62",u=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:210,e.next=3,c("".concat(o,"characters?limit=9&offset=").concat(t,"&").concat(j));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(o,"characters?name=").concat(t,"&").concat(j));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(o,"characters/").concat(t,"?").concat(j));case 2:return a=e.sent,e.abrupt("return",O(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(n.a.mark((function e(){var t,a,r=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,c("".concat(o,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(j));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(o,"comics/").concat(t,"?").concat(j));case 2:return a=e.sent,e.abrupt("return",f(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},f=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:a,clearError:l,getAllCharacters:u,getCharacter:m,getAllComics:d,getComics:h,getCharacterByName:b}}},17:function(e,t,c){"use strict";var a=c(0);t.a=function(){return Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(a.jsx)("g",{transform:"translate(80,50)",children:Object(a.jsx)("g",{transform:"rotate(0)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(a.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(a.jsx)("g",{transform:"rotate(45)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(a.jsx)("g",{transform:"translate(50,80)",children:Object(a.jsx)("g",{transform:"rotate(90)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(a.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(a.jsx)("g",{transform:"rotate(135)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(a.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(a.jsx)("g",{transform:"rotate(180)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(a.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(a.jsx)("g",{transform:"rotate(225)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(a.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(a.jsx)("g",{transform:"rotate(270)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(a.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(a.jsx)("g",{transform:"rotate(315)",children:Object(a.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(a.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(a.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})}},35:function(e,t,c){"use strict";c(58);var a=c.p+"static/media/Avengers.4065c8f9.png",n=c.p+"static/media/Avengers_logo.9eaf2193.png",r=c(0);t.a=function(){return Object(r.jsxs)("div",{className:"app__banner",children:[Object(r.jsx)("img",{src:a,alt:"Avengers"}),Object(r.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(r.jsx)("br",{}),"Stay tuned!"]}),Object(r.jsx)("img",{src:n,alt:"Avengers logo"})]})}},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(36),s=c.n(r),i=c(10),l=c(2),o=c(3),j=c(17),u=c(8),b=c(15),m=(c(50),c.p+"static/media/mjolnir.61f31e18.png"),d=c(0),h=function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"contain"}),Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:i}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:c}),Object(d.jsx)("p",{className:"randomchar__descr",children:a}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:r,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},O=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(b.a)(),s=r.loading,i=r.error,l=r.getCharacter,O=r.clearError;Object(a.useEffect)((function(){x();var e=setInterval(x,6e4);return function(){clearInterval(e)}}),[]);var f=function(e){n(e)},x=function(){O();var e=Math.floor(400*Math.random())+1011e3;l(e).then(f)},p=i?Object(d.jsx)(u.a,{}):null,v=s?Object(d.jsx)(j.a,{}):null,g=s||i||!c?null:Object(d.jsx)(h,{char:c});return Object(d.jsxs)("div",{className:"randomchar",children:[p,v,g,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{onClick:x,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:m,alt:"mjolnir",className:"randomchar__decoration"})]})]})},f=c(6),x=(c(51),function(e){var t=Object(a.useState)([]),c=Object(o.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),l=i[0],m=i[1],h=Object(a.useState)(210),O=Object(o.a)(h,2),x=O[0],p=O[1],v=Object(a.useState)(!1),g=Object(o.a)(v,2),_=g[0],N=g[1],y=Object(b.a)(),k=y.loading,C=y.error,w=y.getAllCharacters;Object(a.useEffect)((function(){T(x,!0)}),[]);var T=function(e,t){m(!t),w(e).then(S)},S=function(e){var t=!1;e.length<9&&(t=!0),r((function(t){return[].concat(Object(f.a)(t),Object(f.a)(e))})),m((function(e){return!1})),p((function(e){return e+9})),N((function(e){return t}))},E=Object(a.useRef)([]);var F=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(d.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return E.current[c]=e},onClick:function(){var a;e.onCharSelected(t.id),a=c,E.current.forEach((function(e){return e.classList.remove("char__item_selected")})),E.current[a].classList.add("char__item_selected"),E.current[a].focus()},children:[Object(d.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(d.jsx)("div",{className:"char__name",children:t.name})]},c)}));return Object(d.jsx)("ul",{className:"char__grid",children:c})}(n),A=C?Object(d.jsx)(u.a,{}):null,I=k&&!l?Object(d.jsx)(j.a,{}):null;return Object(d.jsxs)("div",{className:"char__list",children:[A,I,F,Object(d.jsx)("button",{className:"button button__main button__long",disabled:l,style:{display:_?"none":"block"},onClick:function(){return T(x)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}),p=(c(52),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),v=(c(53),function(e){var t=e.char,c=t.name,a=t.description,n=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(l={objectFit:"contain"}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:n,alt:c,style:l}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:c}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:s,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"Homepage"})}),Object(d.jsx)("a",{href:r,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:a}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,t){if(!(t>10))return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})}),g=function(e){var t=Object(a.useState)(null),c=Object(o.a)(t,2),n=c[0],r=c[1],s=Object(b.a)(),i=s.loading,l=s.error,m=s.getCharacter;Object(a.useEffect)((function(){h()}),[e.charId]);var h=function(){var t=e.charId;t&&m(t).then(O)},O=function(e){r(e)},f=n||i||l?null:Object(d.jsx)(p,{}),x=l?Object(d.jsx)(u.a,{}):null,g=i?Object(d.jsx)(j.a,{}):null,_=i||l||!n?null:Object(d.jsx)(v,{char:n});return Object(d.jsxs)("div",{className:"char__info",children:[f,x,g,_]})},_=c(25),N=c(34),y=(c(56),function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(b.a)(),s=r.loading,l=r.error,j=r.getCharacterByName,m=r.clearError,h=function(e){n(e)},O=l?Object(d.jsx)("div",{className:"char__search-critical-error",children:Object(d.jsx)(u.a,{})}):null,f=c?c.length>0?Object(d.jsxs)("div",{className:"char__search-wrapper",children:[Object(d.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(d.jsx)(i.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"To page"})})]}):Object(d.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(d.jsxs)("div",{className:"char__search-form",children:[Object(d.jsx)(_.d,{initialValues:{charName:""},validationSchema:N.a({charName:N.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,m(),j(t).then(h)},children:Object(d.jsxs)(_.c,{children:[Object(d.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(d.jsxs)("div",{className:"char__search-wrapper",children:[Object(d.jsx)(_.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(d.jsx)("button",{type:"submit",className:"button button__main",disabled:s,children:Object(d.jsx)("div",{className:"inner",children:"find"})})]}),Object(d.jsx)(_.a,{component:"div",className:"char__search-error",name:"charName"})]})}),f,O]})}),k=c(7),C=c(9),w=c(13),T=c(14),S=function(e){Object(w.a)(c,e);var t=Object(T.a)(c);function c(){var e;Object(k.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(C.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)(u.a,{}):this.props.children}}]),c}(a.Component),E=c.p+"static/media/vision.067d4ae1.png",F=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{children:Object(d.jsx)(O,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(S,{children:Object(d.jsx)(x,{onCharSelected:function(e){n(e)}})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{children:Object(d.jsx)(g,{charId:c})}),Object(d.jsx)(S,{children:Object(d.jsx)(y,{})})]})]}),Object(d.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})},A=(c(57),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(o.a)(r,2),l=s[0],m=s[1],h=Object(a.useState)(0),O=Object(o.a)(h,2),x=O[0],p=O[1],v=Object(a.useState)(!1),g=Object(o.a)(v,2),_=g[0],N=g[1],y=Object(b.a)(),k=y.loading,C=y.error,w=y.getAllComics;Object(a.useEffect)((function(){T(x,!0)}),[]);var T=function(e,t){m(!t),w(e).then(S)},S=function(e){var t=!1;e.length<8&&(t=!0),n([].concat(Object(f.a)(c),Object(f.a)(e))),m(!1),p(x+8),N(t)};var E=function(e){var t=e.map((function(e,t){return Object(d.jsx)("li",{className:"comics__item",children:Object(d.jsxs)(i.b,{to:"/comics/".concat(e.id),children:[Object(d.jsx)("img",{src:e.thumbnail,alt:e.title,className:"comics__item-img"}),Object(d.jsx)("div",{className:"comics__item-name",children:e.title}),Object(d.jsx)("div",{className:"comics__item-price",children:e.price})]})},t)}));return Object(d.jsx)("ul",{className:"comics__grid",children:t})}(c),F=C?Object(d.jsx)(u.a,{}):null,A=k&&!l?Object(d.jsx)(j.a,{}):null;return Object(d.jsxs)("div",{className:"comics__list",children:[F,A,E,Object(d.jsx)("button",{disabled:l,style:{display:_?"none":"block"},className:"button button__main button__long",onClick:function(){return T(x)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}),I=c(35),B=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(I.a,{}),Object(d.jsx)(A,{})]})},M=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(u.a,{}),Object(d.jsx)("p",{style:{"text-align":"center","font-size":"24px","font-weigth":"bold"},children:"Page is not exist"}),Object(d.jsx)(i.b,{style:{color:"#9f0013",display:"block","text-align":"center","margin-top":"20px","font-size":"24px"},to:"/",children:" Back To Home Page"})]})},z=(c(59),function(e){var t=e.comic,c=t.title,a=t.description,n=t.pageCount,r=t.thumbnail,s=t.language,l=t.price;return Object(d.jsxs)("div",{className:"single-comic",children:[Object(d.jsx)("img",{src:r,alt:"title",className:"single-comic__img"}),Object(d.jsxs)("div",{className:"single-comic__info",children:[Object(d.jsx)("h2",{className:"single-comic__name",children:c}),Object(d.jsx)("p",{className:"single-comic__descr",children:a}),Object(d.jsx)("p",{className:"single-comic__descr",children:n}),Object(d.jsxs)("p",{className:"single-comic__descr",children:["Language: ",s]}),Object(d.jsx)("div",{className:"single-comic__price",children:l})]}),Object(d.jsx)(i.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})}),R=function(){var e=Object(l.g)().comicId,t=Object(a.useState)(null),c=Object(o.a)(t,2),n=c[0],r=c[1],s=Object(b.a)(),i=s.loading,m=s.error,h=s.getComics,O=s.clearError;Object(a.useEffect)((function(){f()}),[e]);var f=function(){O(),h(e).then(x)},x=function(e){r(e)},p=m?Object(d.jsx)(u.a,{}):null,v=i?Object(d.jsx)(j.a,{}):null,g=i||m||!n?null:Object(d.jsx)(z,{comic:n});return Object(d.jsxs)(d.Fragment,{children:[p,v,g]})},q=(c(60),function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)(i.b,{to:"/",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{style:function(e){return{color:e.isActive?"#9f0013":"inherit"}},to:"/",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)(i.c,{style:function(e){return{color:e.isActive?"#9f0013":"inherit"}},to:"/comics",children:"Comics"})})]})})]})}),L=Object(a.lazy)((function(){return c.e(4).then(c.bind(null,65))})),P=Object(a.lazy)((function(){return c.e(3).then(c.bind(null,66))})),D=Object(a.lazy)((function(){return c.e(5).then(c.bind(null,67))})),H=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(q,{}),Object(d.jsx)("main",{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(F,{})}),Object(d.jsx)(l.a,{path:"/comics",element:Object(d.jsx)(B,{})}),Object(d.jsx)(l.a,{path:"/comics/:comicId",element:Object(d.jsx)(R,{})}),Object(d.jsx)(l.a,{path:"*",element:Object(d.jsx)(M,{})}),Object(d.jsx)(l.a,{path:"/comics/:id",element:Object(d.jsx)(D,{Component:L,dataType:"comic"})}),Object(d.jsx)(l.a,{path:"/characters/:id",element:Object(d.jsx)(D,{Component:P,dataType:"character"})})]})})]})})};c(61);s.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(H,{})}))},8:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",n=c(0);t.a=function(){return Object(n.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})}}},[[62,1,2]]]);
//# sourceMappingURL=main.68f1d854.chunk.js.map