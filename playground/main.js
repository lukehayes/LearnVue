'use strict';

var VectorBase = function()
{
    this.x = 1;
    this.y = 1;
}

VectorBase.prototype.get = function()
{
    let res = this.x + " " + this.y;
    return res;
}

let vb = new VectorBase();

function Point()
{
    VectorBase.call(this);
}

Point.prototype = new VectorBase();

let p = new Point();
