<template>
  <div></div>
  <div class="menu-header flex justify-content-between z-5">
    <img
      class="image-button inline-flex"
      src="images/game/Logo-tiquera.png"
      @click="goTiquera()"
    />
    <div class="right-buttons inline-flex">
      <button class="menu-buttons">
        <i class="pi pi-search" style="font-size: 1.5rem"></i>
      </button>
      <button class="menu-buttons">
        <i class="pi pi-user" style="font-size: 1.5rem"></i>
      </button>
      <button class="menu-buttons">
        <i class="pi pi-bars" style="font-size: 1.5rem"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goTiquera() {
      window.location.reload();
      this.$router.push("/");
      this.$router.replace("/");
    },
  },
  computed: {},
};
</script>
<style scoped>
.menu-header {
  position: fixed;
  background: transparent
    linear-gradient(180deg, #101010 0%, #06060666 60%, #00000000 100%) 0% 0%
    no-repeat padding-box;
  top: 0px;
  width: 100%;
  height: 12.5rem;
}
.image-button {
  margin-top: 4rem;
  margin-left: 10rem;
  width: 8.313rem;
  height: 3.938rem;
  opacity: 1;
}
.image-button:hover {
  cursor: pointer;
}
.menu-buttons {
  color: #ffff;
}
.right-buttons {
  margin-right: 10rem;
}
.menu-buttons {
  margin: 1rem;
  transition: 0.4s;
}
.menu-buttons:hover {
  cursor: pointer;
  transform: scale(1.5, 1.5);
}
@media screen and (max-width: 768px) {
  .image-button {
    margin-top: 4rem;
    margin-left: 2rem;
  }
  .right-buttons {
    margin-right: 1rem;
  }
}
</style>
