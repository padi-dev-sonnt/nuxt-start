<template>
  <div class="product-form-links margin-top-26">

    <div class="form-header">
      <div class="form-title">
        Product Form Links
      </div>

      <div class="generate-btn"
           @click="generateNewLink()">
        <p>Generate New Link</p>
        <p class="custom-icon">+</p>
      </div>
    </div>

    <ProductFormLink v-for="(link, index) in showLinks"
                     :key="index"
                     :link-url="link"
                     :class="{
                       'margin-top-23 margin-bottom-21': index === 0,
                       'margin-bottom-25': index === 1
                     }" @delete-link="(deletedLink) => emit('delete-link', deletedLink)"/>

    <div class="pagination-container">

      <el-pagination v-if="links !== undefined"
                     background
                     v-model:current-page="currentPage"
                     :default-page-size="3"
                     :layout="paginationLayout"
                     :total="links.length"
                     class="mt-4" />

    </div>

  </div>
</template>

<script lang="ts" setup>
import ProductFormLink from "./ProductFormLink.vue"

const props = defineProps({
  links: {type: Array, required: false},
})

const emit = defineEmits(['delete-link']);

const currentPage = ref<Number>(1);
const showLinks = ref<string[]>([]);
const paginationLayout = computed(() => {
  if(props.links && props.links.length > 0) {
    const lastPageNumber = Number.parseFloat(props.links.length / 3).toFixed();
    if(currentPage.value === 1) {
      return 'pager, next';
    } else if(Number(currentPage.value) === Number(lastPageNumber)) {
      return 'prev, pager';
    }
  }

  return 'prev, pager, next';
})

onMounted(() => {
  showLinks.value = getDisplayLinks(props.links);
})

watch(currentPage, () => {
  showLinks.value = getDisplayLinks(props.links, currentPage.value);
})

watch(() => props.links, () => {
  showLinks.value = getDisplayLinks(props.links);
})

function getDisplayLinks(totalLinks: any, currentPage?: any) {
  const countLinks = [...totalLinks].length;
  if(totalLinks && countLinks > 0) {
    if(totalLinks.length <= 3) {
      return [...totalLinks];
    } else {
      const startIndex = currentPage ? (currentPage - 1) * 3 : 0;
      const endIndex = currentPage ? currentPage * 3 : 3;

      return [...totalLinks].slice(startIndex, endIndex);
    }
  } else {
    return [];
  }
}

function generateNewLink() {
//  TODO: what logic need here...mark to do later
}


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

.product-form-links {
  width: 32.6875rem;
  height: 22.125rem;
  border: 1px solid #000000;
  border-radius: 1.375rem;
  padding: 1.3125rem 1.5625rem 1.1875rem 1.5625rem;
  box-sizing: border-box;

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .form-title {
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 1.815625rem;
      color: #000000;
      width: fit-content;
    }
    .generate-btn {
      padding: 0 0.75rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      width: 11.1875rem;
      height: 2.6875rem;
      font-size: 0.9375rem;
      font-weight: 400;
      line-height: 2.6875rem;
      background: #ADE3F4;
      border-radius: 1.25rem;
      margin-right: 0.25rem;
      .custom-icon {
        font-size: 1.75rem;
      }
    }
  }

  .pagination-container {
    width: -webkit-fill-available;
    height: 2.1875rem;
    display: flex;
    justify-content: flex-end;
    margin-top: 1.4375rem;

    //TODO: hover & selected
    :deep(li.is-active) {
      color: black;
      border: 1px solid #000000;
      width: 2.8125rem;
      height: 2.375rem;
      font-size: 1.25rem;
      font-weight: 400;
      border-radius: 0.9375rem;
      background: white;
    }
    :deep(li, li.is-active) {
      border: 1px solid #000000;
      width: 2.8125rem;
      height: 2.375rem;
      font-size: 1.25rem;
      font-weight: 400;
      border-radius: 0.9375rem;
      background: white;
    }

    :deep(button) {
      border: 1px solid #000000;
      width: 2.8125rem;
      height: 2.375rem;
      font-size: 1.25rem;
      font-weight: 400;
      border-radius: 0.9375rem;
      background: white;
    }
  }

}
</style>