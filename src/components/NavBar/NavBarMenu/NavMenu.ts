<<<<<<< HEAD:src/components/NavBar/NavBarMenu/NavMenu.ts
type DropMenu = {
    menu: string;
    menuCategory?:string[];
}
type Menu = {
    id: number;
    menu: string;
    dropDown: boolean;
    dropMenu?: DropMenu[];
    // dropMenu?: (string | string[] | Record<string, string>)[];
}




=======
>>>>>>> ca72afb2a9f6366e24f1f2118501c474585d64a7:src/components/NavBar/NavBarMenu/NavMenu.tsx
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

<<<<<<< HEAD:src/components/NavBar/NavBarMenu/NavMenu.ts
=======
type Menu = {
	id: number;
	menu: string;
	dropDown: boolean;
	dropMenu?: any[];
	// dropMenu?: (string | string[] | Record<string, string>)[];
};
>>>>>>> ca72afb2a9f6366e24f1f2118501c474585d64a7:src/components/NavBar/NavBarMenu/NavMenu.tsx
