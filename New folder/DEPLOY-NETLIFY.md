# Deploy Andreas Boutiques to Netlify — Step by Step

## Option 1: Drag and Drop (Easiest, no account needed to try)

### Step 1: Prepare your folder
- Make sure all your website files are in **one folder** (e.g. `New folder`):
  - `index.html` (must be in the root)
  - `contact.html`, `cart.html`, `product-details.html`, `terms.html`, `checkout.html`
  - `features.html`, `collections.html`, `featured.html`, `our-story.html`, `lookbook.html`
  - `images/` folder (if you use local images)
  - `netlify.toml` (optional, already in project)

### Step 2: Create a Netlify account
1. Go to **https://www.netlify.com**
2. Click **Sign up**
3. Sign up with **Email**, **GitHub**, **GitLab**, or **Bitbucket**

### Step 3: Deploy by drag and drop
1. Log in to Netlify.
2. On the dashboard, find the area that says **“Want to deploy a new site without connecting to Git? Drag and drop your site output folder here”**.
3. Open your project folder in File Explorer (e.g. `Desktop\New folder`).
4. **Select all** files and folders that are part of the site (all HTML files, `images` folder, etc.).
   - You can select the whole folder and drag it, or open the folder and drag everything inside.
5. **Drag and drop** that folder (or all selected items) onto the Netlify drop zone.
6. Wait a few seconds. Netlify will upload and deploy.
7. You’ll get a **random URL** like `https://random-name-12345.netlify.app` — that’s your live site.

### Step 4: (Optional) Change the site name
1. Go to **Site configuration** (or **Site settings**) → **General**.
2. Under **Site name**, click **Change site name**.
3. Enter a name like `andreas-boutiques` → your site will be `https://andreas-boutiques.netlify.app`.

---

## Option 2: Deploy with Netlify CLI (from your computer)

### Step 1: Install Node.js
- If you don’t have Node.js: go to **https://nodejs.org** and install the LTS version.
- After install, open a **new** Command Prompt or PowerShell and run:
  ```bash
  node -v
  ```
  You should see a version number.

### Step 2: Install Netlify CLI
In PowerShell or Command Prompt, run:
```bash
npm install -g netlify-cli
```

### Step 3: Log in to Netlify
```bash
netlify login
```
- A browser window will open; log in or sign up and allow Netlify CLI.

### Step 4: Go to your project folder
```bash
cd "C:\Users\This PC\Desktop\New folder"
```
(Use the real path to your project if it’s different.)

### Step 5: Deploy
```bash
netlify deploy
```
- When asked **“What would you like to do?”** → choose **Create & configure a new site**.
- **Team:** pick your account/team.
- **Site name:** press Enter for a random name, or type e.g. `andreas-boutiques`.
- Your site is first deployed as a **draft** (preview URL). To make it live:
  ```bash
  netlify deploy --prod
  ```
- Netlify will show the live URL (e.g. `https://andreas-boutiques.netlify.app`).

---

## Option 3: Deploy with Git (GitHub / GitLab / Bitbucket)

### Step 1: Put your project on GitHub
1. Create a new repository on **https://github.com** (e.g. `andreas-boutiques`).
2. Initialize Git in your project folder and push:
   ```bash
   cd "C:\Users\This PC\Desktop\New folder"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/andreas-boutiques.git
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` and `andreas-boutiques` with your repo details.

### Step 2: Connect the repo to Netlify
1. In Netlify: **Add new site** → **Import an existing project**.
2. Choose **GitHub** (or GitLab/Bitbucket) and authorize Netlify.
3. Select the repository (e.g. `andreas-boutiques`).
4. Netlify will auto-detect a static site:
   - **Build command:** leave empty (or leave default).
   - **Publish directory:** `.` (current directory, because your `index.html` is in the root).
5. Click **Deploy site**.

### Step 3: Updates
- Whenever you push to `main` on GitHub, Netlify will automatically redeploy your site.

---

## Troubleshooting

| Problem | What to do |
|--------|------------|
| 404 on pages like `/contact` | Make sure you’re dragging the **folder that contains** `index.html`, not a parent folder. Publish directory should be `.` (root). |
| Images don’t load | If you use local images, ensure the `images` folder is inside the folder you deploy and paths in HTML are like `images/hero.jpg`. |
| Site not updating | For drag-and-drop: drag and drop again. For Git: push a new commit. For CLI: run `netlify deploy --prod` again. |

---

## Summary

- **Fastest:** Option 1 — drag and drop your project folder on Netlify.
- **From terminal:** Option 2 — `netlify login` → `netlify deploy` → `netlify deploy --prod`.
- **Auto-updates:** Option 3 — connect a Git repo; every push deploys.

Your site is static (HTML + Tailwind CDN), so no build step is required. The `netlify.toml` in this project sets the publish directory to `.` so the root with `index.html` is used.
