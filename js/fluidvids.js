/* Fluidvids */ ! function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b : a.fluidvids = b()
}(this, function() {
    "use strict";
    var a = {
            selector: "iframe",
            players: ["www.youtube.com", "player.vimeo.com"]
        },
        b = document.head || document.getElementsByTagName("head")[0],
        c = ".fluidvids{width:100%;position:relative;}.fluidvids iframe{position:absolute;top:0px;left:0px;width:100%;height:100%;}",
        d = function(b) {
            var c = new RegExp("^(https?:)?//(?:" + a.players.join("|") + ").*$", "i");
            return c.test(b)
        },
        e = function(a) {
            if (!a.getAttribute("data-fluidvids")) {
                var b = document.createElement("div"),
                    c = parseInt(a.height ? a.height : a.offsetHeight, 10) / parseInt(a.width ? a.width : a.offsetWidth, 10) * 100;
                a.parentNode.insertBefore(b, a), a.setAttribute("data-fluidvids", "loaded"), b.className += "fluidvids", b.style.paddingTop = c + "%", b.appendChild(a)
            }
        },
        f = function() {
            var a = document.createElement("div");
            a.innerHTML = "<p>x</p><style>" + c + "</style>", b.appendChild(a.childNodes[1])
        };
    return a.apply = function() {
        for (var b = document.querySelectorAll(a.selector), c = 0; c < b.length; c++) {
            var f = b[c];
            d(f.src) && e(f)
        }
    }, a.init = function(b) {
        for (var c in b) a[c] = b[c];
        a.apply(), f()
    }, a
});