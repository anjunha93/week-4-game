
  var targetNumber = Math.floor(Math.random() * 109 +19);
  $("#number-to-guess").text(targetNumber);
  var wins = 0;
  var losses = 0;
  $("#wins").text(wins);
  $("#losses").text(losses);


  var counter = 0;
  $("#counter").text(counter);


  $("#myObject").css('background-image', 'url("https://www.planwallpaper.com/static/images/518164-backgrounds.jpg")');

  

  var numberOptions = [];


  
  for (var i = 0; i < 4; i++) {
    numberOptions.push(Math.floor(Math.random() * 11 + 1));
  }
  



  


  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < 4; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
    $("#counter").text(counter);
  


      if (counter === targetNumber) {
      wins++;
      $("#wins").text(wins);
      counter = 0;
      $("#counter").text(counter);
      targetNumber = Math.floor(Math.random() * 109 +19);
      $("#number-to-guess").text(targetNumber);



    }

    else if (counter >= targetNumber) {
      losses++;
      $("#losses").text(losses);
      counter = 0;
      $("#counter").text(counter);
      targetNumber = Math.floor(Math.random() * 109 +19);
      $("#number-to-guess").text(targetNumber);


    }


  });

