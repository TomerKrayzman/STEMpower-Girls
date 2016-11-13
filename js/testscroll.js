'use strict';
var gotoOne = function gotoOne() {
    return $.scrollTo($('#one'), 800);
};
var gotoTop = function gotoTop() {
    return $.scrollTo($('#top'), 800);
};
$('#topArrow').click(gotoOne);
$('#bottomArrow').click(gotoTop);
