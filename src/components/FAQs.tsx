export const FAQs = () => {
    const FAQCard = () => {
      return (
        // <button type='button' className=' h-auto aspect-square m-0 p-0 b-0 focus:border-purplebit-500 hover:ring-purplebit-500 z-10'>
  
          <div className='w-[40vw]
        max-w-44 max-h-44 aspect-square h-full  flex flex-col items-center p-4  border-2  bg-graybit-50 rounded-2xl 
        focus:border-purplebit-500 hover:ring-purplebit-500 
        cursor-pointer hover:border-purplebit-500
        [&:not(:hover)]:text-graybit-200
        [&:not(:hover)]:opacity-80
        dark:bg-graybit-300
        dark:border-graybit-350
        dark:text-graybit-150'>
            <div className='min-h-[48px] min-w-[48px] rounded-full bg-purplebit-500 grid place-content-center'>
  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-white">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className='py-2 font-bold text-normal dark:text-white'>Account</h4>
            <h5 className='text-xs text-graybit-200 dark:text-graybit-150'>User settings, templates, groups. </h5>
          </div>
        // </button>
      )
    }
  
    const Question = () => {
      return (
        <>
          <details className='rounded-xl border-2 bg-graybit-50 open:border-purplebit-500 [&>summary:text-bold] my-2 w-full
          dark:bg-graybit-300 dark:text-white dark:border-graybit-200'>
            <summary className='flex py-2 text-left pl-4 rounded-lg'>What type of mobile apps can I build?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-auto mr-4 self-center stroke-[4px]">
                <path className="stroke-2" fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </summary>
            <p className='p-4 text-left'>
              Requires a computer running an operating system. The computer must have some
              memory and ideally some kind of long-term storage. An input device as well
              as some form of output device is recommended.
            </p>
          </details>
        </>
      )
    }
  
    return (
      <section className='pt-8 text-graybit-400 px-6'>
        <h1 className='font-bold text-5xl pb-2 dark:text-white'>FAQs</h1>
        <h3 className='text-graybit-200 px-10 dark:text-graybit-150'>Quickly find our hand-crafted answers to your questions</h3>
        <article className='pt-8 inline-grid grid-rows-2 grid-cols-2 items-center justify-center gap-4 pb-8 md:flex '>
  
          <FAQCard />
          <FAQCard />
          <FAQCard />
          <FAQCard />
        </article>
        <article className='pb-10 w-full'>
          <Question />
          <Question />
          <Question />
          <Question />
        </article>
        <article className='text-graybit-200 dark:text-graybit-150'>
          <h4 className='pb-2'>Was this section helpful?</h4>
  
          <div className='yes-no inline-flex items-center flex-row h-8 border-2 inline rounded-3xl'>
            <button type="button" className='rounded-none border-0' >
              Yes</button>
            <div className='border-r-2 h-full border-graybit-100'></div>
            <button type="button">No</button>
          </div>
          <hr className='mt-4 border-[1.5px] dark:border-graybit-150'/>
          
  
          <div>
            <h4>Can’t find what you were looking for?</h4>
            <a href="/support" className='text-purplebit-500 underline underline-offset-4'>Contact Support</a>
          </div>
        </article>
      </section>
    )
  }

  export default FAQs