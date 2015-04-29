angular-atomic-notify
=====================

> An AngularJS module to display notifications

![Sample](http://s22.postimg.org/u04uj24k1/Screen_Shot_2015_04_08_at_13_15_09.png)

## Dependencies

We are using this libraries for the sample, note that jQuery is used for `angular.element` and font awesome for the icons, but you can use another one.

- [**Font Awesome**](http://fortawesome.github.io/Font-Awesome/)
- [**jQuery**](https://jquery.com/)

## Demo

**- [Online demo](http://maxigimenez.github.io/angular-atomic-notify/)**

## Install

Install using bower

```bash
bower install angular-atomic-notify
```

## Usage

### Include in your project

First include the css and js of the project:

```HTML
<link rel="stylesheet" type="text/css" href="src/angular-atomic-notify.css">
<script type="text/javascript" src="src/angular-atomic-notify.js"></script>
```

Include the module into your own application:

```JavaScript
angular.module('sample', ['atomic-notify']);
```

Add the directive to your project:

```HTML
<ng-atomic-notify></ng-atomic-notify>
```

**Also you can customize 100% the template with your own HTML:**

```HTML
<ng-atomic-notify custom-template="custom.html"></ng-atomic-notify>
```

### Methods

```JavaScript
atomicNotify.info(message, delay);
atomicNotify.error(message, delay);
atomicNotify.success(message, delay);
atomicNotify.warning(message, delay);
```

using `atomicNotify.custom` you can specifc the icon that you want to use in the notification:

```JavaScript
atomicNotifyService.custom(type, message, iconClass, delay);
```

### Provider

```JavaScript
.config(['atomicNotifyProvider', function(atomicNotifyProvider){
   	atomicNotifyProvider.setDefaultDelay(5000);
	atomicNotifyProvider.useIconOnNotification(true);
}])
```

## License

[MIT](LICENSE.md)