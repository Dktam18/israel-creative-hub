import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/common/Layout"
import { Home } from "./pages/Home"
import { BlogSinglePage } from "./components/common/BlogSinglePage"
import { About } from "./pages/About"
import { Courses } from "./pages/Courses"
import { Blog } from "./pages/Blog"
import { Instructor } from "./pages/Instructor"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import Practice from "./pages/Practice"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
    <SpeedInsights/>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/about'
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path='/courses'
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path='/instructor'
            element={
              <Layout>
                <Instructor />
              </Layout>
            }
          />
          <Route
            path='/blog'
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path='/single-blog'
            element={
              <Layout>
                <BlogSinglePage />
              </Layout>
            }
          />
          <Route
            path='/login'
            element={
             
                <Login />
             
            }
          />
          <Route
            path='/practice'
            element={
             <Layout>
                <Practice />
                </Layout>
            }
          />
          <Route
            path='/register'
            element={
             
                <Register />
             
            }
          />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
