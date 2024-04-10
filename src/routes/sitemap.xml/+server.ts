import { PAGES, ROOT } from "$lib/server";


export async function GET() {
    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
    }
    const generate = (pages: Array<String>) => `<?xml version="1.0" encoding="UTF-8"?>
        <urlset
              xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        
            <url>
            <loc>https://${ROOT}/</loc>
            <lastmod>2024-04-10T00:00:00+00:00</lastmod>
            </url>

            ${pages.map(page => `<url>
            <loc>https://${ROOT}/${page}</loc>
            <lastmod>2024-04-10T00:00:00+00:00</lastmod>
            </url>`)}
            
        
        </urlset>`.trim();
    return new Response(generate(PAGES), { headers });
}