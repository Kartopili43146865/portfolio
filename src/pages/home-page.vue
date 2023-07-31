<template>
  <div>
    <menucom />
    <div class="main">
      <h1>Hi, <br>My name is <br> <span>saba mikhelidze</span> <br>I build things for web</h1>
      <div class="image"><img src="../assets/webp.webp"></div>
    </div>
  

    <div class="tech" id="skills">
      <div class="tech-texts">
        <h1>My Tech Stack</h1>
        <p>Technologies i've been working with recently</p>
      </div>
      <div class="s">
      <img class="ss prev" src="../assets/icons/next.png" @click="next(1)">
      <div 
      class="skills"
      @mousedown="down"
      @mousemove="move"
      @touchstart="start"
      @touchmove="touchmove"
      ref="myElement"
      :id="scrolled ? 'skills-scrolled' : null"
      >
        <div class="child-wrapper" ref="position">
        <skill v-for="(skill, index) in skills" :key="index" :data="skill" />
        </div>
        
      </div>
      <img class="ss next" src="../assets/icons/next.png" @click="next(-1)">
     </div>
    </div> 
    <div class="projects" id="projects">
      <div class="project-texts">
        <h1>Project</h1>
        <p>things i've built so far</p>
      </div>
    </div>
      <div class="items">
        <project v-for="(project, index) in projects" :key="index" :data="project" />   
        
        </div>
        <footercomp />
  </div>
  </template>
  
  <script>
  import menucom from '../components/header-component.vue'
  import footercomp from '../components/footer-component.vue'
  import projects from '../projects.json'
  import project from "../components/project-component.vue"
  import skills from "../skills.json"
  import skill from '../components/skill-project.vue'
  export default {
    components:{
      project,
      skill,
      footercomp,
      menucom,
    },
    data(){
      return{
        isDown: false,
        Xevent: 0,
        distanceX: 0,
        X: 0,
        newX: 0,
        projects: projects,
        skills: skills,
        ismove: false,
        interval: null,
        scrolled: false,
      }
    },
    mounted(){
      document.addEventListener("mouseup", this.up)
      document.addEventListener("touchend", this.up)
      this.startInterval()
      window.addEventListener("scroll", this.handleScroll);
      this.$refs.myElement.addEventListener('scroll', this.handleScroll);
      this.skillsBottomPosition = this.$refs.myElement.offsetTop + this.$refs.myElement.offsetHeight;
    },
    beforeMount() {
      document.removeEventListener("mouseup", this.up)
      clearInterval(this.interval)
      window.removeEventListener("scroll", this.handleScroll);
    },
    watch:{
      isDown(newValue){
        if(!newValue){
        this.interval = setInterval(() => {
          this.newX--
        if(this.newX > -(this.skills.length - 2 + 0.9))
      this.$refs.position.style.transform = `translateX(${this.newX * 50}%)`
      else {
        this.$refs.position.style.transform = `translateX(0%)`
        this.newX = 0
      }
        
      }, 4000);
      }else {
          clearInterval(this.interval)
        }
      },
    },
    methods: {
      handleScroll() {
      const scrollPosition = window.scrollY + window.innerHeight;
      this.skillsTopPosition = this.$refs.myElement.offsetTop + this.$refs.myElement.offsetHeight;
      this.scrolled = scrollPosition > this.skillsTopPosition;
    },
      startInterval() {
      this.interval = setInterval(this.next.bind(this, -1), 4000)
    },
    down(event){
      this.isDown = true
      this.Xevent = event.offsetX
      this.ismove = false
    },
    start(event) {
      this.isDown = true
      this.Xevent = event.touches[0].clientX
      this.ismove = false
    },
    move(event){
      if(this.isDown){
        this.ismove = true
        this.distanceX = event.offsetX - this.Xevent
        this.X = (this.distanceX / window.innerWidth) * 4
        if(this.X + this.newX < 0.1 && this.X + this.newX > -(this.skills.length - 2 + 0.1)){
      this.$refs.position.style.transform = `translateX(${(this.newX + this.X) * 50}%)`
        }
       }
    },
    touchmove(event){
      if(this.isDown){
        this.ismove = true
        this.distanceX = event.touches[0].clientX - this.Xevent
        this.X = (this.distanceX / window.innerWidth) * 4
        if(this.X + this.newX < 0.1 && this.X + this.newX > -(this.skills.length - 2 + 0.1)){
      this.$refs.position.style.transform = `translateX(${(this.newX + this.X)* 50}%)`
        }
       }
    },
    up(){
      if(this.ismove && this.isDown){
      this.newX += Math.round(this.X)
      if(this.newX > 0) {
        this.$refs.position.style.transform = `translateX(0%)`
        this.newX = 0
      }
      else if(this.newX < -(this.skills.length - 2 + 0.9)){
        this.$refs.position.style.transform = `translateX(-${(this.skills.length - 2) * 50}%)`
        this.newX = -(this.skills.length - 2)
      } else
      this.$refs.position.style.transform = `translateX(${this.newX * 50}%)`
      }
      this.isDown = false
    },
    next(number) {
  clearInterval(this.interval);
  this.newX += number;

  if (this.newX > 0 && number === 1) {
    this.$refs.position.style.transform = `translateX(${-(this.skills.length - 2) * 50}%)`;
    this.newX = -(this.skills.length - 2);
  } else if (this.newX < -(this.skills.length - 2 + 0.9)) {
    this.$refs.position.style.transform = `translateX(0%)`;
    this.newX = 0;
  } else {
    this.$refs.position.style.transform = `translateX(${this.newX * 50}%)`;
  }

  this.interval = setInterval(this.next.bind(this, -1), 4000);
},

    },
  }
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Cabin:wght@700&display=swap');

  *{
    margin: 0;
    padding: 0;
    font-family: 'Cabin', sans-serif;
  }
  body {
    background: linear-gradient(100deg,#151d25, #000000);
  }
  
  .main{
    width: 80%;
    margin: 0;
    margin-left: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 120px;
  }
  .main h1 {
    color: #D9D9D9;
    width: 60%;
    font-size: 58px;
    animation: fade-in-out 2.5s;
  }
  .main h1 span {
    background: linear-gradient(
      180deg,
      rgba(223,24,192,1),
      rgba(0,192,253,1)
    );
    -webkit-background-clip: text;
    color: transparent;
  }
  .main .image{
    width: 349px;
    height: 349px;
    border-radius: 50%;
    background: linear-gradient(
      180deg,
      rgba(223,24,192,1),
      rgba(0,192,253,1)
    );
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main .image img {
    width: 98%;
    height: 98%;
    border-radius: 50%;
  }
  .tech,.projects {
    margin-top: 100px;
  }
  .tech-texts,.project-texts {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-left: 0;
  }
  .tech-texts h1,.project-texts h1 {
    font-size: 48px;
    color: #CCCCCC;
    text-align: center;
  }
  .tech-texts p, .project-texts p {
    text-align: center;
    font-size: 32px;
    color: #A7A7A7;
  }
  .tech-images img {
    width: 130px;
  }
  .items {
    display: grid;
    width: 96%;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    place-items: center;
    margin-left: 2%;
    gap: 50px;
    margin-top: 50px;
  }
  
  .skills {
    display: flex;
    overflow: hidden;
    margin-top: 40px;
    width: 96%;
    height: 270px;
    opacity: 0;
    transform: translateY(300px);
    overflow: hidden;
    transition: 0.7s;
  }
  #skills-scrolled {
    transform: translateY(0px);
    opacity: 1;
  }
  .s {
    display: flex;
    align-items: center;
    width: 99%;
    margin-left: 0.5%;
    overflow: hidden;
  }
  .ss {
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-radius: 50%;
  }
  .prev {
    rotate: 180deg;
  }
  .child-wrapper {
    width: 100%;
    display: flex;
    transition: 0.1s;
  }
  .skills::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @keyframes fade-in-out {
    0%{
      transform: translateX(-20%);
      opacity: 0;
    }
    100%{
      transform: translateX(0%);
      opacity: 1;
    }
  }
@media(max-width: 1215px){
  .main {
    flex-direction: column;
    margin-left: 0;
    gap: 50px;
    width: 100%;
    justify-content: left;
  }
  .main h1 {
    margin-left: 0;
    transform: translate(0%);
    width: 90%;
  }
}
@media(max-width: 670px){
  .main h1 {
    font-size: 45px;
  }
  .main .image {
    width: 260px;
    height: 260px;
  }
}
@media(max-width: 510px){
  .main h1 {
    font-size: 30px;
  }
}
</style>