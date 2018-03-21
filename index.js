module.exports = {
    // root 标记为 true, 则 eslint 不会向父级目录寻找配置文件
    "root": true,
    // 可被继承的规则，如 `eslint-config-standard` `eslint:recommended`
    // 自己配置的规则使用时可以将 `eslin-config-` 前缀去掉 
    "extends": [],
    // 配置语法解析规则，默认情况下 eslint 支持  es5 的语法
    // 如 `react` 使用了一些特定的 eslint 无法识别的 jsx 的语法，需要配置 `eslint-plugin-react`
    // 可以省略包名的前缀 `eslint-plugin-`
    "plugins": [],
    // 配置共享设置，提供给每一个规则使用
    "settings": {},
    // 脚本的运行环境
    // "env": {
    //   "browser": true,
    //   "node": true,
    //   // ES6 特性，这个设置会修改 parserOptions.ecmaVersion 配置项为 6
    //   // 请特别注意，如果你的项目使用了 ES6 以上的语法，请不要设置此 es6 项，而应在 ecmaVersion 字段中指定
    //   "es6": true,
    // },
    // 全局变量
    // 避免访问未定义的变量时，出现 no-undef 警告
    // "globals": {
    //   // 值为 true，表示此变量可被重写，值为 false，表示此变量不可被重写
    //   "foo": true,
    //   "bar": false,
    // },
    // eslint 默认用 espree 作为解析器
    // esprima / babel-eslint 解析器都可以与 eslint 兼容
    // "parser": "esprima",
    // 配置解析器选项
    "parserOptions": {
        // 配置 ecmascript 版本
        "ecmaVersion": 6,
        // 表示代码是 ecmascript 模块
        "sourceType": "module",
        // 额外使用的语言特性
        "ecmaFeatures": {
            // 允许在全局作用域下使用 return 语句
            "globalReturn": true,
            // 启用全局 strict mode
            "impliedStrict": true,
            // 启用 jsx
            "jsx": true
        }
    },
    // 设置具体规则ID是否生效以及提示级别
    // “off”或0 —— 关闭规则，“warn”或1 —— 警告级别的错误，“error”或2 —— 错误级别的错误
    // "rules": {
    //     "quotes": ["error", "double"]
    // }
    
    // 用于更精细的配置，比如同一个目录下的文件需要不同的配置
    "overrides": [

    ]
}