
import './App.css'
import { UserReviews } from './components/UserReviews'
import { ClientQuotes } from './components/ClientQuotes'
import CTABanner from './components/CTABanner'
import FAQs from './components/FAQs'
import Footer from './components/Footer'


function App() {


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
