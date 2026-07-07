---
title: "AI Market Intelligence Terminal"
date: 2026-02-01
summary: "Multi-LLM council architecture delivering daily market intelligence across Indian equities, crypto, US markets, and commodities"
tags:
  - AI Systems
  - Automation
tech_stack:
  - n8n
  - FastAPI
  - Python
  - Railway
  - OpenRouter
  - Pinecone
  - Next.js
  - Supabase
links:
  - type: github
    url: https://github.com/MacDavicK/Market-Analysis-Tool
    label: Code
featured: true
status: "In Development"
role: "Solo Builder"
team_size: 1
highlights:
  - "LLM Council: three analyst models with Claude Opus as synthesizing chairman"
  - "Anonymised peer review between models to counter recency bias"
  - "Cascading n8n merge strategy working around the 10-input node limit"
  - "Daily reports as formatted HTML email and Discord embeds"
---

A solo-built market intelligence platform targeting commercial deployment across Indian equities, global crypto, US markets, and commodities, priced in USD and INR.

## Architecture

**Layer 1 - Data aggregation.** Live market data from CoinGecko, Alpha Vantage, NSE Direct, and GoldAPI flows through n8n using a cascading merge strategy designed around n8n's 10-input node limit.

**Layer 2 - Parsing and delivery.** An LLM-based parser via OpenRouter applies strict anti-hallucination guardrails, then delivers daily reports as formatted HTML email and Discord embeds through a custom markdown-to-HTML renderer.

**Layer 3 - The LLM Council (live).** GPT-4o-mini, Gemini Flash, and Claude Sonnet act as independent analysts, with Claude Opus as chairman synthesising a final report through anonymised peer review. The FastAPI backend is containerised on Railway and called from n8n via authenticated webhooks.

**In progress.** Layer 4: RAG pipeline on Pinecone. Layer 5: conversational Next.js frontend with OpenAI Whisper STT/TTS, and multi-user scaling on Supabase.
