import Header from '../src/components/Header';
import Hero from './components/Hero';
import './App.css';
import Sponsore from './components/Sponsore';
import Cards from './components/Cards';
import ReservasiTempat from './components/ReservasiTempat';

function App() {
    return (
        <section className="font-plus-jakarta-sans">
            <Header />
            <Hero />
            <div className="max-w-[1440px] mx-auto">
                <Sponsore />
                <Cards />
                <ReservasiTempat />
            </div>
        </section>
    );
}

export default App;
