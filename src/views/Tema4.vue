<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Documentación y garantía

    .row.justify-content-center.align-items-center.bg12.p-4.brad.mb-4
      .col-lg-auto
        img.img-a.img-t(src='@/assets/curso/temas/55.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 Una vez que el cableado estructurado ha sido instalado y certificado, es fundamental llevar a cabo una documentación completa y precisa de los resultados. Esto no solo garantiza que la instalación cumpla con los estándares requeridos, sino que también proporciona una base sólida para el mantenimiento futuro, la resolución de problemas y la gestión de garantías. 

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Informes de certificación

    p.mb-5 Los informes de certificación son documentos detallados que incluyen los resultados de las pruebas realizadas a cada segmento del cableado. Estos informes son necesarios para demostrar que la instalación cumple con las especificaciones y estándares establecidos.

    .row.bg8.align-items-center.mb-5
      .px-lg-5.px-4
        .row.justify-content-start
          .col-auto.mb-lg-4.mb-0
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bgicon.text-white.p-0.px-4
                h3.mb-1 Contenido del informe

        .row.justify-content-center
          .col-lg-3.d-none.d-lg-block.j1 
            img.img-a.img-t(src='@/assets/curso/temas/57.png', alt='')
          .col-lg-9
            .bg9.brad.p-4.h-100.j1
              SlyderA(tipo="b")
                .bgw.sha.brad1.p-4.h-100
                  .row.justify-content-center
                    .col-lg-4.my-lg-0.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/56.png' alt='')  
                    .col-lg-8.my-lg-0.my-3
                      h5 Descripción de la instalación
                      p.mb-0 Incluye detalles como el tipo de cable utilizado, la longitud de los tramos y los conectores empleados.     

                .bgw.sha.brad1.p-4.h-100
                  .row.justify-content-center
                    .col-lg-4.my-lg-0.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/56.png' alt='')  
                    .col-lg-8.my-lg-0.my-3
                      h5 Resultados de las pruebas
                      p.mb-0 Se presentan los datos de cada prueba, como la atenuación, la diafonía, el retardo y el mapeo de cables. Los valores se comparan con los límites especificados por los estándares, indicando si se ha aprobado o no.  

                .bgw.sha.brad1.p-4.h-100
                  .row.justify-content-center
                    .col-lg-4.my-lg-0.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/56.png' alt='')  
                    .col-lg-8.my-lg-0.my-3
                      h5 Identificación de puntos críticos
                      p.mb-0 Se marcan las áreas donde las pruebas revelaron problemas que deben ser corregidos, junto con recomendaciones para su solución.  

                .bgw.sha.brad1.p-4.h-100
                  .row.justify-content-center
                    .col-lg-4.my-lg-0.my-3
                      img.img-a.img-t(src='@/assets/curso/temas/56.png' alt='')  
                    .col-lg-8.my-lg-0.my-3
                      h5 Certificación de cumplimiento
                      p.mb-0 Una declaración que certifica que la instalación cumple con los requisitos de los estándares aplicables.

    .row.justify-content-start.my-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Pérdida de retorno

    .row.justify-content-center.mb-5
      .col-lg-4.my-lg-0.my-3
        .bg10.p-4.brad.h-100
          h5 Validez legal y contractual
          p.mb-0 En muchos proyectos, los informes de certificación son un requisito contractual para la aceptación de la obra. También pueden ser necesarios en auditorías o inspecciones.

      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/58.png' alt='') 


      .col-lg-4.my-lg-0.my-3
        img.img-t.mb-4(src='@/assets/curso/temas/59.png' alt='') 
        h5 Soporte para garantías 
        p Los informes detallados son útiles para gestionar reclamos de garantía, ya que proporcionan evidencia de que el cableado se instaló y probó correctamente.                     

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Garantías extendidas

    p Las garantías extendidas son un beneficio adicional ofrecido por los fabricantes de cables y equipos de certificación. Estas garantías proporcionan protección adicional a los clientes, asegurando que el cableado funcionará conforme a los estándares durante un periodo prolongado.
    .row.justify-content-start.my-5
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Requisitos para las garantías extendidas

    .row.justify-content-center.mb-4
      .col-lg-9.my-lg-0.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg7")
          div(titulo="Instalación certificada ")
            p Las garantías extendidas generalmente requieren que la instalación sea realizada por un instalador certificado y que todas las pruebas de certificación hayan sido aprobadas. 
          div(titulo="Documentación completa ")
            p Se debe presentar la documentación de la instalación y los resultados de las pruebas para activar la garantía. Los fabricantes revisan estos documentos para verificar que se cumplieron las condiciones de instalación. 
          div(titulo="Mantenimiento adecuado ")
            p Algunas garantías requieren un mantenimiento periódico del cableado para seguir siendo válidas. Esto puede incluir inspecciones regulares y la reparación de cualquier daño detectado.                         
      .col-lg-3.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/60.png' alt='')  


    .row.justify-content-start.my-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Ventajas de las garantías extendidas

    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/61.png' alt='')      
      .col-lg-8.my-lg-0.my-3.j1
        ol.mb-0.lista-ol--cuadro.fa-ul
          li 
            .lista-ol--cuadro__vineta
              span 1
            span #[b Tranquilidad para los clientes:] Saber que el cableado está respaldado por una garantía ofrece una mayor tranquilidad y seguridad de que la instalación se ha realizado correctamente.
          hr
          li.mb-0 
            .lista-ol--cuadro__vineta
              span 2
            span.mb-0 #[b Protección de la inversión:] Las garantías extendidas protegen a las organizaciones de los costos imprevistos de reparaciones o reemplazos, especialmente en grandes instalaciones de red.
          hr          

    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Registros y archivos
    .row.justify-content-center.bgi.p-4.brad.mb-5
      .col-lg-auto.j1
        img.img-a.img-t(src='@/assets/curso/temas/62.png' alt='')
      .col.pt-lg-0.pt-md-4
        p.mb-0 La gestión adecuada de los registros y archivos es fundamental para el mantenimiento de la infraestructura de cableado y para facilitar futuras actualizaciones o reparaciones. Los registros deben ser precisos, completos y fácilmente accesibles para los técnicos responsables de la red. 

    .row.bg8.align-items-center.mb-5
      .px-lg-5.px-4
        .row.justify-content-start.my-4
          .col-auto
            .list
              .list__item
                .list__item__icon
                  img(src='@/assets/curso/temas/icon.svg', alt='')
              .list__txt.bgicon.text-white.p-0.px-4
                h3.mb-1 Tipos de registros importantes

        .row.justify-content-center.text-center
          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/18.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Planos de la instalación
                p.mb-0 Diagramas que muestran la ubicación de los puntos de conexión, las rutas de los cables y los paneles de distribución. Estos planos ayudan a los técnicos a entender la disposición física del cableado.

          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/19.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Historial de mantenimiento
                p.mb-0 Registros de todas las inspecciones, reparaciones y actualizaciones realizadas en la red. Este historial es útil para identificar patrones de fallos y planificar mejoras.

          .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/20.png", alt="alt")
              .crd_hover_txt--body
                h4.mb-3 Actualizaciones de firmware y equipos
                p.mb-0 Documentación sobre las actualizaciones realizadas en los equipos de red y cualquier cambio en el software o hardware que pueda afectar el rendimiento del cableado.                    


    .row.justify-content-start.my-4
      .col-auto
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.text-white.p-0.px-4
            h3.mb-1 Mejores prácticas para la gestión de archivos
    .row.justify-content-center
      .col-lg-8.my-lg-0.my-3.j1
        ol.lista-ol--cuadro.fa-ul
          li 
            .lista-ol--cuadro__vineta
              span 1
            span #[b Organización estructurada:] Mantener los registros organizados por fecha y tipo de documento facilita la búsqueda de información relevante. Se recomienda el uso de software de gestión documental para grandes instalaciones.
          hr
          li 
            .lista-ol--cuadro__vineta
              span 2
            span #[b Copias de seguridad:] Realizar copias de seguridad regulares de todos los archivos y documentos relacionados con el cableado estructurado sirve para proteger la información contra pérdidas accidentales.
          hr 
          li 
            .lista-ol--cuadro__vineta
              span 3
            span #[b Accesibilidad:] Asegurar que los documentos sean fácilmente accesibles para los técnicos autorizados, tanto en formato físico como digital. Esto mejora la eficiencia en la gestión y el mantenimiento de la red.
          hr    

      .col-lg-4.my-lg-0.my-3.j1
        img.img-a.img-t(src='@/assets/curso/temas/63.png' alt='')                  
</template>

<script>
import AcordionA from '../bootstrap/AcordionA'
import SlyderA from '../bootstrap/SlyderA'
import SlyderF from '../bootstrap/SlyderF'
import TabsC from '../bootstrap/TabsC'
export default {
  name: 'Tema4',
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
