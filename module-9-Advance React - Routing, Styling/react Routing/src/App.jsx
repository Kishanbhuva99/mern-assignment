import { Routes ,Route } from 'react-router-dom'
import Home from './page/Home'
import Aboutus from './page/Aboutus'
import Contactus from './page/Contactus'
import { Userlayout } from './components/Userlayout'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Userlayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<Aboutus/>}/>
          <Route path='contact' element={<Contactus/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
