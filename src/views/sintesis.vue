<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.mb-4
      .col-lg-4.my-lg-0.my-3
        img.img-a.img-t(src='@/assets/curso/temas/1.png' alt='')    
      .col-lg-8.my-lg-0.my-3
        .row.justify-content-center.align-items-center.mb-4
          .col.pt-lg-0.pt-md-4
            p.mb-0 Este componente aborda los principios y técnicas para la certificación de cableado estructurado, garantizando la calidad y el rendimiento de las redes de datos. Inicia con la preparación del entorno y la selección adecuada de los equipos de certificación, seguidos de pruebas como la medición de atenuación, diafonía y retardo, que permiten evaluar la capacidad del cableado para soportar aplicaciones modernas.
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/2.png' alt='')

        .row.justify-content-center.align-items-center.bg1.p-4.brad
          .col-lg-auto
            img.img-a.img-t(src='@/assets/curso/temas/3.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0 Complementariamente, el componente enfatiza la importancia de la documentación completa y precisa, incluyendo la generación de informes detallados que validan las instalaciones y facilitan el soporte técnico futuro. Se destaca la gestión de garantías y la planificación de mantenimiento preventivo, permitiendo que las redes permanezcan funcionales y fiables a lo largo del tiempo.
        
    p.mb-5 Complementariamente, el componente enfatiza la importancia de la documentación completa y precisa, incluyendo la generación de informes detallados que validan las instalaciones y facilitan el soporte técnico futuro. Se destaca la gestión de garantías y la planificación de mantenimiento preventivo, permitiendo que las redes permanezcan funcionales y fiables a lo largo del tiempo.

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img.img-a.img-t(src="@/assets/curso/temas/sintesis.svg", alt="La Figura 2 se denomina «Síntesis temática del componente», y allí se ilustra el proceso de certificación de cableado estructurado, que abarca desde la preparación y pruebas de rendimiento hasta el diagnóstico, corrección, y la validación con documentación final.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
