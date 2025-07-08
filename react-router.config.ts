import type { Config } from "@react-router/dev/config";

export default {
  // Specify the app directory
  appDirectory: "app",
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
} satisfies Config;
