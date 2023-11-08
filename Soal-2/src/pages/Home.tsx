import About from '../components/About'
import Companies from '../components/Companies'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
type Props = {}

const Home = (props: Props) => {
    return (
        <div className='w-full mx-auto max-w-7xl'>
            <main>
                <Navbar />
                <Hero />
                <Companies />
                <About />
            </main>
        </div>
    )
}

export default Home