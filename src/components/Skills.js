import skillsData from '../data/skills'

export default function Skills(){
    return (
        
    


<div id="skills" class="relative overflow-x-auto shadow-md sm:rounded-lg bg-primary-700">
    <h2 class="text-4xl font-extrabold text-white text-center mt-6 mb-6">My professional skills</h2>
    <table class="table-auto max-[1000px]:w-full w-6/12 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-primary-700 text-white">
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