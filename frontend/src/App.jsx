import SimpleRegistrationForm from "./components/auth/Signup"
import Sigin from "./components/auth/Sigin"
import ComplexNavbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"

function App() {
  

  return (
    <>
    <div className="flex justify-center my-8">
    <div>
    <ComplexNavbar/>

    <Footer classNaame="mb-0"/>
      </div>
    {/* <SimpleRegistrationForm/>

    <Sigin/> */}
   
    
    

    </div>
  
    
    </>
  )
}

export default App
