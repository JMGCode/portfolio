import { NextResponse } from "next/server";
const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://music-player.jmgcode.com/"]
    : ["http://localhost:3000/", "https://music-player.jmgcode.com/"];

export function middleware(req: Request) {
  const origin = req.headers.get("origin");
  console.log("middleware origin: ", origin);

  //to block postman an other tools that bypass cors
  //add !origin to the if condition
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
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
