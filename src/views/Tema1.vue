<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Equipos de certificación
      
    .row.justify-content-center.align-items-center.my-4
      .col.order-lg-1.order-2
        p.mb-0 La certificación de cableado estructurado se lleva a cabo para asegurar que las instalaciones cumplan con los estándares de calidad y rendimiento establecidos. Esto es fundamental para garantizar que la infraestructura de red soporte las aplicaciones actuales y futuras de manera eficiente. Para realizar estas tareas, se utilizan diversos equipos de certificación diseñados para evaluar parámetros específicos y brindar información detallada sobre la integridad y la capacidad del sistema de cableado.
      .col-lg-auto.pt-lg-0.pt-md-4.order-lg-2.order-1
        img.img-a.img-t(src='@/assets/curso/temas/7.png' alt='')     

    .titulo-sexto.color-acento-botones
      h5 Figura 1.
      span Equipos de certificación y parámetros de medición
    
    .bgfig.p-5.brad.mb-2
      img.img-a.img-t(src='@/assets/curso/temas/8.svg' alt='La Figura 1 se denomina «Equipos de certificación y parámetros de medición» y consiste en mostrar visualmente el proceso de diagnóstico y reparación de fallas en equipos de cómputo, mostrando el paso a paso desde la identificación de problemas hasta la validación final.') 
    figcaption Fuente: OIT, 2024.   

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Tipos de certificadores 

    p Existen varios tipos de certificadores que se utilizan en la industria, cada uno adaptado a diferentes niveles de pruebas y requisitos específicos:     

    .row.bg3.align-items-center
      .px-lg-5.px-4
        .bgw.brad.p-5.my-5
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Certificadores de nivel Básico
                p Son dispositivos que realizan pruebas simples, como la verificación de continuidad de los cables y el mapeo de conexiones. Este tipo de certificador asegura que los pares de cables estén conectados correctamente y no tengan cortocircuitos ni conexiones cruzadas. Aunque no son adecuados para medir parámetros avanzados, son útiles para tareas de instalación inicial y resolución de problemas básicos.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/10.png', alt='')  

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Certificadores de nivel Avanzado: 
                p Estos dispositivos ofrecen mediciones detalladas de parámetros críticos para garantizar que el cableado soporte adecuadamente las velocidades de transmisión requeridas. Las pruebas avanzadas incluyen la medición de atenuación, diafonía (NEXT y FEXT), y el retardo de propagación. Son utilizados en instalaciones que deben cumplir con normativas internacionales como TIA/EIA e ISO/IEC. Estos equipos son ampliamente empleados en entornos empresariales donde la calidad de la red es prioritaria.
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/11.png', alt='')    

            .row.justify-content-center
              .col-lg-6.my-2
                h5.mb-4 Certificadores multifunción
                p Incorporan múltiples capacidades en un solo equipo, lo que los hace versátiles y eficientes para instalaciones complejas. Además de las pruebas estándar, algunos modelos tienen funciones adicionales, como la detección de fallos en tiempo real y la capacidad de realizar diagnósticos en redes activas. Los certificadores multifunción son especialmente útiles para ingenieros de red que trabajan en proyectos que requieren rapidez y precisión.  
              .col-lg-5.my-2 
                img.img-a.img-t(src='@/assets/curso/temas/12.png', alt='')                                                   

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Calibración y mantenimiento                    

    p La precisión de los certificadores depende en gran medida de una calibración y mantenimiento adecuados. Estos procedimientos garantizan que las mediciones sean precisas y confiables, evitando así errores que podrían comprometer la calidad de la instalación:

    .row.bg6.align-items-center
      .px-lg-5.px-4
        .row.justify-content-center
          .col-lg-5.my-2
            .bg4.p-4.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/14.png' alt='')

              h5.mb-4 Calibración periódica
              p.mb-0 Se debe realizar conforme a las instrucciones del fabricante y las normas de la industria. Durante este proceso, se compara el rendimiento del certificador con un estándar conocido y se realizan ajustes si es necesario. La falta de calibración puede resultar en desviaciones que afecten la validez de las pruebas. 
          .col-lg-5.my-2
            .bg5.p-4.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/15.png' alt='')

              h5.mb-4 Mantenimiento preventivo
              p.mb-0 Esto incluye revisar regularmente el estado de los conectores y cables de prueba, limpiar los contactos eléctricos, y verificar que el software del equipo esté actualizado. Cualquier daño o desgaste en los componentes puede introducir errores en las mediciones. Además, las baterías deben ser revisadas y reemplazadas si es necesario para garantizar un funcionamiento constante. 

        .row.justify-content-center
          .col-lg-5.my-2
            .bg5.p-4.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/16.png' alt='')

              h5.mb-4 Almacenamiento adecuado
              p.mb-0 Los equipos de certificación deben almacenarse en un ambiente controlado, lejos de la humedad, el polvo y las temperaturas extremas. Muchos certificadores son sensibles a las condiciones ambientales, lo que podría afectar su funcionamiento a largo plazo. Se recomienda guardarlos en estuches de protección para evitar daños físicos durante el transporte. 
          .col-lg-5.my-2
            .bg4.p-4.brad.h-100
              img.img-t.mb-4(src='@/assets/curso/temas/17.png' alt='')

              h5.mb-4 Actualización de firmware
              p.mb-0 Los fabricantes de equipos de certificación lanzan regularmente actualizaciones de firmware para mejorar las capacidades del dispositivo y corregir problemas conocidos. Es fundamental estar al tanto de estas actualizaciones y aplicarlas para mantener el equipo en óptimas condiciones operativas. 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Parámetros de medición                

    p Los parámetros medidos por los certificadores determinan la capacidad y el rendimiento del cableado estructurado. Una comprensión detallada de estos parámetros ayuda a identificar y solucionar problemas potenciales antes de que afecten las comunicaciones de red:

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/21.png' alt='')       
      .col-lg-8.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Atenuación")
            p Se refiere a la disminución de la intensidad de la señal a medida que viaja por el cable. Una atenuación excesiva puede llevar a la pérdida de datos o a una transmisión deficiente. Las pruebas de atenuación verifican que la señal se mantenga dentro de los límites aceptables para la distancia especificada. Factores como el tipo de cable, la calidad de los conectores y las interferencias externas pueden influir en la atenuación. 
          div(titulo="Diafonía")
            p Existen dos tipos principales de diafonía que se miden: NEXT (Near-End Crosstalk) y FEXT (Far-End Crosstalk). La diafonía se produce cuando la señal de un par de cables se acopla a un par adyacente, causando interferencias. NEXT mide la diafonía cerca del punto de transmisión, mientras que FEXT lo hace en el extremo opuesto. Mantener estos valores dentro de los límites especificados ayuda a asegurar que las señales no interfieran entre sí, especialmente en aplicaciones de alta velocidad. 
          div(titulo="Retardo de propagación y <i>skew</i> de retardo")
            p El retardo de propagación es el tiempo que tarda una señal en viajar de un extremo a otro del cable. Un retardo excesivo puede afectar la sincronización de las señales en aplicaciones sensibles al tiempo, como el video en tiempo real. El #[i skew] de retardo se refiere a la diferencia en el tiempo de llegada de las señales en diferentes pares de cables. Este parámetro es crítico en aplicaciones donde múltiples señales deben llegar sincronizadas, como en la transmisión de datos de redes gigabit. 
          div(titulo="Impedancia y retorno de pérdida")
            p La impedancia es la resistencia que el cable ofrece al paso de la señal. Las variaciones de impedancia pueden causar reflexiones de la señal, conocidas como retorno de pérdida, que afectan la integridad de la transmisión. Los certificadores miden estos parámetros para asegurar que el cableado sea adecuado para las aplicaciones previstas y no presente problemas de reflejo que afecten la calidad de la señal.                                     

 

</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
import SlyderF from '../bootstrap/SlyderF'
import TabsC from '../bootstrap/TabsC'
export default {
  name: 'Tema1',
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
