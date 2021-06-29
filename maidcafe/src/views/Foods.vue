<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <div class="row mt-3">
        <div class="col">
          <h2>Daftar <b>Makanan</b></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Nama Makanan"
              aria-describedby="basic-addon1"
              @keyup="setSearchFoods"
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
          v-for="foodproduct in foodproducts"
          :key="foodproduct.id"
        >
          <CardFoods :foodproduct="foodproduct" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardFoods from "@/components/CardFoods.vue";
import axios from "axios";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardFoods,
  },
  data() {
    return {
      foodproducts: [],
      search: "",
    };
  },
  methods: {
    setFoodProducts(data) {
      this.foodproducts = data;
    },
    setSearchFoods() {
      // Make a request for a user with a given ID
      axios
        .get("http://localhost:3000/foods?q=" + this.search)
        .then((response) => this.setFoodProducts(response.data))
        .catch((error) => console.log("Gagal", error));
    },
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/foods")
      .then((response) => this.setFoodProducts(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>

<style></style>
