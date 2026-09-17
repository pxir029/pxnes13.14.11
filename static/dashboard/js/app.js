
const I18N={
fa:{sec_panel:'پنل',sec_sys:'سیستم',nav_dash:'داشبورد',nav_configs:'کانفیگ‌ها',nav_groups:'گروه‌ها',nav_create:'ساخت کانفیگ',nav_stats:'آمار',nav_logs:'لاگ فعالیت',nav_settings:'تنظیمات',nav_support:'پشتیبانی',nav_donate:'حمایت مالی',nav_news:'اخبار',nav_admins:'ادمین‌ها',refresh_news:'بروزرسانی اطلاعیه',admins_sub:'ساخت اکانت ادمین با دسترسی سفارشی',admin_create:'ساخت اکانت ادمین',admin_user:'نام کاربری',admin_pw:'رمز عبور',admin_pw2:'تکرار رمز',admin_perms:'دسترسی‌ها',admin_btn:'ساخت اکانت',admin_list:'لیست ادمین‌ها',refresh:'بروزرسانی',refresh_stats:'بروزرسانی آمار',refresh_panel:'بروزرسانی پنل',nav_telegram:'ربات تلگرام',tg_sub:'توکن ربات و آیدی عددی ادمین · فعال‌سازی خودکار و وب‌هوک',tg_config:'پیکربندی ربات',tg_token:'توکن ربات (BotFather)',tg_admin:'آیدی عددی ادمین',tg_webhook:'فعال‌سازی Webhook (پیشنهادی روی Railway)',tg_activate:'ذخیره و فعال‌سازی ربات',tg_help:'راهنما',tg_h1:'از @BotFather یک ربات بساز و توکن را کپی کن',tg_h2:'آیدی عددی خودت را از @userinfobot بگیر',tg_h3:'ذخیره کن — وب‌هوک خودکار روی دامنه Railway ست می‌شود',logout:'خروج',loading:'در حال بارگذاری...',m_conns:'اتصالات فعال',m_traffic:'ترافیک کل',m_links:'کانفیگ‌ها',m_uptime:'آپتایم سرور',quick_create:'ساخت کانفیگ',quick_create_desc:'ساخت دستی با محدودیت ترافیک، سرعت، تعداد و انقضا',auto_create:'ساخت خودکار (پیشنهادی)',auto_create_desc:'ساخت سریع با تنظیمات بهینه · لینک VLESS و ساب',configs_sub:'مدیریت لینک‌ها · VLESS و ساب',th_name:'نام',th_proto:'پروتکل',th_status:'وضعیت',th_usage:'مصرف',th_ops:'عملیات',manual_create:'ساخت دستی',label_name:'نام',label_proto:'پروتکل',label_count:'تعداد کانفیگ در ساب (۱–۴۰)',label_limit:'محدودیت حجم',label_unit:'واحد',label_days:'انقضا (روز)',label_ip:'محدودیت IP',label_speed:'سرعت (Mbps)',btn_create:'ساخت',btn_auto:'ساخت خودکار',auto_desc:'با یک کلیک کانفیگ بهینه ساخته می‌شود. بعد از ساخت لینک VLESS و ساب در اختیار شماست.',stats_sub:'ترافیک و اتصالات · فیلتر زمانی',r_day:'روز',r_week:'هفته',r_month:'ماه',r_all:'کل',panel_info:'اطلاعات کل پنل',lang_label:'زبان',change_pw:'تغییر رمز عبور',pw_cur:'رمز فعلی',pw_new:'رمز جدید',pw_cf:'تکرار رمز',btn_save:'ذخیره',github:'گیت‌هاب',telegram:'تلگرام',channel:'کانال پشتیبان',theme:'تم',theme_dark:'تم تیره',theme_light:'تم روشن',created_title:'کانفیگ ساخته شد',copy_vless:'کپی VLESS',copy_sub:'کپی ساب',sub_label:'سابسکریپشن'},
en:{sec_panel:'PANEL',sec_sys:'SYSTEM',nav_dash:'Dashboard',nav_configs:'Configs',nav_groups:'Groups',nav_create:'Create Config',nav_stats:'Statistics',nav_logs:'Activity Log',nav_settings:'Settings',nav_support:'Support',nav_donate:'Donate',nav_news:'News',nav_admins:'Admins',refresh_news:'Refresh news',admins_sub:'Create admin accounts with custom access',admin_create:'Create admin account',admin_user:'Username',admin_pw:'Password',admin_pw2:'Confirm password',admin_perms:'Permissions',admin_btn:'Create account',admin_list:'Admin list',refresh:'Refresh',refresh_stats:'Refresh stats',refresh_panel:'Update panel',nav_telegram:'Telegram bot',tg_sub:'Bot token and numeric admin ID · auto activate and webhook',tg_config:'Bot configuration',tg_token:'Bot token (BotFather)',tg_admin:'Admin numeric ID',tg_webhook:'Enable Webhook (recommended on Railway)',tg_activate:'Save and activate bot',tg_help:'Guide',tg_h1:'Create a bot with @BotFather and copy the token',tg_h2:'Get your numeric ID from @userinfobot',tg_h3:'Save — webhook is set automatically on Railway domain',logout:'Logout',loading:'Loading...',m_conns:'Active connections',m_traffic:'Total traffic',m_links:'Configs',m_uptime:'Server uptime',quick_create:'Create Config',quick_create_desc:'Manual create with traffic, speed, count and expiry',auto_create:'Auto Create (Suggested)',auto_create_desc:'Quick optimal create · VLESS and Sub links',configs_sub:'Manage links · VLESS and Sub',th_name:'Name',th_proto:'Protocol',th_status:'Status',th_usage:'Usage',th_ops:'Actions',manual_create:'Manual create',label_name:'Name',label_proto:'Protocol',label_count:'Configs in sub (1–40)',label_limit:'Traffic limit',label_unit:'Unit',label_days:'Expiry (days)',label_ip:'IP limit',label_speed:'Speed (Mbps)',btn_create:'Create',btn_auto:'Auto create',auto_desc:'One click creates an optimal config. VLESS and Sub links will be shown.',stats_sub:'Traffic and connections · time filter',r_day:'Day',r_week:'Week',r_month:'Month',r_all:'All',panel_info:'Panel overview',lang_label:'Language',change_pw:'Change password',pw_cur:'Current password',pw_new:'New password',pw_cf:'Confirm password',btn_save:'Save',github:'GitHub',telegram:'Telegram',channel:'Support channel',theme:'Theme',theme_dark:'Dark theme',theme_light:'Light theme',created_title:'Config created',copy_vless:'Copy VLESS',copy_sub:'Copy Sub',sub_label:'Subscription'}
};
let lang=localStorage.getItem('px_lang')||'fa';
let statRange='month';
function t(k){return (I18N[lang]||I18N.fa)[k]||k}
function applyLang(){
  document.getElementById('htmlRoot').lang=lang;
  document.getElementById('htmlRoot').dir=lang==='fa'?'rtl':'ltr';
  document.body.classList.toggle('en',lang==='en');
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(I18N[lang][k])el.textContent=I18N[lang][k]});
  const tl=document.getElementById('themeLabel');
  if(tl) tl.textContent=document.documentElement.classList.contains('light')?t('theme_dark'):t('theme_light');
}
function setLang(l){lang=l;localStorage.setItem('px_lang',l);applyLang();toast(l==='fa'?'زبان فارسی':'English')}

