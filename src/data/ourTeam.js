import ross from '../assets/images/team/ross.png'
import val from '../assets/images/team/val.png'
import jand from '../assets/images/team/jand.png'
import santi from '../assets/images/team/santi.png'
import cris from '../assets/images/team/cris.png'

export const ourTeam = [
    {
        id: crypto.randomUUID(),
        name: 'Rossy Hurtado',
        bgColor: 'bg-primary-orange',
        img: ross,
        tags: [
            {
                id: crypto.randomUUID(),
                tag: 'UI Designer'
            },
            {
                id: crypto.randomUUID(),
                tag: 'UX Designer'
            },
        ],
        links: [
            {
                id: 'likedin',
                link: ''
            },
            {
                id: 'behance',
                link: ''
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: 'Valeria Martinez',
        bgColor: 'bg-primary-lightblue',
        img: val,
        tags: [
            {
                id: crypto.randomUUID(),
                tag: 'UI Designer'
            },
            {
                id: crypto.randomUUID(),
                tag: 'UX Designer'
            },
        ],
        links: [
            {
                id: 'likedin',
                link: ''
            },
            {
                id: 'behance',
                link: ''
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: 'Laura Forero',
        bgColor: 'bg-primary-blue',
        img: jand,
        tags: [
            {
                id: crypto.randomUUID(),
                tag: 'UI Designer'
            },
            {
                id: crypto.randomUUID(),
                tag: 'UX Designer'
            },
        ],
        links: [
            {
                id: 'likedin',
                link: ''
            },
            {
                id: 'behance',
                link: ''
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: 'Santiago Velasco',
        bgColor: 'bg-primary-orange',
        img: santi,
        tags: [
            {
                id: crypto.randomUUID(),
                tag: 'UI Designer'
            },
            {
                id: crypto.randomUUID(),
                tag: 'Frontend Developer'
            },
        ],
        links: [
            {
                id: 'likedin',
                link: ''
            },
            {
                id: 'behance',
                link: ''
            },
        ]
    },
    {
        id: crypto.randomUUID(),
        name: 'Cristian Ortiz',
        bgColor: 'bg-primary-blue',
        img: cris,
        tags: [
            {
                id: crypto.randomUUID(),
                tag: 'UI Designer'
            },
            {
                id: crypto.randomUUID(),
                tag: 'Frontend Developer'
            },
        ],
        links: [
            {
                id: 'likedin',
                link: ''
            },
            {
                id: 'behance',
                link: ''
            },
        ]
    },
]