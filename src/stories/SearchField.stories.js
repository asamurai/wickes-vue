import SearchField from '../components/elements/SearchField.vue';

export default {
  component: SearchField,
  title: 'SearchField',
};

export const withText = () => ({
  components: { SearchField },
  template: '<SearchField :value="value" :placeholder="placeholder" />',
  props: {
    value: {
      default: () => 'Custom value',
    },
    placeholder: {
      default: () => 'Default placeholder',
    },
  },
});
