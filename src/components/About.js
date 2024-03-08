export default function About() {
  return (

    <section class="bg-gray-100 flex justify-center mt-20">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 mt-5">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hi! I'm André</h1>
                <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400">
                  And my job is to design, code and maintain back-end software. 
                </p>

                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  
                  I currently work for Grupo Carrefour Brasil as a back-end software engineer. 
                  I love Web App Development, Cloud Solutions and Serverless Applications, always looking for new things to explore and ways to automate daily tasks. 
                  If you want to see more information about my background, please check my LinkedIn profile and feel free to send me a message from there or e-mail. 
                 
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
