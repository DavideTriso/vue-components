<style lang="stylus">
  @import "~@/assets/stylus/helpers/imports.styl"

  @keyframes timer {
    0% {
      width: 100%
    }
    100% {
      width: 0
    }
  }

  .alert
    +has('timer')
      animation: timer linear
      position: absolute
      top: 0
      left: 0
      height: .25rem
      +variant('primary')
        background: palette('Blue', '900')
      +variant('success')
        background: palette('Green', '900')
      +variant('danger')
        background: palette('Red', '900')
      +variant('warning')
        background: palette('Orange', '900')
      +variant('info')
        background: palette('Light Blue', '900')
      +variant('dark')
        background: palette('White')
</style>
<template>
  <div
    :style="style"
    :class="classNames"
  ></div>
</template>
<script>
  import ElementMixin from '@/mixins/element';
  import ComponentMixin from '@/mixins/component';

  export default {
    /**
     * The name of the component.
     */
    name: 'alert-timer',

    /**
     * The element name of the component.
     */
    element: 'timer',

    /**
     * The mixins used to extend the component.
     */
    mixins: [
      ElementMixin,
      ComponentMixin,
    ],

    /**
     * The properties of the component.
     */
    props: {
      /**
       * The duration of the countdown.
       */
      duration: {
        type: Number,
        required: false,
        default() {
          return 5000;
        },
      },
    },

    /**
     * The data of the component.
     */
    data() {
      return {
        /**
         * The timer.
         */
        timer: null,
      };
    },

    /**
     * Computed properties that are available on the component.
     */
    computed: {
      /**
       * Computed property which will compute the style of the component.
       */
      style() {
        return {
          'animation-duration': `${this.duration}ms`,
        };
      },
    },

    /**
     * The methods that are available on the component.
     */
    methods: {
      /**
       * Method which to start the timer.
       */
      startTimer() {
        this.timer = setTimeout(this.onFinished, this.duration);
      },

      /**
       * Method which will emit the dismiss event.
       */
      onFinished() {
        this.$emit('dismiss');
      },
    },

    /**
     * Method fired when the component has been mounted.
     */
    mounted() {
      this.startTimer();
    },

    /**
     * Method fired before the component will be destroyed.
     */
    beforeDestroy() {
      clearTimeout(this.timer);
    },
  };
</script>
