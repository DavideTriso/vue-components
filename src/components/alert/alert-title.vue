<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .alert
    +has('title')
      color: palette('White')
      display: block
      font-size: 1.125rem
      font-weight: 400
      margin: 0 0 0.5rem 0
      padding: 0
</style>
<template>
  <div :class="classNames">
    <slot>
      {{content}}
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
    name: 'alert-title',

    /**
     * The element name of the component.
     */
    element: 'title',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ComponentMixin,
      ElementMixin,
      SlotMixin,
    ],
  };
</script>
