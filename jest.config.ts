import type { Config } from "jest";

const config: Config = {
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleNameMapper: {
    "(.+)\\.js": "$1",
  },
  testEnvironment: "jsdom",
};

export default config;
