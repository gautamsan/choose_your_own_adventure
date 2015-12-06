var chapter = {
  intro: "You are standing in a field. Do you go east or west?",
  east: "You're east!", 
  west: "You're west!" 
}

var chapterEast = {
  intro: "You can see a jungle on your left and a lake on your right. Do you want to go left or right?",
  left: "You're in the jungle!", 
  right: "You're in the lake!" 
}


var $div = $('<div>');
$div.attr("class", "chapter")
$div.text(chapter.intro);

var ids = ["east", "west", "left", "right"];
var button = "<button class='btn'>"

$('.main').prepend($div);
$div.append("<button id='east' class='btn'>");
$div.append("<button id='west' class='btn'>");

$('#east').text('east');
$('#west').text('west');

$('#east').on('click', function() {
  $('button').toggle();
  $('.chapter').toggle();
  $('.chapter').text(chapter.east);
  $('.chapter').addClass('east');
  $('.chapter').toggle();
  $('.east').append(chapterEast.intro).append(button);
  $('.btn').attr("id", "left").text("left");
  $('.east').append(button);
});

$('#west').on('click', function() {
  $('button').toggle();
  $('.chapter').toggle();
  $('.chapter').text(chapter.west)
  $('.chapter').addClass('west');
  $('.chapter').toggle();
  $('.west').append(chapterWest.intro).append(button);
  $('.btn').attr("id", "left").text("left");
});