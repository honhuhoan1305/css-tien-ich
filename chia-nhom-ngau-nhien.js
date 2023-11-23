"use strict";

function generatorNumGroup() {
    $("#members").on("input", function () {
        var e, t = "", n = processDataInput(jQuery(this).val()), o = jQuery("#numberData option:selected").val();
        if (2 > n.length) return void jQuery("#numberData").html("");
        for (e = 1; n.length >= e; e++) t += o ? o > n.length || e != o ? o > n.length && e == n.length ? '<option value="' + e + '" selected>' + e + "</option>" : '<option value="' + e + '">' + e + "</option>" : '<option value="' + e + '" selected>' + e + "</option>" : 2 == e ? '<option value="' + e + '" selected>' + e + "</option>" : '<option value="' + e + '">' + e + "</option>";
        jQuery("#numberData").html(t)
    })
}

function processDataInput(e) {
    var t, n, o = e.trim().split("\n"), a = [];
    for (t = 0; o.length > t; t++) n = o[t].trim(), "" !== n && a.push(n);
    return a
}

function findDuplicate(e) {
    var t, n, o = [], a = [];
    for (t = 0; e.length > t; t++) n = e[t].trim(), a.indexOf(n) > -1 && -1 === o.indexOf(n) && o.push(n), "" !== n && a.push(n);
    return o
}

function confirmDuplicate(e, t) {
    var n, o = e.length;
    return o > 0 ? (n = label.err_ten_nay_duoc_nhan_doi, n += '"', n += e.join(","), n += '"\n', n += label.err_ban_co_muon_tiep_tuc, t.push(n), !1) : !0
}

function isValidate(e, t) {
    return 1 > e.length ? (t.push(label.err_nhap_ten_thanh_vien), !1) : $("input[id=haveLeader]:checked").val() && (e.length < $("#numLeader").val() || $("#numLeader").val() < 1) ? (t.push(label.err_nhap_so_nhom_truong), !1) : !0
}

function randomGroupAction(e) {
    var t, n, o, a = ($("#ajax_url").val(), $("input[name=typeBreak]:checked").val()), l = $("#numberData").val(),
        i = $("input[id=haveLeader]:checked").val(), r = $("#numLeader").val(), d = 0, s = 0, c = 0;
    "group" == a ? (d = l, s = Math.floor(e.length / d), c = e.length % d) : "people" == a && (s = l, d = Math.ceil(e.length / s)), $(".groups").empty(), t = [], $("#startDivision").attr("disabled", "disabled"), $("#startDivision").html(label.wait), $("#exportCSV").addClass("d-none"), n = document.getElementById("audio"), n.play(), o = "", setTimeout(function () {
        var n, a, l;
        for (n = 0; d > n; n++) $(".groups").append('<div class="group border border-1 rounded-3 m-3 bg-light" id="group' + (n + 1) + '"><div class="group-leader bg-primary text-light"></div><div class="group-box"><p class=""><strong>' + label.nhom + " " + (n + 1) + "</strong></p></div></div>");
        if (0 == c) $(".group .group-box").each(function (n) {
            var a, l, i = 0;
            for (t[n] = [], o += label.nhom + " " + (n + 1), a = 0; s > a; a++) l = Math.floor(Math.random() * e.length), e[l] && ($(this).append('<p class="mb-2">' + e[l] + "</p>"), t[n][i] = e[l], i++), e.splice(l, 1);
            o += "," + t[n].join(",") + "\n"
        }); else if (c > 0) {
            for (a = [], n = 0; d > n; n++) a[n] = s, c > n && (a[n] += 1);
            $(".group .group-box").each(function (n) {
                var l, i, r = 0;
                for (o += label.nhom + " " + (n + 1), t[n] = [], l = 0; a[n] > l; l++) i = Math.floor(Math.random() * e.length), e[i] && ($(this).append('<p class="mb-2">' + e[i] + "</p>"), t[n][r] = e[i], r++), e.splice(i, 1);
                o += "," + t[n].join(",") + "\n"
            })
        }
        i && (l = "", $(".group .group-leader").each(function (e) {
            var n, o = r;
            for (r > t[e].length && (o = t[e].length), l = "", n = 0; o > n; n++) $(this).append('<div class="text-center">' + t[e][n] + "</div>"), l += "," + label.nhom_truong
        }), o = l + "\n" + o), $("#csv").val(o), $("#startDivision").removeAttr("disabled"), $("#startDivision").html(label.chia_nhom), $("#exportCSV").removeClass("d-none"), document.getElementById("groups").scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        })
    }, 1e3)
}

function replaceAll(e, t, n) {
    return e.replace(RegExp(escapeRegExp(t), "g"), n)
}

function escapeRegExp(e) {
    return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
}

function downloadCsv(e, t) {
    var n, o, a, l = e + ".csv", i = new Uint8Array([255, 254]), r = [], d = t.length;
    for (n = 0; d > n; n++) r.push(t.charCodeAt(n));
    r = new Uint16Array(r), o = new Blob([i, r], {type: "text/csv"}), a = jQuery("<a></a>", {
        href: window.URL.createObjectURL(o),
        download: l,
        target: "_blank"
    })[0], window.navigator.msSaveBlob ? (window.navigator.msSaveBlob(o, l), window.navigator.msSaveOrOpenBlob(o, l)) : window.URL && window.URL.createObjectURL ? (document.body.appendChild(a), a.click(), document.body.removeChild(a)) : window.webkitURL && window.webkitURL.createObject ? a.click() : window.open("data:text/csv;charset=utf-16;;base64," + window.Base64.encode(t), "_blank")
}

$(function () {
    generatorNumGroup(), $("#members").trigger("input"), $("#numberData").val("7").change(), $("#haveLeader").change(function () {
        $("input[name=haveLeader]:checked").val() ? $("#idNumberGroupLeader").removeClass("d-none") : $("#idNumberGroupLeader").addClass("d-none")
    }), $("#startDivision").click(function () {
        var e, t = processDataInput($("#members").val()), n = [];
        return isValidate(t, n) ? (e = findDuplicate(t), confirmDuplicate(e, n) || confirm(n[0]) ? void randomGroupAction(t) : (alert(label.err_khong_the_tao_nhom), !1)) : (alert(n[0]), !1)
    }), $("#btnExport").click(function () {
        var e = replaceAll($("#csv").val(), ",", "	");
        downloadCsv("chia-nhom", e)
    }), $("#startDivision").trigger("click")
});