function setTheme(mode){
  if(mode==='light') document.documentElement.classList.add('light');
  else document.documentElement.classList.remove('light');
  localStorage.setItem('px_theme',mode);
  applyLang();
}
function toggleTheme(){
  const isLight=document.documentElement.classList.contains('light');
  setTheme(isLight?'dark':'light');
}
(function(){const th=localStorage.getItem('px_theme')||'dark';setTheme(th)})();

const sb=document.getElementById('sidebar'),main=document.getElementById('main');
document.getElementById('sbToggle').onclick=()=>{
  sb.classList.toggle('collapsed');
  main.classList.toggle('expanded',sb.classList.contains('collapsed'));
  localStorage.setItem('sb_c',sb.classList.contains('collapsed')?'1':'0');
};
if(localStorage.getItem('sb_c')==='1'){sb.classList.add('collapsed');main.classList.add('expanded')}
document.getElementById('mobMenuBtn').onclick=()=>{sb.classList.add('open');document.getElementById('overlay').classList.add('show')};
document.getElementById('overlay').onclick=()=>{sb.classList.remove('open');document.getElementById('overlay').classList.remove('show')};

function goPage(name){
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('on',n.dataset.page===name));
  document.querySelectorAll('.page').forEach(p=>p.classList.toggle('on',p.id==='page-'+name));
  sb.classList.remove('open');document.getElementById('overlay').classList.remove('show');
  window.scrollTo({top:0,behavior:'smooth'});
  if(name==='logs')loadLogs();
  if(name==='configs'||name==='dash'||name==='stats')refreshAll();
}
document.querySelectorAll('.nav-item').forEach(el=>el.addEventListener('click',()=>goPage(el.dataset.page)));

function toast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(window.__tt);window.__tt=setTimeout(()=>el.classList.remove('show'),2200);
}
async function api(url,opts={}){
  try{
    const r=await fetch(url,{cache:'no-store',credentials:'same-origin',...opts});
    if(r.status===401){location.href='/login';return null}
    let data=null;try{data=await r.json()}catch{data={ok:false}}
    if(!r.ok){toast(data.detail||data.error||'Error');return null}
    return data;
  }catch(e){toast(lang==='fa'?'ارتباط برقرار نشد':'Connection failed');return null}
}
function fmtB(b){b=Number(b)||0;if(b<1024)return b+' B';if(b<1024**2)return (b/1024).toFixed(1)+' KB';if(b<1024**3)return (b/1024**2).toFixed(2)+' MB';return (b/1024**3).toFixed(2)+' GB'}
function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}

async function refreshAll(){
  if(typeof loadGroups==='function') try{await loadGroups()}catch(e){}
  const links=await api('/api/links');
  if(!links)return;
  const arr=Array.isArray(links.links)?links.links:(Array.isArray(links)?links:[]);
  document.getElementById('mLinks').textContent=arr.length;
  let active=0,used=0;
  arr.forEach(l=>{if(l.active!==false)active++;used+=Number(l.used_bytes||0)});
  document.getElementById('mTraffic').textContent=fmtB(used);
  document.getElementById('sTraffic').textContent=fmtB(used);
  document.getElementById('sActive').textContent=active;
  document.getElementById('lastUpd').textContent=(lang==='fa'?'بروزرسانی: ':'Updated: ')+new Date().toLocaleTimeString(lang==='fa'?'fa-IR':'en-US');
  try{
    const c=await api('/api/connections');
    const cnt=(c&&c.connections)?c.connections.length:((c&&typeof c.count==='number')?c.count:0);
    document.getElementById('mConns').textContent=cnt;
    document.getElementById('sConns').textContent=cnt;
  }catch(e){}
  try{
    const h=await fetch('/health',{cache:'no-store'}).then(r=>r.json());
    if(h&&h.uptime){
      document.getElementById('mUptime').textContent=h.uptime;
      const su=document.getElementById('sUptime');if(su)su.textContent=h.uptime;
    }
  }catch(e){}
    __allLinks=arr;
  softUpdateLinks(arr);
  document.getElementById('panelInfo').innerHTML=lang==='fa'
    ?`کل کانفیگ: <b>${arr.length}</b> · فعال: <b>${active}</b> · مصرف: <b>${fmtB(used)}</b> · بازه: <b>${statRange}</b>`
    :`Total: <b>${arr.length}</b> · Active: <b>${active}</b> · Usage: <b>${fmtB(used)}</b> · Range: <b>${statRange}</b>`;
}


