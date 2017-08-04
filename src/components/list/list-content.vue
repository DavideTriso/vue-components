<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .list
    +has('content')
      display: inline-flex
      +variant('primary')
        color: palette('Blue')
      +variant('success')
        color: palette('Green')
      +variant('danger')
        color: palette('Red')
      +variant('warning')
        color: palette('Orange')
      +variant('info')
        color: palette('Light Blue')
      +variant('dark')
        color: palette('White')
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
    name: 'list-content',

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
