import { Accordion } from 'flowbite-react';
import WorkingHistory from './WorkingHistory';
import Certifications from './Certifications';
import Skills from './Skills';

export default function ContentAccordion(){
  return (
    <Accordion>
      <Accordion.Panel>
        <Accordion.Title>Experience</Accordion.Title>
        <Accordion.Content>
          <WorkingHistory/>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Certifications</Accordion.Title>
        <Accordion.Content>
            <Certifications/>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Skills</Accordion.Title>
        <Accordion.Content>
          <Skills/>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}