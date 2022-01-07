# Spelling BEE

Today, we are going to make a simple spelling bee web app. This will have multiple steps involved and we can continue with is as we learn. So, lets get started!!

#### First things first. Some git and GitHub.

1.  Fork this repo!!
2.  Clone your fork to your computer.
3.  Open the newly downloaded local repo in VS Code.
4.  Using LiveServer, open the index.html in a browser.

> NOTE: We are using Bulma as a CSS framework (similar to Bootstrap). Visit the docs [here](https://bulma.io). A separate sytlesheet is available for personal styling.

## Now to building!

### Step 1

First, we are going to add basic structure to our JS and then add the buttons we need to make it clickable.

1.  Add JS code to make the current HTML elements available to JS as new variables.

    > Hint: think about the DOM. so use document.xxxxxx

2.  Create 6 buttons for your letters. Hard code some letters for now. EX:

            const a_button = document.xxxxxx
            a_button.innerHTML = "A";

3.  Each button should be a **_button_** element and need to have a class attribute added of **_button is-warning m-2_**, and a **_value_** attribute for the letter you are choosing.

4.  Create an **_ADD_** button with the a class attribute of **_button is-black_**

5.  Create an empty variable to "store" your clicked letter.
6.  Make an **_event listener_** for each of your 6 letter buttons. Use the value we set in Step 1 and the empty variable to append the **_word DIV innerHTML_**.
