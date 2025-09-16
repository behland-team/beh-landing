## Updating Icons with Tailwind IcoMoon Plugin

To update your icon set using the Tailwind IcoMoon plugin (TypeScript version), follow these steps:

1. **Open IcoMoon App**

   - Go to [IcoMoon](https://icomoon.io/app).
   - Upload your existing `selection.json` to restore your current icon set and codepoints.

2. **Modify Icons**

   - Add new icons or remove existing ones as needed.

3. **Export Updated Font Pack**

   - Click "Generate Font" and download the new font pack.

4. **Update Project Files**

   - Replace font files (`icomoon.ttf`, `.woff`, `.svg`, `.eot`) in `/public/fonts/`.
   - Replace the updated `selection.json` in `/icomoon/selection.json`.

5. **Rebuild the Project**

   - The Tailwind plugin reads `selection.json` at build time.
   - Run `npm run dev` for local development or `next build` for production.

6. **Usage**
   - The plugin will auto-generate new `.icon-<name>` utilities with updated Unicode values.
   - Use these classes in your components, e.g. `<span className="icon icon-home"></span>`.

**Tip:**  
Always commit both the updated font files and `selection.json

حتماً 👌 این نسخه‌ی آماده برای **Markdown** هست؛ فقط کافیه توی یک فایل مثل `CI-CD-Guide.md` بذاری (یا حتی توی README اضافه کنی).

---

## 🚀 CI/CD برای Next.js با GitHub Actions + PM2

````markdown
این مستند راه‌اندازی CI/CD برای پروژه‌ی **Next.js 14** با استفاده از **GitHub Actions** و **PM2** را توضیح می‌دهد.

---

## 1. پیش‌نیازها

- سرور لینوکس (Ubuntu 20.04 یا بالاتر)
- دامنه متصل به سرور (مثال: `behsite.hiteck.ir`)
- نصب بودن:
  - Node.js و npm (ترجیحاً با nvm)
  - PM2
  - Nginx (برای پروکسی روی پورت 3000)
- یک ریپوی GitHub (مثال: `beh-landing`)

---

## 2. آماده‌سازی سرور

### 2.1 مسیر پروژه

```bash
mkdir -p /home/hiteck-behsite/htdocs/behsite.hiteck.ir/beh-landing
```
````

### 2.2 فایل env

```bash
cd /home/hiteck-behsite/htdocs/behsite.hiteck.ir/beh-landing
nano .env.production
```

> متغیرهای محیطی تولید را اینجا قرار بده (مثل `NEXT_PUBLIC_API_URL`).

### 2.3 فایل PM2

`ecosystem.config.js`:

```js
module.exports = {
  apps: [
    {
      name: "beh-landing",
      cwd: "/home/hiteck-behsite/htdocs/behsite.hiteck.ir/beh-landing",
      script: "npm",
      args: "start",
      env: { NODE_ENV: "production", PORT: 3000 },
    },
  ],
};
```

---

## 3. کلید SSH مخصوص CI

روی سیستم لوکال بساز:

```bash
ssh-keygen -t ed25519 -C "ci-beh-landing" -f ~/.ssh/ci-beh-landing -N ""
```

پابلیک‌کی را روی سرور نصب کن:

```bash
ssh-copy-id -i ~/.ssh/ci-beh-landing.pub "-p 8585 hiteck-behsite@behsite.hiteck.ir"
```

تست اتصال:

```bash
ssh -i ~/.ssh/ci-beh-landing -p 8585 hiteck-behsite@behsite.hiteck.ir
```

---

## 4. تنظیم GitHub Secrets

برو به:
**Repo → Settings → Secrets and variables → Actions**

این موارد را بساز:

| Name           | Value                                                       |
| -------------- | ----------------------------------------------------------- |
| `SSH_HOST`     | `behsite.hiteck.ir`                                         |
| `SSH_USER`     | `hiteck-behsite`                                            |
| `SSH_PORT`     | `8585`                                                      |
| `SSH_KEY`      | محتوای private key (`~/.ssh/ci-beh-landing`)                |
| `APP_DIR`      | `/home/hiteck-behsite/htdocs/behsite.hiteck.ir/beh-landing` |
| `PM2_APP_NAME` | `beh-landing`                                               |

---

## 5. ساخت Workflow در GitHub

در ریپو، مسیر زیر را بساز:

```
.github/workflows/deploy.yml
```

محتوا:

```yaml
name: CI/CD - Next.js + PM2 (beh-landing)

on:
  push:
    branches: ["main"]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Sync source to server (rsync)
        uses: burnett01/rsync-deployments@7.0.1
        with:
          switches: -az --delete --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r --exclude '.git' --exclude '.github' --exclude 'node_modules' --exclude '.next' --exclude '.env*' --exclude '.DS_Store'
          path: ./
          remote_path: ${{ secrets.APP_DIR }}
          remote_host: ${{ secrets.SSH_HOST }}
          remote_user: ${{ secrets.SSH_USER }}
          remote_port: ${{ secrets.SSH_PORT }}
          remote_key: ${{ secrets.SSH_KEY }}

      - name: Install, build, and reload via PM2
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.SSH_HOST }}
          username: ${{ secrets.SSH_USER }}
          port: ${{ secrets.SSH_PORT }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            bash -lc '
              set -e
              cd "${{ secrets.APP_DIR }}"

              # Load nvm if available
              export NVM_DIR="$HOME/.nvm"
              [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

              node -v && npm -v

              # Load env if exists
              [ -f .env.production ] && set -a && . ./.env.production && set +a || true

              npm ci
              npm run build

              # If Prisma, uncomment:
              # npx prisma migrate deploy || true

              command -v pm2 >/dev/null 2>&1 || npm i -g pm2
              if pm2 list | grep -q "${{ secrets.PM2_APP_NAME }}"; then
                pm2 reload ecosystem.config.js --only "${{ secrets.PM2_APP_NAME }}"
              else
                pm2 start ecosystem.config.js
              fi
              pm2 save
            '
```

---

## 6. تست و دیباگ

- یک commit ساده (مثلاً تغییر README) روی برنچ `main` بزن.
- برو به تب **Actions** → اجرای Workflow رو ببین.
- روی سرور:

  ```bash
  pm2 ls
  pm2 logs beh-landing
  ```

---

## 7. نکات تکمیلی

- اگر از **Prisma** استفاده می‌کنی، دستور `npx prisma migrate deploy` را فعال کن.
- Nginx باید به پورت 3000 پروکسی کند و SSL داشته باشد.
- برای برنچ‌های دیگر (stage, dev) می‌توان Workflow جدا تعریف کرد.
- برای rollback می‌توانی commit قدیمی را checkout کنی و دوباره build بزنی.

---

✅ حالا پروژه با هر push روی `main` به‌طور خودکار deploy می‌شود و با PM2 بالا می‌آید.

```

---

می‌خوای همین Markdown رو بهت خروجی PDF هم بدم (با استایل تیتر و لیست مرتب) که آماده ارائه به تیم باشه؟
```
