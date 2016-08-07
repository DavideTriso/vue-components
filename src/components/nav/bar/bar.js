import ElementMixin from './../../../mixins/element';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'bar',
    };
  },

  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
  },
};
