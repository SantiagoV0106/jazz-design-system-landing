import { JazzALogo } from "../components";
import valueBg from '../assets/images/bg/value-bg.png'
import valueImage from '../assets/images/bg/value-food.png'
import valueMockup from '../assets/images/bg/value-mockup.png'

export const values = [
    {
        id: crypto.randomUUID(),
        value: 'Transparency',
        bgColor: 'bg-primary-orange',
        desc: 'Components should be clear, reducing cognitive load and providing an effortless experience for users.'
    },
    {
        id: crypto.randomUUID(),
        bgImage: valueBg,
    },
    {
        id: crypto.randomUUID(),
        value: 'Flexibility',
        bgColor: 'bg-primary-darkblue',
        desc: 'Encourage adaptability in components, offering options for customization without sacrificing the integrity of the design language.'
    },
    {
        id: crypto.randomUUID(),
        icon: <JazzALogo />,
        bgColor: 'bg-primary-lightblue',
        name: 'jazzA',
    },
    {
        id: crypto.randomUUID(),
        value: 'Harmony',
        bgColor: 'bg-primary-mediumblue',
        desc: 'All components should work together seamlessly, much like instruments in a jazz ensemble. Design and development must feel fluid, without interruptions in the user journey.'
    },
    {
        id: crypto.randomUUID(),
        image : valueImage,
        bgColor: 'bg-primary-orange',
        name: 'Value-food-image',
    },
    {
        id: crypto.randomUUID(),
        value: 'Accesibility',
        bgColor: 'bg-primary-darkblue',
        desc: 'Prioritize intuitive interactions, ensuring designs are inclusive, responsive, and easy to use for all users.'
    },
    {
        id: crypto.randomUUID(),
        image : valueMockup,
        bgColor: 'bg-primary-blue',
        name: 'value-mockup',
    },
    {
        id: crypto.randomUUID(),
        value: 'Serenity',
        bgColor: 'bg-primary-mediumblue',
        desc: 'Visual elements should evoke calmness. Use soft color palettes, rounded edges, and ample whitespace to create a relaxed, inviting experience.'
    },
]