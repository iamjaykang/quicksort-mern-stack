import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { NavBar } from '../components'
import { LaptopsList, LaptopsInsert, LaptopsUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/laptops/list" exact element={<LaptopsList />} />
                <Route path="/laptops/create" exact element={<LaptopsInsert />} />
                <Route
                    path="/laptops/update/:id"
                    exact
                    element={<LaptopsUpdate />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App