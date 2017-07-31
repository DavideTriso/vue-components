<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .drawer
    +has('body')
      background-color: palette('White')
      flex: 1
      height: calc(100vh - 3.0625rem - 4rem)
      overflow-y: auto
</style>

<template>
  <div :class="classNames">
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
    name: 'drawer-body',

    /**
     * The element name of the component.
     */
    element: 'body',

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
