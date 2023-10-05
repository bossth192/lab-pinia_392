<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">

      <router-link :to="{ name: 'main' }">
        <img src="https://gd.lnwfile.com/_/gd/_raw/as/9j/t2.png" width="150" height="75">
      </router-link>

      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link :to="{ name: 'cart' }">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="35" height="45"><path d="M23.32,4.1c-.57-.7-1.42-1.1-2.32-1.1H7.24l-.04-.35c-.18-1.51-1.46-2.65-2.98-2.65h-1.22c-.55,0-1,.45-1,1s.45,1,1,1h1.22c.51,0,.93,.38,.99,.88l1.38,11.7c.3,2.52,2.43,4.42,4.97,4.42h8.44c.55,0,1-.45,1-1s-.45-1-1-1H11.56c-1.29,0-2.4-.83-2.82-2h9.42c2.38,0,4.44-1.69,4.9-4.02l.88-4.39c.18-.88-.05-1.79-.62-2.49ZM11,22c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2Zm9,0c0,1.1-.9,2-2,2s-2-.9-2-2,.9-2,2-2,2,.9,2,2ZM0,6c0-.55,.45-1,1-1h1.54c.55,0,1,.45,1,1s-.45,1-1,1H1c-.55,0-1-.45-1-1Zm0,4c0-.55,.45-1,1-1H3c.55,0,1,.45,1,1s-.45,1-1,1H1c-.55,0-1-.45-1-1Zm5,4c0,.55-.45,1-1,1H1c-.55,0-1-.45-1-1s.45-1,1-1h3c.55,0,1,.45,1,1Z" style="fill: #fff;"/></svg>
            <span> {{ totalItems }} </span>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="{ name: 'orderList' }">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 24 24" width="35" height="45"><path d="M22.485,10.975,12,17.267,1.515,10.975A1,1,0,1,0,.486,12.69l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z" style="fill: #fff;" /><path d="M22.485,15.543,12,21.834,1.515,15.543A1,1,0,1,0,.486,17.258l11,6.6a1,1,0,0,0,1.03,0l11-6.6a1,1,0,1,0-1.029-1.715Z" style="fill: #fff;"/><path d="M.485,8.357l9.984,5.991a2.97,2.97,0,0,0,3.062,0l9.984-5.991a1,1,0,0,0,0-1.714L13.531.652a2.973,2.973,0,0,0-3.062,0L.485,6.643a1,1,0,0,0,0,1.714Z" style="fill: #fff;" /></svg>
        </router-link>
        </li>

      </ul>

    </div>
    
  </nav>

  <nav class="nav nav-underline justify-content-between">
   <RouterLink class="nav-item nav-link link-body-emphasis" to="/">หน้าแรก</RouterLink>
   <RouterLink class="nav-item nav-link link-body-emphasis" to="/about">หมวดหมู่</RouterLink>
   <RouterLink class="nav-item nav-link link-body-emphasis" to="/about">วิธีการสั่งซื้อ</RouterLink> 
   <RouterLink class="nav-item nav-link link-body-emphasis" to="/about">ชำระเงิน</RouterLink> 
   <RouterLink class="nav-item nav-link link-body-emphasis" to="/about">ติดต่อ</RouterLink>    
  </nav>

</template>

<script setup>
import {  computed } from 'vue';
import { cart } from '../stores/counter';


const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0));
</script>


<style scoped>
.nav-item {
  padding: 10px;
  margin-right: 20px;
}

.navbar {
  background-color: #333; 
  color: #fff; 
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar img {
  margin-left: 20px; 
}

.navbar ul {
  list-style: none; 
  display: flex;
  align-items: center;
}

.navbar a {
  text-decoration: none;
  color: #fff; 
  margin-left: 20px; 
  position: relative;
}

.navbar a span {
  background-color: #ff5722;
  color: #fff; 
  border-radius: 50%; 
  padding: 1px 7px; 
  font-size: 12px;
  position: absolute;
  top: -8px; 
  right: -8px; 
}

.container-fluid {
  background-color: navy; 
  padding: 10px; 
  border-radius: 5px; 
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); 
}

</style>