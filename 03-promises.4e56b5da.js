var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire158a;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire158a=r);var o=r("iQIUW");function i(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{setTimeout((()=>{n?r({position:e,delay:t}):o({position:e,delay:t})}),t)})).then((e=>{const{position:t,delay:n}=e;o.Notify.success(`✅ Fulfilled promise ${t} in ${n} ms`)})).catch((e=>{const{position:t,delay:n}=e;o.Notify.failure(`❌ Rejected promise ${t} in ${n} ms`)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const t=parseInt(e.currentTarget.amount.value);let n=parseInt(e.currentTarget.delay.value);const r=parseInt(e.currentTarget.step.value);let o=i(1,n);for(let e=1;e<t;e++)n+=r,o=i(e+1,n)}));
//# sourceMappingURL=03-promises.4e56b5da.js.map