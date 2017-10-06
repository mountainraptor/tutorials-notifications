BITS "Router" Tutorial
---
This tutorial shows how to use the BaseServer and Router subsystems in the BITS stack.

- [Objectives](#objectives)
- [Before You Begin](#before-you-begin)
- [Step 1: Notify with a paper-toast](#step-1)
- [Step 2: Notify with a base-toolbar notification](#step-2)
- [Step 3: Notify with a push notification](#step-3)

# <a name="objectives"></a> Objectives
- Identify user experience for each method of notification
- Notify a user with a toast
- Notify a user with a base-toolbar notification
- Notify a user with a system push notification

# <a name="before-you-begin"></a> Before You Begin
You need to setup a BITS Base, and be able to communicate with a running instance. If you do not already have a BITS Base running, you can create one by downloading the source and using the development command-line. You should have a good understanding of BITS and modules at this point.

A brief talk about user experience (UX) is in order. We are discussing about interacting with the user in three different ways. There are other ways not being discussed directly in this tutorial that include:

-- Logging (to be discussed later in a different tutorial)
-- Direct console (not recommended, users don't necessarily know how to access)

There are a some key things to consider when deciding how and when to notify the user.

1) Does the user care? First and foremost, make this decision. Developers can sometimes get carried away in what to log.

2) Who is the consumer of this information? Is it the user interacting with the system? Is it an administrative user later? Is it the development team?

3) How long will the information remain relevant?

4) Will the user be actively engaged with the system when you notify them?

# <a name="step-1"></a> Step 1: Notify with a paper-toast
You can notify the user of some event with a paper-toast polymer element. It is pretty simple to do this. You need three things - two html and one javascript.

First, you need to import the paper-toast element.
```html
<link rel="import" href="../../bower_components/paper-toast/paper-toast.html">
```

Next, have an element to show the user. You could have a static message in the content or set dynamically from javascript.
```html
<paper-toast id="toast"></paper-toast>
```

After having an element to show the user, give a reason to show the element. In this case, it is on a button press.
```html
<paper-button class="green" on-tap="onShowToast">Toast</paper-button>
```

Finally, you can show the toast with javascript (after setting the message in this example).
```javascript
onShowToast: function(e, detail) {
  this.$.toast.text = 'I\'m a toast!';
  this.$.toast.show();
}
```

The step-1 folder shows an example of a paper-toast activated by a button.

# <a name="step-2"></a>Step 2: Notify with a base-toolbar notification

# <a name="step-3"></a>Step 3: Notify with a push notification
You can notify the user with the host device's notification system - this is extremely useful for mobile clients that can vibrate or alert a user with a sound.

First, you need to import the base-notification element.
```html
<link rel="import" href="../base-notification/base-notification.html">
```

Next, get the element into your page.
```html
<base-notification id="notification"></base-notification>
```

Give the user a different button
``` html
<paper-button class="red" on-tap="onNotifySystem">System</paper-button>
```

Finally, you can show the system notification.
```javascript
onNotifySystem: function(e, detail) {
  this.$.notification.notify({'title': 'title', 'body': 'body', 'options': {'tag': 'notification-tutorial'}});
}
```

If you are looking for ways to configure the system notification, check out the BITS folder /bits/app/elements/base-notification/base-notification.html

```javascript
icon: this.icon,
data: data,
body: body,
link: this.link,
requireInteraction: this.requireInteraction,
tag: this.tag,
timeout: this.timeout,
vibrate: this.vibrate,
silent: this.silent
```

The step-3 folder shows an example of a system notification activated by a button.
