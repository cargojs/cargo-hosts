var assert = require('assert');

describe('Hosts', function() {
  describe('Instatiation', function () {
    var Hosts = require('./src/Hosts');
    it('Should instatiate without error', function () {
      var hosts = new Hosts;
      assert(hosts instanceof Hosts);
    })
    it('Should have the method add()', function () {
      var hosts = new Hosts;
      assert(typeof hosts.add == 'function');
    })
    it('Should have the method remove()', function () {
      var hosts = new Hosts;
      assert(typeof hosts.remove == 'function');
    })
    it('Should have the method get()', function () {
      var hosts = new Hosts;
      assert(typeof hosts.get == 'function');
    })
    it('Should have the method reset()', function () {
      var hosts = new Hosts;
      assert(typeof hosts.reset == 'function');
    })
  });
  describe('Engine', function () {
    var Hosts = require('./src/Hosts');
    it('Should use a temporary file when debug turned on', function () {
      var hosts = new Hosts({ debug: true });
      assert(hosts.engine.hostsfile != hosts.engine._hostsfile);
    })
    it('Should have the property _hostsfile', function () {
      var hosts = new Hosts();
      assert(typeof hosts.engine._hostsfile == 'string');
    })
    it('Should have the property _tempHostsfile', function () {
      var hosts = new Hosts();
      assert(typeof hosts.engine._tempHostsfile == 'string');
    })
    it('Should have the method add()', function () {
      var hosts = new Hosts;
      assert(typeof hosts.engine.add == 'function');
    })
    it('Should have the method remove()', function () {
      var hosts = new Hosts;
      assert(typeof hosts.engine.remove == 'function');
    })
    it('Should have the method get()', function () {
      var hosts = new Hosts;
      assert(typeof hosts.engine.get == 'function');
    })
    it('Should have the method reset()', function () {
      var hosts = new Hosts;
      assert(typeof hosts.engine.reset == 'function');
    })
    it('Should use a valid hostsfile', function () {
      var hosts = new Hosts;
      var fs = require('fs');
      assert(fs.statSync(hosts.engine.hostsfile).isFile());
    })
  })
});
