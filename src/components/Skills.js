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
        
        <div id="skills" class="shadow-md sm:rounded-lg bg-primary-700 pb-10">
            <h2 class="text-4xl font-extrabold text-white text-center mt-6 mb-6">My professional skills</h2>
     
            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                     
                <span  onClick={updateTechGallery}class="mb-2 bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Back-end software development</span>
                <span  onClick={updateTechGallery}class="mb-2 bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Cloud Applications and Integration Technologies</span>
                <span  onClick={updateTechGallery}class="mb-2 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Front-end Software development</span>
                <span  onClick={updateTechGallery}class="mb-2 bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Devops, application platforms, infrastructure and monitoring/observability</span>
                <span  onClick={updateTechGallery}class="mb-2 bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Data</span>
                <span  onClick={updateTechGallery}class="mb-2 bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">AI and ML</span>

            </div>

            <div class="grid grid-cols-3 md:grid-cols-6 gap-4 place-items-center h-56 mx-auto">
                
                    {
                        
                        technologies.map(technology => {
                            let imgPath = "img/technologies/"+technology
                            return (
                                <div>
                                    <img class="max-w-24 rounded-lg" src={imgPath} alt="" />
                                </div>
                            )      
                        })
                    }
                
            </div>


            <table class="table-auto w-full mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-2">
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