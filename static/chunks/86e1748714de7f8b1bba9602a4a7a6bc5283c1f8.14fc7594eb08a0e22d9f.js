(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"4slw":function(t,e,i){"use strict";i.d(e,"b",(function(){return d})),i.d(e,"a",(function(){return l})),i.d(e,"c",(function(){return v}));var n=i("q1tI"),a=i("psLn");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}var c=i("rePB"),u=function(){function t(e,i){o(this,t),Object(c.a)(this,"x",void 0),Object(c.a)(this,"y",void 0),Object(c.a)(this,"angle",void 0),Object(c.a)(this,"length",void 0),this._compute(e,i)}return r(t,[{key:"_compute",value:function(t,e){this.x=t,this.y=e,this.angle=Math.atan2(e,t),this.length=Math.sqrt(t*t+e*e)}},{key:"setAngle",value:function(t){this.angle=t,this.x=Math.cos(this.angle)*this.length,this.y=Math.sin(this.angle)*this.length}},{key:"setLength",value:function(t){this.length=t,this.x=Math.cos(this.angle)*this.length,this.y=Math.sin(this.angle)*this.length}},{key:"add",value:function(t){this._compute(this.x+t.x,this.y+t.y)}},{key:"subtract",value:function(t){this._compute(this.x-t.x,this.y-t.y)}},{key:"multiply",value:function(t){this._compute(this.x*t,this.y*t)}},{key:"divide",value:function(t){this._compute(this.x/t,this.y/t)}}],[{key:"add",value:function(e,i){return new t(e.x+i.x,e.y+i.y)}},{key:"subtract",value:function(e,i){return new t(e.x-i.x,e.y-i.y)}},{key:"multiply",value:function(e,i){return new t(e.x*i,e.y*i)}}]),t}(),h=function(){function t(e){var i=e.radius,n=e.position,a=e.velocity,s=void 0===a?new u(0,0):a,r=e.gravity,h=void 0===r?0:r,d=e.mass,l=void 0===d?1:d,v=e.friction,f=void 0===v?.99:v,p=e.update,g=void 0===p||p;o(this,t),Object(c.a)(this,"radius",void 0),Object(c.a)(this,"position",void 0),Object(c.a)(this,"velocity",void 0),Object(c.a)(this,"mass",void 0),Object(c.a)(this,"gravity",void 0),Object(c.a)(this,"friction",void 0),Object(c.a)(this,"update",void 0),this.radius=i,this.position=n,this.velocity=s,this.mass=l,this.gravity=new u(0,h),this.friction=f,this.update=g}return r(t,[{key:"accelerate",value:function(t){this.update&&this.velocity.add(t)}},{key:"addFriction",value:function(){this.update&&this.velocity.multiply(this.friction)}},{key:"angleTo",value:function(t){return Math.atan2(t.position.y-this.position.y,t.position.x-this.position.x)}},{key:"distanceTo",value:function(t){var e=t.position.x-this.position.x,i=t.position.y-this.position.y;return Math.sqrt(e*e+i*i)}},{key:"gravitateTo",value:function(t){if(this.update){var e=new u(0,0),i=this.distanceTo(t);e.setLength(t.mass/(i*i)),e.setAngle(this.angleTo(t)),this.velocity.add(e)}}},{key:"updatePosition",value:function(){this.update&&(this.velocity.add(this.gravity),this.position.add(this.velocity))}},{key:"render",value:function(t){t.beginPath(),t.arc(this.position.x,this.position.y,this.radius,0,2*Math.PI,!1),t.fill()}},{key:"screenWrap",value:function(t,e){if(this.update){var i=this.position,n=i.x,a=i.y;n+this.radius<0&&(this.position.x=t+this.radius),n-this.radius>t&&(this.position.x=0-this.radius),a+this.radius<0&&(this.position.y=e+this.radius),a-this.radius>e&&(this.position.y=0-this.radius)}}},{key:"bounceOfEdges",value:function(t,e){this.update&&(this.position.x-this.radius<0&&(this.position.x=this.radius,this.velocity.x*=-1),this.position.x+this.radius>t&&(this.position.x=t-this.radius,this.velocity.x*=-1),this.position.y-this.radius<0&&(this.position.y=this.radius,this.velocity.y*=-1),this.position.y+this.radius>e&&(this.position.y=e-this.radius,this.velocity.y*=-1))}}]),t}();function d(){Object(n.useEffect)((function(){var t,e=1,i=200,n="#eefac9",a=100,o=100,s=0,r=0,c=[],d=[],l=document.getElementById("landing-canvas"),v=l.getContext("2d");l.addEventListener("mousedown",y,{passive:!0}),l.addEventListener("mousemove",m,{passive:!0}),l.addEventListener("mouseup",w,{passive:!0}),l.addEventListener("touchstart",y,{passive:!0}),l.addEventListener("touchmove",m,{passive:!0}),l.addEventListener("touchend",w,{passive:!0}),l.addEventListener("dblclick",(function(){for(var t=0;t<100;t++){var e=new h({radius:1,position:new u(Math.random()*p,Math.random()*g)});d.push(e)}}),{passive:!0});var f=l.getBoundingClientRect(),p=f.width,g=f.height;function y(t){t.touches?(s=t.touches[0].pageX,r=t.touches[0].pageY):(s=t.pageX,r=t.pageY)}function m(t){s&&r&&(t.touches?(s=t.touches[0].pageX,r=t.touches[0].pageY):(s=t.pageX,r=t.pageY))}function w(){s=r=void 0}return l.width=p,l.height=g,function(){for(var t=0;t<i;t++){var n=new u(0,0);n.setAngle(2*Math.random()*Math.PI),n.setLength(1);var a=new h({radius:e,position:new u(Math.random()*p,Math.random()*g),velocity:n});c.push(a)}}(),function e(){v.fillStyle="rgba(25, 30, 35, .1)",v.fillRect(0,0,p,g);for(var l=0;l<i;l++){for(var f=c[l],y=f.velocity.angle,m=void 0,w=0,b=2e4;w<d.length;w++){var M=d[w].distanceTo(f);if(M<a)if(M<b)b=M,m=d[w];else if(M-b<1){m=d[w];break}}if(!m&&s&&r){var L=new h({radius:1,position:new u(s,r)});L.distanceTo(f)<o&&(y=f.angleTo(L))}if(m&&(y=f.angleTo(m),Math.trunc(m.position.x)==Math.trunc(f.position.x)&&Math.trunc(m.position.y)==Math.trunc(f.position.y))){var x=d.indexOf(m);d.splice(x,1)}var E=Math.random()>.5?y+.2:y-.2;f.velocity.setAngle(E),f.updatePosition(),v.fillStyle=n,f.render(v),f.screenWrap(p,g)}for(var O=0;O<d.length;O++)v.fillStyle="#e6db74",d[O].render(v);t=requestAnimationFrame(e)}(),function(){l.addEventListener("mousedown",y,{passive:!0}),l.addEventListener("mousemove",m,{passive:!0}),l.addEventListener("mouseup",w,{passive:!0}),l.addEventListener("touchstart",y,{passive:!0}),l.addEventListener("touchmove",m,{passive:!0}),l.addEventListener("touchend",w,{passive:!0}),c.length=0,d.length=0,cancelAnimationFrame(t)}}),[])}function l(){Object(n.useEffect)((function(){var t=0,e=0,i=document.getElementById("about-face-canvas"),n=i.getContext("2d");i.addEventListener("mousemove",O,{passive:!0}),i.addEventListener("touchstart",E,{passive:!0}),i.addEventListener("touchmove",O,{passive:!0}),i.addEventListener("touchEnd",E,{passive:!0});var o=i.getBoundingClientRect(),s=o.left,r=o.top,c=i.getBoundingClientRect(),d=c.width,l=c.height;d=i.width=Object(a.d)(d),l=i.height=Object(a.d)(l);var v,f=d/2,p=l/2,g=Object(a.d)(Math.min(d,l)),y=f-g/2,m=p-g/2,w=new Image,b=[],M=[],L=["#ff2286","#eefac9","#363b41"];function x(){n.clearRect(0,0,d,l);for(var i=0;i<v;i++){var a=M[i].springPoint,o=M[i].particle;if(t&&e){var s=new h({radius:1,position:new u(t,e)});if(s.distanceTo(a)<70){var r=s.angleTo(a);o.radius=3;var c=new u;c.setAngle(r),c.setLength(70),s.position.add(c),a=s,o.update=!0}else o.radius=1}if(o.update){var f=u.subtract(a.position,o.position),p=u.multiply(f,.09);o.velocity.add(p),o.updatePosition();var g=Math.floor(Math.random()*L.length);n.fillStyle=L[g],o.render(n),o.addFriction(),f.length<1e-4&&(o.update=!1)}else{var y=Math.floor(Math.random()*L.length);n.fillStyle=L[y],o.render(n)}}requestAnimationFrame(x)}function E(){t=e=void 0}function O(i){var n,a;i.touches?(n=i.touches[0].pageX,a=i.touches[0].pageY):(n=i.pageX,a=i.pageY),t=(t=n-s)<0?-5e3:t,e=(e=a-r)<0?-5e3:e}return w.onload=function(){(b=function(){n.clearRect(0,0,d,l),n.drawImage(w,y,m,g,g);for(var t=n.getImageData(y,m,g,g).data,e=[],i=0,a=0;i<t.length;i+=4,a+=1){var o=t[i],s=t[i+1],r=t[i+2];if(!(o>=10&&s>=10&&r>=10)){var c=y+Math.floor(a%g),h=m+Math.floor(a/g),v=new u(c,h);e.push(v)}}return n.clearRect(0,0,d,l),e}()).forEach((function(t,e){if(e%2){var i=new h({radius:1,position:t}),n=new h({radius:1,position:new u(Math.round(Math.random()*d),Math.round(Math.random()*l)),friction:.8});M.push({springPoint:i,particle:n})}})),function(){v=M.length/3;var t=setInterval((function(){(v+=M.length/3)>M.length&&(v=M.length,clearInterval(t))}),3e3)}(),x()},w.src="img/db_face.png",function(){i.removeEventListener("mousemove",O),b.length=0,M.length=0,v=0}}),[])}function v(t,e){Object(n.useEffect)((function(){setTimeout((function(){var i=document.getElementById(t),n=i.getContext("2d"),o=i.getBoundingClientRect(),s=o.width,r=o.height;i.width=s,i.height=r;var c,d,l,v,f=Object(a.d)(s/2),p=Object(a.d)(r/2),g=["#ff2286","#eefac9"],y=function(){n.clearRect(0,0,s,r),n.fillStyle="#ffffff",n.strokeStyle="#ffffff",n.font="140px Nunito Sans",c=Object(a.d)(n.measureText(e).width)+10,d=f-c/2-5,l=p-100,n.strokeText(e,d,p+50);var t=n.getImageData(d,l,c,200);v=t.data;for(var i=[],o=0,h=0;o<v.length;o+=4,h++){var g=v[o],y=v[o+1],m=v[o+2];if(g>=255&&y>=255&&m>=255){var w=d+h%c,b=l+Math.floor(h/c),M=new u(w,b);i.push(M)}}return i}(),m=[];return function(){for(var t=0;t<y.length;t++){var e=new u(0,0);e.setAngle(2*Math.random()*Math.PI),e.setLength(2*Math.random()+1);var i=new h({radius:1,position:new u(y[t].x,y[t].y),velocity:e}),n=void 0,o=Math.random();n=o<.2?new u(Math.random()*s,Object(a.c)(0,-300)):o<.4?new u(Math.random()*s,Object(a.c)(r,r+300)):new u(o<.6?Object(a.c)(0,-300):Object(a.c)(s,s+300),Math.random()*r);var c=new h({radius:1,position:n,velocity:e,friction:.8});m.push({particle:c,springPoint:i})}}(),function t(){(function(){n.clearRect(0,0,s,r);for(var t=0;t<m.length;t++){var e=m[t],i=e.particle,a=e.springPoint,o=i.angleTo(a);i.updatePosition(),n.fillStyle=g[t%3],i.render(n),i.distanceTo(a)<5&&(i.update=!1),i.screenWrap(s,r),Math.random()>.2?i.velocity.setAngle(o):i.velocity.setAngle(2*Math.random()*Math.PI)}})(),requestAnimationFrame(t)}(),function(){m.length=0}}),1e3)}),[t,e])}},psLn:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"d",(function(){return r})),i.d(e,"b",(function(){return c})),i.d(e,"c",(function(){return u}));var n=i("ODXe"),a=i("q8gk"),o=i.n(a);function s(t){var e=Object.assign({},t);return Object.keys(t).forEach((function(i){var n=i.replace(/--/g,"-");e[o()(n)]=t[i]})),e}function r(t){return(t=Math.floor(t))%2?t+1:t}function c(t){if(t){var e=new Date(t).toDateString().split(" "),i=Object(n.a)(e,4),a=(i[0],i[1]),o=i[2],s=i[3];return"".concat(o," ").concat(a,", ").concat(s)}return""}function u(t,e){var i=Math.min(t,e),n=Math.min(t,e)-i;return i+Math.floor(Math.random()*n)}},q8gk:function(t,e,i){"use strict";const n=(t,e)=>{if("string"!==typeof t&&!Array.isArray(t))throw new TypeError("Expected the input to be `string | string[]`");e={pascalCase:!1,...e};if(0===(t=Array.isArray(t)?t.map(t=>t.trim()).filter(t=>t.length).join("-"):t.trim()).length)return"";if(1===t.length)return e.pascalCase?t.toLocaleUpperCase():t.toLocaleLowerCase();return t!==t.toLocaleLowerCase()&&(t=(t=>{let e=!1,i=!1,n=!1;for(let a=0;a<t.length;a++){const o=t[a];e&&/[\p{Lu}]/u.test(o)?(t=t.slice(0,a)+"-"+t.slice(a),e=!1,n=i,i=!0,a++):i&&n&&/[\p{Ll}]/u.test(o)?(t=t.slice(0,a-1)+"-"+t.slice(a-1),n=i,i=!1,e=!0):(e=o.toLocaleLowerCase()===o&&o.toLocaleUpperCase()!==o,n=i,i=o.toLocaleUpperCase()===o&&o.toLocaleLowerCase()!==o)}return t})(t)),t=t.replace(/^[_.\- ]+/,"").toLocaleLowerCase().replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu,(t,e)=>e.toLocaleUpperCase()).replace(/\d+([\p{Alpha}\p{N}_]|$)/gu,t=>t.toLocaleUpperCase()),i=t,e.pascalCase?i.charAt(0).toLocaleUpperCase()+i.slice(1):i;var i};t.exports=n,t.exports.default=n},rePB:function(t,e,i){"use strict";function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,"a",(function(){return n}))},u7Cr:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return a}));var n=function(t){window.gtag("config","UA-101087503-2",{page_path:t})},a=function(t){var e=t.action,i=t.category,n=t.label,a=t.value;window.gtag("event",e,{event_category:i,event_label:n,value:a})}}}]);