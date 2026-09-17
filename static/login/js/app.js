
async function checkSetup(){
  try{
    const r=await fetch('/api/setup/status',{cache:'no-store'});
    const d=await r.json();
    if(d.needs_setup){
      document.getElementById('setupBox').classList.remove('hidden');
    }else{
      document.getElementById('loginBox').classList.remove('hidden');
      document.getElementById('loginPw').focus();
    }
  }catch(e){
    document.getElementById('loginBox').classList.remove('hidden');
  }
}
async function doSetup(){
  const pw=document.getElementById('setupPw').value;
  const pw2=document.getElementById('setupPw2').value;
  const err=document.getElementById('setupErr');
  err.classList.remove('show');
  if(pw.length<6){err.textContent='رمز حداقل ۶ کاراکتر';err.classList.add('show');return}
  if(pw!==pw2){err.textContent='تکرار رمز یکسان نیست';err.classList.add('show');return}
  const btn=document.getElementById('setupBtn');btn.disabled=true;
  try{
    const r=await fetch('/api/setup/password',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:pw,repeat_password:pw2})});
    const d=await r.json().catch(()=>({}));
    if(!r.ok) throw new Error(d.detail||'خطا');
    location.href='/dashboard';
  }catch(e){
    err.textContent=e.message||'خطا';err.classList.add('show');
    btn.disabled=false;
  }
}
document.getElementById('loginForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const err=document.getElementById('loginErr');
  err.classList.remove('show');
  const btn=document.getElementById('loginBtn');btn.disabled=true;
  try{
    const r=await fetch('/api/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({
      password:document.getElementById('loginPw').value,
      username:document.getElementById('loginUser').value
    })});
    if(!r.ok){
      const d=await r.json().catch(()=>({}));
      throw new Error(d.detail||'رمز اشتباه است');
    }
    location.href='/dashboard';
  }catch(e){
    err.textContent=e.message;err.classList.add('show');
    btn.disabled=false;
  }
});
checkSetup();
