<style lang="stylus">
  @import "~@/assets/stylus/helpers/imports.styl"

  .alert
    +has('close')
      color: palette('White')
      font-size: 1.5rem
      font-weight: 600
      line-height: 2rem
      position: absolute
      right: 1rem
      top: .75rem
      &:hover
        cursor: pointer
</style>

<template>
  <div
    :class="classNames"
    @click="onClick"
  >
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import ComponentMixin from '@/mixins/component';
  import ElementMixin from '@/mixins/element';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'alert-close',

    /**
     * The element name of the component.
     */
    element: 'close',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],

    /**
     * The methods that are available on the component.
     */
    methods: {
      /**
       * Method which will emit the dismiss event.
       */
      onClick() {
        this.$emit('dismiss');
      },
    },
  };
</script>
