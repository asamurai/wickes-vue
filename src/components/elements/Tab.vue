<template>
  <span>
    <input
      type="radio"
      :id="optionId"
      :name="optionName"
      :value="optionValue"
      :checked="optionChecked"
    />
    <label :for="optionId">{{optionValue}}</label>
  </span>
</template>

<script>
export default {
  name: 'Tab',

  props: {
    optionId: String,
    optionName: String,
    optionValue: String,
    optionChecked: Boolean,
  },
};
</script>

<style scoped>
  input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }

  label {
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

  label:hover {
    cursor: pointer;
  }

  input:checked + label {
    background-color: #F65261;
    box-shadow: none;
  }
</style>
