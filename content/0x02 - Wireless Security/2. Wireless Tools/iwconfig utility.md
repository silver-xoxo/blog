---
publish: true
title: iwconfig utility
description: These notes are about a utility named iwconfig
created: 2026-10-24T04:29:19.822Z
modified: 2026-10-24T04:45:26.793Z
tags:
  - "#pokemon"
  - "#sunlight"
  - AD
---

---

> [!note]
> This utility and others were made for the ieee80211 framework.

| **Utility** | **Purpose**                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------- |
| iwconfig    | manipulates the basic wireless parameters: change modes, set channels, and keys.            |
| iwlist      | allows for the initiation of scanning, listing frequencies, bit rates, and encryption keys. |
| iwspy       | provides per-node link quality (not often implemented by drivers).                          |
| iwpriv      | allows for the manipulation of the Wireless Extensions specific to a driver.                |

Displays channel numbers and corresponding frequencies detected by NIC

```sh
sudo iwlist wlan0 frequency
```

> This command output will vary based on geography.
