import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"

import RootLayout from "./layouts/RootLayout"


import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"


const router= createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route path="home" element={<Home />}/>
    <Route path="contact" element={<Contact />}/>
    <Route path="about" element={<About />}/>
  </Route>
))


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
