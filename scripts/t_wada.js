/* eslint-disable no-irregular-whitespace */
const T_WADA = `
\`\`\`
　　　　 ,、,,,、,,,
　　　 _,,;' '" '' ;;,,
　　（rヽ,;''""''゛゛;,ﾉｒ）　　　　
　　 ,; i ___　、___iヽ゛;,　  テスト書いてないとか
　 ,;'''|ヽ・〉〈・ノ |ﾞ ';, 　お前それ@t_wadaの前でも
　 ,;''"|　 　▼　　 |ﾞ゛';, 　 同じ事言えんの？
　 ,;''　ヽ ＿人＿  /　,;'_
 ／ｼ、    ヽ  ⌒⌒  /　 ﾘ　＼
|　　 "ｒ,,｀"'''ﾞ´　　,,ﾐ|
|　　 　 ﾘ、　　　　,ﾘ　　 |
|　　i 　゛ｒ、ﾉ,,ｒ" i _ |
|　　｀ー――-----------┴ ⌒´ ）
（ヽ  _____________ ,, ＿´）
 （_⌒_______________ ,, ィ
     T                 |
     |                 |
\`\`\`
`;
/* eslint-enable no-irregular-whitespace */

module.exports = (bot) => {
  bot.hear(/テスト(.*)(無|な)い/, msg => msg.send(T_WADA));
};
