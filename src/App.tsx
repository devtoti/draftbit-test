import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import clientCards from './data-mockup/clientCards'
import './App.css'
import { UserReviews } from './components/UserReviews'
import { ReviewCardProps } from './data-mockup/componentTypes'
import Image from 'rc-image';
import { ClientQuotes } from './components/ClientQuotes'
import CTABanner from './components/CTABanner'
import FAQs from './components/FAQs'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <TestProjectSection>
        <UserReviews />
        <ClientQuotes />
        <CTABanner />
        <FAQs />
      </TestProjectSection>
      <Footer />
    </>
  )
}

const TestProjectSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}






export default App
