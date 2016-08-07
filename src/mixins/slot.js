/* eslint no-underscore-dangle: 0 */

export default {
  methods: {
    /**
     * Method used to check if the component has a slot
     *
     * @param slot The name of the slot
     * @returns {boolean} If the slot exists
     */
    hasSlot(slot) {
      if (!this._slotContents) {
        return false;
      }

      return !!this._slotContents[slot];
    },
  },
};
