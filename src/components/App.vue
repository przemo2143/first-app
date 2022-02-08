<template>
<div class="bg-secondary bg-darken-md" style="height:200%; width:100%">
  <div class="home" style="text-align: center; font-size:25px; font-weight:bold; height:100%; width:100%;">
    This is My App <br>
    <div style="margin-top:45px; letter-spacing: 30px;">
    <button class="button"><router-link :to="{ name: 'ToDo' }">ToDo</router-link></button>
    <button class="button"><router-link :to="{ name: 'Calculator' }">Calculator</router-link></button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style >
*
{
  background-color: #030e1b;
  color: #FFF;
}
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
}

.button:hover {
    box-shadow: 0 12px 16px 0 rgba(255,255,255,0.10), 0 17px 50px 0 rgba(255,255,255,0.10);
}
</style>
