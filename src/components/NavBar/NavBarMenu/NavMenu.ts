type DropMenu = {
    menu: string;
    menuCategory?: string[];
};

type Menu = {
    id: number;
    menu: string;
    dropDown: boolean;
    link: string;
    dropMenu?: DropMenu[];
    // dropMenu?: (string | string[] | Record<string, string>)[]; // Your existing commented line
};

export const middleMenu: Menu[] = [
    // {
    //     id: 1,
    //     menu: "Products",
    //     dropDown: true,
    //     dropMenu: [
    //         {
    //             menu: "Cake",
    //             menuCategory: ["Birthday", "Wedding", "Corporate", "Events"],
    //         },
    //         { menu: "Drinks" },
    //         { menu: "Venues" },
    //         { menu: "Caterers" },
    //         { menu: "Djs" },
    //         { menu: "MCs" },
    //         { menu: "Photographers" },
    //         { menu: "Party Decorators" },
    //         { menu: "Vendor" },
    //     ],
    // },
    {id: 1, menu: "About us", link: 'about', dropDown: false},
    { id: 2, menu: "How it works", link: 'about', dropDown: true },
    { id: 3, menu: "Service", link: 'service', dropDown: false },
    { id: 4, menu: "Contact us", link: 'contacts', dropDown: false },
];
