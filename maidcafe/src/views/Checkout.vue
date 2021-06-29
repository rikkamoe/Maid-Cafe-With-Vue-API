<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <div class="row mt-3">
        <div class="col text-center">
          <img
            src="../assets/img/checkout-img.svg"
            class="img-fluid rounded mx-auto d-block"
            width="500px"
            alt="..."
          />
          <h4><b>Pesanan sudah di input. Silahkan menunggu pesanan anda beberapa menit</b></h4>
          <h5>Terima Kasih :)</h5>
          <a href="/" class="btn btn-primary mt-3"><b-icon-cart></b-icon-cart> Lanjut Pemesanan</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Checkout",
  components: {
    Navbar,
  },
};
</script>

<style></style>
