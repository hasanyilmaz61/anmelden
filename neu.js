var app5 = new Vue({
  el: '#app',
  data: {
    anmelden:"ANMELDEN",
    vorname:"",
    nachname:"",
    alt:"",
    ok:false,
    ergebnis:"",
    sonuc:"color:red",
  },
  methods: {
    klick:function(){
      
      if(this.vorname==""||this.nachname=="" ){
        this.ergebnis="please fill in the blanks ";
        return;
      }
      


      else if(this.alt>=18 && this.ok==true){
          this.ergebnis="transaction successful ";
          alert("basari ile gonderildi");


      }
      else{
          alert("error");
          this.ergebnis="error";
      }



  }
  }
})