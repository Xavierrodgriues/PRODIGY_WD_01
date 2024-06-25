import Home from "./Home/Home"
import {Routes, Route } from "react-router-dom"
import Courses from "./courses/Courses.jsx"
import SignUp from "./Components/SignUp.jsx"
import Contact from "./Components/Contact.jsx"
const App = () => {
  return (
    <>
   {/* <Home /> */}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses />} />
      {/* {/* <Route path="/" element={<Home />} /> */}
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="/contact" element={<Contact />} /> 
    </Routes>

   </>
  )
}

export default App