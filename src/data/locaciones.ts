export interface Locacion {
  id: number;
  nombre: string;
  tipo: string;
  descripcion: string;
  escenas: string;
}

export const locaciones: Locacion[] = [
  { id: 1, nombre: "Casa de la infancia — Bogotá", tipo: "Archivo", descripcion: "Casa de la infancia de Alejandro. Fotos de archivo, TV CRT, guitarra de juguete, barrio.", escenas: "1, 2B, 4" },
  { id: 2, nombre: "Sala de Ayda Vélez", tipo: "Entrevista", descripcion: "Sala de estar cálido, fotos familiares en la pared. Entrevista con la madre.", escenas: "2" },
  { id: 3, nombre: "Estudio de Bolívar Sevilla", tipo: "Entrevista", descripcion: "Estudio tranquilo con libreros. Entrevista con el padre.", escenas: "3" },
  { id: 4, nombre: "Cocina familiar", tipo: "Entrevista", descripcion: "Cocina bogotana con luz natural. Entrevistas de tía y prima.", escenas: "5" },
  { id: 5, nombre: "Calle bogotana — 1990s", tipo: "Archivo", descripcion: "Calles de Bogotá con fachadas de ladrillo, niebla matinal, niños en uniforme escolar.", escenas: "6" },
  { id: 6, nombre: "Calle underground nocturna", tipo: "Locación", descripcion: "Calle estrecha de Bogotá con posters punk, neón rojo reflejando en pavimento mojado.", escenas: "7" },
  { id: 7, nombre: "Garage de ensayo — Pitbull HC", tipo: "Recreación", descripcion: "Garage inundado en barrio obrero. Amplificador y batería. Flyers hardcore en paredes.", escenas: "8, 9" },
  { id: 8, nombre: "Cuarto de ensayo — Nonsense Premonition", tipo: "Locación", descripcion: "Sala de ensayo con posters de death metal. Luz volumétrica roja.", escenas: "10" },
  { id: 9, nombre: "Garage Bar", tipo: "Venue", descripcion: "Bar underground bogotano. Múltiples presentaciones de ENdB 2023-2024.", escenas: "11, 17, 20" },
  { id: 10, nombre: "Revelent Music Hall", tipo: "Venue", descripcion: "Venue donde ENdB tocó con Decimation, Inner Betrayer, Licantropía (Jul 2024).", escenas: "11, 17" },
  { id: 11, nombre: "Tattoo Music Fest", tipo: "Venue", descripcion: "Festival donde ENdB debutó las máscaras rituales (May 2024).", escenas: "11, 17, 18" },
  { id: 12, nombre: "Death to All Bogotá", tipo: "Venue", descripcion: "Festival de death metal. ENdB live set completo (Mar 2024).", escenas: "11, 17" },
  { id: 13, nombre: "Storm Bar", tipo: "Venue", descripcion: "Bar bogotano. Live set completo filmado (Oct 2021).", escenas: "11, 17" },
  { id: 14, nombre: "Soundtech Studios", tipo: "Estudio", descripcion: "Estudio de grabación. Live durante pandemia (Jul 2021). Grabación de Inmaculada, Si No Vuelvo, Demonas.", escenas: "11, 17, 22" },
  { id: 15, nombre: "Audio Room", tipo: "Venue", descripcion: "Venue pequeño. Live set 2020.", escenas: "11, 17" },
  { id: 16, nombre: "BBR", tipo: "Venue", descripcion: "Bar bogotano. Sets completos 2022-2023.", escenas: "11, 17" },
  { id: 17, nombre: "Cuarto oscuro — Final", tipo: "Locación", descripcion: "Cuarto oscuro con guitarra en la esquina. Alejandro solo tocando, como el niño que era.", escenas: "23, 24" },
];