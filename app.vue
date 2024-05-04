<template>
  <div class="root-example">
    <ProductFormList />
  </div>

</template>

<script lang="ts" setup>

import ProductFormList from "./src/components/ProductFormList.vue";

</script>

<style lang="scss" scoped>

.root-example {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: -webkit-center;
  background: #eeebeb;
  padding-top: 3.125rem;
  padding-bottom: 6.25rem;
}
</style>