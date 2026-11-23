# Helmet rollover

A one-image exercise for Foundations of Interactive Journalism. Hover over the front-left helmet (player No. 1), tap the `+` marker, or use `Tab` to focus it. The price is `$5`. Press `Escape` to dismiss it.

## Run it

Extract the ZIP and open `index.html` in your browser. No installation or build command is required.

## Put it on GitHub

1. Create a repository.
2. Choose **Add file → Upload files** and upload the extracted files, not the ZIP. Put `index.html`, `styles.css`, `rollover.js`, and `football-helmets.jpg` together at the root of the repository. Commit the files.
3. To make a live demo, go to **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, then save. GitHub will display the site URL when deployment finishes.

Before putting the photo in a public repository or on GitHub Pages, verify that you have permission to publish it and add the correct photo credit. You can substitute a photo you have permission to use, then reposition the hotspot.

## Make it your own

- **Edit the price:** In `index.html`, change the text inside the element with `id="helmet-price"`.
- **Move the hotspot:** In `styles.css`, edit `left` and `top` in `.hotspot`. To calculate each value, divide the center coordinate by the corresponding photo dimension, then multiply by 100. Percentages keep the hotspot in the same place as the photo resizes.
- **Resize the hotspot:** In `.hotspot`, adjust the percentages in `width` and `height`. The `44px` minimum keeps the control easy to tap on small screens.
- **Change how it opens:** `rollover.js` connects mouse hover, keyboard focus, and taps to the visibility of the price.
