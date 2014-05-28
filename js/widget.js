jQuery.noConflict();
jQuery(document).ready(function() {
jQuery("#top").hide();

jQuery(function () {
jQuery(window).scroll(function () {
if ($(this).scrollTop() > 700) {
    jQuery('#top').fadeIn('slow');

} 
else {
   jQuery('#top').fadeOut('slow');
	
}
});
$("#share,.share,.shareme").click(function(){
$('#share').show();
  $("#likec").fadeToggle('fast');
  $("#fbc").fadeToggle();
  $("#twc").fadeToggle('slow');
});
$("#tag").click(function(){

  $("#menu").fadeToggle('fast');
  $("#follow").fadeToggle();
  $("#com").fadeToggle('slow');
}); 
jQuery('#IrArriba a').click(function () {
jQuery('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
jQuery('#com').click(function () {
jQuery('body,html').animate({
scrollTop: 350
}, 800);
return false;
});
$( ".no,.share" ).click(function() {
  jQuery('#panel2').fadeOut('slow');
  jQuery('#panel3').fadeToggle('slow');

  return false;
});
jQuery('#follow').click(function () {
jQuery('body,html').animate({
scrollTop: 1000
}, 800);
return false;
});

});

});