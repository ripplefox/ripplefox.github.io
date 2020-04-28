/* dev
const WP_PREURL = "http://localhost:88/index.php/wp-json/wp/v2/";
const categories_cn = 4;
const categories_en = 5;*/

/* test
const WP_PREURL = "http://120.78.128.36:83/index.php/wp-json/wp/v2/";
const categories_en = 3;
const categories_cn = 2;*/

/* rel */

const WP_PREURL = "https://news.ultiledger.io/index.php/wp-json/wp/v2/";
const categories_en = 2;
const categories_cn = 3;

function getAbstractLen(lang) {
    if (lang === 'cn'){
        return 50;
    } else {
        return 150;
    }
}