function linkBadgeClass(l){
  const conn=Number(l.connected_ips||0);
  const used=Number(l.used_bytes||0), lim=Number(l.limit_bytes||0);
  let usagePct=lim>0?(used/lim)*100:0;
  let expWarn=false, expDead=false;
  if(l.expires_at){try{const ms=new Date(l.expires_at)-Date.now();if(ms<=0)expDead=true;else if(ms<3*864e5)expWarn=true}catch(e){}}
  if(expDead||usagePct>=90) return 'conn-badge red';
  if(expWarn||usagePct>=70) return 'conn-badge orange';
  if(conn>0) return 'conn-badge green';
  return 'conn-badge gray';
}
function softUpdateLinks(arr){
  const tb=document.getElementById('linksTable');
  if(!tb) return;
  const rows=[...tb.querySelectorAll('tr[data-uid]')];
  const existing=rows.map(r=>r.getAttribute('data-uid'));
  const incoming=arr.map(l=>String(l.uuid||l.id||''));
  const same = existing.length===incoming.length && existing.every((id,i)=>id===incoming[i]);
  // اگر در حال درگ یا انتخاب هستیم، فقط سلول‌ها را آپدیت کن
  const selecting = document.querySelectorAll('.cfg-chk:checked').length>0;
  const dragging = !!__dragUid;
  if(!same || existing.length===0){
    if(dragging || selecting){
      // فقط آمار ردیف‌های موجود را آپدیت کن، ساختار را نشکن
      window.__linksMap = window.__linksMap || {};
      arr.forEach(l=>{
        const uid=String(l.uuid||l.id||'');
        window.__linksMap[uid]=l;
        const tr=tb.querySelector(`tr[data-uid="${uid}"]`);
        if(!tr) return;
        patchLinkRow(tr, l);
      });
      return;
    }
    renderLinks(arr);
    return;
  }
  window.__linksMap = window.__linksMap || {};
  arr.forEach(l=>{
    const uid=String(l.uuid||l.id||'');
    window.__linksMap[uid]=l;
    const tr=tb.querySelector(`tr[data-uid="${uid}"]`);
    if(tr) patchLinkRow(tr, l);
  });
}
function patchLinkRow(tr, l){
  const conn=Number(l.connected_ips||0);
  const badge=tr.querySelector('.conn-badge');
  if(badge){ badge.textContent=String(conn); badge.className=linkBadgeClass(l); }
  const usageCell=tr.querySelector('[data-usage]');
  if(usageCell){
    usageCell.textContent = fmtB(l.used_bytes) + (l.limit_bytes?(' / '+fmtB(l.limit_bytes)):'');
  }
  // وضعیت سوئیچ را اگر کاربر همین الان عوض نکرده دست نزن — فقط اگر API فرق دارد و فوکوس نیست
  const sw=tr.querySelector('.switch input[type=checkbox]');
  if(sw && document.activeElement!==sw){
    const on=l.active!==false&&!l.expired;
    if(sw.checked!==on) sw.checked=on;
  }
}
function renderLinks(arr){
  const tb=document.getElementById('linksTable');
  if(!arr.length){tb.innerHTML=`<tr><td colspan="7" style="text-align:center;color:var(--t3);padding:28px">${lang==='fa'?'کانفیگی نیست':'No configs'}</td></tr>`;updateBulkBar();return}
  window.__linksMap={};
  const catMap=window.__catMap||{};
  // preserve checked state
  const prevChecked=new Set([...document.querySelectorAll('.cfg-chk:checked')].map(c=>c.value));
  tb.innerHTML=arr.map(l=>{
    const uid=l.uuid||l.id||'';
    window.__linksMap[uid]=l;
    const name=l.label||l.name||String(uid).slice(0,8);
    const proto=l.protocol||'vless-ws';
    const on=l.active!==false&&!l.expired;
    const conn=Number(l.connected_ips||0);
    const gname=catMap[String(l.category_id||'')]||'';
    const chk=prevChecked.has(uid)?'checked':'';
    return `<tr draggable="true" data-uid="${esc(uid)}" ondragstart="cfgDragStart(event)" ondragover="cfgDragOver(event)" ondrop="cfgDrop(event)" ondragend="cfgDragEnd(event)">
      <td style="text-align:center;padding:10px 8px;vertical-align:middle"><input type="checkbox" class="cfg-chk" value="${esc(uid)}" ${chk} onchange="updateBulkBar()" style="width:16px;height:16px;margin:0;vertical-align:middle;cursor:pointer"></td>
      <td style="cursor:grab;color:var(--t3);user-select:none" title="کشیدن">⋮⋮</td>
      <td>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <b>${esc(name)}</b>
          <span class="${linkBadgeClass(l)}" title="${lang==='fa'?'متصل الان':'Online now'}">${conn}</span>
          ${gname?`<span style="font-size:10px;padding:2px 7px;border-radius:8px;background:var(--hover);color:var(--t3)">${esc(gname)}</span>`:''}
        </div>
      </td>
      <td style="color:var(--t3);font-size:11px">${esc(proto)}</td>
      <td><label class="switch"><input type="checkbox" ${on?'checked':''} onchange="toggleLink('${esc(uid)}',this.checked)"><span class="slider"></span></label></td>
      <td data-usage>${fmtB(l.used_bytes)}${l.limit_bytes?(' / '+fmtB(l.limit_bytes)):''}</td>
      <td class="ops">
        <button class="btn btn-sm" onclick="copyLinkById('${esc(uid)}')" title="VLESS"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
        <button class="btn btn-sm" onclick="copySubById('${esc(uid)}')" title="Sub"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg></button>
        <a class="btn btn-sm" href="/info/${esc(uid)}" target="_blank" title="INFO" style="text-decoration:none"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg></a>
        <button class="btn btn-sm" onclick="resetUsage('${esc(uid)}')" title="Reset"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></button>
        <button class="btn btn-sm btn-d" onclick="deleteLink('${esc(uid)}')"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg></button>
      </td>
    </tr>`;
  }).join('');
  updateBulkBar();
}
function getLinkUrl(l){if(!l)return '';return l.vless_full||l.vless||l.vless_link||l.link||''}
function getSubUrl(l){if(!l)return '';return l.sub||l.sub_url||l.info||''}
async function copyText(text){
  text=String(text||'').trim();
  if(!text||text==='—'){toast(lang==='fa'?'لینکی نیست':'Nothing to copy');return}
  try{
    if(navigator.clipboard&&window.isSecureContext) await navigator.clipboard.writeText(text);
    else{const ta=document.createElement('textarea');ta.value=text;ta.style.cssText='position:fixed;left:-9999px';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta)}
    toast(lang==='fa'?'کپی شد':'Copied');
  }catch(e){toast(lang==='fa'?'کپی نشد':'Copy failed')}
}
async function copyLinkById(uid){await copyText(getLinkUrl((window.__linksMap||{})[uid]))}
async function copySubById(uid){await copyText(getSubUrl((window.__linksMap||{})[uid]))}
async function toggleLink(uid,state){
  // optimistic UI — رنگ بلافاصله عوض می‌شود
  if(window.__linksMap && window.__linksMap[uid]){
    window.__linksMap[uid].active = !!state;
    if(window.__linksMap[uid].expired && state) window.__linksMap[uid].expired = false;
  }
  if(typeof __allLinks !== 'undefined' && Array.isArray(__allLinks)){
    const item = __allLinks.find(x => (x.uuid||x.id)===uid);
    if(item) item.active = !!state;
  }
  const r=await api('/api/links/'+uid,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({active:!!state})});
  if(r===null){
    // rollback
    if(window.__linksMap && window.__linksMap[uid]) window.__linksMap[uid].active = !state;
    refreshAll();
    return;
  }
  toast(state?(lang==='fa'?'فعال شد':'Enabled'):(lang==='fa'?'غیرفعال شد':'Disabled'));
}
async function deleteLink(uid){
  if(!confirm(lang==='fa'?'حذف شود؟':'Delete?'))return;
  const r=await api('/api/links/'+uid,{method:'DELETE'});
  if(r!==null){toast(lang==='fa'?'حذف شد':'Deleted');refreshAll()}
}
function showResult(data){
  if(!data)return;
  document.getElementById('resVless').textContent=getLinkUrl(data)||'—';
  document.getElementById('resSub').textContent=getSubUrl(data)||'—';
  document.getElementById('resultModal').classList.add('open');
}
function closeResult(){document.getElementById('resultModal').classList.remove('open')}
document.getElementById('resultModal').addEventListener('click',e=>{if(e.target.id==='resultModal')closeResult()});

