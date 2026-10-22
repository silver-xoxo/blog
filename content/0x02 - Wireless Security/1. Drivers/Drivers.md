---
publish: true
title: Drivers
created: 2026-10-21T04:01:58.725Z
modified: 2026-10-21T07:21:48.646Z
---

---

When a device is plugged in, Linux automatically try to upload the driver.

List Device drivers

```sh
sudo airmon-ng
```

List system USB devices with detailed information.

```sh
sudo lsusb -vv
```

Display parameters of Wireless utility driver

```sh
sudo modinfo driver_name
```

> Put your wireless driver name instead of '`driver_name`'.

Modifying a parameter's value

```sh
sudo modprobe driver_name parameter=value
```

> [!important]
> Linux allow users to set and change parameters for modules sing **`/etc/modprobe.d`**. This directory can also be used to blacklist modules.

List all loaded modules alongside dependencies

```sh
lsmod
```

unloading a module

```
sudo rmmod module_name
```

> Put your module name instead of '`module_name`'.

> [!important]
> you can use insmod to manually load a module from a specific path; modprobe loads a module from the kernel modules directory. Example: `insmod modue_name`.
