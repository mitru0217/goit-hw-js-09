let e={};const t=document.querySelector(".form"),o=document.querySelector("button");function n(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}t.addEventListener("input",(function(t){e[t.target.name]=t.target.value,console.log(e)})),o.addEventListener("submit",n);for(let t=0;t<=e.amount;t++){n(t,e.delay).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),e.delay+=e.step}
//# sourceMappingURL=03-promises.dc06dc5a.js.map
