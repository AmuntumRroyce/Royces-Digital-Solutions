# Royce Digital Solutions — GitHub & Vercel Deployment Guide

This project is pre-configured with `vercel.json`, `.gitignore`, and a committed Git repository ready to deploy immediately to GitHub and Vercel.

---

## 🚀 3-Minute Deployment Steps

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click the **`+`** icon in the top right corner and select **New repository**.
3. Name it: **`royces-digital-solutions`** (or your preferred name).
4. Keep it **Public** (or **Private**).
5. **Do NOT** check "Add a README file" or "Add .gitignore" (these are already configured in your project).
6. Click **Create repository**.

---

### Step 2: Push Your Code to GitHub
Open PowerShell or your terminal inside the project directory:

```powershell
cd "C:\Users\ROYCE PC\Documents\Royce's Digital Solutions"

# 1. Rename branch to main
git branch -M main

# 2. Add your GitHub repository link (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/royces-digital-solutions.git

# 3. Push all code to GitHub
git push -u origin main
```

---

### Step 3: Connect & Host on Vercel
1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **Add New...** &rarr; **Project**.
3. You will see your newly pushed repository: **`royces-digital-solutions`**. Click **Import**.
4. **Vercel will automatically detect:**
   * Framework Preset: **Vite**
   * Build Command: `vite build`
   * Output Directory: `dist`
5. *(Optional)* Under **Environment Variables**, paste the keys from `.env.example` (such as `VITE_FIREBASE_PROJECT_ID=Royces-Digital-Solutions`).
6. Click **Deploy**.

Within 45 seconds, your website will be live worldwide on a fast global edge network at:  
🌐 **`https://royces-digital-solutions.vercel.app`** (with automatic free SSL and custom domain support).

---

## 🛠 Features Enabled on Vercel
* **Clean Single-Page Routing:** Handled via `vercel.json` (no 404 errors on page reloads).
* **Automatic Deployments:** Every time you push changes to GitHub, Vercel will automatically rebuild and deploy your updates.
* **Global Edge CDN:** Sub-second loading speeds in Cameroon, Africa, Europe, and the Americas.
* **Custom Domain:** You can bind your own domain (e.g. `roycedigitalsolutions.com` or `roycedigitalsolutions.cm`) with one click in Vercel project settings.
