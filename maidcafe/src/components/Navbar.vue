<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container">
        <b-navbar-brand href="/">MAID CAFE</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/foods">Makanan</router-link>
            <router-link class="nav-link" to="/drinks">Minuman</router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-button variant="primary" href="/buckets">
                Keranjang
                <b-icon-bag></b-icon-bag>
                <span class="badge badge-success ml-2">{{ setUpdateNotification ? setUpdateNotification.length : quantity_orders.length  }}</span>
              </b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  props: ['setUpdateNotification'],
  data() {
    return {
      quantity_orders: [],
    };
  },
  methods: {
    setQuantity(data) {
      this.quantity_orders = data
    }
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/bucket")
      .then((response) => this.setQuantity(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>

<style></style>
