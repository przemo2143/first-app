<template>
  <!-- Happy Coding -->
  <div >
  <div style="text-align: center; margin-top:20px;">
    <div style="letter-spacing: 30px">
  <button class="button"><router-link :to="{ name: 'app' }" >App</router-link></button>
  <button class="button"><router-link :to="{ name: 'ToDo' }">ToDo</router-link></button>
  </div>
  <div class="p-3" style="max-width: 400px; margin: 50px auto; background: #234">
    
    
    <!-- Calculator Result -->
    <div class="w-full rounded m-1 p-3 text-right lead font-weight-bold text-white bg-vue-dark">
      {{ calculatorValue || 0 }}
    </div>

    <!-- Calculator buttons -->
    <div class="row no-gutters">
      <div class="col-3" v-for="n in calculatorElements" :key="n">
        <div class="lead text-white text-center m-1 py-3 bg-vue-dark rounded hover-class"
          :class="{'bg-vue-green': ['C','*','/','-','+','%','='].includes(n)}"
          @click="action(n)"
        >
          {{n}}
        </div>
      </div>
    </div>

  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  props: {
    msg: String
  },
  data() {
    return {
      calculatorValue: '',
      calculatorElements: ['C','*','/','-',7,8,9,'+',4,5,6,'%',1,2,3,'=',0,'.'],
      operator: null,
      previousCalculatorValue: '',
    }
  },
  methods: {
    action(n){
      /* Append value */
      if(!isNaN(n) || n === '.'){
        this.calculatorValue += n + '';
      }
      /* Clear value */
      if(n === 'C'){
        this.calculatorValue = '';
      }
      /* Percentage */
      if(n === '%'){
        this.calculatorValue = this.calculatorValue / 100 + '';
      }
      /* Operators */
      if(['/','*','-','+'].includes(n)){
        this.operator = n;
        this.previousCalculatorValue = this.calculatorValue;
        this.calculatorValue = '';
      }
      /* Calculate result using the eval function */
      if(n === '='){
        this.calculatorValue = eval(
          this.previousCalculatorValue + this.operator + this.calculatorValue
        );
        this.previousCalculatorValue = '';
        this.operator = null;
      }
    }
  }
}
</script>


<style scoped>
  .v-application {
  background-color: #00a86b;
  }
  .bg-vue-dark {
    background: #31475e;
  }
  .hover-class:hover {
    cursor: pointer;
    background: #3D5875;
  }
  .bg-vue-green {
    background: #3fb984;
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