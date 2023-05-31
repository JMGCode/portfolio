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

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data: any) => {
      const { access_token, refresh_token, expires_in } = data.body;

      // const bod = JSON.stringify({
      //   accessToken: access_token,
      //   refreshToken: refresh_token,
      //   expiresIn: expires_in,
      // });

      // return new Response(bod, {
      //   status: 200,
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      //     "Access-Control-Allow-Headers": "Content-Type, Authorization",
      //   },
      // });

      return new NextResponse("its ok ", { status: 200 });
    })
    .catch((error: any) => {
      console.log(error);
      return new Response(null, {
        status: 400,
        statusText: "Bad Request",
      });
    });
}
// spotifyApi
//   .authorizationCodeGrant(code)
//   .then((data: any) => {
//     const { access_token, refresh_token, expires_in } = data.body;

//     return new NextResponse(
//       JSON.stringify({
//         accessTokens: access_token,
//         refreshTokens: refresh_token,
//         expiresIns: expires_in,
//       }),
//       {
//         status: 200,
//         headers: {
//           "Access-Control-Allow-Origin": origin || "*",
//           "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
//           "Access-Control-Allow-Headers": "Content-Type",
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   })
//   .catch((error: any) => {
//     console.log(error);
//     return new Response(null, {
//       status: 400,
//       statusText: "Bad Request, spotify",
//     });
//   });
// }

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
