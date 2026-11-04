/*
 * Dynamically loads required external CSS and JS assets into the <head>.
 * Before adding each file, the script checks whether a matching <script> or <link> tag already exists to prevent duplicates.
 */

$(function () {
    var assets = [
        {
            type: "script",
            url: "https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"
        },
        {
            type: "script",
            url: "https://cdn.jsdelivr.net/npm/simplelightbox@2.14.3/dist/simple-lightbox.min.js"
        },
        {
            type: "css",
            url: "https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"
        },
        {
            type: "css",
            url: "https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick-theme.css"
        },
        {
            type: "css",
            url: "https://cdn.jsdelivr.net/npm/simplelightbox@2.14.3/dist/simple-lightbox.min.css"
        },
        {
            type: "css",
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
        }
    ];

    $.each(assets, function (_, asset) {

        if (asset.type === "script") {
            // Only add if script doesn't already exist
            if (!$('head script[src="' + asset.url + '"]').length) {
                $("<script>", {
                    type: "text/javascript",
                    src: asset.url
                }).appendTo("head");
            }
        } else {
            // Only add if stylesheet doesn't already exist
            if (!$('head link[href="' + asset.url + '"]').length) {
                $("<link>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: asset.url
                }).appendTo("head");
            }
        }

    });
});
