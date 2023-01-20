<template>
  <TheWelcome />
  <div class="up">
    <Carousel
      :value="items"
      :numVisible="1"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="2500"
      :responsiveOptions="itemsCarouselResponsiveOptions"
      class="timig-carousel"
    >
      <template #item="slotProps">
        <div class="item">
          <div class="item-content relative">
            <img
              class="item-image z-0 relative"
              :src="slotProps.data.img"
              :alt="slotProps.img"
            />
            <div class="item-footer flex flex-column text-left z-1 absolute">
              <span class="item-title">Monagas innova</span>
              <span class="item-description"
                ><b
                  >Soluciones para ciudades avanzadas con tecnología Blockchain,
                  DeFi y Web 3.0</b
                ></span
              >
              <span class="item-location">Edif. Lotería de Oriente</span>
              <Button class="info-button" @click="goPagando()"
                >COMPRAR ENTRADAS</Button
              >
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
  <div class="middle">
    <div class="pt-6">
      <div class="section">
        <span class="section-title">LO MÁS BUSCADO</span>
      </div>
      <Carousel
        :value="titles"
        :numVisible="6"
        :numScroll="1"
        :circular="true"
        :autoplayInterval="3500"
        :responsiveOptions="showsCarouselResponsiveOptions"
        class="shows-carousel"
      >
        <template #item="slotProps">
          <div class="shows">
            <div class="shows-content">
              <img
                @click="goPagando()"
                class="shows-image"
                :src="slotProps.data.img"
                :alt="slotProps.img"
              />
              <div class="shows-footer text-center">
                <span class="shows-info"
                  >Soluciones para ciudades avanzadas con tecnología Blockchain,
                  DeFi y Web 3.0</span
                >
              </div>
            </div>
          </div>
        </template>
      </Carousel>
      <div class="section">
        <span class="section-title">EVENTOS A ESTAS FECHAS</span>
      </div>
      <div class="grid text-center event">
        <div class="col-4">
          <img
            @click="goPagando()"
            class="left-image"
            src="images/game/example.png"
          />
        </div>
        <div class="col">
          <div class="flex flex-column inline-flex">
            <img
              @click="goPagando()"
              class="right-image inline-flex"
              src="images/game/example-two.png"
            />
            <div class="flex justify-content-between">
              <span class="event-info"
                >Soluciones para ciudades Avanzadas con tecnologia.</span
              >
              <div class="flex flex-column event-date">
                <span><b>08/09</b></span>
                <span>Diciembre</span>
              </div>
            </div>
          </div>
          <div class="flex flex-column inline-flex">
            <img
              @click="goPagando()"
              class="right-image inline-flex"
              src="images/game/example-two.png"
            />
            <div class="flex justify-content-between">
              <span class="event-info"
                >Soluciones para ciudades Avanzadas con tecnologia.</span
              >
              <div class="flex flex-column event-date">
                <span><b>08/09</b></span>
                <span>Diciembre</span>
              </div>
            </div>
          </div>
          <div class="flex flex-column inline-flex">
            <img
              @click="goPagando()"
              class="right-image inline-flex"
              src="images/game/example-two.png"
            />
            <div class="flex justify-content-between">
              <span class="event-info"
                >Soluciones para ciudades Avanzadas con tecnologia.</span
              >
              <div class="flex flex-column event-date">
                <span><b>08/09</b></span>
                <span>Diciembre</span>
              </div>
            </div>
          </div>
          <div class="flex flex-column inline-flex">
            <img
              @click="goPagando()"
              class="right-image inline-flex"
              src="images/game/example-two.png"
            />
            <div class="flex justify-content-between">
              <span class="event-info"
                >Soluciones para ciudades Avanzadas con tecnologia.</span
              >
              <div class="flex flex-column event-date">
                <span><b>08/09</b></span>
                <span>Diciembre</span>
              </div>
            </div>
          </div>
          <div class="flex flex-column inline-flex">
            <img
              @click="goPagando()"
              class="right-image inline-flex"
              src="images/game/example-two.png"
            />
            <div class="flex justify-content-between">
              <span class="event-info"
                >Soluciones para ciudades Avanzadas con tecnologia.</span
              >
              <div class="flex flex-column event-date">
                <span><b>08/09</b></span>
                <span>Diciembre</span>
              </div>
            </div>
          </div>
          <div class="flex flex-column inline-flex">
            <img
              @click="goPagando()"
              class="right-image inline-flex"
              src="images/game/example-two.png"
            />
            <div class="flex justify-content-between">
              <span class="event-info"
                >Soluciones para ciudades Avanzadas con tecnologia.</span
              >
              <div class="flex flex-column event-date">
                <span><b>08/09</b></span>
                <span>Diciembre</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <span class="section-title">PRÓXIMAMENTE</span>
      </div>
      <div class="flex align-items-center justify-content-center next-items">
        <img
          class="right-image mb-6"
          @click="goPagando()"
          src="images/game/example-two.png"
        />
        <img
          class="right-image mb-6"
          @click="goPagando()"
          src="images/game/example-two.png"
        />
        <img
          class="right-image mb-6"
          @click="goPagando()"
          src="images/game/example-two.png"
        />
      </div>
    </div>
  </div>
  <div class="footer flex flex-column text-center">
    <h5 class="mt-4">¿NECESITAS AYUDA?</h5>
    <h7
      >Estamos aquí para ayudarte, contáctanos y recibe información sobre
      nuestros eventos y tickets.</h7
    >
    <h5>CONTÁCTANOS</h5>
    <div class="tiquera-slogan">
      <span class="tiquera-name-slogan">TIQUERA,</span>
      <span> UN MUNDO HACIA EL ENTRETENIMIENTO </span>
    </div>
    <h7>Estás disfrutando nuestros servicios gracias a</h7>
    <div class="flex justify-content-center align-items-center mb-4 mt-4">
      <img
        class="tecfin-image"
        @click="goTecfin()"
        src="images/game/tecfin.png"
      />
    </div>
  </div>
  <div
    class="footer-info flex sm:justify-content-evenly justify-content-between align-items-center"
  >
    <div>
      <span class="m-2 footer-links">Elaborado por TEC-FIN 212 C.A</span>
      <span class="m-2 footer-links">Políticas de Seguridad</span>
      <span class="m-2 footer-links">Términos de Uso</span>
      <span
        ><i class="pi pi-instagram footer-links ml-2 mr-2"></i
        ><i class="pi pi-facebook footer-links mr-2"></i
        ><i class="pi pi-twitter footer-links mr-2"></i
        ><i class="pi pi-youtube footer-links"></i
      ></span>
    </div>
    <div class="inline-flex m-3">
      <span class="m-2 footer-links">Tiquera.com</span>
      <img
        class="footer-image-tiquera ml-2"
        src="images/game/white-logo-tiquera.png"
      />
    </div>
  </div>
