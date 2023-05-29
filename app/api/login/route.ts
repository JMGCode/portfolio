import { NextResponse } from "next/server";

const SpotifyWebApi = require("spotify-web-api-node");

const credentials = {
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

export async function POST(request: Request) {
  // const { code } = await request.json();

  // const spotifyApi = new SpotifyWebApi(credentials);

  // spotifyApi
  //   .authorizationCodeGrant(code)
  //   .then((data: any) => {
  //     const { access_token, refresh_token, expires_in } = data.body;

  //     return NextResponse.json({
  //       accessToken: access_token,
  //       refreshToken: refresh_token,
  //       expiresIn: expires_in,
  //     });
  //   })
  //   .catch((error: any) => {
  //     console.log(error);
  //     return new Response(null, {
  //       status: 400,
  //       statusText: "Bad Request",
  //     });
  //   });

  const origin = request.headers.get("origin");
  console.log("login post request", origin);

  return new NextResponse("login -- all good with headers", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Content-Type": "text/plain",
    },
  });
  // return new Response("login --- all good", { status: 200 });
}

export async function OPTIONS(request: Request) {
  console.log("login options request");
  const origin = request.headers.get("origin");
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
