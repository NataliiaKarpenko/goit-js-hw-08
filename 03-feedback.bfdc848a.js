function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,a=setTimeout(O,t),l?y(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function O(){var e=v();if(j(e))return S(e);a=setTimeout(O,function(e){var n=t-(e-u);return s?p(n,i-(e-c)):n}(e))}function S(e){return a=void 0,m&&o?y(e):(o=r=void 0,f)}function w(){var e=v(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return h(u);if(s)return a=setTimeout(O,t),y(u)}return void 0===a&&(a=setTimeout(O,t)),f}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},w.flush=function(){return void 0===a?f:S(v())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),h={},j=JSON.parse(localStorage.getItem("feedback-form-state"));(()=>{try{if(null===j)return;for(const e in j)y.elements[e].value=j[e]}catch(e){console.log(e)}})();y.addEventListener("input",e(t)((e=>{const{target:t}=e;h[t.name]=t.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500));y.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),y.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.bfdc848a.js.map
