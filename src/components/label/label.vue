<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .label
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    color: palette('Black')
    display: inline-flex
    font-size: .875rem
    font-weight: 300
    margin: 0
    padding: 0.25rem 0.375rem
    transition: background-color $transition_speed ease-in-out, color $transition_speed ease-in-out
    word-break: break-all
    +variant('primary')
      background-color: palette('Blue')
      color: palette('White')
    +variant('success')
      background-color: palette('Green')
      color: palette('White')
    +variant('danger')
      background-color: palette('Red')
      color: palette('White')
    +variant('warning')
      background-color: palette('Orange')
      color: palette('White')
    +variant('info')
      background-color: palette('Light Blue')
      color: palette('White')
    +variant('dark')
      background-color: palette('Blue Grey', '800')
      color: palette('White')
</style>

<template>
  <span :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </span>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'label',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      BlockMixin,
      ComponentMixin,
      SlotMixin,
    ],
  };
</script>
