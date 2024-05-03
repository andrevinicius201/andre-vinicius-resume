import { Timeline } from 'flowbite-react';

import experienceData from "../data/experiences.js"

export default function WorkingHistory() {

  return (
    <section id="working-history" class="mt-10">
      
    <h2 class="text-4xl font-extrabold dark:text-white text-center">My working and studying experiences</h2>
    <p class="my-4 text-lg text-gray-500 text-center"> These are the companies and schools that are important parts of my carreer </p>

      <Timeline class="container mx-auto">
          
        { 
          experienceData.map(experience => (
            <Timeline.Item class="border-dashed rounded-md border-2 border-indigo-100 p-8 m-8">  
              <Timeline.Content class="flex flex-col lg:flex-row items-center">
                <div>
                  <img class="company-logo mr-6 .." src={experience.imgPath}/>
                </div>
                <div>
                <Timeline.Time>{experience.startDate} - {experience.endDate}</Timeline.Time>
                <Timeline.Title> {experience.title} </Timeline.Title>
                <Timeline.Body>
                  {experience.description}
                </Timeline.Body>
                </div>
                
              </Timeline.Content>
            </Timeline.Item>
          ))
        }

      </Timeline>
      
      
    </section>
  );
}