</template>
<script>
import TheWelcome from "./TheWelcome.vue"
export default {
  components: {
  },
  data() {
    return {
      titles: [
        {
          img: "images/game/example.png",
        },
        {
          img: "images/game/example.png",
        },
        {
          img: "images/game/example.png",
        },
        {
          img: "images/game/example.png",
        },
        {
          img: "images/game/example.png",
        },
        {
          img: "images/game/example.png",
        },
        {
          img: "images/game/example.png",
        },
        {
          img: "images/game/example.png",
        },
      ],
      items: [
        {
          img: "images/game/title-example.png",
        },
      ],
      itemsCarouselResponsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
      showsCarouselResponsiveOptions: [
        {
          breakpoint: "1180px",
          numVisible: 4,
          numScroll: 4,
        },
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    goPagando() {
      window.location =
        "https://pagando.tech/ticketoffice-online?game_option=tiquera";
    },
    goTecfin() {
      window.location = "https://tecfin212.com";
    },
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/averta-blackitalic");
.timig-carousel {
  margin-bottom: -4px;
}
.item-title {
  font-size: 1rem;
  font-weight: 100;
  font-family: "Averta-Thin", sans-serif;
}
.item-description {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  font-family: "Averta-Thin", sans-serif;
}
.item-location {
  font-size: 1rem;
  font-weight: 100;
  font-family: "Averta-Thin", sans-serif;
}
.item-image {
  width: 100%;
  height: 50rem;
}
.item-footer {
  width: 20rem;
  color: #ffffff;
  bottom: 4rem;
  left: 5rem;
}
.info-button {
  width: fit-content;
  height: 2.75rem;
  background: #ffffff;
  box-shadow: 5px 5px 8px #00000029;
  border-radius: 0.25rem;
  color: #1a1a1a;
  font-weight: 700;
  font-family: "Averta-Bold", sans-serif;
  margin-top: 1rem;
}
.shows-content {
  margin-left: 2.5rem;
  transition: 0.4s;
}
.shows-image {
  border-radius: 0.625rem;
  width: 17.5rem;
  height: 21.875rem;
}
.shows-content:hover {
  cursor: pointer;
}
.shows-info {
  font-family: "Averta-Thin", sans-serif;
}
.middle {
  background: #1a1a1a 0% 0% no-repeat padding-box;
}
.section {
  color: #ffff;
  font-family: "Averta-Thin", sans-serif;
  font-size: 1.875rem;
  border-left: 4px solid #fcd535;
  margin-left: 2.188rem;
  margin-bottom: 2.188rem;
  margin-top: 2.188rem;
}
.section-title {
  margin: 1rem;
}
.event {
  margin: 0;
  color: #ffffff;
}
.event-info {
  width: 12rem;
  margin-left: 1rem;
  font-family: "Averta-Thin", sans-serif;
}
.event-date {
  margin-right: 1rem;
  font-family: "Averta-Thin", sans-serif;
}
.left-image {
  width: 31.25rem;
  height: 31.25rem;
  transition: 0.4s;
  border-radius: 0.625rem;
}
.right-image {
  margin: 0.625rem;
  width: fit-content;
  height: 12.5rem;
  border-radius: 0.625rem;
  transition: 0.4s;
}
.left-image:hover {
  cursor: pointer;
  transform: scale(1.1, 1.1);
}
.right-image:hover {
  cursor: pointer;
  transform: scale(1.1, 1.1);
}
.footer {
  background-color: #2e2e2e;
  color: #ffff;
  font-family: "Averta-Thin", sans-serif;
}
.shows-footer {
  width: 17rem;
  color: #ffffff;
}
.footer-info {
  background-color: #131313;
  color: #8d8d8d;
}
.tiquera-slogan {
  font-size: 1.5rem;
  font-weight: 100;
}
.tiquera-name-slogan {
  color: #fcd535;
  font-size: 1.8rem;
  font-weight: 900;
  font-family: "Averta-BoldItalic", sans-serif;
}
.tecfin-image {
  justify-content: center;
  width: 5rem;
  opacity: 0.5;
}
.tecfin-image:hover {
  opacity: 1;
  cursor: pointer;
}
.footer-links:hover {
  cursor: pointer;
  color: #ffff;
}
.footer-image-tiquera {
  width: 5rem;
}
@media screen and (max-width: 1024px) {
  .left-image {
    margin-left: 2.2rem;
    width: 22rem;
    height: 25rem;
  }
  .shows-content {
    margin-left: 5rem;
  }
  .next-items {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
