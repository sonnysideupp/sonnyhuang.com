import { Project } from "../types"

// Newest first. `highlight` puts a project on the home page.
export const projectsList: Project[] = [
  {
    id: "nfl-sql",
    name: "NFL Text-to-SQL Agent",
    date: "2026",
    slug: "FinetunedSQLAgent",
    tagline:
      "LoRA fine-tuned an open 3B model and benchmarked it against RAG for text-to-SQL, with calibrated confidence and read-only SQL guardrails.",
    highlight: true,
    links: [
      {
        label: "Notebook",
        url: "https://github.com/sonnysideupp/FinetunedSQLAgent/blob/main/notebooks/explore_results.ipynb",
      },
      { label: "Model", url: "https://huggingface.co/sonnyhuang/qwen2.5-coder-3b-nflsql-lora" },
    ],
  },
  {
    id: "voxeval",
    name: "VoxEval",
    date: "2026",
    slug: "voxeval",
    tagline:
      "Evaluates voice agents beyond WER: key-term recall, stage-by-stage latency, tool-call traces and turn-taking, as a CI deploy gate.",
    highlight: true,
  },
  {
    id: "adaptive-rag",
    name: "Adaptive RAG",
    date: "2024",
    slug: "Adaptive-RAG",
    tagline:
      "A LangGraph agent that answers questions about Lyft's 10-K, routing between a vector store and web search and checking its answers for hallucinations.",
    highlight: true,
  },
  {
    id: "recession",
    name: "Recession Forecasting",
    date: "2024",
    slug: "Recession-Forecast",
    tagline: "Regime classification forecasting using leading macroeconomic indicators and ML algorithms.",
    highlight: false,
  },
  {
    id: "website",
    name: "sonnyhuang.com",
    date: "2024",
    slug: "sonnyhuang.com",
    tagline: "The source of this website.",
    highlight: false,
  },
  {
    id: "tictactoe",
    name: "RL: Tic Tac Toe",
    date: "2024",
    slug: "RL-MDP-TicTacToe",
    tagline: "Trained a Markov Decision Process based agent to play Tic Tac Toe.",
    highlight: false,
  },
  {
    id: "connect4",
    name: "MinMax: Connect 4",
    date: "2024",
    slug: "Connect4MinMax",
    tagline: "Created an AI agent to play Connect 4 using the MinMax algorithm.",
    highlight: false,
  },
  {
    id: "portfolio",
    name: "Portfolio Optimization",
    date: "2024",
    slug: "MarkowitzPortfolioOptimization",
    tagline: "Markowitz mean-variance portfolio optimization with backtesting on historical equity data.",
    highlight: false,
  },
]
