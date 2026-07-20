import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escaleta — Mamá, soy una sombra",
  description:
    "Escaleta narrativa de dirección del documental Mamá, soy una sombra. 25 secuencias, 4 actos, ~19 minutos.",
};

const actos = [
  {
    num: "I",
    title: "El Niño Que Quería Ser Hetfield",
    subtitle: "Lo que se construye antes de que exista una razón.",
    color: "border-crimson text-crimson bg-crimson/10 chip-crimson",
    secuencias: [
      {
        num: "1",
        title: "OBERTURA",
        duracion: "1:30",
        tipo: "Material de archivo + grabación presente",
        funcion:
          "Establecer la paradoja central: hay seis discos y cuatro oyentes. Hay fuego real y nadie viendo.",
      },
      {
        num: "2",
        title: "AYDA",
        duracion: "1:00",
        tipo: "Día 1",
        funcion:
          "Instalar a la madre como testigo del origen. La obsesión no nació del vacío — nació en una casa bogotana.",
      },
      {
        num: "2B",
        title: "INTERCUT: EL NIÑO Y LA CASA",
        duracion: "0:20",
        tipo: "Archivo fotográfico",
        funcion:
          "Confirmar visualmente lo que Ayda acaba de decir, sin narración.",
      },
      {
        num: "3",
        title: "BOLÍVAR",
        duracion: "1:00",
        tipo: "Día 1",
        funcion:
          "Mostrar al padre como alguien que NO entiende la música pero sí entiende al hijo.",
      },
      {
        num: "3B",
        title: "INTERCUT: LAS GUITARRAS",
        duracion: "0:20",
        tipo: "Archivo fotográfico",
        funcion:
          "Las guitarras como testigos físicos de la obsesión. Sin palabras — solo cuerdas y callos.",
      },
      {
        num: "4",
        title: "LA PRIMERA GUITARRA",
        duracion: "0:45",
        tipo: "Día 1",
        funcion:
          "Instalar la distancia entre el sueño importado y la realidad local.",
      },
      {
        num: "5",
        title: "TÍA Y PRIMA",
        duracion: "0:40",
        tipo: "Día 1",
        funcion: "Vista desde afuera — la familia que no entiende pero ve. Humor y ternura.",
      },
      {
        num: "6",
        title: "ESCOLARIDAD Y DECISIONES",
        duracion: "0:40",
        tipo: "Día 1",
        funcion:
          "La bifurcación: la guitarra le ganó al libro. No fue heroico — fue lo que salió.",
      },
    ],
  },
  {
    num: "II",
    title: "La Escena",
    subtitle: "El mundo donde esa razón aprendió a existir.",
    color: "border-magenta text-magenta bg-magenta/10 chip-magenta",
    secuencias: [
      {
        num: "7",
        title: "BOGOTÁ SUBTERRÁNEA",
        duracion: "0:30",
        tipo: "Archivo + presente",
        funcion: "Cambiar de régimen visual. Bogotá como personaje.",
      },
      {
        num: "8",
        title: "PITBULL HC",
        duracion: "0:50",
        tipo: "Día 2",
        funcion: "Primera banda. La convicción antes que la técnica.",
      },
      {
        num: "9",
        title: "ATAQUE EN CONTRA",
        duracion: "0:45",
        tipo: "Día 2",
        funcion: "La banda como estructura. Más dirección, misma agresión.",
      },
      {
        num: "10",
        title: "NONSENSE PREMONITION",
        duracion: "0:55",
        tipo: "Día 2",
        funcion: "La transformación técnica. De punk a death metal.",
      },
      {
        num: "11",
        title: "LOS VENUES",
        duracion: "1:05",
        tipo: "Día 2",
        funcion:
          "Los estadios de Alejandro. Cada venue es un Wembley personal.",
      },
      {
        num: "12",
        title: "TRANSICIÓN: DE LA ESCENA AL SILENCIO",
        duracion: "0:30",
        tipo: "Día 2",
        funcion: "Corte seco. De la energía de la escena al vacío del número.",
      },
    ],
  },
  {
    num: "III",
    title: "4 Oyentes",
    subtitle: "Lo que el algoritmo no puede medir.",
    color: "border-violet text-violet bg-violet/10 chip-violet",
    secuencias: [
      {
        num: "13",
        title: "EL NÚMERO",
        duracion: "0:40",
        tipo: "Día 3",
        funcion:
          "El número como golpe. No es broma — es dato. El algoritmo no tiene sentido del humor.",
      },
      {
        num: "14",
        title: "ENTREVISTAS DE CALLE",
        duracion: "1:10",
        tipo: "Día 3 — grabación en calle",
        funcion: "La paradoja hecha comedia. Nadie conoce la banda. Pero la banda es real.",
      },
      {
        num: "15",
        title: "LOS NÚMEROS",
        duracion: "0:35",
        tipo: "Día 3",
        funcion: "El contraste entre el esfuerzo y el resultado medible. Sin narración. Solo datos.",
      },
      {
        num: "16",
        title: "EVOLUCIÓN",
        duracion: "1:20",
        tipo: "Día 3",
        funcion:
          "La paradoja central en datos: seis discos, doce años, cuatro oyentes.",
      },
      {
        num: "17",
        title: "LOS VENUES EN VIVO",
        duracion: "1:00",
        tipo: "Día 3",
        funcion:
          "La evidencia visual de que la música es real, independientemente del número de oyentes.",
      },
      {
        num: "18",
        title: "LAS MÁSCARAS",
        duracion: "0:40",
        tipo: "Día 3",
        funcion:
          "La doble identidad como estrategia de supervivencia artística.",
      },
      {
        num: "19",
        title: "LA ESTÉTICA VS. LOS NÚMEROS",
        duracion: "0:35",
        tipo: "Día 3",
        funcion:
          "El contraste brutal hecho imagen. Seis portadas profesionales vs. un número que no se mueve.",
      },
    ],
  },
  {
    num: "IV",
    title: "Todavía en Pie",
    subtitle: "Lo que queda cuando todo lo demás se retira.",
    color: "border-cyan text-cyan bg-cyan/10 chip-cyan",
    secuencias: [
      {
        num: "20",
        title: "LA BANDA EN ACCIÓN",
        duracion: "0:45",
        tipo: "Día 3",
        funcion:
          "La respuesta al silencio del Acto 3. La banda sigue existiendo. No por los números. Porque sí.",
      },
      {
        num: "21",
        title: "LA CALLE",
        duracion: "0:30",
        tipo: "Día 4",
        funcion:
          "Alejandro como parte de Bogotá, no como excepción. La ciudad no se detiene. Él tampoco.",
      },
      {
        num: "22",
        title: "EL ESTUDIO",
        duracion: "0:35",
        tipo: "Día 4",
        funcion:
          "La canción en su momento de transformación. De lo crudo a lo procesado.",
      },
      {
        num: "23",
        title: "EL DISCO SONANDO",
        duracion: "0:30",
        tipo: "Día 4",
        funcion:
          "La música llena un cuarto pequeño y se escapa por la ventana. Existe. El algoritmo no puede borrar eso.",
      },
      {
        num: "24",
        title: "FINAL: COMO CUANDO ERA NIÑO",
        duracion: "0:55",
        tipo: "Día 4",
        funcion:
          "El círculo se cierra. Alejandro vuelve a ser el niño con la guitarra.",
      },
      {
        num: "25",
        title: "CRÉDITOS FINALES",
        duracion: "0:50",
        tipo: "—",
        funcion:
          "Cierre emocional. El ensayo como metáfora: la banda entra junta, imperfecta, viva.",
      },
    ],
  },
];

