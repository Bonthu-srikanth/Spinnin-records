import React, { useState } from 'react';
import { connect } from 'react-redux'
import {fetchPosts} from '../actions';


const SearchBar = ({dispatch}) =>{
    const [data, setData]=useState({input:''});
    return(
<div class="ui massive icon input">
  <input type="text" onChange={(e)=>{setData({input:e.target.value})}} placeholder="Search..."/>
  <button class="ui icon button" onClick={()=>{dispatch(fetchPosts(data.input))}}>
    <i class="search icon"></i>
  </button>
</div>

    )
}
export default connect()(SearchBar);