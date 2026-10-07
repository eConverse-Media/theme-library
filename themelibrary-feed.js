$(document).ready(function () {

    function checkCard(card) {
        const byline = card.querySelector('.card-byline');

        if (
            byline &&
            byline.textContent.toLowerCase().includes('theme library')
        ) {
            card.style.display = 'none';
        }
    }

    document.querySelectorAll('.FeedWidget .layout-grid-cell').forEach(checkCard);

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;

                if (node.matches('.layout-grid-cell')) {
                    checkCard(node);
                }

                node.querySelectorAll?.('.layout-grid-cell').forEach(checkCard);
            });
        });
    });

    const feedWidget = document.querySelector('.FeedWidget');

    if (feedWidget) {
        observer.observe(feedWidget, {
            childList: true,
            subtree: true
        });
    }

});