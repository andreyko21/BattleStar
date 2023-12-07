import"./modulepreload-polyfill-3cfb730f.js";import{B as Ce}from"./pop-up-e0e17d1a.js";import{B as bt,L as Nt,C as Ae}from"./lava-lamp-a2551edf.js";import"./jquery-ab814638.js";var B;(function(r){r.Range="range",r.Steps="steps",r.Positions="positions",r.Count="count",r.Values="values"})(B||(B={}));var U;(function(r){r[r.None=-1]="None",r[r.NoValue=0]="NoValue",r[r.LargeValue=1]="LargeValue",r[r.SmallValue=2]="SmallValue"})(U||(U={}));function ye(r){return Z(r)&&typeof r.from=="function"}function Z(r){return typeof r=="object"&&typeof r.to=="function"}function zt(r){r.parentElement.removeChild(r)}function gt(r){return r!=null}function jt(r){r.preventDefault()}function Pe(r){return r.filter(function(t){return this[t]?!1:this[t]=!0},{})}function _e(r,t){return Math.round(r/t)*t}function Ve(r,t){var s=r.getBoundingClientRect(),u=r.ownerDocument,f=u.documentElement,v=It(u);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(v.x=0),t?s.top+v.y-f.clientTop:s.left+v.x-f.clientLeft}function O(r){return typeof r=="number"&&!isNaN(r)&&isFinite(r)}function Ft(r,t,s){s>0&&(D(r,t),setTimeout(function(){J(r,t)},s))}function Rt(r){return Math.max(Math.min(r,100),0)}function Q(r){return Array.isArray(r)?r:[r]}function ke(r){r=String(r);var t=r.split(".");return t.length>1?t[1].length:0}function D(r,t){r.classList&&!/\s/.test(t)?r.classList.add(t):r.className+=" "+t}function J(r,t){r.classList&&!/\s/.test(t)?r.classList.remove(t):r.className=r.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function De(r,t){return r.classList?r.classList.contains(t):new RegExp("\\b"+t+"\\b").test(r.className)}function It(r){var t=window.pageXOffset!==void 0,s=(r.compatMode||"")==="CSS1Compat",u=t?window.pageXOffset:s?r.documentElement.scrollLeft:r.body.scrollLeft,f=t?window.pageYOffset:s?r.documentElement.scrollTop:r.body.scrollTop;return{x:u,y:f}}function Me(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Ue(){var r=!1;try{var t=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("test",null,t)}catch{}return r}function Le(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function xt(r,t){return 100/(t-r)}function St(r,t,s){return t*100/(r[s+1]-r[s])}function He(r,t){return St(r,r[0]<0?t+Math.abs(r[0]):t-r[0],0)}function Oe(r,t){return t*(r[1]-r[0])/100+r[0]}function T(r,t){for(var s=1;r>=t[s];)s+=1;return s}function ze(r,t,s){if(s>=r.slice(-1)[0])return 100;var u=T(s,r),f=r[u-1],v=r[u],p=t[u-1],x=t[u];return p+He([f,v],s)/xt(p,x)}function je(r,t,s){if(s>=100)return r.slice(-1)[0];var u=T(s,t),f=r[u-1],v=r[u],p=t[u-1],x=t[u];return Oe([f,v],(s-p)*xt(p,x))}function Fe(r,t,s,u){if(u===100)return u;var f=T(u,r),v=r[f-1],p=r[f];return s?u-v>(p-v)/2?p:v:t[f-1]?r[f-1]+_e(u-r[f-1],t[f-1]):u}var Kt=function(){function r(t,s,u){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[u||!1],this.xNumSteps=[!1],this.snap=s;var f,v=[];for(Object.keys(t).forEach(function(p){v.push([Q(t[p]),p])}),v.sort(function(p,x){return p[0][0]-x[0][0]}),f=0;f<v.length;f++)this.handleEntryPoint(v[f][1],v[f][0]);for(this.xNumSteps=this.xSteps.slice(0),f=0;f<this.xNumSteps.length;f++)this.handleStepPoint(f,this.xNumSteps[f])}return r.prototype.getDistance=function(t){for(var s=[],u=0;u<this.xNumSteps.length-1;u++)s[u]=St(this.xVal,t,u);return s},r.prototype.getAbsoluteDistance=function(t,s,u){var f=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[f+1];)f++;else t===this.xPct[this.xPct.length-1]&&(f=this.xPct.length-2);!u&&t===this.xPct[f+1]&&f++,s===null&&(s=[]);var v,p=1,x=s[f],d=0,M=0,H=0,P=0;for(u?v=(t-this.xPct[f])/(this.xPct[f+1]-this.xPct[f]):v=(this.xPct[f+1]-t)/(this.xPct[f+1]-this.xPct[f]);x>0;)d=this.xPct[f+1+P]-this.xPct[f+P],s[f+P]*p+100-v*100>100?(M=d*v,p=(x-100*v)/s[f+P],v=1):(M=s[f+P]*d/100*p,p=0),u?(H=H-M,this.xPct.length+P>=1&&P--):(H=H+M,this.xPct.length-P>=1&&P++),x=s[f+P]*p;return t+H},r.prototype.toStepping=function(t){return t=ze(this.xVal,this.xPct,t),t},r.prototype.fromStepping=function(t){return je(this.xVal,this.xPct,t)},r.prototype.getStep=function(t){return t=Fe(this.xPct,this.xSteps,this.snap,t),t},r.prototype.getDefaultStep=function(t,s,u){var f=T(t,this.xPct);return(t===100||s&&t===this.xPct[f-1])&&(f=Math.max(f-1,1)),(this.xVal[f]-this.xVal[f-1])/u},r.prototype.getNearbySteps=function(t){var s=T(t,this.xPct);return{stepBefore:{startValue:this.xVal[s-2],step:this.xNumSteps[s-2],highestStep:this.xHighestCompleteStep[s-2]},thisStep:{startValue:this.xVal[s-1],step:this.xNumSteps[s-1],highestStep:this.xHighestCompleteStep[s-1]},stepAfter:{startValue:this.xVal[s],step:this.xNumSteps[s],highestStep:this.xHighestCompleteStep[s]}}},r.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(ke);return Math.max.apply(null,t)},r.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},r.prototype.convert=function(t){return this.getStep(this.toStepping(t))},r.prototype.handleEntryPoint=function(t,s){var u;if(t==="min"?u=0:t==="max"?u=100:u=parseFloat(t),!O(u)||!O(s[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(u),this.xVal.push(s[0]);var f=Number(s[1]);u?this.xSteps.push(isNaN(f)?!1:f):isNaN(f)||(this.xSteps[0]=f),this.xHighestCompleteStep.push(0)},r.prototype.handleStepPoint=function(t,s){if(s){if(this.xVal[t]===this.xVal[t+1]){this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t];return}this.xSteps[t]=St([this.xVal[t],this.xVal[t+1]],s,0)/xt(this.xPct[t],this.xPct[t+1]);var u=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],f=Math.ceil(Number(u.toFixed(3))-1),v=this.xVal[t]+this.xNumSteps[t]*f;this.xHighestCompleteStep[t]=v}},r}(),Bt={to:function(r){return r===void 0?"":r.toFixed(2)},from:Number},Tt={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},R={tooltips:".__tooltips",aria:".__aria"};function Re(r,t){if(!O(t))throw new Error("noUiSlider: 'step' is not numeric.");r.singleStep=t}function Be(r,t){if(!O(t))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");r.keyboardPageMultiplier=t}function qe(r,t){if(!O(t))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");r.keyboardMultiplier=t}function Ne(r,t){if(!O(t))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");r.keyboardDefaultStep=t}function Ie(r,t){if(typeof t!="object"||Array.isArray(t))throw new Error("noUiSlider: 'range' is not an object.");if(t.min===void 0||t.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");r.spectrum=new Kt(t,r.snap||!1,r.singleStep)}function Ke(r,t){if(t=Q(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider: 'start' option is incorrect.");r.handles=t.length,r.start=t}function Te(r,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");r.snap=t}function $e(r,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");r.animate=t}function Xe(r,t){if(typeof t!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");r.animationDuration=t}function Ye(r,t){var s=[!1],u;if(t==="lower"?t=[!0,!1]:t==="upper"&&(t=[!1,!0]),t===!0||t===!1){for(u=1;u<r.handles;u++)s.push(t);s.push(!1)}else{if(!Array.isArray(t)||!t.length||t.length!==r.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");s=t}r.connect=s}function We(r,t){switch(t){case"horizontal":r.ort=0;break;case"vertical":r.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function $t(r,t){if(!O(t))throw new Error("noUiSlider: 'margin' option must be numeric.");t!==0&&(r.margin=r.spectrum.getDistance(t))}function Ge(r,t){if(!O(t))throw new Error("noUiSlider: 'limit' option must be numeric.");if(r.limit=r.spectrum.getDistance(t),!r.limit||r.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function Je(r,t){var s;if(!O(t)&&!Array.isArray(t))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&!(t.length===2||O(t[0])||O(t[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(t!==0){for(Array.isArray(t)||(t=[t,t]),r.padding=[r.spectrum.getDistance(t[0]),r.spectrum.getDistance(t[1])],s=0;s<r.spectrum.xNumSteps.length-1;s++)if(r.padding[0][s]<0||r.padding[1][s]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var u=t[0]+t[1],f=r.spectrum.xVal[0],v=r.spectrum.xVal[r.spectrum.xVal.length-1];if(u/(v-f)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function Ze(r,t){switch(t){case"ltr":r.dir=0;break;case"rtl":r.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Qe(r,t){if(typeof t!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var s=t.indexOf("tap")>=0,u=t.indexOf("drag")>=0,f=t.indexOf("fixed")>=0,v=t.indexOf("snap")>=0,p=t.indexOf("hover")>=0,x=t.indexOf("unconstrained")>=0,d=t.indexOf("drag-all")>=0,M=t.indexOf("smooth-steps")>=0;if(f){if(r.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");$t(r,r.start[1]-r.start[0])}if(x&&(r.margin||r.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");r.events={tap:s||v,drag:u,dragAll:d,smoothSteps:M,fixed:f,snap:v,hover:p,unconstrained:x}}function tr(r,t){if(t!==!1)if(t===!0||Z(t)){r.tooltips=[];for(var s=0;s<r.handles;s++)r.tooltips.push(t)}else{if(t=Q(t),t.length!==r.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.forEach(function(u){if(typeof u!="boolean"&&!Z(u))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),r.tooltips=t}}function er(r,t){if(t.length!==r.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");r.handleAttributes=t}function rr(r,t){if(!Z(t))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");r.ariaFormat=t}function ir(r,t){if(!ye(t))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");r.format=t}function ar(r,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");r.keyboardSupport=t}function nr(r,t){r.documentElement=t}function sr(r,t){if(typeof t!="string"&&t!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");r.cssPrefix=t}function or(r,t){if(typeof t!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof r.cssPrefix=="string"?(r.cssClasses={},Object.keys(t).forEach(function(s){r.cssClasses[s]=r.cssPrefix+t[s]})):r.cssClasses=t}function Xt(r){var t={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Bt,format:Bt},s={step:{r:!1,t:Re},keyboardPageMultiplier:{r:!1,t:Be},keyboardMultiplier:{r:!1,t:qe},keyboardDefaultStep:{r:!1,t:Ne},start:{r:!0,t:Ke},connect:{r:!0,t:Ye},direction:{r:!0,t:Ze},snap:{r:!1,t:Te},animate:{r:!1,t:$e},animationDuration:{r:!1,t:Xe},range:{r:!0,t:Ie},orientation:{r:!1,t:We},margin:{r:!1,t:$t},limit:{r:!1,t:Ge},padding:{r:!1,t:Je},behaviour:{r:!0,t:Qe},ariaFormat:{r:!1,t:rr},format:{r:!1,t:ir},tooltips:{r:!1,t:tr},keyboardSupport:{r:!0,t:ar},documentElement:{r:!1,t:nr},cssPrefix:{r:!0,t:sr},cssClasses:{r:!0,t:or},handleAttributes:{r:!1,t:er}},u={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Tt,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};r.format&&!r.ariaFormat&&(r.ariaFormat=r.format),Object.keys(s).forEach(function(d){if(!gt(r[d])&&u[d]===void 0){if(s[d].r)throw new Error("noUiSlider: '"+d+"' is required.");return}s[d].t(t,gt(r[d])?r[d]:u[d])}),t.pips=r.pips;var f=document.createElement("div"),v=f.style.msTransform!==void 0,p=f.style.transform!==void 0;t.transformRule=p?"transform":v?"msTransform":"webkitTransform";var x=[["left","top"],["right","bottom"]];return t.style=x[t.dir][t.ort],t}function lr(r,t,s){var u=Me(),f=Le(),v=f&&Ue(),p=r,x,d,M,H,P,m=t.spectrum,z=[],C=[],L=[],et=0,j={},I=r.ownerDocument,$=t.documentElement||I.documentElement,X=I.body,Gt=I.dir==="rtl"||t.ort===1?0:100;function F(e,i){var a=I.createElement("div");return i&&D(a,i),e.appendChild(a),a}function Jt(e,i){var a=F(e,t.cssClasses.origin),n=F(a,t.cssClasses.handle);if(F(n,t.cssClasses.touchArea),n.setAttribute("data-handle",String(i)),t.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(o){return de(o,i)})),t.handleAttributes!==void 0){var l=t.handleAttributes[i];Object.keys(l).forEach(function(o){n.setAttribute(o,l[o])})}return n.setAttribute("role","slider"),n.setAttribute("aria-orientation",t.ort?"vertical":"horizontal"),i===0?D(n,t.cssClasses.handleLower):i===t.handles-1&&D(n,t.cssClasses.handleUpper),a.handle=n,a}function wt(e,i){return i?F(e,t.cssClasses.connect):!1}function Zt(e,i){var a=F(i,t.cssClasses.connects);d=[],M=[],M.push(wt(a,e[0]));for(var n=0;n<t.handles;n++)d.push(Jt(i,n)),L[n]=n,M.push(wt(a,e[n+1]))}function Qt(e){D(e,t.cssClasses.target),t.dir===0?D(e,t.cssClasses.ltr):D(e,t.cssClasses.rtl),t.ort===0?D(e,t.cssClasses.horizontal):D(e,t.cssClasses.vertical);var i=getComputedStyle(e).direction;return i==="rtl"?D(e,t.cssClasses.textDirectionRtl):D(e,t.cssClasses.textDirectionLtr),F(e,t.cssClasses.base)}function te(e,i){return!t.tooltips||!t.tooltips[i]?!1:F(e.firstChild,t.cssClasses.tooltip)}function Et(){return p.hasAttribute("disabled")}function rt(e){var i=d[e];return i.hasAttribute("disabled")}function ee(e){e!=null?(d[e].setAttribute("disabled",""),d[e].handle.removeAttribute("tabindex")):(p.setAttribute("disabled",""),d.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function re(e){e!=null?(d[e].removeAttribute("disabled"),d[e].handle.setAttribute("tabindex","0")):(p.removeAttribute("disabled"),d.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function it(){P&&(K("update"+R.tooltips),P.forEach(function(e){e&&zt(e)}),P=null)}function Ct(){it(),P=d.map(te),lt("update"+R.tooltips,function(e,i,a){if(!(!P||!t.tooltips)&&P[i]!==!1){var n=e[i];t.tooltips[i]!==!0&&(n=t.tooltips[i].to(a[i])),P[i].innerHTML=n}})}function ie(){K("update"+R.aria),lt("update"+R.aria,function(e,i,a,n,l){L.forEach(function(o){var h=d[o],c=Y(C,o,0,!0,!0,!0),b=Y(C,o,100,!0,!0,!0),S=l[o],w=String(t.ariaFormat.to(a[o]));c=m.fromStepping(c).toFixed(1),b=m.fromStepping(b).toFixed(1),S=m.fromStepping(S).toFixed(1),h.children[0].setAttribute("aria-valuemin",c),h.children[0].setAttribute("aria-valuemax",b),h.children[0].setAttribute("aria-valuenow",S),h.children[0].setAttribute("aria-valuetext",w)})})}function ae(e){if(e.mode===B.Range||e.mode===B.Steps)return m.xVal;if(e.mode===B.Count){if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=e.values-1,a=100/i,n=[];i--;)n[i]=i*a;return n.push(100),At(n,e.stepped)}return e.mode===B.Positions?At(e.values,e.stepped):e.mode===B.Values?e.stepped?e.values.map(function(l){return m.fromStepping(m.getStep(m.toStepping(l)))}):e.values:[]}function At(e,i){return e.map(function(a){return m.fromStepping(i?m.getStep(a):a)})}function ne(e){function i(S,w){return Number((S+w).toFixed(7))}var a=ae(e),n={},l=m.xVal[0],o=m.xVal[m.xVal.length-1],h=!1,c=!1,b=0;return a=Pe(a.slice().sort(function(S,w){return S-w})),a[0]!==l&&(a.unshift(l),h=!0),a[a.length-1]!==o&&(a.push(o),c=!0),a.forEach(function(S,w){var E,g,y,k=S,_=a[w+1],V,ct,ht,dt,Lt,pt,Ht,Ot=e.mode===B.Steps;for(Ot&&(E=m.xNumSteps[w]),E||(E=_-k),_===void 0&&(_=k),E=Math.max(E,1e-7),g=k;g<=_;g=i(g,E)){for(V=m.toStepping(g),ct=V-b,Lt=ct/(e.density||1),pt=Math.round(Lt),Ht=ct/pt,y=1;y<=pt;y+=1)ht=b+y*Ht,n[ht.toFixed(5)]=[m.fromStepping(ht),0];dt=a.indexOf(g)>-1?U.LargeValue:Ot?U.SmallValue:U.NoValue,!w&&h&&g!==_&&(dt=0),g===_&&c||(n[V.toFixed(5)]=[g,dt]),b=V}}),n}function se(e,i,a){var n,l,o=I.createElement("div"),h=(n={},n[U.None]="",n[U.NoValue]=t.cssClasses.valueNormal,n[U.LargeValue]=t.cssClasses.valueLarge,n[U.SmallValue]=t.cssClasses.valueSub,n),c=(l={},l[U.None]="",l[U.NoValue]=t.cssClasses.markerNormal,l[U.LargeValue]=t.cssClasses.markerLarge,l[U.SmallValue]=t.cssClasses.markerSub,l),b=[t.cssClasses.valueHorizontal,t.cssClasses.valueVertical],S=[t.cssClasses.markerHorizontal,t.cssClasses.markerVertical];D(o,t.cssClasses.pips),D(o,t.ort===0?t.cssClasses.pipsHorizontal:t.cssClasses.pipsVertical);function w(g,y){var k=y===t.cssClasses.value,_=k?b:S,V=k?h:c;return y+" "+_[t.ort]+" "+V[g]}function E(g,y,k){if(k=i?i(y,k):k,k!==U.None){var _=F(o,!1);_.className=w(k,t.cssClasses.marker),_.style[t.style]=g+"%",k>U.NoValue&&(_=F(o,!1),_.className=w(k,t.cssClasses.value),_.setAttribute("data-value",String(y)),_.style[t.style]=g+"%",_.innerHTML=String(a.to(y)))}}return Object.keys(e).forEach(function(g){E(g,e[g][0],e[g][1])}),o}function at(){H&&(zt(H),H=null)}function nt(e){at();var i=ne(e),a=e.filter,n=e.format||{to:function(l){return String(Math.round(l))}};return H=p.appendChild(se(i,a,n)),H}function yt(){var e=x.getBoundingClientRect(),i="offset"+["Width","Height"][t.ort];return t.ort===0?e.width||x[i]:e.height||x[i]}function q(e,i,a,n){var l=function(h){var c=oe(h,n.pageOffset,n.target||i);if(!c||Et()&&!n.doNotReject||De(p,t.cssClasses.tap)&&!n.doNotReject||e===u.start&&c.buttons!==void 0&&c.buttons>1||n.hover&&c.buttons)return!1;v||c.preventDefault(),c.calcPoint=c.points[t.ort],a(c,n)},o=[];return e.split(" ").forEach(function(h){i.addEventListener(h,l,v?{passive:!0}:!1),o.push([h,l])}),o}function oe(e,i,a){var n=e.type.indexOf("touch")===0,l=e.type.indexOf("mouse")===0,o=e.type.indexOf("pointer")===0,h=0,c=0;if(e.type.indexOf("MSPointer")===0&&(o=!0),e.type==="mousedown"&&!e.buttons&&!e.touches)return!1;if(n){var b=function(E){var g=E.target;return g===a||a.contains(g)||e.composed&&e.composedPath().shift()===a};if(e.type==="touchstart"){var S=Array.prototype.filter.call(e.touches,b);if(S.length>1)return!1;h=S[0].pageX,c=S[0].pageY}else{var w=Array.prototype.find.call(e.changedTouches,b);if(!w)return!1;h=w.pageX,c=w.pageY}}return i=i||It(I),(l||o)&&(h=e.clientX+i.x,c=e.clientY+i.y),e.pageOffset=i,e.points=[h,c],e.cursor=l||o,e}function Pt(e){var i=e-Ve(x,t.ort),a=i*100/yt();return a=Rt(a),t.dir?100-a:a}function le(e){var i=100,a=!1;return d.forEach(function(n,l){if(!rt(l)){var o=C[l],h=Math.abs(o-e),c=h===100&&i===100,b=h<i,S=h<=i&&e>o;(b||S||c)&&(a=l,i=h)}}),a}function ue(e,i){e.type==="mouseout"&&e.target.nodeName==="HTML"&&e.relatedTarget===null&&st(e,i)}function fe(e,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&e.buttons===0&&i.buttonsProperty!==0)return st(e,i);var a=(t.dir?-1:1)*(e.calcPoint-i.startCalcPoint),n=a*100/i.baseSize;_t(a>0,n,i.locations,i.handleNumbers,i.connect)}function st(e,i){i.handle&&(J(i.handle,t.cssClasses.active),et-=1),i.listeners.forEach(function(a){$.removeEventListener(a[0],a[1])}),et===0&&(J(p,t.cssClasses.drag),ft(),e.cursor&&(X.style.cursor="",X.removeEventListener("selectstart",jt))),t.events.smoothSteps&&(i.handleNumbers.forEach(function(a){N(a,C[a],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(a){A("update",a)})),i.handleNumbers.forEach(function(a){A("change",a),A("set",a),A("end",a)})}function ot(e,i){if(!i.handleNumbers.some(rt)){var a;if(i.handleNumbers.length===1){var n=d[i.handleNumbers[0]];a=n.children[0],et+=1,D(a,t.cssClasses.active)}e.stopPropagation();var l=[],o=q(u.move,$,fe,{target:e.target,handle:a,connect:i.connect,listeners:l,startCalcPoint:e.calcPoint,baseSize:yt(),pageOffset:e.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:e.buttons,locations:C.slice()}),h=q(u.end,$,st,{target:e.target,handle:a,listeners:l,doNotReject:!0,handleNumbers:i.handleNumbers}),c=q("mouseout",$,ue,{target:e.target,handle:a,listeners:l,doNotReject:!0,handleNumbers:i.handleNumbers});l.push.apply(l,o.concat(h,c)),e.cursor&&(X.style.cursor=getComputedStyle(e.target).cursor,d.length>1&&D(p,t.cssClasses.drag),X.addEventListener("selectstart",jt,!1)),i.handleNumbers.forEach(function(b){A("start",b)})}}function ce(e){e.stopPropagation();var i=Pt(e.calcPoint),a=le(i);a!==!1&&(t.events.snap||Ft(p,t.cssClasses.tap,t.animationDuration),N(a,i,!0,!0),ft(),A("slide",a,!0),A("update",a,!0),t.events.snap?ot(e,{handleNumbers:[a]}):(A("change",a,!0),A("set",a,!0)))}function he(e){var i=Pt(e.calcPoint),a=m.getStep(i),n=m.fromStepping(a);Object.keys(j).forEach(function(l){l.split(".")[0]==="hover"&&j[l].forEach(function(o){o.call(G,n)})})}function de(e,i){if(Et()||rt(i))return!1;var a=["Left","Right"],n=["Down","Up"],l=["PageDown","PageUp"],o=["Home","End"];t.dir&&!t.ort?a.reverse():t.ort&&!t.dir&&(n.reverse(),l.reverse());var h=e.key.replace("Arrow",""),c=h===l[0],b=h===l[1],S=h===n[0]||h===a[0]||c,w=h===n[1]||h===a[1]||b,E=h===o[0],g=h===o[1];if(!S&&!w&&!E&&!g)return!0;e.preventDefault();var y;if(w||S){var k=S?0:1,_=Ut(i),V=_[k];if(V===null)return!1;V===!1&&(V=m.getDefaultStep(C[i],S,t.keyboardDefaultStep)),b||c?V*=t.keyboardPageMultiplier:V*=t.keyboardMultiplier,V=Math.max(V,1e-7),V=(S?-1:1)*V,y=z[i]+V}else g?y=t.spectrum.xVal[t.spectrum.xVal.length-1]:y=t.spectrum.xVal[0];return N(i,m.toStepping(y),!0,!0),A("slide",i),A("update",i),A("change",i),A("set",i),!1}function pe(e){e.fixed||d.forEach(function(i,a){q(u.start,i.children[0],ot,{handleNumbers:[a]})}),e.tap&&q(u.start,x,ce,{}),e.hover&&q(u.move,x,he,{hover:!0}),e.drag&&M.forEach(function(i,a){if(!(i===!1||a===0||a===M.length-1)){var n=d[a-1],l=d[a],o=[i],h=[n,l],c=[a-1,a];D(i,t.cssClasses.draggable),e.fixed&&(o.push(n.children[0]),o.push(l.children[0])),e.dragAll&&(h=d,c=L),o.forEach(function(b){q(u.start,b,ot,{handles:h,handleNumbers:c,connect:i})})}})}function lt(e,i){j[e]=j[e]||[],j[e].push(i),e.split(".")[0]==="update"&&d.forEach(function(a,n){A("update",n)})}function ve(e){return e===R.aria||e===R.tooltips}function K(e){var i=e&&e.split(".")[0],a=i?e.substring(i.length):e;Object.keys(j).forEach(function(n){var l=n.split(".")[0],o=n.substring(l.length);(!i||i===l)&&(!a||a===o)&&(!ve(o)||a===o)&&delete j[n]})}function A(e,i,a){Object.keys(j).forEach(function(n){var l=n.split(".")[0];e===l&&j[n].forEach(function(o){o.call(G,z.map(t.format.to),i,z.slice(),a||!1,C.slice(),G)})})}function Y(e,i,a,n,l,o,h){var c;return d.length>1&&!t.events.unconstrained&&(n&&i>0&&(c=m.getAbsoluteDistance(e[i-1],t.margin,!1),a=Math.max(a,c)),l&&i<d.length-1&&(c=m.getAbsoluteDistance(e[i+1],t.margin,!0),a=Math.min(a,c))),d.length>1&&t.limit&&(n&&i>0&&(c=m.getAbsoluteDistance(e[i-1],t.limit,!1),a=Math.min(a,c)),l&&i<d.length-1&&(c=m.getAbsoluteDistance(e[i+1],t.limit,!0),a=Math.max(a,c))),t.padding&&(i===0&&(c=m.getAbsoluteDistance(0,t.padding[0],!1),a=Math.max(a,c)),i===d.length-1&&(c=m.getAbsoluteDistance(100,t.padding[1],!0),a=Math.min(a,c))),h||(a=m.getStep(a)),a=Rt(a),a===e[i]&&!o?!1:a}function ut(e,i){var a=t.ort;return(a?i:e)+", "+(a?e:i)}function _t(e,i,a,n,l){var o=a.slice(),h=n[0],c=t.events.smoothSteps,b=[!e,e],S=[e,!e];n=n.slice(),e&&n.reverse(),n.length>1?n.forEach(function(E,g){var y=Y(o,E,o[E]+i,b[g],S[g],!1,c);y===!1?i=0:(i=y-o[E],o[E]=y)}):b=S=[!0];var w=!1;n.forEach(function(E,g){w=N(E,a[E]+i,b[g],S[g],!1,c)||w}),w&&(n.forEach(function(E){A("update",E),A("slide",E)}),l!=null&&A("drag",h))}function Vt(e,i){return t.dir?100-e-i:e}function me(e,i){C[e]=i,z[e]=m.fromStepping(i);var a=Vt(i,0)-Gt,n="translate("+ut(a+"%","0")+")";d[e].style[t.transformRule]=n,kt(e),kt(e+1)}function ft(){L.forEach(function(e){var i=C[e]>50?-1:1,a=3+(d.length+i*e);d[e].style.zIndex=String(a)})}function N(e,i,a,n,l,o){return l||(i=Y(C,e,i,a,n,!1,o)),i===!1?!1:(me(e,i),!0)}function kt(e){if(M[e]){var i=0,a=100;e!==0&&(i=C[e-1]),e!==M.length-1&&(a=C[e]);var n=a-i,l="translate("+ut(Vt(i,n)+"%","0")+")",o="scale("+ut(n/100,"1")+")";M[e].style[t.transformRule]=l+" "+o}}function Dt(e,i){return e===null||e===!1||e===void 0||(typeof e=="number"&&(e=String(e)),e=t.format.from(e),e!==!1&&(e=m.toStepping(e)),e===!1||isNaN(e))?C[i]:e}function W(e,i,a){var n=Q(e),l=C[0]===void 0;i=i===void 0?!0:i,t.animate&&!l&&Ft(p,t.cssClasses.tap,t.animationDuration),L.forEach(function(c){N(c,Dt(n[c],c),!0,!1,a)});var o=L.length===1?0:1;if(l&&m.hasNoSize()&&(a=!0,C[0]=0,L.length>1)){var h=100/(L.length-1);L.forEach(function(c){C[c]=c*h})}for(;o<L.length;++o)L.forEach(function(c){N(c,C[c],!0,!0,a)});ft(),L.forEach(function(c){A("update",c),n[c]!==null&&i&&A("set",c)})}function ge(e){W(t.start,e)}function Se(e,i,a,n){if(e=Number(e),!(e>=0&&e<L.length))throw new Error("noUiSlider: invalid handle number, got: "+e);N(e,Dt(i,e),!0,!0,n),A("update",e),a&&A("set",e)}function Mt(e){if(e===void 0&&(e=!1),e)return z.length===1?z[0]:z.slice(0);var i=z.map(t.format.to);return i.length===1?i[0]:i}function be(){for(K(R.aria),K(R.tooltips),Object.keys(t.cssClasses).forEach(function(e){J(p,t.cssClasses[e])});p.firstChild;)p.removeChild(p.firstChild);delete p.noUiSlider}function Ut(e){var i=C[e],a=m.getNearbySteps(i),n=z[e],l=a.thisStep.step,o=null;if(t.snap)return[n-a.stepBefore.startValue||null,a.stepAfter.startValue-n||null];l!==!1&&n+l>a.stepAfter.startValue&&(l=a.stepAfter.startValue-n),n>a.thisStep.startValue?o=a.thisStep.step:a.stepBefore.step===!1?o=!1:o=n-a.stepBefore.highestStep,i===100?l=null:i===0&&(o=null);var h=m.countStepDecimals();return l!==null&&l!==!1&&(l=Number(l.toFixed(h))),o!==null&&o!==!1&&(o=Number(o.toFixed(h))),[o,l]}function xe(){return L.map(Ut)}function we(e,i){var a=Mt(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(o){e[o]!==void 0&&(s[o]=e[o])});var l=Xt(s);n.forEach(function(o){e[o]!==void 0&&(t[o]=l[o])}),m=l.spectrum,t.margin=l.margin,t.limit=l.limit,t.padding=l.padding,t.pips?nt(t.pips):at(),t.tooltips?Ct():it(),C=[],W(gt(e.start)?e.start:a,i)}function Ee(){x=Qt(p),Zt(t.connect,x),pe(t.events),W(t.start),t.pips&&nt(t.pips),t.tooltips&&Ct(),ie()}Ee();var G={destroy:be,steps:xe,on:lt,off:K,get:Mt,set:W,setHandle:Se,reset:ge,disable:ee,enable:re,__moveHandles:function(e,i,a){_t(e,i,C,a)},options:s,updateOptions:we,target:p,removePips:at,removeTooltips:it,getPositions:function(){return C.slice()},getTooltips:function(){return P},getOrigins:function(){return d},pips:nt};return G}function ur(r,t){if(!r||!r.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+r);if(r.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var s=Xt(t),u=lr(r,s,t);return r.noUiSlider=u,u}const fr={__spectrum:Kt,cssClasses:Tt,create:ur};class tt{accordion;header;content;constructor(t){this.accordion=document.querySelector(`.${t}`),this.header=this.accordion.querySelector(".accordion__header"),this.content=this.accordion.querySelector(".accordion__content"),this.activateAccordion()}activateAccordion(){this.header.addEventListener("click",()=>this.playAccordion())}playAccordion(){this.accordion.classList.toggle("accordion_active"),this.content.style.maxHeight!=""?this.content.style.maxHeight="":this.content.style.maxHeight=this.content.scrollHeight+"px"}}const vt=document.querySelector(".calibration-pop-up"),qt=document.querySelector(".overlay");let mt;vt&&qt&&(mt=new Ce(vt,qt),mt.open(),vt.querySelector("#start-calibration")?.addEventListener("click",()=>mt.close()));//! ----- Для прикладу----
const Yt={find:()=>{console.log("find")},create:()=>{console.log("create")}};//!-----------------------------
new bt("match-page__filters",Yt);new Nt("match-page__filters");new bt("match-page__content",Yt);new Nt("match-page__content");const cr=["grid","table"],hr=()=>{console.log("Hello!")},dr=new Ae(cr,hr);new bt("content__sorting-block",dr.createObj());new tt("find-lobby__rate-filter");new tt("find-lobby__maps-filter");new tt("find-lobby__game-mode-filter");new tt("find-lobby__region-filter");let Wt=document.querySelector(".rate-filter__slider");fr.create(Wt,{start:[20,80],connect:!0,range:{min:0,max:100}});const pr=document.querySelector(".rate-filter__lower-slider-output"),vr=document.querySelector(".rate-filter__upper-slider-output");Wt.noUiSlider?.on("update",function(r,t){t?vr.innerHTML=`$ ${r[t]}`:pr.innerHTML=`$ ${r[t]}`});