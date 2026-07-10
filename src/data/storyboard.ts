export interface StoryboardFrame {
  num: string;
  id: string;
  title: string;
  duration: string;
  act: number;
  prompt: string;
  image: string;
  importance: 1 | 2 | 3;
  videoRefs?: string[];
  music?: string;
}

export const storyboard: StoryboardFrame[] = [
  {
    num: "01", id: "01_obertura_montaje", title: "Obertura: Montaje", duration: "1:30", act: 1,
    importance: 3,
    image: "/storyboard/endb_01_obertura_montaje_00001_.png",
    videoRefs: ["Garage Bar 2024", "Revelent Hall 2024", "DOPACA", "Tattoo Fest", "Soundtech", "Storm Bar"],
    music: "Demonas + Inmaculada + Ícaro + Chie Umbra (montaje 30s)",
    prompt: "DUAL EXPOSURE: LEFT masked metal guitarist under red stage lights in underground Bogota bar, crowd with raised hands; RIGHT 7-year-old boy on cracked tile floor watching CRT television showing a concert, toy guitar beside him, warm orange TV glow",
  },
  {
    num: "02", id: "02_ayda", title: "Ayda (Entrevista)", duration: "1:00", act: 1,
    importance: 2,
    image: "/storyboard/endb_02_ayda_00001_.png",
    music: "Silencio ambiental",
    prompt: "MEDIUM CLOSE-UP Colombian woman in her 50s on worn sofa in warm Bogota living room, soft window light from left, family photos on wall including small photo of boy with toy guitar, warm ochre and amber tones",
  },
  {
    num: "02b", id: "02b_nino_y_casa", title: "Intercut: El Niño y La Casa", duration: "0:20", act: 1,
    importance: 1,
    image: "/storyboard/endb_02b_nino_y_casa_00001_.png",
    music: "Radio cambiando estación, fragmentos salsa/boleros",
    prompt: "Archive photographs on dark surface: boy age 6 in school uniform, Bogota living room with CRT TV and 1980s curtains, boy with headphones lying on floor, toy guitar with loose strings, family photo, Bogota streets with morning fog",
  },
  {
    num: "03", id: "03_bolivar", title: "Bolívar (Entrevista)", duration: "1:00", act: 1,
    importance: 2,
    image: "/storyboard/endb_03_bolivar_00001_.png",
    music: "Silencio ambiental",
    prompt: "CLOSE-UP portrait older Colombian man in his 60s in quiet study with bookshelves, warm side light from window, measured calm expression, dignified, warm browns and soft amber highlights",
  },
  {
    num: "03b", id: "03b_guitarras", title: "Intercut: Las Guitarras", duration: "0:20", act: 1,
    importance: 1,
    image: "/storyboard/endb_03b_guitarras_00001_.png",
    music: "Escala pentatónica sucia en guitarra eléctrica",
    prompt: "Archive photographs on dark surface: extreme close-up electric guitar strings on worn fretboard with rust, teenager age 14 holding cheap electric guitar, bedroom wall with Metallica and Slayer posters, calloused fingertips pressing strings",
  },
  {
    num: "04", id: "04_primera_guitarra", title: "La Primera Guitarra", duration: "0:45", act: 1,
    importance: 1,
    image: "/storyboard/endb_04_primera_guitarra_00001_.png",
    music: "Enter Sandman (Metallica) — 3 segundos referencia",
    prompt: "MEDIUM SHOT Colombian teenage boy age 14 holding cheap worn electric guitar in small bedroom, walls covered with Metallica Slayer Kreator posters, single window with gray Bogota light, serious determined expression",
  },
  {
    num: "05", id: "05_tia_prima", title: "Tía y Prima", duration: "0:40", act: 1,
    importance: 1,
    image: "/storyboard/endb_05_tia_prima_00001_.png",
    prompt: "MEDIUM WIDE two Colombian women in warm kitchen, older aunt and younger cousin, laughing warmly telling stories, natural window light, wooden table with coffee cups, domestic warmth",
  },
  {
    num: "06", id: "06_escolaridad", title: "Escolaridad y Decisiones", duration: "0:40", act: 1,
    importance: 1,
    image: "/storyboard/endb_06_escolaridad_00001_.png",
    prompt: "WIDE ESTABLISHING foggy Bogota street 1990s, brick facades, worn sidewalks, school children in uniforms walking, bus stop with peeling paint, gray overcast sky, melancholic atmosphere",
  },
  {
    num: "07", id: "07_bogota_subterranea", title: "Bogotá Subterránea", duration: "0:30", act: 2,
    importance: 2,
    image: "/storyboard/endb_07_bogota_subterranea_00001_.png",
    videoRefs: ["Pitbull HC Madrid 2017", "AeC SIPVDC", "DACELOS"],
    music: "Pitbull HC (1994) — audio de archivo",
    prompt: "DUTCH ANGLE narrow Bogota street at night, brick buildings with faded punk rock posters, single red neon sign reflecting on wet pavement, fog and cigarette smoke, underground punk venue entrance",
  },
  {
    num: "08", id: "08_pitbull_hc", title: "Pitbull HC", duration: "0:50", act: 2,
    importance: 3,
    image: "/storyboard/endb_08_pitbull_hc_00001_.png",
    videoRefs: ["Pitbull HC live set Madrid 2017 (40min)"],
    music: "Hardcore punk bogotano 90s",
    prompt: "OVERHEAD FLAT LAY photocopied punk rock flyers from 1994 Bogota on dark surface, crude black ink on cheap paper, coffee stains and tape marks, torn edges, aggressive hardcore punk lettering, DIY xeroxed aesthetic",
  },
  {
    num: "09", id: "09_ataque_en_contra", title: "Ataque en Contra", duration: "0:45", act: 2,
    importance: 3,
    image: "/storyboard/endb_09_ataque_en_contra_00001_.png",
    videoRefs: ["AeC set SIPVDC (30min)", "7 AeC SIPVDC + 4 Agamenon"],
    music: "Hardcore punk bogotano 90s",
    prompt: "WIDE flooded garage rehearsal space in working-class Bogota, water stains on concrete floor, cheap amplifier and drum kit, photocopies of hardcore punk flyers on crumbling walls, single bare bulb overhead",
  },
  {
    num: "10", id: "10_nonsense_premonition", title: "Nonsense Premonition", duration: "0:55", act: 2,
    importance: 2,
    image: "/storyboard/endb_10_nonsense_premonition_00001_.png",
    music: "Death metal técnico — Nonsense Premonition (2004)",
    prompt: "TWO-SHOT MEDIUM two Colombian metal musicians in dim rehearsal room, one with drumsticks behind kit, one holding guitar, black clothing, focused intense expressions, death metal posters on walls, volumetric red light",
  },
  {
    num: "11", id: "11_los_venues", title: "Los Venues", duration: "1:05", act: 2,
    importance: 3,
    image: "/storyboard/endb_11_los_venues_00001_.png",
    videoRefs: ["Todos los live sets ENdB (11)"],
    music: "Ícaro (2016) — fragmento instrumental",
    prompt: "WIDE SHOT from stage looking out at tiny underground Bogota rock bar, 30 people with raised hands, red and blue stage lights through thick cigarette smoke, sweat on walls, amplifiers stacked on chairs, intimate raw atmosphere",
  },
  {
    num: "12", id: "12_transicion_silencio", title: "Transición: Escena→Silencio", duration: "0:30", act: 2,
    importance: 1,
    image: "/storyboard/endb_12_transicion_silencio_00001_.png",
    music: "Guitarra sola sin producción — audio original",
    prompt: "MEDIUM CLOSE-UP black electric guitar case closing with metal latch click, dark empty rehearsal room with single overhead fluorescent light, guitar case on floor, lonely and intimate, deep shadows in corners",
  },
  {
    num: "13", id: "13_el_numero", title: "El Número", duration: "0:40", act: 3,
    importance: 3,
    image: "/storyboard/endb_13_el_numero_00001_.png",
    music: "Silencio + sonido de teclado — foley",
    prompt: "EXTREME CLOSE-UP phone screen showing Spotify artist profile in dark mode, '4 monthly listeners' displayed prominently in white text on black background, screen glare and pixel texture, stark minimalist composition",
  },
  {
    num: "14", id: "14_entrevistas_calle", title: "Entrevistas de Calle", duration: "1:10", act: 3,
    importance: 2,
    image: "/storyboard/endb_14_entrevistas_calle_00001_.png",
    prompt: "HANDHELD WIDE busy Bogota street corner with pedestrians walking past ignoring camera, vendor stalls and bus traffic, gray overcast sky, cinema verite style, natural light, slight camera shake, urban concrete",
  },
  {
    num: "15", id: "15_los_numeros", title: "Los Números", duration: "0:35", act: 3,
    importance: 3,
    image: "/storyboard/endb_15_los_numeros_00001_.png",
    videoRefs: ["Videos oficiales (6)"],
    prompt: "EXTREME CLOSE-UP slow camera pan across computer screen showing YouTube video thumbnails with small view counts, numbers like 1903 and 182 and 76 in small gray text, dark mode interface, screen glow illuminating room",
  },
  {
    num: "16", id: "16_evolucion", title: "Evolución", duration: "1:20", act: 3,
    importance: 3,
    image: "/storyboard/endb_16_evolucion_00001_.png",
    videoRefs: ["6 álbumes completos"],
    music: "Mix de 6 discos — Emron820815 → Chie Umbra (10-12s cada uno)",
    prompt: "STRAIGHT-ON FLAT LAY six album covers stacked at slight offsets like geological layers, dark metal aesthetic progression from raw death metal to symphonic black metal, rust orange bottom to nebula violet and cosmic gold top",
  },
  {
    num: "17", id: "17_venues_en_vivo", title: "Los Venues en Vivo", duration: "1:00", act: 3,
    importance: 3,
    image: "/storyboard/endb_17_venues_en_vivo_00001_.png",
    videoRefs: ["Soundtech", "Audio Room", "Storm Bar", "BBR", "DOPACA", "Garage Bar", "Tattoo Fest", "Death to All", "Revelent"],
    music: "Inmaculada (2019) — fragmento en vivo",
    prompt: "DYNAMIC MONTAGE same small band performing in progressively different venues overlaid in grid, tiny blue-lit room with 10 people, pandemic show with masks, medium bar with red lights, festival stage with smoke",
  },
  {
    num: "18", id: "18_las_mascaras", title: "Las Máscaras", duration: "0:40", act: 3,
    importance: 2,
    image: "/storyboard/endb_18_las_mascaras_00001_.png",
    music: "Demonas (2024) — fragmento atmosférico",
    prompt: "SPLIT SCREEN: LEFT back view of man tuning guitar in dim room, no mask, plain black t-shirt, warm amber desk lamp; RIGHT front view same man wearing ornate animal skull ritual mask on small stage under deep crimson light with smoke",
  },
  {
    num: "19", id: "19_estetica_vs_numeros", title: "Estética vs. Números", duration: "0:35", act: 3,
    importance: 3,
    image: "/storyboard/endb_19_estetica_vs_numeros_00001_.png",
    music: "Chie Umbra (2026) — fragmento principal",
    prompt: "SPLIT SCREEN: LEFT six dark metal album covers with intricate artwork, horror and fantasy imagery, each more ambitious; RIGHT static Spotify page showing '4 monthly listeners' in small text, brutal contrast between ambition and indifference",
  },
  {
    num: "20", id: "20_banda_en_accion", title: "La Banda en Acción", duration: "0:45", act: 4,
    importance: 3,
    image: "/storyboard/endb_20_banda_en_accion_00001_.png",
    videoRefs: ["Live sets recientes (2024)"],
    music: "Chie Umbra (2026) — fragmento principal",
    prompt: "HANDHELD MEDIUM cramped rehearsal room, three musicians in black clothing, guitar drums bass, cables and pedals on concrete floor, amplifiers with foam acoustic treatment, sweat visible, one musician stops and signals to restart",
  },
  {
    num: "21", id: "21_la_calle", title: "La Calle", duration: "0:30", act: 4,
    importance: 1,
    image: "/storyboard/endb_21_la_calle_00001_.png",
    prompt: "TRACKING SHOT from behind man walking alone through busy Bogota streets, all black clothing, city chaotic with buses vendors rain and noise but he is in his own world, gray overcast sky, wet pavement reflecting neon signs",
  },
  {
    num: "22", id: "22_el_estudio", title: "El Estudio", duration: "0:35", act: 4,
    importance: 2,
    image: "/storyboard/endb_22_el_estudio_00001_.png",
    music: "Si No Vuelvo (2022) — fragmento vocal estudio",
    prompt: "OVER-THE-SHOULDER small recording studio, man wearing headphones facing computer screen showing DAW waveform tracks, studio monitors, microphone with pop filter, warm amber desk lamp and cool blue screen light mixing, acoustic foam on walls",
  },
  {
    num: "23", id: "23_el_disco_sonando", title: "El Disco Sonando", duration: "0:30", act: 4,
    importance: 2,
    image: "/storyboard/endb_23_el_disco_sonando_00001_.png",
    videoRefs: ["Chie Umbra (id: 7uQvfM4pwpA)"],
    music: "Chie Umbra (2026) — track completo volumen bajo",
    prompt: "WIDE small dark bedroom at night in Bogota, black electric guitar resting in corner, album covers pinned to walls barely visible, small speaker system glowing faintly with cosmic gold LED, window showing city lights below",
  },
  {
    num: "24", id: "24_final", title: "Final: Como Cuando Era Niño", duration: "0:55", act: 4,
    importance: 3,
    image: "/storyboard/endb_24_final_00001_.png",
    music: "Guitarra sola, melodía simple — audio original",
    prompt: "WIDE SHOT pulling back from man on edge of bed playing guitar alone in dark, no mask no band, camera pulls back and room shrinks, man becomes small point of warm amber light in void black, ghost image of 7-year-old boy with toy guitar superimposes and dissolves",
  },
  {
    num: "25", id: "25_creditos", title: "Créditos", duration: "—", act: 4,
    importance: 1,
    image: "/storyboard/endb_25_creditos_00001_.png",
    music: "Audio de ensayo — toma falsa + entrada de banda",
    prompt: "BLACK SCREEN centered bone white text in Cinzel serif 'MAMÁ, SOY UNA SOMBRA' with subtitle 'Un documental sobre Alejandro Sevilla Velez', minimal elegant typography on pure void black, faint BAAL logo watermark at 5% opacity",
  },
];

export const actTitles = [
  "",
  "El Niño Que Quería Ser Hetfield",
  "La Escena",
  "4 Oyentes",
  "Todavía en Pie",
];