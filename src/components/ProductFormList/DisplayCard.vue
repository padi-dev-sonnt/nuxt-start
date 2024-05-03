<template>
  <div>
    <ProductFormLinksCard v-if="links && links.length > 0"
                          @delete-link="(deletedLink) => emit('delete-link', deletedLink)"
                          :links="links"/>

    <ProductRewardCard v-if="formSubmitted || appointment || purchased"
                       class="margin-top-36"
                       :purchased="purchased"
                       :appointment="appointment"
                       :form-submitted="formSubmitted"/>

    <ProductMaterialsCard class="margin-top-39"
                          v-if="isProductMaterialsCard"/>


  </div>
</template>

<script lang="ts" setup>
import ProductRewardCard from "./ProductRewardCard.vue";

import ProductFormLinksCard from "./ProductFormLinksCard.vue";

import ProductMaterialsCard from "./ProductMaterialsCard.vue";

const props = defineProps({
  links: {type: Array, required: false},
  formSubmitted: {type: Number, required: false},
  appointment: {type: Number, required: false},
  purchased: {type: Number, required: false},
  isProductMaterialsCard: {type: Boolean, default: false},
})

const emit = defineEmits(['delete-link']);


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

.margin-top-36 {
  margin-top: 36px;
}

.margin-bottom-25 {
  margin-bottom: 25px;
}

.margin-top-39 {
  margin-top: 39px;
}

</style>