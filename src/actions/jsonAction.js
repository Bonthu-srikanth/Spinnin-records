import axios from 'axios';

// export const fetchPosts = (data) => async dispatch => {
//     let res= await axios.get(' http://localhost:3006/employees');
//     console.log(res);
//     dispatch({ type: 'FETCH_MUSIC', payload: res.data });
// }






// export const getClick2 =() => {
//     // console.log(image);
//     // console.log(name);
//     let urrrl= axios.get("http://localhost:3006/employes");
//     // alert('ddd')
//     urrrl.then(rest=> 
//    (dispatch) => {
//     dispatch({ type: 'favData', favData:rest.data});
//     }
//     )
//     }



    export const getClick =(image,description,combinedData) => {
        const data = {image:image,
            description:description,
            combinedData:combinedData
        };
        axios.post( 'http://localhost:3006/employees', data )
            .then( response => {
                console.log( response.data );
            } );
    }
    export default getClick;