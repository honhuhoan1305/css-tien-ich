"use strict";

function el(e) {
    return document.getElementById(e)
}

function toggleSidebar() {
    el("sidebarMenu").classList.contains("open") ? hideSidebar() : el("sidebarMenu").classList.contains("close") && showSidebar()
}

function hideSidebar() {
    el("sidebarMenu").classList.add("close"), el("sidebarMenu").classList.remove("open"), el("main").classList.add("full")
}

function showSidebar() {
    el("sidebarMenu").classList.add("open"), el("sidebarMenu").classList.remove("close"), el("sidebarMenu").style.width = "", el("main").classList.remove("full")
}

function copyToClipBoard(e) {
    var t, n, o, a, l = document;
    e = l.createTextNode(e), t = window, n = l.body, n.appendChild(e), n.createTextRange ? (o = n.createTextRange(), o.moveToElementText(e), o.select(), l.execCommand("copy")) : (o = l.createRange(), a = t.getSelection, o.selectNodeContents(e), a().removeAllRanges(), a().addRange(o), l.execCommand("copy"), a().removeAllRanges()), e.remove()
}

function copyElementToClipboard(e) {
    window.getSelection().removeAllRanges();
    var t = document.createRange();
    t.selectNode("string" == typeof e ? document.getElementById(e) : e), window.getSelection().addRange(t), document.execCommand("copy"), window.getSelection().removeAllRanges()
}

function removeDuplicate(e) {
    return e.filter(function (t, n) {
        return e.indexOf(t) == n
    })
}

function loc_xoa_dau(e) {
    return e = e.replace(/Ă |Ă¡|áº¡|áº£|Ă£|Ă¢|áº§|áº¥|áº­|áº©|áº«|Äƒ|áº±|áº¯|áº·|áº³|áºµ/g, "a"), e = e.replace(/Ă¨|Ă©|áº¹|áº»|áº½|Ăª|á»|áº¿|á»‡|á»ƒ|á»…/g, "e"), e = e.replace(/Ă¬|Ă­|á»‹|á»‰|Ä©/g, "i"), e = e.replace(/Ă²|Ă³|á»|á»|Ăµ|Ă´|á»“|á»‘|á»™|á»•|á»—|Æ¡|á»|á»›|á»£|á»Ÿ|á»¡/g, "o"), e = e.replace(/Ă¹|Ăº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g, "u"), e = e.replace(/á»³|Ă½|á»µ|á»·|á»¹/g, "y"), e = e.replace(/Ä‘/g, "d"), e = e.replace(/Ă€|Ă|áº |áº¢|Ăƒ|Ă‚|áº¦|áº¤|áº¬|áº¨|áºª|Ä‚|áº°|áº®|áº¶|áº²|áº´/g, "A"), e = e.replace(/Ăˆ|Ă‰|áº¸|áºº|áº¼|Ă|á»€|áº¾|á»†|á»‚|á»„/g, "E"), e = e.replace(/ĂŒ|Ă|á»|á»ˆ|Ä¨/g, "I"), e = e.replace(/Ă’|Ă“|á»Œ|á»|Ă•|Ă”|á»’|á»|á»˜|á»”|á»–|Æ |á»œ|á»|á»¢|á»|á» /g, "O"), e = e.replace(/Ă™|Ă|á»¤|á»¦|Å¨|Æ¯|á»ª|á»¨|á»°|á»¬|á»®/g, "U"), e = e.replace(/á»²|Ă|á»´|á»¶|á»¸/g, "Y"), e = e.replace(/Ä/g, "D")
}

function downloadCSV(e, t) {
    var n = new Blob(["\ufeff" + e], {type: "text/csv;charset=utf-8,%EF%BB%BF"}), o = document.createElement("a");
    o.download = t, o.href = window.URL.createObjectURL(n), o.style.display = "none", document.body.appendChild(o), o.click()
}

function titleCase(e) {
    e = e.toLowerCase().split(" ");
    for (var t = 0; e.length > t; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
    return e.join(" ")
}

function sentenceCase(e) {
    var t, n, o, a, l, d, c;
    for (e = e.toLowerCase(), t = e.split("."), n = "", o = 0; t.length > o; o++) {
        for (a = "", l = t[o].replace(/^(\s*).*$/, "$1").length, t[o] = t[o].replace(/^\s+/, ""), d = t[o].charAt(t[o]).toUpperCase() + t[o].slice(1), c = 0; l > c; c++) a += " ";
        n = n + a + d + "."
    }
    return n = n.substring(0, n.length - 1), n.trim()
}

function b64EncodeUnicode(e) {
    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
        return String.fromCharCode("0x" + t)
    }))
}

function b64DecodeUnicode(e) {
    return decodeURIComponent(atob(e).split("").map(function (e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
    }).join(""))
}

function strikethroughText(e) {
    var t, n = "", o = e.split("");
    for (t = 0; o.length > t; t++) n += o[t] + "̀¶";
    return n.trim()
}

function escapeRegExp(e) {
    return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
}

function replaceAll(e, t, n) {
    return e.replace(RegExp(escapeRegExp(t), "g"), n)
}

function validURL(e) {
    var t = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
    return !!t.test(e)
}

