import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Home, { loader as homeLoader } from './routes/home'
import About from './routes/about'

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
