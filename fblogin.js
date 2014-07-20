  function showlog(){
      $("#hover").fadeIn(500);
      $("#plog").fadeIn(500);
}

  function showlog_up(){
      $("#hover").fadeIn(500);
      $("#plogup").fadeIn(500);
}
  function psub(){
      $("#hover").fadeIn(500);
      $("#psub").fadeIn(500);
}  
  function cep(){
 $('#hover,#plog,#plogup').fadeOut(500);
}  

        



///////////////////
function fb_login(){
 FB.login(function(response) {
   // handle the response
      if (response.authResponse) {
         testAPI();
   } else {
     console.log('User cancelled login or did not fully authorize.');
   }

 }, {scope: ' public_profile, email', return_scopes: true});
}


  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().





    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      showlog();
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
    showlog();
    }



  }



  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
  FB.init({
    appId      : '315404808623569',
    status: true,
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.0' // use version 2.0
  });

FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    console.log(response.authResponse.accessToken);
  }
});


  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.



  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
      $('#hover,#plog').fadeOut(500);
    FB.api('/me', function(response) {
      var ufid=response.id;
      console.log('Successful login for: ' + response.name);
       var username= response.name;
        var ufemail= response.mail;
$("#fbuserpic").html('<img src=\"https://graph.facebook.com/' + ufid + '/picture?width=40&height=40\" class=\"imgp\"/>');
 $("#fbuserpic" ).show();
//aqui pides toda la info del usuario que quieras
// pero solo te devolvera la que estas supuesto a recivir
//depende de los permisos que pidas
// y la foto la consigue sasi mira aja?

});



} 
