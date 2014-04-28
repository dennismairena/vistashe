jQuery.noConflict();
jQuery(document).ready(function() {
jQuery("#IrArriba").hide();
jQuery("#volver").hide();

jQuery(function () {
jQuery(window).scroll(function () {
if ($(this).scrollTop() > 200) {
jQuery('#IrArriba').fadeIn('slow');
jQuery('#volver').fadeIn('slow');
jQuery('#tag').fadeOut('slow');
jQuery('#share').fadeOut('slow');
jQuery('#fbc').fadeOut('slow');
jQuery('#twc').fadeOut('slow');
jQuery('#likec').fadeOut('slow');
} else {
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
jQuery('#IrArriba a').click(function () {
jQuery('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});

});