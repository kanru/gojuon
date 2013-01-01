var table = [
    {hiragana: "あ", roma: "a"},
    {hiragana: "い", roma: "i"},
    {hiragana: "う", roma: "u"},
    {hiragana: "え", roma: "e"},
    {hiragana: "お", roma: "o"},
];

function pick() {
    return Math.floor(Math.random()*table.length);
}

function init() {
    var testElm = document.getElementById("test");
    testElm.innerHTML = table[pick()].hiragana;
}

init();
