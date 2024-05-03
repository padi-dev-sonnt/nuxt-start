<template>
  <div class="link-area">
    {{ linkUrl }}

    <div class="action-btn-container">

      <img src="../../asset/icons/svg-copy.svg"
           class="link-action-button margin-right-13"
           @click="copyLinkUrlToClipboard(linkUrl)"
           alt="Icon copy" />

      <img src="../../asset/icons/svg-delete.svg"
           class="link-action-button"
           @click="emit('delete-link', linkUrl)"
           alt="Icon delete" />
    </div>

  </div>
</template>

<script lang="ts" setup>

//TODO khi nào thì submit thay đổi

const props = defineProps({
  linkUrl: {type: String, default: 'https://product_form_link_1'}
})

const emit = defineEmits(['delete-link']);

function copyLinkUrlToClipboard(linkUrl: String) {
  navigator.clipboard.writeText(linkUrl);
//  TODO: Q&A chỗ này có cần toast cái gì lên ko
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

.link-area {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding-right: 22px;
  padding-left: 13px;
  width: -webkit-fill-available;
  text-align: left;
  height: 47px;
  line-height: 47px;
  font-size: 22px;
  font-weight: 400;
  border: 1px solid #000000;
  border-radius: 17px;

  .action-btn-container {
    display: flex;
    .link-action-button {
      width: 24px;
      cursor: pointer;
    }
  }
}
</style>