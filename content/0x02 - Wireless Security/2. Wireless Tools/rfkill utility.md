---
publish: true
title: rfkill utility
created: 2026-10-21T07:39:10.005Z
modified: 2026-10-21T09:23:55.098Z
---

---

The purpose of this utility is to enable or disable wireless devices.

> [!Note]
> We can use it for Wi-Fi, as well as for Bluetooth, mobile broadband such as 4G/LTE, 5G, WiMax, GPS, FM, NFC, and any other radio.

Display all WI-FI and Bluetooth Devices

```sh
sudo rfkill list
```

> rfkill can only change soft blocks.

Disable a device

```sh
sudo rfkill block id
```

> Id in the above command is the number 0,1 etc.

Disable all devices

```sh
sudo rfkill block all
```

Re-enable a device

```sh
sudo rfkill unblock 0
```
