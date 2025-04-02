import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import MetricsSection from './components/MetricsSection'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Hero />
            <MetricsSection />
        </>
    )
}

export default App
