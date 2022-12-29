import queryString from "query-string";

const {
  SPOTYFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const GET_SHOW = `https://api.spotify.com/v1/shows/5pmb0g5wNPh7zvDz0xu0O7/episodes`;
const GET_SINGLE = `https://api.spotify.com/v1/episodes/`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      limit: 10,
      refresh_token,
    }),
  });

  return response.json();
};

export const getShow = async () => {
  const { access_token } = await getAccessToken();

  return fetch(GET_SHOW, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getEpisode = async (id) => {
  const { access_token } = await getAccessToken();

  return fetch(`${GET_SINGLE}${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
