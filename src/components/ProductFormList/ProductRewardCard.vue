<template>
  <div class="product-reward">
    <p class="title margin-bottom-23">
      Product Reward
    </p>

    <div :key="index"
         v-for="(rowConfig, index) in rowConfigs"
         :class="{
           'reward-row': true,
           'margin-bottom-14': index !== 2
         }">
      <p class="label-column">
        {{ rowConfig.label }}
      </p>
      <p>
        {{ rowConfig.displayValue }}
      </p>
    </div>


  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  formSubmitted: {type: Number, required: false},
  appointment: {type: Number, required: false},
  purchased: {type: Number, required: false},
})

const rowConfigs = computed(() => {
  return [
    {
      label: 'Form Submitted',
      displayValue: '$' + props.formSubmitted
    },
    {
      label: 'Appointment',
      displayValue: '$' + props.appointment
    },
    {
      label: 'Purchased',
      displayValue: '$' + props.purchased
    },
  ]
});


</script>

<style lang="scss" scoped>
.margin-bottom-23 {
  margin-bottom: 1.4375rem;
}

.margin-bottom-14 {
  margin-bottom: 0.875rem;
}

.product-reward {
  width: 32.6875rem;
  height: 12rem;
  border: 1px solid #000000;
  border-radius: 1.375rem;
  box-sizing: border-box;
  padding-top: 1.0625rem;
  padding-left: 2.0625rem;
  text-align: -webkit-left;
  p {
    margin-top: 0
  }
  .reward-row {
    line-height: 1.36125rem;
    height: 1.36125rem;
    font-weight: 400;
    display: flex;
    font-size: 1.125rem;
    .label-column {
      width: 15.75rem;
    }
  }
  .title {
    font-size: 1.625rem;
    font-weight: 400;
    line-height: 1.966875rem;
  }
}
</style>