// Client-side rate limiting using localStorage
// Limits AI tool usage to stay within free tier

const DAILY_AI_LIMIT = 30; // 30 uses per day per IP/browser
const STORAGE_KEY = "toolforge_ai_usage";

interface UsageData {
  date: string;
  count: number;
}

function getTodayDate(): string {
  return new Date().toISOString().split("T")[0];
}

function getUsageData(): UsageData {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored) as UsageData;
      // Reset if it's a new day
      if (data.date !== getTodayDate()) {
        return { date: getTodayDate(), count: 0 };
      }
      return data;
    }
  } catch {
    // Ignore parsing errors
  }
  return { date: getTodayDate(), count: 0 };
}

function saveUsageData(data: UsageData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage errors
  }
}

export function checkRateLimit(): { allowed: boolean; remaining: number; message: string } {
  const usage = getUsageData();
  const remaining = Math.max(0, DAILY_AI_LIMIT - usage.count);
  
  if (usage.count >= DAILY_AI_LIMIT) {
    return {
      allowed: false,
      remaining: 0,
      message: `You've reached the daily limit of ${DAILY_AI_LIMIT} AI uses. Come back tomorrow for more free AI magic! 🚀`
    };
  }
  
  return {
    allowed: true,
    remaining,
    message: `${remaining} AI uses remaining today`
  };
}

export function incrementUsage(): void {
  const usage = getUsageData();
  usage.count += 1;
  saveUsageData(usage);
}

export function getRemainingUses(): number {
  const usage = getUsageData();
  return Math.max(0, DAILY_AI_LIMIT - usage.count);
}
