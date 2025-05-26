# Notes App - RESTful API + Frontend

این پروژه یک اپلیکیشن یادداشت‌برداری ساده است که شامل یک API کامل با احراز هویت JWT و یک پنل کاربری ساده با HTML/JS است.

---

## ⚙️ تکنولوژی‌های استفاده‌شده

### بک‌اند (Backend):
- Python
- Django
- Django REST Framework (DRF)
- JWT Authentication (SimpleJWT)
- SQLite (یا PostgreSQL برای سرور)
- Unit Test با Django TestCase

### فرانت‌اند (Frontend):
- HTML
- TailwindCSS
- Alpine.js
- JavaScript خام

---

## 📁 ساختار پروژه

```bash
project/
│
├── backend/
│   ├── manage.py
│   ├── notes/
│   └── accounts/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   └── js/
│       └── app.js
│
└── README.md