async function doAutoAI(){
  toast(lang==='fa'?'در حال ساخت پک هوش مصنوعی...':'Creating AI pack...');
  const count=Math.max(1,Math.min(40,Number(document.getElementById('aiCount')?.value)||25));
  const r=await api('/api/links/auto-ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({config_count:count,use_nodes:document.getElementById('aiUseNodes')?!!document.getElementById('aiUseNodes').checked:true})});
  if(r){showResult(r);refreshAll();toast(lang==='fa'?'پک AI با '+count+' کانفیگ ساخته شد':'AI pack ready')}
}
async function doAutoCreate(){
  toast(lang==='fa'?'در حال ساخت...':'Creating...');
  const count=Math.max(1,Math.min(40,Number(document.getElementById('aCount')?.value)||1));
  const protocol=document.getElementById('aProto')?.value||undefined;
  let r=await api('/api/links/auto',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({config_count:count,protocol,use_nodes:!!document.getElementById('aUseNodes')?.checked})});
  if(!r){
    r=await api('/api/links',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({label:'auto-'+Date.now().toString(36).slice(-5),limit_value:0,limit_unit:'GB',config_count:count})});
  }
  if(r){showResult(r);refreshAll()}
}
async function doManualCreate(){
  const body={
    label:document.getElementById('cName').value||undefined,
    protocol:document.getElementById('cProto')?.value||undefined,
    category_id:document.getElementById('cGroup')?.value||'0',
    config_count:Math.max(1,Math.min(40,Number(document.getElementById('cCount').value)||1)),
    limit_value:Number(document.getElementById('cLimit').value)||0,
    limit_unit:document.getElementById('cUnit').value||'GB',
    expires_days:Number(document.getElementById('cDays').value)||0,
    ip_limit:Number(document.getElementById('cIp').value)||0,
    speed_limit_value:Number(document.getElementById('cSpeed').value)||0,
    speed_limit_unit:'MBIT'
  };
  const r=await api('/api/links',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  if(r){showResult(r);refreshAll()}
}
async function doChangePw(){
  const cur=document.getElementById('pwCur').value,nw=document.getElementById('pwNew').value,cf=document.getElementById('pwCf').value;
  if(nw!==cf){toast(lang==='fa'?'رمزها یکی نیستند':'Passwords mismatch');return}
  const r=await api('/api/change-password',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({current_password:cur,new_password:nw,repeat_password:cf})});
  if(r){toast(lang==='fa'?'رمز تغییر کرد':'Password changed');document.getElementById('pwCur').value='';document.getElementById('pwNew').value='';document.getElementById('pwCf').value=''}
}
async function loadLogs(){
  const box=document.getElementById('logsBox');
  const data=await api('/api/activity');
  const logs=Array.isArray(data)?data:(data&&data.logs)||[];
  if(!logs.length){box.innerHTML=`<div style="text-align:center;color:var(--t3);padding:24px">${lang==='fa'?'لاگی نیست':'No logs'}</div>`;return}
  box.innerHTML=logs.slice().reverse().map(l=>{
    const tm=(l.time||l.ts||'').toString().slice(11,19)||'—';
    return `<div class="log-item"><div class="log-time">${esc(tm)}</div><div class="log-msg">${esc(l.message||l.msg||JSON.stringify(l))}</div></div>`;
  }).join('');
}
function setRange(r,el){
  statRange=r;
  document.querySelectorAll('#rangeTabs .range-tab').forEach(t=>t.classList.toggle('on',t.dataset.r===r));
  refreshAll();toast(t('r_'+r));
}
function randomName(){
  const chars='abcdefghijklmnopqrstuvwxyz0123456789';
  let s='';
  for(let i=0;i<10;i++) s+=chars[Math.floor(Math.random()*chars.length)];
  if(/^[0-9]/.test(s)) s='a'+s.slice(1);
  document.getElementById('cName').value=s;
}
async function panelUpdate(){
  const m=document.getElementById('panelModal');
  const t=document.getElementById('panelModalTitle');
  const b=document.getElementById('panelModalBody');
  t.textContent=lang==='fa'?'در حال بررسی آپدیت...':'Checking update...';
  b.innerHTML='<div style="text-align:center;padding:20px"><div class="spin"></div></div>';
  m.classList.add('open');
  await new Promise(r=>setTimeout(r,1400));
  t.textContent=lang==='fa'?'آپدیت پنل':'Panel update';
  b.innerHTML=(lang==='fa'
    ?'<p style="margin-bottom:12px">اپدیت با خطا مواجه شد. اپدیت را دستی انجام دهید.</p><a href="https://github.com/iran-px-panel/pxpanel" target="_blank" rel="noopener" style="color:var(--accent2);font-weight:700">github.com/iran-px-panel/pxpanel</a>'
    :'<p style="margin-bottom:12px">Update failed. Please update manually.</p><a href="https://github.com/iran-px-panel/pxpanel" target="_blank" rel="noopener" style="color:var(--accent2);font-weight:700">github.com/iran-px-panel/pxpanel</a>');
}
async function saveTelegram(){
  const token=document.getElementById('tgToken').value.trim();
  const admin=document.getElementById('tgAdmin').value.trim();
  const webhook=document.getElementById('tgWebhook').checked;
  if(!token||!admin){toast(lang==='fa'?'توکن و آیدی لازم است':'Token and admin ID required');return}
  toast(lang==='fa'?'در حال فعال‌سازی...':'Activating...');
  const r=await api('/api/telegram/settings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token,admin_ids:admin,webhook})});
  if(r){
    document.getElementById('tgStatus').textContent=r.message||(lang==='fa'?'فعال شد':'Enabled');
    toast(r.message||'OK');
  }
}
async function loadTelegram(){
  const r=await api('/api/telegram/settings');
  if(!r)return;
  if(r.admin_ids) document.getElementById('tgAdmin').value=r.admin_ids;
  document.getElementById('tgWebhook').checked=r.webhook!==false;
  document.getElementById('tgStatus').textContent=r.has_token?(lang==='fa'?'توکن ذخیره شده: ':'Token saved: ')+(r.token_masked||''):'';
}
const _goPage=goPage;
goPage=function(name){
  _goPage(name);
  if(name==='telegram') loadTelegram();
  if(name==='news') loadNews();
  if(name==='admins') loadAdmins();
  if(name==='groups') loadGroups();
  if(name==='settings') loadSecurity();
  if(name==='nodes') loadNodes();
};

const PERM_LABELS={
  fa:{dash:'داشبورد',configs:'کانفیگ‌ها',create:'ساخت',stats:'آمار',logs:'لاگ',settings:'تنظیمات',support:'پشتیبانی',telegram:'ربات',news:'اخبار',admins:'ادمین‌ها'},
  en:{dash:'Dashboard',configs:'Configs',create:'Create',stats:'Stats',logs:'Logs',settings:'Settings',support:'Support',telegram:'Bot',news:'News',admins:'Admins'}
};
let USER_PERMS=null;
let USER_ROLE='owner';
function buildPermChecks(containerId, selected){
  const box=document.getElementById(containerId);
  if(!box)return;
  const labels=PERM_LABELS[lang]||PERM_LABELS.fa;
  box.innerHTML=Object.keys(labels).map(k=>{
    const on=selected?!!selected[k]:(['dash','configs','create','stats','news'].includes(k));
    return `<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-radius:12px;background:var(--bg3);border:1px solid var(--card-b)">
      <span style="font-size:12px;font-weight:600">${labels[k]}</span>
      <label class="switch"><input type="checkbox" data-perm="${k}" ${on?'checked':''}><span class="slider"></span></label>
    </div>`;
  }).join('');
}
function readPermChecks(containerId){
  const out={};
  document.querySelectorAll('#'+containerId+' input[data-perm]').forEach(inp=>{out[inp.getAttribute('data-perm')]=inp.checked});
  return out;
}
async function loadMe(){
  const r=await api('/api/me');
  if(!r)return;
  USER_ROLE=r.role||'owner';
  USER_PERMS=r.permissions||{};
  document.querySelectorAll('.nav-item[data-perm]').forEach(el=>{
    const p=el.getAttribute('data-perm');
    if(USER_ROLE==='owner'){el.style.display='';return}
    el.style.display=USER_PERMS[p]?'':'none';
  });
  // hide admins for non-owner always if no perm
  document.querySelectorAll('.nav-item[data-page="admins"]').forEach(el=>{
    if(USER_ROLE!=='owner') el.style.display='none';
  });
}
async function loadNews(toastOk){
  const r=await api('/api/news');
  if(!r)return;
  document.getElementById('newsTitle').textContent=r.title||(lang==='fa'?'بدون عنوان':'No title');
  document.getElementById('newsBody').textContent=r.message||'';
  document.getElementById('newsMeta').textContent=(lang==='fa'?'بروزرسانی: ':'Updated: ')+(r.updated_at||'—');
  if(toastOk) toast(lang==='fa'?'اطلاعیه بروزرسانی شد':'News refreshed');
}
async function loadAdmins(){
  buildPermChecks('adPerms');
  const r=await api('/api/admins');
  const box=document.getElementById('adminsList');
  if(!r||!r.admins){box.innerHTML='<div style="color:var(--t3);text-align:center;padding:20px">—</div>';return}
  if(!r.admins.length){box.innerHTML=`<div style="color:var(--t3);text-align:center;padding:20px">${lang==='fa'?'ادمینی نیست':'No admins'}</div>`;return}
  const labels=PERM_LABELS[lang]||PERM_LABELS.fa;
  box.innerHTML=r.admins.map(a=>{
    const st=a.blocked?'🔴 مسدود':(a.valid?'🟢 فعال':'🟠 نامعتبر');
    const perms=Object.entries(a.permissions||{}).filter(([,v])=>v).map(([k])=>labels[k]||k).join(' · ')||'—';
    return `<div style="border:1px solid var(--card-b);border-radius:12px;padding:12px;margin-bottom:10px;background:var(--bg3)">
      <div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;align-items:center">
        <div><b>${esc(a.username)}</b> <span style="font-size:11px;color:var(--t3)">${st}</span></div>
        <div class="ops" style="align-items:center">
          <label class="switch" title="مسدود">
            <input type="checkbox" ${a.blocked?'checked':''} onchange="toggleBlockAdmin('${esc(a.id)}',this.checked)">
            <span class="slider"></span>
          </label>
          <button class="btn btn-sm btn-d" onclick="deleteAdmin('${esc(a.id)}')">حذف</button>
        </div>
      </div>
      <div style="font-size:11px;color:var(--t3);margin-top:8px">حجم: ${fmtB(a.used_bytes)}${a.limit_bytes?(' / '+fmtB(a.limit_bytes)):' / ∞'} · انقضا: ${a.expires_at||'∞'}</div>
      <div style="font-size:11px;color:var(--t2);margin-top:6px">${perms}</div>
    </div>`;
  }).join('');
}
async function createAdmin(){
  const body={
    username:document.getElementById('adUser').value.trim(),
    password:document.getElementById('adPw').value,
    repeat_password:document.getElementById('adPw2').value,
    limit_value:Number(document.getElementById('adLimit').value)||0,
    limit_unit:document.getElementById('adUnit').value,
    expires_days:Number(document.getElementById('adDays').value)||0,
    permissions:readPermChecks('adPerms')
  };
  const r=await api('/api/admins',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  if(r){toast(lang==='fa'?'اکانت ساخته شد':'Created');document.getElementById('adUser').value='';document.getElementById('adPw').value='';document.getElementById('adPw2').value='';loadAdmins()}
}
async function toggleBlockAdmin(id,blocked){
  const r=await api('/api/admins/'+id,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({blocked})});
  if(r){toast(blocked?'مسدود شد':'رفع شد');loadAdmins()}
}
async function deleteAdmin(id){
  if(!confirm(lang==='fa'?'حذف اکانت؟':'Delete?'))return;
  const r=await api('/api/admins/'+id,{method:'DELETE'});
  if(r){toast('OK');loadAdmins()}
}


async function loadProtocols(){
  const r=await api('/api/protocols');
  const list=(r&&r.protocols)||[];
  const def=(r&&r.default)||'vless-ws';
  ['cProto','aProto'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.innerHTML=list.map(p=>`<option value="${esc(p.id)}" ${p.id===def?'selected':''}>${esc(p.label||p.id)}</option>`).join('')
      ||'<option value="vless-ws">VLESS WebSocket</option>';
  });
}
let __allLinks=[];
function filterConfigs(){
  const q=(document.getElementById('cfgSearch')?.value||'').trim().toLowerCase();
  if(!q){renderLinks(__allLinks);return}
  renderLinks(__allLinks.filter(l=>{
    const name=(l.label||l.name||'').toLowerCase();
    const proto=(l.protocol||'').toLowerCase();
    const uid=String(l.uuid||l.id||'').toLowerCase();
    return name.includes(q)||proto.includes(q)||uid.includes(q);
  }));
}
async function resetUsage(uid){
  if(!confirm(lang==='fa'?'مصرف ریست شود؟':'Reset usage?'))return;
  const r=await api('/api/links/'+uid+'/reset-usage',{method:'POST'});
  if(r!==null){toast(lang==='fa'?'مصرف ریست شد':'Usage reset');refreshAll()}
}


