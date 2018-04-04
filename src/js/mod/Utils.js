'use strict';

module.exports = {
    /**
     * prefixを付与したプロパティを返す
     * @param {Object} elm イベント登録する要素
     * @param {Object} cb コールバック関数
     */
    GetPropertyWithPrefix: (prop) => {
        const bodyStyle = document.body.style;
        let resultProp = prop;
        let tmpProp = prop.slice(0, 1).toUpperCase() + prop.slice(1);

        if (bodyStyle.webkitTransform !== undefined) resultProp = 'webkit' + tmpProp;
        if (bodyStyle.mozTransform !== undefined) resultProp = 'moz' + tmpProp;
        if (bodyStyle.msTransform !== undefined) resultProp = 'ms' + tmpProp;

        return resultProp;
    },
    /**
     * 対象の要素にtransitionendイベントを登録する
     * @param {Object} elm イベント登録する要素
     * @param {Object} cb コールバック関数
     */
    SetTransitionEnd: (elm, cb) => {
        var transitionEndWithPrefix = (/webkit/i).test(navigator.appVersion) ? 'webkitTransitionEnd' :
            (/firefox/i).test(navigator.userAgent) ? 'transitionend' :
            (/msie/i).test(navigator.userAgent) ? 'MSTransitionEnd' :
            'opera' in window ? 'oTransitionEnd' :
            '';

        elm.addEventListener(transitionEndWithPrefix, (e) => {
            if (e.target == elm && e.propertyName.match('transform') !== null) {
                cb();
            }
        });
    },
    /**
     * 複数のイベントに同じ引数付きの関数を登録する
     * @param {Object} obj object型の引数。
     * @param {String} obj.target イベントを登録する要素
     * @param {Array} obj.events 登録するイベント配列
     * @param {Object} obj.func 実行する関数
     * @param {Object} obj.args 関数に渡す引数
     */
    addElWithArgs: function(obj) {
        for (let i = 0; i < obj.events.length; i++) {
            obj.target.addEventListener(obj.events[i], (e) => {
                obj.func.call(this, e, obj.args);
            });
        }
    }
};