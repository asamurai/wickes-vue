import Tabs from '../components/elements/Tabs.vue';

export default {
  component: Tabs,
  title: 'Tabs',
};

const optionsList = [
  {
    optionId: '1',
    optionValue: 'Yes',
    optionChecked: true,
  },
  {
    optionId: '2',
    optionValue: 'No',
    optionChecked: false,
  },
];

export const withText = () => ({
  components: { Tabs },
  template: '<Tabs :text="text" :options="options" />',
  props: {
    text: {
      default: () => 'Text',
    },
    options: {
      default: () => optionsList,
    },
    optionName: {
      default: () => 'OptionName',
    },
  },
});