let __dragUid=null;
function cfgDragStart(e){__dragUid=e.currentTarget.getAttribute('data-uid');e.currentTarget.style.opacity='.5';e.dataTransfer.effectAllowed='move';}
function cfgDragOver(e){e.preventDefault();e.dataTransfer.dropEffect='move';const tr=e.currentTarget;if(tr&&tr.tagName==='TR')tr.style.background='var(--hover)';}
function cfgDragEnd(e){e.currentTarget.style.opacity='1';document.querySelectorAll('#linksTable tr').forEach(tr=>tr.style.background='');}
async function cfgDrop(e){
  e.preventDefault();
  const target=e.currentTarget.getAttribute('data-uid');
  document.querySelectorAll('#linksTable tr').forEach(tr=>tr.style.background='');
  if(!__dragUid||!target||__dragUid===target)return;
  const rows=[...document.querySelectorAll('#linksTable tr[data-uid]')];
  const ids=rows.map(r=>r.getAttribute('data-uid'));
  const from=ids.indexOf(__dragUid), to=ids.indexOf(target);
  if(from<0||to<0)return;
  ids.splice(from,1);ids.splice(to,0,__dragUid);
  // reorder DOM optimistically
  const tb=document.getElementById('linksTable');
  ids.forEach(id=>{const el=tb.querySelector(`tr[data-uid="${id}"]`);if(el)tb.appendChild(el);});
  await api('/api/links/reorder',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({order:ids})});
  toast(lang==='fa'?'ترتیب ذخیره شد':'Order saved');
}

