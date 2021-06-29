<template>
  <div class="card shadow" style="width: 22rem;">
    <img
      :src="require(`../assets/img/${foodproduct.img}`)"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">{{ foodproduct.name }}</h5>
      <p class="card-text">Harga : Rp. {{ foodproduct.price }}</p>
      <a :href="'/foods/' + foodproduct.id" class="btn btn-success"
        ><b-icon-cart></b-icon-cart> Pesan</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFoods",
  props: ["foodproduct"],
};
</script>

<style></style>
