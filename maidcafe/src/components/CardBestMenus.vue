<template>
  <div class="card shadow" style="width: 22rem;">
    <img :src="require(`../assets/img/${bestproduct.img}`)" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ bestproduct.name }}</h5>
      <p class="card-text">
        Harga : Rp. {{ bestproduct.price }}
      </p>
      <a :href="'/foods/'+bestproduct.id" class="btn btn-success"><b-icon-cart></b-icon-cart> Pesan</a>
    </div>
  </div>
</template>

<script>
export default {
    name: "CardBestMenus",
    props: ['bestproduct']

};
</script>

<style></style>
