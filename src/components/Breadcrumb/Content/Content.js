import CSSUtil from './../../../utils/CSSUtil';

export default {
    data () {
        return {
            element: 'content'
        };
    },

    props: {
        /**
         * The text to be displayed
         */
        content: {
            type: String,
            required: true
        },

        /**
         * The variant styling
         */
        variants: {
            type: Array,
            required: false
        },

        /**
         * The contextual styling
         */
        contextualStyle: {
            type: String,
            required: false
        }
    },

    computed: {
        /**
         * The block name from the parent
         *
         * @returns {string}
         */
        block () {
            return this.$parent.block;
        },

        /**
         * Computed property which will output
         * the corrected class names for the content
         *
         * @returns {Array} The corrected class names
         */
        contentClass () {
            var classes = CSSUtil.elementClasses(this.block, this.element, this.variants);

            if (!this.contextualStyle) {
                this.contextualStyle = this.$parent.contextualStyle;
            }

            classes.push(CSSUtil.contextualClass(CSSUtil.has(this.block, this.element), this.contextualStyle));

            return classes;
        }
    }
};
