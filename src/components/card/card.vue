<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .card
    background-color: palette('White')
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    display: flex
    flex-direction: column
    width: 100%
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
    name: 'card',

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
