<template>
 <div class="container">
  <section class="row text-center">
    <h1>Surprise!</h1>
  </section>
 </div>


 <section class="row g-3">

   
 
   <div v-for="g in gifts" :key="g.id" :gift="g" class="elevation-2 card col-4 ">
    <!-- <GiftCard :gift="g"/> -->
     <div>
       <img class="img-fluid" :src="g.imgUrl" alt="">
      </div>
      <div>
        <span>{{g.tag}}</span>
      </div>
      <span>{{ g.opended }}</span>
   
    </div>
    
  </section>



</template>

<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';

import { giftService } from '../services/GiftService.js';
import { AppState } from '../AppState.js';

export default {
    setup() {
        onMounted(getGifts);
        async function getGifts() {
            try {
                await giftService.getGifts();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        return {
            getGifts,
            gifts: computed(() => AppState.gifts)
        };
    },
    
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
