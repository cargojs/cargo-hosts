"use strict";

var Base = require('./Base')

/**
 * The LinuxEngine hostsfile engine
 */
class LinuxEngine extends Base {
  /**
   * Initialise engine specific properties
   */
  init (options) {
    this._hostsfile = '/etc/hosts';
    this._tempHostsfile = '/tmp/cargo-hosts';
  }
  /**
   * Engine specific add method for adding to the hostsfile
   * @param {string} ip_addr  IPv4 / v6 address
   * @param {string} hostname Hostname to be added to the hostsfile
   */
  _add (ip_addr, hostname) {

  }
  /**
   * Engine specific remove method for adding to the hostsfile
   * @param  {string} hostname Hostname to be removed from hostsfile
   */
  _remove (hostname) {

  }
};

module.exports = LinuxEngine;
