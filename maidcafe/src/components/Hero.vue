<template>
  <div class="hero">
    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-3">
        <div class="col-md-6">
          <img src="../assets/img/hero-img.svg" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h4><strong>MAID CAFE</strong> Restoran</h4>
              <p class="mb-0">
                Segera pilih makanan dan minuman di Maid Cafe Restoran
              </p>
              <p>Nikmati makanan bersama keluarga di Maid Cafe</p>
              <b-button class="btn btn-lg btn-success" href="/foods">
                <b-icon-arrow-right></b-icon-arrow-right> Pesan Sekarang
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-3">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h4><strong>MAID CAFE</strong> Restoran</h4>
              <p class="mb-0">
                Segera pilih makanan dan minuman di Maid Cafe Restoran
              </p>
              <p>Nikmati makanan bersama keluarga di Maid Cafe</p>
              <b-button class="btn btn-lg btn-success" href="/foods">
                <b-icon-arrow-right></b-icon-arrow-right> Pesan Sekarang
                </b-button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/img/hero-img.svg" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
