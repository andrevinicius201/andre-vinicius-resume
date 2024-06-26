export default function About() {
  return (

    <section class="bg-gray-100 flex justify-center mt-20">
        <div class="grid max-w-full px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 mt-5 ">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl"> André Vinícius </h1>
                <h1 class="max-w-xl mb-4 text-xl font-semibold tracking-tight leading-none md:text-xl xl:text-xl"> Back-end software engineer </h1>
                
                <p class="max-w-2xl mb-2 font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                  I currently work for Grupo Carrefour Brasil as a <span class="font-semibold"> back-end  Javascript (Node) </span> and <span class="font-semibold"> Python (FastAPI) </span> software engineer, responsible for design, develop and test solutions for loyalty programs and discount coupons issuing.  
                </p>

                <p class="max-w-2xl mb-2 font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                  
                  With a strong background on <span class="font-semibold"> AWS </span> and <span class="font-semibold"> GCP </span>, I develop cloud applications designed for the web. Out of the work, I'm always looking for new things to explore and ways to automate daily tasks. 
                  
                </p>
                <p class="max-w-2xl mb-2 font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
        
                  My focus areas are <span class="font-semibold"> Cloud, Microsservices </span> and <span class="font-semibold"> Serverless </span>Applications, always applying industry-standards integration patterns.
                </p>
                <p class="max-w-2xl mb-2 font-light text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">
                If you want to see more information about my background, please check my <span class="font-semibold">LinkedIn profile </span> and feel free to <span class="font-semibold"> send me a message </span> from there or e-mail. 
                 
                </p>
                <a href="https://www.linkedin.com/in/andvini/" target="_blank" class="max-[365px]:w-full md:w-3/4 inline-flex items-center justify-center px-5 py-3 mr-3 mb-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Check my Linkedin profile
                </a>
                <a 
                  href="mailto:andre.vinicius1899@gmail.com?subject=I came from your website" 
                  target="_blank"
                  class="max-[365px]:w-full md:w-3/4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Contact-me via e-mail
                </a> 
                
            </div>
                       
        </div>
    </section>

  );
}
