!function(){"use strict";var e,t={4320:function(e,t,n){function r(e,t){var n="{".concat(e,"}");return t.replace(n,"")}function a(e){if(e.includes("]]")){var t=e.match(/\[{2}/g)||"",n=e.match(/\]{2}/g);if(t.length===n.length)return!0}return!1}function i(e){var t=e.indexOf("[[");return"**"===e.substring(t+2,t+4)}function o(e){return e.match(/(?<=\{{1}).*?(?=\}{1})/)[0]}function c(e,t,n,r,a){var i=[];if(r===n)i=e.match(/(?<=\[{2}).*?(?=\]{2})/)[0].split("|");else{var o=e.indexOf("[["),c=t[r].indexOf("]]"),l=e.substring(o+2),u=t[r].substring(0,c),d="";d="".concat(l,"[BR]");for(var s=n+1;s<r;s+=1)i=d+="".concat(t[s],"[BR]");d+=u,a?(i=d.split("**")).shift():i=d.split("|")}return i}function l(e,t,n,r,a){var i=null,o="[OPTION".concat(t,"]");if(a===r)i=e.replace(/(?<=\[{2}).*?(?=\]{2})/,o);else{var c=n[r].indexOf("[["),l=n[a].indexOf("]]"),u=n[r].substring(c+2),d=n[a].substring(0,l);i=n[r].replace(u,o)+n[a].replace(d,"")}return i}function u(e,t,n){var r=e,a=t;return(r=document.createElement("button")).id=a,r.type="button",r.className="float-end btn btn-outline-primary btn-lg",r.textContent=n,r}function d(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=e.call.apply(e,[null].concat(n));return a.className="btn btn-outline-primary btn-lg ms-3",a}}function s(e){var t=document.createElement("div");t.className="progress mb-3",t.setAttribute("role","progressbar"),t.setAttribute("aria-label","Template readyness level"),t.setAttribute("aria-valuenow",e),t.setAttribute("aria-valuemin","0"),t.setAttribute("aria-valuemax","100"),t.setAttribute("style","height: 20px");var n=document.createElement("div");return n.className="progress-bar progress-bar-striped bg-success",n.setAttribute("style","width: ".concat(e,"%")),n.textContent="".concat(e,"%"),t.appendChild(n),t}function p(){return d(u)("resetButton","resetbtn","Start over")}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=document.createElement("textarea");n.className="form-control mb-4",n.setAttribute("id","currenttemplate"),n.setAttribute("rows","30"),n.setAttribute("readonly",""),n.value=t.join("\n"),e.appendChild(n)}function v(){document.getElementById("step1").style.display="block";var e=document.getElementById("step2");e.innerHTML="",e.style.display="none";var t=document.getElementById("step3");t.innerHTML="",t.style.display="none";var n=document.getElementById("step4");n.innerHTML="",n.style.display="none"}function h(e,t,n,r){var a=n,i=r;return a=document.getElementById(e),i=document.createElement("h5"),a.style.display="block",i.textContent=t,a.appendChild(i),a}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){var t=s(66);document.getElementById("step3").appendChild(t);var n=h("step3","Current template state","step3Area","step3Header");m(n,e);var r=function(e){var t=[];return e.forEach((function(e){var n,r,a=e,i=/\{{2}.*\}{2}/;if(a.search(i)>-1)for(;a.search(i)>-1;){var o={},c=a.match(i);if((c=c[0].replace(/\{\{(?=.*)|\}\}/g,"")).search("=")>-1){o.hasPlaceholder=!0,(c=c.split("=")).forEach((function(e,t,n){n[t]=e.trim()}));var l=(r=2,function(e){if(Array.isArray(e))return e}(n=c)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}(n,r)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());o.name=l[0],o.placeholder=l[1]}else o.hasPlaceholder=!1,o.name=c;t.push(o),a=a.replace(i,"")}})),t}(e),a=document.createElement("h5");a.textContent="Input Values",n.appendChild(a),function(e,t){var n=document.createElement("form");n.className="needs-validation",n.setAttribute("id","inputform"),n.setAttribute("novalidate",""),t.forEach((function(e,t){var r=document.createElement("div");r.className="row align-items-center mb-3";var a=document.createElement("div");a.className="col-3";var i=document.createElement("label");i.setAttribute("for","input".concat(t)),i.textContent=e.name,a.appendChild(i),r.appendChild(a);var o=document.createElement("input");o.className="form-control",o.setAttribute("type","text"),o.setAttribute("id","input".concat(t)),o.setAttribute("required",""),e.hasPlaceholder&&o.setAttribute("placeholder",e.placeholder);var c=document.createElement("div");c.className="col-3",c.appendChild(o);var l=document.createElement("div");l.className="invalid-feedback",l.textContent="Input required",c.appendChild(l),r.appendChild(c),n.appendChild(r)}));var r=p();r.addEventListener("click",(function(e){e.preventDefault(),v()}));var a,i=(a=u,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=a.call.apply(a,[null].concat(t));return r.type="submit",r}),o=i("step3Button","processinputbtn","Process input"),c=document.createElement("div");c.className="col-12",c.appendChild(o),c.insertBefore(r,o),n.appendChild(c),e.appendChild(n)}(n,r);var i=[];document.getElementById("processinputbtn").addEventListener("click",(function(t){var a=document.getElementById("inputform");a.checkValidity()?(t.preventDefault(),function(e){e.forEach((function(e,t){e.input=document.getElementById("input".concat(t)).value}))}(r),i=function(e,t){var n=[],r=0;return e.forEach((function(e){var a=/\{\{.*\}\}/,i=e;if(i.search(a)>-1)for(;i.search(a)>-1;)i=i.replace(a,t[r].input),r+=1;n.push(i)})),n}(e,r),n.innerHTML="",n.style.display="none",function(e){var t=s(100);document.getElementById("step4").appendChild(t);var n=h("step4","Final template","step4Area","step4Header");m(n,e);var r=d(u),a=r("copyClipBoardBtn","copybtn","Copy to clipboard"),i=r("step4Button","startoverbtn","Start over"),o=document.createElement("div");o.className="float-end",o.appendChild(a),o.appendChild(i),n.appendChild(o),a.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById("currenttemplate");navigator.clipboard.writeText(t.value).catch((function(e){console.error(e)}))})),i.addEventListener("click",(function(e){e.preventDefault(),v()}))}(i)):(t.preventDefault(),t.stopPropagation(),a.classList.add("was-validated"))}))}function g(e,t){var n=document.getElementById("initialtemplate"),d=JSON.parse(localStorage.getItem("template"));d&&(n.value=d,t.removeAttribute("disabled"));var f,m,g=document.getElementById("step1");t.addEventListener("click",(function(t){t.preventDefault(),localStorage.setItem("template",JSON.stringify(n.value));var d,E=function(e){for(var t,n,u=[],d=null,s=null,p=[],f=0;f<e.length;f+=1){var m=e[f];if(m.includes("[[")){var v={};if(d+=1,void 0,n=(t=m).indexOf("[["),"{"===t.substring(n+2,n+3)&&(v.name=o(m),m=r(v.name,m)),v.isradio=i(m),a(m))s=f,v.options=c(m,e,f,s,v.isradio),v.id=d,v.multiline=!1,m=l(m,v.id,e,f,s);else{var h=f;s=null;for(var b=f;b<e.length;b+=1)if(r(v.name,e[b]).includes("]]")&&!a(e[b])){s=b,f=b;break}if(null===s)throw new Error("Can't find the closing bracket. You probably have unmatching brackets in the template.");v.options=c(m,e,h,s,v.isradio),v.id=d,v.multiline=!0,m=l(m,v.id,e,h,s),f=s}u.push(v)}p.push(m)}return[p,u]}(((d=e.value.split("\n")).forEach((function(e,t,n){n[t]=e.trim()})),d)),A=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{if(!l&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(E,2);f=A[0],m=A[1],g.style.display="none",function(e,t){var n=s(33);document.getElementById("step2").appendChild(n);var r,a=h("step2","Select options","step2Area","step2Header");(r=t).length>0&&r.forEach((function(e){var t=document.createElement("div"),n=document.createElement("div");if(t.id="options".concat(e.id),t.dataset.optionsBlock=e.id,t.className="card mb-3",e.name){var r=document.createElement("div");r.className="card-header",r.textContent=e.name,t.appendChild(r)}n.className="card-body",t.appendChild(n),e.options.forEach((function(t,r){var a=document.createElement("div");a.className="form-check";var i=document.createElement("input");i.className="form-check-input",e.isradio?(i.setAttribute("type","checkbox"),i.setAttribute("value",""),i.setAttribute("id","defaultCheck-".concat(e.id,"-").concat(r))):(i.setAttribute("type","radio"),i.setAttribute("name","flexRadioDefault-".concat(e.id)),i.setAttribute("id","flexRadioDefault-".concat(e.id,"-").concat(r)),0===r&&i.setAttribute("checked",""));var o=document.createElement("label");o.className="form-check-label",e.isradio?o.setAttribute("for","defaultCheck-".concat(e.id,"-").concat(r)):o.setAttribute("for","flexRadioDefault-".concat(e.id,"-").concat(r)),o.innerHTML=t.replaceAll("[BR]","<br>"),a.appendChild(i),a.appendChild(o),n.appendChild(a)})),document.getElementById("step2").appendChild(t)})),a.appendChild(u("step2Button","selectionbtn","Process selections"));var i=p();i.addEventListener("click",(function(e){e.preventDefault(),v()}));var o=document.getElementById("selectionbtn");a.insertBefore(i,o),o.addEventListener("click",(function(n){n.preventDefault(),function(e){e.forEach((function(t,n){t.optionselection=[];for(var r=0;r<t.options.length;r+=1)if(t.isradio)document.getElementById("defaultCheck-".concat(t.id,"-").concat(r)).checked&&e[n].optionselection.push(t.options[r]);else if(document.getElementById("flexRadioDefault-".concat(t.id,"-").concat(r)).checked)return void e[n].optionselection.push(t.options[r])}))}(t);var r=function(e,t){var n=[],r=1;return e.forEach((function(a,i){if(r<=t.length&&a.search("[[[OPTION".concat(r,"]]]"))>-1){for(var o;a.search("[[[OPTION".concat(r,"]]]"))>-1;){var c=t[r-1].optionselection.join("");o=a.replace("[[[OPTION".concat(r,"]]]"),c),r+=1}o.split("[BR]").forEach((function(e){return n.push(e)}))}else n.push(e[i])})),n}(e,t);a.innerHTML="",a.style.display="none",y(r)}))}(f,m)}))}n(2310),n(3238),n(5849),n(3938),n(2077),n(911),n(7749),n(266),n(9254),n(1203),n(5901),n(2189),n(1047),n(5769),n(7460),n(4078),n(2410),n(5610),n(5623),n(1514),n(7471),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("initialprocessbtn"),t=document.getElementById("initialtemplate");!function(e){var t=document.getElementById("initialtemplate");t.addEventListener("input",(function(){t.value.trim().length>0?e.removeAttribute("disabled"):e.setAttribute("disabled","")}))}(e),g(t,e)}))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,a,i){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],i=e[d][2];for(var c=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(c=!1,i<o&&(o=i));if(c){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={296:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,i,o=n[0],c=n[1],l=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(l)var d=l(r)}for(t&&t(n);u<o.length;u++)i=o[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[177],(function(){return r(4320)}));a=r.O(a)}();
//# sourceMappingURL=bundle.6b9a68016289a428f080.js.map