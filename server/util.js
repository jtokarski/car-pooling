module.exports = {
    extend: function extend(child, parent){
        function tmp(){ this.constructor = child; }
        tmp.prototype = parent.prototype;
        child.prototype = new tmp();
    }
}