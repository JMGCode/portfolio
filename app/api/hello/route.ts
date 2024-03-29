import { NextResponse } from "next/server";
import { limiter } from "../../config/limiter";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const remaining = await limiter.removeTokens(1);
  console.log("remaining: ", remaining);
  if (remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too Many Request",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain",
      },
    });
  }
  return new Response(JSON.stringify({ name: "something" }), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  return new Response(JSON.stringify({ name: "post something" }), {
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "application/json",
    },
  });
}

export async function OPTIONS(request: Request) {
  console.log("hello options request");
  const origin = request.headers.get("origin");
  return new Response("hello options OK", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
