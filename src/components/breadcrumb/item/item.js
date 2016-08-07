import ElementMixin from '../../../mixins/element';
import * as BreadcrumbContent from '../content/content.vue';
import * as BreadcrumbLink from '../link/link.vue';

export default {
  mixins: [
    ElementMixin,
  ],

  data() {
    return {
      element: 'item',
    };
  },

  props: {
    /**
     * The breadcrumb body
     */
    body: {
      required: true,
    },

    /**
     * The linked page
     */
    link: {
      required: false,
    },
  },

  components: {
    /**
     * The component for the breadcrumb content
     */
    BreadcrumbContent,

    /**
     * The component for the breadcrumb link
     */
    BreadcrumbLink,
  },

  methods: {
    linkTo() {
      if (typeof this.link === 'string') {
        return this.link;
      }

      if (typeof this.link === 'object' && this.link.to) {
        return this.link.to;
      }

      return undefined;
    },
  },

  computed: {
    /**
     * Computed property which will output
     * whether the item has a link or not
     */
    hasLink() {
      return !!this.link;
    },
  },
};
