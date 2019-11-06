import React from 'react';
import { connect } from 'react-redux';
import '../App.css'
import Axios from 'axios';
const Favorites = (fav) => {
  let data = fav.fav.dataJson;
  console.log(data);
  let favoriteData = [];

  let combinedData,
    imageArray,
    image,
    description,
    name,
    id;

    for(let i = 0; i < data.length; i++) {
      // console.log(data[i]);
      for (let key in data[i]) {
        if (key === 'image') {
          image = data[i][key];
          console.log(image);
        }
        if (key === 'combinedData') {
          name = data[i][key];
          console.log(name);
        }
        if (key === 'description') {
          description = data[i][key];
          console.log(description)
        }
if(key==='id'){
  id =data[i][key];
  console.log(id)
  }
      }


      favoriteData.push(<div className="track" key={i}>

        <img className='track-img' src={`${image}`} alt={''} />
        <audio className="track" controls>

          <source src={`${description}`} type="audio/ogg" />
          <source src={`${description}`} type="audio/mpeg" />
        </audio>
        <p className='track-text' >
          {combinedData}
        </p>
        <i class="trash alternate outline icon"onClick={()=>delHandler(data[i].id)}></i>
        {/* <button onClick={()=>delHandler(data[i].id)}>delete</button> */}
      </div>
      )
    }



    return (
      <React.Fragment>
        <center>
          <h1>this is favorites page</h1>
          {favoriteData}
          
        </center>
      </React.Fragment>
    )
  }

function mapStateToProps(state) {
  console.log(state.fav);
  return {
    fav: state.fav
  };
}

export default connect(mapStateToProps)(Favorites);




 
  export const delHandler=(id)=> {
  console.log("hello");
  Axios.delete(`http://localhost:3006/employees/${id}`);
  // console.log(x);
  // getClick2()
  }