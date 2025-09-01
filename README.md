# Registration Form Project

This is a simple registration form using **HTML, CSS, JavaScript, and
PHP**.\
When you fill it out and submit, it checks your answers and then shows
all your info in a **popup window**.

------------------------------------------------------------------------

## Features

-   First/Middle/Last Name → letters only\
-   Suffix (optional) → only letters and a dot (like `Jr.` or `Sr.`)\
-   Contact → must be 10--15 numbers\
-   Email → must look like a real email\
-   Batch → number + letters (like `33-G` or `101-AB`)\
-   Technology → pick one from the dropdown\
-   ID Number → format `YYYY-NN-NNN` (like `2023-33-295`)

------------------------------------------------------------------------

## Files

    Registration/
    │
    ├── index.html        # The main form
    ├── index.php      # Shows your submitted info in a popup
    ├── assets/
    │   ├── CSS/styles.css
    │   └── JS/script.js

------------------------------------------------------------------------

## What you need

-   Install **XAMPP**\
-   Run **Apache** in the XAMPP Control Panel

------------------------------------------------------------------------

## How to run

1.  Go to **Local Disk (C:) → xampp → htdocs**\

2.  Make a folder called **Registration**\

3.  Put all the project files inside that folder\

4.  Open your browser and type:

        localhost/Registration

    or

        127.0.0.1/Registration

5.  Open **index.html** from there\

6.  Fill out the form → hit Register → popup shows your details → click
    OK to go back to the form

------------------------------------------------------------------------

## Notes

-   The `/Registration` part is **important**. That's the folder name
    inside `htdocs` where your project is saved.\
-   If Apache isn't running, PHP won't work and you'll only see the
    code.

------------------------------------------------------------------------

## Troubleshooting

-   **Problem:** Browser shows PHP code instead of popup\
    **Fix:** Start Apache in the XAMPP Control Panel and make sure your
    files are inside `htdocs/Registration`.

-   **Problem:** `localhost/Registration` gives error\
    **Fix:** Check that the folder name is exactly **Registration** and
    you typed it correctly in the browser.

