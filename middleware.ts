import { NextResponse } from "next/server";
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.jmgcode.com", "https://music-player.jmgcode.com"]
    : ["http://localhost:3000", "https://music-player.jmgcode.com"];

export function middleware(req: Request) {
  const origin = req.headers.get("origin");
  console.log("middleware origin updated: ", origin);

  if (req.method === "OPTIONS") {
    return new Response(`middleware options OK origin: ${origin}`, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  //to block postman an other tools that bypass cors
  //add !origin to the if condition
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: `Bad Request, origin not allowed,curr origin: ${origin} allowed origins: ${JSON.stringify(
        {
          allowed: allowedOrigins,
        }
      )}`,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
