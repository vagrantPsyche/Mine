function defineReactive (data, key, val) {
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            return val
        },
        set: function (newVal) {
            if (28 === newVal){
                console.log('nothing happend');
                return;
            }
            val = newVal;
            console.log('er gou, you have changed!');
        }
    })
}