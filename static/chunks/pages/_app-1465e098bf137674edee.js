_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},EoMv:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var a=n("YFqc"),o=n.n(a),i=n("q1tI"),l=n.n(i),c=n("u7Cr"),s=l.a.createElement;t.a=function(e){var t=e.label,n=e.value,a=void 0===n?"":n,i=r(e,["label","value"]),l=function(){Object(c.a)({action:"click",category:"Navigation",label:t,value:a})};return s("div",{role:"link",tabIndex:-1,onClick:function(){return l()},onKeyPress:function(){return l()}},s(o.a,i))}},JNcX:function(e,t,n){},VVBj:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("wx14"),i=r.createElement,l=function(e){return i("svg",Object(o.a)({width:"1em",height:"1em",viewBox:"0 0 32 32",fill:"none"},e),i("path",{d:"M30 18.887V28.89h-5.965v-9.356c0-2.628-1.015-3.942-3.044-3.942-1.501 0-2.536.706-3.104 2.118-.122.275-.183.745-.183 1.412v9.768h-6.026c.04-10.552.04-16.377 0-17.476h6.026v2.472l-.06.058h.06v-.059c1.299-1.922 3.105-2.883 5.418-2.883 2.07 0 3.733.667 4.991 2C29.371 14.338 30 16.299 30 18.888zM5.409 3c-1.015 0-1.837.284-2.466.853C2.314 4.422 2 5.138 2 6.001c0 .863.304 1.589.913 2.177.609.588 1.4.883 2.374.883h.06c1.015 0 1.837-.295 2.466-.883a2.863 2.863 0 00.944-2.177c-.041-.863-.366-1.579-.974-2.148C7.173 3.284 6.383 3 5.409 3zM2.304 28.89H8.33V11.414H2.304V28.89z",fill:"currentColor"}))},c=n("u7Cr"),s=a.a.createElement;t.a=function(e){var t=e.className;return s("div",{className:"flex items-center"},s("a",{"aria-label":"View my profile on Linkedin",target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/wisniewski-filip",className:"".concat(t," text-secondary hover:text-secondary-tint"),onClick:function(){return e="Linkedin",void Object(c.a)({action:"click",category:"Social Media",label:e});var e}},s(l,null)))}},YFqc:function(e,t,n){e.exports=n("cTJO")},Zsib:function(e,t,n){e.exports={tile:"MenuTile_tile__3F-Iv","text-fill":"MenuTile_text-fill__2Q2dR","text-fill-primary":"MenuTile_text-fill-primary__QX2PP","text-fill-secondary":"MenuTile_text-fill-secondary__2a-89"}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),l=n("elyg"),c=n("nOHt"),s=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],s=a[1],m=(0,c.useRouter)(),v=m&&m.pathname||"/",h=i.default.useMemo((function(){var t=(0,l.resolveHref)(v,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,l.resolveHref)(v,e.as):o||a}}),[v,e.href,e.as]),b=h.href,g=h.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,l.isLocalURL)(b)&&!f[b+"%"+g])return p(o,(function(){d(m,b,g)}))}),[t,o,b,g,m]);var y=e.children,w=e.replace,x=e.shallow,O=e.scroll,N=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var k=i.Children.only(y),j={ref:function(e){e&&s(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:c}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,b,g,w,x,O,N)}};return t&&(j.onMouseEnter=function(e){(0,l.isLocalURL)(b)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),d(m,b,g,{priority:!0}))}),(e.passHref||"a"===k.type&&!("href"in k.props))&&(j.href=(0,l.addBasePath)((0,l.addLocale)(g,"undefined"!==typeof N?N:m&&m.locale,m&&m.defaultLocale))),i.default.cloneElement(k,j)};t.default=m},cgVt:function(e,t,n){},hUgY:function(e,t,n){"use strict";n.r(t);var r=n("wx14"),a=n("q1tI"),o=n.n(a),i=(n("JNcX"),n("cgVt"),n("ZMKu")),l=n("nOHt"),c=n("VVBj"),s=n("EoMv"),u=o.a.createElement,f=function(){return u("footer",{className:"bg-dark-shade flex justify-center"},u("div",{className:"w-full max-w-screen-lg p-4 md:p-8"},u("div",{className:"flex flex-wrap w-full justify-between mb-4"},u("section",{className:"w-full sm:w-4/12 mb-8 sm:mb-0"},u("h1",{className:"text-primary font-cursive text-2xl mb-4"},"Filip Wisniewski"),u("p",null,"Thank You for visiting my website. I really appreciate that..",u("span",{role:"img","aria-label":"celebrate"},"\ud83c\udf89")," ","Have a wonderful day.."," ",u("span",{role:"img","aria-label":"unicorn"},"\ud83e\udd84")," ")),u("div",{className:"flex w-full sm:w-8/12 sm:justify-end"},u("section",null,u("h1",{className:"text-primary text-2xl mb-2"},"Links"),u("ul",null,u("li",{className:"my-2"},u(s.a,{href:"/about",label:"Footer",value:"about"},u("a",{className:"ul-hover-effect"},"About"))),u("li",{className:"my-2"},u(s.a,{href:"/works",label:"Footer",value:"works"},u("a",{className:"ul-hover-effect"},"Works"))))),u("section",{className:"ml-16 md:ml-24"},u("h1",{className:"text-primary text-2xl mb-2"},"Say Hi!"),u("div",{className:"-ml-2"},u(c.a,{className:"text-2xl md:text-3xl mx-1"})),u("h1",{className:"text-primary text-2xl mt-4"},"Email Me"),u("div",null,u("a",{className:"ul-hover-effect",href:"mailto:www.sidthesloth@gmail.com"},"wisniewski.filip03@gmail.com"))))),u("div",{className:"text-center"})))},p=n("ODXe"),d=n("psLn"),m=o.a.createElement,v=function(e){var t=e.side,n=void 0===t?150:t,r={open:{pathLength:1,transition:{duration:1,ease:[.65,0,.35,1]}},closed:{pathLength:0}};return m(i.b.svg,{width:n,height:n,viewBox:"0 0 150 150",fill:"none",xmlns:"http://www.w3.org/2000/svg",initial:"closed",variants:{open:{opacity:1},closed:{opacity:0}}},m(i.b.path,{className:"b text-secondary stroke-current",strokeWidth:Math.round(.2*n),strokeLinecap:"round",initial:"closed",variants:r,d:"M 10 10 L 10 75 Q 10 98 33 98 L 75 98 Q 97 98 98 75 Q 97 53 75 53 L 52 53"}),m(i.b.path,{className:"d text-primary stroke-current",strokeWidth:Math.round(.2*n),strokeLinecap:"round",d:"M 10 140 L 75 140 Q 140 140 140 75 Q 140 10 75 10 L 10 10",initial:"closed",variants:r}))},h=o.a.createElement,b=function(){var e={open:{opacity:1,y:0,transition:{duration:.9,ease:[.22,1,.36,1]}},closed:{opacity:0,y:"100%"}};return h(i.b.div,{className:"lg:w-1/2 h-2/5 lg:h-full flex flex-col justify-center items-center bg-dark-shade",variants:{open:{y:0,transition:{when:"beforeChildren",duration:.6,ease:[.22,1,.36,1],staggerChildren:.3}},closed:{y:"100%",transition:{duration:.5}}},initial:!1},h(i.b.div,{variants:e,initial:!1},h(v,{side:80})),h(i.b.div,{className:"font-cursive text-5xl lg:text-6xl text-primary mt-4 lg:mt-16",variants:e,initial:!1},"Filip Wisniewski"),h(i.b.div,{variants:e,initial:!1},h(c.a,{className:"text-2xl md:text-3xl m-1 lg:m-2"})))},g={open:{y:0,scale:1,transition:{duration:.8,ease:[.65,0,.35,1],when:"beforeChildren"}},closed:{y:"100%",scale:.8,transition:{duration:.5,ease:[.5,0,.75,0]}}},y={open:{},closed:{}},w={open:{transform:"rotate(45deg)"},closed:{transform:"rotate(0deg)"}},x={open:{transform:"rotate(-45deg)",width:"36px"},closed:{transform:"rotate(0deg)",width:"40px"}},O={open:{transform:"rotate(45deg)",marginLeft:"15px"},closed:{transform:"rotate(0deg)",marginLeft:"20px"}},N=n("lybZ"),k=n.n(N),j=n("rePB"),L=n("YFqc"),C=n.n(L),_=n("Zsib"),E=n.n(_),M=o.a.createElement;function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F={top:{open:{y:0},closed:{y:"100%"}},right:{open:{x:0},closed:{x:"100%"}},bottom:{open:{y:0},closed:{y:"-100%"}},left:{open:{x:0},closed:{x:"-100%"}}},U=function(e){var t=e.direction,n=e.title,r=e.subTitle,o=e.url,c=e.theme,s=e.onClick,u=void 0===s?function(){return{}}:s,f=Object(a.useMemo)((function(){return Object(d.a)(E.a)}),[]),p=Object(l.useRouter)(),m={open:T(T({opacity:1},F[t].open),{},{transition:{when:"beforeChildren",staggerChildren:.2,duration:.6,ease:[.83,0,.17,1]}}),closed:T(T({opacity:0},F[t].closed),{},{transition:{duration:.5}})},v={open:T(T({opacity:1},F[t].open),{},{transition:{duration:.9,bounce:.1,ease:[.22,1,.36,1]}}),closed:T({opacity:0},F[t].closed)};return M("div",{className:"".concat(f.tile," w-1/2 overflow-hidden")},M(i.b.div,{className:"flex h-full flex-col justify-end px-4 py-8 bg-dark-shade text-primary",variants:m,initial:"closed"},M(C.a,{href:o},M(i.b.a,{className:"".concat(f.textFill," ").concat("primary"===c?f.textFillSecondary:f.textFillPrimary," text-").concat(c," block text-3xl lg:text-5xl font-black uppercase cursor-pointer"),variants:v,initial:"closed",title:n,onClick:function(e){u(),setTimeout((function(){return p.push(o)}),300),e.preventDefault()}},n)),M(i.b.p,{className:"text-base text-".concat(c," lg:text-xl"),variants:v,initial:"closed"},r)))},B=o.a.createElement,A=function(e){var t=e.closeMenu;return B(i.b.div,{className:"lg:w-1/2 h-3/5 lg:h-full flex flex-wrap"},B(U,{direction:"bottom",title:"Works",subTitle:"Things I've done.",url:"/works",theme:"primary",onClick:t}),B(U,{direction:"left",title:"About",subTitle:"Get to know me.",url:"/about",theme:"secondary",onClick:t}))},D=o.a.createElement,I=function(){var e=Object(a.useMemo)((function(){return Object(d.a)(k.a)}),[]),t=o.a.useState(!1),n=Object(p.a)(t,2),r=n[0],l=n[1];return D(o.a.Fragment,null,D("button",{"aria-label":"Menu",className:"".concat(e.menuButton," fixed z-30"),onClick:function(){return l((function(e){return!e}))}},D(i.b.div,{className:"flex flex-col justify-around h-full",variants:y,initial:"closed",animate:r?"open":"closed"},D(i.b.div,{className:"".concat(e.menuBar," w-1/2 bg-white transform origin-left rounded-sm"),variants:w}),D(i.b.div,{className:"".concat(e.menuBar," bg-white transform center rounded-sm"),variants:x}),D(i.b.div,{className:"".concat(e.menuBar," w-1/2 bg-white transform origin-right rounded-sm"),variants:O}))),D(i.b.nav,{className:"fixed top-0 left-0 w-screen h-screen bg-dark flex flex-col lg:flex-row flex-wrap z-20 shadow-md",variants:g,initial:"closed",animate:r?"open":"closed"},D(A,{closeMenu:function(){l(!1)}}),D(b,null)))},S=o.a.createElement,V=function(){var e=Object(l.useRouter)();return S(o.a.Fragment,null,e.pathname.length>1&&S(i.b.header,{className:"fixed top-0 left-0 w-full h-20 flex justify-center z-10 bg-dark",initial:{opacity:0},animate:{opacity:1,transition:{delay:.6}}},S("div",{className:"flex w-full max-w-screen-lg h-full justify-between items-center px-8"},S(C.a,{href:"/"},S("a",{className:"font-cursive text-3xl text-primary"},"Filip Wisniewski")))))},H=n("u7Cr"),R=o.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps,c=Object(l.useRouter)();return Object(a.useEffect)((function(){var e=function(e){Object(H.b)(e)};return c.events.on("routeChangeComplete",e),function(){c.events.off("routeChangeComplete",e)}}),[c.events]),R(o.a.Fragment,null,R(V,null),R(I,null),R("div",{className:"pt-20",style:{maxWidth:"100vw",width:"100vw",overflow:"hidden"}},R(i.a,{initial:!1,exitBeforeEnter:!0},R(t,Object(r.a)({key:c.asPath},n,{one:"one"}))),c.pathname.length>1&&R(f,null)))}},lybZ:function(e,t,n){e.exports={"menu-button":"Menu_menu-button__1DSc-","menu-bar":"Menu_menu-bar__3EKVZ"}},psLn:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s}));var r=n("ODXe"),a=n("q8gk"),o=n.n(a);function i(e){var t=Object.assign({},e);return Object.keys(e).forEach((function(n){var r=n.replace(/--/g,"-");t[o()(r)]=e[n]})),t}function l(e){return(e=Math.floor(e))%2?e+1:e}function c(e){if(e){var t=new Date(e).toDateString().split(" "),n=Object(r.a)(t,4),a=(n[0],n[1]),o=n[2],i=n[3];return"".concat(o," ").concat(a,", ").concat(i)}return""}function s(e,t){var n=Math.min(e,t),r=Math.min(e,t)-n;return n+Math.floor(Math.random()*r)}},q8gk:function(e,t,n){"use strict";const r=(e,t)=>{if("string"!==typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t={pascalCase:!1,...t};if(0===(e=Array.isArray(e)?e.map(e=>e.trim()).filter(e=>e.length).join("-"):e.trim()).length)return"";if(1===e.length)return t.pascalCase?e.toLocaleUpperCase():e.toLocaleLowerCase();return e!==e.toLocaleLowerCase()&&(e=(e=>{let t=!1,n=!1,r=!1;for(let a=0;a<e.length;a++){const o=e[a];t&&/[\p{Lu}]/u.test(o)?(e=e.slice(0,a)+"-"+e.slice(a),t=!1,r=n,n=!0,a++):n&&r&&/[\p{Ll}]/u.test(o)?(e=e.slice(0,a-1)+"-"+e.slice(a-1),r=n,n=!1,t=!0):(t=o.toLocaleLowerCase()===o&&o.toLocaleUpperCase()!==o,r=n,n=o.toLocaleUpperCase()===o&&o.toLocaleLowerCase()!==o)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLocaleLowerCase().replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu,(e,t)=>t.toLocaleUpperCase()).replace(/\d+([\p{Alpha}\p{N}_]|$)/gu,e=>e.toLocaleUpperCase()),n=e,t.pascalCase?n.charAt(0).toLocaleUpperCase()+n.slice(1):n;var n};e.exports=r,e.exports.default=r},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},u7Cr:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){window.gtag("config","UA-101087503-2",{page_path:e})},a=function(e){var t=e.action,n=e.category,r=e.label,a=e.value;window.gtag("event",t,{event_category:n,event_label:r,value:a})}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}},[[0,0,1,2,3,4]]]);