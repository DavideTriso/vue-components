import BlockMixin from './../../mixins/block';
import * as VButton from './../button/button.vue';
import * as DropdownMenu from './menu/menu.vue';

export default {
  data() {
    const button = {
      variants: [
        'block',
        'dropdown',
      ],
      action: () => {
        this.toggle();
      },
    };

    return {
      /**
       * Block name used for BEM
       */
      block: 'dropdown',

      /**
       * Dropdown button
       */
      button,

      /**
       * If the dropdown is collapsed
       */
      isCollapsed: false,
    };
  },

  props: {
    /**
     * Dropdown placeholder
     */
    placeholder: {
      type: String,
      required: true,
    },

    /**
     * Dropdown items
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * Dropdown chosen item
     */
    chosen: {
      required: false,
    },

    /**
     * The field identifier
     */
    fieldName: {
      type: String,
      required: false,
    },
  },

  components: {
    VButton,
    DropdownMenu,
  },

  mixins: [
    BlockMixin,
  ],

  methods: {
    toggle() {
      this.isCollapsed = !this.isCollapsed;
    },
  },

  computed: {
    /**
     * Button icon
     *
     * @returns {Object} Button icon
     */
    buttonIcon() {
      const icon = this.isCollapsed ? 'menu-up' : 'menu-down';

      return {
        variants: [
          icon,
        ],
      };
    },

    /**
     * Button content
     *
     * @returns {string} The button content
     */
    buttonContent() {
      if (typeof this.chosen === 'string') {
        return this.chosen;
      }

      if (this.chosen && this.chosen[this.fieldName]) {
        return this.chosen[this.fieldName];
      }

      return this.placeholder;
    },
  },
};
