fly-framework
=============

javascript framework / utility for events

example:

```
fly.add('mouseover', '.continue', function () {
    TweenMax.to('.circle', 0.2, {alpha:0.3});
});
```