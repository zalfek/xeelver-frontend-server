import avatar1 from "../../assets/utils/images/avatars/12.jpg";

// export const MainNav = [
//     {
//         icon: 'pe-7s-rocket',
//         label: 'Private Cabinet',
//         // to: '#/dashboards/basic',
//         content : [
//             {
//                 icon: ' ',
//                 label: 'Privet',
//
//              }
//         ],
//
//     },
// ];

export const UserMenu = [
    {
        label: "Vjaceslavs Marmiss",
        content: [
            {
                label: 'My Profile',
                to: '/Profile',
            },
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
                to: '/flights/search',
            },

        ],
    },
    {
        icon: 'pe-7s-home',
        label: 'Hotel',
        content: [
            {
                label: 'Book dates',
                to: '/hotels/search',
            },
        ],
    },
    // {
        // icon: 'pe-7s-car',
        // label: 'Car Hire',
        // content : [
        //
        //     {
        //         // label : 'Search cars',
        //     },
        // ],

        // to: '#/tables/regular-tables',
    // },
];
