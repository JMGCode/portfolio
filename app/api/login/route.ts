import { NextResponse } from "next/server";
import cors from "../../../lib/cors";

const SpotifyWebApi = require("spotify-web-api-node");

const credentials = {
  redirectUri: process.env.REDIRECT_URI,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
};

export async function POST(request: Request) {
  const { code } = await request.json();

  const spotifyApi = new SpotifyWebApi(credentials);

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data: any) => {
      const { access_token, refresh_token, expires_in } = data.body;

      // return NextResponse.json({
      //   accessToken: access_token,
      //   refreshToken: refresh_token,
      //   expiresIn: expires_in,
      // });
      const bod = JSON.stringify({
        accessToken: access_token,
        refreshToken: refresh_token,
        expiresIn: expires_in,
      });

      // return new Response(bod, {
      //   status: 200,
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      //     "Access-Control-Allow-Headers": "Content-Type, Authorization",
      //   },
      // });
      return cors(
        request,
        new Response(bod, {
          status: 200,
          headers: { "Content-Type": "application/json" },
        })
      );
    })
    .catch((error: any) => {
      console.log(error);
      return new Response(null, {
        status: 400,
        statusText: "Bad Request",
      });
    });
}

// export async function OPTIONS() {
//   return new Response("all good", {
//     status: 200,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type, Authorization",
//     },
//   });
// }

export async function OPTIONS(request: Request) {
  return cors(
    request,
    new Response(null, {
      status: 204,
    })
  );
}
