<template>
  <div class="home">
    <Navbar :setUpdateNotification="buckets" />
    <div class="container">
      <div class="row mt-3">
        <div class="col">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Pesanan</li>
            <li class="breadcrumb-item active" aria-current="page">
              <b>Keranjang Saya</b>
            </li>
          </ol>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h3><b>Pesanan Saya</b></h3>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Foto</th>
                <th scope="col">Pesanan</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Total Harga</th>
                <th scope="col" width="10px">Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(bucket, index) in buckets" :key="bucket.id">
                <th>{{ index + 1 }}</th>
                <td>
                  <img
                    :src="require(`../assets/img/${bucket.product.img}`)"
                    width="112px"
                    class="rounded float-start"
                    alt="..."
                  />
                </td>
                <td>{{ bucket.product.name }}</td>
                <td>{{ bucket.quantity }}</td>
                <td>{{ bucket.information ? bucket.information : "-" }}</td>
                <td>Rp. {{ bucket.quantity * bucket.product.price }}</td>
                <td align="center" class="text-danger">
                  <b-icon-trash @click="setDelete(bucket.id)"></b-icon-trash>
                </td>
              </tr>
              <tr>
                <td colspan="4">
                  <h4 class="mt-3 "><b>Total Keseluruhan</b></h4>
                </td>
                <td colspan="3" align="center">
                  <h3 class="mt-3">
                    <b>Rp. {{ totalHarga }}</b>
                  </h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <img
            src="../assets/img/order-img.svg"
            width="355px"
            class="img-fluid float-right"
            alt="..."
          />
        </div>
        <div class="col">
          <form v-on:submit.prevent>
            <div class="mb-3">
              <h4 align="center"><b>Konfirmasi Pemesanan</b></h4>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Nama
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Nama Anda"
                v-model="checkout.name"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                No Meja
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="No Meja"
                v-model="checkout.no_table"
              />
            </div>
            <div class="mb-3">
              <button
                type="submit"
                class="btn btn-success float-right"
                @click="setCheckout"
              >
                <b-icon-cart></b-icon-cart> Konfirmasi
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
  name: "Buckets",
  components: {
    Navbar,
  },
  data() {
    return {
      buckets: [],
      checkout: {},
    };
  },
  methods: {
    setBuckets(data) {
      this.buckets = data;
    },
    setDelete(id) {
      // Make a request for a user with a given ID
      axios
        .delete("http://localhost:3000/bucket/" + id)
        .then(() => {
          this.$router.push({ path: "/buckets" });
          this.$toast.success("Berhasil menghapus pesanan !", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          // Make reload page after delete
          axios
            .get("http://localhost:3000/bucket")
            .then((response) => this.setBuckets(response.data))
            .catch((error) => console.log("Gagal", error));
        })
        .catch((error) => console.log("Gagal", error));
    },
    setCheckout() {
      // console.log("Pesan : ", this.checkout)
      if (this.checkout.name && this.checkout.no_table) {
        this.checkout.buckets = this.buckets;
        axios
          .post("http://localhost:3000/orders", this.checkout)
          .then(() => {
            this.buckets.map(function(item) {
              return axios
                .delete("http://localhost:3000/bucket/" + item.id)
                .catch((error) => console.log("Gagal", error));
            });
            this.$router.push({ path: "/checkout" });
            this.$toast.success("Berhasil dipesan !", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((error) => console.log("Gagal", error));
      } else {
        this.$toast.success("Isi data konfirmasi pesanan terlebih dahulu !", {
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
      .get("http://localhost:3000/bucket")
      .then((response) => this.setBuckets(response.data))
      .catch((error) => console.log("Gagal", error));
  },
  computed: {
    totalHarga() {
      return this.buckets.reduce(function(items, data) {
        return items + data.product.price * data.quantity;
      }, 0);
    },
  },
};
</script>

<style></style>
