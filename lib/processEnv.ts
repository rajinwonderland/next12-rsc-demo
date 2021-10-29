export interface ProcessEnv {
  openWeatherApiKey: string;
  backupOpenWeatherApiKey: string;
}

export const processEnv: ProcessEnv = {
  openWeatherApiKey: process.env.OPEN_WEATHER_API_KEY || "",
  backupOpenWeatherApiKey: process.env.BACKUP_OPEN_WEATHER_API_KEY || "",
};
