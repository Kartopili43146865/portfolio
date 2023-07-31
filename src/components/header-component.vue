<template>
    <div class="menu">
      <div class="navbar">
        <div class="logo"><router-link to="/"><img src="../assets/webp.webp"></router-link></div>
        <div class="ul">
          <a href="/about">About</a>
          <a class="stack" href="#skills">Tech Stack</a>
          <a class="proj" href="#projects">Projects</a>
          <a href="/contact">contact</a>
        </div>
        <div class="icons">
          <a href="https://github.com/Kartopili43146865"><img src="../assets/icons/github.svg"></a>
          </div>
      </div>
    </div>
</template>
<script>
    export default{

    }
</script>
<style scoped>
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
</style>