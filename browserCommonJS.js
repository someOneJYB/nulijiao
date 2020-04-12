// commonJS 中包含 require 和 module.exports module
// require 调用的时候会导出一个函数参数包含了module和require函数同时给 module.exports 赋值
// 需要一个入口函数然后每次 require 的时候导出模块
var module = {
    modules: {},
    cacheModules: {},
    id: 1,
    register: function(path, fn) {
        if(this.modules[path]) {
            return;
        }
        if(fn.id) {
            return
        }
        this.modules[path] = fn;
        this.modules[path].load = false;
    },
    // 循环依赖的问题，不会再执行如果已经被加载过因此需要如何能知道已经循环依赖，因为对于路径是相对的
    // 因此需要使用绝对路径进行存储这样的话就可以让
    require: function(parent) {
        return function(path) {
            if(!this.modules[parent]) {
                throw Error('请在使用前注册函数')
            }
            if(this.cacheModules[path]) {
                return
            }
            var mod = {}
            mod.exports = {}
            module.modules[path].call(module, mod.exports, module.require(parent), mod)
            module.modules[id].load = true;
            module.cacheModules[path] = mod.exports;
            return mod.exports
        }
    },
    getAbsolutePath: function(path) {

    }
}
// ./src/a.js ./src/b.js 加载在 src 中
// 阮一峰老师的参考
function require(p){
    var path = require.resolve(p);
    var mod = require.modules[path];
    if (!mod) throw new Error('failed to require "' + p + '"');
    if (!mod.exports) {
        mod.exports = {};
        mod.call(mod.exports, mod, mod.exports, require.relative(path));
    }
    return mod.exports;
}

require.modules = {};

require.resolve = function (path){
    var orig = path;
    var reg = path + '.js';
    var index = path + '/index.js';
    return require.modules[reg] && reg
        || require.modules[index] && index
        || orig;
};
// 首先注册然后 require 文件
require.register = function (path, fn){
    require.modules[path] = fn;
};

require.relative = function (parent) {
    return function(p){
        if ('.' != p.charAt(0)) return require(p);
        var path = parent.split('/');
        var segs = p.split('/');
        path.pop();

        for (var i = 0; i < segs.length; i++) {
            var seg = segs[i];
            if ('..' == seg) path.pop();
            else if ('.' != seg) path.push(seg);
        }

        return require(path.join('/'));
    };
};
