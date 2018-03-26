	// var quotes = [
	//  			{ words: "A Man's True Enemy is Doubt",
	// 				author: "Elroy Chibex",
	// 			},
	// 			{ words: "I am ready to meet my Maker. Is my Maker ready to meet me?",
	// 			   	author: "Sir Winston Churchill",
	// 			},
	// 			{ words: "Never Give Up, Even if Jupiter rips the heavens and dangles his cock from the skies",
	// 				author: "Unknown",
	// 			},
	// 			{ words: "Man know thyself",
	// 				author: "Socrates",
	// 			},
	// 			{ words: "Do one thing everyday that scares you",
	// 				author: "Roosevelt",
	// 			},
	// 			{ words: "Don't stay in bed, unless you can make money on the bed",
	// 				author: "George Burns",
	// 			},
	// 			]
	// var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#9b59b6', '#FB6964'];

	// var text = document.querySelector("#text");
	// var author = document.querySelector("#author");
	// var button = document.querySelector(".quote-button");
	// var backBody = document.querySelector("body");
	// var tweet = document.querySelector("#tweet-quote");


	// function changeBackColor () {
	// var diffColors = Math.floor(Math.random() * colors.length);
	// backBody.style.backgroundColor = colors[diffColors];
	// button.style.backgroundColor = colors[diffColors];
	// tweet.style.backgroundColor = colors[diffColors];
	// }
	// var random = Math.floor(Math.random() * quotes.length);
	// text.textContent = quotes[random].words;
	// author.textContent = "-" + quotes[random].author;



	// tweet.addEventListener("click",function () {
	// 	alert("Clicked");
	// });

	/** js/main.js **/
	$(document).ready(function(){
	  $('.quote-button').click(function(){
	    var color=['#78281F','#78281F','#1B4F72','#145A32','#1D8348','#935116']; /* array of hex color */
	    var index=color[Math.floor(Math.random()*color.length)]; /* random color from color array */
	    getRandomQuote();
	  });
	});

	  /** ajax function which make api call to talaikis random quote api **/
	function getRandomQuote(){
	  var color=['#78281F','#78281F','#1B4F72','#145A32','#1D8348','#935116']; /* array of hex color */
	  var index=color[Math.floor(Math.random()*color.length)]; /* random color from color array */
	  /* Make ajax call here */
	  $.ajax({
	    url: 'https://talaikis.com/api/quotes/random/',
	    type: 'GET',
	    dataType: 'json',
	  success: function(data) {
	  var quote = data.quote;
	  var author = data.author;
	  $('#text').html(quote);
	  $('#author').html("-"+author);
	  $('body').css('background-color', index);
	  $('.quote-box').css('color', index);
	  $('button').css('background-color', index);
	  $("#tweet").attr('href',"https://twitter.com/intent/tweet?text="+quote+" "+author);
	},
	    error: function(err) {
	      $('#text').html("Oops something went wrong.");
	    }
	  });
	};

