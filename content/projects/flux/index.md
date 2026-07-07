---
title: "Flux - AI Goal Management"
date: 2026-01-29
summary: "AI-powered goal and task management app; Technical Lead on a six-person fellowship capstone presented at demo day in Bengaluru"
tags:
  - AI Systems
  - Full-Stack
tech_stack:
  - LangGraph
  - Pinecone
  - FastAPI
  - Python
  - Supabase
  - React 19
  - TanStack Start
  - TypeScript
links:
  - type: github
    url: https://github.com/MacDavicK/Flux-Team-8
    label: Code
  - type: live
    url: https://flux-pitch.vercel.app/
    label: Pitch
featured: true
status: "Presented at Demo Day"
role: "Technical Lead & Full-Stack Engineer"
team_size: 6
highlights:
  - "Designed the full-stack monorepo architecture: React 19 + TanStack Start + FastAPI + LangGraph"
  - "Implemented the GoalPlanner, Scheduler, and Classifier agents from scratch"
  - "End-to-end RAG pipeline with source citations surfaced in the UI"
  - "Drove all 24 integration tests to green"
---

Flux is an AI-powered goal and task management application built as the capstone of the Outskill AI Engineering Fellowship (Cohort 3, Team 8), where I served as Technical Lead.

## Technical contributions

I designed the monorepo architecture and implemented three agents from scratch: the GoalPlannerAgent, Scheduler Agent, and Classifier Agent, orchestrated with LangGraph. The RAG pipeline runs on Pinecone with text-embedding-3-small, and source citations are surfaced directly in the UI.

## Debugging under deadline

Drove all 24 integration tests to green by diagnosing JWT HS256/ES256 mismatches, auth sync gaps, and route contract divergences. Resolved a critical silent failure where VITE_USE_MOCK=true masked every backend call. Managed the team's Git branch strategy using archival tags to preserve contribution history.
