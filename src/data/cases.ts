export type CaseData = {
	slug: string;
	title: string;
	imageSrc: string;
	description: string;
};

export const cases: CaseData[] = [
	{
		slug: "case-1",
		title: "admin4me",
		imageSrc: "/images/referenzen/admin4me.PNG",
		description: "IT-Administrator- und Support",
	},
	{
		slug: "case-2",
		title: "Hundepension Christiane Herkt",
		imageSrc: "/images/referenzen/website_4pfoetchen.jpg",
		description: "Hundepension",
	},
	{
		slug: "case-3",
		title: "Lindigkeit | Mertens",
		imageSrc: "/images/referenzen/website_lindigkeit-mertens.jpg",
		description: "Rechtsanwalt, Kanzlei und Notariat",
	},
];

export const caseSlugs: string[] = cases.map((c) => c.slug);


