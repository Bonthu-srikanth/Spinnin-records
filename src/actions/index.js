import axios from 'axios';
import {store} from '../index'
export const fetchPosts = (data) => async dispatch => {

  const BASE_URL='https://api.spotify.com/v1/search?';
  let FETCH_URL =BASE_URL+'q='+data
  +'&type=artist&limit=1';
  const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
 const auth_token = 'Bearer BQAfZyP5Tv-NFffBMOv9wmBWvxFcXNkTBPljvH5ekh3xBOwmVns3r2yfd_8VJMp5zAIWsftEUNMttFKek_mzNzsKMcH1goZ1VjyyjfRcm3XskBYPyVJhBAm5e-QFEqp1G0iSUb1wJbes799Fz8XAUFvKR5-Kis8W2FnVOxTgei3AewLQMA';

      const res = await axios.get(FETCH_URL,{
       method:'GET',
       headers: {
         'Content-Type' :'application/json',
         'Authorization': auth_token,
         },
       mode: 'cors',
       cache:'default'
     })
        console.log(res.data);

        FETCH_URL = `${ALBUM_URL}${res.data.artists.items[0].id}/top-tracks?country=US&offset=20&`
        const tracks = await axios.get(FETCH_URL,{
          method:'GET',
          headers: {
            'Content-Type' :'application/json',
            'Authorization': auth_token,
            },
        })
         console.log(tracks.data.tracks);


  dispatch({ type: 'FETCH_DATA', data: tracks.data.tracks,info:res.data});
  console.log(res.data.tracks)
};
// https://accounts.spotify.com/authorize?client_id=efd6e18a12824c17967a59138149942b&redirect_uri=http://localhost:3000&response_type=token



export const getClick2 =() => {
  // console.log(image);
  // console.log(name);
  let urrrl= axios.get("http://localhost:3006/employees");
  // alert('ddd')
  urrrl.then(rest=> 
  store.dispatch((dispatch) => {
  dispatch({ type: 'favData', favData:rest.data});
  })
  )
  }