import'../css/About.css' ;
import minon from "../image/minon.jpg";
function About() {
  return (
    <>
      <div class="cless">
        <div class="name" id="name">
          <h1 className='page'>Hii,WELCOME TO MY PAGE</h1>
          <h3>YOU CAN CHECK OUT MY SOME WORK HERE</h3>
        </div>
        <div class="minion">
          <img src={minon} alt='minon'></img>
        </div>
      </div>
    </>
  );
}
export default About;
