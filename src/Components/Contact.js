import './Contact.css';
const Contact = () => {
  return (
    <div id="contact">
      <h1><b>Want To Get In Touch?</b></h1>
      <p>I'm always open to questions and new opportunities, as well as chatting with people interested in my work. You can contact me either through my email, or on LinkedIn.</p>
      <div className="buttonGrid">
        <button className="email"><a href="mailto:truongjamie4@gmail.com">Email</a></button>
        <button className="linkedin"><a href="https://www.linkedin.com/in/jamie-truong-melb/" target="_blank" rel="noopener noreferrer">LinkedIn</a></button>
        {/*The rel tag within anchor is to prevent tabnapping from occuring with this webpage.*/}
      </div>
    </div>
  );
};
export default Contact;
