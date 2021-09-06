function beolvas(szazalek) {
    let osszesen;
    let tipper;
    let fejenkent;
    let osszeg = parseInt($("#amount").val());
    let hanyan = parseInt($("#person").val());
    if ((osszeg * hanyan) > 0) {
        osszesen = osszeg * szazalek / 100;
        tipper = osszesen / hanyan;
        fejenkent = (osszeg + osszesen) / hanyan;
        $("#tip").text(tipper);
        $("#total").text(fejenkent);

    }
    console.log(osszesen, fejenkent);
}
$(".percent input").click((event) => {
    let szazalek = parseInt($(event.target).val());
    console.log(szazalek);
    beolvas(szazalek);
})