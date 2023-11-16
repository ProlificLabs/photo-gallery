This project was bootstrapped with [Vite 5.x](https://vitejs.dev/guide/) `pnpm create vite photo-gallery --template react`

This provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Photo Gallery React

An incomplete photo gallery

The following tools and libraries are preinstalled for you:

- React v18
- React Router for client-side routing

## Desired Features

### Image Gallery Page

- Use the [Picsum Photos API](https://picsum.photos), `https://picsum.photos/v2/list`
- Fetch 30 images and render them in the Gallery so it appears as a full-screen grid of polaroid photos
- Underneath each image please include the name of the photographer

### Image Selection

- When a user clicks on one of the images in the gallery, it should show a green border and retain a selected state even when navigating to a different page within the app
- When a user clicks on an already selected image, it should deselect
- A count of selected images should appear at the top of the gallery and update whenever selections are added or removed

### Image Search

- Implement a search box at the top of the Gallery
- As a user types, the list of images in the Gallery should filter based on the matching author name

### Image Detailed View

- When a user clicks on an image, they should be taken to a detail view for that image which includes extended information such as `width`, `height`, `url` and `download_url`

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits.
