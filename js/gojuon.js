var deck = [
    {hiragana: "あ", roma: "a"},
    {hiragana: "い", roma: "i"},
    {hiragana: "う", roma: "u"},
    {hiragana: "え", roma: "e"},
    {hiragana: "お", roma: "o"},

    {hiragana: "か", roma: "ka"},
    {hiragana: "き", roma: "ki"},
    {hiragana: "く", roma: "ku"},
    {hiragana: "け", roma: "ke"},
    {hiragana: "こ", roma: "ko"},

    {hiragana: "さ", roma: "sa"},
    {hiragana: "し", roma: "si"},
    {hiragana: "す", roma: "su"},
    {hiragana: "せ", roma: "se"},
    {hiragana: "そ", roma: "so"},

    {hiragana: "た", roma: "ta"},
    {hiragana: "ち", roma: "ti"},
    {hiragana: "つ", roma: "tu"},
    {hiragana: "て", roma: "te"},
    {hiragana: "と", roma: "to"},

    {hiragana: "な", roma: "na"},
    {hiragana: "に", roma: "ni"},
    {hiragana: "ぬ", roma: "nu"},
    {hiragana: "ね", roma: "ne"},
    {hiragana: "の", roma: "no"},

    {hiragana: "は", roma: "ha"},
    {hiragana: "ひ", roma: "hi"},
    {hiragana: "ふ", roma: "hu"},
    {hiragana: "へ", roma: "he"},
    {hiragana: "ほ", roma: "ho"},

    {hiragana: "ま", roma: "ma"},
    {hiragana: "み", roma: "mi"},
    {hiragana: "む", roma: "mu"},
    {hiragana: "め", roma: "me"},
    {hiragana: "も", roma: "mo"},

    {hiragana: "や", roma: "ya"},
    {hiragana: "ゆ", roma: "yu"},
    {hiragana: "よ", roma: "yo"},

    {hiragana: "ら", roma: "ra"},
    {hiragana: "り", roma: "ri"},
    {hiragana: "る", roma: "ru"},
    {hiragana: "れ", roma: "re"},
    {hiragana: "ろ", roma: "ro"},

    {hiragana: "わ", roma: "wa"},
    {hiragana: "ゐ", roma: "wi"},
    {hiragana: "ゑ", roma: "we"},
    {hiragana: "を", roma: "wo"},

    {hiragana: "ん", roma: "n"}
];
var backId = "back";

function swap() {
    if (backId == "back") {
        backId = "front";
    } else {
        backId = "back";
    }
}

function getBack() {
    var back = document.getElementById(backId);
    return back;
}

function setupBinding() {
    var romas = document.getElementsByClassName("roma");
    var onClick = function onClick(e) {
        this.classList.toggle("hidden");
        e.stopPropagation();
    };
    romas[0].addEventListener("click", onClick);
    romas[1].addEventListener("click", onClick);
    var card = document.getElementById("card");
    card.addEventListener("click", function onClick(e) {
        refresh();
        swap();
        this.classList.toggle("flipped");
    });
}

function pick() {
    return Math.floor(Math.random()*deck.length);
}

function refresh() {
    var back = getBack();
    var hiragana = back.getElementsByClassName("hiragana")[0]
    var roma = back.getElementsByClassName("roma")[0]
    var draw = deck[pick()];
    hiragana.innerHTML = draw.hiragana;
    roma.innerHTML = '/'+draw.roma+'/';
    roma.classList.add("hidden");
}

function init() {
    setupBinding();
    refresh();
    swap();
    refresh();
    swap();
}

init();
