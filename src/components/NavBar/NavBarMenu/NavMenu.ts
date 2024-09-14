type DropMenu = {
    menu: string;
    menuCategory?: string[];
};

type Menu = {
    id: number;
    menu: string;
    dropDown: boolean;
    dropMenu?: DropMenu[];
    // dropMenu?: (string | string[] | Record<string, string>)[]; // Your existing commented line
};

export const middleMenu: Menu[] = [
    {
        id: 1,
        menu: "Products",
        dropDown: true,
        dropMenu: [
            {
                menu: "Cake",
                menuCategory: ["Birthday", "Wedding", "Corporate", "Events"],
            },
            { menu: "Drinks" },
            { menu: "Venues" },
            { menu: "Caterers" },
            { menu: "Djs" },
            { menu: "MCs" },
            { menu: "Photographers" },
            { menu: "Party Decorators" },
            { menu: "Vendor" },
        ],
    },
    { id: 2, menu: "Categories", dropDown: true },
    { id: 3, menu: "FAQs", dropDown: false },
    { id: 4, menu: "Contact", dropDown: false },
    { id: 5, menu: "Join us", dropDown: true },
];
