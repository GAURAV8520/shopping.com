import SimpleRegistrationForm from "./components/auth/Signup"
import Sigin from "./components/auth/Sigin"


import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"

function App() {
  

  return (
    <>

    <div className="flex justify-center my-8">
      
    <Routes>
      <Route path="/signup" element={<SimpleRegistrationForm/>}/>
      <Route path="/signin" element={<Sigin/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>


    </div>
  
    
    </>
  )
}

export default App
