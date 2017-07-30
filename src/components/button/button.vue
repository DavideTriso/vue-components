<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .button
    border: none
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    color: palette('Black')
    display: inline-block
    font-size: 1rem
    font-weight: 400
    margin: 0
    outline: none
    padding: .75rem 1rem
    position: relative
    text-decoration: none
    transition: background-color $transition_speed ease-in-out
    &:hover
      cursor: pointer

    +variant('primary')
      background-color: palette('Blue')
      color: palette('White')
      &:hover
        background-color: palette('Blue', '600')
    +variant('success')
      background-color: palette('Green')
      color: palette('White')
      &:hover
        background-color: palette('Green', '600')
    +variant('danger')
      background-color: palette('Red')
      color: palette('White')
      &:hover
        background-color: palette('Red', '600')
    +variant('warning')
      background-color: palette('Orange')
      color: palette('White')
      &:hover
        background-color: palette('Orange', '600')
    +variant('info')
      background-color: palette('Light Blue')
      color: palette('White')
      &:hover
        background-color: palette('Light Blue', '600')
    +variant('dark')
      background-color: palette('Blue Grey', '800')
      color: palette('White')
      &:hover
        background-color: palette('Blue Grey', '900')
    +variant('block')
      display: block
      text-align: center
      width: 100%
</style>
<script type="text/jsx">
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'button',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
      SlotMixin,
    ],

    /**
     * The properties of the component
     */
    props: {
      /**
       * The route that's being used.
       */
      route: {
        type: Object,
        required: false,
      },

      /**
       * The url.
       */
      href: {
        type: String,
        required: false,
      },
    },

    /**
     * The methods that are available on the component.
     */
    methods: {
      /**
       * Method which will emit the click event.
       */
      click() {
        this.$emit('click');
      },
    },

    /**
     * Render method which will be used to generate the correct HTML.
     *
     * @returns {XML} The correct HTML.
     */
    render() {
      const content = this.$slots.default ? this.$slots.default : this.content;

      if (this.href) {
        return (
          <a
            class={this.classNames}
            href={this.href}
          >{content}</a>
        );
      }

      if (this.route) {
        return (
          <router-link
            class={this.classNames}
            to={this.route}
          >{content}</router-link>
        );
      }

      return (
        <button
          class={this.classNames}
          on-click={this.click}
        >{content}</button>
      );
    },
  };
</script>
