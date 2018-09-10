<template>
<div>
	<button @click="setItem">Set Item</button>
  </div>
</template>
<script>
  export default {
    mounted(){
      var lastVote = localStorage.getItem("voto");


      if (lastVote) {
        let date = new Date();
        if (lastVote === `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`) {
          alert(lastVote)
        } else {
          var count = localStorage.getItem("voteCount");
          localStorage.setItem("voteCount", count++);
        }
        
      }
    },
    methods:{
      setItem(){
        let date = new Date();
        localStorage.setItem("voto", `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
        localStorage.setItem("voteCount", 1);

      }
    }
  }
</script>