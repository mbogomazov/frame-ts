![Icon](frame_icon.png)

# FRAME.ts

### a simple zero-dependency frontend framework

⚠️ WARNING! DO NOT USE IT IN PRODUCTION, ONLY FOR EDUCATIONAL PURPOSES ⚠️

## What it has

-   Own rendering engine
-   Virtual DOM
-   State Manager
-   Routing

## How to use it

1. Install framework by npm

```bash
npm i frame-ts
```

2. Create `index.html` with simple template including root element (for example `<div id="app"></div>`) and link to script

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frame-ts App</title>
        <script src="script.js" type="module"></script>
    </head>
    <body>
        <div id="app"></div>
    </body>
</html>
```

3. In your script file import framework

There are examples of scripts:

-   [Simple template](demo/templating/script.js)
-   [Components](demo/component/script.js)
-   [State manager](demo/state-manager/script.js)
-   [Routing](demo/routing/script.js)
