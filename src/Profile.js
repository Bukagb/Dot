import './Profile.css';
import img from "./sample img/agbe. profile copy.png"

function Profile() {
    return (
      <div className="Profile">
        <div className='alter'>
          <img src={img} alt="..."/>
        </div>
        <p>
        A highly-skilled product designer based in Nigeria with 3+ years of professional experience. My expertise lies in crafting and delivering a highly interactive, user-centric design that prioritizes usability and accessibility while aligning with business goals and satisfying users' needs. 
        </p>
        
       <div className='Move'>
          <h2>Skills</h2>
       </div>
       
       <div className='Shift'>
          <ull>
            <li>Mobile Developer</li>
            <li>Backend Developer</li>
            <li>Frontend Developer</li>
          </ull>
        </div>
      
      </div>
    );
}

export default Profile;