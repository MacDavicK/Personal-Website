---
title: "Tripti Bungalow - Property Booking Platform"
date: 2026-03-01
summary: "End-to-end vacation property booking and management platform with DPDP Act 2023 compliance built in from day one"
tags:
  - Full-Stack
tech_stack:
  - React 18
  - TypeScript
  - Node.js
  - Express
  - MongoDB
  - TanStack Query
  - Tailwind CSS
  - Google Calendar API
links:
  - type: github
    url: https://github.com/MacDavicK/TriptiBunglow_Website
    label: Code
featured: true
status: "Built - launch pending GST activation"
role: "Solo Builder"
team_size: 1
highlights:
  - "DPDP Act 2023 compliance: explicit consent, data minimization, 30-day TTL deletion, audit trails"
  - "Custom AdminCalendar built for an elderly low-vision administrator"
  - "Availability conflict prevention with UPI payment flow and deposit tracking"
  - "Razorpay integration scoped and preserved for one-switch reactivation"
---

A custom booking and management platform for two residential bungalows in Thane, Maharashtra.

## What it does

The customer-facing frontend offers a live availability calendar, dynamic pricing calculator, and multi-bungalow selection for events. The backend (Node/Express/TypeScript/MongoDB) handles availability conflict prevention, a manual UPI payment flow, security deposit tracking, AES-encrypted Aadhaar collection, audit logging, and role-based access control. Google Calendar API sync gives the owner remote visibility; Resend handles transactional email.

## Built for a real user

The separate mobile-first admin dashboard was designed for an elderly low-vision user: large fonts, large tap targets, and a custom-built AdminCalendar component after react-day-picker failed compatibility testing.

## Compliance first

DPDP Act 2023 requirements were implemented from day one rather than retrofitted: explicit consent capture, data minimization, TTL-based automated deletion at 30 days, and full audit trails. Razorpay integration is scoped and intentionally disabled pending GST registration, designed for reactivation without rework.
