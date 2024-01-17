import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import clientCards from './data-mockup/clientCards'
import './App.css'
import { ReviewCardProps } from './data-mockup/componentTypes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
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
