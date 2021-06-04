import avatar1 from "../../assets/utils/images/avatars/12.jpg";

export const MainNav = [
    {
        icon: 'pe-7s-rocket',
        label: 'Private Cabinet',
        // to: '#/dashboards/basic',
        content : [
            {
                icon: ' ',
                label: 'Privet',

             }
        ],

    },
];

export const UserMenu = [
    {
        // icon: "client/src/assets/utils/images/avatars/1.jpg",
        label: "Vjaceslavs Marmiss",
        content: [
            {
                label: 'My Profile',
                to: '#/elements/buttons-standard',
            },
            {
                label: 'Edit profile',
                to: '#/elements/buttons-standard',
            },
            {
                label: 'Settings',
                to: '#/elements/buttons-standard',
            }
        ]
    }
]

export const ComponentsNav = [
    {
        icon: 'pe-7s-plane',
        label: 'Flight',
        content: [
            {
                label: 'Flight dates',
                to: '#/flights/dates',
            },
            // {
            //     label: 'Dropdowns',
            //     to: '#/elements/dropdowns',
            //
            // },
            // {
            //     label: 'Icons',
            //     to: '#/elements/icons',
            // },
            // {
            //     label: 'Badges',
            //     to: '#/elements/badges-labels',
            // },
            // {
            //     label: 'Cards',
            //     to: '#/elements/cards',
            // },
            // {
            //     label: 'List Groups',
            //     to: '#/elements/list-group',
            // },
            // {
            //     label: 'Navigation Menus',
            //     to: '#/elements/navigation',
            // },
            // {
            //     label: 'Utilities',
            //     to: '#/elements/utilities',
            // },
        ],
    },
    {
        icon: 'pe-7s-home',
        label: 'Hotel',
        content: [
            {
                label: 'Book dates',
                to: '#/components/tabs',
            },
            // {
            //     label: 'Notifications',
            //     to: '#/components/notifications',
            // },
            // {
            //     label: 'Modals',
            //     to: '#/components/modals',
            // },
            // {
            //     label: 'Progress Bar',
            //     to: '#/components/progress-bar',
            // },
            // {
            //     label: 'Tooltips & Popovers',
            //     to: '#/components/tooltips-popovers',
            // },
            // {
            //     label: 'Carousel',
            //     to: '#/components/carousel',
            // },
            // {
            //     label: 'Maps',
            //     to: '#/components/maps',
            // },
        ],
    },
    {
        icon: 'pe-7s-car',
        label: 'Car Hire',
        content : [

            {
                label : 'poshel naxuj',
            },
        ],

        // to: '#/tables/regular-tables',
    },
];
export const FormsNav = [
    {
        icon: 'pe-7s-light',
        label: 'Controls',
        to: '#/forms/controls',
    },
    {
        icon: 'pe-7s-eyedropper',
        label: 'Layouts',
        to: '#/forms/layouts',
    },
    {
        icon: 'pe-7s-pendrive',
        label: 'Validation',
        to: '#/forms/validation',
    },
];
export const WidgetsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Dashboard Boxes',
        to: '#/widgets/dashboard-boxes',
    },
];
export const ChartsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'ChartJS',
        to: '#/charts/chartjs',
    },
];
export const BasketNav  = [
    {
        icon : 'pe-7s-cart',
        label: '',
        content: [


        ]
    }


]