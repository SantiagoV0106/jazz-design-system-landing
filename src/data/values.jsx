import { JazzALogo, PianoIcon, SaxoIcon, ViolinIcon } from "../components";

export const values = [
    {
        id: crypto.randomUUID(),
        value: 'Visual and Brand Consistency',
        bgColor: 'bg-primary-orange',
        desc: 'We ensure that all your products reflect your brand identity with cohesive and eye-catching designs across platforms.'
    },
    {
        id: crypto.randomUUID(),
        icon: <SaxoIcon />,
        bgColor: 'bg-primary-yellow',
        name: 'saxo',
    },
    {
        id: crypto.randomUUID(),
        value: 'Flexibility',
        bgColor: 'bg-primary-skyblue',
        desc: 'Encourage adaptability in components, offering options for customization without sacrificing the integrity of the design language.'
    },
    {
        id: crypto.randomUUID(),
        icon: <JazzALogo />,
        bgColor: 'bg-primary-pink',
        name: 'jazzA',
    },
    {
        id: crypto.randomUUID(),
        value: 'Harmony',
        bgColor: 'bg-primary-blue',
        desc: 'All components should work together seamlessly, much like instruments in a jazz ensemble. Design and development must feel fluid, without interruptions in the user journey.'
    },
    {
        id: crypto.randomUUID(),
        icon: <PianoIcon />,
        bgColor: 'bg-primary-orange',
        name: 'piano',
    },
    {
        id: crypto.randomUUID(),
        value: 'Accesibility',
        bgColor: 'bg-primary-yellow',
        desc: 'Prioritize intuitive interactions, ensuring designs are inclusive, responsive, and easy to use for all users.'
    },
    {
        id: crypto.randomUUID(),
        icon: <ViolinIcon />,
        bgColor: 'bg-primary-orange',
        name: 'violin',
    },
    {
        id: crypto.randomUUID(),
        value: 'Serenity',
        bgColor: 'bg-primary-pink',
        desc: 'Visual elements should evoke calmness. Use soft color palettes, rounded edges, and ample whitespace to create a relaxed, inviting experience.'
    },
]