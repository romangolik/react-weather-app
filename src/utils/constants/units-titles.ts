import { DistanceEnum } from "@utils/enums/distance";
import { PressureEnum } from "@utils/enums/pressure";
import { WindSpeedEnum } from "@utils/enums/wind-speed";
import { TemperatureEnum } from "@utils/enums/temperature";
import { PrecipitationEnum } from "@utils/enums/precipitation";

export const TEMPERATURE_TITLES = {
  [TemperatureEnum.CELSIUS]: "Celsius",
  [TemperatureEnum.FAHRENHEIT]: "Fahrenheit",
} as const;

export const WIND_SPEED_TITLES = {
  [WindSpeedEnum.KMH]: "km/h",
  [WindSpeedEnum.MS]: "m/s",
  [WindSpeedEnum.KNOTS]: "Knots"
} as const;

export const PRESSURE_TITLES = {
  [PressureEnum.HPA]: "hPa",
  [PressureEnum.INCHES]: "Inches",
  [PressureEnum.KPA]: "kPa",
  [PressureEnum.MM]: "mm",
} as const;

export const PRECIPITATION_TITLES = {
  [PrecipitationEnum.MILIMETERS]: "Milimeters",
  [PrecipitationEnum.INCHES]: "Inches",
} as const;

export const DISTANCE_TITLES = {
  [DistanceEnum.KILOMETERS]: "Kilometers",
  [DistanceEnum.INCHES]: "Inches",
} as const;