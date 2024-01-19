
import './App.css'
import { UserReviews } from './components/UserReviews'
import { ClientQuotes } from './components/ClientQuotes'
import CTABanner from './components/CTABanner'
import FAQs from './components/FAQs'
import Footer from './components/Footer'
import Switcher from './components/Switcher'

function App() {


  return (
    <>
      <TestProjectSection>
        <Switcher />
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
