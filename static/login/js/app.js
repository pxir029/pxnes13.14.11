(function () {
  "use strict";

  function show(el) {
    if (el) el.classList.remove("hidden");
  }
  function hide(el) {
    if (el) el.classList.add("hidden");
  }
  function showErr(id, msg) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = msg || "خطا";
    el.classList.add("show");
  }
  function clearErr(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.textContent = "";
    el.classList.remove("show");
  }

  async function checkSetup() {
    var setupBox = document.getElementById("setupBox");
    var loginBox = document.getElementById("loginBox");
    try {
      var r = await fetch("/api/setup/status", { credentials: "same-origin" });
      var d = await r.json();
      if (d.needs_setup) {
        show(setupBox);
        hide(loginBox);
        var pw = document.getElementById("setupPw");
        if (pw) pw.focus();
      } else {
        hide(setupBox);
        show(loginBox);
        var lp = document.getElementById("loginPw");
        if (lp) lp.focus();
      }
    } catch (e) {
      hide(setupBox);
      show(loginBox);
    }
  }

  async function doSetup() {
    clearErr("setupErr");
    var pw = (document.getElementById("setupPw") || {}).value || "";
    var pw2 = (document.getElementById("setupPw2") || {}).value || "";
    if (pw.length < 6) {
      showErr("setupErr", "رمز حداقل ۶ کاراکتر باشد");
      return;
    }
    if (pw !== pw2) {
      showErr("setupErr", "تکرار رمز یکسان نیست");
      return;
    }
    var btn = document.getElementById("setupBtn");
    if (btn) btn.disabled = true;
    try {
      var r = await fetch("/api/setup/password", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw, repeat_password: pw2 }),
      });
      var d = await r.json().catch(function () { return {}; });
      if (!r.ok) throw new Error(d.detail || "خطا در تنظیم رمز");
      location.href = "/dashboard";
    } catch (e) {
      showErr("setupErr", e.message || "خطا");
      if (btn) btn.disabled = false;
    }
  }

  async function doLogin(e) {
    if (e) e.preventDefault();
    clearErr("loginErr");
    var btn = document.getElementById("loginBtn");
    if (btn) btn.disabled = true;
    try {
      var r = await fetch("/api/login", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: (document.getElementById("loginPw") || {}).value || "",
          username: (document.getElementById("loginUser") || {}).value || "",
        }),
      });
      if (!r.ok) {
        var d = await r.json().catch(function () { return {}; });
        throw new Error(d.detail || "رمز اشتباه است");
      }
      location.href = "/dashboard";
    } catch (err) {
      showErr("loginErr", err.message || "خطا");
      if (btn) btn.disabled = false;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var setupBtn = document.getElementById("setupBtn");
    if (setupBtn) setupBtn.addEventListener("click", doSetup);
    var form = document.getElementById("loginForm");
    if (form) form.addEventListener("submit", doLogin);
    checkSetup();
  });
})();
