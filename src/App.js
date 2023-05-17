import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import CreateEmployee from './pages/CreateEmployee';
import { EmployeeProvider } from "./EmployeeListContext"
import EmployeesList from './pages/EmployeesList';

export default function App() {

    return (
        <ChakraProvider>
            <EmployeeProvider>
                <Router>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create-employee" element={<CreateEmployee />} />
                        <Route path="/employees" element={<EmployeesList />} />
                    </Routes>
                    <Footer />
                </Router>
            </EmployeeProvider>
        </ChakraProvider>
    )
}
