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

  computed: {
    styling() {
      return {
        width: `${this.progress}%`,
      };
    },
  },

  mixins: [
    ElementMixin,
  ],
};
