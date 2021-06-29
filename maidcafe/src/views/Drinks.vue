<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <div class="row mt-3">
        <div class="col">
          <h2>Daftar <b>Minuman</b></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Nama Minuman"
              aria-describedby="basic-addon1"
              @keyup="setSearchDrinks"
            />
            <span class="input-group-text" id="basic-addon1"
              ><b-icon-search></b-icon-search
            ></span>
          </div>
        </div>
      </div>

      <div class="row mt-3 mb-5">
        <div
          class="col-md-4 mt-2"
          v-for="drinkproduct in drinkproducts"
          :key="drinkproduct.id"
        >
          <CardDrinks :drinkproduct="drinkproduct" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardDrinks from "@/components/CardDrinks.vue";
import axios from "axios";

export default {
  name: "Drinks",
  components: {
    Navbar,
    CardDrinks,
  },
  data() {
    return {
      drinkproducts: [],
      search: "",
    };
  },
  methods: {
    setDrinkProducts(data) {
      this.drinkproducts = data;
    },
    setSearchDrinks() {
      // Make a request for a user with a given ID
      axios
        .get("http://localhost:3000/drinks?q=" + this.search)
        .then((response) => this.setDrinkProducts(response.data))
        .catch((error) => console.log("Gagal", error));
    },
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/drinks")
      .then((response) => this.setDrinkProducts(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>

<style></style>
