import BlockMixin from './../../mixins/block';
import * as PanelBody from './body/body.vue';
import * as PanelFooter from './footer/footer.vue';
import * as PanelHeader from './header/header.vue';

export default {
  data() {
    return {
      block: 'panel',
    };
  },

  props: {
    /**
     * The header of the panel
     */
    header: {
      type: Object,
      required: false,
    },

    /**
     * The body of the panel
     */
    body: {
      type: Object,
      required: false,
    },

    /**
     * The footer of the panel
     */
    footer: {
      type: Object,
      required: false,
    },
  },

  components: {
    /**
     * The body of the panel
     */
    PanelBody,

    /**
     * The footer of the panel
     */
    PanelFooter,

    /**
     * The header of the panel
     */
    PanelHeader,
  },

  mixins: [
    BlockMixin,
  ],

  computed: {
    /**
     * Computed property which will check whether
     * there is a header
     *
     * @returns {boolean}
     */
    hasHeader() {
      return !!this.header;
    },

    /**
     * Computed property which will check whether
     * there is a body
     *
     * @returns {boolean}
     */
    hasBody() {
      if (!this.body) {
        return false;
      }

      return this.body.enabled;
    },

    /**
     * Computed property which will check whether
     * there is a footer
     *
     * @returns {boolean}
     */
    hasFooter() {
      if (!this.footer) {
        return false;
      }

      return this.footer.enabled;
    },
  },
};
