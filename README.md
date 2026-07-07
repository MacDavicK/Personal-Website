# kavishjaiswal.com

Personal portfolio of **Kavish Jaiswal**, AI and Full-Stack Software Engineer based in Mumbai.

**Live site:** [kavishjaiswal.com](https://kavishjaiswal.com)

## About

This site showcases my production work: multi-agent AI systems, RAG pipelines, full-stack platforms, and automation workflows, along with verified certifications and my professional experience. It is built to be read by both recruiters and engineers.

## Highlighted projects

- **[AI Market Intelligence Terminal](https://kavishjaiswal.com/projects/ai-market-intelligence-terminal/)** - a multi-LLM council architecture (three analyst models, one synthesizing chairman) delivering daily market intelligence across Indian equities, crypto, US markets, and commodities. FastAPI, n8n, Pinecone, Railway.
- **[Tripti Bungalow](https://kavishjaiswal.com/projects/tripti-bungalow/)** - a property booking and management platform with DPDP Act 2023 compliance built in from day one. React, TypeScript, Node.js, MongoDB.
- **[Flux](https://kavishjaiswal.com/projects/flux/)** - an AI goal management app built as a six-person fellowship capstone, where I served as Technical Lead. LangGraph, Pinecone, FastAPI, React 19.

The full list, including certifications with downloadable PDFs, is on the [live site](https://kavishjaiswal.com).

## Stack

- [Hugo](https://gohugo.io) 0.162.1 (extended) static site generator
- HugoBlox Dev Portfolio theme, Tailwind CSS, Alpine.js
- Deployed on [Vercel](https://vercel.com)

## Repo map

```
content/_index.md              Homepage sections (hero, projects, certs, experience)
content/projects/<slug>/       One folder per project (frontmatter + body)
content/certifications/<slug>/ One folder per certification (+ featured.webp)
data/authors/me.yaml           Identity, experience, education, skills
static/certs/                  Compressed certificate PDFs
static/uploads/resume.pdf      CV served by the Download Resume button
_vendor/                       Vendored Hugo modules (theme code)
```

## Local development

```bash
hugo server
```

Requires Hugo **extended** edition, version 0.162.1 or later. Do not pin 0.162.0: it ships a `dict`/`SetInMap` regression that breaks the theme's link builder. Hugo modules are vendored (`hugo mod vendor`), so builds need no Go toolchain and work on Vercel out of the box.

## Credits

Built on the [HugoBlox Dev Portfolio](https://github.com/HugoBlox/kit) template by Lore Labs, used under the MIT License (retained in [LICENSE.md](LICENSE.md)). All content, project work, and site configuration are my own.
