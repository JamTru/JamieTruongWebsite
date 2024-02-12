import AnimatedText from './AnimatedText.js';
import './Profile.css';
const Profile = () => {
  return (
    <div id="profile">
      <div className="columnLeft">
        <div className="textPositioning">
          <fieldset role="presentation">
            <legend role="presentation"><AnimatedText text="Hello, world. My name is" delay={75} /></legend>
            <h1>Jamie Truong</h1>
          </fieldset>
        </div>
      </div>
      <div className="columnRight">
        <h3><i>Full Stack Developer</i></h3>
        <h3><i>Cloud Developer</i></h3>
      </div>
    </div>
  );
};
export default Profile;
