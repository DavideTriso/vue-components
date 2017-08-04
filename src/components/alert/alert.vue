<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .alert
    background-color: palette('White')
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    display: flex
    flex-direction: column
    font-weight: 300
    margin-top: 1rem
    padding: 1rem
    position: relative
    transition: background-color $transition_speed ease-in-out
    width: 100%
    &:first-child
      margin-top: 0
    +variant('primary')
      background-color: palette('Blue')
    +variant('success')
      background-color: palette('Green')
    +variant('danger')
      background-color: palette('Red')
    +variant('warning')
      background-color: palette('Orange')
    +variant('info')
      background-color: palette('Light Blue')
    +variant('dark')
      background-color: palette('Blue Grey', '800')
</style>

<template>
  <div :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'alert',

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
