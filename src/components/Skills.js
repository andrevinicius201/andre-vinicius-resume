import { useRef, useState } from 'react'
import {skillsData, imageList} from '../data/skills'

export default function Skills(){

    const [technologies, setTechnologies] = useState(skillsData[0]["techImages"])

    function filterSelectedTechnologyCategory(technology, techCategoryName){
        return technology.category == techCategoryName
    }

    function updateTechGallery(e){
        const rawTechnologiesList = skillsData
        const techCategoryName = e.target.textContent
        if (techCategoryName == 'All categories'){
            return setTechnologies(rawTechnologiesList)
        }
        const selectedTechFiltered = rawTechnologiesList.filter(technology => filterSelectedTechnologyCategory(technology, techCategoryName))
        setTechnologies(selectedTechFiltered[0]["techImages"])
    }

    return (
        
        <div id="skills" class="relative overflow-x-auto shadow-md sm:rounded-lg bg-primary-700 pb-10">
            <h2 class="text-4xl font-extrabold text-white text-center mt-6 mb-6">My professional skills</h2>
     

            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                {/* <button type="button" onClick={updateTechGallery} class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button> */}
                <button type="button" onClick={updateTechGallery} class="text-gray-900 border border-white hover:text-white hover:border-gray-200 hover:bg-blue-700 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Back-end software development</button>
                <button type="button" onClick={updateTechGallery} class="text-gray-900 border border-white hover:text-white hover:border-gray-200 hover:bg-blue-700 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Cloud Applications and Integration Technologies</button>
                <button type="button" onClick={updateTechGallery} class="text-gray-900 border border-white hover:text-white hover:border-gray-200 hover:bg-blue-700 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Front-end Software development</button>
                <button type="button" onClick={updateTechGallery} class="text-gray-900 border border-white hover:text-white hover:border-gray-200 hover:bg-blue-700 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Devops, application platforms, infrastructure and monitoring/observability</button>
            
            </div>

            


            <div class="grid grid-cols-3 md:grid-cols-6 gap-4 max-[1000px] w-full mx-auto">
            <div class="flex justify-center items-center col-span-3 md:col-span-6">
                {
                    
                    technologies.map(technology => {
                        let imgPath = "img/technologies/"+technology
                        return (
                            <div>
                                <img class="h-auto max-w-32 rounded-lg m-2" src={imgPath} alt="" />
                            </div>
                        )      
                    })
                }
            </div>
            </div>


            <table class="table-auto max-[1000px]:w-full w-6/12 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs uppercase bg-primary-700 text-white">
                    <tr>
                        <th scope="col" class="px-6 py-3 w-1/6">
                            Technology category
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Working skills
                        </th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        skillsData.map(skill => (

                            <tr class="bg-white border-b dark:bg-gray-800">
                                    <th scope="row" class="pl-2 font-medium text-gray-900">
                                        {skill.category}
                                    </th>
                                
                                    <td class="pl-2 py-4">
                                        {skill.skillList}
                                    </td>  

                            </tr>
            
                        ))
                    }

        
                
                </tbody>
            </table>
        </div>
    )
}