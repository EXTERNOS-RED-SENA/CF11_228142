<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Interpretación de resultados

    .row.justify-content-center
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/46.png' alt='')  
      .col.pt-lg-0.pt-md-4
        .bgi.p-3.h-100.j1
          p.mb-0 La interpretación de los resultados obtenidos de las pruebas de certificación de cableado estructurado garantiza que la red funcione conforme a los estándares de rendimiento requeridos. Comprender y analizar los datos recogidos permite a los técnicos identificar problemas y tomar medidas correctivas para optimizar la infraestructura de la red.


    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Análisis de mediciones
    p El análisis de las mediciones es el primer paso para evaluar si el cableado cumple con las especificaciones técnicas. Los resultados de las pruebas, que incluyen parámetros como atenuación, diafonía y retardo de propagación, deben ser comparados con los valores límite establecidos por los estándares de la industria, como TIA/EIA e ISO/IEC.

    .row.justify-content-center.text-center.mb-5
      .col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .bg13.brad.h-100
          img(src="@/assets/curso/temas/47.png", alt="alt")
          .p-4
            h4.mb-3 Interpretar valores en decibelios (dB)
            p.mb-0 Las mediciones de parámetros como la atenuación y la pérdida de retorno se expresan en dB. Es importante saber que un valor más bajo de atenuación es mejor, mientras que un valor más alto de pérdida de retorno es deseable.

      .col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .bg13.brad.h-100
          img(src="@/assets/curso/temas/48.png", alt="alt")
          .p-4
            h4.mb-3 Uso de #[i software] de certificación 
            p.mb-0 Los equipos de certificación suelen venir con #[i software] que facilita el análisis de los resultados. Este #[i software] puede generar informes automáticos que indican si las pruebas han sido exitosas o si se requiere una intervención. 

    .row.justify-content-center.mb-4
      .col-lg-8.my-lg-0.my-3
        h5 Ejemplo de análisis

        p.mb-0 Si una prueba de atenuación muestra un valor que supera el límite permitido, el técnico debe investigar las posibles causas, como una conexión deficiente o un cable de baja calidad. Del mismo modo, si la diafonía (NEXT o FEXT) es alta, podría indicar que los pares de cables no están lo suficientemente trenzados o que los conectores no están correctamente instalados.      
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/49.png' alt='')       
           

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Diagnóstico de problemas 

    p Una vez analizados los resultados, el siguiente paso es diagnosticar los problemas específicos que afectan el rendimiento del cableado. Este diagnóstico puede requerir una inspección física del cableado o la realización de pruebas adicionales para determinar el origen exacto de las deficiencias.
    .row.justify-content-start.my-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Problemas comunes y sus soluciones

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/50.png' alt='')      
      .col-lg-8.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Alta atenuación ")
            p Puede ser causada por un cable de longitud excesiva, conexiones defectuosas o daños físicos en el cable. Solución: Reemplazar el cable con uno de menor longitud o mejor calidad y revisar las conexiones. 
          div(titulo="Diafonía excesiva ")
            p Generalmente resulta de pares de cables trenzados de manera inadecuada o conectores defectuosos. Solución: Rehacer las terminaciones de los cables y asegurar un trenzado adecuado. 
          div(titulo="Pérdida de retorno alta ")
            p Puede deberse a una instalación incorrecta de los conectores o a variaciones en la impedancia. Solución: Reinstalar o reemplazar los conectores y revisar que el cableado cumpla con las especificaciones.
          div(titulo="Herramientas de diagnóstico ")
            p Los certificadores avanzados suelen ofrecer funciones de diagnóstico que ayudan a identificar rápidamente las áreas problemáticas. Estos equipos pueden indicar la ubicación aproximada de un fallo, lo que facilita las reparaciones.                         


    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Límites aceptables

    .row.justify-content-center.mb-5
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/51.png' alt='')  
      .col.pt-lg-0.pt-md-4
        .bg1.p-3.h-100.j1
          p.mb-0 Los límites aceptables para cada parámetro están definidos por los estándares internacionales y varían según la categoría del cable y el tipo de aplicación. Es fundamental conocer estos límites para determinar si el cableado es adecuado para las aplicaciones previstas, como redes gigabit, VoIP o transmisión de video en alta definición.  

    .row.justify-content-start.my-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Estándares de referencia
    .row.bg8.align-items-center.mb-5
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-6.my-2
            .bg4.p-4.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/52.png' alt='')

              h5.mb-4 TIA/EIA y ISO/IEC.
              p.mb-0 Estos estándares establecen los requisitos mínimos para parámetros como la atenuación, la diafonía, el retardo de propagación y la pérdida de retorno. Por ejemplo, para un cable de categoría 6, la atenuación no debe exceder un cierto valor para garantizar un rendimiento adecuado.
          .col-lg-6.my-2
            .bg2.p-4.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/53.png' alt='')

              h5.mb-4 Categorías de cables.
              p.mb-0 Los límites varían según la categoría del cable (Cat 5e, Cat 6, Cat 6a, etc.). A medida que la categoría del cable aumenta, los estándares permiten valores más estrictos para la atenuación y la diafonía.  
          
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 1. 
          span Características y consideraciones de formatos comunes

        .tabla-a.color-acento-botones.text-center.mb-5
          table
            caption Fuente: OIT, 2024.
            thead
              tr
                th Categoría de Cable
                th Velocidad Máxima
                th Ancho de Banda
                th Frecuencia Máxima
                th Aplicaciones Comunes
                th Notas Importantes

            tbody
              tr
                td.fast-bold.bgt1 Cat 5
                td Hasta 100 Mbps
                td 100 MHz
                td 100 MHz
                td Redes Ethernet estándar (Fast Ethernet)
                td Descontinuada; reemplazada por Cat 5e debido a mejoras en la diafonía y rendimiento.
              tr
                td.fast-bold.bgt1 Cat 5e
                td Hasta 1 Gbps
                td 100 MHz
                td 100 MHz
                td Redes Ethernet Gigabit, VoIP, transmisión de video
                td Mayor control de diafonía en comparación con Cat 5; sigue siendo común en instalaciones.
              tr
                td.fast-bold.bgt1 Cat 6
                td Hasta 1 Gbps (10 Gbps a distancias cortas)
                td 250 MHz
                td 250 MHz
                td Redes Gigabit, aplicaciones multimedia, videoconferencia
                td Recomendado para redes que necesitan alta velocidad y menor interferencia.
              tr
                td.fast-bold.bgt1 Cat 6a 
                td Hasta 10 Gbps
                td 500 MHz
                td 500 MHz
                td Centros de datos, redes de alta densidad
                td Mayor blindaje contra interferencias; ideal para largas distancias en entornos exigentes.
              tr
                td.fast-bold.bgt1 Cat 7
                td Hasta 10 Gbps
                td 600 MHz
                td 600 MHz
                td Redes industriales, transmisión de video de alta calidad
                td Cables blindados individualmente (S/FTP) para una mejor protección contra interferencias.
              tr
                td.fast-bold.bgt1 Cat 8
                td Hasta 40 Gbps
                td 2000 MHz
                td 2000 MHz
                td Centros de datos, aplicaciones de servidores
                td Uso principalmente en centros de datos; diseñado para conexiones de corta distancia.                                                                               
    .row.justify-content-start.mb-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Importancia de cumplir con los límites
    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.bgi.p-4.brad
          .col-lg-auto.j1
            img.img-a.img-t(src='@/assets/curso/temas/54.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 No respetar los límites establecidos puede tener consecuencias graves, como la inestabilidad de la red, la pérdida de paquetes de datos y un rendimiento deficiente en aplicaciones críticas. Asegurar que todas las mediciones estén dentro de los límites aceptables es un paso fundamental para una red fiable y duradera.             
</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
import SlyderF from '../bootstrap/SlyderF'
import TabsC from '../bootstrap/TabsC'
export default {
  name: 'Tema3',
  components: { AcordionA, SlyderA, SlyderF, TabsC },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
