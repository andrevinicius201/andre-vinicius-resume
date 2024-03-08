import activeCertifications from "../data/certifications.js"

export default function Certifications(){
    
    return (
        <div>
            <h2 class="text-4xl font-extrabold dark:text-white text-center mt-6 .."> Certifications </h2>
            <p class="my-4 text-lg text-gray-500 text-center"> You can also checkout my current active cloud certifications </p>


            
            <div class="container mx-auto grid grid-cols-1 lg:grid-cols-3">
                {
                    activeCertifications.map(certification => (
                        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8">
                            <a href="#">
                                <img class="rounded-t-lg mx-auto cert-logo" src={certification.imgPath} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{certification.description}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                                <a href={certification.validationURL} target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Credly badge validation
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))
                }
                    

                
               
            </div>


            
        </div>

    )
}


