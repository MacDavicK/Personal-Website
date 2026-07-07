---
title: ''
summary: ''
date: 2026-07-07
type: landing

sections:
  - block: dev-hero
    id: hero
    content:
      username: me
      greeting: "Hi, I'm"
      show_status: true
      show_scroll_indicator: true
      typewriter:
        enable: true
        prefix: "I build"
        strings:
          - "multi-agent AI systems"
          - "RAG pipelines"
          - "full-stack web apps"
          - "automation workflows"
        type_speed: 70
        delete_speed: 40
        pause_time: 2500
      cta_buttons:
        - text: View My Work
          url: "#projects"
          icon: arrow-down
        - text: Get In Touch
          url: "#contact"
          icon: envelope
    design:
      style: centered
      avatar_shape: circle
      animations: true
      background:
        color:
          light: "#fafafa"
          dark: "#0a0a0f"
      spacing:
        padding: ["6rem", "0", "4rem", "0"]

  - block: portfolio
    id: projects
    content:
      title: "Projects"
      subtitle: "Production systems, AI architectures, and tools I have built"
      count: 0
      filters:
        folders:
          - projects
      buttons:
        - name: All
          tag: '*'
        - name: AI Systems
          tag: AI Systems
        - name: Full-Stack
          tag: Full-Stack
        - name: Automation
          tag: Automation
      default_button_index: 0
    design:
      columns: 3
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: portfolio
    id: certifications
    content:
      title: "Certifications"
      subtitle: "Completed programs, each linked to its verified certificate"
      count: 0
      filters:
        folders:
          - certifications
      buttons:
        - name: All
          tag: '*'
      default_button_index: 0
    design:
      columns: 3
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: tech-stack
    id: skills
    content:
      title: "Tech Stack"
      subtitle: "Technologies I use to build and ship"
      categories:
        - name: Languages
          items:
            - name: Python
              icon: devicon/python
            - name: TypeScript
              icon: devicon/typescript
            - name: JavaScript
              icon: devicon/javascript
        - name: Frontend
          items:
            - name: React
              icon: devicon/react
            - name: Next.js
              icon: devicon/nextjs
            - name: Tailwind CSS
              icon: devicon/tailwindcss
        - name: Backend & Data
          items:
            - name: Node.js
              icon: devicon/nodejs
            - name: FastAPI
              icon: devicon/fastapi
            - name: MongoDB
              icon: devicon/mongodb
            - name: Docker
              icon: devicon/docker
        - name: AI & Automation
          items:
            - name: TensorFlow
              icon: devicon/tensorflow
            - name: LangChain
              icon: link
            - name: Pinecone
              icon: circle-stack
            - name: n8n
              icon: bolt
    design:
      style: grid
      show_levels: false
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: resume-experience
    id: experience
    content:
      title: Experience
      date_format: Jan 2006
      items:
        - title: AI Engineering Fellow (Cohort 3)
          company: Outskill
          company_url: 'https://www.outskill.com'
          company_logo: ''
          location: Remote / Bengaluru, India
          date_start: '2025-09-01'
          date_end: '2026-03-28'
          description: |2-
            * Built and deployed 7+ LLM applications across NLP, RAG, agentic AI, and multimodal workflows
            * Implemented RAG systems with OpenAI and Sentence Transformer embeddings on Qdrant and FAISS
            * Designed conversational agents with LangChain, LlamaIndex, CrewAI, phiData, and Haystack
            * Technical Lead on Flux, the team capstone presented at demo day in Bengaluru
        - title: Lead Software Engineer
          company: Rupee Heroes (NextGen Fintech Pvt Ltd)
          company_url: ''
          company_logo: ''
          location: Mumbai, India
          date_start: '2024-09-01'
          date_end: '2025-08-31'
          description: |2-
            * Led the complete revamp of a fintech lending platform, owning technical strategy and delivery
            * Built the React frontend with a dynamic product routing system, improving navigation and retention
            * Ran MongoDB services on AWS with 99.9% uptime; integrated Search Console and MetaPixel analytics
            * Cut response times 35% through database indexing and query optimization
        - title: Software Engineer
          company: ADATE Pvt Ltd
          company_url: 'https://adatte.in/'
          company_logo: ''
          location: India
          date_start: '2022-12-01'
          date_end: '2024-06-30'
          description: |2-
            * Maintained and extended the company's recycling information platform
            * Built features showcasing e-waste recycling processes to prospective clients
            * Improved the vendor engagement pipeline, increasing B2B recycling leads
    design:
      columns: '1'
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: collection
    id: blog
    content:
      title: Recent Posts
      subtitle: 'Notes on AI engineering, automation, and building in production'
      text: ''
      filters:
        folders:
          - blog
        exclude_featured: false
      count: 3
      order: desc
    design:
      view: card
      columns: 3
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: contact-info
    id: contact
    content:
      title: Get In Touch
      subtitle: "Open to full-time roles and freelance work"
      text: |-
        I am based in Mumbai and open to software and AI engineering roles in
        India, Malaysia, and Singapore, as well as freelance projects. If you
        want to discuss a role or a build, reach out.
      email: jkavish20@gmail.com
      autolink: true
    design:
      columns: '1'
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  - block: cta-card
    content:
      title: "Open to Opportunities"
      text: |-
        I am currently looking for **software engineering** and **AI engineering** roles,
        with a track record leading full-stack and agentic AI projects to production.
      button:
        text: 'Download Resume'
        url: uploads/resume.pdf
        new_tab: true
    design:
      card:
        css_class: 'bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-200 dark:from-primary-600 dark:via-primary-700 dark:to-secondary-700'
        text_color: dark
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "6rem", "0"]
---
