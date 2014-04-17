jQuery.noConflict();
jQuery(document).ready(function() {
jQuery("#IrArriba").hide();
jQuery("#volver").hide();
jQuery("#tag").hide();
jQuery(function () {
jQuery(window).scroll(function () {
if (jQuery(this).scrollTop() > 200) {
jQuery('#IrArriba').fadeIn();
jQuery('#volver').fadeOut();
jQuery('#tag').fadeOut();
} else {
jQuery('#IrArriba').fadeOut();
;jQuery('#volver').fadeIn();
jQuery('#tag').fadeIn();
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