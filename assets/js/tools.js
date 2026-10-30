/* Garden.City interactive tools */
(function(){
'use strict';
var d=document;
/* n name, e emoji, t type, l light, s spaces, d difficulty 1-3, c min container litres, h days to harvest, p pollinator, sp plants per 30x30cm square, note */
var P=[
{n:'Cherry tomato',e:'🍅',t:'veg',l:['full'],s:['balcony','roof','yard'],d:2,c:20,h:65,p:false,sp:1,note:'Stake or cage; water deeply and consistently to avoid splitting.'},
{n:'Lettuce',e:'🥬',t:'veg',l:['full','part'],s:['sill','balcony','roof','yard'],d:1,c:4,h:45,p:false,sp:4,note:'Cut-and-come-again; bolts in heat, so give afternoon shade.'},
{n:'Spinach',e:'🥬',t:'veg',l:['full','part'],s:['balcony','roof','yard'],d:1,c:5,h:40,p:false,sp:9,note:'Cool-season crop. Sow in spring and autumn.'},
{n:'Kale',e:'🥬',t:'veg',l:['full','part'],s:['balcony','roof','yard'],d:1,c:10,h:55,p:false,sp:1,note:'Harvest outer leaves; flavour sweetens after light frost.'},
{n:'Swiss chard',e:'🥬',t:'veg',l:['full','part'],s:['balcony','roof','yard'],d:1,c:10,h:55,p:false,sp:4,note:'Productive for months and ornamental in pots.'},
{n:'Radish',e:'🌱',t:'veg',l:['full','part'],s:['balcony','roof','yard'],d:1,c:4,h:28,p:false,sp:16,note:'Fastest crop for beginners; sow every two weeks.'},
{n:'Bush beans',e:'🫘',t:'veg',l:['full'],s:['balcony','roof','yard'],d:1,c:10,h:55,p:true,sp:9,note:'Fix nitrogen; no support needed.'},
{n:'Pole beans',e:'🫘',t:'veg',l:['full'],s:['balcony','roof','yard'],d:1,c:15,h:65,p:true,sp:8,note:'Great vertical crop for railings and trellises.'},
{n:'Peas',e:'🫑',t:'veg',l:['full','part'],s:['balcony','roof','yard'],d:1,c:10,h:60,p:true,sp:8,note:'Cool-season climber; sow early spring.'},
{n:'Chili pepper',e:'🌶️',t:'veg',l:['full'],s:['sill','balcony','roof','yard'],d:2,c:10,h:75,p:true,sp:1,note:'Loves heat; ideal on south-facing balconies.'},
{n:'Sweet pepper',e:'🫑',t:'veg',l:['full'],s:['balcony','roof','yard'],d:2,c:15,h:75,p:true,sp:1,note:'Needs warmth and steady feeding.'},
{n:'Cucumber (compact)',e:'🥒',t:'veg',l:['full'],s:['balcony','roof','yard'],d:2,c:20,h:55,p:true,sp:2,note:'Train up a trellis to save space.'},
{n:'Zucchini (bush)',e:'🥒',t:'veg',l:['full'],s:['roof','yard'],d:2,c:40,h:50,p:true,sp:1,note:'Very productive but needs a large container.'},
{n:'Carrot (short)',e:'🥕',t:'veg',l:['full','part'],s:['balcony','roof','yard'],d:2,c:10,h:65,p:false,sp:16,note:'Choose round or short varieties for pots.'},
{n:'Beetroot',e:'🌱',t:'veg',l:['full','part'],s:['balcony','roof','yard'],d:1,c:10,h:55,p:false,sp:9,note:'Eat the leaves too.'},
{n:'Spring onion',e:'🧅',t:'veg',l:['full','part'],s:['sill','balcony','roof','yard'],d:1,c:3,h:40,p:false,sp:16,note:'Regrows from kitchen scraps in water.'},
{n:'Garlic',e:'🧄',t:'veg',l:['full'],s:['balcony','roof','yard'],d:1,c:10,h:240,p:false,sp:4,note:'Plant cloves in autumn, harvest early summer.'},
{n:'Pak choi',e:'🥬',t:'veg',l:['full','part'],s:['balcony','roof','yard'],d:1,c:5,h:45,p:false,sp:4,note:'Fast Asian green tolerant of part shade.'},
{n:'Microgreens',e:'🌱',t:'veg',l:['part','shade'],s:['sill'],d:1,c:1,h:12,p:false,sp:16,note:'Harvest in 1–2 weeks on any bright windowsill.'},
{n:'Basil',e:'🌿',t:'herb',l:['full'],s:['sill','balcony','roof','yard'],d:1,c:3,h:30,p:true,sp:4,note:'Pinch flower buds to keep leaves coming.'},
{n:'Mint',e:'🌿',t:'herb',l:['full','part','shade'],s:['sill','balcony','roof','yard'],d:1,c:5,h:30,p:true,sp:1,note:'Always grow in its own pot — it spreads aggressively.'},
{n:'Parsley',e:'🌿',t:'herb',l:['full','part'],s:['sill','balcony','roof','yard'],d:1,c:3,h:70,p:true,sp:4,note:'Tolerates lower light than most herbs.'},
{n:'Chives',e:'🌿',t:'herb',l:['full','part'],s:['sill','balcony','roof','yard'],d:1,c:2,h:60,p:true,sp:16,note:'Perennial; edible purple flowers attract bees.'},
{n:'Thyme',e:'🌿',t:'herb',l:['full'],s:['sill','balcony','roof','yard'],d:1,c:2,h:90,p:true,sp:4,note:'Drought tolerant; great for windy rooftops.'},
{n:'Rosemary',e:'🌿',t:'herb',l:['full'],s:['balcony','roof','yard'],d:2,c:10,h:90,p:true,sp:1,note:'Needs sharp drainage; bring indoors in hard winters.'},
{n:'Oregano',e:'🌿',t:'herb',l:['full'],s:['sill','balcony','roof','yard'],d:1,c:3,h:80,p:true,sp:1,note:'Hardy perennial, flowers loved by pollinators.'},
{n:'Cilantro (coriander)',e:'🌿',t:'herb',l:['full','part'],s:['sill','balcony','roof','yard'],d:2,c:4,h:45,p:true,sp:9,note:'Bolts in heat; sow little and often.'},
{n:'Lemongrass',e:'🌾',t:'herb',l:['full'],s:['balcony','roof','yard'],d:2,c:15,h:100,p:false,sp:1,note:'Tropical; overwinter indoors in cold climates.'},
{n:'Strawberry',e:'🍓',t:'fruit',l:['full'],s:['balcony','roof','yard'],d:2,c:4,h:90,p:true,sp:4,note:'Perfect for hanging baskets and towers.'},
{n:'Blueberry (dwarf)',e:'🫐',t:'fruit',l:['full'],s:['balcony','roof','yard'],d:3,c:40,h:365,p:true,sp:1,note:'Needs acidic ericaceous compost.'},
{n:'Dwarf citrus',e:'🍋',t:'fruit',l:['full'],s:['balcony','roof','yard'],d:3,c:40,h:365,p:true,sp:1,note:'Bring indoors below about 5°C.'},
{n:'Fig (patio)',e:'🌱',t:'fruit',l:['full'],s:['roof','yard'],d:2,c:50,h:365,p:false,sp:1,note:'Root restriction actually improves fruiting.'},
{n:'Lavender',e:'💜',t:'flower',l:['full'],s:['balcony','roof','yard'],d:1,c:10,h:null,p:true,sp:1,note:'Bee magnet; thrives on hot, dry, windy roofs.'},
{n:'Marigold',e:'🌼',t:'flower',l:['full'],s:['sill','balcony','roof','yard'],d:1,c:2,h:null,p:true,sp:4,note:'Classic companion plant beside tomatoes.'},
{n:'Nasturtium',e:'🌺',t:'flower',l:['full','part'],s:['balcony','roof','yard'],d:1,c:3,h:null,p:true,sp:1,note:'Edible flowers and leaves; trails beautifully.'},
{n:'Sunflower (dwarf)',e:'🌻',t:'flower',l:['full'],s:['balcony','roof','yard'],d:1,c:10,h:null,p:true,sp:1,note:'Feeds bees in summer, birds in autumn.'},
{n:'Zinnia',e:'🌸',t:'flower',l:['full'],s:['balcony','roof','yard'],d:1,c:4,h:null,p:true,sp:4,note:'Cut-and-come-again flowers butterflies adore.'},
{n:'Coneflower (Echinacea)',e:'🌸',t:'native',l:['full','part'],s:['balcony','roof','yard'],d:1,c:10,h:null,p:true,sp:1,note:'Hardy perennial native to North America.'},
{n:'Black-eyed Susan',e:'🌼',t:'native',l:['full','part'],s:['balcony','roof','yard'],d:1,c:10,h:null,p:true,sp:1,note:'Long bloom, tough in heat and drought.'},
{n:'Sedum (stonecrop)',e:'🌵',t:'native',l:['full'],s:['roof','balcony','yard'],d:1,c:2,h:null,p:true,sp:4,note:'Backbone of lightweight green roofs.'},
{n:'Pothos',e:'🪴',t:'house',l:['part','shade'],s:['sill'],d:1,c:3,h:null,p:false,sp:1,note:'Nearly indestructible trailing houseplant.'},
{n:'Snake plant',e:'🪴',t:'house',l:['full','part','shade'],s:['sill'],d:1,c:5,h:null,p:false,sp:1,note:'Tolerates neglect and low light.'},
{n:'ZZ plant',e:'🪴',t:'house',l:['part','shade'],s:['sill'],d:1,c:5,h:null,p:false,sp:1,note:'Stores water in rhizomes; water rarely.'},
{n:'Ferns (Boston)',e:'🌿',t:'house',l:['part','shade'],s:['sill','balcony'],d:2,c:5,h:null,p:false,sp:1,note:'Loves humidity; great for shady balconies.'}
];
var TYPES={veg:'Vegetable',herb:'Herb',fruit:'Fruit',flower:'Flower',native:'Native perennial',house:'Houseplant'};
var SP={sill:'Windowsill',balcony:'Balcony',roof:'Rooftop',yard:'Yard'};
var LIGHT={full:'Full sun (6h+)',part:'Part sun (3–6h)',shade:'Shade (<3h)'};
var DIFF=['','Easy','Moderate','Challenging'];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

/* ---------- Plant finder ---------- */
var pf=d.getElementById('pf');
if(pf){
 var st={light:'',space:'',type:'',diff:'',q:'',poll:false};
 var out=d.getElementById('pf-out'),cnt=d.getElementById('pf-count');
 function render(){
  var r=P.filter(function(p){return(!st.light||p.l.indexOf(st.light)>-1)&&(!st.space||p.s.indexOf(st.space)>-1)&&(!st.type||p.t===st.type)&&(!st.diff||p.d<=+st.diff)&&(!st.poll||p.p)&&(!st.q||p.n.toLowerCase().indexOf(st.q)>-1);});
  cnt.textContent=r.length+' plant'+(r.length===1?'':'s')+' match';
  out.innerHTML=r.map(function(p){return '<div class="card plant-card"><div class="emoji" aria-hidden="true">'+p.e+'</div><span class="tag">'+TYPES[p.t]+'</span><h3>'+esc(p.n)+'</h3><p>'+esc(p.note)+'</p><div class="attrs"><span>'+DIFF[p.d]+'</span><span>Min pot '+p.c+' L</span>'+(p.h?'<span>~'+p.h+' days</span>':'')+p.l.map(function(x){return '<span>'+LIGHT[x].split(' (')[0]+'</span>';}).join('')+(p.p?'<span>🐝 Pollinators</span>':'')+'</div></div>';}).join('')||'<p class="muted">No plants match. Try loosening a filter.</p>';
 }
 pf.addEventListener('input',function(e){var k=e.target.dataset.k;if(!k)return;st[k]=e.target.type==='checkbox'?e.target.checked:(k==='q'?e.target.value.trim().toLowerCase():e.target.value);render();});
 var u=new URLSearchParams(location.search);['light','space','type'].forEach(function(k){var v=u.get(k);if(v){st[k]=v;var el=pf.querySelector('[data-k='+k+']');if(el)el.value=v;}});
 render();
}

/* ---------- Planting calendar (weeks relative to last spring frost) ---------- */
var C=[
{n:'Tomato',i:[-8,-6],o:[1,4],h:[10,20]},{n:'Pepper & chili',i:[-10,-8],o:[2,5],h:[12,22]},{n:'Eggplant',i:[-10,-8],o:[2,5],h:[12,20]},
{n:'Lettuce',i:[-6,-4],o:[-4,2],h:[2,8],o2:[20,26],h2:[26,32]},{n:'Spinach',i:null,o:[-6,-2],h:[2,8],o2:[20,24],h2:[26,32]},{n:'Kale',i:[-8,-6],o:[-4,0],h:[4,30]},
{n:'Peas',i:null,o:[-6,-3],h:[5,10]},{n:'Radish',i:null,o:[-4,2],h:[0,6],o2:[22,28],h2:[25,32]},{n:'Carrot',i:null,o:[-3,3],h:[8,16]},
{n:'Beetroot',i:null,o:[-2,4],h:[7,14]},{n:'Bush beans',i:null,o:[1,8],h:[9,16]},{n:'Cucumber',i:[-3,-2],o:[2,5],h:[9,16]},
{n:'Zucchini',i:[-3,-2],o:[2,5],h:[8,16]},{n:'Basil',i:[-6,-4],o:[2,6],h:[6,18]},{n:'Parsley',i:[-10,-8],o:[-2,2],h:[6,26]},
{n:'Cilantro',i:null,o:[-2,2],h:[4,9],o2:[18,24],h2:[24,30]},{n:'Onion (sets)',i:null,o:[-4,-1],h:[12,18]},{n:'Garlic',i:null,o:[24,28],h:[10,14]},
{n:'Strawberry (plants)',i:null,o:[-2,2],h:[8,14]},{n:'Sunflower',i:null,o:[1,6],h:[10,18]}
];
var cal=d.getElementById('cal');
if(cal){
 var M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 function months(lf,a){if(!a)return[];var s=new Date(lf.getTime()+a[0]*6048e5),e=new Date(lf.getTime()+a[1]*6048e5),res=[];for(var t=new Date(s);t<=e;t=new Date(t.getTime()+6048e5)){var m=t.getMonth();if(res.indexOf(m)<0)res.push(m);}var em=e.getMonth();if(res.indexOf(em)<0)res.push(em);return res;}
 function draw(){
  var m=+d.getElementById('cal-m').value,day=+d.getElementById('cal-d').value;
  var lf=new Date(2027,m,day);
  var html='<table class="cal"><thead><tr><th>Crop</th>'+M.map(function(x){return '<th style="padding:8px 4px;text-align:center">'+x+'</th>';}).join('')+'</tr></thead><tbody>';
  C.forEach(function(c){var A=months(lf,c.i),B=months(lf,c.o).concat(months(lf,c.o2)),H=months(lf,c.h).concat(months(lf,c.h2));
   html+='<tr><td><strong>'+c.n+'</strong></td>';
   for(var k=0;k<12;k++){html+='<td class="m">'+(A.indexOf(k)>-1?'<i class="in" title="Start indoors"></i>':'')+(B.indexOf(k)>-1?'<i class="out" title="Sow / plant outdoors"></i>':'')+(H.indexOf(k)>-1?'<i class="hv" title="Harvest"></i>':'')+'</td>';}
   html+='</tr>';});
  d.getElementById('cal-out').innerHTML=html+'</tbody></table>';
  d.getElementById('cal-sum').textContent='Calendar based on an average last frost around '+M[m]+' '+day+'. Shift a week or two for microclimates: balconies and rooftops in dense cities often run warmer.';
  GC.sset('gc_frost',m+'|'+day);
 }
 var sv=(GC.sget('gc_frost')||'').split('|');if(sv.length===2){d.getElementById('cal-m').value=sv[0];d.getElementById('cal-d').value=sv[1];}
 cal.addEventListener('change',draw);draw();
}

/* ---------- Garden planner ---------- */
var pl=d.getElementById('planner');
if(pl){
 var GOOD=[['Cherry tomato','Basil'],['Cherry tomato','Marigold'],['Carrot (short)','Spring onion'],['Lettuce','Radish'],['Bush beans','Carrot (short)'],['Cucumber (compact)','Nasturtium'],['Strawberry','Spinach'],['Peas','Carrot (short)'],['Kale','Nasturtium'],['Chili pepper','Basil']];
 var BAD=[['Bush beans','Spring onion'],['Bush beans','Garlic'],['Peas','Garlic'],['Peas','Spring onion'],['Cherry tomato','Zucchini (bush)'],['Cherry tomato','Kale'],['Cucumber (compact)','Mint']];
 var plants=P.filter(function(p){return p.t!=='house';}),sel=plants[0],grid={},W=4,H=4;
 var pal=d.getElementById('pl-pal'),bed=d.getElementById('pl-bed'),info=d.getElementById('pl-info');
 pal.innerHTML=plants.map(function(p,i){return '<button type="button" data-i="'+i+'"'+(i===0?' class="on"':'')+'><span aria-hidden="true">'+p.e+'</span>'+esc(p.n)+' <small class="muted">×'+p.sp+'</small></button>';}).join('');
 pal.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;pal.querySelectorAll('button').forEach(function(x){x.classList.remove('on');});b.classList.add('on');sel=plants[+b.dataset.i];});
 function load(){try{var s=JSON.parse(GC.sget('gc_plan')||'null');if(s){W=s.W;H=s.H;grid=s.g||{};d.getElementById('pl-w').value=W;d.getElementById('pl-h').value=H;}}catch(e){}}
 function save(){GC.sset('gc_plan',JSON.stringify({W:W,H:H,g:grid}));}
 function find(n){for(var i=0;i<plants.length;i++)if(plants[i].n===n)return plants[i];}
 function drawBed(){
  bed.style.gridTemplateColumns='repeat('+W+',auto)';var h='';
  for(var y=0;y<H;y++)for(var x=0;x<W;x++){var k=x+'-'+y,p=grid[k]?find(grid[k]):null;h+='<button type="button" class="cell" data-k="'+k+'" aria-label="'+(p?p.n:'Empty square')+'" title="'+(p?esc(p.n)+' — '+p.sp+' per square':'Empty')+'">'+(p?p.e+'<small>'+p.sp+'</small>':'')+'</button>';}
  bed.innerHTML=h;summary();
 }
 function summary(){
  var c={};Object.keys(grid).forEach(function(k){if(k.split('-')[0]<W&&k.split('-')[1]<H)c[grid[k]]=(c[grid[k]]||0)+1;});
  var names=Object.keys(c),tot=0,list=names.map(function(n){var p=find(n);tot+=c[n]*p.sp;return '<li>'+p.e+' '+esc(n)+': '+c[n]+' sq → <strong>'+(c[n]*p.sp)+' plant'+(c[n]*p.sp>1?'s':'')+'</strong></li>';}).join('');
  var tips=[];GOOD.forEach(function(g){if(c[g[0]]&&c[g[1]])tips.push('✅ '+g[0]+' + '+g[1]+' are good companions.');});BAD.forEach(function(g){if(c[g[0]]&&c[g[1]])tips.push('⚠️ Keep '+g[0]+' and '+g[1]+' apart.');});
  info.innerHTML='<p><strong>'+W+' × '+H+' squares</strong> ('+(W*30)+' × '+(H*30)+' cm). '+Object.keys(grid).length+' planted, <strong>'+tot+' plants total</strong>.</p>'+(list?'<ul>'+list+'</ul>':'<p class="muted">Pick a plant on the left, then click squares to plant. Click again to clear.</p>')+(tips.length?'<div class="callout">'+tips.join('<br>')+'</div>':'');
 }
 bed.addEventListener('click',function(e){var c=e.target.closest('.cell');if(!c)return;var k=c.dataset.k;if(grid[k]===sel.n)delete grid[k];else grid[k]=sel.n;save();drawBed();});
 d.getElementById('pl-size').addEventListener('click',function(){W=Math.max(1,Math.min(12,+d.getElementById('pl-w').value||4));H=Math.max(1,Math.min(12,+d.getElementById('pl-h').value||4));save();drawBed();});
 d.getElementById('pl-clear').addEventListener('click',function(){grid={};save();drawBed();});
 d.getElementById('pl-print').addEventListener('click',function(){window.print();});
 load();drawBed();
}

