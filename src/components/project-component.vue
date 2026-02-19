<template>
    <div class="item">
    <a :href="data.link1" target="_blank"><img class="item-img" :src='data.img'></a>
    <div class="item-text">
      <h1 class="element">{{data.title}}</h1>
    <p class="element desc">{{data.desc}}</p>
    <h3 class="element">Tech stack: <span>{{ data.stack }}</span></h3>
    <div class="element links">
      <div><a :href="data.link1" target="_blank"><img src="../assets/icons/preview.svg"> Live Preview</a></div>
      <div><a :href="data.link2" target="_blank"><img src="../assets/icons/github.svg"> view code</a></div>
    </div>
    </div>
    
    </div>
</template>
<script>
export default {
props: {
  data: Object,
}
} 
</script>
<style scoped lang="scss">
  .item { 
    width: 300px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-radius: 20px;
    overflow: hidden;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.137);
    box-shadow: 0 0 15px 2px rgb(27, 27, 27);
    transition: 0.2s;
    cursor: pointer;
  }
  .item:hover {
    background-color: black;
    transform: scale(1.1);
    
  }
  .item:hover * {
      color: white;
  }
  .item h1 {
    color: white;
  }
  .item-img {
    width: 100%;
  }
  .item-text {
    width: 96%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 4%;
    color: #CCCCCC;
  }
  .item-text h1{
    font-size: 28px;
  }
  .item-text h3,
  .item-text p{
    font-size: 18px;
  }
  .item-text h3 span {
    font-size: 15px;
  }
  .item-text .element{
    margin-top: 20px;
  }
  .item-text .links{
    width: 96%;
    display: flex;
    justify-content: space-between;
    
    border-radius: 5px;
  }
  .item-text .links div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .item-text .links a{
    text-decoration-color: white;
    color: white;
  }
  .desc {
    width: 98%;
    max-height: 155px;
    overflow-y: auto;
  }
</style>