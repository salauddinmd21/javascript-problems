
      //" kilometerToMeter- Problem"

function kilometerToMeter(kilo){
    var meter =  kilo * 1000;
    return meter;
}
 
       // budgetCalculator- Problem

 function  budgetCalculator (watch, phone, laptop){
    var watchPrice = 50;
    var phonePrice =100;
    var laptopPrice = 500;

    if (watch > 0){
          watchTotal = watch *watchPrice;
    }
     if (phone> 0){
       phoneTotal = phone *phonePrice;
     }
     if(laptop >0){

    laptopTotal = laptop *laptopPrice;
     }
    var totalCost = watchTotal + phoneTotal+ laptopTotal;
    return totalCost  
}
 
     // hotelCost - Problem

function hotelCost(days){  
  var cost = 0;

  if (days<=10){
      cost = days *100;
  }
  else if ( days<=20){
      var firstTen = 10*100;
      var remaining = days - 10;
      var secondTen = remaining *80;
      cost = firstTen + secondTen;
  }
  else {
      var firstTen = 10 *100;
      var secondTen = 10*80;
      var remaining = days -20;
      var aboveTwenty =remaining *50;
      cost =  firstTen + secondTen + aboveTwenty;
  }
   return cost;
  }
 
       //  magaFriend - Problem

  function megaFriend(char) {
    var large = char[0];
    for (var i = 0; i < char.length; i++) {
        var figure = char[i];
        if (large.length < figure.length) {
            large = figure;
        }
    }
    return large
}

        