import { AddValues, Features, Solutions, MenuItem, Products, Difference, Service } from "./types";

export const getAddValues = (t: (key: string) => string): AddValues[] => [
    {
        id: 1,
        title: t('title1'),
        description: t('description1'),
        image: "/add_value/Icon1.svg"
    },
    {
        id: 2,
        title: t('title2'),
        description: t('description2'),
        image: "/add_value/Icon2.svg"
    },
    {
        id: 3,
        title: t('title3'),
        description: t('description3'),
        image: "/add_value/Icon3.svg"
    },
    {
        id: 4,
        title: t('title4'),
        description: t('description4'),
        image: "/add_value/Icon4.svg"
    },
    {
        id: 5,
        title: t('title5'),
        description: t('description5'),
        image: "/add_value/Icon5.svg"
    },
]

export const getFeatures = (t: (key: string) => string): Features[] => [
    {
        id: 1,
        title: t('title1'),
        description: t('description1'),
        image: '/features/image1.svg',
    },
    {
        id: 2,
        title: t('title2'),
        description: t('description2'),
        image: '/features/image2.svg',
    },
    {
        id: 3,
        title: t('title3'),
        description: t('description3'),
        image: '/features/image3.svg',
    },
]

export const getSolutions = (t: (key: string) => string): Solutions[] => [
    {
        id: 1,
        title: t('title1'),
        image: '/solutions/one.svg',
    },
    {
        id: 2,
        title: t('title2'),
        image: '/solutions/tow.svg',
    },
    {
        id: 3,
        title: t('title3'),
        image: '/solutions/three.svg',
    },
]

export const getMenuItem = (t: (key: string) => string): MenuItem[] => [
    {
        name: t('home'),
        href: "",
        isActive: true,
    },
    {
        name: t('services'),
        href: "seervice",
        isActive: false,
    }
]

export const getProducts = (t: (key: string) => string): Products[] => [
    {
        id: 1,
        title: t('title1'),
        number: "01",
        description: t('description1'),
        image: "/solutions/OBJECTS.svg",
    },
    {
        id: 2,
        title: t('title2'),
        number: "02",
        description: t('description2'),
        image: "/solutions/OBJECTS (1).svg",
    },
    {
        id: 3,
        title: t('title3'),
        number: "03",
        description: t('description3'),
        image: "/solutions/OBJECTS (2).svg",
    },
    {
        id: 4,
        title: t('title4'),
        number: "04",
        description: t('description4'),
        image: "/solutions/OBJECTS (3).svg",
    }
]

export const getDifference = (t: (key: string) => string): Difference[] => [
    {
        id: 1,
        title: t('title1'),
        description: t('description1'),
        image: "/difference/users.svg",
    },
    {
        id: 2,
        title: t('title2'),
        description: t('description2'),
        image: "/difference/cloud.svg",
    },
    {
        id: 3,
        title: t('title3'),
        description: t('description3'),
        image: "/difference/lin_bar.svg",
    },
    {
        id: 4,
        title: t('title4'),
        description: t('description4'),
        image: "/difference/Clip.svg",
    },
    {
        id: 5,
        title: t('title5'),
        description: t('description6'),
        image: "/difference/cpu.svg",
    },
    {
        id: 6,
        title: t('title6'),
        description: t('description6'),
        image: "/difference/database.svg",
    }
]

export const getService1 = (t: (key: string) => string): Service[] => [
    {
        id: 1,
        title: t('title1'),
    },
    {
        id: 2,
        title: t('title2'),
    },
    {
        id: 3,
        title: t('title3'),
    },
    {
        id: 4,
        title: t('title4'),
    },
    {
        id: 5,
        title: t('title5'),
    },
    {
        id: 6,
        title: t('title6'),
    },
    {
        id: 7,
        title: t('title7'),
    }
]
export const getService2 = (t: (key: string) => string): Service[] => [
    {
        id: 1,
        title: t('title1'),
    },
    {
        id: 2,
        title: t('title2'),
    },
    {
        id: 3,
        title: t('title3'),
    },
    {
        id: 4,
        title: t('title4'),
    },
    {
        id: 5,
        title: t('title5'),
    },
]
