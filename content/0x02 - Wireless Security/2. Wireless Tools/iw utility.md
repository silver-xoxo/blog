---
publish: true
title: iw utility
created: 2026-10-21T07:23:13.915Z
modified: 2026-10-21T08:39:33.811Z
---

---

> [!note]
> This utility was made for the mac80211 framework.

Detailed information about the NIC \[ Network Interface Card ] device and it's capabilities.

```sh
sudo iw list
```

Scan available Access Points

```sh
sudo iw dev wlan0 scan | grep SSID
```

```sh
sudo iw dev wlan0 scan | egrep "DS Parameter set|SSID:"
```

> This commands includes channel of an access point

Creating a new VIF \[Virtual Interface] with monitor mode

```sh
sudo iw dev wlan0 interface add wlan0mon type monitor
```

> [!note]
> Newly created interfaces are down by default

Bringing the interface up

```sh
sudo ip link set wlan0mon up
```

Inspecting the newly created interface

```sh
sudo iw dev wlan0mon info
```

Check whether card is in monitor mode

```sh
sudo tcpdump -i wlan0mon
```

Delete the interface

```sh
sudo iw dev wlan0mon interface del
```

Display current regulatory region

```sh
sudo iw reg get
```

set the regulatory region

```sh
 iw reg set <COUNTRY>
```

> The country is the [2 letter code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). To make this change permanent, edit **`/etc/default/crda`** file with entry `REGDOMAIN=__`
