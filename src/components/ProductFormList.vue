<template>
  <div class="product-form-list-container">

    <ProductFormDisplayCard v-for="(form, index) in productForms"
                            :class="{
                              'center-card': isCenterCard(index),
                              // 'spacing-on-top': !isFirstRow(form, productForms)
                            }"
                            :key="index"
                            :imageLink="form.imageLink"
                            :name="form.name"
                            :price="form.price"
                            :description="form.description"/>

  </div>

</template>

<!--gap-->

<script lang="ts" setup>

import ProductFormDisplayCard from './ProductFormList/ProductFormDisplayCard.vue';

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
  // {
  //   name: 'Product Name Example 5',
  //   price: 1900,
  //   description: 'Product Description 5',
  //   imageLink: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200'
  // },
  // {
  //   name: 'Product Name Example 6',
  //   price: 2000,
  //   description: 'Product Description 6',
  //   imageLink: 'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200'
  // },
])

function isCenterCard(index: number) {
  return index % 3 === 1;
}

// function isFirstRow(element )

</script>

<style lang="scss" scoped>

.product-form-list-container {
  width: 116.875rem;
  height: 400px;
  background: transparent;
  display: flex;
  flex-flow: wrap;
  border: 2px solid red;
  .product-form-element {
    width: 36.875rem;
    height: 18.3125rem;
    background: white;
    border-radius: 1.3125rem;
    padding-top: 1.0625rem;
    font-size: 1.375rem;
    font-weight: 400;
    color: black;

    .information-row {
      padding-left: 2.0625rem;
      text-align: left;
      line-height: 1.664375rem;
    }

    .img-container {
      display: flex;
      justify-content: center;
      margin-bottom: 0.8125rem;
      .img {
        object-fit: cover;
        width: 24.875rem;
        height: 9.5rem;
      }
    }

    .product-price {
      color: #0D98C4 !important;
    }

  }

  .center-card {
    margin: 0 2.6875rem 0 2.6875rem;
  }
}
</style>