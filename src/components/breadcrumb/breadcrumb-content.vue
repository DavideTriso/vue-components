<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .breadcrumb
    +has('content')
      color: palette('Grey')
      display: inline-block
      vertical-align: middle
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
    name: 'breadcrumb-content',

    /**
     * The element name of the component.
     */
    element: 'content',

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
