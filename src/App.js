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
import { Practice } from "./pages/Practice"
// import { SpeedInsights } from "@vercel/speed-insights/react"
import Dashboard from "./pages/Dashboard"
import { AddQuestions } from "./pages/AddQuestions"
// import { useState, useEffect } from "react";
import { Jambmock } from "./components/common/JambMock"
import {ShareButtons} from "./components/common/Sharebuttons"
import { Waeconline } from "./components/common/Weac-examiner-site"
import { Contact } from "./pages/Contact"
import { Mockresult } from "./components/common/Mockresult"
import { JambReschedule } from "./components/common/JambReshedule"
import { WaecNews } from "./components/common/WaecNews"
import { NursingAdmissionUpdate } from "./components/common/2025-Nursing-Admission-update"
import { JambProhibitedItemsBlog } from "./components/common/Prohibited-jamb-items"
import {Reviews} from "./components/common/Reviews"
// import { AddQuestions } from "./AddQuestions";



export default function App() {


  

  return (
    <>
  

  
    {/* <SpeedInsights/> */}
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
            path='/share'
            element={
             
                <ShareButtons />
        
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
            path='/jamb-mock-result-check'
            element={
              <Layout>
                <Mockresult />
              </Layout>
            }
          />
          <Route
            path='/jamb-resheduled-date'
            element={
              <Layout>
                <JambReschedule />
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

          <Route
          path='/dashboard'
          element={
            <Dashboard/>
          }
          />
          
          <Route
          path='/addquestions'
          element={
            <AddQuestions/>
          }
          />

         <Route
         
        path="/jamb-mock"
        element={
          <Layout>
          <Jambmock/>
          </Layout>
        }
        />

        <Route
        
        path="/waec-examiner-site"
        element={
          <Layout>
          <Waeconline/>
          </Layout>
        }
        />

        <Route
        path="/contact"
        element={
          <Layout>
          <Contact/>
          </Layout> 
        }
        />
        <Route
        path="/waec-news"
        element={
          <Layout>
          <WaecNews/>
          </Layout>
        }
        />
        <Route
        path="/nmcn-approves-nursing-as-valid-entry-for-nursing-programme-admissions"
        element={
          <Layout>
          <NursingAdmissionUpdate/>
          </Layout>
        }
          />
          <Route
          path="/jamb-prohibited-items"
          element={
            <Layout>
            <JambProhibitedItemsBlog/>
            </Layout>
          }
          />
      
          <Route
          path="/reviews"
          element={
            <Layout>
            <Reviews/>
            </Layout>
          }
          />


        </Routes>

       
      </BrowserRouter>
    </>
  );
}

// export default App
