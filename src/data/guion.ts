export interface Escena {
  num: string;
  title: string;
  duration: string;
  act: number;
  description: string;
  music?: string;
  videoRefs?: string[];
}

export interface Acto {
  num: number;
  title: string;
  duration: string;
  escenas: Escena[];
}

export const actos: Acto[] = [
  {
    num: 1,
    title: "El Niño Que Quería Ser Hetfield",
    duration: "6:15",
    escenas: [
      { num: "1", title: "Obertura: Montaje", duration: "1:30", act: 1, description: "Montaje cruzado: clips en vivo + infancia superpuestos. VO de Alejandro sobre el montaje.", music: "Demonas + Inmaculada + Ícaro + Chie Umbra (montaje 30s)", videoRefs: ["Garage Bar 2024", "Revelent Hall", "DOPACA", "Tattoo Fest", "Soundtech", "Storm Bar"] },
      { num: "2", title: "Ayda (Entrevista)", duration: "1:00", act: 1, description: "Corte directo del caos a Ayda sentada en su sala. Fotos familiares detrás. 'Esa fase nunca se le pasó.'", music: "Silencio ambiental" },
      { num: "2B", title: "Intercut: El Niño y La Casa", duration: "0:20", act: 1, description: "Fotos rápidas de infancia: niño, TV, guitarra de juguete, barrio. Sin narración.", music: "Radio cambiando estación, fragmentos salsa/boleros" },
      { num: "3", title: "Bolívar (Entrevista)", duration: "1:00", act: 1, description: "Bolívar sentado en su estudio. 'Se llevaba la música por dentro. Eso no se quita.'", music: "Silencio ambiental" },
      { num: "3B", title: "Intercut: Las Guitarras", duration: "0:20", act: 1, description: "Close-ups: primera guitarra real, pósters Metallica/Slayer/Kreator, cuerdas rotas, callos.", music: "Escala pentatónica sucia en guitarra eléctrica" },
      { num: "4", title: "La Primera Guitarra", duration: "0:45", act: 1, description: "Adolescente con guitarra barata. Pósters de Metallica. La promesa personal.", music: "Enter Sandman (Metallica) — 3 seg referencia" },
      { num: "5", title: "Tía y Prima", duration: "0:40", act: 1, description: "Entrevistas cariñosas en cocina. Historias de infancia.", music: "—", },
      { num: "6", title: "Escolaridad y Decisiones", duration: "0:40", act: 1, description: "Bogotá 90s. Decidir el camino. La música como destino.", music: "—" },
    ],
  },
  {
    num: 2,
    title: "La Escena",
    duration: "4:35",
    escenas: [
      { num: "7", title: "Bogotá Subterránea", duration: "0:30", act: 2, description: "La escena underground bogotana. Flyers, calles, venues.", music: "Pitbull HC (1994) — audio archivo", videoRefs: ["Pitbull HC Madrid 2017", "AeC SIPVDC", "DACELOS"] },
      { num: "8", title: "Pitbull HC", duration: "0:50", act: 2, description: "Hardcore punk desde 1994. Alejandro en la escena.", music: "Hardcore punk bogotano 90s", videoRefs: ["Pitbull HC Madrid 2017 (40min)"] },
      { num: "9", title: "Ataque en Contra", duration: "0:45", act: 2, description: "Hardcore punk desde 1995. Rock al Parque 2011, 2015.", music: "Hardcore punk bogotano 90s", videoRefs: ["AeC SIPVDC (30min)"] },
      { num: "10", title: "Nonsense Premonition", duration: "0:55", act: 2, description: "Death metal técnico. Alejandro guitarrista en demo 2007.", music: "Death metal técnico — NsP (2004)" },
      { num: "11", title: "Los Venues", duration: "1:05", act: 2, description: "Montaje de todos los venues donde ENdB ha tocado.", music: "Ícaro (2016) — fragmento instrumental", videoRefs: ["11 live sets ENdB"] },
      { num: "12", title: "Transición: Escena→Silencio", duration: "0:30", act: 2, description: "Del caos de la escena al silencio. Guitarra sola.", music: "Guitarra sola sin producción" },
    ],
  },
  {
    num: 3,
    title: "4 Oyentes",
    duration: "5:00",
    escenas: [
      { num: "13", title: "El Número", duration: "0:40", act: 3, description: "Screenshot Spotify: 4 oyentes mensuales. El vacío del número.", music: "Silencio + teclado (foley)" },
      { num: "14", title: "Entrevistas de Calle", duration: "1:10", act: 3, description: "Cinema vérité. Nadie conoce la banda en la calle.", music: "—" },
      { num: "15", title: "Los Números", duration: "0:35", act: 3, description: "YouTube: videos con 1903, 182, 76 views. El contraste.", music: "—", videoRefs: ["6 videos oficiales"] },
      { num: "16", title: "Evolución", duration: "1:20", act: 3, description: "6 discos en 12 años. Cada vez más ambicioso. Animación de portadas.", music: "Mix 6 discos (10-12s cada uno)", videoRefs: ["6 álbumes completos"] },
      { num: "17", title: "Los Venues en Vivo", duration: "1:00", act: 3, description: "Montaje de live sets. La banda creciendo visualmente pero los venues siguen pequeños.", music: "Inmaculada (2019) — en vivo", videoRefs: ["Soundtech", "Audio Room", "Storm Bar", "BBR", "Garage Bar", "Tattoo Fest", "Death to All", "Revelent"] },
      { num: "18", title: "Las Máscaras", duration: "0:40", act: 3, description: "Split screen: hombre sin máscara afinando vs. con máscara ritual en escenario.", music: "Demonas (2024) — atmosférico" },
      { num: "19", title: "Estética vs. Números", duration: "0:35", act: 3, description: "Split screen: 6 portadas ambiciosas vs. 4 oyentes. Contraste brutal.", music: "Chie Umbra (2026) — fragmento" },
    ],
  },
  {
    num: 4,
    title: "Todavía en Pie",
    duration: "3:25",
    escenas: [
      { num: "20", title: "La Banda en Acción", duration: "0:45", act: 4, description: "Ensayo presente. Tres músicos. Sudor, intensidad, parar y recomenzar.", music: "Chie Umbra (2026)", videoRefs: ["Live sets 2024"] },
      { num: "21", title: "La Calle", duration: "0:30", act: 4, description: "Alejandro caminando solo por Bogotá. Aislado en la multitud.", music: "—" },
      { num: "22", title: "El Estudio", duration: "0:35", act: 4, description: "Grabación presente. DAW, monitores, micrófono. Respirar antes de cantar.", music: "Si No Vuelvo (2022) — vocal estudio" },
      { num: "23", title: "El Disco Sonando", duration: "0:30", act: 4, description: "Cuarto oscuro. Guitarra en la esquina. Disco sonando. Ventana con luces de ciudad.", music: "Chie Umbra (2026) — volumen bajo", videoRefs: ["Chie Umbra (7uQvfM4pwpA)"] },
      { num: "24", title: "Final: Como Cuando Era Niño", duration: "0:55", act: 4, description: "Alejandro solo tocando guitarra en la oscuridad. Cámara se aleja. Ghost image del niño. Luz se encoge.", music: "Guitarra sola — audio original" },
      { num: "25", title: "Créditos", duration: "—", act: 4, description: "Negro. Texto: 'MAMÁ, SOY UNA SOMBRA'. Audio de ensayo: toma falsa + entrada de banda.", music: "Audio de ensayo" },
    ],
  },
];