(()=>{const $=s=>document.querySelector(s);
$('.menu').onclick=()=>$('nav ul').classList.toggle('open');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>$('nav ul').classList.remove('open'));
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.querySelectorAll('[data-plan]').forEach(b=>b.onclick=()=>{const s=$('#service');if(s)s.value=b.dataset.plan});
const f=$('#lead'),m=$('#msg'),CAL='https://calendar.app.google/Ax9BRf6NCCmSrpNP6';
f.addEventListener('submit',async e=>{e.preventDefault();m.style.color='';m.textContent='Sending…';
try{const r=await fetch(f.action,{method:'POST',body:new FormData(f)});const j=await r.json();
if(!j.ok)throw new Error(j.error||'Error');
m.style.color='#1f7a4d';m.innerHTML='Thank you! Redirecting you to pick a time for your free discovery call… <a href="'+CAL+'">Click here if nothing happens</a>';
setTimeout(()=>location.href=CAL,1800)}
catch(err){m.style.color='#b3261e';m.innerHTML='Could not send: '+err.message+'. Please <a href="'+CAL+'">book directly</a> or email info@betterbalancedkeeper.com.'}});})();
