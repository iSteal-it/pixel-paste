var interstitialSlot,staticSlot;window.googletag=window.googletag||{cmd:[]},googletag.cmd.push(function(){(interstitialSlot=googletag.defineOutOfPageSlot("/22660461727/hm-interstitial",googletag.enums.OutOfPageFormat.INTERSTITIAL))&&(interstitialSlot.setTargeting("site",["pixelpaste.net"]).addService(googletag.pubads()),googletag.pubads().addEventListener("slotOnload",function(t){})),googletag.enableServices()}),googletag.cmd.push(function(){googletag.display(interstitialSlot)}),function(){"use strict";var t=function(t){var e=0;return function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}},e=this||self,a=/^[\w+/_-]+[=]{0,2}$/,n=null,o=function(){},i=function(t,e){function a(){}a.prototype=e.prototype,t.prototype=new a,t.prototype.constructor=t},d=function(t,e){this.b=t===l&&e||"",this.a=r},r={},l={},s=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^+new Date).toString(36)},g=function(t,e){return e=String(e),"application/xhtml+xml"===t.contentType&&(e=e.toLowerCase()),t.createElement(e)},c=function(t){this.a=t||e.document||document};c.prototype.appendChild=function(t,e){t.appendChild(e)};var p=function(t,o,i,l,s,c){try{var u=t.a,b=g(t.a,"SCRIPT");b.async=!0,function(t,o){t.src=o instanceof d&&o.constructor===d&&o.a===r?o.b:"type_error:TrustedResourceUrl",null===n&&(n=(o=(o=e.document).querySelector&&o.querySelector("script[nonce]"))&&(o=o.nonce||o.getAttribute("nonce"))&&a.test(o)?o:""),(o=n)&&t.setAttribute("nonce",o)}(b,o),u.head.appendChild(b),b.addEventListener("load",function(){s(),l&&u.head.removeChild(b)}),b.addEventListener("error",function(){0<i?p(t,o,i-1,l,s,c):(l&&u.head.removeChild(b),c())})}catch(t){c()}},u=e.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),b=e.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),f=e.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu"),h=function(t,e,a){this.b=t,this.f=new c(this.b),this.a=null,this.c=[],this.g=!1,this.i=e,this.h=a},y=function(t){if(t.b.body&&!t.g){var a=function(){v(t),e.setTimeout(function(){return x(t,3)},50)};p(t.f,t.i,2,!0,function(){e[t.h]||a()},a),t.g=!0}},v=function(t){for(var e=S(1,5),a=0;a<e;a++){var n=w(t);t.b.body.appendChild(n),t.c.push(n)}(e=w(t)).style.bottom="0",e.style.left="0",e.style.position="fixed",e.style.width=S(100,110).toString()+"%",e.style.zIndex=S(2147483544,2147483644).toString(),e.style["background-color"]=M(249,259,242,252,219,229),e.style["box-shadow"]="0 0 12px #888",e.style.color=M(0,10,0,10,0,10),e.style.display="flex",e.style["justify-content"]="center",e.style["font-family"]="Roboto, Arial",(a=w(t)).style.width=S(80,85).toString()+"%",a.style.maxWidth=S(750,775).toString()+"px",a.style.margin="24px",a.style.display="flex",a.style["align-items"]="flex-start",a.style["justify-content"]="center",(n=g(t.f.a,"IMG")).className=s(),n.src=u,n.style.height="24px",n.style.width="24px",n.style["padding-right"]="16px";var o=w(t),i=w(t);i.style["font-weight"]="bold",i.textContent=b;var d=w(t);for(d.textContent=f,m(t,o,i),m(t,o,d),m(t,a,n),m(t,a,o),m(t,e,a),t.a=e,t.b.body.appendChild(t.a),e=S(1,5),a=0;a<e;a++)n=w(t),t.b.body.appendChild(n),t.c.push(n)},m=function(t,e,a){for(var n=S(1,5),o=0;o<n;o++){var i=w(t);e.appendChild(i)}for(e.appendChild(a),a=S(1,5),n=0;n<a;n++)o=w(t),e.appendChild(o)},S=function(t,e){return Math.floor(t+Math.random()*(e-t))},M=function(t,e,a,n,o,i){return"rgb("+S(Math.max(t,0),Math.min(e,255)).toString()+","+S(Math.max(a,0),Math.min(n,255)).toString()+","+S(Math.max(o,0),Math.min(i,255)).toString()+")"},w=function(t){return(t=g(t.f.a,"DIV")).className=s(),t},x=function(t,a){0>=a||null!=t.a&&0!=t.a.offsetHeight&&0!=t.a.offsetWidth||(U(t),v(t),e.setTimeout(function(){return x(t,a-1)},50))},U=function(e){var a=e.c,n="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];for(a=n?n.call(a):{next:t(a)},n=a.next();!n.done;n=a.next())(n=n.value)&&n.parentNode&&n.parentNode.removeChild(n);e.c=[],(a=e.a)&&a.parentNode&&a.parentNode.removeChild(a),e.a=null},N=function(t,a,n,o,i){var d=z(n),r=function(n){document.body?function(n){n.appendChild(d),e.setTimeout(function(){d?(0!==d.offsetHeight&&0!==d.offsetWidth?a():t(),d.parentNode&&d.parentNode.removeChild(d)):t()},o)}(document.body):0<n?e.setTimeout(function(){r(n-1)},i):a()};r(3)},z=function(t){var e=document.createElement("div");return e.className=t,e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.style.left="-10000px",e.style.top="-10000px",e.style.zIndex="-10000",e},T={},Z=null,W=function(){},I="function"==typeof Uint8Array,E=function(t,e){t.b=null,e||(e=[]),t.j=void 0,t.f=-1,t.a=e;t:{if(e=t.a.length){--e;var a=t.a[e];if(!(null===a||"object"!=typeof a||Array.isArray(a)||I&&a instanceof Uint8Array)){t.g=e-t.f,t.c=a;break t}}t.g=Number.MAX_VALUE}t.i={}},P=[],j=function(t,e){if(e<t.g){e+=t.f;var a=t.a[e];return a===P?t.a[e]=[]:a}if(t.c)return(a=t.c[e])===P?t.c[e]=[]:a},C=function(t,e,a){if(t.b||(t.b={}),!t.b[a]){var n=j(t,a);n&&(t.b[a]=new e(n))}return t.b[a]};W.prototype.h=I?function(){var t=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var t;if(void 0===t&&(t=0),!Z){Z={};for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),a=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var o=e.concat(a[n].split(""));T[n]=o;for(var i=0;i<o.length;i++){var d=o[i];void 0===Z[d]&&(Z[d]=i)}}}for(t=T[t],e=[],a=0;a<this.length;a+=3){var r=this[a],l=(n=a+1<this.length)?this[a+1]:0;i=r>>2,r=(3&r)<<4|l>>4,l=(15&l)<<2|(d=(o=a+2<this.length)?this[a+2]:0)>>6,d&=63,o||(d=64,n||(l=64)),e.push(t[i],t[r],t[l]||"",t[d]||"")}return e.join("")};try{return JSON.stringify(this.a&&this.a,R)}finally{Uint8Array.prototype.toJSON=t}}:function(){return JSON.stringify(this.a&&this.a,R)};var R=function(t,e){return"number"!=typeof e||!isNaN(e)&&1/0!==e&&-1/0!==e?e:String(e)};W.prototype.toString=function(){return this.a.toString()};var L=function(t){E(this,t)};i(L,W);var V=function(t){E(this,t)};i(V,W);var G=function(t,e){this.c=new c(t);var a=C(e,L,5);a=new d(l,j(a,4)||""),this.b=new h(t,a,j(e,4)),this.a=e},X=function(t,e){Y(t,"internal_api_load_with_sb",function(t,a,n){!function(t,e,a,n){e=new L(e?JSON.parse(e):null),e=new d(l,j(e,4)||""),p(t.c,e,3,!1,a,function(){N(function(){y(t.b),n(!1)},function(){n(!0)},j(t.a,2),j(t.a,3),j(t.a,1))})}(e,t,a,n)}),Y(t,"internal_api_sb",function(){y(e.b)})},Y=function(t,a,n){!function(t,a){Object.defineProperty(e,t,{configurable:!1,get:function(){return a},set:o})}(t=e.btoa(t+a),n)},B=function(t,a,n){for(var o=[],i=2;i<arguments.length;++i)o[i-2]=arguments[i];if(i=e.btoa(t+a),"function"!=function(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var a=Object.prototype.toString.call(t);if("[object Window]"==a)return"object";if("[object Array]"==a||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==a||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&void 0===t.call)return"object";return e}(i=e[i]))throw Error("API not exported.");i.apply(null,o)},k=function(t){E(this,t)};i(k,W);var A=function(t){this.h=window,this.a=t,this.b=j(this.a,1),this.f=C(this.a,L,2),this.g=C(this.a,V,3),this.c=!1};A.prototype.start=function(){J();var t=new G(this.h.document,this.g);X(this.b,t),_(this)};var H,J=function(){var t=function(){if(!e.frames.googlefcPresent)if(document.body){var a=document.createElement("iframe");a.style.display="none",a.style.width="0px",a.style.height="0px",a.style.border="none",a.style.zIndex="-1000",a.style.left="-1000px",a.style.top="-1000px",a.name="googlefcPresent",document.body.appendChild(a)}else e.setTimeout(t,5)};t()},_=function(t){var a=Date.now();B(t.b,"internal_api_load_with_sb",t.f.h(),function(){var n,o=t.b,i=e[e.btoa(o+"loader_js")];if(i){i=e.atob(i),i=parseInt(i,10),o=e.btoa(o+"loader_js").split(".");var d=e;o[0]in d||void 0===d.execScript||d.execScript("var "+o[0]);for(;o.length&&(n=o.shift());)o.length?d=d[n]&&d[n]!==Object.prototype[n]?d[n]:d[n]={}:d[n]=null;n=1728e5>(n=Math.abs(a-i))?0:n}else n=-1;0!=n&&(B(t.b,"internal_api_sb"),O(t,j(t.a,6)))},function(e){O(t,j(t.a,e?4:5))})},O=function(t,a){t.c||(t.c=!0,(t=new e.XMLHttpRequest).open("GET",a,!0),t.send())};e[H="__d3lUW8vwsKlB__"]=function(t){for(var a=[],n=0;n<arguments.length;++n)a[n-0]=arguments[n];e[H]=o,function(t){"function"==typeof window.atob&&(t=window.atob(t),t=new k(t?JSON.parse(t):null),new A(t).start())}.apply(null,a)}}.call(this),window.__d3lUW8vwsKlB__("WyJhYWRhNjc3OGMwNjA3YTBmIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2YvQUdTS1d4V3JpSEh3N1dtdnM4aHZEVHRFS1ZlRUtuU0YxQ1BHbHBkME1DaEtGTVBwbWxMTG9sVTFVT2pqWnVaWkQxVTdLdXZtaWlUajJoN2pyUkdfTEZhRXRXc1x1MDAzZCJdCixbMjAsImRpdi1ncHQtYWQiLDEwMCwiWVdGa1lUWTNOemhqTURZd04yRXdaZ1x1MDAzZFx1MDAzZCIsW251bGwsbnVsbCxudWxsLCJodHRwczovL3d3dy5nc3RhdGljLmNvbS8wZW1uL2YvcC9hYWRhNjc3OGMwNjA3YTBmLmpzP3VzcXBcdTAwM2RDQTAiXQpdCiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hXU3ZHdFBsMndUMUU1QjRVMjJ6bnB2QTRPSk9YaGR6ajU3RVdCOWh0cEJTdG52TW5XZU9adElBWllReG9YLU1ZaEp5aXMwOEZ5emVMMHlybDFIP2FiXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2wvQUdTS1d4WFlRYTh1RjBrenYzeDU1M05PZnlqZVNoVWFUc2xMMU9RTVJQUjhLcDU5OTBNRjRmX0puOE50WHRsLVNlaW1KaDAxVl9Bck1CYV84ZjJSbXlkZD9hYlx1MDAzZDJcdTAwMjZzYmZcdTAwM2QxIiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hWNDlaSWFBeFlkSFAzMmFXMXRlSlYwZHJMOWVReFJuSWltd2FZcUpqdklaczYxU1BjTXRsX2FaUkNGZzZRZXFVcmk2dlNXNmpwZFFaWXptLU1HP3NiZlx1MDAzZDIiXQo=");var scriptEl=document.createElement("script");scriptEl.type="text/javascript",scriptEl.async=!0,scriptEl.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js";var targetEl=document.getElementsByTagName("head")[0];targetEl.insertBefore(scriptEl,targetEl.firstChild);var billboard1,billboard2,billboard3,skyscraper1,skyscraper2,MPU1,MPU2,MPU3,MPU4,leaderboard1,leaderboard2,css=".ad-slot {text-align: center; padding-top: 10px; padding-bottom: 5px;}",head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.styleSheet?style.styleSheet.cssText=css:style.appendChild(document.createTextNode(css)),head.appendChild(style),window.addEventListener("load",function(){for(var t=document.getElementsByClassName("ad-hm-slot"),e=t.length,a=0;a<e;a++){t[a].style.cssText="z-index: 9999;display: inline-block; width: 100%; text-align: center; padding-bottom: 10px;";var n=document.createElement("a");t[a].appendChild(n),n.style.cssText="text-align: right; clear: both; text-decoration: none; color:black; font-size: 10px; font-family: Verdana;",n.href="https://hooliganmedia.com";var o=document.createTextNode("Powered by Hooligan Media");n.appendChild(o)}}),window.googletag=window.googletag||{cmd:[]},googletag.cmd.push(function(){var t=googletag.sizeMapping().addSize([992,0],[[970,90],[970,250],[728,90]]).addSize([768,0],[[728,90],[468,60]]).addSize([320,0],[[320,50],[320,100],[300,50]]).addSize([0,0],[]).build(),e=googletag.sizeMapping().addSize([992,0],[[300,600],[160,600],[120,600]]).addSize([768,0],[[160,600],[120,600]]).build(),a=googletag.sizeMapping().addSize([768,0],[[300,250],[336,280],[250,250],[200,200]]).addSize([320,0],[[300,250],[250,250],[200,200]]).addSize([0,0],[]).build(),n=googletag.sizeMapping().addSize([768,0],[[728,90],[468,60]]).addSize([320,0],[[320,50],[320,100]]).addSize([0,0],[]).build();billboard1=googletag.defineSlot("/22660461727/billboard-1",[728,90],"div-gpt-ad-billboard-1").defineSizeMapping(t).setTargeting("pos",["billboard-1"]).addService(googletag.pubads()),billboard2=googletag.defineSlot("/22660461727/billboard-2",[728,90],"div-gpt-ad-billboard-2").defineSizeMapping(t).setTargeting("pos",["billboard-2"]).addService(googletag.pubads()),billboard3=googletag.defineSlot("/22660461727/billboard-3",[728,90],"div-gpt-ad-billboard-3").defineSizeMapping(t).setTargeting("pos",["billboard-3"]).addService(googletag.pubads()),skyscraper1=googletag.defineSlot("/22660461727/skyscraper-1",[160,600],"div-gpt-ad-skyscraper-1").defineSizeMapping(e).setTargeting("pos",["skyscraper-1"]).addService(googletag.pubads()),skyscraper2=googletag.defineSlot("/22660461727/skyscraper-2",[160,600],"div-gpt-ad-skyscraper-2").defineSizeMapping(e).setTargeting("pos",["skyscraper-2"]).addService(googletag.pubads()),MPU1=googletag.defineSlot("/22660461727/MPU-1",[300,250],"div-gpt-ad-MPU-1").defineSizeMapping(a).setTargeting("pos",["MPU-1"]).addService(googletag.pubads()),MPU2=googletag.defineSlot("/22660461727/MPU-2",[300,250],"div-gpt-ad-MPU-2").defineSizeMapping(a).setTargeting("pos",["MPU-2"]).addService(googletag.pubads()),MPU3=googletag.defineSlot("/22660461727/MPU-3",[300,250],"div-gpt-ad-MPU-3").defineSizeMapping(a).setTargeting("pos",["MPU-3"]).addService(googletag.pubads()),MPU4=googletag.defineSlot("/22660461727/MPU-4",[300,250],"div-gpt-ad-MPU-4").defineSizeMapping(a).setTargeting("pos",["MPU-4"]).addService(googletag.pubads()),leaderboard1=googletag.defineSlot("/22660461727/leaderboard-1",[320,50],"div-gpt-ad-leaderboard-1").defineSizeMapping(n).setTargeting("pos",["leaderboard-1"]).addService(googletag.pubads()),leaderboard2=googletag.defineSlot("/22660461727/leaderboard-2",[320,50],"div-gpt-ad-leaderboard-2").defineSizeMapping(n).setTargeting("pos",["leaderboard-2"]).addService(googletag.pubads());var o=[{divId:"div-gpt-ad-billboard-1",slot:billboard1},{divId:"div-gpt-ad-billboard-2",slot:billboard2},{divId:"div-gpt-ad-billboard-3",slot:billboard3},{divId:"div-gpt-ad-skyscraper-1",slot:skyscraper1},{divId:"div-gpt-ad-skyscraper-2",slot:skyscraper2},{divId:"div-gpt-ad-MPU-1",slot:MPU1},{divId:"div-gpt-ad-MPU-2",slot:MPU2},{divId:"div-gpt-ad-MPU-3",slot:MPU3},{divId:"div-gpt-ad-MPU-4",slot:MPU4},{divId:"div-gpt-ad-leaderboard-1",slot:leaderboard1},{divId:"div-gpt-ad-leaderboard-2",slot:leaderboard2}];window.addEventListener("load",function(){o.map(({divId:t,slot:e})=>{null!==document.getElementById(t)&&(googletag.display(t),googletag.pubads().refresh([e]))})}),googletag.pubads().enableLazyLoad({fetchMarginPercent:150,renderMarginPercent:75,mobileScaling:1.5}),googletag.pubads().addEventListener("impressionViewable",function(t){var e=t.slot;setTimeout(function(){googletag.pubads().refresh([e])},2e4)}),googletag.pubads().setTargeting("site","pixelpaste.net"),googletag.pubads().collapseEmptyDivs(),googletag.pubads().disableInitialLoad(),googletag.enableServices()});