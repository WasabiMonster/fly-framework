/**
 * fly framework (alpha) version 0.0.1: utility for adding and dispatching events
 * @type {{events: (*|{}), add: Function, remove: Function, dispatch: Function}}
 * @author: Dave Padovano
 *
 * jslint bitwise: false, sloppy: true, browser: true
 */

var fly = {

    events: this.events || {},
    add: function (event, target, callback, capture) {
        var elem;
        this.events[event] = callback;
        if (typeof target === 'object') {
            target.addEventListener(event, callback, capture);

            //if target is type string then determine if it is either a "class" or an "id" DOM element
        } else if (typeof target === 'string') {
            if (target.indexOf('.') === 0) {
                var i = 0;
                elem = document.getElementsByClassName(target.split('.')[1]);

                for (i; i < elem.length; i += 1) {
                    elem[i].addEventListener(event, callback);
                }
            }
            else if(target.indexOf('#') === 0) {
                elem = document.getElementById(target.split('#')[1]);
                elem.addEventListener(event, callback);
            }
        }
    },
    remove: function (event) {
        if (this.events[event]) {
            delete this.events[event];
        }
    },
    dispatch: function (event) {
        if (this.events[event]) {
            this.events[event].apply(this, Array.prototype.slice.call(arguments, 1));
        }
    }
};