function updateBulkBar(){
  const n=document.querySelectorAll('.cfg-chk:checked').length;
  const bar=document.getElementById('bottomBulkBar');
  const cnt=document.getElementById('bulkCount');
  if(cnt) cnt.textContent = n + (lang==='fa'?' انتخاب‌شده':' selected');
  if(bar) bar.classList.toggle('show', n>0);
  const all=document.getElementById('chkAll');
  if(all && n===0) all.checked=false;
}
function clearSelection(){
  document.querySelectorAll('.cfg-chk').forEach(c=>c.checked=false);
  const all=document.getElementById('chkAll');
  if(all) all.checked=false;
  updateBulkBar();
}
function toggleSelectAll(on){
  document.querySelectorAll('.cfg-chk').forEach(c=>c.checked=!!on);
  updateBulkBar();
}

function selectedCfgIds(){return [...document.querySelectorAll('.cfg-chk:checked')].map(c=>c.value)}
async function bulkDelete(){
  const ids=selectedCfgIds();
  if(!ids.length){toast(lang==='fa'?'چیزی انتخاب نشده':'Nothing selected');return}
  if(!confirm(lang==='fa'?`حذف ${ids.length} کانفیگ؟`:`Delete ${ids.length}?`))return;
  const r=await api('/api/links/bulk-delete',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ids})});
  if(r){toast(lang==='fa'?`حذف شد: ${r.deleted}`:`Deleted: ${r.deleted}`);refreshAll()}
}
async function bulkMoveGroup(){
  const ids=selectedCfgIds();
  const cid=document.getElementById('bulkGroup')?.value||'0';
  if(!ids.length){toast(lang==='fa'?'چیزی انتخاب نشده':'Nothing selected');return}
  const r=await api('/api/links/bulk-category',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({ids,category_id:cid})});
  if(r){toast(lang==='fa'?'به گروه منتقل شد':'Moved');refreshAll()}
}
async function loadGroups(){
  const r=await api('/api/categories');
  const list=(r&&r.categories)||[];
  window.__catMap={};
  list.forEach(g=>{window.__catMap[String(g.id)]=g.name||g.id});
  const bulk=document.getElementById('bulkGroup');
  const cGroup=document.getElementById('cGroup');
  const opts=list.map(g=>`<option value="${esc(g.id)}">${esc(g.name||g.id)}</option>`).join('');
  if(bulk) bulk.innerHTML=opts||'<option value="0">عمومی</option>';
  if(cGroup) cGroup.innerHTML=opts||'<option value="0">عمومی</option>';
  const box=document.getElementById('groupsList');
  if(box){
    if(!list.length){box.innerHTML='<div style="color:var(--t3);text-align:center;padding:16px">—</div>';}
    else{
      box.innerHTML=list.map(g=>{
        const cnt=(__allLinks||[]).filter(l=>String(l.category_id||'0')===String(g.id)).length;
        return `<div style="border:1px solid var(--card-b);border-radius:12px;padding:12px;margin-bottom:8px;background:var(--bg3);display:flex;justify-content:space-between;gap:8px;align-items:center;flex-wrap:wrap">
          <div><b>${esc(g.name)}</b> <span style="font-size:11px;color:var(--t3)">${cnt} کانفیگ</span></div>
          <button class="btn btn-sm btn-d" onclick="deleteGroup('${esc(g.id)}')">حذف</button>
        </div>`;
      }).join('');
    }
  }
}
async function createGroup(){
  const name=document.getElementById('grpName').value.trim();
  if(!name){toast('نام لازم است');return}
  const r=await api('/api/categories',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name})});
  if(r){toast('گروه ساخته شد');document.getElementById('grpName').value='';loadGroups()}
}
async function deleteGroup(id){
  if(!confirm('حذف گروه؟'))return;
  const r=await api('/api/categories/'+id,{method:'DELETE'});
  if(r){toast('حذف شد');loadGroups();refreshAll()}
}


