import { ResumeExperience } from "../types"

export const experiences: ResumeExperience[] = [
  {
    positionTitle: "Senior Full-Stack Engineer, AI",
    companyName: "Hall of Fame Bets",
    companyURL: "https://hofbets.com/",
    startDate: "March 2023",
    endDate: "Present",
    highlights: [
      "As the first engineering hire, built and launched the TypeScript/React Native app that drives 80% of yearly revenue, added the Stripe web-to-app subscription funnel, and cut API latency 40% with Redis caching",
      "Led the build of HOF's AI betting assistant: a Python/Django LLM agent that answers users' stats questions and returns structured bet analysis from our data pipeline, using tool calling over 30+ tools (also served over MCP)",
      "Added guardrails that check each answer's numbers against source data and block bets on injured players; turned user and staff feedback into fixes, each backed by a regression test",
      "Built the eval system that gates each release (250+ regression cases plus LLM-as-judge) and used it to pick between OpenAI, Anthropic and Gemini models; held median responses under 10s with prompt caching",
      "Shipped AI game previews, recaps and live insights across 6 sports, using RAG to retrieve game context and a multi-agent pipeline with hallucination checks; a 172-game eval raised clean previews from 73% to 98%",
      "Tech stack: Python, Django, TypeScript, React Native, Postgres, Redis, OpenAI/Anthropic/Gemini APIs, MCP",
    ],
  },
  {
    positionTitle: "Co-founder & CTO",
    companyName: "FanZone",
    companyURL: "",
    startDate: "March 2021",
    endDate: "March 2023",
    highlights: [
      "Designed, architected and built the iOS and web apps for a platform where athletes sell subscription content, using SwiftUI and Next.js",
      "Created Node.js serverless functions on Google Cloud for Stripe webhooks and payment APIs, cutting payment failures 15%",
      "Reduced video bandwidth consumption by 80% by caching videos on device",
      "Implemented one-to-many live broadcasting with real-time chat using Agora RTC and Firebase",
      "Bootstrapped to $20K in annual revenue and onboarded over 100 college and pro athletes",
      "Tech stack: SwiftUI, React, Next.js, MUI, Tailwind CSS, Firebase, Node.js, Stripe, Twilio, Meilisearch, Agora",
    ],
  },
  {
    positionTitle: "Full-Stack iOS Developer",
    companyName: "Yoke Gaming",
    companyURL: "",
    startDate: "September 2020",
    endDate: "March 2021",
    highlights: [
      "Led frontend for a SwiftUI/Firebase app where fans play video games with athletes over 1:1 video; it reached 60K+ users and #13 in its App Store category",
      "Responsible for frontend development, backend improvements and deployment",
      "Implemented features using Core Data, Firebase SDK, Twilio SDK, SnapKit, Algolia and Branch.io",
    ],
  },
  {
    positionTitle: "Alpha Research Intern",
    companyName: "Trexquant",
    companyURL: "https://trexquant.com/",
    startDate: "November 2019",
    endDate: "March 2020",
    highlights: [
      "Conducted a news sentiment analysis using the TRNA dataset",
      "Ran OLS regressions of same-day equity returns on daily sentiment scores and Fama-French factors for large-cap companies; sentiment was statistically significant at the 5% level",
      "Built a Lasso regression model that uses daily sentiment scores to predict next-day equity returns",
    ],
  },
]
