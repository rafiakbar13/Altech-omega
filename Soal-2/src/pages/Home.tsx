import About from '../components/About'
import CallToAction from '../components/CTA'
import Client from '../components/Client'
import Companies from '../components/Companies'
import Contact from '../components/Contact'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Pricing from '../components/Pricing'

const Home = () => {
    return (
        <div className='mx-auto max-w-7xl'>
            <main>
                <Navbar />
                <Hero />
                <Companies />
                <About />
                <Client />
                <Features />
                <Pricing />
                <CallToAction />
                <Contact />
                <Footer />
            </main>
        </div>
    )
}

export default Home