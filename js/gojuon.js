var deck = [
    {hiragana: "あ", roma: "a"},
    {hiragana: "い", roma: "i"},
    {hiragana: "う", roma: "u"},
    {hiragana: "え", roma: "e"},
    {hiragana: "お", roma: "o"},
];

function setupBinding() {
    var romaElm = document.getElementById("roma");
    romaElm.addEventListener("click", function onClick(e) {
        this.classList.toggle("hidden");
    });
}

function pick() {
    return Math.floor(Math.random()*deck.length);
}

function refresh() {
    var hiraganaElm = document.getElementById("hiragana");
    var romaElm = document.getElementById("roma");
    var card = deck[pick()];
    hiraganaElm.innerHTML = card.hiragana;
    romaElm.innerHTML = '/'+card.roma+'/';
}

function init() {
    setupBinding();
    refresh();
}

init();
