import { NextResponse } from "next/server";

const SpotifyWebApi = require("spotify-web-api-node");

const credentials = {
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

export async function POST(request: Request) {
  const { refreshToken } = await request.json();

  const refreshCredentials = { ...credentials, refreshToken };
  const spotifyApi = new SpotifyWebApi(refreshCredentials);

  spotifyApi
    .refreshAccessToken()
    .then((data: any) => {
      console.log("spotify body refresh", data.body);
      const { access_token, expires_in } = data.body;

      return NextResponse.json({
        accessToken: access_token,
        expiresIn: expires_in,
        refreshToken,
      });
    })
    .catch((error: any) => {
      return new Response(null, {
        status: 400,
        statusText: "Bad Request",
      });
    });
}
