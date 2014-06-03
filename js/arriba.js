jQuery.noConflict();
jQuery(document).ready(function() {
jQuery("#IrArriba").hide();
jQuery("#volver").hide();

jQuery(function () {
jQuery(window).scroll(function () {
if ($(this).scrollTop() > 700) {
    
	jQuery('#panel2').fadeIn('slow');
jQuery('#IrArriba').fadeIn('slow');
jQuery('#volver').fadeIn('slow');
jQuery('#tag').fadeOut('slow');jQuery('#IrArriba').fadeIn('slow');
jQuery('#share').fadeOut('slow');
jQuery('#fbc').fadeOut('slow');
jQuery('#twc').fadeOut('slow');
jQuery('#likec').fadeOut('slow');
jQuery('#com').fadeOut('slow');
jQuery('#follow').fadeOut('slow');
jQuery('#menu').fadeOut('slow');

} 
else {
  

	
	
jQuery('#IrArriba').fadeOut('slow');
;jQuery('#volver').fadeOut('slow');
jQuery('#tag').fadeIn('slow');
jQuery('#share').fadeIn('slow');
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