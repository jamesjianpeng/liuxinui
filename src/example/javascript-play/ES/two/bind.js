Function.prototype.__bind = function (context) {
    //  argument 不是数组但是可以通过这种方式可以转化为数组
    const arg = Array.prototype.slice.call(arguments, 1)
    return this.apply(context, arg)
}
