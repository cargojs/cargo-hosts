"use strict";

var os = require('os');

class Hosts {
  /**
   * Load the os specific engine from engines directory
   */
  constructor (options) {
    try {
      this.engine = require('./engines/' + os.type() + '.js');
    } catch (e) {
      throw e
      throw new Error('Could not find an engine for ' + os.type() + ' : ' + './engines/' + os.type() + '.js');
    }

    this.engine = new this.engine(options);
  }
  /**
   * Add a domain to the hostsfile
   * @param {[type]} ip_addr  [description]
   * @param {[type]} hostname [description]
   */
  add (ip_addr, hostname) {
    this.engine.add(ip_addr, hostname);
  }
  /**
   * Remove a domain from the list
   * @param  {string} hostname A hostsname to be removed from the hostsfile
   */
  remove (hostname) {
    this.engine.remove(hostname);
  }
  /**
   * Get the hostnames associated with an ip address
   * @param  {string} ip_addr IPv4 / v6 address
   * @return {object|array}   The hostnames attached to the given IP address
   */
  get (ip_addr) {
    return this.engine.get(ip_addr);
  }
  /**
   * Resets the hostsfile to it's initial state
   */
  reset () {
    this.engine.reset();
  }
};

module.exports = Hosts;
