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

.product-form-links {
  width: 523px;
  height: 354px;
  border: 1px solid #000000;
  border-radius: 22px;
  padding: 21px 25px 19px 25px;
  box-sizing: border-box;

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .form-title {
      font-weight: 400;
      font-size: 24px;
      line-height: 29.05px;
      color: #000000;
      width: fit-content
    }
    .generate-btn {
      padding: 0 12px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      width: 179px;
      height: 43px;
      font-size: 15px;
      font-weight: 400;
      line-height: 43px;
      background: #ADE3F4;
      border-radius: 20px;
      margin-right: 4px;
      .custom-icon {
        font-size: 28px;
      }
    }
  }

  .pagination-container {
    width: -webkit-fill-available;
    height: 35px;
    display: flex;
    justify-content: flex-end;
    margin-top: 23px;

    //TODO: hover & selected
    :deep(li.is-active) {
      color: black;
      border: 1px solid #000000;
      width: 45px;
      height: 38px;
      font-size: 20px;
      font-weight: 400;
      border-radius: 15px;
      background: white;
    }
    :deep(li, li.is-active) {
      border: 1px solid #000000;
      width: 45px;
      height: 38px;
      font-size: 20px;
      font-weight: 400;
      border-radius: 15px;
      background: white;
    }

    :deep(button) {
      border: 1px solid #000000;
      width: 45px;
      height: 38px;
      font-size: 20px;
      font-weight: 400;
      border-radius: 15px;
      background: white;
    }
  }

}
</style>