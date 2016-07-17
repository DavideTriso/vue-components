import BlockMixin from './../../mixins/block';
import * as TableBody from './body/body.vue';
import * as TableHeader from './header/header.vue';
import * as TableFooter from './footer/footer.vue';

export default {
  data() {
    return {
      block: 'table',
    };
  },

  props: {
    /**
     * The columns displayed at the header and footer
     * of the table
     */
    columns: {
      type: Array,
      required: true,
    },

    /**
     * The items inside the table
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * The header of the table
     */
    header: {
      type: Object,
      required: false,
    },

    /**
     * The body of the table
     */
    body: {
      type: Object,
      required: false,
    },

    /**
     * The footer of the table
     */
    footer: {
      type: Object,
      required: false,
    },
  },

  computed: {
    /**
     * Computed property which will check if
     * the header is enabled
     *
     * @returns {boolean}
     */
    hasHeader() {
      if (!this.header) {
        return false;
      }

      return !!this.header.enabled;
    },

    /**
     * Computed property which will check if
     * the body is enabled
     *
     * @returns {boolean}
     */
    hasBody() {
      if (!this.body) {
        return false;
      }

      return !!this.body.enabled;
    },

    /**
     * Computed property which will check if
     * the footer is enabled
     *
     * @returns {boolean}
     */
    hasFooter() {
      if (!this.footer) {
        return false;
      }

      return !!this.footer.enabled;
    },
  },

  components: {
    TableBody,
    TableHeader,
    TableFooter,
  },

  mixins: [
    BlockMixin,
  ],
};
