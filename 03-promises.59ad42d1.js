var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire158a;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire158a=o);var r=o("iQIUW");function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)})).then((e=>{const{position:t,delay:n}=e;r.Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((e=>{const{position:t,delay:n}=e;r.Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}document.querySelector(".form").addEventListener("submit",(e=>{e.preventDefault();const t=e.currentTarget.amount.value,n=e.currentTarget.delay.value,o=e.currentTarget.step.value;let r=i(1,n);for(let e=1;e<t;e++)r=r.finally((()=>i(e+1,o)))}));
//# sourceMappingURL=03-promises.59ad42d1.js.map
