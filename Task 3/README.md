# CSS Selectors Practice

## Files
- `index.html` — main HTML file
- `style.css` — external stylesheet linked to index.html

## Steps Implemented

1. Created `index.html` and `style.css` files.
2. Linked `style.css` to `index.html` using a `<link>` tag in the `<head>`.
3. Set `body` background color to orange (`#e8804a`).
4. Created 3 heading tags (`h1`, `h2`, `h3`) all with `class="head"`.
5. Applied `color: darkblue` to all `.head` elements.
6. Applied `background-color: lime` to the second heading using `id="bglime"`.
7. Styled the word "head" inside the second heading to red using `#bglime span`.
8. Created 3 `<p>` tags with `color: white` via the `p` element selector — no id or class on them.
9. Second paragraph has `id="para"` with `color: green`.
10. The word "paragraph" inside the second `<p>` is styled black and larger using `#para span`.
11. Two lists created — `<ul>` for links and `<ol>` for list items. The "here" anchor links are styled using the `ul a` descendant selector (no inline CSS, no class/id on `<a>`). The 2nd and 3rd `<ol>` items are colored using `ol li:nth-child()` pseudo-class selectors.
