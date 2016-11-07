var unitType="imperial";

function changeUnitType(){
  if (unitType=="imperial"){
    unitType="metric";

  }else if (unitType=="metric"){
    unitType="imperial";
  }
  getWeather();

}

function getWeather(){

  $.ajax({
    url:"https://api.openweathermap.org/data/2.5/weather?q=atlanta&units="+unitType+"&APPID=cf663e2c26cc68e28b520cc139c8c2c7",
    dataType: "json",
    success: function(data){


      $("#city").text(data.name);
      $("#temp").text(data.main.temp+"°");
      $("#condition").text(data.weather[0].main);
      $("#icon").attr("src", "https://openweathermap.org/img/w/"+data.weather[0].icon+".png"  );
      if (unitType=="imperial"){

        $("#unitSymbol").text("F");

        }else if (unitType=="metric"){

        $("#unitSymbol").text("C");
      }

    }
    })
}

$(document).ready(function(){
    getWeather();
});

$("#tempDiv").click(function(){
  changeUnitType();
})

$("#title").click(function(){
  getWeather();
})
