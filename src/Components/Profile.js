import AnimatedText from './AnimatedText.js';
import './Profile.css';
const Profile = () => {
  return (
    <div id="profile">
      <div className="textPositioning">
        <AnimatedText text="Hello, world. My name is" delay={75} />
        <h1>Jamie Truong</h1>
      </div>
    </div>
  );
};
export default Profile;
