import ElementMixin from './../../../mixins/element';

export default {
  data() {
    return {
      element: 'bar',
    };
  },

  props: {
    progress: {
      type: Number,
      required: true,
    },
  },
  mixins: [
    ElementMixin,
  ],
};
