var finished_rendering = function () {
    console.log("finished rendering plugins");
    var spinner = document.getElementById("spinner");
    spinner.removeAttribute("style");
    spinner.removeChild(spinner.childNodes[0]);
};

window.fbAsyncInit = function() {
FB.init({
    appId: '126968564676905',
    cookie: true,
    xfbml: true,
    version: 'v3.0'
});
FB.AppEvents.logPageView();
FB.Event.subscribe('xfbml.render', finished_rendering);

};
function FBLogin() {
    FB.api('/me',response => {
        $vm0.$data.chat.user = response.name;
        localStorage.setItem("Nombre", response.name)
        
    });
    FB.api('/me/picture?redirect=false', res =>{
        $vm0.$data.chat.pic = res.data.url;
        localStorage.setItem("pic", res.data.url);
        
    })
    $vm0.$data.showModal = false;
    $vm0.$data.show = false;
}