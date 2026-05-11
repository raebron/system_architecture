import { Slide } from '@/lib/types';
import S01_TitleSlide from '@/slides/S01_TitleSlide';
import S02_TheNeighborhood from '@/slides/S02_TheNeighborhood';
import S03_MeetTheRoomies from '@/slides/S03_MeetTheRoomies';
import S04_JessicaTheUI from '@/slides/S04_JessicaTheUI';
import S05_JakeTheService from '@/slides/S05_JakeTheService';
import S06_ZaneTheDatabase from '@/slides/S06_ZaneTheDatabase';
import S07_HowTheyTalk from '@/slides/S07_HowTheyTalk';
import S08_TheRequest from '@/slides/S08_TheRequest';
import S09_PrestonDNS from '@/slides/S09_PrestonDNS';
import S10_KnockKnock from '@/slides/S10_KnockKnock';
import S11_NakedJessica from '@/slides/S11_NakedJessica';
import S12_BeautifulWebsite from '@/slides/S12_BeautifulWebsite';
import S13_JakeOverwhelmed from '@/slides/S13_JakeOverwhelmed';
import S14_Microservices from '@/slides/S14_Microservices';
import S15_LLMsArrive from '@/slides/S15_LLMsArrive';
import S16_MoxieMCP from '@/slides/S16_MoxieMCP';

export const slides: Slide[] = [
  {
    id: 's1',
    title: 'System Architecture for Non-Technical People',
    narration: "Welcome to System Architecture for Non-Technical People. We're going to build an application, but we're going to build it in the 90s, because times were simpler there.",
    component: S01_TitleSlide,
  },
  {
    id: 's2',
    title: 'The Neighborhood',
    narration: "It starts with the house — the server — in a cute neighborhood. You get to the server house by finding the IP address. For most applications to function properly, the house has to have three bestie roomies.",
    component: S02_TheNeighborhood,
  },
  {
    id: 's3',
    title: 'Meet the Roomies',
    narration: "For most applications to function properly, the house has to have three bestie roomies. Let me introduce you to the crew.",
    component: S03_MeetTheRoomies,
  },
  {
    id: 's4',
    title: 'Jessica the UI',
    narration: "The top floor is occupied by Jessica the UI. She is beautiful, a bombshell, but she is dumb. She's the frontend — what users see and interact with. Click her for some hot takes.",
    component: S04_JessicaTheUI,
  },
  {
    id: 's5',
    title: 'Jake the Service Layer',
    narration: "On the first floor is Jake, the service layer. He is a pure athlete and he catches the ball, throws the ball, on repeat all day. He is also dumb. Click to throw more balls at him.",
    component: S05_JakeTheService,
  },
  {
    id: 's6',
    title: 'Zane the Database',
    narration: "In the basement lives Zane, the database. He is a jerk. He only answers if you specifically talk to him in the word order he chooses. But he's got all the answers. Try typing something in the terminal — hint: he only speaks SQL.",
    component: S06_ZaneTheDatabase,
  },
  {
    id: 's7',
    title: 'How They Talk',
    narration: "The roomies talk to each other in special languages. Jessica talks to Jake in a love language they call API — Application Programming Interface. Jake talks to Zane in SQL — Structured Query Language. That's the only thing Zane will respond to.",
    component: S07_HowTheyTalk,
  },
  {
    id: 's8',
    title: 'The Request Begins',
    narration: "So what happens when you go to a website? Let's use damndelicious.net. I go to Chrome, I type damndelicious.net, and then my browser goes to my beep boop beep router. Click GO to start the journey.",
    component: S08_TheRequest,
  },
  {
    id: 's9',
    title: 'Preston the DNS',
    narration: "The router goes to the biggest address book in the world — Preston, the campus drug dealer. He knows where everyone lives and what they're smoking. His fancy address book is called DNS — Domain Name Service. He looks it up and says 'Oh, I know that URL, that's Jessica. She lives at this IP address.' Click the book to see his records.",
    component: S09_PrestonDNS,
  },
  {
    id: 's10',
    title: 'Knock Knock',
    narration: "Your router gives the IP back to your browser and you go knock knock knock on Jessica's door. Jessica's like 'OMG I love guests!' and throws open the door.",
    component: S10_KnockKnock,
  },
  {
    id: 's11',
    title: "Jessica is Naked",
    narration: "But she looks down and she's naked — no data loaded. So she does what any damsel in distress would do: 'Jake, Jake, I'm naked!' He says 'I got you girl' but he doesn't got her. So he calls Zane. 'Zane, give me recipes' — Zane ignores him. 'SELECT * FROM recipes' — NOW Zane responds. Click through each step.",
    component: S11_NakedJessica,
  },
  {
    id: 's12',
    title: 'The Beautiful Website',
    narration: "Jake gives the data to Jessica and now you see the beautiful website with all the recipes, photos, and ratings. Everything is working. For now...",
    component: S12_BeautifulWebsite,
  },
  {
    id: 's13',
    title: 'Jake Gets Overwhelmed',
    narration: "Everything is fine except Jessica is needy. She is like 'Jake, Jake, Jake, Jake, Jake' and he's catching the ball and throwing the ball but there are literally too many balls. When Jake can't catch and throw, he gives up and goes to sleep. Jessica is embarrassed because she is naked in front of all her visitors. This is what a site crash looks like. Click the button to throw balls at Jake.",
    component: S13_JakeOverwhelmed,
  },
  {
    id: 's14',
    title: 'Microservices',
    narration: "Back in the day, Uber had this idea: what if we gave Jessica a harem? We could make Jake into Microservices. A Jake for searching recipes, a Jake for displaying photos, and a Jake for entering recipes. That way if one Jake goes to sleep, the rest of the website works. And it turns out, Jessica loves having a harem. Click a Jake to take him down.",
    component: S14_Microservices,
  },
  {
    id: 's15',
    title: 'LLMs Enter the Neighborhood',
    narration: "Then something different happened. LLMs entered the neighborhood. They were cool and could transform everything into something cooler. But they couldn't talk to applications... until...",
    component: S15_LLMsArrive,
  },
  {
    id: 's16',
    title: 'Moxie the MCP',
    narration: "Moxie, the MCP, rolled into town. MCP stands for Model Context Protocol. Moxie can connect to applications at the API layer or even at the Database layer, and she makes everything more glamorous and more amaze. Click Moxie to see the connections light up.",
    component: S16_MoxieMCP,
  },
];
