import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Gallery from './components/Gallery'
import GalleryDetailView from './components/GalleryDetailView'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Gallery />,
  },
  {
    path: "/item/:id",
    element: <GalleryDetailView />,
  }
])

function App() {
  return (
    <>
      <header>
        <h1>My Photos</h1>
      </header>
      <section id="content">
        <RouterProvider router={router} />
      </section>
      <footer>
        &copy; 2023 Amazing Photo Company™
      </footer>
    </>
  )
}

export default App
