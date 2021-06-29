<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
      <div class="row mt-4">
        <div class="col">
          <h2>Menu Favorit <b>Hari ini</b></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right"
            ><b-icon-eye></b-icon-eye> Lihat semua</router-link
          >
        </div>
      </div>

      <div class="row mt-3 mb-5">
        <div
          class="col-md-4 mt-2"
          v-for="bestproduct in bestproducts"
          :key="bestproduct.id"
        >
          <CardBestMenus :bestproduct="bestproduct" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardBestMenus from "@/components/CardBestMenus.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardBestMenus,
  },
  data() {
    return {
      bestproducts: [],
    };
  },
  methods: {
    setBestProducts(data) {
      this.bestproducts = data;
    },
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setBestProducts(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>
