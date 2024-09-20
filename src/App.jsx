import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,Routes,Route,Link}


//Division One
import CommunicationsDepartment  from './components/division_one/commDept.jsx'
import CommunicationsHome from './components/division_one/communicationsHome.jsx'
import InspectionReportsDepartment from './components/division_one/inspectReportsDept.jsx'
import RoutingPersonnelDepartment from './components/division_one/routingPersonDept.jsx'


//Division Two
import from './components/division_two'
import from './components/division_two'
import from './components/division_two'
import from './components/division_two'

//Division Three
import from './components/division_three'
import from './components/division_three'
import from './components/division_three'
import from './components/division_three'

//Division Four
import from './components/division_four'
import from './components/division_four'
import from './components/division_four'
import from './components/division_four'



//Division Five
import from './components/division_five'
import from './components/division_five'
import from './components/division_five'
import  from './components/division_five'



//Divison Six
import  from './components/division_six'
import from './components/division_six'
import  from './components/division_six'
import  from './components/division_six'
//Divison Seven
import  from './components/division_seven'
import  from './components/division_seven'
import  from './components/division_seven'
import ExecutiveDirectorOffice from './components/division_seven/executiveDirectorOffice.jsx

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <header>
            <nav>
                {/* Division */}
                <Link to="/">Home</Link>

                {/* Division One */}
                {/* Division Two */}
                {/* Division Three */}
                {/* Division Four */}
                {/* Division Five */}
                {/* Division Six */}
                {/* Division Seven */}



            </nav>
        </header>

        <Routes>
            <Route  path="/" element={<CommunicationsDepartment />} />


            {/* Division One */}
            <Route path='/division-one/Home' element={<CommunicationsHome />} />
            <Route path='/division-one/CommunicationsDepartment' element ={<CommunicationsDepartment />} />
            {/* Division Two */}
            {/* Division Three */}
            {/* Division Four */}
            {/* Division Five */}
            {/* Division Six */}
            {/* Division Seven */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
