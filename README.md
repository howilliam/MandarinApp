# MandarinApp

Creating a POC app that is AI driven, will try and have a AI tutor too to teach English speakers Mandarin Chinese

User research & Requirements:
- Interview target users proficinecy level
- Define study level
- Map user onboarding journey: onboarding -> daily lesson -> review -> speaking practice 

Will follow a MSCoW approach:
- Must: spaced-repetition vocabulary drills, pronunciation feedback, basic dialogues.
- Should: real-time conversation practice with AI tutor, character writing exercises.
- Could: gamification (badges, leaderboards), offline mode.
- Won’t: live human tutoring (initially).

Technical Feasibility & Prototyping:
-Proof-of-concept for speech-to-text and tone detection.
-Rapid UI mockups (Figma) for core flows.

Architecture:
[Mobile/Web Frontend] ↔ [API Gateway] ↔ [Microservices Layer] ↕ [Data Stores & AI Services]



1. Frontend

Mobile: React Native (iOS & Android share codebase).

Web: React.js (for desktop users).

UI/UX: Responsive, dark/light mode, clear stroke animations for character writing.

2. API Gateway & Auth

Gateway: AWS API Gateway or Kong.

Authentication: JWT via Auth0 or AWS Cognito (email, Google SSO).

3. Microservices

User Service: profile, progress, preferences.

Content Service: lessons, media assets, SRS scheduling.

Practice Service: serves exercises, collects user responses.

AI Service: orchestration layer calling various AI models.

4. Data Storage

Relational: PostgreSQL for user data & progress logs.

NoSQL: DynamoDB or MongoDB for content metadata, conversation history.

Object Storage: S3 (audio files, character stroke GIFs).

5. AI/ML Components

    NLP & Dialogue:

    Base models: OpenAI’s GPT-4 or open-source LLaMA 2 (finetuned).

    Functions: generate dialogue, context-aware prompts, error correction.

    Speech Recognition & Pronunciation:

    ASR: Google Speech-to-Text or Whisper.

    Pronunciation scoring: custom model evaluating Mandarin phonemes & tones.

    Character Writing & Recognition:

    Handwriting capture with canvas + On-device recognition model (TensorFlow Lite).

    Spaced Repetition Scheduler:

    SM-2 algorithm for optimizing review intervals.

6. DevOps & Infrastructure

Containerization: Docker + Kubernetes (EKS/GKE).

CI/CD: GitHub Actions → build → test → canary deploy.

Monitoring: Prometheus/Grafana + Sentry for error tracking.