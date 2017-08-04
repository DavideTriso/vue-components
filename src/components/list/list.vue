<style lang="stylus">
  @import '~@/assets/stylus/helpers/imports.styl'

  .list
    border-radius: .125rem
    box-shadow: $box_shadow_minimum
    display: flex
    flex-direction: column
    list-style: none
    margin: 0
    padding: 0
    width: 100%
</style>

<template>
  <ul :class="classNames">
    <slot>
      {{ content }}
    </slot>
  </ul>
</template>

<script>
  import BlockMixin from '@/mixins/block';
  import ComponentMixin from '@/mixins/component';
  import SlotMixin from '@/mixins/slot';

  export default {
    /**
     * The name of the component.
     */
    name: 'list',

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
