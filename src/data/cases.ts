export type CaseData = {
	slug: string;
	title: string;
	imageSrc: string;
	description: string;
	problem: string;
	solution: string;
	result: string;
};

export const cases: CaseData[] = [
	{
		slug: "case-1",
		title: "admin4me",
		imageSrc: "/images/referenzen/admin4me.PNG",
		description: "IT-Administrator- und Support",
		problem: "Wenig Anfragen über die bestehende Webpräsenz.",
		solution: "Neuer One‑Pager mit klarem Nutzenversprechen und Kontakt‑CTA.",
		result: "+32 % Anfragen in 6 Wochen.",
	},
	{
		slug: "case-2",
		title: "Hundepension Christiane Herkt",
		imageSrc: "/images/referenzen/website_4pfoetchen.jpg",
		description: "Hundepension",
		problem: "Unklare Struktur, wichtige Infos versteckt.",
		solution: "Übersichtliche Seitenstruktur, mobile Optimierung, schnelle Ladezeiten.",
		result: "Höhere Sichtbarkeit und mehr Buchungsanfragen.",
	},
	{
		slug: "case-3",
		title: "Lindigkeit | Mertens",
		imageSrc: "/images/referenzen/website_lindigkeit-mertens.jpg",
		description: "Rechtsanwalt, Kanzlei und Notariat",
		problem: "Veraltete Website, schwer auffindbare Leistungen.",
		solution: "Neuaufbau mit klarer Navigation, Leistungsmodulen und Kontaktmöglichkeit.",
		result: "Verbesserte Nutzerführung und messbar bessere Core Web Vitals.",
	},
];

export const caseSlugs: string[] = cases.map((c) => c.slug);


