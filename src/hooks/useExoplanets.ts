// src/hooks/useExoplanets.ts
import {
  useInfiniteQuery,
  type QueryFunctionContext,
} from "@tanstack/react-query";

export interface Exoplanet {
  name: string;
  discovery_method: string;
  orbital_period: number | null;
  radius: number | null;
  mass: number | null;
  distance: number | null;
  equatorial_coordinates: {
    right_ascension: number; // degrees
    declination: number; // degrees
    epoch: number;
  };
}

const PAGE_SIZE = 50;
// Via your Vite proxy, this’ll go to
// https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI
const BASE = "/api/cgi-bin/nstedAPI/nph-nstedAPI";

async function fetchPlanets(
  context: QueryFunctionContext
): Promise<Exoplanet[]> {
  // which “page” (0-based)
  const page = typeof context.pageParam === "number" ? context.pageParam : 0;
  const offset = page * PAGE_SIZE;

  // build the REST‐style query
  const params = new URLSearchParams({
    table: "pscomppars",
    select: "pl_name,pl_discmethod,pl_orbper,pl_rade,pl_bmasse,st_dist,ra,dec",
    format: "json",
    order: "st_dist",
    limit: PAGE_SIZE.toString(),
    offset: offset.toString(),
  });

  const url = `${BASE}?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`NASA API error ${res.status}`);
  }
  const rows = (await res.json()) as any[];

  return rows.map((p) => {
    const ra = p.ra ?? 0;
    const dec = p.dec ?? 0;
    return {
      name: p.pl_name,
      discovery_method: p.pl_dmethod || p.pl_discmethod,
      orbital_period: p.pl_orbper,
      radius: p.pl_rade,
      mass: p.pl_bmasse,
      distance: p.st_dist,
      equatorial_coordinates: {
        right_ascension: ra,
        declination: dec,
        epoch: 2451545,
      },
    };
  });
}

export function useExoplanets() {
  return useInfiniteQuery<Exoplanet[], Error>({
    queryKey: ["exoplanets"],
    queryFn: fetchPlanets,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length === PAGE_SIZE ? pages.length : undefined,
  });
}
/*
select+pl_name,hostname,pl_letter,
sy_mnum,disc_year,pl_orbper,pl_rade,
pl_masse,pl_bmasse,pl_dens,ra,dec,glat,glon,
sy_bmag,sy_vmag,sy_dist+from+pscomppars

Planet Name
Host Name
Planet Letter
Number of Moons
Discovery Year
Orbital Period [days] - Time the planet takes to make a complete orbit around the host star or system
Planet Radius [Earth Radius] - Length of a line segment from the center of the planet to its surface, measured in units of radius of the Earth
Planet Mass [Earth Mass] - Amount of matter contained in the planet, measured in units of masses of the Earth
Planet Mass or Mass*sin(i) [Earth Mass] - Best planet mass estimate available, in order of preference: Mass, M*sin(i)/sin(i), or M*sin(i), depending on availability, and measured in Earth masses
Planet Density [g/cm**3] - Amount of mass per unit of volume of the planet
RA [decimal] - Right Ascension of the planetary system in decimal degrees
Dec [decimal] - Declination of the planetary system in decimal degrees
Galactic Latitude [deg]	- Galactic latitude of the planetary system in units of decimal degrees
Galactic Longitude [deg] - Galactic longitude of the planetary system in units of decimal degrees
B (Johnson) Magnitude - Brightness of the host star as measured using the B (Johnson) band in units of magnitudes
V (Johnson) Magnitude - Brightness of the host star as measured using the V (Johnson) band in units of magnitudes
Distance [pc] - Distance to the planetary system in units of parsecs
*/