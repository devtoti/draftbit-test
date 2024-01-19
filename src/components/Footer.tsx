export const Footer = () => {
    return (
        <section className="pt-10 grid grid-cols-2 grid-rows-2 md:w-[50%]">
            <article className="mb-5 dark:text-purplebit-400">
                <h2 className="text-xl mb-2 font-bold text-graybit-500
                dark:text-white
                ">Product</h2>
                <ul className="flex flex-col items-center">
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                   
                </ul>
            </article>
            <article className="mb-5">
                <h2 className="text-xl mb-2 font-bold text-graybit-500 dark:text-white">Company</h2>
                <ul className="flex flex-col items-center">
                <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                </ul>
            </article>
            <article className="mb-5">
                <h2 className="text-xl mb-2 font-bold text-graybit-500 dark:text-white">Support</h2>
                <ul className="flex flex-col items-center">
                <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                </ul>
            </article>
            <article className="mb-5">
                <h2 className="text-xl mb-2 font-bold text-graybit-500 dark:text-white">Get Started </h2>
                <ul className="flex flex-col items-center">
                <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                    <div className="w-20 h-4 my-1 bg-graybit-100 rounded-xl dark:bg-graybit-300"></div>
                </ul>
            </article>

            <article className="w-[100vw] grid place-content-center pb-4
            text-graybit-200 md:w-full md:col-start-1 md:col-end-3 dark:text-white">
                <div className="flex items-center gap-2 justify-center">
                <div className="h-6 w-6 rounded-full bg-purplebit-300 dark:bg-graybit-300"></div> 
                <div className="order-last h-6 w-6 rounded-full bg-purplebit-300 dark:bg-graybit-300"></div> 
                <svg
                className="block place-self-center my-2" 
                xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 56 60">
                    <path className="fill-purplebit-600 dark:fill-white" d="M32.2162 1.10117L51.502 11.9236C54.1932 13.4338 55.8574 16.2662 55.8574 19.3364V40.6636C55.8574 43.7338 54.1932 46.5662 51.502 48.0764L32.2162 58.8988C29.5998 60.367 26.4006 60.367 23.784 58.8988L4.4984 48.0764C1.80723 46.5662 0.143066 43.7338 0.143066 40.6636V19.3364C0.143066 16.2662 1.80723 13.4338 4.4984 11.9236L23.784 1.10117C26.4006 -0.367056 29.5998 -0.367056 32.2162 1.10117ZM3.35736 19.4228V40.6636C3.35736 42.5696 4.39234 44.3312 6.0714 45.2734L25.0832 55.942C25.3294 56.0374 25.5918 56.0868 25.8574 56.0868C27.0408 56.0868 28.0002 55.1274 28.0002 53.944V36.7756C28.0002 33.9776 26.4428 31.4122 23.9604 30.1214L22.5452 29.3856C22.2114 29.2434 21.8818 29.0878 21.5574 28.9184L3.35736 19.4228ZM23.2962 27.0186C26.7122 28.8008 29.2974 28.8008 32.7134 27.0186L51.177 16.6531C50.7224 15.6121 49.9338 14.7238 48.9022 14.1449L30.6434 3.90426C29.004 2.9843 26.9964 2.9843 25.357 3.90426L7.13292 14.1449C6.10122 14.7238 5.31272 15.6121 4.85804 16.6531L23.2962 27.0186ZM28.0002 7.5C32.018 7.5 35.298 9.47464 35.4912 11.9559L35.5002 16.2054C35.5002 18.7942 32.1424 20.8928 28.0002 20.8928C23.858 20.8928 20.5002 18.7942 20.5002 16.2054V11.9559C20.7024 9.47464 23.9824 7.5 28.0002 7.5ZM28.001 15C31.4804 15 34.301 13.5897 34.301 11.85C34.301 10.1103 31.4804 8.7 28.001 8.7C24.5216 8.7 21.701 10.1103 21.701 11.85C21.701 13.5897 24.5216 15 28.001 15Z" fill="white" 
            />
                </svg>
                    </div>
                    <h2>Draftbit</h2>
                <h4 className="text-xs">Copyright 2024 Draftbit, Inc.
                </h4>
            </article>
        </section>
    )
}

export default Footer