const skillGroups = [
  {
    label: "AI",
    items:
      "LLM agents & tool use, multi-agent systems, MCP, RAG, vector databases, embeddings, structured outputs, guardrails, evals / LLM-as-judge, LoRA fine-tuning, confidence calibration, prompt engineering & caching, OpenAI · Anthropic · Gemini APIs, LangGraph, MLX, Hugging Face",
  },
  {
    label: "Engineering",
    items:
      "Python, TypeScript, Swift, SQL, Django, FastAPI, Node.js, React, Next.js, React Native, SwiftUI, Postgres / pgvector, Redis, Stripe, AWS, Google Cloud",
  },
  {
    label: "Data & ML",
    items:
      "Pandas, NumPy, scikit-learn, PyTorch, statistics, regression, classification, time series, ensemble learning, optimization, Monte Carlo simulation",
  },
]

const Skills = () => (
  <>
    <h2 className="font-sans font-semibold mt-10 text-3xl border-b border-gray-300 pb-1 dark:text-white text-black">
      Skills
    </h2>

    <ul className="list-disc text-gray-400 ml-4 mt-4">
      {skillGroups.map((group) => (
        <li className="mt-3 first:mt-0" key={group.label}>
          <span className="text-black font-semibold dark:text-lightGray">
            {group.label} - <span className="font-normal">{group.items}</span>
          </span>
        </li>
      ))}
    </ul>
  </>
)

export default Skills
