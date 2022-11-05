import React from 'react'
import "mdb-ui-kit/css/mdb.min.css"
import Form from './component/addUser/Form'
import {BrowserRouter,Routes,Router, Route} from 'react-router-dom'
import GetForm from './component/getData/GetForm'
import Navbar from './component/navbar/Navbar'
import Edituser from './component/editUser/Edituser'
const App = () => {
  return (
<div className='main-container'>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route exact path="/create" element={<Form/>  }/>
  <Route exact path="/" element={<GetForm/>  }/>
  <Route exact path="/edit/:userId" element={ <Edituser/>}/>
</Routes>

</BrowserRouter> 
</div>

  )
}

export default App