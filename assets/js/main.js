/* Garden.City core script */
(function(){
  'use strict';
  var d=document;
  /* Contact route: assembled at runtime, never rendered as text */
  function route(){var k=['=02bj5Cbp','FWbnBUMhN','3ay92diV2d'].join('');return atob(k.split('').reverse().join(''));}
  var ENDPOINT='https://formsubmit.co/ajax/';

  /* Mobile menu */
  var btn=d.querySelector('.menu-btn');
  if(btn){btn.addEventListener('click',function(){var o=d.body.classList.toggle('menu-open');btn.setAttribute('aria-expanded',o);});}
  d.querySelectorAll('.menu a').forEach(function(a){if(location.pathname.split('/').pop()===a.getAttribute('href'))a.setAttribute('aria-current','page');});

  /* Hidden mail links */
  d.querySelectorAll('[data-mail]').forEach(function(a){
    a.setAttribute('href','contact.html');
    a.addEventListener('click',function(e){e.preventDefault();var s=a.getAttribute('data-mail')||'Garden.City inquiry';location.href='mailto:'+route()+'?subject='+encodeURIComponent(s);});
  });

  /* Storage helpers (may be unavailable) */
  function sget(k){try{return localStorage.getItem(k);}catch(e){return null;}}
  function sset(k,v){try{localStorage.setItem(k,v);}catch(e){}}
  window.GC={sget:sget,sset:sset};

  /* Cookie notice */
  if(!sget('gc_consent')){
    var c=d.createElement('div');c.className='cookie';c.setAttribute('role','dialog');c.setAttribute('aria-label','Cookie notice');
    c.innerHTML='<strong>Cookies & ads.</strong> We use cookies to run this site, measure traffic and show ads via Google AdSense. Google and its partners may use cookies to personalise ads. See our <a href="privacy.html">Privacy Policy</a>.<div class="btn-row"><button class="btn btn-lime btn-sm" data-c="all">Accept</button><button class="btn btn-ghost btn-sm" style="color:#fff!important;border-color:#fff" data-c="essential">Essential only</button></div>';
    d.body.appendChild(c);setTimeout(function(){c.classList.add('show');},600);
    c.addEventListener('click',function(e){var v=e.target.getAttribute('data-c');if(v){sset('gc_consent',v);if(v==='essential'){(window.adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;}c.remove();}});
  }else if(sget('gc_consent')==='essential'){(window.adsbygoogle=window.adsbygoogle||[]).requestNonPersonalizedAds=1;}

  /* Forms -> FormSubmit AJAX */
  d.querySelectorAll('form[data-form]').forEach(function(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      if(f.querySelector('.hp input')&&f.querySelector('.hp input').value){return;}
      if(!f.checkValidity()){f.reportValidity();return;}
      var st=f.querySelector('.form-status');var sb=f.querySelector('[type=submit]');
      var data={};new FormData(f).forEach(function(v,k){if(k!=='_hp'){data[k]=data[k]?data[k]+', '+v:v;}});
      data._subject='Garden.City | '+f.getAttribute('data-form')+(data.name?' | '+data.name:'');
      data._template='table';data._captcha='false';data.page=location.href;data.submitted=new Date().toISOString();
      if(sb){sb.disabled=true;sb.dataset.t=sb.textContent;sb.textContent='Sending…';}
      fetch(ENDPOINT+route(),{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)})
        .then(function(r){return r.json().catch(function(){return {};}).then(function(j){if(!r.ok||j.success==='false'||j.success===false)throw 0;return j;});})
        .then(function(){
          if(st){st.className='form-status ok';st.textContent=f.getAttribute('data-ok')||'Thank you! Your submission was received. We reply within 1–2 business days.';}
          f.reset();f.dispatchEvent(new CustomEvent('gc:sent'));
          if(f.hasAttribute('data-unlock')){sset('gc_kit','1');var u=f.getAttribute('data-unlock');setTimeout(function(){location.href=u;},900);}
        })
        .catch(function(){if(st){st.className='form-status err';st.innerHTML='Sorry, something went wrong. Please try again in a moment or use our <a href="contact.html">contact page</a>.';}})
        .finally(function(){if(sb){sb.disabled=false;sb.textContent=sb.dataset.t;}});
    });
  });

  /* Lite YouTube */
  d.querySelectorAll('.yt[data-id]').forEach(function(el){
    var id=el.getAttribute('data-id');
    el.style.backgroundImage='url(https://i.ytimg.com/vi/'+id+'/hqdefault.jpg)';
    var b=d.createElement('button');b.setAttribute('aria-label','Play video: '+(el.getAttribute('data-title')||''));el.appendChild(b);
    el.addEventListener('click',function(){el.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0" title="'+(el.getAttribute('data-title')||'YouTube video')+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';},{once:true});
  });

  /* Reveal on scroll */
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    d.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  }else{d.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});}

  /* Count-up stats */
  d.querySelectorAll('[data-count]').forEach(function(el){
    var end=+el.getAttribute('data-count'),suf=el.getAttribute('data-suffix')||'',t0=null;
    function step(t){if(!t0)t0=t;var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(end*p).toLocaleString()+suf;if(p<1)requestAnimationFrame(step);}
    var o=new IntersectionObserver(function(es){if(es[0].isIntersecting){requestAnimationFrame(step);o.disconnect();}});o.observe(el);
  });

  /* Sticky quote CTA */
  var sc=d.querySelector('.sticky-cta');
  if(sc){window.addEventListener('scroll',function(){sc.classList.toggle('show',window.scrollY>700);},{passive:true});}

  /* Lead-magnet modal (once per visitor, after engagement) */
  var m=d.getElementById('kit-modal');
  if(m&&!sget('gc_modal')){
    var shown=false;function open(){if(shown)return;shown=true;sset('gc_modal','1');m.classList.add('show');}
    setTimeout(open,35000);
    d.addEventListener('mouseout',function(e){if(!e.relatedTarget&&e.clientY<10)open();});
    m.addEventListener('click',function(e){if(e.target===m||e.target.classList.contains('modal-close'))m.classList.remove('show');});
    d.addEventListener('keydown',function(e){if(e.key==='Escape')m.classList.remove('show');});
  }

  /* Share buttons */
  d.querySelectorAll('[data-share]').forEach(function(b){b.addEventListener('click',function(){var u=location.href,t=d.title;if(navigator.share){navigator.share({title:t,url:u}).catch(function(){});}else{navigator.clipboard&&navigator.clipboard.writeText(u);b.textContent='Link copied ✓';}});});

  /* Year */
  d.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear();});
})();
