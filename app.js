const menuBtn=document.getElementById('menuBtn'),sidebar=document.getElementById('sidebar');
menuBtn?.addEventListener('click',()=>sidebar.classList.toggle('open'));
const input=document.getElementById('searchInput'),panel=document.getElementById('searchPanel'),results=document.getElementById('searchResults');
const prefix=location.pathname.includes('/pages/')?'../':'';
const esc=s=>s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
input?.addEventListener('input',()=>{const q=input.value.trim().toLowerCase();if(!q){panel.classList.remove('open');results.innerHTML='';return}
const hits=(window.SEARCH_INDEX||[]).filter(x=>(x.title+' '+x.text).toLowerCase().includes(q));panel.classList.add('open');
results.innerHTML=hits.length?hits.map(x=>`<a class="result-item" href="${prefix}${x.url}"><strong>${esc(x.title)}</strong><small>${esc(x.text)}</small></a>`).join(''):'<p>No se encontraron resultados.</p>';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){panel?.classList.remove('open');if(input)input.value='';}});
