import './Portfolio.css';
const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="leftColumn">
        <h1> What I've Built </h1>
      </div>
      <div className="rightColumn">
        <h1><b> Loop Cinema Website </b></h1>
        <video controls muted>
          <source src="./LoopCinema.mp4" />
          Your browser has either disabled or does not support the Video HTML Tag.
        </video>
        <br />
        <i>Built In Collaboration By Jamie Truong and <a href="https://github.com/JinwonYang" target="_blank" rel="noopener noreferrer">Daniel Yang</a></i>
        <p>This website project was built for the Full Stack Development Course at RMIT. This utilised React and React Bootstrap to develop a website for a hypothetical website named Loop Cinemas, with a backend of Eclipse and Node.JS to deliver a login functionality that was also capable of leaving reviews that would be read and displayed on movie pages by saving all data to a database. </p>
        <hr />
      </div>
    </div>
  );
};
export default Portfolio;
