import { AcceleratedIcon, EnhancedIcon, IntegrationIcon, ScalableIcon, VisualIcon } from "../components";

export const benefits = [
    {
        id: crypto.randomUUID(),
        icon: <VisualIcon />,
        title: 'Visual and Brand Consistency',
        desc: 'Jazz ensures a cohesive and recognizable brand identity across platforms, delivering visually appealing and uniform designs.',
        type: 'normal'
    },
    {
        id: crypto.randomUUID(),
        icon: <AcceleratedIcon />,
        title: 'Accelerated Development',
        desc: 'By standardizing components and patterns, Jazz reduces development time, enabling faster delivery of high-quality digital products.',
        type: 'normal'
    },
    {
        id: crypto.randomUUID(),
        icon: <IntegrationIcon />,
        title: 'Seamless Integration',
        desc: 'Jazz promotes smooth collaboration between design and development teams, simplifying workflows and ensuring compatibility across tools and platforms.',
        type: 'normal'
    },
    {
        id: crypto.randomUUID(),
        icon: <EnhancedIcon />,
        title: 'Enhanced User Experience',
        desc: 'Jazz prioritizes intuitive and accessible design, creating interfaces that are user-friendly and meet diverse accessibility standards.',
        type: 'normal'
    },
    {
        id: crypto.randomUUID(),
        icon: <ScalableIcon />,
        title: 'Scalable by Design',
        desc: 'With a solid framework, Jazz empowers your brand to adapt and grow seamlessly, supporting future challenges and innovations.',
        type: 'normal'
    },
    {
        id: crypto.randomUUID(),
        title: 'Customize it to fit other brands or product UI Styles',
        type: 'last'
    },

]