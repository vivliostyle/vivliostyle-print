# vivliostyle-print
Allows page-layouting using the vivliostyle for printing within a website without destroying the original layout


How do I use it?
======

1. Install vivliostyle-print like this within your browser-based JavaScript project:

```
npm install @vivliostyle/print --save
```

2. Use it within your project like this:

```js
import {printHTML} from '@vivliostyle/print'

const htmlDoc = `<!doctype html>
<html>
    <head>
        <style>
        ... Add your CSS code here ...
        </style>
    </head>
    <body>
        ... Add your HTML code here ...
    </body>
</html>`,
    config = {
        title: 'my printed page',
        printCallback: iframeWin => iframeWin.print() // optional: only needed if calling something other than window.print() for printing.
    }

printHTML(htmlDoc, config)

```

You can also take a look at the [demo](https://vivliostyle.github.io/vivliostyle-print/) ([sourcecode](/demo)) .

How do I build and run the demo?
======

1. Download the repo to your local machine, for example using::

```
git clone https://github.com/vivliostyle/vivliostyle-print.git
```

2. Enter the folder::

```
cd vivliostyle-print
```

3. Install and build it::

```
npm install
npm run build_demo
```

4. Serve the demo folder, for example using the simple PHP webserver::

```
php -S localhost:8000 -t demo/
```

5. Access the demo from a web browser by navigating to http://localhost:8000


Why would I use this rather than regular Vivliostyle?
======

On larger projects, it can be difficult to ensure that no developer is accidentally
breaking the terms of the Vivliostyle AGPL license. Vivliostyle-print only exposes
one of the functions of Vivliostyle that does not allow the sharing of complex data
structures between surrounding code and Vivliostyle, which is the most important
requirements to follow when using VIvliostyle in combination with a non-open source
project. For more information cocnerning the license, read
[this](https://vivliostyle.org/faq/#Vivliostyle%20License%20FAQ).

Please report any bugs and open pull requests on the
[Vivliostyle main repo](https://github.com/vivliostyle/vivliostyle.js).
