# Setup Instructions

## Adding Your Profile Picture

1. Save your profile picture as `profile.jpg` in the `public` folder
2. The image should be square (recommended: 800x800px or similar)
3. File path should be: `Portfolio/public/profile.jpg`

## Installing Dependencies

Open PowerShell in the Portfolio folder and run:

```powershell
cd Portfolio
npm install
```

This will install all required dependencies:
- React 18
- Vite
- Tailwind CSS
- Framer Motion (for animations)
- React Icons

## Running the Development Server

After installing dependencies:

```powershell
npm run dev
```

The portfolio will open at `http://localhost:3000`

## Building for Production

```powershell
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment Options

### Option 1: Deploy to GitHub Pages

1. Create a new repository on GitHub named `portfolio`
2. Initialize git and push your code:
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yashchaudhary05/portfolio.git
git push -u origin main
```

3. Update `vite.config.js` - change `base: '/portfolio/'` to `base: '/'` if using custom domain

4. Enable GitHub Pages in repository settings (Settings > Pages > Source: GitHub Actions)

5. The GitHub Action will automatically deploy on push to main branch

### Option 2: Deploy to Replit

1. Go to replit.com
2. Click "Create Repl"
3. Select "Import from GitHub"
4. Enter your repository URL
5. Click "Import from GitHub"
6. Click "Run" - your portfolio will be live!

### Option 3: Deploy to Vercel (Easiest!)

1. Go to vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect it's a Vite project
5. Click "Deploy"
6. Done! You'll get a live URL

### Option 4: Deploy to Netlify

1. Build your project: `npm run build`
2. Go to netlify.com
3. Drag and drop the `dist` folder
4. Your site is live!

## Features Implemented

✅ Your profile picture with animated ring
✅ 80% user interaction improvement highlighted
✅ DevNet certification preparation mentioned  
✅ 7 months at Cisco displayed
✅ Bengaluru location updated
✅ Correct GitHub and LinkedIn links
✅ Dashboard development achievement featured
✅ Work-life balance mentioned
✅ Floating SVG icons for visual appeal
✅ Dark mode toggle
✅ Fully responsive design
✅ Smooth animations throughout
✅ Contact form
✅ All certifications displayed

## Customization

You can easily customize colors in `tailwind.config.js` and content in the component files inside `src/components/`

## Need Help?

Check the README.md file for detailed documentation!
