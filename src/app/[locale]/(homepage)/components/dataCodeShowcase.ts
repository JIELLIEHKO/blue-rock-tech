export const SNIPPETS = {
  nodeService: String.raw`// Node.js microservice (Express)
import express from "express";
const app = express();
app.use(express.json());

app.post("/v1/process", async (req, res) => {
  const { payload } = req.body;
  const result = await compute(payload); // your domain logic
  res.json({ ok: true, result });
});

app.listen(8080, () => console.log("Service on :8080"));`,

  pythonBot: String.raw`# Python: simple Telegram bot (aiogram)
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
import asyncio, os

bot = Bot(token=os.getenv("TG_TOKEN"))
dp = Dispatcher()

@dp.message(Command("start"))
async def start(message: types.Message):
    await message.answer("Hello! Send me text, I'll echo it back.")

@dp.message()
async def echo(message: types.Message):
    await message.answer(message.text)

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())`,

  rustCli: String.raw`// Rust: tiny CLI using clap
use clap::Parser;

#[derive(Parser, Debug)]
#[command(version, about = "File hash utility")]
struct Args {
    #[arg(short, long)]
    path: String,
}

fn main() {
    let args = Args::parse();
    let digest = std::fs::read(&args.path)
        .map(|b| format!("{:x}", md5::compute(b)))
        .unwrap();
    println!("{}", digest);
}`,

  ciSnippet: String.raw`# GitHub Actions: CI for Node
name: ci
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm test --if-present
      - run: npm run build`,
} as const;

export const TABS = [
  { key: 'nodeService', label: 'Backend Service', lang: 'ts' },
  { key: 'pythonBot', label: 'Bot / Automation', lang: 'py' },
  { key: 'rustCli', label: 'CLI Tool', lang: 'rs' },
  { key: 'ciSnippet', label: 'CI/CD', lang: 'yml' },
] as const;
