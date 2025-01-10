<template>
  <div>
    <p>sdsdsdas</p>
    <input @keyup="inputting" v-model="telephone" type="text" class="form-control bg-light border-0" placeholder="Téléphone" style="height: 55px;">
  </div>
</template>

<script>
export default {
  name: "PhoneInput",
  data(){
    return {
      telephone:""
    }
  },
  methods:{
    inputting(input)
    {
      input=input.key;
      input=Number(input);
      if(!(/^\d$/.test(input)))
      {
        this.telephone=this.telephone.slice(0,-1);
      }


    }
  }
}
</script>



<style scoped>

</style>