import'../css/Skills.css';
function Skills() {
  return (
    <>
    <div className="skills">
      <h1>SKILLS</h1>
     
   
    </div>
    
    <div className="first">
    <div className="lang hov">
        <h2>Languages</h2>
        <h4>C</h4>
        <h4>C++</h4>
        <h4> HTML 5</h4>
        <h4>CSS 3</h4>
        <h4>JavaScript</h4>
      </div>
      <div className='backend hov'>
        <h2>Backend Development</h2>
        <h4>NODE JS</h4>
        <h4>EXPRESS JS</h4>
      </div>

    </div>
      <div className="second">
      <div className='frontend hov'>
     <h2>Frontend Development:</h2> 
     <h4>REACT JS</h4>
     <h4>vue js</h4>
     <h4>ANGULAR JS</h4>

      </div>
      <div className="database hov">
        <h2>DATABASE</h2>
        <h4>MONGO DB</h4>
        <h4>SQL</h4>
        <h4>POSTGRE SQL</h4>
      </div>
      </div>
     
    
    </>
  );
}
export default Skills;
