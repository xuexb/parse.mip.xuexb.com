const path = require('path');
const fs = require('fs');
const Base = require('./base.js');
const ParseHTML = require('mip-parse-html');

module.exports = class extends Base {

    /**
     * 首页
     *
     * @return {Object}
     */
    async indexAction() {
        const demopath = path.join(think.ROOT_PATH, 'view/default.html');
        const content = fs.readFileSync(demopath).toString();

        this.assign({
            content
        });

        return this.display();
    }

    /**
     * 转换格式化
     *
     * @param {string} content 原内容
     * @return {string}
     */
    async formatAction() {
        const content = this.post('content');
        // 解析
        const parse = new ParseHTML(content);

        // 结果
        const result = parse.validate();

        // 输出解析后的格式化代码
        result.html = parse.format();

        // await think.timeout(300);

        this.success(result);
    }
};
