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
  margin-right: 13px;
}

.margin-top-23 {
  margin-top: 23px;
}

.margin-bottom-21 {
  margin-bottom: 21px;
}

.margin-bottom-25 {
  margin-bottom: 25px;
}

.prod-info {
  text-align: -webkit-left;
  width: 1160px;
  .img {
    border-radius: 32px;
    object-fit: cover;
    margin-left: 114px;
    margin-top: 26px;
    width: 930px;
    height: 354px;
  }
  .detail-info {
    max-width: 930px;
    margin-left: 114px;
    padding-top: 60px;
    color: #000000;
    line-height: 27.84px;
    font-weight: 400;
    font-size: 23px;
  }
}
</style>