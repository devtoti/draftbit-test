import clientCards from '../data-mockup/clientCards'
import { ReviewCard } from './ReviewCard'
import { ReviewCardProps } from '../data-mockup/componentTypes'

export const UserReviews = () => {
  return (
    <section className='p-10'>
      <h1 className='font-bold text-5xl pb-2'>Hundreds of projects built</h1>
        <h3 className='text-graybit-200 px-10 pb-6'>Hear other people experiences on how Draftbit has improved their workflow</h3>
      <article className='grid grid-cols-1 place-content-center place-items-center items-center justify-center md:grid-cols-2 lg:grid-cols-3'>
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
      </article>
      <button className="order-last text-sm text-graybit-200 border-[1.5px] border-graybit-200 mt-2 px-2 py-1 opacity-75" type="button">Show More</button>
    </section>
  )
}

