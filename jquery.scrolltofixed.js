(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jQuery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
    
})(function($) {
    function scrollToFixed(options) {
        var $element,
        top,
        offsetTop;

        var $element = $(this).eq(0);
        offsetTop = $element.offset().top;
        
        if (options) {
            top = options.top;
        } else {
            top = 0;
        }

        var fixedClass = 'scroll-fixed';
        // 拼接 CSS
        var cssStr = '.' + fixedClass + '{position:fixed; top:' + top + 'px; left:0;margin-left:0;margin-right:0;width:100%;z-index:1010}';
        // 添加 CSS 到 head 的 style 标签中
        $(document.head).append('<style>' + cssStr + '</style>');
        
        $(document).on('scroll', function() {
            if ($(window).scrollTop() + top > offsetTop) { //添加类名，将元素定位为 fixed
                if (!$element.hasClass(fixedClass)) {
                    $element.addClass(fixedClass);
                }    
            } else {    //移除类名，还原元素
                $element.removeClass(fixedClass);
            }
        });
    }

    $.fn.scrollToFixed = scrollToFixed;
});