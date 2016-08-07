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
      /**
       * Block name used for BEM
       */
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
      required: false,
    },

    /**
     * The footer of the panel
     */
    footer: {
      required: false,
    },
  },

  components: {
    PanelBody,
    PanelFooter,
    PanelHeading,
  },

  computed: {
    /**
     * Computed property which will output
     * whether the panel has an heading
     *
     * @returns {boolean} If the panel has an heading
     */
    hasHeading() {
      return this.heading || this.hasSlot('heading');
    },

    /**
     * Computed property which will output
     * whether the panel has a body
     *
     * @returns {boolean} If panel has a body
     */
    hasBody() {
      return this.body || this.hasSlot('body');
    },

    /**
     * Computed property which will output
     * whether the panel has a footer
     *
     * @returns {boolean} If the panel has a footer
     */
    hasFooter() {
      return this.footer || this.hasSlot('footer');
    },
  },
};
