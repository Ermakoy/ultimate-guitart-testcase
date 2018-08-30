import axios from "axios";

const baseURL = "http://musicbrainz.org/ws/2/release/";

export const getAlbumsById = id =>
  axios.get(`${baseURL}${id || ""}`).then(result => result.data);

export const getAlbumsByName = name =>
  axios
    .get(
      `${baseURL}?limit=999&offset=20&query=release:${encodeURIComponent(name)}`
    )
    .then(res => res.data.releases);
