export interface ProcessEnv {
  openWeatherApiKey: string;
  backupOpenWeatherApiKey: string;
}

export const processEnv: ProcessEnv = {
  openWeatherApiKey: process.env.OPEN_WEATHER_API_KEY || "",
  backupOpenWeatherApiKey:
    process.env.BACKUP_OPEN_WEATHER_API_KEY ||
    "1fe109e153f8d67c302a90f7417b4bb3",
};
