##### commonJS 首先是在某个文件做出的处理就是进行遍历文件发现引用路径可以对上就放进数组中，收集文件内的代码，同时查找相关文件的依赖文件并进行记录。
##### 编写 require 函数，并记录绝对路径，同时导出 module.export, 改写 require 的文件内的导出内容改成 function(require, module.export, module),使用 eval 和 call 改变函数指向给 module.exports 赋值并且导出，保证了 require 持续收集文件
##### 定义了一个 module.export 使用方式，实际上解析内部是自己加上成一个函数，把规定的 module.export 赋值并且导出赋值，这就是在 common 和 webpack 的思想
##### 主要是遍历文件收集文件依赖
# nulijiao
