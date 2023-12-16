<template>
    <div class="skill">
          <img class="imgg" :src="data.img">
          <h2>{{data.title}}</h2>
          <p>{{data.time}} of experience</p>
    </div>
</template>

<script>
    export default {
        props:{
            data: Object,
        }
    }
</script>

<style scoped>
.skill {
    min-width: calc(46% - 4.5px);
    border-radius: 8px;
    border: 2px solid rgba(255, 255, 255, 0.212);
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 2%;
    margin-right: 2%;
    text-align: center;
    color: white;
    user-select: none;
    pointer-events: none;
  }
.skill img {
  width: 90%;
    height: 150px;
    margin-left: 50%;
    transform: translate(-50%, -15px);
}
.skill p {
 color:#A7A7A7;
 margin-top: 10px;
}
@media(min-width: 400px){
    .imgg {
        max-width: 50%;
    }
}
</style>