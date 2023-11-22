import '../css/Myself.css';
import  me from "../image/me.png";
function Myself(){
    return(
        <>
        <div  className="aboutme"> 
            <h1 className='abt'>ABOUT ME</h1>
        </div>
        <div className="me">
        <img src={me} alt='me'></img>
        </div>
              <div className="side">
          
          <h3>Hi!!!I'm dishanth,20 year old pursuing computer science and engneering  who is passionate, enthusiastic  and creative web developer.My journey in the world of web development began with a fascination Eager to develop new skills for how websites work and has evolved into a lifelong commitment to crafting exceptional digital experiences. and  I'm a passionate web developer dedicated to crafting exceptional digital experiences. With a strong foundation in front-end development and a love for creating user-friendly interfaces, I'm here to turn your web dreams into reality.What truly sets me apart is my commitment to the user. I believe that a great website not only looks polished but also functions flawlessly. By combining my coding skills with a keen eye for design and a deep understanding of user experience, I create websites that not only meet your technical requirements but also delight your audience.</h3>
      </div>
      

        </>
    )
}
export default Myself;