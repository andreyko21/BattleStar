import"./jquery-e7e79cb6.js";import{S as $,g as Oe,r as I,e as Yt,f as Jt,h as Zt,i as ea,s as ce,j as nt,k as lt,C as ta,l as aa,m as ra,n as sa,o as ot,p as ia,H as na}from"./header-ecea2ca1.js";import{A as la}from"./sidebar-dbb7e2e7.js";import{B as X,C as oa}from"./tabs-de2cbcb3.js";import{L as de}from"./lava-lamp-63313dfc.js";import{O as ca,M as da,a as ua,S as ct}from"./sorting-block-da8d7c94.js";import{J as fa}from"./just-validate.es-936cb47b.js";class Z{accordion;header;content;constructor(e){this.accordion=document.querySelector(`.${e}`),this.header=this.accordion.querySelector(".accordion__header"),this.content=this.accordion.querySelector(".accordion__content"),this.activateAccordion()}activateAccordion(){this.header.addEventListener("click",()=>this.playAccordion())}playAccordion(){this.accordion.classList.toggle("accordion_active"),this.content.style.maxHeight!=""?this.content.style.maxHeight="":this.content.style.maxHeight=this.content.scrollHeight+"px"}}class ee{container;nameGroup;span;options;type;constructor(e,t,s=null,n="",c="radio"){this.container=document.querySelector(`#${s}`),this.nameGroup=e,this.span=n,this.options=t,this.type=c,this.render()}createBtnRadio(){return this.options.reduce((t,s,n)=>(t+=`
      <div class="btn-radio">
         <input  
            class="btn-radio__input"
            id="${this.nameGroup}${n+1}" 
            name="${this.nameGroup}" 
            type=${this.type}
            value="${s.value}" 
            ${n===0&&this.type==="radio"?"checked":""}
         />
         <label 
            class="btn-radio__label" 
            for="${this.nameGroup}${n+1}"
         >
            <div>${s.label}&nbsp;</div>
            <span>${this.span}</span>
        </label>
      </div>`,t),"")}render(){this.container&&(this.container.innerHTML=this.createBtnRadio())}}class dt{container;radioBtnHtml;constructor(e,t){this.container=document.querySelector(`#${e}`),this.radioBtnHtml=new ee("rate-selected",t,null,"BS"),this.render(),this.valueSelected()}render(){const e=`
         <div class="rate-selected__title create-lobby__title"> Ставка </div>
         <laberl class="entering-rate rate-selected__rate-input text-input text-input_rate">
            <input
               type="text"
               class="entering-rate__input"
               name="rate-input"
               id="rate-input"
               placeholder="Свое значение"
               min="100" max="99900"
            />
            <span class="entering-rate__label-span">BS</span>
         </laberl>
         <div class="rate-selected__wrapper-btns" id="rate-selected-wrapper">
            ${this.radioBtnHtml.createBtnRadio()}
         </div>
      `,t=document.createElement("div");t.classList.add("rate-selected","create-lobby__rate-selected"),t.innerHTML=e,this.container?.prepend(t)}valueSelected(){const e=document.querySelectorAll('input[id^="rate-selected"]'),t=document.querySelector("#rate-input");e.forEach(s=>{s.addEventListener("change",()=>{t!==null&&(t.value="")})}),t?.addEventListener("input",()=>{let s=t.value;t.value=s.replace(/[^0-9]/g,"").substring(0,6),s&&e.forEach(n=>n.checked=!1)})}}class ut{container;constructor(e){if(this.container=document.querySelector(`#${e}`),!this.container)throw new Error(`Container with id #${e} not found.`);this.render()}render(){const e=`
    <div class="create-lobby__title"> Лобби </div>
    <label
      class="create-lobby__name-input-label text-input text-input_name-lobby"
    >
      <input
        type="text"
        class="create-lobby__name-input"
        name="name-lobby"
        placeholder="*Введите название лобби"
      />
    </label>
      `,t=document.createElement("div");t.classList.add("create-lobby__title-block"),t.innerHTML=e,this.container?.prepend(t)}}class ue{container;nameGroup;options;type;constructor(e,t,s=null,n="checkbox"){this.container=document.querySelector(`#${s}`),this.nameGroup=e,this.options=t,this.type=n,this.render()}createChecboxes(){return this.options.reduce((t,s,n)=>(t+=`
       <div class="custom-checkbox">
         <input
            type="${this.type}"
            name="${this.nameGroup}"
            id="${this.nameGroup}${n+1}"
            class="custom-checkbox__input"
            value="${s.value}" 
            ${s.checked?"checked":""}
         />
         <label for="${this.nameGroup}${n+1}" class="custom-checkbox__label">
            <svg>
            <use xlink:href="${$}#check-mark"></use>
            </svg>
         </label>
         <label for="${this.nameGroup}${n+1}" class="custom-checkbox__label-text">
            ${s.label}
         </label>
      </div>
       `,t),"")}render(){this.container&&(this.container.innerHTML=this.createChecboxes())}}var B;(function(a){a.Range="range",a.Steps="steps",a.Positions="positions",a.Count="count",a.Values="values"})(B||(B={}));var j;(function(a){a[a.None=-1]="None",a[a.NoValue=0]="NoValue",a[a.LargeValue=1]="LargeValue",a[a.SmallValue=2]="SmallValue"})(j||(j={}));function ha(a){return oe(a)&&typeof a.from=="function"}function oe(a){return typeof a=="object"&&typeof a.to=="function"}function et(a){a.parentElement.removeChild(a)}function Ee(a){return a!=null}function tt(a){a.preventDefault()}function ba(a){return a.filter(function(e){return this[e]?!1:this[e]=!0},{})}function ma(a,e){return Math.round(a/e)*e}function pa(a,e){var t=a.getBoundingClientRect(),s=a.ownerDocument,n=s.documentElement,c=ft(s);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(c.x=0),e?t.top+c.y-n.clientTop:t.left+c.x-n.clientLeft}function R(a){return typeof a=="number"&&!isNaN(a)&&isFinite(a)}function at(a,e,t){t>0&&(H(a,e),setTimeout(function(){le(a,e)},t))}function rt(a){return Math.max(Math.min(a,100),0)}function fe(a){return Array.isArray(a)?a:[a]}function va(a){a=String(a);var e=a.split(".");return e.length>1?e[1].length:0}function H(a,e){a.classList&&!/\s/.test(e)?a.classList.add(e):a.className+=" "+e}function le(a,e){a.classList&&!/\s/.test(e)?a.classList.remove(e):a.className=a.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function ga(a,e){return a.classList?a.classList.contains(e):new RegExp("\\b"+e+"\\b").test(a.className)}function ft(a){var e=window.pageXOffset!==void 0,t=(a.compatMode||"")==="CSS1Compat",s=e?window.pageXOffset:t?a.documentElement.scrollLeft:a.body.scrollLeft,n=e?window.pageYOffset:t?a.documentElement.scrollTop:a.body.scrollTop;return{x:s,y:n}}function _a(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function ya(){var a=!1;try{var e=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,e)}catch{}return a}function wa(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Me(a,e){return 100/(e-a)}function Pe(a,e,t){return e*100/(a[t+1]-a[t])}function Sa(a,e){return Pe(a,a[0]<0?e+Math.abs(a[0]):e-a[0],0)}function ka(a,e){return e*(a[1]-a[0])/100+a[0]}function ae(a,e){for(var t=1;a>=e[t];)t+=1;return t}function Ca(a,e,t){if(t>=a.slice(-1)[0])return 100;var s=ae(t,a),n=a[s-1],c=a[s],f=e[s-1],p=e[s];return f+Sa([n,c],t)/Me(f,p)}function xa(a,e,t){if(t>=100)return a.slice(-1)[0];var s=ae(t,e),n=a[s-1],c=a[s],f=e[s-1],p=e[s];return ka([n,c],(t-f)*Me(f,p))}function Ea(a,e,t,s){if(s===100)return s;var n=ae(s,a),c=a[n-1],f=a[n];return t?s-c>(f-c)/2?f:c:e[n-1]?a[n-1]+ma(s-a[n-1],e[n-1]):s}var ht=function(){function a(e,t,s){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[s||!1],this.xNumSteps=[!1],this.snap=t;var n,c=[];for(Object.keys(e).forEach(function(f){c.push([fe(e[f]),f])}),c.sort(function(f,p){return f[0][0]-p[0][0]}),n=0;n<c.length;n++)this.handleEntryPoint(c[n][1],c[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}return a.prototype.getDistance=function(e){for(var t=[],s=0;s<this.xNumSteps.length-1;s++)t[s]=Pe(this.xVal,e,s);return t},a.prototype.getAbsoluteDistance=function(e,t,s){var n=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[n+1];)n++;else e===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);!s&&e===this.xPct[n+1]&&n++,t===null&&(t=[]);var c,f=1,p=t[n],b=0,x=0,O=0,y=0;for(s?c=(e-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):c=(this.xPct[n+1]-e)/(this.xPct[n+1]-this.xPct[n]);p>0;)b=this.xPct[n+1+y]-this.xPct[n+y],t[n+y]*f+100-c*100>100?(x=b*c,f=(p-100*c)/t[n+y],c=1):(x=t[n+y]*b/100*f,f=0),s?(O=O-x,this.xPct.length+y>=1&&y--):(O=O+x,this.xPct.length-y>=1&&y++),p=t[n+y]*f;return e+O},a.prototype.toStepping=function(e){return e=Ca(this.xVal,this.xPct,e),e},a.prototype.fromStepping=function(e){return xa(this.xVal,this.xPct,e)},a.prototype.getStep=function(e){return e=Ea(this.xPct,this.xSteps,this.snap,e),e},a.prototype.getDefaultStep=function(e,t,s){var n=ae(e,this.xPct);return(e===100||t&&e===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/s},a.prototype.getNearbySteps=function(e){var t=ae(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},a.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(va);return Math.max.apply(null,e)},a.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},a.prototype.convert=function(e){return this.getStep(this.toStepping(e))},a.prototype.handleEntryPoint=function(e,t){var s;if(e==="min"?s=0:e==="max"?s=100:s=parseFloat(e),!R(s)||!R(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(s),this.xVal.push(t[0]);var n=Number(t[1]);s?this.xSteps.push(isNaN(n)?!1:n):isNaN(n)||(this.xSteps[0]=n),this.xHighestCompleteStep.push(0)},a.prototype.handleStepPoint=function(e,t){if(t){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=Pe([this.xVal[e],this.xVal[e+1]],t,0)/Me(this.xPct[e],this.xPct[e+1]);var s=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],n=Math.ceil(Number(s.toFixed(3))-1),c=this.xVal[e]+this.xNumSteps[e]*n;this.xHighestCompleteStep[e]=c}},a}(),st={to:function(a){return a===void 0?"":a.toFixed(2)},from:Number},bt={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},N={tooltips:".__tooltips",aria:".__aria"};function Pa(a,e){if(!R(e))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=e}function Oa(a,e){if(!R(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");a.keyboardPageMultiplier=e}function Ma(a,e){if(!R(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");a.keyboardMultiplier=e}function Da(a,e){if(!R(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");a.keyboardDefaultStep=e}function Aa(a,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");a.spectrum=new ht(e,a.snap||!1,a.singleStep)}function La(a,e){if(e=fe(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");a.handles=e.length,a.start=e}function Ha(a,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");a.snap=e}function ja(a,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");a.animate=e}function $a(a,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");a.animationDuration=e}function Va(a,e){var t=[!1],s;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(s=1;s<a.handles;s++)t.push(e);t.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==a.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");t=e}a.connect=t}function Fa(a,e){switch(e){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function mt(a,e){if(!R(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(a.margin=a.spectrum.getDistance(e))}function Ra(a,e){if(!R(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getDistance(e),!a.limit||a.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function Ta(a,e){var t;if(!R(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||R(e[0])||R(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),a.padding=[a.spectrum.getDistance(e[0]),a.spectrum.getDistance(e[1])],t=0;t<a.spectrum.xNumSteps.length-1;t++)if(a.padding[0][t]<0||a.padding[1][t]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var s=e[0]+e[1],n=a.spectrum.xVal[0],c=a.spectrum.xVal[a.spectrum.xVal.length-1];if(s/(c-n)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function qa(a,e){switch(e){case"ltr":a.dir=0;break;case"rtl":a.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function Ua(a,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var t=e.indexOf("tap")>=0,s=e.indexOf("drag")>=0,n=e.indexOf("fixed")>=0,c=e.indexOf("snap")>=0,f=e.indexOf("hover")>=0,p=e.indexOf("unconstrained")>=0,b=e.indexOf("drag-all")>=0,x=e.indexOf("smooth-steps")>=0;if(n){if(a.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");mt(a,a.start[1]-a.start[0])}if(p&&(a.margin||a.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");a.events={tap:t||c,drag:s,dragAll:b,smoothSteps:x,fixed:n,snap:c,hover:f,unconstrained:p}}function Na(a,e){if(e!==!1)if(e===!0||oe(e)){a.tooltips=[];for(var t=0;t<a.handles;t++)a.tooltips.push(e)}else{if(e=fe(e),e.length!==a.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(s){if(typeof s!="boolean"&&!oe(s))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),a.tooltips=e}}function Ba(a,e){if(e.length!==a.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");a.handleAttributes=e}function Ia(a,e){if(!oe(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");a.ariaFormat=e}function Ga(a,e){if(!ha(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");a.format=e}function za(a,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");a.keyboardSupport=e}function Ka(a,e){a.documentElement=e}function Xa(a,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");a.cssPrefix=e}function Qa(a,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof a.cssPrefix=="string"?(a.cssClasses={},Object.keys(e).forEach(function(t){a.cssClasses[t]=a.cssPrefix+e[t]})):a.cssClasses=e}function pt(a){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:st,format:st},t={step:{r:!1,t:Pa},keyboardPageMultiplier:{r:!1,t:Oa},keyboardMultiplier:{r:!1,t:Ma},keyboardDefaultStep:{r:!1,t:Da},start:{r:!0,t:La},connect:{r:!0,t:Va},direction:{r:!0,t:qa},snap:{r:!1,t:Ha},animate:{r:!1,t:ja},animationDuration:{r:!1,t:$a},range:{r:!0,t:Aa},orientation:{r:!1,t:Fa},margin:{r:!1,t:mt},limit:{r:!1,t:Ra},padding:{r:!1,t:Ta},behaviour:{r:!0,t:Ua},ariaFormat:{r:!1,t:Ia},format:{r:!1,t:Ga},tooltips:{r:!1,t:Na},keyboardSupport:{r:!0,t:za},documentElement:{r:!1,t:Ka},cssPrefix:{r:!0,t:Xa},cssClasses:{r:!0,t:Qa},handleAttributes:{r:!1,t:Ba}},s={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:bt,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};a.format&&!a.ariaFormat&&(a.ariaFormat=a.format),Object.keys(t).forEach(function(b){if(!Ee(a[b])&&s[b]===void 0){if(t[b].r)throw new Error("noUiSlider: '"+b+"' is required.");return}t[b].t(e,Ee(a[b])?a[b]:s[b])}),e.pips=a.pips;var n=document.createElement("div"),c=n.style.msTransform!==void 0,f=n.style.transform!==void 0;e.transformRule=f?"transform":c?"msTransform":"webkitTransform";var p=[["left","top"],["right","bottom"]];return e.style=p[e.dir][e.ort],e}function Wa(a,e,t){var s=_a(),n=wa(),c=n&&ya(),f=a,p,b,x,O,y,v=e.spectrum,F=[],w=[],M=[],G=0,V={},U=a.ownerDocument,Q=e.documentElement||U.documentElement,re=U.body,Ct=U.dir==="rtl"||e.ort===1?0:100;function q(r,i){var l=U.createElement("div");return i&&H(l,i),r.appendChild(l),l}function xt(r,i){var l=q(r,e.cssClasses.origin),o=q(l,e.cssClasses.handle);if(q(o,e.cssClasses.touchArea),o.setAttribute("data-handle",String(i)),e.keyboardSupport&&(o.setAttribute("tabindex","0"),o.addEventListener("keydown",function(d){return Ut(d,i)})),e.handleAttributes!==void 0){var u=e.handleAttributes[i];Object.keys(u).forEach(function(d){o.setAttribute(d,u[d])})}return o.setAttribute("role","slider"),o.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),i===0?H(o,e.cssClasses.handleLower):i===e.handles-1&&H(o,e.cssClasses.handleUpper),l.handle=o,l}function Te(r,i){return i?q(r,e.cssClasses.connect):!1}function Et(r,i){var l=q(i,e.cssClasses.connects);b=[],x=[],x.push(Te(l,r[0]));for(var o=0;o<e.handles;o++)b.push(xt(i,o)),M[o]=o,x.push(Te(l,r[o+1]))}function Pt(r){H(r,e.cssClasses.target),e.dir===0?H(r,e.cssClasses.ltr):H(r,e.cssClasses.rtl),e.ort===0?H(r,e.cssClasses.horizontal):H(r,e.cssClasses.vertical);var i=getComputedStyle(r).direction;return i==="rtl"?H(r,e.cssClasses.textDirectionRtl):H(r,e.cssClasses.textDirectionLtr),q(r,e.cssClasses.base)}function Ot(r,i){return!e.tooltips||!e.tooltips[i]?!1:q(r.firstChild,e.cssClasses.tooltip)}function qe(){return f.hasAttribute("disabled")}function he(r){var i=b[r];return i.hasAttribute("disabled")}function Mt(r){r!=null?(b[r].setAttribute("disabled",""),b[r].handle.removeAttribute("tabindex")):(f.setAttribute("disabled",""),b.forEach(function(i){i.handle.removeAttribute("tabindex")}))}function Dt(r){r!=null?(b[r].removeAttribute("disabled"),b[r].handle.setAttribute("tabindex","0")):(f.removeAttribute("disabled"),b.forEach(function(i){i.removeAttribute("disabled"),i.handle.setAttribute("tabindex","0")}))}function be(){y&&(te("update"+N.tooltips),y.forEach(function(r){r&&et(r)}),y=null)}function Ue(){be(),y=b.map(Ot),_e("update"+N.tooltips,function(r,i,l){if(!(!y||!e.tooltips)&&y[i]!==!1){var o=r[i];e.tooltips[i]!==!0&&(o=e.tooltips[i].to(l[i])),y[i].innerHTML=o}})}function At(){te("update"+N.aria),_e("update"+N.aria,function(r,i,l,o,u){M.forEach(function(d){var m=b[d],h=se(w,d,0,!0,!0,!0),S=se(w,d,100,!0,!0,!0),_=u[d],k=String(e.ariaFormat.to(l[d]));h=v.fromStepping(h).toFixed(1),S=v.fromStepping(S).toFixed(1),_=v.fromStepping(_).toFixed(1),m.children[0].setAttribute("aria-valuemin",h),m.children[0].setAttribute("aria-valuemax",S),m.children[0].setAttribute("aria-valuenow",_),m.children[0].setAttribute("aria-valuetext",k)})})}function Lt(r){if(r.mode===B.Range||r.mode===B.Steps)return v.xVal;if(r.mode===B.Count){if(r.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var i=r.values-1,l=100/i,o=[];i--;)o[i]=i*l;return o.push(100),Ne(o,r.stepped)}return r.mode===B.Positions?Ne(r.values,r.stepped):r.mode===B.Values?r.stepped?r.values.map(function(u){return v.fromStepping(v.getStep(v.toStepping(u)))}):r.values:[]}function Ne(r,i){return r.map(function(l){return v.fromStepping(i?v.getStep(l):l)})}function Ht(r){function i(_,k){return Number((_+k).toFixed(7))}var l=Lt(r),o={},u=v.xVal[0],d=v.xVal[v.xVal.length-1],m=!1,h=!1,S=0;return l=ba(l.slice().sort(function(_,k){return _-k})),l[0]!==u&&(l.unshift(u),m=!0),l[l.length-1]!==d&&(l.push(d),h=!0),l.forEach(function(_,k){var C,g,P,L=_,D=l[k+1],A,Se,ke,Ce,Ye,xe,Je,Ze=r.mode===B.Steps;for(Ze&&(C=v.xNumSteps[k]),C||(C=D-L),D===void 0&&(D=L),C=Math.max(C,1e-7),g=L;g<=D;g=i(g,C)){for(A=v.toStepping(g),Se=A-S,Ye=Se/(r.density||1),xe=Math.round(Ye),Je=Se/xe,P=1;P<=xe;P+=1)ke=S+P*Je,o[ke.toFixed(5)]=[v.fromStepping(ke),0];Ce=l.indexOf(g)>-1?j.LargeValue:Ze?j.SmallValue:j.NoValue,!k&&m&&g!==D&&(Ce=0),g===D&&h||(o[A.toFixed(5)]=[g,Ce]),S=A}}),o}function jt(r,i,l){var o,u,d=U.createElement("div"),m=(o={},o[j.None]="",o[j.NoValue]=e.cssClasses.valueNormal,o[j.LargeValue]=e.cssClasses.valueLarge,o[j.SmallValue]=e.cssClasses.valueSub,o),h=(u={},u[j.None]="",u[j.NoValue]=e.cssClasses.markerNormal,u[j.LargeValue]=e.cssClasses.markerLarge,u[j.SmallValue]=e.cssClasses.markerSub,u),S=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],_=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];H(d,e.cssClasses.pips),H(d,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function k(g,P){var L=P===e.cssClasses.value,D=L?S:_,A=L?m:h;return P+" "+D[e.ort]+" "+A[g]}function C(g,P,L){if(L=i?i(P,L):L,L!==j.None){var D=q(d,!1);D.className=k(L,e.cssClasses.marker),D.style[e.style]=g+"%",L>j.NoValue&&(D=q(d,!1),D.className=k(L,e.cssClasses.value),D.setAttribute("data-value",String(P)),D.style[e.style]=g+"%",D.innerHTML=String(l.to(P)))}}return Object.keys(r).forEach(function(g){C(g,r[g][0],r[g][1])}),d}function me(){O&&(et(O),O=null)}function pe(r){me();var i=Ht(r),l=r.filter,o=r.format||{to:function(u){return String(Math.round(u))}};return O=f.appendChild(jt(i,l,o)),O}function Be(){var r=p.getBoundingClientRect(),i="offset"+["Width","Height"][e.ort];return e.ort===0?r.width||p[i]:r.height||p[i]}function z(r,i,l,o){var u=function(m){var h=$t(m,o.pageOffset,o.target||i);if(!h||qe()&&!o.doNotReject||ga(f,e.cssClasses.tap)&&!o.doNotReject||r===s.start&&h.buttons!==void 0&&h.buttons>1||o.hover&&h.buttons)return!1;c||h.preventDefault(),h.calcPoint=h.points[e.ort],l(h,o)},d=[];return r.split(" ").forEach(function(m){i.addEventListener(m,u,c?{passive:!0}:!1),d.push([m,u])}),d}function $t(r,i,l){var o=r.type.indexOf("touch")===0,u=r.type.indexOf("mouse")===0,d=r.type.indexOf("pointer")===0,m=0,h=0;if(r.type.indexOf("MSPointer")===0&&(d=!0),r.type==="mousedown"&&!r.buttons&&!r.touches)return!1;if(o){var S=function(C){var g=C.target;return g===l||l.contains(g)||r.composed&&r.composedPath().shift()===l};if(r.type==="touchstart"){var _=Array.prototype.filter.call(r.touches,S);if(_.length>1)return!1;m=_[0].pageX,h=_[0].pageY}else{var k=Array.prototype.find.call(r.changedTouches,S);if(!k)return!1;m=k.pageX,h=k.pageY}}return i=i||ft(U),(u||d)&&(m=r.clientX+i.x,h=r.clientY+i.y),r.pageOffset=i,r.points=[m,h],r.cursor=u||d,r}function Ie(r){var i=r-pa(p,e.ort),l=i*100/Be();return l=rt(l),e.dir?100-l:l}function Vt(r){var i=100,l=!1;return b.forEach(function(o,u){if(!he(u)){var d=w[u],m=Math.abs(d-r),h=m===100&&i===100,S=m<i,_=m<=i&&r>d;(S||_||h)&&(l=u,i=m)}}),l}function Ft(r,i){r.type==="mouseout"&&r.target.nodeName==="HTML"&&r.relatedTarget===null&&ve(r,i)}function Rt(r,i){if(navigator.appVersion.indexOf("MSIE 9")===-1&&r.buttons===0&&i.buttonsProperty!==0)return ve(r,i);var l=(e.dir?-1:1)*(r.calcPoint-i.startCalcPoint),o=l*100/i.baseSize;Ge(l>0,o,i.locations,i.handleNumbers,i.connect)}function ve(r,i){i.handle&&(le(i.handle,e.cssClasses.active),G-=1),i.listeners.forEach(function(l){Q.removeEventListener(l[0],l[1])}),G===0&&(le(f,e.cssClasses.drag),we(),r.cursor&&(re.style.cursor="",re.removeEventListener("selectstart",tt))),e.events.smoothSteps&&(i.handleNumbers.forEach(function(l){K(l,w[l],!0,!0,!1,!1)}),i.handleNumbers.forEach(function(l){E("update",l)})),i.handleNumbers.forEach(function(l){E("change",l),E("set",l),E("end",l)})}function ge(r,i){if(!i.handleNumbers.some(he)){var l;if(i.handleNumbers.length===1){var o=b[i.handleNumbers[0]];l=o.children[0],G+=1,H(l,e.cssClasses.active)}r.stopPropagation();var u=[],d=z(s.move,Q,Rt,{target:r.target,handle:l,connect:i.connect,listeners:u,startCalcPoint:r.calcPoint,baseSize:Be(),pageOffset:r.pageOffset,handleNumbers:i.handleNumbers,buttonsProperty:r.buttons,locations:w.slice()}),m=z(s.end,Q,ve,{target:r.target,handle:l,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers}),h=z("mouseout",Q,Ft,{target:r.target,handle:l,listeners:u,doNotReject:!0,handleNumbers:i.handleNumbers});u.push.apply(u,d.concat(m,h)),r.cursor&&(re.style.cursor=getComputedStyle(r.target).cursor,b.length>1&&H(f,e.cssClasses.drag),re.addEventListener("selectstart",tt,!1)),i.handleNumbers.forEach(function(S){E("start",S)})}}function Tt(r){r.stopPropagation();var i=Ie(r.calcPoint),l=Vt(i);l!==!1&&(e.events.snap||at(f,e.cssClasses.tap,e.animationDuration),K(l,i,!0,!0),we(),E("slide",l,!0),E("update",l,!0),e.events.snap?ge(r,{handleNumbers:[l]}):(E("change",l,!0),E("set",l,!0)))}function qt(r){var i=Ie(r.calcPoint),l=v.getStep(i),o=v.fromStepping(l);Object.keys(V).forEach(function(u){u.split(".")[0]==="hover"&&V[u].forEach(function(d){d.call(ne,o)})})}function Ut(r,i){if(qe()||he(i))return!1;var l=["Left","Right"],o=["Down","Up"],u=["PageDown","PageUp"],d=["Home","End"];e.dir&&!e.ort?l.reverse():e.ort&&!e.dir&&(o.reverse(),u.reverse());var m=r.key.replace("Arrow",""),h=m===u[0],S=m===u[1],_=m===o[0]||m===l[0]||h,k=m===o[1]||m===l[1]||S,C=m===d[0],g=m===d[1];if(!_&&!k&&!C&&!g)return!0;r.preventDefault();var P;if(k||_){var L=_?0:1,D=We(i),A=D[L];if(A===null)return!1;A===!1&&(A=v.getDefaultStep(w[i],_,e.keyboardDefaultStep)),S||h?A*=e.keyboardPageMultiplier:A*=e.keyboardMultiplier,A=Math.max(A,1e-7),A=(_?-1:1)*A,P=F[i]+A}else g?P=e.spectrum.xVal[e.spectrum.xVal.length-1]:P=e.spectrum.xVal[0];return K(i,v.toStepping(P),!0,!0),E("slide",i),E("update",i),E("change",i),E("set",i),!1}function Nt(r){r.fixed||b.forEach(function(i,l){z(s.start,i.children[0],ge,{handleNumbers:[l]})}),r.tap&&z(s.start,p,Tt,{}),r.hover&&z(s.move,p,qt,{hover:!0}),r.drag&&x.forEach(function(i,l){if(!(i===!1||l===0||l===x.length-1)){var o=b[l-1],u=b[l],d=[i],m=[o,u],h=[l-1,l];H(i,e.cssClasses.draggable),r.fixed&&(d.push(o.children[0]),d.push(u.children[0])),r.dragAll&&(m=b,h=M),d.forEach(function(S){z(s.start,S,ge,{handles:m,handleNumbers:h,connect:i})})}})}function _e(r,i){V[r]=V[r]||[],V[r].push(i),r.split(".")[0]==="update"&&b.forEach(function(l,o){E("update",o)})}function Bt(r){return r===N.aria||r===N.tooltips}function te(r){var i=r&&r.split(".")[0],l=i?r.substring(i.length):r;Object.keys(V).forEach(function(o){var u=o.split(".")[0],d=o.substring(u.length);(!i||i===u)&&(!l||l===d)&&(!Bt(d)||l===d)&&delete V[o]})}function E(r,i,l){Object.keys(V).forEach(function(o){var u=o.split(".")[0];r===u&&V[o].forEach(function(d){d.call(ne,F.map(e.format.to),i,F.slice(),l||!1,w.slice(),ne)})})}function se(r,i,l,o,u,d,m){var h;return b.length>1&&!e.events.unconstrained&&(o&&i>0&&(h=v.getAbsoluteDistance(r[i-1],e.margin,!1),l=Math.max(l,h)),u&&i<b.length-1&&(h=v.getAbsoluteDistance(r[i+1],e.margin,!0),l=Math.min(l,h))),b.length>1&&e.limit&&(o&&i>0&&(h=v.getAbsoluteDistance(r[i-1],e.limit,!1),l=Math.min(l,h)),u&&i<b.length-1&&(h=v.getAbsoluteDistance(r[i+1],e.limit,!0),l=Math.max(l,h))),e.padding&&(i===0&&(h=v.getAbsoluteDistance(0,e.padding[0],!1),l=Math.max(l,h)),i===b.length-1&&(h=v.getAbsoluteDistance(100,e.padding[1],!0),l=Math.min(l,h))),m||(l=v.getStep(l)),l=rt(l),l===r[i]&&!d?!1:l}function ye(r,i){var l=e.ort;return(l?i:r)+", "+(l?r:i)}function Ge(r,i,l,o,u){var d=l.slice(),m=o[0],h=e.events.smoothSteps,S=[!r,r],_=[r,!r];o=o.slice(),r&&o.reverse(),o.length>1?o.forEach(function(C,g){var P=se(d,C,d[C]+i,S[g],_[g],!1,h);P===!1?i=0:(i=P-d[C],d[C]=P)}):S=_=[!0];var k=!1;o.forEach(function(C,g){k=K(C,l[C]+i,S[g],_[g],!1,h)||k}),k&&(o.forEach(function(C){E("update",C),E("slide",C)}),u!=null&&E("drag",m))}function ze(r,i){return e.dir?100-r-i:r}function It(r,i){w[r]=i,F[r]=v.fromStepping(i);var l=ze(i,0)-Ct,o="translate("+ye(l+"%","0")+")";b[r].style[e.transformRule]=o,Ke(r),Ke(r+1)}function we(){M.forEach(function(r){var i=w[r]>50?-1:1,l=3+(b.length+i*r);b[r].style.zIndex=String(l)})}function K(r,i,l,o,u,d){return u||(i=se(w,r,i,l,o,!1,d)),i===!1?!1:(It(r,i),!0)}function Ke(r){if(x[r]){var i=0,l=100;r!==0&&(i=w[r-1]),r!==x.length-1&&(l=w[r]);var o=l-i,u="translate("+ye(ze(i,o)+"%","0")+")",d="scale("+ye(o/100,"1")+")";x[r].style[e.transformRule]=u+" "+d}}function Xe(r,i){return r===null||r===!1||r===void 0||(typeof r=="number"&&(r=String(r)),r=e.format.from(r),r!==!1&&(r=v.toStepping(r)),r===!1||isNaN(r))?w[i]:r}function ie(r,i,l){var o=fe(r),u=w[0]===void 0;i=i===void 0?!0:i,e.animate&&!u&&at(f,e.cssClasses.tap,e.animationDuration),M.forEach(function(h){K(h,Xe(o[h],h),!0,!1,l)});var d=M.length===1?0:1;if(u&&v.hasNoSize()&&(l=!0,w[0]=0,M.length>1)){var m=100/(M.length-1);M.forEach(function(h){w[h]=h*m})}for(;d<M.length;++d)M.forEach(function(h){K(h,w[h],!0,!0,l)});we(),M.forEach(function(h){E("update",h),o[h]!==null&&i&&E("set",h)})}function Gt(r){ie(e.start,r)}function zt(r,i,l,o){if(r=Number(r),!(r>=0&&r<M.length))throw new Error("noUiSlider: invalid handle number, got: "+r);K(r,Xe(i,r),!0,!0,o),E("update",r),l&&E("set",r)}function Qe(r){if(r===void 0&&(r=!1),r)return F.length===1?F[0]:F.slice(0);var i=F.map(e.format.to);return i.length===1?i[0]:i}function Kt(){for(te(N.aria),te(N.tooltips),Object.keys(e.cssClasses).forEach(function(r){le(f,e.cssClasses[r])});f.firstChild;)f.removeChild(f.firstChild);delete f.noUiSlider}function We(r){var i=w[r],l=v.getNearbySteps(i),o=F[r],u=l.thisStep.step,d=null;if(e.snap)return[o-l.stepBefore.startValue||null,l.stepAfter.startValue-o||null];u!==!1&&o+u>l.stepAfter.startValue&&(u=l.stepAfter.startValue-o),o>l.thisStep.startValue?d=l.thisStep.step:l.stepBefore.step===!1?d=!1:d=o-l.stepBefore.highestStep,i===100?u=null:i===0&&(d=null);var m=v.countStepDecimals();return u!==null&&u!==!1&&(u=Number(u.toFixed(m))),d!==null&&d!==!1&&(d=Number(d.toFixed(m))),[d,u]}function Xt(){return M.map(We)}function Qt(r,i){var l=Qe(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];o.forEach(function(d){r[d]!==void 0&&(t[d]=r[d])});var u=pt(t);o.forEach(function(d){r[d]!==void 0&&(e[d]=u[d])}),v=u.spectrum,e.margin=u.margin,e.limit=u.limit,e.padding=u.padding,e.pips?pe(e.pips):me(),e.tooltips?Ue():be(),w=[],ie(Ee(r.start)?r.start:l,i)}function Wt(){p=Pt(f),Et(e.connect,p),Nt(e.events),ie(e.start),e.pips&&pe(e.pips),e.tooltips&&Ue(),At()}Wt();var ne={destroy:Kt,steps:Xt,on:_e,off:te,get:Qe,set:ie,setHandle:zt,reset:Gt,disable:Mt,enable:Dt,__moveHandles:function(r,i,l){Ge(r,i,w,l)},options:t,updateOptions:Qt,target:f,removePips:me,removeTooltips:be,getPositions:function(){return w.slice()},getTooltips:function(){return y},getOrigins:function(){return b},pips:pe};return ne}function Ya(a,e){if(!a||!a.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+a);if(a.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var t=pt(e),s=Wa(a,t,e);return a.noUiSlider=s,s}const Ja={__spectrum:ht,cssClasses:bt,create:Ya};class De{MIN_RANGE=100;MAX_RANGE=99900;container;checkboxHtml;sliderValue=[this.MIN_RANGE,this.MAX_RANGE];allCheckbox;constructor(e,t){this.container=document.querySelector(`#${e}`),this.checkboxHtml=new ue("rate-filter",t,null),this.render(),this.defineStartingParams(),this.selectAllCheckbox(),this.initialSlider()}defineStartingParams(){const e=Oe("rate")?.split(",");e?.[0]==="between"&&(this.sliderValue=[+e?.[1],+e?.[2]])}render(){const e=`
    <div class="rate-filter__title-block accordion__header">
      <div class="rate-filter__title accordion__title"
        >Ставка</div
      >
      <svg
        class="rate-filter__accordion-arrow accordion__arrow"
      >
        <use
          xlink:href="${$}#arrow-down"
        ></use>
      </svg>
    </div>
    <div class="accordion__content rate-filter__content">
      <div class="rate-filter__slider-output-block">
        <div class="rate-filter__lower-slider-output"></div>
        <div class="rate-filter__upper-slider-output"></div>
      </div>
      <div class="rate-filter__slider" id="slider-round"></div>
      <div
        class="rate-filter__checkboxes"
        id="rate-filter-wrapper"
      >
      ${this.checkboxHtml.createChecboxes()}
      </div>
      <button class="rate-filter__button btn_yellow">
        <svg class="rate-filter__button-icon">
          <use
            xlink:href="${$}#auto-selction"
          ></use>
        </svg>
        <div class="rate-filter__button-text">
          Автоподбор матча
        </div>
      </button>
    </div>
      `,t=document.createElement("div");t.classList.add("find-lobby__rate-filter","rate-filter","accordion"),t.innerHTML=e,this.container?.append(t)}selectAllCheckbox(){this.allCheckbox=this.container?.querySelectorAll('input[id^="rate-filter"]')}initialSlider(){const e=this.allCheckbox;let t=document.querySelector(".rate-filter__slider");Ja.create(t,{start:[this.sliderValue[0],this.sliderValue[1]],connect:!0,range:{min:this.MIN_RANGE,max:this.MAX_RANGE},step:100,format:{from:function(c){return Number(c)},to:function(c){return Math.round(c)}}});const s=document.querySelector(".rate-filter__lower-slider-output"),n=document.querySelector(".rate-filter__upper-slider-output");t.noUiSlider?.on("update",function(c,f){f?n.innerHTML=`$ ${c[f]}`:s.innerHTML=`$ ${c[f]}`,e?.forEach(p=>{p.checked&&(p.checked=!1)})}),t.noUiSlider?.on("change",(c,f)=>{const p=new Event("changeRateSlider",{bubbles:!0});f?(this.sliderValue[0]=+`$ ${c[f]}`,s.dispatchEvent(p)):(this.sliderValue[1]=+`$ ${c[f]}`,n.dispatchEvent(p))}),e?.forEach(c=>{c.addEventListener("change",f=>{let p=t.noUiSlider?.get();const b=this.checkSelected(e);(p[0]!==this.MIN_RANGE||p[1]!==this.MAX_RANGE)&&b&&(t.noUiSlider?.set([this.MIN_RANGE,this.MAX_RANGE]),f.target.checked=!0)})})}checkSelected(e){return Array.from(e).find(s=>s.checked)!==void 0}getSliderValue(){return this.sliderValue}}class Za{container;nameGroup;options;type;constructor(e,t,s=null,n="checkbox"){this.container=document.querySelector(`#${s}`),this.nameGroup=e,this.options=t,this.type=n,this.render()}createChecboxes(){return this.options.reduce((t,s,n)=>(t+=`
      <div class="custom-checkbox">
        <input
         type="${this.type}"
         name="${this.nameGroup}"
         id="${this.nameGroup}${n+1}"
         class="custom-checkbox__input"
         value="${s.value}" 
        />
        <label for="${this.nameGroup}${n+1}" class="custom-checkbox__label">
          <svg>
            <use
              xlink:href="${$}#check-mark"
            ></use>
          </svg>
        </label>
        <label
          for="${this.nameGroup}${n+1}"
          class="custom-checkbox__label-text"
        >
          <img
            src=" ${s.img}"
            alt="Флаг ${s.label}"
            width="24"
            height="15"
          />
          <span> ${s.label}</span>
        </label>
      </div>
       `,t),"")}render(){this.container&&(this.container.innerHTML=this.createChecboxes())}}class Ae{filterContainer;constructor(e){if(this.filterContainer=document.querySelector(`#${e}`),!this.filterContainer)throw new Error(`Container with id #${e} not found.`);this.renderFilterContainer()}async renderCheckboxHtml(e){return new Za("country-filter",e,"region-filter-checkboxes-container").createChecboxes()}renderFilterContainer(){const e=`
   <div class="region-filter__title-block accordion__header">
     <div class="region-filter__title accordion__title"
       >Регион</div
     >
     <svg class="accordion__arrow">
       <use
         xlink:href="${$}#arrow-down"
       ></use>
     </svg>
   </div>
   <div class="region-filter__content accordion__content" id="region-filter-checkboxes-container"> 

   </div>
     `,t=document.createElement("div");t.classList.add("find-lobby__region-filter","region-filter","accordion"),t.innerHTML=e,this.filterContainer?.append(t)}async renderRadioBtnHtml(e){new ee("country-selected",e,"region-selected-btns").createBtnRadio()}async assembleFilter(e){await this.renderCheckboxHtml(e),new Z("find-lobby__region-filter")}async assembleSelected(e){this.renderRadioBtnHtml(e)}}class Le{container;checkboxHtml;constructor(e){this.container=document.querySelector(`#${e}`),this.checkboxHtml=new ue("antyCheat",[{value:"antiCheat",label:"Античит"}],null),this.render()}render(){const e=document.createElement("div");e.classList.add("find-lobby__anti-cheat","anti-cheat"),e.innerHTML=this.checkboxHtml.createChecboxes(),this.container?.append(e)}}class He{endpoint;constructor(e){this.endpoint=e}async getCheckboxesData(){try{const{maps:e}=await I(this.endpoint,Yt,{},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});if(e?.data)return e.data.map(t=>({id:t.id,label:t.attributes?.name,value:t.attributes?.name}))}catch(e){console.error(e)}return[]}}class je{container;constructor(e){if(this.container=document.querySelector(`#${e}`),!this.container)throw new Error(`Container with id #${e} not found.`);this.renderFilterContainer()}async renderCheckboxHtml(e){return new ue("mapName-filter",e,"map-filter-checkboxes-container").createChecboxes()}renderFilterContainer(){const e=`
   <div class="maps-filter__title-block accordion__header">
      <div class="maps-filter__title accordion__title"
      >Карты</div
      >
      <svg class="accordion__arrow">
      <use
         xlink:href="${$}#arrow-down"
      ></use>
      </svg>
   </div>
   <div class="maps-filter__content accordion__content" id = "map-filter-checkboxes-container">
   
   </div>
   `,t=document.createElement("div");t.classList.add("find-lobby__maps-filter","map-filter","accordion"),t.innerHTML=e,this.container?.append(t)}async assembleFilter(e){await this.renderCheckboxHtml(e),new Z("find-lobby__maps-filter")}}class vt{container;constructor(e){if(this.container=document.querySelector(`#${e}`),!this.container)throw new Error(`Container with id #${e} not found.`);this.renderSelectedContainer()}async renderRadioBtnHtml(e){new ee("map-selected",e,"map-selected-btns")}renderSelectedContainer(){const e=`
   <div class="map-selected__title create-lobby__title"> Карты </div>
   <div class="map-selected__wrapper-btns" id="map-selected-btns" >
      
   </div>
`,t=document.createElement("div");t.classList.add("map-selected-btns","create-lobby__map-selected"),t.innerHTML=e,this.container?.prepend(t)}async assembleFilter(e){const t=e.map(s=>({value:s.id,label:s.label}));await this.renderRadioBtnHtml(t)}}class $e{endpoint;constructor(e){this.endpoint=e}async getCheckboxesData(){try{const{countries:e}=await I(this.endpoint,Jt,{},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});if(console.log("end"),e?.data)return console.log(e.data),e.data.map(t=>({value:t.attributes?.name,label:t.attributes?.name,img:t.attributes?.flag.data?.attributes?.url}))}catch(e){console.error(e)}return[]}}class Ve{endpoint;constructor(e){this.endpoint=e}async getCheckboxesData(){try{const{csGameModes:e}=await I(this.endpoint,Zt,{},{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});if(e?.data)return e.data.map(t=>({id:t.id,label:t.attributes?.title,value:typeof t.attributes?.value=="number"?t.attributes?.value.toString():""}))}catch(e){console.error(e)}return[]}}class Fe{container;constructor(e){if(this.container=document.querySelector(`#${e}`),!this.container)throw new Error(`Container with id #${e} not found.`);this.renderFilterContainer()}async renderCheckboxHtml(e){const t=this.addCheck(e);new ue("gameMode-filter",t,"game-mode-filter-checkboxes-container").createChecboxes()}addCheck(e){console.log(e[0].value);const t=Oe("gameMode")?.split(","),s=[];return e.forEach((n,c)=>{s.push(n),t?.includes(n.value)&&(s[c].checked=!0)}),s}renderFilterContainer(){const e=`
   <div
     class="game-mode-filter__title-block accordion__header"
   >
     <div class="game-mode-filter__title accordion__title"
       >Режим игры</div
     >
     <svg class="accordion__arrow">
       <use
         xlink:href="${$}#arrow-down"
       ></use>
     </svg>
   </div>
   <div class="game-mode-filter__content accordion__content" id="game-mode-filter-checkboxes-container">

   </div>
     `,t=document.createElement("div");t.classList.add("find-lobby__game-mode-filter","game-mode-filter","accordion"),t.innerHTML=e,this.container?.append(t)}async assembleFilter(e){await this.renderCheckboxHtml(e),new Z("find-lobby__game-mode-filter")}}class gt{container;constructor(e){if(this.container=document.querySelector(`#${e}`),!this.container)throw new Error(`Container with id #${e} not found.`);this.renderSelectedContainer()}async renderCheckboxHtml(e){new ee("gameMode-selected",e,"game-mode-selected-btns")}renderSelectedContainer(){const e=`
   <div class="game-mode-selected__title create-lobby__title"> Режим игры </div>
   <div class="game-mode-selected__wrapper-btns" id="game-mode-selected-btns">
    
   </div>
`,t=document.createElement("div");t.classList.add("game-mode-selected","create-lobby__game-mode-selected"),t.innerHTML=e,this.container?.prepend(t)}async assembleFilter(e){const t=e.map(s=>({value:s.id,label:s.label}));await this.renderCheckboxHtml(t)}}const T={authorizationToken:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912",ENDPOINT:"https://battle-star-app.onrender.com/graphql"};class er{params;constructor(e){this.params=e,console.log("params",this.params)}async getData(){const e="https://battle-star-app.onrender.com/graphql";try{const{csLobbies:t}=await I(e,ea,this.params,{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});if(t?.data)return t.data.reduce((n,c)=>(n.push({id:c.id,nameMatch:c.attributes?.title,mode:c.attributes?.gameMode?.data?.attributes?.value.toString(),rate:c.attributes?.rate.toString(),flagSrc:c.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag?.data?.attributes?.url,region:c.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.name,imgSrc:c.attributes?.map?.data?.attributes?.logo?.data?.[0]?.attributes?.url,map:c.attributes?.map?.data?.attributes?.name,ping:c.attributes?.ping,participants:(c.attributes?.participant?.players?.data?.length||0).toString(),antyCheat:c.attributes?.antyCheat?.value}),n),[])}catch(t){console.error(t)}}}class _t{container;allCheckbox;allCheckboxesValues={};rateSliderHendles;timeoutUpdateContent;lobbyOpenning=new ca("open-lobby-pop-up","overlay","content-wrapper");filtersObj={country:[],rate:[],mapName:[],gameMode:[],antyCheat:[]};filters=[];filteredMatches=[];constructor(e){this.container=document.querySelector(`#${e}`),this.allCheckbox=this.container.querySelectorAll('input[type="checkbox"]'),this.rateSliderHendles=this.selectRateSliderHendles(),this.addEventHandler(),this.selectAllChaeckboxValue(),this.updateFiltersObject()}selectRateSliderHendles(){const e=document.querySelector(".rate-filter__lower-slider-output"),t=document.querySelector(".rate-filter__upper-slider-output");return[e,t]}addEventHandler(){this.allCheckbox?.forEach(e=>{e.addEventListener("change",t=>{this.changeFilters(t.target),this.addLocationParam()})}),this.rateSliderHendles.forEach(e=>{e.addEventListener("changeRateSlider",()=>{this.changeFilters("rateSlider"),this.addLocationParam()})})}addLocationParam(){for(const e in this.filtersObj)if(Object.prototype.hasOwnProperty.call(this.filtersObj,e)){const t=this.filtersObj[e];t!==null?ce(e,t?.join(",")):nt(e)}}runDelay(){window.clearTimeout(this.timeoutUpdateContent),this.timeoutUpdateContent=window.setTimeout(()=>this.updateContent(),1500)}updateFiltersObject(){for(const[e,t]of lt().entries()){const s=t.split(",");e==="rate"&&s[0]==="between"?this.filtersObj.rate=["between",s[1],s[2]]:this.allCheckbox!==null&&this.allCheckbox.forEach(n=>{const c=n.name.replace("-filter","");c===e&&s.includes(n.value)&&(n.checked=!0,c!=="rate"?this.filtersObj.rate?.push(n.value):this.filtersObj.rate?.length!==0?this.filtersObj.rate?.push(n.value):this.filtersObj.rate=["in",n.value])})}this.updateContent()}changeFilters(e){if(typeof e=="string")this.filtersObj.rate=["between",this.rateSliderHendles[0].innerHTML.slice(2),this.rateSliderHendles[1].innerHTML.slice(2)];else{const t=e.name.replace("-filter","");if(e.checked)t!=="rate"?this.filtersObj[t]?.push(e.value):this.filtersObj[t]?.length!==0&&this.filtersObj[t]?.[0]=="in"?this.filtersObj[t]?.push(e.value):this.filtersObj.rate=["in",e.value];else{const s=this.filtersObj[t]?.indexOf(e.value);s!==void 0&&(t==="rate"&&this.filtersObj[t]?.length===2?this.filtersObj[t].splice(0):this.filtersObj[t].splice(s,1))}}this.runDelay()}async updateContent(){const e=this.changeFiltersObj(),s=await new er(e).getData();s&&(new da("calibration-table",s,this.lobbyOpenning),new ua("calibration-grid",s,this.lobbyOpenning))}changeFiltersObj(){const e={country:this.filtersObj.country?.length===0?this.allCheckboxesValues.country:this.filtersObj.country,rate:{},map:this.filtersObj.mapName?.length===0?this.allCheckboxesValues.mapName:this.filtersObj.mapName,gameMode:[],antyCheat:this.filtersObj.antyCheat?.length!==0};return this.filtersObj.rate?.length===0?e.rate.between=[+this.rateSliderHendles[0].innerHTML.slice(1),+this.rateSliderHendles[1].innerHTML.slice(1)]:Array.isArray(this.filtersObj.rate)&&this.filtersObj.rate[0]=="in"&&(e.rate.in=this.filtersObj.rate?.reduce((t,s,n)=>(n!==0&&t.push(+s),t),[])),Array.isArray(this.filtersObj.rate)&&this.filtersObj.rate[0]=="between"&&(e.rate.between=[+this.filtersObj.rate[1],+this.filtersObj.rate[2]]),this.filtersObj.gameMode?.length===0?e.gameMode=this.allCheckboxesValues.gameMode.map(t=>Number(t)):this.filtersObj.gameMode&&(e.gameMode=this.filtersObj.gameMode?.map(t=>Number(t))),e}selectAllChaeckboxValue(){this.allCheckbox?.forEach(e=>{const t=e.name.replace("-filter","");this.allCheckboxesValues[t]&&!this.allCheckboxesValues[t].includes(e.value)?this.allCheckboxesValues[t].push(e.value):this.allCheckboxesValues[t]||(this.allCheckboxesValues[t]=[e.value])})}}class yt{validation;form;creatorData;params={title:null,creator:null,map:null,rate:null,gameMode:null,participant:[],ping:23,antyCheat:!0,public:"2023-12-25T10:15:30Z"};constructor(e,t){if(this.form=document.querySelector(`#${e}`),this.validation=new fa("#create-content",{validateBeforeSubmitting:!0}),!this.form)throw new Error(`Container with id #${e} not found.`);this.creatorData=t,this.initValidation()}sendRequest(){this.getMapData(),this.getRateData(),this.getGameModeData(),this.getTiteData(),this.getAntyCheatData(),this.getPingData(),this.getCreatorData(),this.getParticipanstData(),this.validation.isValid&&this.createRequest()}getCookie(e){const s=`; ${document.cookie}`.split(`; ${e}=`);return s.length===2?s.pop()?.split(";").shift():null}async createRequest(){const e="https://battle-star-app.onrender.com/graphql";try{const t=await I(e,ta,this.params,{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});console.log(t)}catch(t){console.error(t)}}getMapData(){this.form?.querySelectorAll("input[name='map-selected']")?.forEach(t=>{const s=t;s.checked&&(this.params.map=s.value)})}getRateData(){const e=this.form?.querySelectorAll("input[name='rate-selected']"),t=this.form?.querySelector("input[name='rate-input']");let s=null;e?.forEach(n=>{const c=n;c.checked&&(s=+c.value)}),s===null&&t!==void 0&&(s=Number.parseInt(t.value,10)),this.params.rate=s}getGameModeData(){this.form?.querySelectorAll("input[name='gameMode-selected']")?.forEach(t=>{const s=t;s.checked&&(this.params.gameMode=s.value)})}getTiteData(){const e=this.form?.querySelector("input[name='name-lobby']");e!==void 0&&(this.params.title=e.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")),console.log("params.title",this.params.title)}getAntyCheatData(){const e=this.form?.querySelector("input[name='create-anti-cheat']");this.params.antyCheat=e.checked}getPingData(){this.params.ping=Math.floor(Math.random()*300)}getCreatorData(){this.params.creator=this.creatorData.playerId}getParticipanstData(){this.params.participant&&this.params.participant?.push(this.creatorData.playerId)}initValidation(){this.validation.addField(".create-lobby__name-input",[{rule:"required",errorMessage:"Введіть назву лоббі"}]).addField("#rate-input",[{rule:"number"},{rule:"minNumber",value:100,errorMessage:"Введіть ставку від 100 до 999900"},{rule:"maxNumber",value:999900,errorMessage:"Введіть ставку від 100 до 999900"}]).onSuccess(()=>{console.log(this.validation.isValid),this.sendRequest()})}}async function it(a,e={},t,s="https://battle-star-app.onrender.com/graphql"){try{const n=await I(s,a,e,{Authorization:`Bearer ${t}`});if(n)return n;throw new Error("No response data received")}catch(n){throw console.error("Error in getRequest:",n),n}}function tr(a){const t=`; ${document.cookie}`.split(`; ${a}=`);return t.length===2&&t.pop()?.split(";").shift()||null}class wt{transformedCreatorData={userId:null,username:null,playerId:null,avatarUrl:null,avatarAltText:null,csGoRank:null,dota2Rank:null};async getCreatorData(){try{const e=tr("token");if(e){const t=await it(aa,{},e);return await it(ra,{id:t.me.id},e)}else console.error("Token is null or undefined")}catch(e){console.error("Error in init:",e)}}async transformCreatorData(){const e=await this.getCreatorData();return this.transformedCreatorData={userId:e.usersPermissionsUser.data.id||null,username:e.usersPermissionsUser.data.attributes.username||null,playerId:e.usersPermissionsUser.data.attributes.player?.data?.id||null,avatarUrl:e.usersPermissionsUser.data.attributes.player?.data?.attributes.avatar?.data?.attributes.url||null,avatarAltText:e.usersPermissionsUser.data.attributes.player?.data?.attributes.avatar?.data?.attributes.alternativeText||null,csGoRank:e.usersPermissionsUser.data.attributes.player?.data?.attributes.CSGO?.Default_information?.rank||null,dota2Rank:e.usersPermissionsUser.data.attributes.player?.data?.attributes.DOTA2?.Default_information?.rank||null},console.log("Creator data received"),this.transformedCreatorData}}class St{savedAllPlayers=[];selectedPlayers=[];constructor(e){this.selectedPlayers.push(e)}async getAllPlayers(e={}){try{const{players:t}=await I(T.ENDPOINT,sa,e,{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});if(t?.data)return t.data.map(n=>({userId:n.attributes?.user?.data?.id,avatarUrl:n.attributes?.avatar?.data?.attributes?.url||"",avatarAltText:n.attributes?.avatar?.data?.attributes?.alternativeText||"",username:n.attributes?.user?.data?.attributes?.username||"",csGoRank:n.attributes?.CSGO?.Default_information?.rank||0,dota2Rank:n.attributes?.DOTA2?.Default_information?.rank||0}))}catch(t){console.error(t)}return[]}async createPlayersList(e){return this.savedAllPlayers=await this.getAllPlayers(e),this.savedAllPlayers.reduce((s,n)=>(this.selectedPlayers.find(f=>f.userId===n.userId)===void 0&&(s+=`<li class="users-list-block__user-item" data-player-id="${n.userId}">
            <div class="users-list-block__user-name">
            ${n.username}
            </div>
          </li>`),s),"")}async render(){const e=await this.createPlayersList(),t=` 
      <svg>
        <use
          xlink:href="${$}#plus-in-dashcircle"
        ></use>
      </svg>
      <div class="patty__users-list-block users-list-block">
        <input
          type="text"
          class="users-list-block__search-input"
          placeholder="Поиск"
        />
        <div class="users-list-block__icon-search">
          <svg>
            <use
              xlink:href="${$}#search"
            ></use>
          </svg>
        </div>
        <ul class="users-list-block__users-list">
            ${e}
         </ul>
      </div>
    `,s=document.createElement("div");return s.classList.add("patty__add-user"),s.innerHTML=t,this.addLietnerToSearchInput(s),s}async searchPlayers(e,t){const s=t.querySelector(".users-list-block__users-list"),c={username:e.value},f=await this.createPlayersList(c);s.innerHTML=f}addLietnerToSearchInput(e){e.querySelector(".users-list-block__search-input").addEventListener("input",async s=>{await this.searchPlayers(s.target,e)})}addSelectedPlayer(e,t){const s=document.querySelector(".users-list-block__users-list");s?.addEventListener("click",n=>{const c=this.getIdOfSelectedPlayer(n.target,s);if(c!==null){const f=this.savedAllPlayers.find(p=>p.userId===c);f!==void 0&&(this.selectedPlayers.push(f),e(f),t(this.selectedPlayers))}})}getIdOfSelectedPlayer(e,t){const s=e.closest(".users-list-block__user-item");if(s!==null&&t.contains(s)){const n=s.dataset.playerId;if(n!==void 0)return this.removeListItemOfSelectedPlayer(s),n}return null}removeListItemOfSelectedPlayer(e){e.style.display="none"}getSelectedPlayers(){return this.selectedPlayers}}class kt{container;curentPlayer;addUserBlock;playersBlock=null;constructor(e,t,s){if(this.container=document.querySelector(`#${e}`),!this.container)throw new Error(`Container with id #${e} not found.`);this.curentPlayer=t,this.addUserBlock=s,this.render()}createTitleBlock(){const e=`<div class="patty__title">Пати</div>
      <div class="patty__help-block">
        <div class="patty__help-block-icon">?</div>
        <div class="patty__help-block-text">
          Дуже корисна підказка!
        </div>
      </div>`,t=document.createElement("div");return t.classList.add("patty__title-block"),t.innerHTML=e,t}createRatingBlock(){const e=`
      <div
        class="patty__empty-block patty__empty-block_left"
      ></div>
      <div class="patty__rating">Ранг: ${this.curentPlayer.csGoRank}</div>
      <div class="patty__empty-block patty__empty-block_right">
      </div>`,t=document.createElement("div");return t.classList.add("patty__rating-block"),t.innerHTML=e,t}changeTotalRank(e){const t=document.querySelector(".patty__rating"),s=e.reduce((n,c)=>(n+=c.csGoRank!==null?c.csGoRank:0,n),0);t.innerHTML=s.toString()}createPlayersBlock(){const e=document.createElement("div");return e.classList.add("patty__users"),e.id="patty-users",e.appendChild(this.addUserBlock),this.playersBlock=e,e}addPlayer(e){const t=`
      <div class="user-block__avatar-img-block">
        <img
          src="${e.avatarUrl}"
          alt="${e.avatarAltText}"
          class="user-block__avatar-img"
        />
        <div class="user-block__avatar-online"></div>
      </div>
      <div class="user-block__info">${e.username}</div>`,s=document.createElement("div");s.classList.add("patty__user-block","user-block"),s.innerHTML=t,this.playersBlock?.insertBefore(s,this.addUserBlock)}render(){const e=document.createElement("div");e.classList.add("find-lobby__patty","patty"),e.appendChild(this.createTitleBlock()),e.appendChild(this.createPlayersBlock()),this.addPlayer(this.curentPlayer),e.appendChild(this.createRatingBlock()),this.container?.appendChild(e)}}class Re{container;filtersBlockId;constructor(e,t="filters-find-lobby"){if(this.container=document.querySelector(`#${e}`),!this.container)throw new Error(`Container with id #${e} not found.`);this.filtersBlockId=t,this.render()}render(){const e=`<div class="find-lobby__filters-title-block">
      <svg>
        <use xlink:href="${$}#filters"></use>
      </svg>
      <h2 class="find-lobby__filters-title">Фильтры</h2>
    </div>`,t=document.createElement("div");t.classList.add("find-lobby__filters-block"),t.id=this.filtersBlockId,t.innerHTML=e,this.container?.appendChild(t)}}class ar{container;constructor(e){this.container=document.querySelector(`#${e}`),this.render()}render(){const e=`
      <div class="filters__tabs tabs-block__tabs">
        <!---->
        <div class="filters__tab tabs-block__tab" data-tab-name="find"
          >НАЙТИ ИГРУ</div
        >
        <div class="filters__tab tabs-block__tab" data-tab-name="create">
          СОЗДАТЬ ЛОББИ
        </div>
        <div class="tabs-block__lamp"><span></span></div>
      </div>
      <div class="filters__content tabs-block__content">
        <div
          class="filters__find-lobby find-lobby tabs-block__content-container tabs-block__content-container_active"
          id="find-content"
        ></div>
        <form
            class="filters__create-lobby create-lobby tabs-block__content-container"
            id="create-content"
            >
            <div class="anti-cheat create-lobby__anti-cheat">
            <div class="custom-checkbox">
               <input
                  type="checkbox"
                  name="create-anti-cheat"
                  id="create-anti-cheat"
                  class="custom-checkbox__input"
               />
               <label for="create-anti-cheat" class="custom-checkbox__label">
                  <svg>
                     <use xlink:href="${$}#check-mark"></use>
                  </svg>
               </label>
               <label for="create-anti-cheat" class="custom-checkbox__label-text">
                  Античит
               </label>
               </div>
            </div>
            <button class="create-lobby__create-btn btn btn_yellow">
               <svg>
                  <use xlink:href="${$}#people"></use>
               </svg>
               <div>Создать</div>
            </button>
         </form>
      </div>`;this.container!==null&&(this.container.innerHTML=e)}}class W{static instance;constructor(){this.renderCsPage()}static async getInstance(){return W.instance||(W.instance=new W,await this.instance.renderCsPage()),W.instance}updateUrlParams(){ot(),ce("match-page__content","open-match")}async renderCsPage(){this.updateUrlParams(),new ar("filters"),new X("match-page__filters"),new de("match-page__filters"),ct.getInstance("sorting-block-container","sorting-block",!0),new X("sorting-block");const e=[{value:"100",label:"100"},{value:"200",label:"200"},{value:"500",label:"500"},{value:"1000",label:"1000"},{value:"2000",label:"2000"},{value:"10000",label:"10000"}];try{const s=await new wt().transformCreatorData(),n=new St(s),c=new He(T.ENDPOINT),f=new Ve(T.ENDPOINT),p=new $e(T.ENDPOINT),b=await c.getCheckboxesData(),x=await f.getCheckboxesData(),O=await p.getCheckboxesData(),y=await n.render(),v=new kt("find-content",s,y);n.addSelectedPlayer(v.addPlayer.bind(v),v.changeTotalRank.bind(v)),new Re("find-content"),new De("filters-find-lobby",e),new Z("find-lobby__rate-filter"),new ee("rate-selected",e,"rate-selected-wrapper","BS");const F=new je("filters-find-lobby"),w=new vt("create-content"),M=new Fe("filters-find-lobby"),G=new gt("create-content"),V=new Ae("filters-find-lobby");new Le("filters-find-lobby"),F.assembleFilter(b),M.assembleFilter(x),V.assembleFilter(O),G.assembleFilter(x),w.assembleFilter(b),new dt("create-content",e),new ut("create-content"),new _t("filters-find-lobby"),new yt("create-content",s)}catch{}}}class rr{params;constructor(e){this.params=e}async getData(){const e="https://battle-star-app.onrender.com/graphql";try{const{cs2Brodcastings:t}=await I(e,ia,this.params,{Authorization:"Bearer 9c9bf4554f3ecfed253aca7329b2c46511bf3c9b58d2b9a865d9998c75062aab17b1ad96c3c5d878b4aac951441353b066b95b7b20fbd4f31c5466fe8d2479b775f1a398d92e53cfa2e89141d61ee1f32b4850a2daaaebbcf75d3a510bc7e2a3e8613f71c4c84bf7e109f00e2629c12aae3a372fc954fe4de327f478d6857912"});if(t?.data)return t.data.reduce((n,c)=>(n.push({id:c.id,nameMatch:c.attributes?.title,mode:c.attributes?.cs_game_mode?.data?.attributes?.value.toString(),rate:c.attributes?.rate.toString(),flagSrc:c.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.flag?.data?.attributes?.url,region:c.attributes?.creator?.data?.attributes?.Options?.selected_country?.data?.attributes?.name,imgSrc:c.attributes?.map?.data?.attributes?.logo?.data?.[0]?.attributes?.url,map:c.attributes?.map?.data?.attributes?.name,viewers:c.attributes?.viewers,videoUrl:c.attributes?.videoUrl}),n),[])}catch(t){console.error(t)}}}class sr{container;options;constructor(e,t){this.container=document.querySelector(`#${e}`),this.options=t,this.render(),this.addEventHendler()}render(){const e=this.options.reduce((t,s)=>(t+=`<tr class="streaming-tr content__tr" id="">
        <td class="streaming-tr__img-cell">
          <div class="streaming-tr__img-block">
            <img
              src="${s.imgSrc}"
              alt=""
              class="streaming-tr__img"
            />
          </div>
        </td>
        <td class="streaming-tr__name-cell">
          <div class="streaming-tr__name-block">
            <img
              src="${s.flagSrc}"
              alt="flag of ${s.region}"
              class="streaming-tr__flag"
            />
            <div class="streaming-tr__name"> ${s.nameMatch} </div>
          </div>
        </td>
        <td class="streaming-tr__map">
          <div class="streaming-tr__data-title"> Карта </div>
          <div class="streaming-tr__rate-value">  ${s.map} </div>
        </td>
        <td class="streaming-tr__rate-block">
          <div class="streaming-tr__data-title"> Ставка </div>
          <div class="streaming-tr__rate-value"> ${s.rate} $ </div>
        </td>
        <td class="streaming-tr__mode">
          <div class="streaming-tr__data-title"> Режим </div>
          <div class="streaming-tr__rate-value"> ${s.mode}x${s.mode} </div>
        </td>
        <td class="streaming-tr__online-field-block">
          <div class="streaming-tr__online-field"> Онлайн </div>
        </td>
        <td class="streaming-tr__viewers-cell">
          <div class="streaming-tr__viewers-block">
            <div class="streaming-tr__viewers-icon">
              <svg>
                <use xlink:href="${$}#view"></use>
              </svg>
            </div>
            <div class="streaming-tr__viewers">${s.viewers} </div>
          </div>
        </td>
      </tr>`,t),"");this.container.innerHTML=e}addEventHendler(){this.container.addEventListener("click",e=>{const s=e.target.closest(".streaming-tr");s&&(window.location.href=`/stream.html?game=cs2&id=${s.id}`)})}}class ir{container;options;constructor(e,t){this.container=document.querySelector(`#${e}`),this.options=t,this.render(),this.addEventHendler()}render(){const e=this.options.reduce((t,s)=>(t+=`
        <div class="{='class'} striming-card" id="${s.id}">
         <div class="striming-card__img-block">
            <div class="striming-card__wrapper-img">
               <img
               src="${s.imgSrc}"
               alt=""
               class="striming-card__img"
               />
            </div>
         </div>
         <div class="striming-card__content">
            <div class="striming-card__title-block">
               <div class="striming-card__name-block">
               <img
                  src="${s.flagSrc}"
                  alt="flag of ${s.region}"
                  class="striming-card__flag"
               />
               <h3 class="striming-card__name">  ${s.nameMatch}  </h3>
               </div>
               <div class="striming-card__map">  ${s.map}  </div>
               <div class="striming-card__online-field"> Онлайн </div>
            </div>
            <div class="striming-card__other-data">
               <div class="striming-card__data-block">
               <div class="striming-card__rate-block">
                  <div class="striming-card__data-title"> Ставка </div>
                  <div class="striming-card__rate-value">  ${s.rate} $ </div>
               </div>
               <div class="striming-card__mode">
                  <div class="striming-card__data-title"> Режим </div>
                  <div class="striming-card__rate-value">  ${s.mode}x${s.mode}  </div>
               </div>
               </div>
               <div class="striming-card__viewers-block">
               <div class="striming-card__viewers-icon">
                  <svg>
                     <use xlink:href="${$}#view"></use>
                  </svg>
               </div>
               <div class="striming-card__viewers">${s.viewers} </div>
               </div>
            </div>
         </div>
         </div>`,t),"");this.container.innerHTML=e}addEventHendler(){this.container.addEventListener("click",e=>{const s=e.target.closest(".striming-card");s&&(window.location.href=`/stream.html?game=cs2&id=${s.id}`)})}}class nr{container;allCheckbox;allCheckboxesValues={};rateSliderHendles;timeoutUpdateContent;filtersObj={country:[],rate:[],mapName:[],gameMode:[]};constructor(e){this.container=document.querySelector(`#${e}`),this.allCheckbox=this.container.querySelectorAll('input[type="checkbox"]'),this.rateSliderHendles=this.selectRateSliderHendles(),this.addEventHandler(),this.selectAllChaeckboxValue(),this.updateFiltersObject()}selectRateSliderHendles(){const e=document.querySelector(".rate-filter__lower-slider-output"),t=document.querySelector(".rate-filter__upper-slider-output");return[e,t]}addEventHandler(){this.allCheckbox?.forEach(e=>{e.addEventListener("change",t=>{this.changeFilters(t.target),this.addLocationParam()})}),this.rateSliderHendles.forEach(e=>{e.addEventListener("changeRateSlider",()=>{this.changeFilters("rateSlider"),this.addLocationParam()})})}addLocationParam(){for(const e in this.filtersObj)if(Object.prototype.hasOwnProperty.call(this.filtersObj,e)){const t=this.filtersObj[e];t!==null?ce(e,t?.join(",")):nt(e)}}runDelay(){window.clearTimeout(this.timeoutUpdateContent),this.timeoutUpdateContent=window.setTimeout(()=>this.updateContent(),1500)}async updateContent(){const e=this.changeFiltersObj(),s=await new rr(e).getData();s&&(new ir("streaming-grid",s),new sr("streaming-table",s))}changeFilters(e){if(typeof e=="string")this.filtersObj.rate=["between",this.rateSliderHendles[0].innerHTML.slice(2),this.rateSliderHendles[1].innerHTML.slice(2)];else{const t=e.name.replace("-filter","");if(e.checked)t!=="rate"?this.filtersObj[t]?.push(e.value):this.filtersObj[t]?.length!==0&&this.filtersObj[t]?.[0]=="in"?this.filtersObj[t]?.push(e.value):this.filtersObj.rate=["in",e.value];else{const s=this.filtersObj[t]?.indexOf(e.value);s!==void 0&&(t==="rate"&&this.filtersObj[t]?.length===2?this.filtersObj[t].splice(0):this.filtersObj[t].splice(s,1))}}this.runDelay()}changeFiltersObj(){const e={country:this.filtersObj.country?.length===0?this.allCheckboxesValues.country:this.filtersObj.country,rate:{},map:this.filtersObj.mapName?.length===0?this.allCheckboxesValues.mapName:this.filtersObj.mapName,gameMode:[]};return this.filtersObj.rate?.length===0?e.rate.between=[+this.rateSliderHendles[0].innerHTML.slice(1),+this.rateSliderHendles[1].innerHTML.slice(1)]:Array.isArray(this.filtersObj.rate)&&this.filtersObj.rate[0]=="in"&&(e.rate.in=this.filtersObj.rate?.reduce((t,s,n)=>(n!==0&&t.push(+s),t),[])),Array.isArray(this.filtersObj.rate)&&this.filtersObj.rate[0]=="between"&&(e.rate.between=[+this.filtersObj.rate[1],+this.filtersObj.rate[2]]),this.filtersObj.gameMode?.length===0?e.gameMode=this.allCheckboxesValues.gameMode.map(t=>Number(t)):this.filtersObj.gameMode&&(e.gameMode=this.filtersObj.gameMode?.map(t=>Number(t))),e}selectAllChaeckboxValue(){this.allCheckbox?.forEach(e=>{const t=e.name.replace("-filter","");this.allCheckboxesValues[t]&&!this.allCheckboxesValues[t].includes(e.value)?this.allCheckboxesValues[t].push(e.value):this.allCheckboxesValues[t]||(this.allCheckboxesValues[t]=[e.value])})}updateFiltersObject(){for(const[e,t]of lt().entries()){const s=t.split(",");e==="rate"&&s[0]==="between"?this.filtersObj.rate=["between",s[1],s[2]]:this.allCheckbox!==null&&this.allCheckbox.forEach(n=>{const c=n.name.replace("-filter","");c===e&&s.includes(n.value)&&(n.checked=!0,c!=="rate"?this.filtersObj.rate?.push(n.value):this.filtersObj.rate?.length!==0?this.filtersObj.rate?.push(n.value):this.filtersObj.rate=["in",n.value])})}this.updateContent()}}class Y{static instance;constructor(){this.renderTranslateCsPage()}static getInstance(){return Y.instance||(Y.instance=new Y),Y.instance}updateUrlParams(){ot(),ce("match-page__content","translation")}async renderTranslateCsPage(){this.updateUrlParams(),ct.getInstance("translation-content","sorting-block-cs-strim",!0,"streaming"),new X("sorting-block-cs-strim");const e=document.querySelector("#filters");e!==null&&(e.innerHTML=""),new Re("filters","filters-find-streaming");const t=[{value:"100",label:"100"},{value:"200",label:"200"},{value:"500",label:"500"},{value:"1000",label:"1000"},{value:"2000",label:"2000"},{value:"10000",label:"10000"}];try{const s=new He(T.ENDPOINT),n=new Ve(T.ENDPOINT),c=new $e(T.ENDPOINT),f=await s.getCheckboxesData(),p=await n.getCheckboxesData(),b=await c.getCheckboxesData();new De("filters-find-streaming",t),new Z("find-lobby__rate-filter");const x=new je("filters-find-streaming"),O=new Fe("filters-find-streaming"),y=new Ae("filters-find-streaming");new Le("filters-find-streaming"),x.assembleFilter(f),O.assembleFilter(p),y.assembleFilter(b),new nr("filters-find-streaming")}catch(s){console.error(s)}}}class lr{mayMethods={"open-match":async()=>{new W},translation:()=>{new Y}};constructor(){new X("match-page__content",this.mayMethods),new de("match-page__content")}}class J{static instance;constructor(){}static async getInstance(){return J.instance||(J.instance=new J,await this.instance.renderCsPage()),J.instance}async renderCsPage(){new X("match-page__filters"),new de("match-page__filters");const e=["grid","table"],t=()=>{},s=new oa(e,t);new X("content__view-block",s.createObj());const n=[{value:"100",label:"100"},{value:"200",label:"200"},{value:"500",label:"500"},{value:"1000",label:"1000"},{value:"2000",label:"2000"},{value:"10000",label:"10000"}];try{const c=new wt,f=await c.transformCreatorData(),p=new He(T.ENDPOINT),b=new Ve(T.ENDPOINT),x=new $e(T.ENDPOINT),O=await p.getCheckboxesData(),y=await b.getCheckboxesData(),v=await x.getCheckboxesData(),w=await new St(f).render();new kt("find-content",c.transformedCreatorData,w),new Re("find-content"),new De("filters-find-lobby",n),new Z("find-lobby__rate-filter"),new ee("rate-selected",n,"rate-selected-wrapper","BS");const M=new je("filters-find-lobby"),G=new vt("create-content"),V=new Fe("filters-find-lobby"),U=new gt("create-content"),Q=new Ae("filters-find-lobby");new Le("filters-find-lobby"),M.assembleFilter(O),V.assembleFilter(y),Q.assembleFilter(v),U.assembleFilter(y),G.assembleFilter(O),new dt("create-content",n),new ut("create-content"),new _t("filters-find-lobby"),new yt("create-content",c.transformedCreatorData)}catch{}}}class or{mayMethods={"open-match":async()=>{J.getInstance()},translation:()=>{}};constructor(){new X("match-page__content",this.mayMethods),new de("match-page__content")}}document.addEventListener("DOMContentLoaded",()=>{new na("#wrapper"),new la("wrapper","МАТЧИ"),cr()});async function cr(){Oe("game")=="dota2"?new or:new lr}
