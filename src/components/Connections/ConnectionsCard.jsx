import { useDispatch } from "react-redux";

const ConnectionCard = (props)=>{
   const dispatch = useDispatch();
    const {firstName,lastName,discription,age,photoUrl} = props.data
    return (
        <>
    <li className="list-row">
    <div><img className="size-10 rounded-box" src={photoUrl ? photoUrl : '/assets/profilePic.png'}/></div>
    <div>
      <div>{firstName} {lastName}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{age}</div>
    </div>
    <p className="list-col-wrap text-xs">
        {discription ? discription : `Hi this is ${firstName} ${lastName}`}
    </p>
    {props.showButton && (
    <>
    <button  className="btn btn-primary">
      Accepted
    </button>
    <button className="btn btn-error">
      Rejected
    </button>
    </>
)}
  </li>
        </>
    )
}


export default ConnectionCard;