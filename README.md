# cargo-hosts

[![Integration Tests](https://travis-ci.org/cargojs/cargo-hosts.svg)](https://travis-ci.org/cargojs/cargo-hosts)
[![Coverage Status](https://coveralls.io/repos/cargojs/cargo-hosts/badge.svg?branch=master&service=github)](https://coveralls.io/github/cargojs/cargo-hosts)

Manipulate your hostsfile using an abstracted api.

## Getting started

The cargo-hosts module

```javascript
var Hosts = require('cargo-hosts');
var hosts = new Hosts();

// Add a domain to the hostsfile
hosts.add('127.0.100.1', '1.example.com');
hosts.add('127.0.100.2', '2.example.com');

// Remove a domain from the hostsfile
hosts.remove('2.example.com');

// Reset the hostsfile to it's initial state (removes any hosts added)
hosts.reset();
```

## More advanced usage

Using debug will create a copy of the hostsfile to write changes to instead

```javascript
var Hosts = require('cargo-hosts');
var hosts = new Hosts({
  debug: true
});
```

## Compatability

cargo-hosts is compatible with the following operating systems

- Linux

Planned future compatibility with the following operating systems

- OS X
- Windows (XP Onwards)
