// Providers:

var REG_NONE = NewRegistrar('none');    // No registrar.
var DNS_BIND = NewDnsProvider('bind');  // ISC BIND.

// Domains:

var Base_IP = IP( '1.2.3.4')

D('example.com', REG_NONE, DnsProvider(DNS_BIND),
    A('@', Base_IP),
    CNAME("www", '@',  TTL(3600))
);