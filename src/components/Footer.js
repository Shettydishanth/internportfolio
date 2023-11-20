import '../css/Footer.css'
function Footer(){
    return(
        <>
  <div class="footer">
  <div>
    <h4> Contact:7760803967</h4>
    <h4>Email: shettydishanth4@gmail.com</h4>
   
    <p class="social-icons">
    <a href="https://github.com/yourusername" target="_blank"><img class="logo0"src="https://i.pinimg.com/736x/41/e4/57/41e457e8599833299d563976b7d3c59a.jpg" alt="GitHub"  /></a>
    <a href="https://github.com/yourusername" target="_blank"><img class="logo1"src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="GitHub"/></a>
      <a href="https://linkedin.com/in/yourusername" target="_blank"><img class="logo1 logo2" src="data:image/png;base64,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" alt="GitHub"/></a>
      
    </p>
  </div>
  <br/>
  <h3>❤️SHETTY DISHANTH❤️</h3>
</div>

<script src="https://kit.fontawesome.com/66e1a8d2b7.js" crossorigin="anonymous"></script>
</>
)
}
export default Footer