<template>
  <div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(i,index) in shop_food" :key="index">
        <div class="card">
          <img :src="i.img" class="card-img-top" alt="..." width="150" height="300" />
          <div class="card-body">
            <h2 class="card-title" style="text-align: center;">{{ i.name }}</h2>
            <h5>ราคา {{i.price}} บาท</h5>
            <p class="card-text">
              <button class="btn btn-primary" type="submit" @click="handleAddToCart(i)" style="text-align: center;">เข้าตะกร้า</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { menuStore } from '../stores/All_menu';
import { addToCart } from '../stores/counter';

const allmenu = menuStore();
const shop_food = ref(allmenu.menu_list);

const handleAddToCart = (item) => {
  addToCart(item);
};



</script>

<style scoped>
/* Add styles to improve visual appearance */
.food-list {
  padding: 20px;
  background-color: #f5f5f5;
}

.page-title {
  text-align: center;
  color: #333;
  font-size: 28px;
  margin-bottom: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  margin-bottom: 20px;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 20px;
  margin: 10px 0;
  color: #333;
}

.card-price {
  font-size: 16px;
  color: #777;
}


.btn.btn-primary {
  background-color: #03993d; 
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.btn-primary:hover {
  background-color: #067b2f; 
}
</style>
