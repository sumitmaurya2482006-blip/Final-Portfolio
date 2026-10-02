const revealItems=document.querySelectorAll('.reveal');
if(revealItems.length){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});revealItems.forEach(el=>io.observe(el));}
const modal=document.getElementById('modal');
const modalImg=document.getElementById('modalImg');
document.querySelectorAll('[data-cert]').forEach(btn=>btn.addEventListener('click',()=>{if(modal){modalImg.src=btn.dataset.cert;modal.classList.add('show');modal.setAttribute('aria-hidden','false');}}));
if(modal){const close=()=>{modal.classList.remove('show');modal.setAttribute('aria-hidden','true');modalImg.src='';};document.querySelector('.close')?.addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});}
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('open');});
