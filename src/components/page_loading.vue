<template lang="pug">
.page-loading
  .rains
    //- h1 loading
    .rain
    .rain
    .rain
    .rain

</template>

<script>
export default {

}
</script>

<style lang="sass">
$colorBlue: #A8D3D2
.page-loading
  position: fixed
  background-color: rgba(#112,0.9)
  
  width: 100vw
  height: 100vh
  position: fixed
  left: 0
  top: 0
  z-index: 1000
  display: flex
  justify-content: center
  align-items: center

  .rains
    display: flex

    @keyframes rainIn
      0%,100%
        opacity: 0

      20%,80%
        opacity: 1
        transform: translateY(0px)
      0%
        transform: translateY(-30px)
      100%
        transform: translateY(30px)



    .rain
      width: 20px
      height:  70px
      background-color: $colorBlue
      border-radius: 50px
      margin: 10px
      animation: rainIn 2.5s infinite
      @for $i from 1 through 4
        &:nth-child(#{$i})
          animation-delay: #{$i*-0.2s - 0.6s} 
      
    

</style>
