import BlockMixin from './../../mixins/block';
import SlotMixin from './../../mixins/slot';
import * as PanelBody from './body/body.vue';
import * as PanelFooter from './footer/footer.vue';
import * as PanelHeading from './heading/heading.vue';

export default {
  mixins: [
    BlockMixin,
    SlotMixin,
  ],

  data() {
    return {
      block: 'panel',
    };
  },

  props: {
    /**
     * The heading of the panel
     */
    heading: {
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
     * The heading of the panel
     */
    PanelHeading,
  },

  computed: {
    /**
     * Computed property which will check whether
     * there is a heading
     *
     * @returns {boolean}
     */
    hasHeading() {
      return !!this.heading;
    },

    /**
     * Computed property which will check whether
     * there is a body
     *
     * @returns {boolean}
     */
    hasBody() {
      return !!this.body;
    },

    /**
     * Computed property which will check whether
     * there is a footer
     *
     * @returns {boolean}
     */
    hasFooter() {
      return !!this.footer;
    },
  },
};
