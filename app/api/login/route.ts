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
  console.log("login post request");

  const origin = request.headers.get("origin");
  return new NextResponse("login -- all good with headers", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "plain/text",
    },
  });
  // return new Response("login --- all good", { status: 200 });
}

export async function OPTIONS() {
  console.log("login options request");
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
