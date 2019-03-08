IsPC();
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            window.location.href= './mobile_web/interface';
            break;
        }
        // else{
        //     window.location.href= './web_media/interface';
        // }
    }
    return flag;
}
