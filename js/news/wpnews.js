// load news
var wp_news_outline;

jQuery(document).ready(function ($) {
    var lang = window.localStorage['lang'] || 'en';
    getNewsOutline(lang);
});
function getNewsOutline(lang) {
    var cg = categories_en;
    if (lang === 'cn'){
        cg = categories_cn;
    }
    $.get(WP_PREURL + "posts?context=embed&categories="+cg, function (data, status) {
        wp_news_outline = data;
        setIndexNews();
    });
}


function setIndexNews() {
    //lang = 'en';
    $('#new1_date').text(wp_news_outline[1].date.split("T")[0]);
    $('#new1_title').html(wp_news_outline[1].title.rendered);
    $('#new1_subtitle').html(getP(wp_news_outline[1].excerpt.rendered));
    $('#new1_href').attr('href','news-detail.html?newsId='+ wp_news_outline[1].id);
    setNewImg('new1_img',wp_news_outline[1].featured_media);

    $('#new2_date').text(wp_news_outline[0].date.split("T")[0]);
    $('#new2_title').html(wp_news_outline[0].title.rendered);
    $('#new2_subtitle').html(getP(wp_news_outline[0].excerpt.rendered));
    $('#new2_href').attr('href','news-detail.html?newsId='+ wp_news_outline[0].id);
    setNewImg('new2_img',wp_news_outline[0].featured_media);

    $('#new3_date').text(wp_news_outline[2].date.split("T")[0]);
    $('#new3_title').html(wp_news_outline[2].title.rendered);
    $('#new3_subtitle').html(getP(wp_news_outline[2].excerpt.rendered));
    $('#new3_href').attr('href','news-detail.html?newsId='+ wp_news_outline[2].id);
    setNewImg('new3_img',wp_news_outline[2].featured_media);
}

function getP(str) {
    var lang = window.localStorage['lang'] || 'en';
    var text = str.match('<p.*?>(.*?)<\/p>','i')[0];
    if (text.length <= getAbstractLen(lang)){
        return text;
    } else {
        return text.substr(0,getAbstractLen(lang))+"...";
    }
}


function setNewImg(htmlId, wpId) {
    $.get(WP_PREURL + "media/" + wpId, function (data, status) {
        $('#'+htmlId).attr('src',data.source_url);
    });
}
