+++
date = '2025-09-28T10:17:58-04:00'
draft = true
title = 'En'
+++

# The Complete Guide to Upgrading to Windows 11

## Introduction
Microsoft Windows 11, released in October 2021, introduces a redesigned user interface, enhanced security features, and improved performance optimizations. However, unlike previous upgrades (e.g., from Windows 7/8 to Windows 10), the migration to Windows 11 is bound by stricter hardware and firmware requirements, particularly regarding UEFI, Secure Boot, and TPM 2.0.
This guide provides a step-by-step academic and technical framework for safely upgrading from Windows 10 (or earlier supported editions) to Windows 11. It covers system compatibility analysis, disk partitioning checks, TPM activation, restore point creation, upgrade execution (via Windows Update or ISO), and contingency planning.

## Step 1 – System Compatibility and Requirements
Windows 11 has a defined set of minimum system requirements. These must be validated prior to installation:
Minimum Hardware Requirements:
•	Processor (CPU): 1 GHz or faster, 64-bit, dual-core or more. Only CPUs included in Microsoft’s Windows 11 Processor Compatibility List are officially supported.
•	Memory (RAM): Minimum 4 GB (8 GB or higher recommended for stable performance).
•	Storage: At least 64 GB of free storage (128 GB recommended).
•	Firmware: UEFI firmware with Secure Boot capability.
•	Trusted Platform Module (TPM): Version 2.0 mandatory.
•	Graphics Processor: DirectX 12 compatible with WDDM 2.0 driver support.
•	Display: 9-inch diagonal or larger, with a minimum resolution of 1280 × 720 pixels.
Method of Compatibility Verification:
1.	Download the Microsoft PC Health Check App: (https://aka.ms/GetPCHealthCheckApp )
2.	Install the application and execute a system scan by selecting “Check Now”.
o	Green Checkmark: The system fulfills all requirements.
o	Red Cross: One or more requirements are unmet; the report specifies the deficiency.
Note: Users may also employ third-party tools such as WhyNotWin11 for more granular diagnostic insights.

## Step 2 – Disk Partition Style (MBR vs GPT)
Windows 11 requires installation on a disk utilizing the GUID Partition Table (GPT) in conjunction with UEFI firmware. Systems configured with MBR (Master Boot Record) in Legacy BIOS mode must be converted.
Verification Procedure:
1.	Press Win + R, type diskmgmt.msc, and press Enter to open Disk Management.
2.	Right-click the system disk (usually Disk 0), then select Properties.
3.	Navigate to the Volumes tab, and examine Partition Style:
o	Master Boot Record (MBR): Conversion required.
o	GUID Partition Table (GPT): Already compliant.
Conversion Process (Non-Destructive):
1.	Perform a full system backup as a precautionary measure.
2.	Open Command Prompt with Administrator privileges.
3.	Execute sequentially:
4.	mbr2gpt /validate /allowFullOS
5.	mbr2gpt /convert /allowFullOS
6.	Restart the computer and enter the BIOS/UEFI interface.
7.	Modify the boot configuration from Legacy BIOS to UEFI mode.

## Step 3 – Trusted Platform Module (TPM) 2.0
Windows 11 mandates the presence and activation of TPM 2.0 for cryptographic and security purposes.
Verification Procedure:
1.	Press Win + R, input tpm.msc, and press Enter.
2.	Review the TPM Management window:
o	Status: Should read “The TPM is ready for use”.
o	Specification Version: Must indicate 2.0.
If TPM is missing or disabled:
Enabling TPM in BIOS/UEFI:
1.	Restart the computer and press the manufacturer-specific key (commonly DEL, F2, or F10) to access BIOS/UEFI settings.
2.	Navigate to Security or Advanced Configuration menus.
o	For Intel systems: Enable Intel Platform Trust Technology (PTT).
o	For AMD systems: Enable AMD Firmware TPM (fTPM).
3.	Save changes and exit.

## Step 4 – System Restore Point (Rollback Preparation)
Prior to performing the upgrade, it is academically and operationally prudent to create a System Restore Point to mitigate risks.
Creation Procedure:
1.	Press Win + S and search for “Create a restore point”.
2.	Select the system drive (C:), click Configure, and enable System Protection.
3.	Click Create, assign a descriptive label (e.g., “Pre-Windows 11 Upgrade”).
Recovery Utilization:
If system instability occurs post-upgrade:
1.	Restart the PC while holding Shift + Restart to enter Windows Recovery Environment (WinRE).
2.	Navigate to Troubleshoot → Advanced Options → System Restore.
3.	Select the previously created restore point and proceed.

## Step 5 – Upgrade Methods
There are two primary pathways to upgrade to Windows 11.
Method A – Windows Update (Recommended):
1.	Navigate to Settings → Update & Security → Windows Update.
2.	If the system is eligible, an upgrade banner for Windows 11 will appear.
3.	Select Download and Install.
4.	The system will download the necessary files, perform multiple restarts, and finalize installation.
Method B – ISO File Installation:
1.	Download the official Windows 11 ISO from Microsoft’s website.
2.	Right-click the ISO file → select Mount.
3.	Open the mounted virtual drive and run setup.exe.
4.	During setup, select an installation preference:
o	Keep personal files and apps: Smooth upgrade.
o	Keep personal files only: Applications will be removed.
o	Nothing: Performs a clean installation.
5.	Follow the on-screen instructions; system restarts will occur until Windows 11 boots.

## Step 6 – Post-Upgrade Verification
Upon successful upgrade, the following academic verification steps must be completed:
•	Device Drivers: Open Device Manager and confirm absence of warnings or errors.
•	Windows Updates: Run Windows Update to obtain the latest patches and fixes.
•	System Activation: Verify activation under Settings → System → Activation.
•	Performance Optimization: Remove unnecessary software via Settings → Apps → Installed Apps.
•	Security Hardening: Optionally apply privacy tools (e.g., O&O ShutUp10++) to manage telemetry and advertisements.

## Step 7 – Rollback Options
In the event of user dissatisfaction or compatibility issues, Windows provides rollback functionality:
•	Within 10 Days:
o	Navigate to Settings → Recovery → Go back to Windows 10.
o	Follow the guided rollback process.
•	After 10 Days:
o	Automatic rollback option expires.
o	Reinstallation of Windows 10 must be performed manually using installation media.
