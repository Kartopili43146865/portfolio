<template>
  <RouterLink />
<div class="menu">
      <div class="navbar">
        <div class="logo"><router-link to="/"><img src="../assets/webp.webp"></router-link></div>
        <div class="ul">
          <a><router-link to="/">Home</router-link></a>
          <a class="stack"><router-link to="/about">about</router-link></a>
          <a><router-link to="/contact">contact</router-link></a>
        </div>
        <div class="icons">
          <a href="https://github.com/Kartopili43146865"><img src="../assets/icons/github.svg"></a>
          </div>
      </div>
    </div>
    <div class="parent">
        <div class="div welcome">
            <h1>Welcome to My Portfolio!</h1>
            <p>
                I’m a passionate developer with experience in frontend development, low-level programming with Assembly, and backend development using Flask. I enjoy building interactive web applications and games, and I’m constantly exploring new technologies to expand my skill set.
                I focus on writing clean, efficient code and understanding how systems work both at a high level and close to the hardware. I’m always learning and challenging myself with new projects.
            </p>
        </div>
        <div class="div animation" ref="myElement5" :id="scrolled5 ? 'skills-scrolled' : null">
        </div>
        <div class="div animation" ref="myElement2" :id="scrolled2 ? 'skills-scrolled' : null">
            <h1>Experience:</h1>
            <p>I have worked on multiple personal and collaborative projects, focusing on building complete applications from frontend to backend. Through these projects, I developed strong problem-solving skills, improved my understanding of system architecture, and gained experience working with real-world development workflows.</p>
        </div>
        <div class="div animation" ref="myElement" :id="scrolled ? 'skills-scrolled' : null">
            <h1>Passion and Vision:</h1>
            <p>My interest in programming goes beyond a single area of development. From building interactive frontend interfaces to working with backend systems using Flask and exploring low-level programming with Assembly, I enjoy understanding how software works at every layer. I am committed to continuously learning and improving, staying current with modern technologies while deepening my understanding of core computer science concepts.</p>
        </div>
        <div class="div animation" ref="myElement3" :id="scrolled3 ? 'skills-scrolled' : null">
            <h1>Projects:</h1>
            <p>My portfolio includes a range of projects, from interactive browser games and dynamic web applications to full-stack systems. Each project reflects my focus on clean architecture, problem-solving, and performance-aware development.</p>
        </div>
        <div class="div animation" ref="myElement4" :id="scrolled4 ? 'skills-scrolled' : null">
            <h1>Get in Touch:</h1>
            <p>I am always eager to collaborate on exciting projects or discuss new opportunities. If you'd like to connect, feel free to reach out to me via email at <span>sabamikhelidze111@gmail.com</span></p>
        </div>
    </div>
    <footer>
      <div class="info">
         <a><router-link to="/"><img class="logo" src="../assets/webp.webp"></router-link></a>
            <div class="info-links">
                <p>shemwvarikartopili3@gmail.com</p>
                <div class="icons">
                    <a href='https://github.com/Kartopili43146865'><img src="../assets/icons/github.svg"></a>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div>
            <div class="ul ul2">
               <a><router-link to="/">Home</router-link></a>
               <a><router-link to="/about">about</router-link></a>
               <a><router-link to="/contact">contact</router-link></a>
            </div>
        </div>
    </footer>
</template>

<script>    
    export default {
        data(){
            return {
                scrolled: false,
                scrolled2: false,
                scrolled3: false,
                scrolled4: false,
                scrolled5: false,
            }
        },
        mounted(){
            window.addEventListener("scroll", this.handleScroll);

    },
        beforeMount(){
           window.removeEventListener("scroll", this.handleScroll);
        },  
        methods:{
            handleScroll() {
              const scrollPosition = window.scrollY + window.innerHeight;
              this.skillsTopPosition = this.$refs.myElement.offsetTop + this.$refs.myElement.offsetHeight;
              this.skillsBottomPosition2 = this.$refs.myElement2.offsetTop + this.$refs.myElement2.offsetHeight;
              this.skillsBottomPosition3 = this.$refs.myElement3.offsetTop + this.$refs.myElement3.offsetHeight;
              this.skillsBottomPosition4 = this.$refs.myElement4.offsetTop + this.$refs.myElement4.offsetHeight;
              this.skillsBottomPosition5 = this.$refs.myElement5.offsetTop + this.$refs.myElement5.offsetHeight - 400;
              
      this.scrolled = scrollPosition > this.skillsTopPosition;
      this.scrolled2 = scrollPosition > this.skillsBottomPosition2;
      this.scrolled3 = scrollPosition > this.skillsBottomPosition3;
      this.scrolled4 = scrollPosition > this.skillsBottomPosition4;
      this.scrolled5 = scrollPosition > this.skillsBottomPosition5;

    },
        },
    }
</script>
<style scoped>
.div{
    width: 98%;
    margin-left: 1%;
    padding-bottom: 50px;
    transition: 0.5s;
  }
  .welcome {
    animation: fade-in-out 2s;
}
.welcome h1{
width: 100%;
display: flex;
text-align: center;
justify-content: center;
font-size: 50px;
padding-bottom: 20px;
text-shadow: 0 0 20px white;
margin-top: 60px;
}
.welcome p {
  font-size: 30px;
  color: white;
  text-align: center;
}
h1 {
    color: white;
    font-size: 40px;
}
p{
    color: rgba(255, 255, 255, 0.726);
    margin-top: 10px;
    font-size: 20px;
}
.parent {
    padding-top: 100px;
}
ul {
    color: rgba(255, 255, 255, 0.726);
    margin-left: 2%;
    width: 96%;
    font-size: 20px;
    margin-top: 10px;
}
li {
    margin-top: 10px;
}
span {
    color: white;
    font-size: 21px;
}
.animation {
  transform: translateY(150px);
  opacity: 0;
}
#skills-scrolled {
  transform: translateY(0);
  opacity: 1;
}
@keyframes fade-in-out {
    0%{
      transform: translateX(-4%);
      opacity: 0;
    }
    100%{
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes opacity {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
.menu {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: opacity 2s;
}
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-top: 0px;
    margin-top: 40px;
  }
  .ul {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  .icons {
    gap: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icons a {
    display: flex;
    align-items: center;

  }
  .logo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  .ul a{
    font-size: 20px;
    color: #A7A7A7;
    cursor: pointer;
    text-decoration: none;
  }
  @media(max-width: 700px){
    .navbar{
      width: 90%;
    }
    .stack {
      display: none;
    }
    .proj{
      display: none;
    }
    .ul a {
      font-size: 15px;
    }
  }
  footer {
        color: #A7A7A7;
        display: flex;
        flex-direction: column;
        margin-left: 2%;
        width: 96%;
        margin-top: 60px;
    }
    .line{
        width: 100%;
        height: 2px;
        background-color: #141414;
        margin-top: 20px;
        border-radius: 1000px;
    }
    .info {
        width: 98%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .info-links  {
        display: flex;
        gap: 10%;
    }
    .icons {
        display: flex;
        gap: 5px;
    }
    .info .logo{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .ul2 {
      margin-top: 40px;
    padding-bottom: 50px;
    }
    .info-links p{
      font-size: 15px;
    }
    @media(max-width: 800px){
      .info {
        justify-content: space-around;
      }
    }
    @media(max-width: 350px){
    .ul2 {
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .info {
        flex-direction: column;
    }
   
  }
</style>