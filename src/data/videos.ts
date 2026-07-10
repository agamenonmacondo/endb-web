export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  youtubeId: string;
  channel: "EnNombredeBaal" | "AgamenonMacondo" | "PatadasVoladoras";
  banda: "ENdB" | "Ataque en Contra" | "Pitbull HC" | "DACELOS" | "Escena underground" | "Agamenon";
  type: "album" | "video oficial" | "live set" | "live suelto" | "vlog" | "cover" | "compilado" | "session";
  importance?: 1 | 2 | 3;
}

export const channelLabels: Record<string, string> = {
  EnNombredeBaal: "@EnNombredeBaal",
  AgamenonMacondo: "@ninjainterdimensional",
  PatadasVoladoras: "@patadasvoladorasycosmos",
};

export const videos: VideoItem[] = [
  // Canal @EnNombredeBaal (9)
  { id: "1", title: "CHIE UMBRA 2026 (álbum completo)", duration: "15:42", youtubeId: "7uQvfM4pwpA", channel: "EnNombredeBaal", banda: "ENdB", type: "album", importance: 3 },
  { id: "2", title: "Visuales", duration: "2:07", youtubeId: "0ujzFjl60rM", channel: "EnNombredeBaal", banda: "ENdB", type: "video oficial", importance: 1 },
  { id: "3", title: "Demonas (2024)", duration: "15:23", youtubeId: "aHdI7w7_S7o", channel: "EnNombredeBaal", banda: "ENdB", type: "album", importance: 3 },
  { id: "4", title: "Bogotá Hardcore: 30 Años de Resistencia", duration: "16:10", youtubeId: "zF8a2ASIVzA", channel: "EnNombredeBaal", banda: "ENdB", type: "compilado", importance: 3 },
  { id: "5", title: "Live Set 2023", duration: "20:17", youtubeId: "9NO_s_h8Lu0", channel: "EnNombredeBaal", banda: "ENdB", type: "live set", importance: 3 },
  { id: "6", title: "Si no Vuelvo (Disco Completo 2022)", duration: "15:39", youtubeId: "EK9QesfSsmo", channel: "EnNombredeBaal", banda: "ENdB", type: "album", importance: 3 },
  { id: "7", title: "Inmaculada (Álbum Completo 2019)", duration: "26:46", youtubeId: "7B2t8qN57Nw", channel: "EnNombredeBaal", banda: "ENdB", type: "album", importance: 3 },
  { id: "8", title: "Ícaro (Disco Completo 2016)", duration: "32:08", youtubeId: "rOWRXRrzGKA", channel: "EnNombredeBaal", banda: "ENdB", type: "album", importance: 3 },
  { id: "9", title: "Emron820815 (Disco Completo 2014)", duration: "31:49", youtubeId: "fB5dRlNZ0WY", channel: "EnNombredeBaal", banda: "ENdB", type: "album", importance: 3 },

  // Canal @ninjainterdimensional — Videos Oficiales (6)
  { id: "10", title: "Demonas – Video Oficial", duration: "4:13", youtubeId: "xAOvMFbc9D8", channel: "AgamenonMacondo", banda: "ENdB", type: "video oficial", importance: 3 },
  { id: "11", title: "Frío – Video Oficial", duration: "4:03", youtubeId: "MtxLhiV1aoo", channel: "AgamenonMacondo", banda: "ENdB", type: "video oficial", importance: 2 },
  { id: "12", title: "Dopaca – Video Oficial", duration: "3:50", youtubeId: "7qL_r0ng1ZE", channel: "AgamenonMacondo", banda: "ENdB", type: "video oficial", importance: 2 },
  { id: "13", title: "Rezo – Video Oficial", duration: "3:48", youtubeId: "9zDnwC-a6-I", channel: "AgamenonMacondo", banda: "ENdB", type: "video oficial", importance: 2 },
  { id: "14", title: "Muerte al Rey – Video Oficial", duration: "9:58", youtubeId: "Jlwa-y4L0KU", channel: "AgamenonMacondo", banda: "ENdB", type: "video oficial", importance: 2 },
  { id: "15", title: "El Tiempo – Video Oficial", duration: "4:36", youtubeId: "kMzyLZGPtxg", channel: "AgamenonMacondo", banda: "ENdB", type: "video oficial", importance: 2 },

  // Live Sets Completos (11)
  { id: "16", title: "Live Set A Fuego", duration: "32:50", youtubeId: "rb_Dmut9a-0", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 3 },
  { id: "17", title: "Garage Bar 2024", duration: "30:00", youtubeId: "v6tkBWR_9eI", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 3 },
  { id: "18", title: "Revelent Hall 2024", duration: "30:24", youtubeId: "75G9LWy6Cyw", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 3 },
  { id: "19", title: "Death to All Bogotá 2024", duration: "30:38", youtubeId: "oi9McMU_VQc", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 3 },
  { id: "20", title: "Tattoo Music Fest 2024", duration: "23:22", youtubeId: "kIUx2zTw20A", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 3 },
  { id: "21", title: "Storm Bar Live Set", duration: "35:42", youtubeId: "r7xXOJPkj6I", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 3 },
  { id: "22", title: "BBR 2022", duration: "33:37", youtubeId: "GTtzQ6SF8Xo", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 2 },
  { id: "23", title: "BBR 2022 (set corto)", duration: "19:14", youtubeId: "caLBrRw-8vc", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 1 },
  { id: "24", title: "Soundtech Studios", duration: "25:02", youtubeId: "TNwmXhuGJb4", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 3 },
  { id: "25", title: "Audio Room 2020", duration: "22:34", youtubeId: "gCslD37asik", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 2 },
  { id: "26", title: "Live Junio 2022", duration: "21:31", youtubeId: "Dcql_U86TOk", channel: "AgamenonMacondo", banda: "ENdB", type: "live set", importance: 2 },

  // Garage Bar Sessions (6)
  { id: "27", title: "Estrellas e Imperios", duration: "2:58", youtubeId: "4dsFq3AaVDg", channel: "AgamenonMacondo", banda: "ENdB", type: "session", importance: 2 },
  { id: "28", title: "Demonas (Garage Bar)", duration: "4:21", youtubeId: "Jwfh00WR6t0", channel: "AgamenonMacondo", banda: "ENdB", type: "session", importance: 2 },
  { id: "29", title: "Sachica (Garage Bar)", duration: "3:24", youtubeId: "3xi0PunnszA", channel: "AgamenonMacondo", banda: "ENdB", type: "session", importance: 1 },
  { id: "30", title: "Líberame de la Culpa", duration: "2:58", youtubeId: "pFzOqx7RbOo", channel: "AgamenonMacondo", banda: "ENdB", type: "session", importance: 1 },
  { id: "31", title: "Transcenden Aeterna", duration: "2:43", youtubeId: "7KVOUiLh4K0", channel: "AgamenonMacondo", banda: "ENdB", type: "session", importance: 1 },
  { id: "32", title: "Abre (Garage Bar)", duration: "3:15", youtubeId: "YU8ipTu24Ls", channel: "AgamenonMacondo", banda: "ENdB", type: "session", importance: 1 },

  // Live sueltos
  { id: "33", title: "Hasta la Muerte Invicto Live 2023", duration: "2:53", youtubeId: "2ElQyFyB388", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 2 },
  { id: "34", title: "DEMONAS LIVE 2023 (con Ataque en Contra)", duration: "4:12", youtubeId: "JPm_D4bejLM", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 2 },
  { id: "35", title: "Demonas Live Soundtech", duration: "4:14", youtubeId: "SZz1ATXMsUo", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "36", title: "Demonas (Live 2024)", duration: "4:15", youtubeId: "aZPsFFVT71M", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 2 },
  { id: "37", title: "Sachica Live 2023", duration: "3:21", youtubeId: "VY7ddnytToE", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "38", title: "Estrellas e Imperios Live 2023", duration: "2:33", youtubeId: "pZx3taRs_Jg", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "39", title: "Si No Vuelvo Live", duration: "2:37", youtubeId: "BrEpAw3HflE", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 2 },
  { id: "40", title: "Live DOPACA", duration: "2:44", youtubeId: "Ig7Yidhhe8w", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "41", title: "Desaparición del Temor (StormBar)", duration: "3:37", youtubeId: "tpDNXd5xpYw", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "42", title: "Abre (StormBar)", duration: "3:10", youtubeId: "ks0HabkADBI", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "43", title: "Ansias de Gloria (StormBar)", duration: "3:37", youtubeId: "oPBvY-dxFh4", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "44", title: "Nada es Real (StormBar)", duration: "3:43", youtubeId: "l_Iql6aIq4k", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "45", title: "Renacer (StormBar)", duration: "3:14", youtubeId: "McpSi139FS0", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "46", title: "Virtudes y Hechizos", duration: "3:11", youtubeId: "5VLSleOti_o", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "47", title: "Ary Franco", duration: "5:05", youtubeId: "bQy84M0d20g", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "48", title: "Paisas", duration: "3:51", youtubeId: "disXAuVw23M", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },
  { id: "49", title: "Ícaro (live)", duration: "3:40", youtubeId: "ISdQOI_Pz0E", channel: "AgamenonMacondo", banda: "ENdB", type: "live suelto", importance: 1 },

  // Covers
  { id: "50", title: "Bank Robber (The Clash Cover)", duration: "3:12", youtubeId: "tj2KVtueAiA", channel: "AgamenonMacondo", banda: "ENdB", type: "cover", importance: 2 },
  { id: "51", title: "Reacción: Bank Robber", duration: "8:20", youtubeId: "pjKM7jeC4sQ", channel: "AgamenonMacondo", banda: "ENdB", type: "cover", importance: 1 },

  // Vlogs
  { id: "52", title: "Baterías Demonas (grabación EP)", duration: "1:50", youtubeId: "xXNMzekbyes", channel: "AgamenonMacondo", banda: "ENdB", type: "vlog", importance: 1 },
  { id: "53", title: "Caos y Redención (lanzamiento Decimation)", duration: "4:07", youtubeId: "4MMp8jJxEU8", channel: "AgamenonMacondo", banda: "ENdB", type: "vlog", importance: 2 },
  { id: "54", title: "No Nos Vio Nadie (Garage Bar)", duration: "6:07", youtubeId: "_Mmh8UZi8FM", channel: "AgamenonMacondo", banda: "ENdB", type: "vlog", importance: 2 },

  // Álbumes en Agamenon (duplicados)
  { id: "55", title: "Si No Vuelvo Álbum Completo", duration: "15:51", youtubeId: "6WiMO9H0H10", channel: "AgamenonMacondo", banda: "ENdB", type: "album", importance: 2 },
  { id: "56", title: "SINGULARIDAD (Inmaculada) Full Album", duration: "26:22", youtubeId: "3FX29UJDO3g", channel: "AgamenonMacondo", banda: "ENdB", type: "album", importance: 2 },

  // Ataque en Contra en Agamenon (4)
  { id: "57", title: "Fuerza y Fe live", duration: "2:54", youtubeId: "MI3qRKJR9Cc", channel: "AgamenonMacondo", banda: "Ataque en Contra", type: "live suelto", importance: 2 },
  { id: "58", title: "Sobrevivientes live", duration: "2:25", youtubeId: "n78w-4oYDT4", channel: "AgamenonMacondo", banda: "Ataque en Contra", type: "live suelto", importance: 2 },
  { id: "59", title: "Pasamontañas live", duration: "2:02", youtubeId: "Nepun_JSyvk", channel: "AgamenonMacondo", banda: "Ataque en Contra", type: "live suelto", importance: 2 },
  { id: "60", title: "No Representas live", duration: "2:08", youtubeId: "rD78XeGONHQ", channel: "AgamenonMacondo", banda: "Ataque en Contra", type: "live suelto", importance: 2 },

  // Canal @patadasvoladorasycosmos — Ataque en Contra (7)
  { id: "61", title: "Ataque en Contra — Live Set COMPLETO SIPVDC", duration: "30:07", youtubeId: "Ky9wiiQ6PSI", channel: "PatadasVoladoras", banda: "Ataque en Contra", type: "live set", importance: 3 },
  { id: "62", title: "Ataque en Contra — Pasa Montañas", duration: "2:02", youtubeId: "8kDQE64esWs", channel: "PatadasVoladoras", banda: "Ataque en Contra", type: "live suelto", importance: 2 },
  { id: "63", title: "Ataque en Contra — Hacha y Machete", duration: "2:40", youtubeId: "GGFKJwUbqeM", channel: "PatadasVoladoras", banda: "Ataque en Contra", type: "live suelto", importance: 2 },
  { id: "64", title: "Ataque en Contra — Fuerza y Fe", duration: "2:55", youtubeId: "3u8CmfFJ7jw", channel: "PatadasVoladoras", banda: "Ataque en Contra", type: "live suelto", importance: 2 },
  { id: "65", title: "Ataque en Contra — No Representan", duration: "2:03", youtubeId: "s6t9d8bEvkI", channel: "PatadasVoladoras", banda: "Ataque en Contra", type: "live suelto", importance: 2 },
  { id: "66", title: "Ataque en Contra — Sobrevivientes", duration: "2:26", youtubeId: "estby18Zh74", channel: "PatadasVoladoras", banda: "Ataque en Contra", type: "live suelto", importance: 2 },
  { id: "67", title: "Ataque en Contra — Todavía en Pie", duration: "5:06", youtubeId: "CegrBcvHxY4", channel: "PatadasVoladoras", banda: "Ataque en Contra", type: "live suelto", importance: 3 },

  // Pitbull HC (1)
  { id: "68", title: "Pitbull HC (2017 Madrid live set) SIPVDC", duration: "40:08", youtubeId: "skt6UXDau80", channel: "PatadasVoladoras", banda: "Pitbull HC", type: "live set", importance: 3 },

  // DACELOS (2)
  { id: "69", title: "Dar a cada uno Lo que es suyo — Strife set list", duration: "58:05", youtubeId: "4McHq77HyEw", channel: "PatadasVoladoras", banda: "DACELOS", type: "live set", importance: 2 },
  { id: "70", title: "Dar cada uno lo que es Suyo — Live set 31102021", duration: "60:33", youtubeId: "4XinZZvPsGk", channel: "PatadasVoladoras", banda: "DACELOS", type: "live set", importance: 2 },

  // Escena underground (12)
  { id: "71", title: "Grito — Live Set SIPVDC", duration: "41:12", youtubeId: "wpdRJJrQuNg", channel: "PatadasVoladoras", banda: "Escena underground", type: "live set", importance: 1 },
  { id: "72", title: "El Santo Hereje — Live Set SIPVDC", duration: "6:53", youtubeId: "q8e9RaagnIk", channel: "PatadasVoladoras", banda: "Escena underground", type: "live suelto", importance: 1 },
  { id: "73", title: "Lealtad ala Cru — Live Set SIPVDC", duration: "7:17", youtubeId: "ZsuImLisf3o", channel: "PatadasVoladoras", banda: "Escena underground", type: "live suelto", importance: 1 },
  { id: "74", title: "Street Sick — Live Set SIPVDC", duration: "3:12", youtubeId: "PKP5N5R3qpQ", channel: "PatadasVoladoras", banda: "Escena underground", type: "live suelto", importance: 1 },
  { id: "75", title: "Scum Crew Feat Jay m Vee — Live Set", duration: "4:40", youtubeId: "SXdIsk58bpg", channel: "PatadasVoladoras", banda: "Escena underground", type: "live suelto", importance: 1 },
  { id: "76", title: "Loathsome Faith — My Last Hour", duration: "3:19", youtubeId: "7prreBXXacA", channel: "PatadasVoladoras", banda: "Escena underground", type: "live suelto", importance: 1 },
  { id: "77", title: "Poker — Live Set SIPVDC", duration: "4:47", youtubeId: "wpWIIgizYjo", channel: "PatadasVoladoras", banda: "Escena underground", type: "live suelto", importance: 1 },
  { id: "78", title: "Zagreb — Live Set SIPVDC", duration: "3:13", youtubeId: "YjQFU5bW-_Y", channel: "PatadasVoladoras", banda: "Escena underground", type: "live suelto", importance: 1 },
  { id: "79", title: "Otra Alternativa — Live Set 2017", duration: "37:12", youtubeId: "w3RzdPPI7HA", channel: "PatadasVoladoras", banda: "Escena underground", type: "live set", importance: 1 },
  { id: "80", title: "Aire Como Plomo — Live Set SIPVDC", duration: "2:32", youtubeId: "UTGoIOJzaN4", channel: "PatadasVoladoras", banda: "Escena underground", type: "live suelto", importance: 1 },
  { id: "81", title: "Último Recurso — Live Set SIPVDC", duration: "29:47", youtubeId: "lv4_SsVJw3o", channel: "PatadasVoladoras", banda: "Escena underground", type: "live set", importance: 1 },
  { id: "82", title: "Distracción — Live Set SIPVDC", duration: "35:30", youtubeId: "phHrT8ylWQo", channel: "PatadasVoladoras", banda: "Escena underground", type: "live set", importance: 1 },
  { id: "83", title: "Bengala — Bogotá Live Set SIPVDC", duration: "11:17", youtubeId: "6CejPwBI674", channel: "PatadasVoladoras", banda: "Escena underground", type: "live suelto", importance: 1 },
];