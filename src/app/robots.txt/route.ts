import { SITE } from "@/lib/config";

export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${SITE.baseUrl}/sitemap.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}


