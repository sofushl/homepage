import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects.tsx';

export default function App() {

    return (
        <BrowserRouter>
            <Navbar left={[{
                text: "Home", href: "/", newtab: false,
            }, {
                text: "Projects", href: "/projects", newtab: false,
            }, {
                text: "About", href: "/about", newtab: false,
            }, {
                text: "Contact", href: "/contact", newtab: false,
            }
            ]} center={[

            ]} right={[{
                text: "github", href: "https://github.com/sofushl",
            }]} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </BrowserRouter>
    )
}