export default function EscaletaPage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="gradient-magma py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black heading-brutal text-bone mb-4">
            ESCALETA
          </h1>
          <p className="text-bone/70 text-sm font-bold tracking-[0.3em] uppercase mb-2">
            Narrativa de Dirección · Base
          </p>
          <p className="text-bone/50 text-xs tracking-widest uppercase mb-6">
            25 Secuencias + 2 Intercuts · 4 Actos · ~19:15
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="/guion/escaleta.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-crimson text-[10px]"
            >
              DESCARGAR PDF
            </a>
            <a
              href="/guion/escaleta.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-outline text-[10px]"
            >
              DESCARGAR MARKDOWN
            </a>
            <Link href="/guion" className="btn-brutal btn-outline text-[10px]">
              VER GUION
            </Link>
          </div>
        </div>
      </section>

      {/* Premisa */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="card-brutal border-magenta p-6">
          <h2 className="text-magenta text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Premisa Dramática
          </h2>
          <p className="text-bone text-sm leading-relaxed mb-3">
            El documental sigue a Alejandro Sevilla Vélez, guitarrista y voz de
            En Nombre de Baal, quien en doce años grabó seis discos en Bogotá
            mientras el algoritmo le decía que solo cuatro personas lo escuchaban.
          </p>
          <p className="text-bone/70 text-sm leading-relaxed italic border-l-2 border-magenta/50 pl-4">
            La película no trata sobre el fracaso. Trata sobre lo que permanece
            cuando desaparece todo lo que debería validar lo que haces — y sigues
            haciéndolo igual.
          </p>
        </div>
      </section>

      {/* Estructura */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
        <h2 className="text-bone text-xs font-bold tracking-[0.2em] uppercase mb-4 border-b border-void-mid pb-2">
          Estructura General
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actos.map((acto) => (
            <div key={acto.num} className={`card-brutal ${acto.color} p-4`}>
              <div className="text-4xl font-black heading-brutal opacity-30">
                {acto.num}
              </div>
              <h3 className="text-bone font-black text-sm tracking-wider uppercase">
                {acto.title}
              </h3>
              <p className="text-bone/60 text-xs mt-1 italic">{acto.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Secuencias por Acto */}
      {actos.map((acto) => (
        <section key={acto.num} className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-baseline gap-4 mb-8 border-b-3 border-void-mid pb-4">
            <span
              className={`text-6xl md:text-8xl font-black heading-brutal ${acto.color.split(" ")[1]}`}
            >
              {acto.num}
            </span>
            <div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-bone">
                {acto.title}
              </h2>
              <span className={`chip ${acto.color.split(" ")[3]} mt-2`}>
                {acto.subtitle}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {acto.secuencias.map((sec) => (
              <div key={sec.num} className={`card-brutal p-5 ${acto.color.split(" ")[0]}`}>
                <div className="flex items-start gap-4">
                  <div
                    className={`text-xs font-mono font-black ${acto.color.split(" ")[1]} bg-void px-2 py-1 rounded min-w-[3rem] text-center`}
                  >
                    {sec.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-bone font-black text-sm tracking-wider uppercase">
                        {sec.title}
                      </h3>
                      <span className="text-bone-dim text-xs font-mono">
                        {sec.duracion}
                      </span>
                    </div>
                    <p className="text-bone-dim text-sm leading-relaxed mb-2">
                      {sec.funcion}
                    </p>
                    <div className="flex gap-2">
                      <span className="chip chip-void text-[9px]">
                        {sec.tipo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Nota de dirección */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="card-brutal border-gold p-6">
          <h2 className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Nota de Dirección
          </h2>
          <p className="text-bone text-sm leading-relaxed">
            La película debe construirse desde la paradoja, no desde la
            explicación. No se trata de convencer al espectador de que la música
            de Alejandro es buena — se trata de mostrar que existe, que es real, y
            que cuatro oyentes no la hacen menos real. Las entrevistas aportan
            contexto, pero el peso emocional recae en las acciones, los silencios,
            la respiración y el contraste entre lo que el algoritmo dice (cuatro)
            y lo que la música demuestra (seis discos, doce años, una terquedad
            sin condiciones). El espectador no debe sentir que está viendo un
            documental sobre una banda desconocida. Debe sentir que está
            acompañando a un hombre que hizo lo que hizo porque no podía dejar de
            hacerlo — y que los números, por pequeños que sean, no borran la
            música.
          </p>
        </div>
      </section>

      {/* Footer links */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="/guion/escaleta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal btn-crimson text-[10px]"
          >
            DESCARGAR ESCALETA PDF
          </a>
          <Link href="/guion" className="btn-brutal btn-outline text-[10px]">
            VER GUION COMPLETO
          </Link>
          <Link href="/storyboard" className="btn-brutal btn-outline text-[10px]">
            VER STORYBOARD
          </Link>
        </div>
      </section>
    </div>
  );
}