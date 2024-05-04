<template>
  <div class="prod-info">
    <img class="img"
         src="./../../asset/images/sample.png"/>

    <div class="detail-info">
      {{ 'Product Name' + ( name ? ': ' + name : '') }}<br/>
      {{ 'Product Description' + ( description ? ': ' + description : '') }}
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  name: {type: String, required: false},
  description: {type: String, required: false},
})


</script>

<style lang="scss" scoped>

//Resource
.margin-right-13 {
  margin-right: 0.8125rem;
}

.margin-top-23 {
  margin-top: 1.4375rem;
}

.margin-bottom-21 {
  margin-bottom: 1.3125rem;
}

.margin-bottom-25 {
  margin-bottom: 1.5625rem;
}

.prod-info {
  text-align: -webkit-left;
  width: 72.5rem;
  .img {
    border-radius: 2rem;
    object-fit: cover;
    margin-left: 7.125rem;
    margin-top: 1.625rem;
    width: 58.125rem;
    height: 22.125rem;
  }
  .detail-info {
    max-width: 58.125rem;
    margin-left: 7.125rem;
    padding-top: 3.75rem;
    color: #000000;
    line-height: 1.74rem;
    font-weight: 400;
    font-size: 1.4375rem;
  }
}
</style>