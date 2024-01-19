import Image from "rc-image"

export const ReviewCard = (props: any) => {
    return (
      <article className='flex items-start justify-center  flex-col h-[26rem] max-w-[18rem] bg-white border-2 border-graybit-50 rounded-xl my-2 text-purplebit-200 text-left md:mx-4 dark:bg-graybit-500 dark:border-graybit-200'>
  
        <div className='px-4 pb-2 pt-6 border-b-2 w-full flex grow-0 dark:text-white'>
          <Image src={props.img} alt={'A profile picture of ' + props.name} className='w-16 rounded-full'/>
          <div className='pl-2 self-center'>
          <h4 className='text-l font-medium dark:text-purplebit-350'>{props.name}</h4>
          <h5 className='text-xs'>{props.jobPos}</h5>
          </div>
        </div>
  
        <div className='px-4 pt-6 pb-0 text-l mb-[auto] leading-8 font-normal min-h-[50%] dark:text-graybit-100'>
          <p>{props.review}</p>
        </div>
  
        <div className='px-4 bg-purplebit-50 py-2 rounded-b-xl w-full dark:bg-graybit-300 dark:text-graybit-150'>
          <ul>
            <li className='flex align-center justify-center pb-1'>
              <h5 className='mr-[auto] text-middle text-sm'>Draftbit Support Team</h5>
              <h6 className='pr-1 font-medium text-purplebit-500 dark:text-purplebit-350'>{props.rating.support}</h6>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-purplebit-500 w-6 h-6 dark:fill-purplebit-350">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </li>
            <li className='flex align-center justify-center pb-1'>
              <h5 className='mr-[auto] text-middle text-sm'>Recommend to a friend</h5>
              <h6 className='pr-1 font-medium text-purplebit-500 dark:text-purplebit-350'>{props.rating.recommended}</h6>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-purplebit-500 w-6 h-6 dark:fill-purplebit-350">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </li>
            <li className='flex align-center justify-center '>
              <h5 className='mr-[auto] text-middle text-sm'>Overall Experience</h5>
              <h6 className='pr-1 font-medium text-purplebit-500 dark:text-purplebit-350'>{props.rating.overall}</h6>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-purplebit-500 w-6 h-6 dark:fill-purplebit-350">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            </li>
          
          </ul>
        </div>
      </article>
    )
  }
