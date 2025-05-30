import './App.css'
import { useEffect, useState } from 'react'
import Home from './components/home'
import Parfumes from './components/parfumes'
import About from './components/about'
import Contact from './components/contact'

function App() {
    const [page, setPage] = useState("home")
    const handlePageChange = (page) => {
        setPage(page)
    }
    useEffect(() => {
        document.querySelectorAll(".active").forEach((el) => {
            el.classList.remove("active");
        });
        document.querySelectorAll("." + page).forEach((el) => {
            el.classList.add("active");
        });
    }, [page])
    return (
        <>
            {page === "home" && <Home handlePageChange={handlePageChange} />}
            {page === "parfumes" && <Parfumes handlePageChange={handlePageChange} />}
            {page === "about" && <About handlePageChange={handlePageChange} />}
            {page === "contact" && <Contact handlePageChange={handlePageChange} />}
        </>
    )

}

export default App
