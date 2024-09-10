<template>

    <h1>О нас</h1>
    <router-view />
    <!-- <p class="test">Test1</p>
    <p>Test2</p>
    <p>Test3</p>
    <p>Test4</p>
    <p>Test5</p>
    <p>Test6</p>
    <div class="flex flex-column md:flex-row md:justify-content-between row-gap-3">
    <Button type="button" label="Button 1"></Button>
    <Button class="test2" type="button" label="Button 2"  icon="pi pi-search"   severity="secondary"></Button>
    <Button type="button" label="Button 3" severity="help"></Button>
    <Button icon="pi pi-home" aria-label="Save" severity="help"></Button>


</div>
<div id="#loading">D</div>
<div class="log"></div>
<div class="trigger">Trigger</div>
<div class="result"></div>
 -->
    </template>
    <script>
    
    
    import $ from 'jQuery'
    import Slider from 'primevue/slider';
import 'primeicons/primeicons.css'
    $(function () {
         $(".test").css("background-color", "red");
        
    });
    $( document ).on( "ajaxStart", function() {
  $( "#loading" ).show();
} );
    $(function () {
   
         $(".test2").html("<h2 class='test'>FM</h2>");
    });
   
    export default {
     data() {
        return {  value: 1 }
     },
     model: {
         prop: 'value'
     },
     props: {
          modelValue: Number,
     },
     components: {
    Slider
  },

    }
    </script>
    <style scoped>
    </style>