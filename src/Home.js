import {Link} from "react-router-dom";


export default function Home (){
    return(
        <div>
            <Link to="/profile">Profile</Link>
            |
            <Link to="/dot">Dot</Link>

        </div>
    )
} 