/* ---------- Calculators ---------- */
function num(id){return parseFloat(d.getElementById(id).value)||0;}
var soil=d.getElementById('c-soil');
if(soil){soil.addEventListener('input',function(){
 var shape=d.getElementById('s-shape').value,q=Math.max(1,num('s-n')),L;
 d.getElementById('s-rect').style.display=shape==='rect'?'':'none';d.getElementById('s-round').style.display=shape==='round'?'':'none';
 if(shape==='rect')L=num('s-l')*num('s-w')*num('s-d')/1000;else{var r=num('s-dia')/2;L=Math.PI*r*r*num('s-dd')/1000;}
 L*=q;d.getElementById('s-out').innerHTML='You need about <b>'+Math.round(L).toLocaleString()+' L</b> of mix ('+(L/28.317).toFixed(1)+' cu ft) ≈ <b>'+Math.ceil(L/50)+'</b> × 50 L bags.';
});soil.dispatchEvent(new Event('input'));}
var load=d.getElementById('c-load');
if(load){load.addEventListener('input',function(){
 var L=num('l-soil'),area=Math.max(.1,num('l-area')),ppl=num('l-ppl'),dens=+d.getElementById('l-mix').value;
 var kg=L*dens*1.1+ppl*80+num('l-furn'),kpm=kg/area,msg,cls='';
 if(kpm<100)msg='Low load. Still confirm your building’s rules.';else if(kpm<200)msg='Moderate. Spread weight to the edges/over beams and check with building management.';else msg='High. Consult a structural engineer before installing.';
 d.getElementById('l-out').innerHTML='Estimated total <b>'+Math.round(kg).toLocaleString()+' kg</b> ≈ <b>'+Math.round(kpm)+' kg/m²</b> ('+(kpm*0.2048).toFixed(0)+' lb/ft²). '+msg;
});load.dispatchEvent(new Event('input'));}
var wat=d.getElementById('c-water');
if(wat){wat.addEventListener('input',function(){
 var L=num('w-l')*Math.max(0,num('w-n')),f=+d.getElementById('w-clim').value,day=L*f;
 d.getElementById('w-out').innerHTML='Plan for roughly <b>'+day.toFixed(1)+' L/day</b> ('+(day*7).toFixed(0)+' L/week) in peak season. Check soil 2–3 cm deep before watering; terracotta and windy rooftops need more.';
});wat.dispatchEvent(new Event('input'));}
var cost=d.getElementById('c-cost');
if(cost){var R={balcony:[300,2500],rooftop:[5000,40000],vertical:[1500,15000],backyard:[4000,30000],edible:[800,6000],irrigation:[1000,5000]};
 cost.addEventListener('input',function(){var t=d.getElementById('k-type').value,f=+d.getElementById('k-size').value,r=R[t];
  var m=function(v){return '$'+(Math.round(v/50)*50).toLocaleString();};
  d.getElementById('k-out').innerHTML='Typical professional range: <b>'+m(r[0]*f)+' – '+m(r[1]*f)+'</b><br><a class="btn btn-lime btn-sm" style="margin-top:12px" href="get-quote.html?type='+t+'">Get real quotes for this project &rarr;</a>';
 });cost.dispatchEvent(new Event('input'));}
})();
