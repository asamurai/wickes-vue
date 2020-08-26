<template>
  <div class="switch-wrapper">
    <div v-if="text" class="switch-text">{{text}}</div>
    <div class="switch-field">
      <template v-for="(option, index) in options">
        <Tab
          v-bind:key="`${index}-tab`"
          :optionId = "option.optionId"
          :optionName = "optionName"
          :optionValue = "option.optionValue"
          :optionChecked = "option.optionChecked"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  components: { Tab },
  props: {
    text: String,
    optionName: String,
    options: Array,
  },
};
</script>

<style global>
  .switch-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 36px;
  }

  .switch-text {
    color: #000000;
    font-size: 12pt;
    font-weight: 100;
    line-height: 1;
    text-align: center;
    padding: 10px 30px;
  }

  .switch-field {
    display: flex;
    overflow: hidden;
  }

  .switch-field input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }

  .switch-field label {
    display: inline-block;
    background-color: #555555;
    color: #FFFFFF;
    font-size: 12pt;
    font-weight: 100;
    line-height: 1;
    text-align: center;
    padding: 10px 30px;
    margin: -1px;
    transition: all 0.1s ease-in-out;
  }

  .switch-field label:hover {
    cursor: pointer;
  }

  .switch-field input:checked + label {
    background-color: #F65261;
    box-shadow: none;
  }
</style>
