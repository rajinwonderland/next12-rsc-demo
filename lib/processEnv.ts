export interface ProcessEnv {
  openWeatherApiKey: string;
}

export const processEnv: ProcessEnv = {
  openWeatherApiKey: process.env.OPEN_WEATHER_API_KEY || "",
};
