import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import clientCards from './data-mockup/clientCards'
import './App.css'
import { ReviewCardProps } from './data-mockup/componentTypes'
import Image from 'rc-image';

function App() {
  const [count, setCount] = useState(0)

  const GenericSection = () => {
    return (
      <div></div>
    )
  }
  return (
    <>
      <GenericSection />
      <GenericSection />
      <GenericSection />
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

const Footer = () => {
  return (
    <section>
      <article>
        <h2>Product</h2>
        <ul>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </ul>
      </article>
      <article>
        <h2>Company</h2>
        <ul>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </ul>
      </article>
      <article>
        <h2>Support</h2>
        <ul>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </ul>
      </article>
      <article>
        <h2>Get Started</h2>
        <ul>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </ul>
      </article>
      <article>
        <h2>Draftbit</h2>
        <h4>Copyright 2024 Draftbit, Inc.
        </h4>
      </article>
    </section>
  )
}
const TestProjectSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

const UserReviews = () => {
  return (
    <section>
      <h1>Hundreds of projects built</h1>
      <h4>Hear other people experiences on how Draftbit has improved their workflow</h4>
      {clientCards.map((card: ReviewCardProps, ix: number) =>
        <ReviewCard
          key={ix}
          name={card.name}
          jobPos={card.jobPos}
          img={card.img}
          review={card.review}
          rating={card.rating}
        />
      )}
      <button type="button">Show More</button>
    </section>
  )
}

const ClientQuotes = () => {
  return (
    <section>
      <h1>"</h1>
      <h2>Draftbit is the best tool I know of to build a React Native App without any code. I can now create just about any app I want.</h2>
      <div>
        <div>
          <h4>Mark Reid</h4>
          <h5>CEO & Founder - Galacticus</h5>
        </div>
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
      </div>
    </section>
  )
}
const FAQs = () => {
  const FAQCard = () => {
    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
        </svg>
        <h4>Account</h4>
        <h5>User settings, templates, groups. </h5>
      </div>
    )
  }
  return (
    <section>
      <h1>FAQs</h1>
      <h3>Quickly find our hand-crafted answers to your questions</h3>
      <FAQCard />
      <FAQCard />
      <FAQCard />
      <details>
        <summary>Details</summary>
        Something small enough to escape casual notice.
        <p>
          Requires a computer running an operating system. The computer must have some
          memory and ideally some kind of long-term storage. An input device as well
          as some form of output device is recommended.
        </p>
      </details>
      <article>
        <h4>Was this section helpful?</h4>
        <button type="button">
          Yes</button>
        <button type="button">No</button>
        <div>
          <h4>Can’t find what you were looking for?</h4>
          <a href="/support">Contact Support</a>
        </div>
      </article>
    </section>
  )
}
const CTABanner = () => {
  return (
    <section>
      <h1>Embark on a new digital journey</h1>
      <h3>Join our community today and start building your dream app</h3>
      <button type="button">Get Started Now — It’s Free!</button>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="55" viewBox="0 0 100 55" fill="none">
        <path d="M99.9702 55H0.0302734L49.9102 0.880001L99.9702 55Z" fill="white" />
      </svg>
    </section>
  )
}

const ReviewCard = (props: ReviewCardProps) => {
  return (
    <article className='bg-gray-200 my-8'>
      <div>
        <h4>{props.name}</h4>
        <h5>{props.jobPos}</h5>
        <img src={props.img} alt={'A profile picture of ' + props.name} />
      </div>
      <div>
        <p>{props.review}</p>
      </div>
      <div>
        <ul>
          <li>
            <h5>Draftbit Support Team</h5>
            <h6>{props.rating.support}</h6>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
            </svg>
          </li>
        </ul>
      </div>
    </article>
  )
}
export default App
