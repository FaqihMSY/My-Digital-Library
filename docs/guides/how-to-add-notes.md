---
title: How to Add Notes
---

# How to Freely Add Notes

This website is built to make adding new notes as easy as possible. Here is the basic workflow for adding your own content.

## 1. Create a New Markdown File

All content is written in Markdown (`.md`) files. Navigate to the `docs` directory in this project. You can create a new file or a new folder to house your notes.

For example, if you want to add a note about `JavaScript`, you could create a file at `docs/javascript/promises.md`.

## 2. Write Your Content

Open the new `.md` file and write your notes using Markdown syntax. You can refer to the [Markdown Syntax Guide](/markdown-examples.html) for help.

## 3. Add Your Note to the Sidebar

To make your new note appear in the website's navigation, you need to add it to the sidebar configuration.

1.  Open the file: `docs/.vitepress/config.js`.
2.  Find the `sidebar` array within `themeConfig`.
3.  Add a new entry for your file. You can create a new group or add it to an existing one.

**Example:** To add the `promises.md` file, you could modify the sidebar like this:

```js
// docs/.vitepress/config.js
export default {
  // ...
  themeConfig: {
    // ...
    sidebar: [
      // ... other groups
      {
        text: 'JavaScript',
        collapsed: false,
        items: [
          { text: 'Promises', link: '/javascript/promises' } // Add this line
        ]
      }
    ]
  }
}
```

## 4. Preview Your Changes

To see how your new note looks, run the local development server from your terminal:

```bash
npm run docs:dev
```

This will start a local server, and you can open the provided URL in your browser to see the live preview.

## 5. Deploy Your Changes

Once you are happy with your new note, simply commit your changes and push them to the `main` branch on GitHub. The GitHub Actions workflow will automatically build and deploy the updated site to GitHub Pages.

```bash
git add .
git commit -m "docs: add new note about promises"
git push origin main
```
