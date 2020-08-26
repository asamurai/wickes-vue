import ResultCount from '../components/elements/ResultCount.vue';

export default {
  component: ResultCount,
  title: 'ResultCount',
};

export const resultWithCount = () => ({
  components: { ResultCount },
  template: '<ResultCount :count = "count" />',
  props: {
    count: {
      default: () => 7,
    },
  },
});
