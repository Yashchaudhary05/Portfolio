# ⚡ Quick Start Guide

## 🎯 Get Your Portfolio Running in 3 Steps

### Step 1: Add Your Profile Picture
```powershell
# Copy your profile picture to the public folder
.\copy-image.ps1
```
Or manually copy your photo to `public/profile.jpg`

### Step 2: Install Dependencies
```powershell
npm install
```

### Step 3: Run Development Server
```powershell
npm run dev
```

**That's it!** Your portfolio will open at `http://localhost:5173` 🎉

---

## 🚀 Deploy to GitHub Pages

```powershell
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yashchaudhary05/portfolio.git
git push -u origin main

# Deploy
npm run deploy
```

Your live site: `https://yashchaudhary05.github.io/portfolio/`

---

## 🎨 Key Features

✅ **Dark Mode by Default** - Custom red-purple theme  
✅ **Light/Dark Toggle** - Sun/Moon emoji slider  
✅ **Project Carousel** - Swipe through your best work  
✅ **Responsive Design** - Looks great on all devices  
✅ **Smooth Animations** - Professional feel with Framer Motion  
✅ **Glass Effects** - Modern UI design  

---

## 📝 Customize Your Content

Edit these files to make it yours:

| File | What to Update |
|------|---------------|
| `src/components/Hero.jsx` | Name, title, intro |
| `src/components/About.jsx` | Your story |
| `src/components/Experience.jsx` | Work history |
| `src/components/Projects.jsx` | Your projects |
| `src/components/Skills.jsx` | Skills & certs |
| `src/components/Contact.jsx` | Contact info |

---

## 🎨 Theme Colors

**Dark Mode (Default):**
- Background: Dark purple gradient
- Accents: Red (#dc2626) & Purple (#9333ea)
- Cards: Glass effect with blur

**Light Mode:**
- Background: White/Gray
- Accents: Blue highlights

Toggle anytime with the navbar switch!

---

## 📱 Test Responsive Design

Press `F12` in browser → Click device toolbar → Test different sizes

---

## 🆘 Quick Fixes

**Port in use?**
```powershell
npm run dev -- --port 3000
```

**Dependencies error?**
```powershell
Remove-Item -Recurse node_modules
npm install
```

**Images not showing?**
- Check `public/profile.jpg` exists
- Verify Unsplash URLs in Projects.jsx

---

## 📖 Full Documentation

- **DEPLOYMENT_GUIDE.md** - Complete deployment options
- **SETUP.md** - Detailed setup instructions
- **README.md** - Project overview

---

**Need help?** Check the full guides above or open an issue on GitHub.

**Built with:**
- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- ✨ Framer Motion

**Happy coding! 🎉**
