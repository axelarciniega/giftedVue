

<template>
     <div>
       <img class="img-fluid" :src="g" alt="">
      </div>
      <div>
        <span>{{g.tag}}</span>
      </div>
      <span>{{ g.opended }}</span>
</template>


<script>

import { Gift } from '../models/Gift.js';




export default{
props: {gift: {type: Gift, required: true}},
setup(){
    return{
    }
    
    
    
    
}
}


</script>


<style lang="scss" scoped>

</style>