async function loadSecurity(){
  const r=await api('/api/security/status');
  const el=document.getElementById('secStatus');
  if(!r||!el)return;
  const locked=(r.locked_ips||[]).map(x=>`${x.ip} (${Math.ceil(x.remaining_sec/60)}د)`).join(' · ')||'—';
  el.innerHTML=`حداکثر تلاش: <b>${r.max_attempts}</b> · قفل: <b>${Math.round(r.lockout_seconds/60)} دقیقه</b><br>IPهای مسدود: ${locked}`;
}
async function unlockAllIps(){
  if(!confirm('رفع مسدودی همه؟'))return;
  const r=await api('/api/security/unlock',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({})});
  if(r){toast('انجام شد');loadSecurity()}
}


async function downloadBackup(kind){
  try{
    const url = kind==='bot' ? '/api/backup/bot' : '/api/backup/users';
    const r = await fetch(url, {credentials:'same-origin', cache:'no-store'});
    if(r.status===401){ location.href='/login'; return; }
    if(!r.ok){
      let msg='خطا';
      try{ const j=await r.json(); msg=j.detail||msg; }catch(e){}
      toast(String(msg)); return;
    }
    const text = await r.text();
    // validate json
    try{ JSON.parse(text); }catch(e){ toast('پاسخ نامعتبر'); return; }
    const blob = new Blob([text], {type:'application/json;charset=utf-8'});
    const a = document.createElement('a');
    const stamp = new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
    a.href = URL.createObjectURL(blob);
    a.download = kind==='bot' ? ('pxpanel-bot-'+stamp+'.json') : ('pxpanel-users-'+stamp+'.json');
    document.body.appendChild(a);
    a.click();
    setTimeout(()=>{ URL.revokeObjectURL(a.href); a.remove(); }, 500);
    toast(lang==='fa'?'دانلود شد':'Downloaded');
  }catch(e){ toast(String(e.message||e)); }
}
function readJsonFile(inputId){
  return new Promise((resolve,reject)=>{
    const inp=document.getElementById(inputId);
    if(!inp||!inp.files||!inp.files[0]){ reject(new Error(lang==='fa'?'فایل انتخاب نشده':'No file')); return; }
    const fr=new FileReader();
    fr.onload=()=>{ try{ resolve(JSON.parse(fr.result)); }catch(e){ reject(new Error('JSON نامعتبر')); } };
    fr.onerror=()=>reject(new Error('خواندن فایل ناموفق'));
    fr.readAsText(inp.files[0],'utf-8');
  });
}
async function restoreUsers(mode){
  try{
    const data = await readJsonFile('restoreUsersFile');
    data.mode = mode||'merge';
    if(mode==='replace' && !confirm(lang==='fa'?'همه داده‌های فعلی پاک و جایگزین می‌شود. مطمئنی؟':'Replace all current data?')) return;
    const r = await api('/api/restore/users',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
    if(r){ toast(lang==='fa'?('بازیابی شد: '+r.links+' کانفیگ'):('Restored: '+r.links)); refreshAll(); }
  }catch(e){ toast(e.message||String(e)); }
}
async function restoreBot(){
  try{
    const data = await readJsonFile('restoreBotFile');
    const r = await api('/api/restore/bot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
    if(r) toast(r.message||(lang==='fa'?'ربات بازیابی شد':'Bot restored'));
  }catch(e){ toast(e.message||String(e)); }
}

applyLang();loadMe();loadProtocols();loadGroups();refreshAll();setInterval(refreshAll,1000);




async function doLogout(e){
  if(e){try{e.preventDefault()}catch(_){}}
  try{ await fetch('/api/logout',{method:'POST',credentials:'same-origin'}); }catch(_){}
  location.href='/login';
  return false;
}


async function loadNodes(){
  const box=document.getElementById('nodesList');
  if(!box) return;
  const r=await api('/api/nodes');
  if(!r||!r.nodes){box.textContent='خطا در دریافت Nodeها';return}
  if(!r.nodes.length){box.innerHTML='<div style="color:var(--t3)">هنوز Nodeی ثبت نشده. طبق آموزش بالا یک سرویس Railway دیگر بساز و دامنه را اینجا وارد کن.</div>';return}
  box.innerHTML=r.nodes.map(n=>`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--card-b)">
    <div>
      <div style="font-weight:700;color:var(--t1)">${n.name||'Node'} · ${n.location||''}</div>
      <div style="font-size:11px;direction:ltr;text-align:left;color:var(--t3)">${n.host}:${n.port||443} ${n.enabled===false?'(خاموش)':''}</div>
    </div>
    <button class="btn btn-sm btn-d" onclick="deleteNode('${n.id}')">حذف</button>
  </div>`).join('');
}
async function createNode(){
  const body={
    name:document.getElementById('nodeName')?.value||'Node',
    location:document.getElementById('nodeLoc')?.value||'Unknown',
    host:document.getElementById('nodeHost')?.value||'',
    port:Number(document.getElementById('nodePort')?.value)||443,
    enabled:true
  };
  if(!body.host){toast('دامنه Node را وارد کن');return}
  const r=await api('/api/nodes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  if(r&&r.ok){toast('Node ثبت شد');loadNodes();['nodeName','nodeLoc','nodeHost'].forEach(id=>{const e=document.getElementById(id);if(e)e.value=''})}
}
async function deleteNode(id){
  if(!confirm('حذف این Node؟'))return;
  const r=await api('/api/nodes/'+id,{method:'DELETE'});
  if(r&&r.ok){toast('حذف شد');loadNodes()}
}

window.addEventListener('load', function(){
  try{
    if(localStorage.getItem('px_domain_notice_v1')==='1') return;
    var m=document.getElementById('domainNoticeModal');
    if(!m) return;
    m.style.display='flex';
    var ok=document.getElementById('domainNoticeOk');
    if(ok) ok.onclick=function(){ localStorage.setItem('px_domain_notice_v1','1'); m.style.display='none'; };
  }catch(e){}
});
