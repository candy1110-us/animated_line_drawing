# Animation App

A multi-page web application featuring animated drawings and charts with automatic build and deployment.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will open at `http://localhost:5173` with hot reload enabled.

### Building for Production

```bash
# Build minified version
npm run build

# Preview the build locally
npm run preview
```

The built files will be in the `dist/` folder with:
- ✅ Minified HTML, CSS, and JavaScript
- ✅ Optimized assets with cache-busting hashes
- ✅ Compressed code (smaller file sizes)

## 📦 Project Structure

```
/
├── index.html       # Landing page - My Content Toolbox
├── index1.html      # Animated Drawing tool
├── index2.html      # Animated Charts tool
├── images/          # Source images
├── fonts/           # Custom fonts
├── dist/            # Built files (auto-generated, don't edit)
├── vite.config.js   # Vite configuration
└── package.json     # Dependencies and scripts
```

## 🔧 How It Works

### Development Workflow

1. **Edit your files** - Modify `index.html`, `index1.html`, `index2.html` as usual
2. **Run `npm run dev`** - See changes instantly in browser
3. **Push to GitHub** - Automatic deployment happens via GitHub Actions

### Automatic Deployment

When you push to the `main` branch:
1. GitHub Actions automatically runs
2. Code is built and minified
3. Deployed to GitHub Pages
4. Live site updates in 1-2 minutes

### Code Protection

The build process:
- **Minifies** all HTML, CSS, and JavaScript (removes whitespace, shortens code)
- **Obfuscates** JavaScript variable names (makes code harder to read)
- **Removes** console.log statements and comments
- **Optimizes** images and assets

When users "View Source" they'll see minified code like:
```html
<script>let rc,dataItems=[],currentPaletteIndex=0,editingItemIndex=-1...</script>
```

Instead of readable code with comments and formatting.

## 🌐 Deployment

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to **Pages** section
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Push to `main` branch to trigger deployment

Your site will be available at:
`https://yourusername.github.io/animated_line_drawing/`

## 📝 Editing Files

You can still use Claude (or any editor) to edit your source files:
- Edit `index.html`, `index1.html`, `index2.html` directly
- Changes are instantly visible with `npm run dev`
- The minification only happens during build, not development

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production files
- `npm run preview` - Preview the production build locally

## 📚 Technologies

- **Vite** - Build tool and dev server
- **Terser** - JavaScript minification and obfuscation
- **vite-plugin-minify** - HTML/CSS minification
- **GitHub Actions** - Automatic deployment

## ⚠️ Important Notes

- **Never edit files in `dist/`** - They're auto-generated and will be overwritten
- **Always edit source files** - `index.html`, `index1.html`, `index2.html`
- **Don't commit `node_modules/`** - Already in `.gitignore`
- **Don't commit `dist/`** - Build happens on GitHub Actions

## 🔒 Source Code Protection

While no client-side code is truly "hidden" (it must run in the browser), this setup:
- Makes casual copying significantly harder
- Requires effort to understand the minified code
- Removes helpful comments and formatting
- Shortens variable and function names

For stronger protection, move sensitive logic to a backend server.
