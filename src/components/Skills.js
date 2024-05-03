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
        
        <div id="skills" class="sm:rounded-lg bg-primary-700 pb-10">
            <h2 class="text-4xl font-extrabold text-white text-center p-2 mb-2">My professional skills</h2>

            <div class="mx-auto w-5/6 md:w-4/6 lg:w-2/6 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                {
                    skillsData.map(skill => {
                        return (
                            <a onClick={updateTechGallery} class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                                {skill.category}
                            </a>
                        )
                    }) 
                }

            </div>

            <div class="mx-auto flex justify-evenly flex-wrap m-2">
                
                    {
                        
                        technologies.map(technology => {
                            let imgPath = "img/technologies/"+technology
                            return (
                                <div class="max-w-20 md:max-w-24 mt-2">
                                    <img class="rounded-lg" src={imgPath} alt="" />
                                </div>
                            )      
                        })
                    }
                
            </div>


            <table class="table-auto w-full md:w-5/6 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 p-2">
                
                <tbody>

                    {
                        skillsData.map(skill => (

                            <tr class="bg-white border-b dark:bg-gray-800">
                                    <th scope="row" class="pl-2 font-medium text-gray-900">
                                        {skill.category}
                                    </th>
                                
                                    <td class="pl-2 pr-2 py-4">
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