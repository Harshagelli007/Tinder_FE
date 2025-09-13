import { useSelector } from "react-redux";

const Profile = () => {
    const user = useSelector((state)=> state.user);
    if (!user) {
        return <div>Loading profile...</div>;
    }
    const {firstName, lastName, discription, photoUrl, age} = user;
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card bg-base-100 w-96 shadow-sm flex justify-center items-center space-y-6">
                <figure>
                    <img
                        className="max-h-full max-w-full object-contain"
                        src={photoUrl ? photoUrl : '/assets/profilePic.png'}
                        alt="Profile"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{firstName} {lastName}</h2>
                    <p>{discription ? discription : `Hi this is ${firstName} ${lastName}`}</p>
                    <div className="card-actions justify-center">
                        <p>{age}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile