<template>
<div clas="claimWrapper">
   <h1 class="claim">SPACER</h1>
  <p clas="subclaim">
    Begin your journey throught our amazing galaxy,
    and discover places you never even heard of.
  </p>
  <p clas="subclaim">
    Type anything spcae-related to stard.
  </p>
</div>
</template>

<script>
export default {
  name: 'Claim',
};
</script>

<style lang="scss" scoped>

  .claimWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .claim{
    font-size: 50px;
  }

  .subclaim{
    margin-top: 20px 0 0 0;
    font-size: 13px;
  }
</style>
