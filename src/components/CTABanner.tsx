const CTABanner = () => {
    return (
      <section className="relative flex flex-col items-center w-full bg-purplebit-500 h-auto p-10 pb-0 text-white bg-[url('/banner-gradient.png')] bg-cover md:bg-[url('/banner-gradient-lg.png')] md:h-96 md:pt-24">
        <h1 className=' text-4xl font-extrabold pb-4'>Embark on a new digital journey</h1>
        <h3 className='pb-6'>Join our community today and start building your dream app</h3>
        <button className="outline mb-auto block bg-white text-purplebit-500 border-2 border-purplebit-600 rounded-2xl shadow-md shadow-purplebit-400/50 z-10 dark:fill-graybit-500" type="button">Get Started Now — It’s Free!</button>
        <svg xmlns="http://www.w3.org/2000/svg" className=' inline h-autojustify-self-end mt-16 z-10' height="40" viewBox="0 0 100 55" fill="none">
          <path  className="fill-graybit-500" d="M99.9702 55H0.0302734L49.9102 0.880001L99.9702 55Z" fill="white" />
        </svg>
        <img 
        className='absolute left-0 bottom-0 -z-1 opacity-80'
        src="./banner-logo.svg" alt="Draftbit logo in the background" />
        <img 
        className='absolute right-0 top-0 -z-1 opacity-80 rotate-180'
        src="./banner-logo.svg" alt="Draftbit logo in the background" />
      </section>
    )
  }

  export default CTABanner