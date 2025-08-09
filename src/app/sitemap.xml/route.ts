import { SITE } from "@/lib/config";

const paths = ["/", "/leistungen", "/referenzen", "/prozess", "/faq", "/kontakt", "/impressum", "/datenschutz"]; 

export function GET() {
  const urls = paths
    .map((p) => `<url><loc>${SITE.baseUrl}${p}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`) 
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}


