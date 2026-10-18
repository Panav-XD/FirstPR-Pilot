# FirstPR Pilot

A verified first-contribution guide for open-source newcomers (Hacktoberfest Hack Day Bengaluru 2026, Track 2, problem statement O3: Trustworthy and Verifiable AI).

**Why:** newcomers freeze at "where do I start?", and AI guidance that invents file names makes it worse.
**For whom:** first-time contributors, such as Hacktoberfest participants.

## How it works
1. Paste a public GitHub repo. The app reads its file tree, README and open `good first issue` issues through the GitHub API.
2. An open-weight model (served by Groq) drafts a step-by-step plan for one issue.
3. A **verifier** checks every file the plan names against the real repo tree. Files that do not exist are flagged red.
4. If the first draft invented files, the model is shown the exact bad paths and rewrites the plan once. The UI reports what was caught.

## Open-source pieces
Open-weight models (`gpt-oss-120b`, `gpt-oss-20b`, Llama 3.3 70B, Llama 3.1 8B) hosted on Groq, the public GitHub API, Vite, Vercel serverless functions. MIT licensed.

## Run and deploy
1. Create a free key at console.groq.com and a GitHub token with no permissions (Settings > Developer settings).
2. Push this folder to a public GitHub repo, then import it in Vercel.
3. In Vercel project settings add `GROQ_API_KEY` and `GITHUB_TOKEN`, then redeploy.
4. Local run: copy `.env.example` to `.env`, then `npm install` and `npm start`.
5. Tests: `npm test`.

## Known limits
- Very large repos (more than 100,000 files) have truncated file trees; avoid them for demos.
- Groq's free tier is rate limited, so results are cached on the server and in the browser.
- Only file references are machine-verified. Commands and explanations still need human judgement.
