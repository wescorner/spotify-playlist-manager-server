"use strict";

const pool = require("../../configs/db.config");
const { getSpotifyApi } = require("../../app");

const getUserInfo = () => {
  const spotifyApi = getSpotifyApi();

  spotifyApi.getMe().then((data) => {
    return pool.query(`SELECT id FROM users WHERE spotify_id = $1`, [data.body.id]);
  });
};

module.exports = {
  getUserInfo,
};
