"use strict";

/**
 * The base hostsfile engine
 * @class BaseEngine
 */
class BaseEngine {
  /**
   * Instantiate the base class and extention class
   */
  constructor(options) {
    options = (options) ? options : {};
    this.init();
    this.hosts = {};

    this.hostsfile = (options.debug) ?  this._tempHostsfile : this._hostsfile;
  }
  /**
   * Add a hostname to a given ip address in the hostsfile registry
   * @param {string} ip_addr  IPv4 / v6 address
   * @param {string} hostname Full hostname to add against given IP address
   */
  add(ip_addr, hostname) {
    if (!this.hosts[ip_addr]) {
      this.hosts[ip_addr] = [];
    }
    this.hosts[ip_addr].push(hostname);
    this._add(ip_addr, hostname);
  }
  /**
   * Remove a given hostname from the hostsfile
   * @param  {string} hostname Full hostname to remove from hostsfile
   */
  remove(hostname) {
    for (var key in this._hosts) {
      if (this._hosts.hasOwnProperty(key)) {
        var obj = this.hosts[key];
        if (obj.indexOf(hostname) != -1) {
          delete this.hosts[key][obj.indexOf(hostname)];
        }
      }
    }
    this._remove(hostname);
  }
  /**
   * Returns all, or a given an IP adress a section of the hostsfile
   * @param  {string} ip_addr IPv4 / v6 address
   * @return {object|array}   The hostnames or full hostsfile
   */
  get(ip_addr) {
    return (ip_addr) ? this.hosts[ip_addr] : this._hosts;
  }
  /**
   * Resets the hostsfile to initial state
   */
  reset() {
    this._hosts = {};
  }
}

module.exports = BaseEngine;
