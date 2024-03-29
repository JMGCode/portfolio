import { NextResponse } from "next/server";

const SpotifyWebApi = require("spotify-web-api-node");

const credentials = {
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const { code } = await request.json();

  const spotifyApi = new SpotifyWebApi(credentials);

  // return new NextResponse(
  //   JSON.stringify({
  //     code,
  //     testToken: "test_token",
  //     testRefresh: "test_refresh",
  //     testExpiresIn: 123455,
  //   }),
  //   {
  //     status: 200,
  //   }
  // );

  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const { access_token, refresh_token, expires_in } = data.body;
    console.log("this data from spotify auth", data);
    return new NextResponse(
      JSON.stringify({
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: expires_in,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 400,
      statusText: "Bad Request: Spotify",
    });
  }
}

export async function OPTIONS(request: Request) {
  console.log("login options request");
  const origin = request.headers.get("origin");
  return new Response("login options OK", {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
