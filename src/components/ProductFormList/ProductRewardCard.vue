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

.margin-bottom-23 {
  margin-bottom: 23px;
}

.margin-bottom-14 {
  margin-bottom: 14px;
}

.product-reward {
  width: 523px;
  height: 192px;
  border: 1px solid #000000;
  border-radius: 22px;
  box-sizing: border-box;
  padding-top: 17px;
  padding-left: 33px;
  text-align: -webkit-left;
  p {
    margin-top: 0
  }
  .reward-row {
    line-height: 21.78px;
    height: 21.78px;
    font-weight: 400;
    display: flex;
    font-size: 18px;
    .label-column {
      width: 252px;
    }
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    line-height: 31.47px;
  }
}
</style>