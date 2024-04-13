import type { Monitor } from "@/interfaces";

import { favoritesRates } from "@/constants";

export type Result = {
  monitors: Record<string, Monitor>;
};

type ErrorApi = {
  status: number;
  statusText: string;
};

type ApiResponse =
  | {
      success: true;
      monitors: Monitor[];
    }
  | {
      success: false;
      error: ErrorApi;
    };

const BASE_URL = "https://pydolarvenezuela-api.vercel.app";

export const getAllRates = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/api/v1/dollar`, {
      cache: "no-store",
    }); 
    
    if (!response.ok) {
      return {
        success: false,
        error: {
          status: response.status,
          statusText: response.statusText,
        },
      };
    }

    const data = (await response.json()) as Result; // esta respuesta viene en Objetos
    const monitors = Object.values(data.monitors);

    // Iteramos sobre el resultado y agregamos una propiedad "favorite", que dependiendo del array con los favoritos, se le agregara true o false
    const monitorsReal = monitors.map((monitor) => ({
      ...monitor,
      favorite: favoritesRates.includes(monitor.title),
    }));
    // luego ordenamos que los favoritos esten hasta arriba del todo
    const sortedMonitors = monitorsReal.sort((a, b) =>
      a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1
    );

    return {
      success: true,
      monitors: sortedMonitors,
    };
  } catch (error) {
    console.error("Failed to fetch data:", error);

    return {
      success: false,
      error: {
        status: 500,
        statusText: "Internal Server Error",
      },
    };
  }
};
