import { createSymbiote } from "redux-symbiote";
import omit from "just-omit";
import localforage from "localforage";

const initialState = {
  albums: {}
};

const saveToLocalStorage = item => {
  localforage.setItem("albums", item);
  return item;
};

export const { actions, reducer } = createSymbiote(initialState, {
  fetchInitialAlbums: ({ albums }, fetchedAlbums) => ({
    albums: {
      ...albums,
      ...fetchedAlbums
    }
  }),
  addAlbum: ({ albums }, album) =>
    albums[album.id]
      ? { albums: { ...albums } }
      : saveToLocalStorage({ albums: { ...albums, [album.id]: album } }),
  deleteAlbum: ({ albums }, id) =>
    albums[id]
      ? saveToLocalStorage({ albums: omit(albums, id) })
      : { albums: { ...albums } }
});
