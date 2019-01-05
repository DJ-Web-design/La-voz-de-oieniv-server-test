var finished_rendering = function() {
    console.log("finished rendering plugins");
    var spinner = document.getElementById("spinner");
    spinner.removeAttribute("style");
    spinner.removeChild(spinner.childNodes[0]);
};

function FBLogin() {
	let component = $nuxt.$children[1].$children[1].$children[0].$children[2];
    
    FB.api('/me', res => {
        component.chat.user = res.name;
        localStorage.setItem("Nombre", res.name)
    });
    FB.api('/me/picture?redirect=false', res =>{
    	console.log(res);
        component.chat.pic = res.data.url;
        localStorage.setItem("pic", res.data.url);
    });
    console.log("Logged")
    FB.AppEvents.logEvent("Facebook Login");

    component.show = false;
    component.showModal = false;
}

function initializeFB() {
	if(!window.FB) {
		window.fbAsyncInit = () => {
			FB.init({
				appId      : '126968564676905',
				xfbml      : true,
				version    : 'v3.0'
			});
			FB.AppEvents.logPageView();
			FB.Event.subscribe('xfbml.render', finished_rendering);
		};
		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/es_LA/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	} else {
		FB.XFBML.parse();
	}
}