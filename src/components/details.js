import React from 'react';
import { connect } from 'react-redux';
import getClick from '../actions/jsonAction'


const Details = ({musicFiles, info,getBtnClick}) => {

  // console.log(info);
  let status = [];

  let combinedData,
    imageArray,
    image,
    description,
    name,
    profileImage,
    data = [];

  for (let key in info) {
    if ('items' === key) {

      for (let value in info[key][0]) {

        if ('name' === value) {
          name = info[key][0][value];
        // name = info[key][0][value];
        }
        if (value === 'images') {
          for (let img in info[key][0][value][0]) {
            if ('url' === img) {
              profileImage = info[key][0][value][2][img];
            }
          }
        }
      }
    }
  }

  function profileData() {
    return (<div>
        <p className="profile-name">{name}</p>
        <img className="profile-img" src={profileImage}/>
      </div>)
  }



  for (let i = 0; i <= musicFiles.length; i++) {
    for (let key in musicFiles[i]) {
      if ('name' === key) {
        combinedData = musicFiles[i][key];
      }

      if ('album' === key) {
        imageArray = musicFiles[i][key]
        for (let key in imageArray) {
          if (key === 'images') {
            image = imageArray[key][0].url;
          }
        }

      }
      if ('preview_url' === key) {
        description = musicFiles[i][key];
      }
      // console.log(musicFiles[i].name);
      // console.log(musicFiles[i].preview_url);
      // console.log(musicFiles[i].album.images[0].url)
    }
    status.push(<div className="track" key={i}>

<img className='track-img' src={`${image}`} alt={''} />
<audio className="track" controls>

  <source src={`${description}`} type="audio/ogg"/>
  <source src={`${description}`} type="audio/mpeg"/>
</audio>


<p className='track-text' > 
<span className="favorite-star-character" 
onClick={()=>{ getBtnClick(musicFiles[i].album.images[0].url, musicFiles[i].name,musicFiles[i].preview_url )}} 
// onClick={console.log(image[i], description[i], combinedData[i])}
>★</span>

{combinedData}
  </p>
</div>
    )
  }

  return (
    <React.Fragment>
      <div>{profileData()}</div>
    <center>
      <div>{status}</div>

    </center>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  console.log(state.fav);
  return {
    musicFiles: state.data.books,
    info: state.data.chars.artists,

fav:state.fav
  };
}
const mapDispatchToProps = dispatch => {
  return {
  getBtnClick: (image,description,combinedData) => {
  (getClick(image,description,combinedData))
  }
  }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Details);


