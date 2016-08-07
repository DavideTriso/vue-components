/* eslint no-console: 0 */
/* ============
 * Debug helper
 * ============
 *
 * Helper for debug messages
 */
import Vue from 'vue';

export default {
  /**
   * Shows a warning message in the console
   *
   * @param message
   * @param element
   */
  warningMessage(message, element) {
    this.message(message, element, 'warn');
  },

  /**
   * Shows a error message in the console
   *
   * @param message
   * @param element
   */
  errorMessage(message, element) {
    this.message(message, element, 'error');
  },

  /**
   * Shows a info message in the console
   *
   * @param message
   * @param element
   */
  infoMessage(message, element) {
    this.message(message, element, 'info');
  },

  /**
   * Shows a debug message in the console
   *
   * @param message
   * @param element
   */
  debugMessage(message, element) {
    this.message(message, element, 'debug');
  },

  /**
   *
   * @param type
   * @param message
   * @param element
   */
  message(message, element, type) {
    if (Vue.config.debug) {
      if (type) {
        console[type](message, element);
      }

      if (!type) {
        console.log(message, element);
      }
    }
  },
};
