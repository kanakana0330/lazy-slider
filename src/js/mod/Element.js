'use strict';

class Element {
    /**
     * スライダー毎に必要な値、要素のクラス
     * @param {Object} args object型の引数。
     * @param {Object} args.elm スライダー要素
     * @param {Object} args.list 画像のul要素
     * @param {Object} args.item 画像のli要素
     * @param {Number} args.itemLen 画像の枚数
     * @param {Number} args.itemW 画像の幅
     * @param {Number} args.dupItemLen 複製した要素の数
     * @param {Number} args.dupItemLeftLen 複製した要素のうち、左に配置した数
     * @param {Number} args.showW 表示領域の幅
     * @param {Number} args.autoID 自動スライド用のタイマーID
     * @param {Number} args.current 表示中の画像の位置
     * @param {Object} args.navi ナビゲーションのul要素
     * @param {Object} args.naviChildren ナビゲーションの子要素
     * @param {Object} args.actionCb Actionメソッドのコールバック
     * @param {Boolean} args.dir スライドする方向。true = 右
     */
    constructor(elm, showItem) {
        this.elm = elm;
        this.showItem = showItem;
        this.list = this.elm.children[0];
        this.listW = 0;
        this.listPxW = 0;
        this.item = [].slice.call(this.list.children);
        this.itemLen = this.item.length;
        this.itemW = 100 / this.itemLen;
        this.dupItemLen = 0;
        this.dupItemLeftLen = 0;
        this.showW = this.itemW * this.showItem;
        this.autoID;
        this.current = 0;
        this.navi;
        this.naviChildren;
        this.actionCb = [];
        this.dir = true;
        this.Init();
    }

    Init() {
        this.listW = this.list.style.width = 100 / this.showItem * this.itemLen + '%';
        this.listPxW = this.list.offsetWidth;
    }
}

module.exports = Element;