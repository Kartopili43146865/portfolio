<template>
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
    <div class="contact">
      <h1 class="big-text">if any question contact me:</h1>
    <p class="mail">sabamikhelidze111@gmail.com</p>
    </div>
    
    <footer>
      <div class="info">
         <a href="#"><img class="logo" src="../assets/webp.webp"></a>
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
<style scoped>
.contact{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20vh;
  padding-bottom: 38vh;
}
    .big-text{
        font-size: 6vw;
        color: white;
        width: 100%;
    text-align: center;

    }
    .mail {
        font-size: 6vw;
         background: linear-gradient(
      180deg,
      rgba(223,24,192,1),
      rgba(0,192,253,1)
    );
    -webkit-background-clip: text;
    color: transparent;
    width: 100%;
    display: flexbox;
    text-align: center;
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
    .ul {
    display: flex;
    gap: 30px;
    width: 98%;
    margin-left: 2%;
    margin-top: 40px;
    padding-bottom: 50px;
    justify-content: center;
  }
  .ul2 {
    justify-content: flex-start;
    
  }
  .ul a{
    text-decoration: none;
    color: #A7A7A7;
  }
  @media(max-width: 510px){
    .info {
      justify-content: space-around;
    }
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
  .menu {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  .navbar {
    display: flex;
    justify-content: space-between;
  }
</style>