<template>
    <footer>
      <div class="info">
         <a href="#"><img class="logo" src="../assets/webp.webp"></a>
            <div class="info-links">
                <p>sabamikhelidze111@gmail.com</p>
                <div class="icons">
                    <a href='https://github.com/Kartopili43146865'><img src="../assets/icons/github.svg"></a>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div>
            <div class="ul">
                <a><router-link to="/about">about</router-link></a>
          <a><router-link to="/contact">contact</router-link></a>
          <a href="#skills">Tech Stack</a>
          <a href="#projects">Projects</a>
            </div>
        </div>
    </footer>
        
</template>

<script>
    export default {

    }
</script>

<style scoped>
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
    .ul {
    display: flex;
    gap: 30px;
    width: 98%;
    margin-left: 2%;
    margin-top: 40px;
    padding-bottom: 50px;
  }
  .ul a{
    text-decoration: none;
    color: #A7A7A7;
  }
  @media(max-width: 350px){
    .ul {
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .info {
        flex-direction: column;
    }
  }
  @media(max-width: 800px){
      .info {
        justify-content: space-around;
      }
    }
</style>