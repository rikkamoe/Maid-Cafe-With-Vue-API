<template>
  <div class="card shadow" style="width: 22rem;">
    <img :src="require(`../assets/img/${drinkproduct.img}`)" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ drinkproduct.name }}</h5>
      <p class="card-text">
        Harga : Rp. {{ drinkproduct.price }}
      </p>
      <a :href="'/drinks/' + drinkproduct.id" class="btn btn-success"><b-icon-cart></b-icon-cart> Pesan</a>
    </div>
  </div>
</template>

<script>
export default {
    name: "CardDrinks",
    props: ['drinkproduct']

};
</script>

<style></style>
