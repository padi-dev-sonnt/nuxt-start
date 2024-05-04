<template>
  <div class="root-example">

<!--    <div style="width: 100%; height: 400px; background: transparent; border: 2px solid red">-->

<!--    </div>-->
    <ProductFormList />
  </div>

</template>

<script lang="ts" setup>

import ProductFormList from "./src/components/ProductFormList.vue";

</script>

<style lang="scss" scoped>

.root-example {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: -webkit-center;
  background: #eeebeb;
  padding-top: 3.125rem;
}
</style>