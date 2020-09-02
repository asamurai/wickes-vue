import Tab from '../components/elements/Tab.vue';

export default {
  component: Tab,
  title: 'Tab',
};

export const optionChecked = () => ({
  components: { Tab },
  template: '<Tab :optionId = "optionId" :optionName = "optionName" :optionValue = "optionValue" :optionChecked = "optionChecked" />',
  props: {
    optionId: {
      default: () => 'id',
    },
    optionName: {
      default: () => 'name',
    },
    optionValue: {
      default: () => 'value',
    },
    optionChecked: {
      default: () => true,
    },
  },
});


export const optionUnchecked = () => ({
  components: { Tab },
  template: '<Tab :optionId = "optionId" :optionName = "optionName" :optionValue = "optionValue" :optionChecked = "optionChecked" />',
  props: {
    optionId: {
      default: () => 'id',
    },
    optionName: {
      default: () => 'name',
    },
    optionValue: {
      default: () => 'value',
    },
    optionChecked: {
      default: () => false,
    },
  },
});
