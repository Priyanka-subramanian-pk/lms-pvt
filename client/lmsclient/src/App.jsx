import { Route, Routes } from "react-router-dom"
import Loginpage from "./Pages/login/loginpage"
import Slider from "./Components/Slider"

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/Slider" element={<Slider/>}/>
     </Routes>
    </div>
  )
}

export default App
