import { useEffect, useState } from "react";
import { baseUrl } from "../../environment/DEV";
import FeedCard from "./FeedCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserFeed } from "../../Utils/feedSlice";
import toast from "react-hot-toast";


const Feed = ()=>{
    const userFeed = useSelector(state => state.userFeed);
    const dispatch = useDispatch();
    const getFeedData = async ()=>{
        const response = await axios.get(baseUrl+'/profiles/feed',{withCredentials:true});
        // setUserFeed(response.data.data);
        dispatch(setUserFeed(response.data.data));
    }

    useEffect(()=>{
        getFeedData();
    },[])

    if(!userFeed.length) return (<>
    {toast.success('No more friends in meetUp, Please come after some time')}
    <div>No more friends in meetUp, Please come after some time</div>
    </>)
    return (
    // {userFeed && ()}
    <div className="flex flex-col justify-center items-center mt-10 text-center">
  <div>
    <h1 className="text-2xl font-semibold mb-4">Welcome to the MeetUP Exploration</h1>
  </div>
  <div className="space-y-6">
      <FeedCard data={userFeed[0]}/>
  </div>
</div>

    )
}

export default Feed;