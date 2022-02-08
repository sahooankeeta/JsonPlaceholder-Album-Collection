import * as actionType from "./../helpers/constants";
import notify from "../helpers/notify.js";
const API = actionType.API;

//FETCH ALL ALBUMS FROM THE API
export const getAlbums = (page) => (dispatch) => {
  dispatch({ type: actionType.SET_LOADING, payload: true });
  fetch(`${API}?_page=${page}&_limit=${actionType.PAGE_LIMIT}`)
    .then((res) => {
      dispatch({
        type: actionType.SET_TOTAL_PAGES,
        payload: Math.ceil(
          res.headers.get("x-total-count") / actionType.PAGE_LIMIT
        ),
      });
      return res.json();
    })
    .then(
      (data) => {
        dispatch({
          type: actionType.GET_ALBUMS,
          payload: { albums: data },
        });
        dispatch({ type: actionType.SET_LOADING, payload: false });
      },
      (error) => {
        dispatch({ type: actionType.SET_ERROR, payload: error.message });
        dispatch({ type: actionType.SET_LOADING, payload: false });
      }
    );
};

//CREATE NEW ALBUM
export const createAlbum = (album) => (dispatch) => {
  notify("info", "please wait :)");
  dispatch({ type: actionType.SET_LOADING, payload: true });
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(album),
  })
    .then((res) => res.json())
    .then(
      (data) => {
        dispatch({ type: actionType.CREATE_ALBUM, payload: data });
        dispatch({ type: actionType.SET_LOADING, payload: false });
        notify("success", "album added :)");
      },
      (error) => {
        dispatch({ type: actionType.SET_ERROR, payload: error.message });
        dispatch({ type: actionType.SET_LOADING, payload: false });
        notify("error", "sorry error occured retry :(");
      }
    );
};

//DELETE ALBUM
export const deleteAlbum = (id) => (dispatch) => {
  notify("info", "please wait for deletion");
  fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  dispatch({ type: actionType.DELETE_ALBUM, payload: id });

  notify("success", "album deleted :)");
};

//UPDATE ALBUM
export const updateAlbum = (album) => (dispatch) => {
  notify("info", "please wait for update");
  fetch(`${API}/${album.id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(album),
  })
    .then((res) => res.json())
    .then(
      (data) => {
        dispatch({ type: actionType.UPDATE_ALBUM, payload: data });
        console.log(data);
        notify("success", "album updated :)");
      },
      (error) => {
        console.log(error);
        dispatch({ type: actionType.SET_ERROR, payload: error.message });

        notify("error", "sorry error occured retry :(");
      }
    );
};
