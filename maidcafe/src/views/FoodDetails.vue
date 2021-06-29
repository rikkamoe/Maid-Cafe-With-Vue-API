<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <div class="row mt-3">
        <div class="col">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/foods">Makanan</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              <b>{{ detailfoods.name }}</b>
            </li>
          </ol>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <img
            :src="require(`../assets/img/${detailfoods.img}`)"
            class="img-fluid"
            alt="..."
          />
        </div>
        <div class="col-md-6">
          <h2>
            <b>{{ detailfoods.name }}</b>
          </h2>
          <h5>
            Harga : <b>Rp. {{ detailfoods.price }}</b>
          </h5>
          <hr />
          <form v-on:submit.prevent>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Jumlah Pesan
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Jumlah Pesan"
                v-model="order.quantity"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Keterangan
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Keterangan Pesananan"
                v-model="order.information"
              ></textarea>
            </div>
            <div class="mb-3">
              <button
                type="submit"
                class="btn btn-success float-right"
                @click="setOrder"
              >
                <b-icon-cart></b-icon-cart> Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodDetails",
  components: {
    Navbar,
  },
  data() {
    return {
      detailfoods: {},
      order: {},
    };
  },
  methods: {
    setDetail(data) {
      this.detailfoods = data;
    },
    setOrder() {
      // console.log(this.order);
      if (this.order.quantity && this.order.information) {
        this.order.product = this.detailfoods;
        axios
          .post("http://localhost:3000/bucket", this.order)
          .then(() => {
            this.$router.push({ path: "/buckets" }) 
            this.$toast.success("Berhasil masuk ke keranjang !", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((error) => console.log("Gagal", error));
      } else {
        this.$toast.success("Isi data pesanan terlebih dahulu !", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/foods/" + this.$route.params.id)
      .then((response) => this.setDetail(response.data))
      .catch((error) => console.log("Gagal", error));
  },
};
</script>

<style></style>
