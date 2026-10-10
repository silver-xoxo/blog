---
publish: true
title: NIC Drivers & Tools
created: 2026-10-07T04:28:07.311Z
modified: 2026-10-10T04:19:13.796Z
---

---

# Drivers

Display the list of all wireless network interfaces currently recognized by your system, along with their associated drivers and chipsets.

```powershell
printf("pokemon")
```

see connected USB device and detailed information of each USB device.

```bash
sudo lsusb -vv
```

> [!important] Windows vs Linux Drivers
>
> In Windows, you need the specific driver for each different piece of hardware connected to the system whereas in Linux, a single driver can be used for multiple devices an d multiple similar chipsets.

```bash
sudo modinfo driver_name
```

see loaded modules by the particular driver

```bash
lsmod | grep driver_name
```

---

# Tools

Install the wireless tools

```bash
sudo apt-get install wireless-tools
```
