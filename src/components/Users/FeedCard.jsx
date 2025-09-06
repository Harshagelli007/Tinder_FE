import axios from "axios"
import { baseUrl } from "../../environment/DEV";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../../Utils/feedSlice"; 


const FeedCard = (props)=>{
  const dispatch = useDispatch();
  const userIntrestRequest = async (request,userId)=>{
    try{
          const response = await axios.post(`${baseUrl}/feedRequests/${request}/${userId}`,{},{withCredentials:true});
          response ? dispatch(removeUserFromFeed({_id:userId})) : null;
    }catch(err){
      toast.error(err.message || "Something went wrong");
    }

  }

    const {firstName,lastName,photoUrl,age,_id} = props.data
    return(
        <>
  <div className="card bg-base-100 w-96 shadow-sm">
    <figure >
      <img
        className="max-h-full max-w-full object-contain"
        src={photoUrl ? photoUrl : '/assets/profilePic.png'}
        alt="Profile"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{firstName} {lastName}</h2>
      <p>Hi this is {firstName} {lastName}</p>
      <div className="card-actions justify-center">
        <button  className="btn btn-success" onClick={() => userIntrestRequest('intrested',_id)}>Interested</button>
        <button className="btn btn-error" onClick={()=> userIntrestRequest('ignored',_id)}>Ignored</button>
      </div>
    </div>
  </div>
</>

    )
}

export default FeedCard;