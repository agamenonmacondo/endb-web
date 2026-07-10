export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  type: "album" | "live" | "milestone" | "band";
}

export const timeline: TimelineEvent[] = [
  { year: 1994, title: "Pitbull HC fundada", description: "Pitbull Hardcore nace en Bogotá. Alejandro se involucra en la escena hardcore punk.", type: "band" },
  { year: 1995, title: "Ataque en Contra fundada", description: "Banda hardcore punk bogotana. Alejandro participa como guitarrista.", type: "band" },
  { year: 2004, title: "Nonsense Premonition", description: "Banda de death metal técnico fundada. Alejandro confirma como guitarrista en demo 'Delete Mental Programming' (2007).", type: "band" },
  { year: 2010, title: "Pitbull HC — Rock al Parque", description: "Pitbull HC toca en Rock al Parque, el festival más grande de Latinoamérica.", type: "live" },
  { year: 2011, title: "Ataque en Contra — Rock al Parque", description: "Ataque en Contra invitada nacional en Rock al Parque.", type: "live" },
  { year: 2014, title: "Emron820815", description: "Primer disco de En Nombre de Baal. Death metal/doom. Grabado en Alterna Estudios. 10 tracks, 31:48.", type: "album" },
  { year: 2015, title: "Ataque en Contra — Rock al Parque", description: "Segunda aparición en Rock al Parque, celebrando 20 años de la banda.", type: "live" },
  { year: 2016, title: "Ícaro", description: "Segundo disco. Rock/metal con solos de guitarra destacados. 8 tracks, 32:07.", type: "album" },
  { year: 2016, title: "Nonsense Premonition — Rock al Parque", description: "NsP toca en Rock al Parque. 'The Inner Sanctum' filmado en el festival.", type: "live" },
  { year: 2019, title: "Inmaculada / Singularidad", description: "Tercer disco. Sound Tech Studio. Mezcla: Alejandro Sevilla. Master: Darío Bernal. 7 tracks, 26:45.", type: "album" },
  { year: 2020, title: "Colombia Hardcore 2", description: "ENdB incluido en compilación nacional con 'Contra la Marea'.", type: "milestone" },
  { year: 2022, title: "Si No Vuelvo", description: "Cuarto disco. Dedicado al estallido social. Soundtech Studios. 5 tracks, 15:38.", type: "album" },
  { year: 2023, title: "Bacatá Hardcore", description: "ENdB incluido en compilación con 'Bacatá'.", type: "milestone" },
  { year: 2024, title: "Demonas EP", description: "Quinto disco. Black metal sinfónico + ritmos latinos/ancestrales. 5 tracks, 15:22. Debut de máscaras en Tattoo Music Fest.", type: "album" },
  { year: 2024, title: "Tattoo Music Fest — Debut máscaras", description: "Primera presentación con estética de máscaras rituales. Cambio definitivo a black metal sinfónico.", type: "live" },
  { year: 2024, title: "Covers de The Clash", description: "ENdB graba 'Bank Robber' para compilado de covers de The Clash.", type: "milestone" },
  { year: 2026, title: "Chie Umbra", description: "Sexto disco. Metal progresivo/cinematográfico/cyber-gótico. Colaboración con Agamenon Macondo. 6 tracks, 15:41.", type: "album" },
];