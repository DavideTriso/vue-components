import ElementMixin from '../../../mixins/element';
import * as BreadcrumbContent from '../content/content.vue';
import * as BreadcrumbLink from '../link/link.vue';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      /**
       * Element name used for BEM
       */
      element: 'item',
    };
  },

  props: {
    /**
     * Item body
     */
    body: {
      required: true,
    },

    /**
     * Item link
     */
    link: {
      required: false,
    },
  },

  components: {
    BreadcrumbContent,
    BreadcrumbLink,
  },

  computed: {
    /**
     * Computed property which will output
     * whether the item has a link or not
     *
     * @returns {boolean} If the item has a link
     */
    hasLink() {
      return !!this.link;
    },
  },
};
