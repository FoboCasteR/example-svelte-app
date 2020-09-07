var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(t){let n;return s(t,t=>n=t)(),n}function l(t,n,e){t.$$.on_destroy.push(s(n,e))}function i(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function m(){return p(" ")}function h(){return p("")}function g(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function b(t,n){t.value=null==n?"":n}function v(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let w;function k(t){w=t}const _=[],x=[],q=[],A=[],S=Promise.resolve();let I=!1;function j(t){q.push(t)}let E=!1;const z=new Set;function U(){if(!E){E=!0;do{for(let t=0;t<_.length;t+=1){const n=_[t];k(n),M(n.$$)}for(_.length=0;x.length;)x.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];z.has(n)||(z.add(n),n())}q.length=0}while(_.length);for(;A.length;)A.pop()();I=!1,E=!1,z.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const O=new Set;let P;function T(){P={r:0,c:[],p:P}}function N(){P.r||o(P.c),P=P.p}function C(t,n){t&&t.i&&(O.delete(t),t.i(n))}function L(t,n,e,o){if(t&&t.o){if(O.has(t))return;O.add(t),P.c.push(()=>{O.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function K(t,n){L(t,1,1,()=>{n.delete(t.key)})}function R(t){t&&t.c()}function B(t,e,c){const{fragment:s,on_mount:u,on_destroy:l,after_update:i}=t.$$;s&&s.m(e,c),j(()=>{const e=u.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(j)}function D(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function F(t,n){-1===t.$$.dirty[0]&&(_.push(t),I||(I=!0,S.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function G(n,r,c,s,u,l,i=[-1]){const a=w;k(n);const d=r.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:i,skip_bound:!1};let m=!1;if(p.ctx=c?c(n,d,(t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&F(n,t)),e}):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&C(n.$$.fragment),B(n,r.target,r.anchor),U()}k(a)}class H{$destroy(){D(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const J=[];function Q(n,e=t){let o;const r=[];function s(t){if(c(n,t)&&(n=t,o)){const t=!J.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),J.push(e,n)}if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,u=t){const l=[c,u];return r.push(l),1===r.length&&(o=e(s)||t),c(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const V=Q(localStorage.getItem("apiKey")),W=Q(localStorage.getItem("username")),X=Q(localStorage.getItem("password")),Y=Q(localStorage.getItem("userToken"));function Z(){localStorage.setItem("apiKey",u(V)),localStorage.setItem("username",u(W)),localStorage.setItem("password",u(X)),localStorage.setItem("userToken",u(Y))}const tt="https://rebrickable.com/api/v3";async function nt(t,n){const e=await fetch(n,{headers:{Authorization:"key "+t,Accept:"application/json"}});if(e.status>=400){const t=await e.json().detail;throw new Error(t)}return await e.json()}function et(t){let n,e,r,c,s,u,l,h,y,v,w;return{c(){n=d("input"),e=m(),r=d("input"),c=m(),s=d("input"),u=m(),l=d("button"),h=p("Authenticate"),$(n,"placeholder","API key"),$(n,"autocomplete","off"),$(r,"placeholder","username"),$(r,"autocomplete","off"),$(s,"placeholder","password"),$(s,"type","password"),l.disabled=y=!t[0]},m(o,f){a(o,n,f),b(n,t[2]),a(o,e,f),a(o,r,f),b(r,t[3]),a(o,c,f),a(o,s,f),b(s,t[4]),a(o,u,f),a(o,l,f),i(l,h),v||(w=[g(n,"input",t[8]),g(r,"input",t[9]),g(s,"input",t[10]),g(l,"click",t[6])],v=!0)},p(t,e){4&e&&n.value!==t[2]&&b(n,t[2]),8&e&&r.value!==t[3]&&b(r,t[3]),16&e&&s.value!==t[4]&&b(s,t[4]),1&e&&y!==(y=!t[0])&&(l.disabled=y)},d(t){t&&f(n),t&&f(e),t&&f(r),t&&f(c),t&&f(s),t&&f(u),t&&f(l),v=!1,o(w)}}}function ot(t){let n,e,o,r,c,s,u;return{c(){n=d("span"),e=p("API key: "),o=p(t[1]),r=m(),c=d("button"),c.textContent="Reset user token"},m(l,f){a(l,n,f),i(n,e),i(n,o),a(l,r,f),a(l,c,f),s||(u=g(c,"click",t[7]),s=!0)},p(t,n){2&n&&y(o,t[1])},d(t){t&&f(n),t&&f(r),t&&f(c),s=!1,u()}}}function rt(n){let e;function o(t,n){return t[5]?ot:et}let r=o(n),c=r(n);return{c(){c.c(),e=h()},m(t,n){c.m(t,n),a(t,e,n)},p(t,[n]){r===(r=o(t))&&c?c.p(t,n):(c.d(1),c=r(t),c&&(c.c(),c.m(e.parentNode,e)))},i:t,o:t,d(t){c.d(t),t&&f(e)}}}function ct(t,n,e){let o,r,c,s;l(t,V,t=>e(2,o=t)),l(t,W,t=>e(3,r=t)),l(t,X,t=>e(4,c=t)),l(t,Y,t=>e(5,s=t));let u,i,a=!1;return t.$$.update=()=>{2108&t.$$.dirty&&(e(0,u=o&&r&&c&&!a),o&&s&&e(1,i=o.replace(/(?<=.{6})./g,"*")))},[u,i,o,r,c,s,function(){e(11,a=!0),async function(t,n,e){const o=new URLSearchParams({username:n,password:e}),r=await fetch(tt+"/users/_token/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"key "+t,Accept:"application/json"},body:o});return(await r.json()).user_token}(o,r,c).then(t=>{Y.set(t),Z()})},function(){Y.set(""),Z()},function(){o=this.value,V.set(o)},function(){r=this.value,W.set(r)},function(){c=this.value,X.set(c)}]}class st extends H{constructor(t){super(),G(this,t,ct,rt,c,{})}}const ut=Q(),lt=Q(),it=function(n,e,c){const u=!Array.isArray(n),l=u?[n]:n,i=e.length<2;return{subscribe:Q(c,n=>{let c=!1;const a=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=e(u?a[0]:a,n);i?n(o):d=r(o)?o:t},m=l.map((t,n)=>s(t,t=>{a[n]=t,f&=~(1<<n),c&&p()},()=>{f|=1<<n}));return c=!0,p(),function(){o(m),d()}}).subscribe}}(lt,t=>{if(!t)return;const n={};return Array.from(t).forEach(({part:t,color:e,quantity:o})=>{const r=n[t.part_num];e=function({name:t,rgb:n},e){return{name:t,rgb:n,quantity:e}}(e,o),r?(r.colors.push(e),r.quantity+=o):n[t.part_num]={part:t,colors:[e],quantity:o}}),Object.values(n).sort((t,n)=>n.quantity-t.quantity)});function at(t,n,e){const o=t.slice();return o[1]=n[e],o}function ft(t){let n,e,o,r,c,s,u,l,h=t[1].quantity+"";return{c(){n=d("div"),e=d("div"),r=m(),c=d("div"),s=p(" × "),u=p(h),l=m(),$(e,"class","square svelte-orzf07"),v(e,"background-color","#"+t[1].rgb),$(e,"title",o=t[1].name),$(c,"class","label svelte-orzf07"),$(n,"class","color svelte-orzf07")},m(t,o){a(t,n,o),i(n,e),i(n,r),i(n,c),i(c,s),i(c,u),i(n,l)},p(t,n){1&n&&v(e,"background-color","#"+t[1].rgb),1&n&&o!==(o=t[1].name)&&$(e,"title",o),1&n&&h!==(h=t[1].quantity+"")&&y(u,h)},d(t){t&&f(n)}}}function dt(n){let e,o=n[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=ft(at(n,o,t));return{c(){e=d("div");for(let t=0;t<r.length;t+=1)r[t].c();$(e,"class","pallete svelte-orzf07")},m(t,n){a(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,[n]){if(1&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const s=at(t,o,c);r[c]?r[c].p(s,n):(r[c]=ft(s),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},i:t,o:t,d(t){t&&f(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function pt(t,n,e){let{colors:o}=n;return t.$$set=t=>{"colors"in t&&e(0,o=t.colors)},[o]}class mt extends H{constructor(t){super(),G(this,t,pt,dt,c,{colors:0})}}function ht(t){let n,e,o,r,c,s,u,l,h,g;return c=new mt({props:{colors:t[3]}}),{c(){n=d("div"),e=d("img"),r=m(),R(c.$$.fragment),s=m(),u=d("div"),l=p(" × "),h=p(t[1]),e.src!==(o=t[0])&&$(e,"src",o),$(e,"alt",t[2]),$(e,"title",t[2]),$(e,"loading","lazy"),$(e,"referrerpolicy","no-referrer"),$(e,"class","svelte-1siddh3"),$(u,"class","quantity svelte-1siddh3"),$(n,"class","part svelte-1siddh3")},m(t,o){a(t,n,o),i(n,e),i(n,r),B(c,n,null),i(n,s),i(n,u),i(u,l),i(u,h),g=!0},p(t,[n]){(!g||1&n&&e.src!==(o=t[0]))&&$(e,"src",o),(!g||4&n)&&$(e,"alt",t[2]),(!g||4&n)&&$(e,"title",t[2]);const r={};8&n&&(r.colors=t[3]),c.$set(r),(!g||2&n)&&y(h,t[1])},i(t){g||(C(c.$$.fragment,t),g=!0)},o(t){L(c.$$.fragment,t),g=!1},d(t){t&&f(n),D(c)}}}function gt(t,n,e){let{imageUrl:o}=n,{quantity:r}=n,{name:c}=n,{colors:s}=n;return t.$$set=t=>{"imageUrl"in t&&e(0,o=t.imageUrl),"quantity"in t&&e(1,r=t.quantity),"name"in t&&e(2,c=t.name),"colors"in t&&e(3,s=t.colors)},[o,r,c,s]}class $t extends H{constructor(t){super(),G(this,t,gt,ht,c,{imageUrl:0,quantity:1,name:2,colors:3})}}function yt(t,n,e){const o=t.slice();return o[8]=n[e].colors,o[9]=n[e].part,o[10]=n[e].quantity,o}function bt(n){let e,o,r,c,s=n[3]&&wt(n);return{c(){e=d("button"),o=p("Load parts "),s&&s.c()},m(t,u){a(t,e,u),i(e,o),s&&s.m(e,null),r||(c=g(e,"click",n[4]),r=!0)},p(t,n){t[3]?s?s.p(t,n):(s=wt(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:t,o:t,d(t){t&&f(e),s&&s.d(),r=!1,c()}}}function vt(t){let n,e,o,r,c,s,u,l,h=[],g=new Map,b=t[2];const v=t=>t[9].part_num;for(let n=0;n<b.length;n+=1){let e=yt(t,b,n),o=v(e);g.set(o,h[n]=kt(o,e))}return{c(){n=d("p"),e=p(t[0]),o=p(" kinds, "),r=p(t[1]),c=p(" total"),s=m(),u=d("div");for(let t=0;t<h.length;t+=1)h[t].c();$(u,"class","parts svelte-1f4vqni")},m(t,f){a(t,n,f),i(n,e),i(n,o),i(n,r),i(n,c),a(t,s,f),a(t,u,f);for(let t=0;t<h.length;t+=1)h[t].m(u,null);l=!0},p(t,n){if((!l||1&n)&&y(e,t[0]),(!l||2&n)&&y(r,t[1]),4&n){const e=t[2];T(),h=function(t,n,e,o,r,c,s,u,l,i,a,f){let d=t.length,p=c.length,m=d;const h={};for(;m--;)h[t[m].key]=m;const g=[],$=new Map,y=new Map;for(m=p;m--;){const t=f(r,c,m),u=e(t);let l=s.get(u);l?o&&l.p(t,n):(l=i(u,t),l.c()),$.set(u,g[m]=l),u in h&&y.set(u,Math.abs(m-h[u]))}const b=new Set,v=new Set;function w(t){C(t,1),t.m(u,a),s.set(t.key,t),a=t.first,p--}for(;d&&p;){const n=g[p-1],e=t[d-1],o=n.key,r=e.key;n===e?(a=n.first,d--,p--):$.has(r)?!s.has(o)||b.has(o)?w(n):v.has(r)?d--:y.get(o)>y.get(r)?(v.add(o),w(n)):(b.add(r),d--):(l(e,s),d--)}for(;d--;){const n=t[d];$.has(n.key)||l(n,s)}for(;p;)w(g[p-1]);return g}(h,n,v,1,t,e,g,u,K,kt,null,yt),N()}},i(t){if(!l){for(let t=0;t<b.length;t+=1)C(h[t]);l=!0}},o(t){for(let t=0;t<h.length;t+=1)L(h[t]);l=!1},d(t){t&&f(n),t&&f(s),t&&f(u);for(let t=0;t<h.length;t+=1)h[t].d()}}}function wt(t){let n,e,o;return{c(){n=p("("),e=p(t[3]),o=p("%)")},m(t,r){a(t,n,r),a(t,e,r),a(t,o,r)},p(t,n){8&n&&y(e,t[3])},d(t){t&&f(n),t&&f(e),t&&f(o)}}}function kt(t,n){let e,o,r;return o=new $t({props:{name:n[9].name,imageUrl:n[9].part_img_url,quantity:n[10],colors:n[8]}}),{key:t,first:null,c(){e=h(),R(o.$$.fragment),this.first=e},m(t,n){a(t,e,n),B(o,t,n),r=!0},p(t,n){const e={};4&n&&(e.name=t[9].name),4&n&&(e.imageUrl=t[9].part_img_url),4&n&&(e.quantity=t[10]),4&n&&(e.colors=t[8]),o.$set(e)},i(t){r||(C(o.$$.fragment,t),r=!0)},o(t){L(o.$$.fragment,t),r=!1},d(t){t&&f(e),D(o,t)}}}function _t(t){let n,e,o,r;const c=[vt,bt],s=[];function u(t,n){return t[2]?0:1}return n=u(t),e=s[n]=c[n](t),{c(){e.c(),o=h()},m(t,e){s[n].m(t,e),a(t,o,e),r=!0},p(t,[r]){let l=n;n=u(t),n===l?s[n].p(t,r):(T(),L(s[l],1,1,()=>{s[l]=null}),N(),e=s[n],e||(e=s[n]=c[n](t),e.c()),C(e,1),e.m(o.parentNode,o))},i(t){r||(C(e),r=!0)},o(t){L(e),r=!1},d(t){s[n].d(t),t&&f(o)}}}function xt(t,n,e){let o,r,c,s,u,i;function a(t,n){ut.set(Math.round(t/n*100))}return l(t,V,t=>e(5,o=t)),l(t,Y,t=>e(6,r=t)),l(t,it,t=>e(2,c=t)),l(t,ut,t=>e(3,s=t)),t.$$.update=()=>{4&t.$$.dirty&&c&&(e(0,u=c.length),e(1,i=c.reduce((t,{quantity:n})=>t+n,0)))},[u,i,c,s,function(){ut.set(0),async function(t,n,e){let o=[],r=`${tt}/users/${n}/allparts/`;for(;r;){const n=await nt(t,r);r=n.next,o=o.concat(n.results),"function"==typeof e&&e(o.length,n.count)}return o}(o,r,a).then(t=>{lt.set(t),ut.set(null)})}]}class qt extends H{constructor(t){super(),G(this,t,xt,_t,c,{})}}function At(t){let n,e;return n=new qt({}),{c(){R(n.$$.fragment)},m(t,o){B(n,t,o),e=!0},i(t){e||(C(n.$$.fragment,t),e=!0)},o(t){L(n.$$.fragment,t),e=!1},d(t){D(n,t)}}}function St(t){let n,e,o,r;e=new st({});let c=t[0]&&At();return{c(){n=d("main"),R(e.$$.fragment),o=m(),c&&c.c()},m(t,s){a(t,n,s),B(e,n,null),i(n,o),c&&c.m(n,null),r=!0},p(t,[e]){t[0]?c?1&e&&C(c,1):(c=At(),c.c(),C(c,1),c.m(n,null)):c&&(T(),L(c,1,1,()=>{c=null}),N())},i(t){r||(C(e.$$.fragment,t),C(c),r=!0)},o(t){L(e.$$.fragment,t),L(c),r=!1},d(t){t&&f(n),D(e),c&&c.d()}}}function It(t,n,e){let o;return l(t,Y,t=>e(0,o=t)),[o]}return new class extends H{constructor(t){super(),G(this,t,It,St,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map