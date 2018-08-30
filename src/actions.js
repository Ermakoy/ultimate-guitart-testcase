import {createSymbiote} from "redux-symbiote";
import omit from "just-omit";

const initialState = {
  albums: {}
};

export const {actions, reducer} = createSymbiote(initialState, {
  addAlbum: ({albums}, album) =>
    albums[album.id]
      ? {albums: {...albums}}
      : {albums: {...albums, [album.id]: album}},
  deleteAlbum: ({albums}, id) => ({albums: omit(albums, id)})
});
