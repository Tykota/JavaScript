<template>

  <div class="playField">
    <div> <button id = "1" class = "gameElement">&nbsp</button></div>
    <div> <button id = "2" class = "gameElement">&nbsp</button></div>
    <div> <button id = "3" class = "gameElement">&nbsp</button></div>
    <div> <button id = "4" class = "gameElement">&nbsp</button></div>
    <div> <button id = "5" class = "gameElement">&nbsp</button></div>
    <div> <button id = "6" class = "gameElement">&nbsp</button></div>
    <div> <button id = "7" class = "gameElement">&nbsp</button></div>
    <div> <button id = "8" class = "gameElement">&nbsp</button></div>
    <div> <button id = "9" class = "gameElement">&nbsp</button></div>
    <div> <button id = "10" class = "gameElement">&nbsp</button></div>
    <div> <button id = "11" class = "gameElement">&nbsp</button></div>
    <div> <button id = "12" class = "gameElement">&nbsp</button></div>
    <div> <button id = "13" class = "gameElement">&nbsp</button></div>
    <div> <button id = "14" class = "gameElement">&nbsp</button></div>
    <div> <button id = "15" class = "gameElement">&nbsp</button></div>
    <div> <button id = "16" class = "gameElement">&nbsp</button></div>
  </div>
</template>

<script>
    export default {

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playField {
  margin: 0 auto;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}

  .gameElement{
    margin-left: -10px;
    width: 100%;
    padding-top: 45%;
      padding-bottom: 45%;
    background: lightgray;
  }

</style>
