<template>
  <div class="page-content">

    <ProductFormListDetailInformation :name="productFormList.name"
                                      :description="productFormList.description" />

    <div class="margin-top-26">

      <display-card v-for="(card, index) in cards"
                    :key="index"
                    @delete-link="(deletedLink) => removeDisplayLink(deletedLink)"
                    :links="card.links"
                    :form-submitted="card.formSubmitted"
                    :appointment="card.appointment"
                    :purchased="card.purchased"
                    :is-product-materials-card="card.isProductMaterialsCard" />

    </div>

  </div>

</template>

<script lang="ts" setup>

import DisplayCard from "./ProductFormDetail/DisplayCard.vue";

import ProductFormListDetailInformation from "./ProductFormDetail/ProductFormListDetailInformation.vue";

const productFormList = ref({
  name: 'Example Product-form-list Name',
  description: 'Example Product-form-list Description',
})

const cards = ref([
  {
    links: [
      'https://product_form_link_1',
      'https://product_form_link_2',
      'https://product_form_link_3',
      'https://product_form_link_4',
      'https://product_form_link_5',
      'https://product_form_link_6',
      'https://product_form_link_7',
      'https://product_form_link_8',
      'https://product_form_link_9',
    ]
  },
  {
    formSubmitted: 10,
    appointment: 100,
    purchased: 1000
  },
  {
    isProductMaterialsCard: true
  }
])

function removeDisplayLink(deletedLink: string) {
  cards.value[0].links = cards.value[0].links.filter((link: any) => link !== deletedLink);
}

function generateNewLink() {

}

</script>

<style lang="scss" scoped>
//Resource
.margin-top-26 {
  margin-top: 1.625rem;
}

.page-content {
  width: 110.375rem;
  height: fit-content;
  padding-bottom: 4.75rem;
  background: white;
  border-radius: 2rem;
  display: flex;
}

</style>