function matchYoutubeUrl(e) {
    var t, n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "video";
    return "video" == o ? t = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/ : "list" == o && (t = /[?&]list=([^#\&\?]+)/), n = e.match(t), n ? n[1] : !1
}

function copyText() {
    if (document.getElementById("source_txt")) {
        var e = document.getElementById("source_txt");
        e.select(), e.setSelectionRange(0, 99999), document.execCommand("copy")
    }
}

function shuffle(e) {
    for (var t, n, o = e.length; 0 !== o;) n = Math.floor(Math.random() * o), o -= 1, t = e[o], e[o] = e[n], e[n] = t;
    return e
}

function setCookie(e, t, n) {
    var o, a = new Date;
    a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), o = "expires=" + a.toUTCString(), document.cookie = e + "=" + t + ";" + o + ";path=/"
}

function getCookie(e) {
    var t, n, o = e + "=", a = decodeURIComponent(document.cookie), l = a.split(";");
    for (t = 0; l.length > t; t++) {
        for (n = l[t]; " " == n.charAt(0);) n = n.substring(1);
        if (0 == n.indexOf(o)) return n.substring(o.length, n.length)
    }
    return ""
}

function deleteCookie(e) {
    document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}

function alphaOnly(e) {
    var t = e.keyCode;
    return t >= 65 && 90 >= t || 8 == t || 32 == t || 37 == t || 39 == t
}

function count_words() {
    var e, t, n, o, a;
    el("word_count") && (e = el("source_txt").value, t = e.trim(), t = e.replace(/[!@#$%^&*()_+\-=\[\]{};'~`:"\\|,.<>\/?ïƒ¼]/gi, ""), t = t.replace(/\s\s+/g, " "), n = t.match(/[\u00ff-\uffff]|\S+/g), o = 0, n && (o = n.length), el("word_count").innerHTML = o, el("char_count").innerHTML = e.length, el("line_count").innerHTML = e.split(/\r?\n|\r/).length, a = e.split(" ").length - 1, el("space_count").innerHTML = a)
}

function isCharacterALetter(e) {
    return /[a-zA-Z]/.test(e)
}

function randomName(e, t, n) {
    var o, a, l, d, c, r, s, i, u, m, g = document.getElementById("audio"),
        y = ["%$#@&*()", "+_*&^%$#", ":~!@#&^%", "=+*#$%^&", "-!#$%^&#"], h = "male",
        p = document.getElementsByName("gender");
    for (o = 0, a = p.length; a > o; o++) if (p[o].checked) {
        h = p[o].value;
        break
    }
    for (l = "yes", p = document.getElementsByName("is_fullname"), o = 0, a = p.length; a > o; o++) if (p[o].checked) {
        l = p[o].value;
        break
    }
    d = "", "yes" == l && (d = document.getElementById("surname-option").value), c = "", "select" == d && (c = document.getElementById("surname").value), r = parseInt(document.getElementById("so_luong_ten").value), s = document.getElementById("history-txt").innerHTML, i = document.getElementById("lang").value, document.getElementById("source_ogg").src = base_url + "/assets/sound/first_click.ogg", document.getElementById("source_mp3").src = base_url + "/assets/sound/first_click.mp3", g.load(), g.play(), document.getElementById(e + "-result").innerHTML = "$%&^#@!*", document.getElementById("text-note").innerHTML = '<span class="text-primary">' + label.wait + "</span>", document.getElementById(e).classList.add("d-none"), document.getElementById("find-" + e).disabled = !0, document.getElementById("appname").classList.remove("d-none"), u = setInterval(function () {
        document.getElementById(e + "-result").innerHTML = y[Math.floor(5 * Math.random())], document.getElementById(e + "-result").style.color = "rgb(" + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + ")"
    }, 50), m = new XMLHttpRequest, m.open("POST", ajax_url), m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), m.onload = function () {
        200 === m.status && setTimeout(function () {
            var t, o, a;
            clearInterval(u), document.getElementById("find-" + e).disabled = !1, document.getElementById(e).classList.remove("d-none"), document.getElementById("text-note").innerHTML = "", document.getElementById(e + "-result").innerHTML = "", document.getElementById("find-" + e + "-txt").innerHTML = label.generate, t = m.responseText.split("|"), 1 == t[2] ? (document.getElementById("history-txt").innerHTML = "", document.getElementById("history").innerHTML = "") : s ? (document.getElementById("history").innerHTML += t[1], document.getElementById("history-txt").innerHTML = s + "," + t[0]) : (document.getElementById("history").innerHTML = t[1], document.getElementById("history-txt").innerHTML = t[0]), document.getElementById("result").innerHTML = t[1], document.getElementById("meaning-list").innerHTML += t[3], feather.replace(), "yes" == n && (o = [].slice.call(document.querySelectorAll(".popover-name")), a = o.map(function (e) {
                return new bootstrap.Popover(e, {
                    title: label.meaning,
                    html: !0,
                    placement: "top",
                    trigger: "hover",
                    content: function t() {
                        var e, t, n = this.dataset.name;
                        return n = n.trim(), e = "meaning-" + replaceAll(n, " ", "-"), t = document.getElementById(e).innerHTML
                    }
                })
            }))
        }, 1e3)
    }, m.send("action=" + t + "&gender=" + h + "&is_fullname=" + l + "&surname_option=" + d + "&surname=" + c + "&so_luong=" + r + "&exclude=" + encodeURI(s) + "&lang=" + i)
}

function yoastseo_count(e) {
    var t, n, o, a, l, d, c;
    "title" == e ? (t = document.getElementById("yoastseo-title").value, document.getElementById("d-yoastseo-title").innerHTML = t, n = loc_xoa_dau(t), n = n.replace(/\s+/g, "-"), n = n.toLowerCase(), n = n.replace(/[&\/\\#,+()$~%.'":*?<>{}|]/g, ""), document.getElementById("d-yoastseo-url").innerHTML = n, o = t.length, a = document.getElementById("yoastseo-title-count"), a.innerHTML = o, 48 > o || o > 60 ? o > 0 && 47 >= o ? (a.classList.remove("bg-secondary"), a.classList.remove("bg-danger"), a.classList.remove("bg-success"), a.classList.add("bg-warning")) : (a.classList.remove("bg-secondary"), a.classList.remove("bg-warning"), a.classList.remove("bg-success"), a.classList.add("bg-danger")) : (a.classList.remove("bg-secondary"), a.classList.remove("bg-warning"), a.classList.remove("bg-danger"), a.classList.add("bg-success"))) : "description" == e && (l = document.getElementById("yoastseo-description").value, document.getElementById("d-yoastseo-description").innerHTML = l, d = l.length, c = document.getElementById("yoastseo-description-count"), c.innerHTML = d, 115 > d || d > 160 ? d > 0 && 114 >= d ? (c.classList.remove("bg-secondary"), c.classList.remove("bg-danger"), c.classList.remove("bg-success"), c.classList.add("bg-warning")) : (c.classList.remove("bg-secondary"), c.classList.remove("bg-warning"), c.classList.remove("bg-success"), c.classList.add("bg-danger")) : (c.classList.remove("bg-secondary"), c.classList.remove("bg-warning"), c.classList.remove("bg-danger"), c.classList.add("bg-success")))
}

function delay(e) {
    return e = e || 2e3, new Promise(function (t) {
        setTimeout(function () {
            t()
        }, e)
    })
}

function generate_random_number() {
    var e, t, n, o, a, l, d, c, r, s, i, u;
    if (document.getElementById("random_number_result").innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>', document.getElementById("generate_random_number").disabled = !0, document.getElementById("generate_random_number").innerHTML = "Quay sá»‘ ...", e = setInterval(function () {
    }, 1e3), t = parseInt(document.getElementById("min_num").value), n = parseInt(document.getElementById("max_num").value), o = parseInt(document.getElementById("quantity").value), o > 200) return document.getElementById("random_number_result").innerHTML = '<div class="text-center text-primary fw-bold">Sá»‘ lÆ°á»£ng quĂ¡ lá»›n! cĂ³ thá»ƒ lĂ m mĂ¡y báº¡n bá»‹ treo</div>', document.getElementById("quantity").select(), clearInterval(e), document.getElementById("generate_random_number").disabled = !1, document.getElementById("generate_random_number").innerHTML = "Quay sá»‘", !1;
    if (o > 0 || (document.getElementById("quantity").value = 1, o = 1), t = Math.ceil(t), n = Math.floor(n), a = [], l = document.getElementById("no_duplicate").checked, 1 == l) for (d = o, o > n - t && (d = n - t); d > a.length;) c = Math.floor(Math.random() * (n - t + 1)) + t, -1 === a.indexOf(c) && a.push(c); else for (r = 1; o >= r; r++) c = Math.floor(Math.random() * (n - t + 1)) + t, a.push(c);
    if (s = "", a.length > 1) {
        for (s += '<div class="row">', i = 0, u = "", r = 0; a.length > r; r++) i = r + 1, u = 0 > a[r] || a[r] > 9 ? a[r] : "0" + a[r], s += '<div class="col-4 col-sm-6 mb-3"><div class="border border-1 border-primary rounded-3 h-100 w-100 d-inline-block"><em class="small text-muted ">' + i + ':</em> <span class="fs-5 fw-bold text-primary">' + u + "</span></div></div>";
        s += "</div>"
    } else 1 == a.length && (u = a[0], 0 > a[0] || a[0] > 9 || (u = "0" + a[0]), s += '<div class="h-100 w-100 d-inline-block"><span class="fw-bold text-primary" style="font-size:72px;">' + u + "</span></div>");
    setTimeout(function () {
        clearInterval(e), document.getElementById("random_number_result").innerHTML = s, document.getElementById("generate_random_number").disabled = !1, document.getElementById("generate_random_number").innerHTML = "Quay sá»‘"
    }, 1500)
}

function idleLogout() {
    function e() {
        window.location.reload()
    }

    function t() {
        clearTimeout(n), n = setTimeout(e, 6e5)
    }

    var n;
    window.onload = t, window.onmousemove = t, window.onmousedown = t, window.ontouchstart = t, window.ontouchmove = t, window.onclick = t, window.onkeydown = t, window.addEventListener("scroll", t, !0)
}

var utf8ToBin, binToUtf8, ajax_url, base_url, tooltipTriggerList, tooltipList, source_txt, popoverTriggerList,
    popoverList;
window.addEventListener("DOMContentLoaded", function (e) {
    var t = el("action").value;
    "" == t && hideSidebar()
}), utf8ToBin = function (e) {
    e = unescape(encodeURIComponent(e));
    for (var t, n = 0, o = e.length, a = ""; o > n; n++) {
        for (t = e.charCodeAt(n).toString(2); t.length % 8 != 0;) t = "0" + t;
        a += t
    }
    return a
}, binToUtf8 = function (e) {
    for (var t, n = 0, o = e.length, a = ""; o > n; n += 8) t = parseInt(e.substr(n, 8), 2).toString(16), a += "%" + (t.length % 2 == 0 ? t : "0" + t);
    return decodeURIComponent(a)
}, ajax_url = document.getElementById("ajax_url").value, base_url = document.getElementById("base_url").value, tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')), tooltipList = tooltipTriggerList.map(function (e) {
    return new bootstrap.Tooltip(e)
}), source_txt = document.getElementById("source_txt"), document.getElementById("upper") && document.getElementById("upper").addEventListener("click", function () {
    document.getElementById("source_txt").value = source_txt.value.toUpperCase()
}), document.getElementById("lower") && document.getElementById("lower").addEventListener("click", function () {
    document.getElementById("source_txt").value = source_txt.value.toLowerCase()
}), document.getElementById("capitalized") && document.getElementById("capitalized").addEventListener("click", function () {
    document.getElementById("source_txt").value = titleCase(source_txt.value)
}), document.getElementById("sentence") && document.getElementById("sentence").addEventListener("click", function () {
    document.getElementById("source_txt").value = sentenceCase(source_txt.value)
}), el("space") && el("space").addEventListener("click", function () {
    var e = el("kytu").value;
    el("source_txt").value = source_txt.value.split(" ").join(e), count_words()
}), document.getElementById("search_replace") && document.getElementById("search_replace").addEventListener("click", function () {
    var e = document.getElementById("search").value, t = document.getElementById("replace").value;
    document.getElementById("source_txt").value = replaceAll(source_txt.value, e, t), count_words()
}), document.getElementById("xoadau") && document.getElementById("xoadau").addEventListener("click", function () {
    document.getElementById("source_txt").value = loc_xoa_dau(source_txt.value)
}), document.getElementById("md5") && document.getElementById("md5").addEventListener("click", function () {
    var e, t;
    count_words(), e = source_txt.value, t = new XMLHttpRequest, t.open("POST", ajax_url), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.onload = function () {
        200 === t.status && (document.getElementById("source_txt").value = t.responseText)
    }, t.send("action=md5&txt=" + encodeURI(e))
}), document.getElementById("base64_encode") && document.getElementById("base64_encode").addEventListener("click", function () {
    document.getElementById("source_txt").value = b64EncodeUnicode(source_txt.value)
}), document.getElementById("base64_decode") && document.getElementById("base64_decode").addEventListener("click", function () {
    document.getElementById("source_txt").value = b64DecodeUnicode(source_txt.value)
}), document.getElementById("text_to_binary") && document.getElementById("text_to_binary").addEventListener("click", function () {
    count_words(), document.getElementById("source_txt").value = utf8ToBin(source_txt.value)
}), document.getElementById("binary_to_text") && document.getElementById("binary_to_text").addEventListener("click", function () {
    count_words(), document.getElementById("source_txt").value = binToUtf8(source_txt.value)
}), document.getElementById("strike_through") && document.getElementById("strike_through").addEventListener("click", function () {
    document.getElementById("source_txt").value = strikethroughText(source_txt.value), count_words()
}), document.getElementById("strip_tags") && document.getElementById("strip_tags").addEventListener("click", function () {
    document.getElementById("source_txt").value = source_txt.value.replace(/(<([^>]+)>)/gi, ""), count_words()
}), document.getElementById("compress_html") && document.getElementById("compress_html").addEventListener("click", function () {
    var e = source_txt.value.replace(/\s\s+/g, " ");
    e = replaceAll(e, "> ", ">"), document.getElementById("source_txt").value = e
}), document.getElementById("url_encode") && document.getElementById("url_encode").addEventListener("click", function () {
    document.getElementById("source_txt").value = encodeURI(source_txt.value), count_words()
}), document.getElementById("url_decode") && document.getElementById("url_decode").addEventListener("click", function () {
    document.getElementById("source_txt").value = decodeURI(source_txt.value), count_words()
}), document.getElementById("qr_code") && document.getElementById("qr_code").addEventListener("click", function () {
    var e = '<img src="https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=' + encodeURI(source_txt.value) + '&choe=UTF-8" alt="Loading..." style="max-width:100%;" >';
    document.getElementById("qrcode_rs").innerHTML = e
}), document.getElementById("remove_duplicate") && document.getElementById("remove_duplicate").addEventListener("click", function () {
    var e = source_txt.value;
    e = replaceAll(e, ",", " ,"), e = replaceAll(e, ".", " ."), e = e.split("\n").filter(function (e, t, n) {
        return n.indexOf(e) == t
    }).join(" "), e = Array.from(new Set(e.split(" "))).join(" "), e = replaceAll(e, " ,", ","), e = replaceAll(e, " .", "."), document.getElementById("source_txt").value = e
}), document.getElementById("ytb_get_thumbnail") && document.getElementById("ytb_get_thumbnail").addEventListener("click", function () {
    var e, t, n = source_txt.value, o = matchYoutubeUrl(n, "video");
    o ? (e = "", e += "- áº¢nh máº·c Ä‘á»‹nh: http://img.youtube.com/vi/" + o + "/maxresdefault.jpg\n", e += "- áº¢nh 1: http://img.youtube.com/vi/" + o + "/maxres1.jpg\n", e += "- áº¢nh 2: http://img.youtube.com/vi/" + o + "/maxres2.jpg\n", e += "- áº¢nh 3: http://img.youtube.com/vi/" + o + "/maxres3.jpg\n", t = '<div class="row">', t += '<div class="col-6 col-md-3"><img class="img-thumbnail my-2" src="http://img.youtube.com/vi/' + o + '/maxresdefault.jpg" >áº¢nh máº·c Ä‘á»‹nh</div>', t += '<div class="col-6 col-md-3"><img class="img-thumbnail my-2" src="http://img.youtube.com/vi/' + o + '/maxres1.jpg" > áº¢nh 1</div>', t += '<div class="col-6 col-md-3"><img class="img-thumbnail my-2" src="http://img.youtube.com/vi/' + o + '/maxres2.jpg" >áº¢nh 2</div>', t += '<div class="col-6 col-md-3"><img class="img-thumbnail my-2" src="http://img.youtube.com/vi/' + o + '/maxres3.jpg" >áº¢nh 3</div>', t += "</div>", document.getElementById("ytb-thumbnail-list").innerHTML = t) : (alert("Vui lĂ²ng nháº­p Ä‘Æ°á»ng dáº«n Ä‘áº¿n video Youtube cáº§n láº¥y áº£nh thumbnail"), document.getElementById("source_txt").value = "https://www.youtube.com/watch?v=bjG0a82QRaY", document.getElementById("source_txt").placeholder = "https://www.youtube.com/watch?v=bjG0a82QRaY", document.getElementById("source_txt").focus())
}), document.getElementById("ytb_get_playlist_thumbnail") && document.getElementById("ytb_get_playlist_thumbnail").addEventListener("click", function () {
    var e, t, n;
    this.innerHTML = "Chá» chĂºt...", this.disabled = !0, e = document.getElementById("ytb-playlist").value, t = matchYoutubeUrl(e, "list"), n = new XMLHttpRequest, n.open("POST", ajax_url), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.onload = function () {
        200 === n.status && (document.getElementById("ytb-thumbnail-playlist").innerHTML = n.responseText, document.getElementById("ytb_get_playlist_thumbnail").innerHTML = 'Láº¥y áº£nh <span class="d-none d-sm-inline">hĂ ng loáº¡t</span>', document.getElementById("ytb_get_playlist_thumbnail").disabled = !1)
    }, n.send("action=ytb_playlist_thumb&id=" + t)
}), document.getElementById("youtube_dl") && document.getElementById("youtube_dl").addEventListener("click", function () {
    var e, t, n = source_txt.value, o = matchYoutubeUrl(n, "video");
    o ? (e = "https://www.y2mate.com/vi/download-youtube/" + o, t = window.open(e, "_blank"), t.focus()) : (alert("Vui lĂ²ng nháº­p Ä‘Æ°á»ng dáº«n Ä‘áº¿n video Youtube cáº§n download"), document.getElementById("source_txt").value = "", document.getElementById("source_txt").placeholder = "VĂ­ dá»¥: https://www.youtube.com/watch?v=w5TJxCLAxlI", document.getElementById("source_txt").focus())
}), document.getElementById("ytb_down_sub") && document.getElementById("ytb_down_sub").addEventListener("click", function () {
    var e, t = source_txt.value, n = matchYoutubeUrl(t, "video");
    n ? (e = "https://www.y2mate.com/vi/download-youtube/" + n, alert("Há»‡ thá»‘ng Ä‘ang Ä‘Æ°á»£c xĂ¢y dá»±ng!")) : (alert("Vui lĂ²ng nháº­p Ä‘Æ°á»ng dáº«n Ä‘áº¿n video Youtube cáº§n download"), document.getElementById("source_txt").value = "", document.getElementById("source_txt").placeholder = "VĂ­ dá»¥: https://www.youtube.com/watch?v=w5TJxCLAxlI", document.getElementById("source_txt").focus())
}), document.getElementById("copy_text") && document.getElementById("copy_text").addEventListener("click", function () {
    copyText()
}), el("lunar_solar") && el("lunar_solar").addEventListener("click", function () {
    var e, t, n = el("lunar-solar-day").value, o = el("lunar-solar-month").value, a = el("lunar-solar-year").value,
        l = parseInt(el("type_convert").value);
    return "" == n ? (el("lunar-solar-day").focus(), void (el("lunar-solar-day").style.color = "red")) : "" == o ? (el("lunar-solar-month").focus(), void (el("lunar-solar-month").style.color = "red")) : "" == a ? (el("lunar-solar-year").focus(), void (el("lunar-solar-year").style.color = "red")) : (this.innerHTML = "...", this.disabled = !0, e = window.innerWidth, t = new XMLHttpRequest, t.open("POST", ajax_url), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.onload = function () {
        200 === t.status && setTimeout(function () {
            el("lunar_solar").innerHTML = "Äá»•i", el("lunar_solar").disabled = !1, el("lunar-solar-result").innerHTML = t.responseText;
            var e = el("lunar-solar-result").getBoundingClientRect().top + window.pageYOffset - 60;
            window.scrollTo({top: e, behavior: "smooth"})
        }, 1e3)
    }, void t.send("action=solar2lunar&d=" + n + "&m=" + o + "&y=" + a + "&t=" + l))
}), document.getElementById("find-fun-name") && document.getElementById("find-fun-name").addEventListener("click", function () {
    var e, t, n, o, a, l, d = document.getElementById("audio"),
        c = ["%$#@&*()", "+_*&^%$#", ":~!@#&^%", "=+*#$%^&", "-!#$%^&#"], r = document.getElementById("fun-name").value;
    r = r.trim(), e = document.getElementById("name-searched").innerHTML, t = document.getElementById("is_theo_van").value, isCharacterALetter(r) ? (n = r.split(" "), o = n[n.length - 1], o = o.trim(), document.getElementById("source_ogg").src = base_url + "/assets/sound/first_click.ogg", document.getElementById("source_mp3").src = base_url + "/assets/sound/first_click.mp3", d.load(), d.play(), document.getElementById("fun-name-result").innerHTML = "$%&^#@!*", document.getElementById("text-note").innerHTML = '<span class="text-primary">ÄANG TĂŒM, CHá»œ CHĂT NHĂ‰...!!!</span>', document.getElementById("fun-name").classList.add("d-none"), document.getElementById("find-fun-name").disabled = !0, document.getElementById("appname").classList.remove("d-none"), document.getElementById("imgcuoi").classList.add("d-none"), a = setInterval(function () {
        document.getElementById("fun-name-result").innerHTML = c[Math.floor(5 * Math.random())], document.getElementById("fun-name-result").style.color = "rgb(" + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + ")"
    }, 50), l = new XMLHttpRequest, l.open("POST", ajax_url), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.onload = function () {
        200 === l.status && setTimeout(function () {
            var t, n, c;
            clearInterval(a), document.getElementById("find-fun-name").disabled = !1, document.getElementById("fun-name").classList.remove("d-none"), document.getElementById("text-note").innerHTML = "Káº¾T QUáº¢ LĂ€", document.getElementById("appname").classList.add("d-none"), document.getElementById("find-fun-name-txt").innerHTML = "Thá»­ tĂ¬m tĂªn vui nhá»™n khĂ¡c", t = l.responseText.split("|"), document.getElementById("fun-name-result").innerHTML = o + " " + t[0], 1 == t[1] ? document.getElementById("name-searched").innerHTML = t[0] : (e += e ? "," + t[0] : t[0], document.getElementById("name-searched").innerHTML = e), n = ["cuoi", "cuoi2"], c = n[Math.floor(Math.random() * n.length)], document.getElementById("source_ogg").src = base_url + "/assets/sound/" + c + ".ogg", document.getElementById("source_mp3").src = base_url + "/assets/sound/" + c + ".mp3", d.volume = 1, d.load(), d.play(), document.getElementById("imgcuoi").classList.remove("d-none")
        }, 5e3)
    }, l.send("action=fun_name&name=" + encodeURI(o) + "&exclude=" + encodeURI(e) + "&is_theo_van=" + t)) : (document.getElementById("text-note").innerHTML = '<span class="d-none d-sm-inline text-primary">Äiá»n láº¡i tĂªn Ä‘i thĂ­m, ngáº¯n quĂ¡ !!! <br></span><span class="text-danger fs-5">TĂªn pháº£i cĂ³ Ă­t nháº¥t 1 kĂ½ tá»± Alphabet.</span>', document.getElementById("fun-name").focus())
}), document.getElementById("find-tengiangho") && document.getElementById("find-tengiangho").addEventListener("click", function () {
    var e, t, n, o, a, l, d = document.getElementById("audio"),
        c = ["%$#@&*()", "+_*&^%$#", ":~!@#&^%", "=+*#$%^&", "-!#$%^&#"],
        r = document.getElementById("tengiangho").value;
    r = r.trim(), e = document.getElementById("name-searched").innerHTML, t = parseInt(document.getElementById("so_luong_ten").value), isCharacterALetter(r) ? (n = r.split(" "), o = n[n.length - 1], o = titleCase(o.trim()), document.getElementById("source_ogg").src = base_url + "/assets/sound/first_click.ogg", document.getElementById("source_mp3").src = base_url + "/assets/sound/first_click.mp3", d.load(), d.play(), document.getElementById("tengiangho-loading").innerHTML = "$%&^#@!*", document.getElementById("text-note").innerHTML = '<span class="text-primary">ÄANG TĂŒM, CHá»œ CHĂT NHĂ‰...!!!</span>', document.getElementById("tengiangho").classList.add("d-none"), document.getElementById("find-tengiangho").disabled = !0, document.getElementById("tengiangho-result").innerHTML = '<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>', a = setInterval(function () {
        document.getElementById("tengiangho-loading").innerHTML = c[Math.floor(5 * Math.random())], document.getElementById("tengiangho-loading").style.color = "rgb(" + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + ")"
    }, 50), l = new XMLHttpRequest, l.open("POST", ajax_url), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.onload = function () {
        200 === l.status && setTimeout(function () {
            clearInterval(a), document.getElementById("find-tengiangho").disabled = !1, document.getElementById("tengiangho").classList.remove("d-none"), document.getElementById("text-note").innerHTML = '<span class="text-primary">ÄĂƒ TĂŒM XONG, Äáº I CA!</span>', document.getElementById("find-tengiangho-txt").innerHTML = "TĂ¬m tĂªn khĂ¡c cho ta", document.getElementById("tengiangho-loading").innerHTML = "";
            var t = l.responseText.split("|");
            document.getElementById("tengiangho-result").innerHTML = t[1], 1 == t[2] ? document.getElementById("name-searched").innerHTML = t[0] : (e += e ? "," + t[0] : t[0], document.getElementById("name-searched").innerHTML = e), document.getElementById("source_ogg").src = base_url + "/assets/sound/finish.ogg", document.getElementById("source_mp3").src = base_url + "/assets/sound/finish.mp3", d.load(), d.play()
        }, 5e3)
    }, l.send("action=tengiangho&name=" + encodeURI(o) + "&exclude=" + encodeURI(e) + "&so_luong_ten=" + t)) : (document.getElementById("text-note").innerHTML = '<span class="d-none d-sm-inline text-primary">Äiá»n tĂªn Ä‘i Ä‘áº¡i ca !!! <br></span><span class="text-danger fs-5">KhĂ´ng cáº§n Ä‘iá»n Há» vĂ  Äá»‡m Ä‘Ă¢u áº¡.</span>', document.getElementById("tengiangho").focus())
}), document.getElementById("find-tentienglao") && document.getElementById("find-tentienglao").addEventListener("click", function () {
    var e, t, n, o, a, l, d, c, r, s, i, u, m, g, y, h = document.getElementById("audio"),
        p = ["%$#@&*()", "+_*&^%$#", ":~!@#&^%", "=+*#$%^&", "-!#$%^&#"], v = document.getElementById("day").value,
        f = document.getElementById("month").value, E = document.getElementById("year").value, I = "nam",
        b = document.getElementsByName("gender");
    for (e = 0, t = b.length; t > e; e++) if (b[e].checked) {
        I = b[e].value;
        break
    }
    return n = "", "" == v ? (document.getElementById("day").style.color = "red", document.getElementById("day").focus(), n += "Vui lĂ²ng chá»n ngĂ y sinh\n", !1) : (document.getElementById("day").style.color = "black", "" == f ? (document.getElementById("month").style.color = "red", document.getElementById("month").focus(), n += "Vui lĂ²ng chá»n thĂ¡ng sinh\n", !1) : (document.getElementById("month").style.color = "black", "" == E ? (document.getElementById("year").style.color = "red", document.getElementById("year").focus(), n += "Vui lĂ²ng chá»n nÄƒm sinh\n", !1) : (document.getElementById("year").style.color = "black", void ("" == n ? (document.getElementById("source_ogg").src = base_url + "/assets/sound/first_click.ogg", document.getElementById("source_mp3").src = base_url + "/assets/sound/first_click.mp3", h.load(), h.play(), document.getElementById("tentienglao-result").innerHTML = "$%&^#@!*", document.getElementById("text-note").innerHTML = '<span class="text-primary">ÄANG TĂŒM, CHá»œ CHĂT NHĂ‰...!!!</span>', document.getElementById("tentienglao").classList.add("d-none"), document.getElementById("find-tentienglao").disabled = !0, document.getElementById("appname").classList.remove("d-none"), o = setInterval(function () {
        document.getElementById("tentienglao-result").innerHTML = p[Math.floor(5 * Math.random())], document.getElementById("tentienglao-result").style.color = "rgb(" + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + ")"
    }, 50), a = ["Xá»‰n Bá»±a", "Phá»i", "NĂ²i", "KhÄƒn", "Kháº¡c", "Nhá»• Toáº¹t", "Tháº¡c Xoay", "PhÄƒn", "XoÄƒn TĂ­t", "Cá»§ Lá»u"], l = ["TĂ y XĂ´", "KhÆ¡ MĂº", "NĂ¹ng", "Min Chá»u", "PĂ¡p Lá»‹t", "Gáº£y Kua", "Tu GĂ¢y", "Váº¯t Xá»•", "Má»• KĂ²", "NĂ¡ng Phá»•", "Káº¡ Rá»‹t", "LĂ² Ká»‹t"], d = ["Má»§", "Vá»•", "MĂ³m", "TrÄ©", "Xin", "Thoáº¯t", "TĂ²e", "Váº©u", "LĂ¡c", "Quáº©y", "Máº¯n", "Váº£y", "BĂ¡t", "Nhá»•", "Phá»‰", "Xá»‰", "PhĂ¢y", "Táº»n", "Náº£n", "ChĂ³e", "KĂ³i", "Lá»‘n", "ChĂ m", "Ven", "BĂ³n", "Khoai", "Há»§i", "QuÄƒn", "XĂ©m", "Xá»‹t", "LĂ­t"], c = ["Äáº¡p", "DĂ£nh", "ThĂºi", "BĂ nh", "Náº¡o", "ÄĂ¹", "Cáº§u", "Tá»i", "ChĂ£o", "Ngá»"], r = ["Thá»‹", "HĂ´i", "TrĂ¹m", "CĂ¹i", "NhĂ²i", "DÄƒng", "TĂ n", "LÅ©ng", "Cáº¡p", "CĂ ", "Máº¡c", "XĂ¬"], s = ["BĂºa", "NhĂ£o", "NghĂ©", "Nhá»¥c", "HĂ¨n", "TĂ²i", "HĂ©o", "Thá»t", "ThĂ²n", "Máº¹c", "Ná»¡", "BĂ© Ba", "Gá»m", "Kháº¡p", "NhĂ¡i", "SĂ²", "Má»±c", "HĂ¹", "MĂ¹ng", "ThĂ¹i", "ÄĂ­u", "Yá»ƒu", "Tá»t", "Háº¿n", "Ná»•", "HĂ¡n", "Máº¯m", "Sáº¡t", "BĂ³ng", "MĂ³ng", "MĂ©n"], i = parseInt(E.substr(E.length - 1)), u = "", u = "nam" == I ? c[i] + " " + r[f - 1] + " " + s[v - 1] : a[i] + " " + l[f - 1] + " " + d[v - 1], m = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href + "&quote=" + encodeURI("VĂ£i chÆ°á»Ÿng, tĂªn tiáº¿ng LĂ o cá»§a mĂ¬nh lĂ : " + u + " #tentienglao"), g = "javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;", y = document.getElementById("btn-tentienglao-settings"), y.setAttribute("href", m), y.setAttribute("onclick", g), setTimeout(function () {
        clearInterval(o), document.getElementById("find-tentienglao").disabled = !1, document.getElementById("tentienglao").classList.remove("d-none"), document.getElementById("text-note").innerHTML = '<span class="text-primary">Káº¾T QUáº¢ LĂ€</span>', document.getElementById("appname").classList.add("d-none"), document.getElementById("tentienglao-result").innerHTML = "", document.getElementById("find-tentienglao-txt").innerHTML = "Xem tĂªn tiáº¿ng LĂ o", document.getElementById("tentienglao-result").innerHTML = u, document.getElementById("source_ogg").src = base_url + "/assets/sound/cuoi.ogg", document.getElementById("source_mp3").src = base_url + "/assets/sound/cuoi.mp3", h.load(), h.play()
    }, 5e3)) : document.getElementById("text-note").innerHTML = '<span class="d-none d-sm-inline text-primary">CĂ³ lá»—i !!! <br></span><span class="text-danger fs-5">Vui lĂ²ng nháº­p Ä‘á»§ thĂ´ng tin.</span>'))))
}), document.getElementById("find-tentienghan") && document.getElementById("find-tentienghan").addEventListener("click", function () {
    var e, t, n, o, a, l, d, c, r, s, i, u, m, g, y, h, p, v, f = document.getElementById("audio"),
        E = ["%$#@&*()", "+_*&^%$#", ":~!@#&^%", "=+*#$%^&", "-!#$%^&#"], I = document.getElementById("day").value,
        b = document.getElementById("month").value, B = document.getElementById("year").value, _ = "nam", L = "Nam",
        x = document.getElementsByName("gender");
    for (e = 0, t = x.length; t > e; e++) if (x[e].checked) {
        _ = x[e].value;
        break
    }
    return "nu" == _ && (L = "Ná»¯"), n = "", "" == I ? (document.getElementById("day").style.color = "red", document.getElementById("day").focus(), n += "Vui lĂ²ng chá»n ngĂ y sinh\n", !1) : (document.getElementById("day").style.color = "black", "" == b ? (document.getElementById("month").style.color = "red", document.getElementById("month").focus(), n += "Vui lĂ²ng chá»n thĂ¡ng sinh\n", !1) : (document.getElementById("month").style.color = "black", "" == B ? (document.getElementById("year").style.color = "red", document.getElementById("year").focus(), n += "Vui lĂ²ng chá»n nÄƒm sinh\n", !1) : (document.getElementById("year").style.color = "black", void ("" == n ? (document.getElementById("source_ogg").src = base_url + "/assets/sound/first_click.ogg", document.getElementById("source_mp3").src = base_url + "/assets/sound/first_click.mp3", f.load(), f.play(), document.getElementById("tentienghan-result").innerHTML = "$%&^#@!*", document.getElementById("text-note").innerHTML = '<span class="text-primary">ÄANG TĂŒM, CHá»œ CHĂT NHĂ‰...!!!</span>', document.getElementById("tentienghan").classList.add("d-none"), document.getElementById("find-tentienghan").disabled = !0, document.getElementById("appname").classList.remove("d-none"), o = setInterval(function () {
        document.getElementById("tentienghan-result").innerHTML = E[Math.floor(5 * Math.random())], document.getElementById("tentienghan-result").style.color = "rgb(" + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + "," + Math.round(255 * Math.random()) + ")"
    }, 50), a = ["í•œ", "́¡°", "́„", "ë°•", "ê°•", "́œ¤", "́¥", "́„œ", "́´", "ê¹€", "́±„", "ë°°"], l = ["Han", "Jo", "Lim", "Park", "Kang", "Yun", "Jang", "Seo", "Lee", "Kim", "Chae", "Bae"], d = ["í˜„", "́†Œ", "́€", "ê²½", "́œ ", "ëª…", "́„ ", "́˜ˆ", "́§„", "í™”", "́§€", "í¨", "́‹œ", "ë„", "́ˆ˜", "́¬", "́ •", "́‹ ", "́—°", "́„±", "ë¦°", "́ œ", "ë™", "́›", "́„œ", "í•˜", "́£¼", "ë³´", "́˜", "́¬", "í˜œ"], c = ["Hyeon", "So", "Eun", "Kyung", "Yu", "Myeong", "Seon", "Ye", "Jin", "Hwa", "Ji", "Hyo", "Si", "Do", "Su", "Jae", "Jeong", "Sin", "Yeon", "Seong", "Lin", "Je", "Dong", "Won", "Seo", "Ha", "Yu", "Bo", "Yeong", "Seul", "Hye"], r = ["í˜„", "í›ˆ", "ê·¼", "í˜¸", "́„­", "í˜", "́„", "́¤€", "ë¹ˆ", "ë¬´"], s = ["Hyeon", "Hun", "Geun", "Ho", "Seop", "Hyeok", "Seok", "Jun", "Bin", "U"], i = ["ë¯¼", "í¬", "ë‚˜", "́•„", "́• ", "ë¼", "ë¯¸", "́±„", "́´", "ë¦°"], u = ["Min", "Hui", "Na", "Ah", "Ae", "Ra", "Mi", "Chae", "Lee", "Rin"], m = parseInt(B.substr(B.length - 1)), g = "", y = "", "nam" == _ ? (g = a[b - 1] + " " + d[I - 1] + " " + r[m], y = l[b - 1] + " " + c[I - 1] + " " + s[m]) : (g = a[b - 1] + " " + d[I - 1] + " " + i[m], y = l[b - 1] + " " + c[I - 1] + " " + u[m]), h = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href + "&quote=" + encodeURI("ThĂ¬ ra tĂªn tiáº¿ng HĂ n cá»§a mĂ¬nh lĂ : " + g + " #tentienghan"), p = "javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;", v = document.getElementById("btn-tentienghan-settings"), v.setAttribute("href", h), v.setAttribute("onclick", p), setTimeout(function () {
        clearInterval(o), document.getElementById("find-tentienghan").disabled = !1, document.getElementById("tentienghan").classList.remove("d-none"), document.getElementById("text-note").innerHTML = '<span class="text-primary">/ ' + y + " /</span>", document.getElementById("appname").classList.add("d-none"), document.getElementById("tentienghan-result").innerHTML = "", document.getElementById("find-tentienghan-txt").innerHTML = "Xem tĂªn tiáº¿ng HĂ n", document.getElementById("tentienghan-result").innerHTML = g + ' <a href="javascript:void(0);" onclick="responsiveVoice.speak(\'' + g + "','Korean Female');\"><span data-feather=\"volume-2\"></span></a>", feather.replace(), responsiveVoice.speak(L + "sinh ngĂ y " + I + " thĂ¡ng " + b + " nÄƒm " + B + " cĂ³ tĂªn tiáº¿ng HĂ n lĂ :", "Vietnamese Female"), setTimeout(function () {
            responsiveVoice.speak("" + g, "Korean Female")
        }, 7e3)
    }, 5e3)) : document.getElementById("text-note").innerHTML = '<span class="d-none d-sm-inline text-primary">CĂ³ lá»—i !!! <br></span><span class="text-danger fs-5">Vui lĂ²ng nháº­p Ä‘á»§ thĂ´ng tin.</span>'))))
}), document.getElementById("find-tentienganh") && document.getElementById("find-tentienganh").addEventListener("click", function () {
    randomName("tentienganh", "ten_tieng_anh", "yes")
}), document.getElementById("find-tentiengnhat") && document.getElementById("find-tentiengnhat").addEventListener("click", function () {
    randomName("tentiengnhat", "ten_tieng_nhat_random", "yes")
}), document.getElementById("find-tentienghanrandom") && document.getElementById("find-tentienghanrandom").addEventListener("click", function () {
    randomName("tentienghanrandom", "ten_tieng_han_random", "no")
}), document.getElementById("find-tentiengvietrandom") && document.getElementById("find-tentiengvietrandom").addEventListener("click", function () {
    randomName("tentiengvietrandom", "ten_tieng_viet_random", "no")
}), popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')), popoverList = popoverTriggerList.map(function (e) {
    return new bootstrap.Popover(e)
}), document.getElementById("generate_random_number") && (generate_random_number(), document.getElementById("generate_random_number").addEventListener("click", function () {
    generate_random_number()
})), function () {
    feather.replace(), count_words(), idleLogout()
}();
//# sourceMappingURL=myapp.min.js.map