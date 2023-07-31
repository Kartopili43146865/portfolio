<template>
  <RouterLink />
<div class="menu">
      <div class="navbar">
        <div class="logo"><router-link to="/"><img src="../assets/webp.webp"></router-link></div>
        <div class="ul">
          <a><router-link to="/home">Home</router-link></a>
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
            <h1>Welcome to My Frontend Portfolio!</h1>
            <p>
                Hello there! I'm saba mikhelidze, a passionate and ambitious Frontend Developer with a strong foundation in HTML, CSS, and JavaScript. I specialize in creating interactive and user-friendly web experiences, and I have a keen eye for design details that elevate the overall aesthetics of a website.
            </p>
        </div>
        <div class="div animation" ref="myElement5" :id="scrolled5 ? 'skills-scrolled' : null">
            <h1>Skills:</h1>
            <ul>
                <li><span>HTML:</span> I possess a deep understanding of semantic HTML markup, ensuring the structure and accessibility of web pages are optimized for both users and search engines.</li>
                <li><span>CSS:</span> My proficiency in CSS allows me to craft stunning and responsive layouts, making sure that every website I build looks great on all devices.</li>
                <li><span>JavaScript:</span> I have a solid grasp of JavaScript and its modern frameworks, which enables me to develop dynamic and interactive features that enhance user engagement and overall website functionality.</li>
                <li><span>Vue.js:</span> As a Vue.js enthusiast, I leverage this powerful framework to build scalable and maintainable single-page applications with ease.</li>
                <li><span>Sass:</span> Utilizing Sass, I streamline my CSS workflow, keeping stylesheets organized and maintaining code readability.</li>
                <li><span>Tailwind CSS:</span> I am well-versed in using Tailwind CSS to expedite the development process by employing pre-built utility classes without compromising on design flexibility.</li>
            </ul>
        </div>
        <div class="div animation" ref="myElement2" :id="scrolled2 ? 'skills-scrolled' : null">
            <h1>Experience:</h1>
            <p>I have had the opportunity to work in a real-world environment, contributing my skills and expertise to a professional team. During this experience, which spanned over 2 weeks, I collaborated with fellow developers and designers to bring client projects to life. This valuable exposure has further honed my ability to work in a team, adapt to project requirements, and deliver high-quality results within tight deadlines.</p>
        </div>
        <div class="div animation" ref="myElement" :id="scrolled ? 'skills-scrolled' : null">
            <h1>Passion and Vision:</h1>
            <p>My passion for frontend development goes beyond just writing code. I am dedicated to staying up-to-date with the latest industry trends and best practices. This commitment allows me to create cutting-edge websites that not only meet the needs of today but are also prepared for the challenges of tomorrow.</p>
        </div>
        <div class="div animation" ref="myElement3" :id="scrolled3 ? 'skills-scrolled' : null">
            <h1>Projects:</h1>
            <p>In my portfolio, you will find a collection of projects that showcase my skills and creativity. From simple landing pages to complex web applications, each project represents a unique challenge I embraced with enthusiasm and determination.</p>
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
               <a><router-link to="/home">Home</router-link></a>
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