$(document).ready(function(){
  $('*').keyup(keypressed);
  });
function keypressed(event)
{
  if (event.keyCode == 40)
  {
    var selected = $("div.select");
    var next_selected = selected.next();
    if (next_selected.length == 0)
    {
      next_selected = selected.parent().children(":first");
    }
    selected.toggleClass("select");
    next_selected.toggleClass("select");
  }
  else if(event.keyCode == 38)
  {
    var selected = $("div.select");
    var next_selected = selected.prev();
    if (next_selected.length == 0)
    {
      next_selected = selected.parent().children(":last");
    }
    selected.toggleClass("select");
    next_selected.toggleClass("select");
  }
}
