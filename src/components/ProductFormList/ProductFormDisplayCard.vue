<template>
  <div class="product-form-element">
    <div class="img-container"
         v-if="imageLink">
      <img class="img"
           :src="imageLink"
           alt="Test Img Link"/>
    </div>

    <div class="information-row">
      {{ name }}
    </div>
    <div class="information-row product-price">
      {{ price ? '$' + price : ''}}
    </div>
    <div class="information-row">
      {{ description }}
    </div>

  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  name: {type: String, default: ''},
  price: {type: Number, required: false},
  description: {type: String, default: ''},
  imageLink: {type: String, required: false},
})

</script>

<style lang="scss" scoped>

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

</style>