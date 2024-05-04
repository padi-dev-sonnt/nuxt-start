<template>
  <div class="root-example">

    <ProductFormList />

  </div>

</template>

<script lang="ts" setup>

import ProductFormDetail from "./src/components/ProductFormDetail.vue";
import ProductFormList from "./src/components/ProductFormList.vue";

const productForms = ref<[]>([
  {
    name: 'Product Name Example 1',
    price: 1500,
    description: 'Product Description 1',
    imageLink: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200'
  },
  {
    name: 'Product Name Example 2',
    price: 1600,
    description: 'Product Description 2',
    imageLink: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200'
  },
  {
    name: 'Product Name Example 3',
    price: 1700,
    description: 'Product Description 3',
    imageLink: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200'
  },
  {
    name: 'Product Name Example 4',
    price: 1800,
    description: 'Product Description 4',
    imageLink: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200'
  },
  {
    name: 'Product Name Example 5',
    price: 1900,
    description: 'Product Description 5',
    imageLink: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200'
  },
  {
    name: 'Product Name Example 6',
    price: 2000,
    description: 'Product Description 6',
    imageLink: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200'
  },
])

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