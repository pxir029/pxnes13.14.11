# 🚀 PXPANEL v13.11.0-tw

دروازه (Gateway) سریع و مدرن برای تونل‌زنی با داشبورد مدیریتی، ربات تلگرام و صفحات ساب.

## تغییرات این نسخه

- حذف پروتکل‌های WireGuard و Hysteria2
- نگه‌داشتن دموها: HighSpeed و Gaming Lite
- Tailwind CSS (CDN) روی صفحات
- جداسازی کامل فرانت‌اند: هر صفحه HTML + CSS + JS جدا در فولدر خودش
- هسته اصلی (main.py) فقط بک‌اند و رله — بدون HTML داخل آن

## ساختار پروژه

```
pxpanel/
├── main.py                 # هسته FastAPI / رله / API (بدون HTML)
├── telegram_bot.py
├── relay_vless.py
├── xhttp_siz10.py
├── speed_limit.py
├── pages.py
├── requirements.txt
├── data/
│   └── news.json
├── templates/              # فقط HTML
│   ├── landing/index.html
│   ├── login/index.html
│   ├── dashboard/index.html
│   ├── sub/index.html
│   └── info/index.html
└── static/                 # CSS و JS جدا per-page
    ├── landing/css/  + js/
    ├── login/css/    + js/
    ├── dashboard/css/ + js/
    ├── sub/css/      + js/
    └── info/css/     + js/
```

## پروتکل‌های فعال

VLESS-WS · XHTTP (۳ حالت) · VMess-WS · Trojan-WS · Shadowsocks · SOCKS5 · HTTP · TUIC · HighSpeed Demo · Gaming Lite Demo

## دیپلوی Railway

1. آپلود/کلون این پروژه
2. Volume روی /data
3. دامنه Public فعال شود

| متغیر | توضیح |
|--------|--------|
| ADMIN_PASSWORD | رمز داشبورد (پیش‌فرض pxpanel2026) |
| SECRET_KEY | کلید سشن |
| DATA_DIR | مسیر ذخیره |

بعد از ورود، دامنه ریلوی را در https://check-host.net/ پینگ بگیرید.

پشتیبانی: @logic_sec
