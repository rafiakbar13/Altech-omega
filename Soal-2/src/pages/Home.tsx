import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
type Props = {}

const Home = (props: Props) => {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Home