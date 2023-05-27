function calculerMontantEnEuros() {
    var cryptomonnaieDepart = document.getElementById("cryptomonnaie-depart").value;
    var montantDepart = document.getElementById("montant-depart").value;
    var cryptomonnaieArrivee = document.getElementById("cryptomonnaie-arrivee").value;
    var montantArrivee = document.getElementById("montant-arrivee");
    

    
   
    
    var tauxConversion = 5000; // 1 cryptomonnaie = 5000 euros
    var montantEuros = montantDepart * tauxConversion;
    
    montantArrivee.value = montantEuros.toFixed(); // Affiche le montant en euros avec 2 décimales
  }