jQuery.noConflict();
jQuery(document).ready(function() {
jQuery("#IrArriba").hide();
jQuery("#volver").hide();
jQuery("#tag").hide();
jQuery(function () {
jQuery(window).scroll(function () {
if ($(this).scrollTop() > 200) {
jQuery('#IrArriba').fadeIn('slow');
jQuery('#volver').fadeOut('slow');
jQuery('#tag').fadeOut('slow');
} else {
jQuery('#IrArriba').fadeOut('slow');
;jQuery('#volver').fadeIn('slow');
jQuery('#tag').fadeIn('slow');
}
});
jQuery('#IrArriba a').click(function () {
jQuery('body,html').animate({
scrollTop: 0
}, 800);
return false;
});
});

});