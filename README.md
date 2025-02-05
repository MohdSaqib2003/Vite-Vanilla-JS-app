# **Vite with Vanilla JavaScript**

## **1. What is Vite?**
[Vite](https://vitejs.dev/) is a fast build tool and development server that improves the frontend development experience. It is optimized for speed using [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and only bundles files when needed.

---

## **2. Setting Up Vite in a Vanilla JS Project**

### **Step 1: Install Node.js**
Make sure you have [Node.js](https://nodejs.org/) installed. You can check it by running:

```sh
node -v
npm -v
```

---

### **Step 2: Create a New Vite Project**
Run the following command:

```sh
npm create vite@latest my-vite-app --template vanilla
```

This command does the following:
- Creates a new folder called `my-vite-app`
- Sets up Vite with a Vanilla JS template

---

### **Step 3: Navigate to Your Project**
Move into the project folder:

```sh
cd my-vite-app
```

---

### **Step 4: Install Dependencies**
Run:

```sh
npm install
```

This installs all required dependencies.

---

### **Step 5: Start the Development Server**
Run:

```sh
npm run dev
```

Vite will start a local development server and provide a URL (usually `http://localhost:5173/`).

---

## **3. Project Structure**
After setup, your project will have the following structure:

```
my-vite-app
│── index.html
│── vite.config.js
│── package.json
│── /node_modules
│── /public
└── /src
    ├── main.js
    ├── style.css
```

---

## **4. Editing the Project**

### **Modify `index.html`**
Open `index.html` and modify the content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
    <script type="module" src="/src/main.js"></script>
    <link rel="stylesheet" href="/src/style.css">
</head>
<body>
    <h1>Hello, Vite!</h1>
    <button id="btn">Click Me</button>
    <script type="module" src="/src/main.js"></script>
</body>
</html>
```

---

### **Modify `src/main.js`**
Update `src/main.js` to add some interactivity:

```js
document.getElementById("btn").addEventListener("click", () => {
    alert("Hello from Vite!");
});
```

---

### **Modify `src/style.css`**
Edit `src/style.css` to add some styles:

```css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}
button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
```

---

## **5. Building the Project for Production**
Once your project is ready, you can build it for production:

```sh
npm run build
```

This will create a `dist/` folder containing optimized files.

To preview the production build locally, run:

```sh
npm run preview
```

---

## **6. Deploying Vite Project**
Vite outputs static files, so you can deploy your project to:
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- Any static hosting service

For example, to deploy on GitHub Pages:
1. Install `gh-pages`:
   ```sh
   npm install gh-pages --save-dev
   ```
2. Add a deploy script in `package.json`:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```sh
   npm run build
   npm run deploy
   ```

---

## **7. Vite Configuration (`vite.config.js`)**
You can configure Vite by modifying `vite.config.js`:

```js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000, // Change default port
  },
  build: {
    outDir: 'dist',
  },
});
```

---

## **8. Using Environment Variables**
Create a `.env` file:

```sh
VITE_API_KEY=your_secret_key
```

Access it in `main.js`:

```js
console.log(import.meta.env.VITE_API_KEY);
```

---

## **9. Using Vite Plugins**
You can extend Vite with plugins. Install a plugin, such as `vite-plugin-html`:

```sh
npm install vite-plugin-html --save-dev
```

Add it in `vite.config.js`:

```js
import { defineConfig } from 'vite';
import html from 'vite-plugin-html';

export default defineConfig({
  plugins: [html()],
});
```

---

## **10. Conclusion**
You have successfully set up and built a project using Vite with Vanilla JavaScript! 🚀

