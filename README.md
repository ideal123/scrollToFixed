# scrollToFixed

This jQuery plugin is used to fix a element when the element is out of the window. 

The element's CSS will be modify as follow: 

```css
{
    position: fixed;
    left: 0;
    top: any;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    z-index: 1010;
}

```

##Usage

You needd load jQuery.

```html
<script src="./jquery.js"></script>
<script src="./jquery.scrolltofixed.js"></script>
```

Then, you can use it in your code, you can setting top attribute.

```javascript
$('.nav').scrollToFixed({top: 0});
```
