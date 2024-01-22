(function ($) {

    let modalClicked = false;
    // ignoreEvent is used to prevent the hashchange or hidden.bs.modal event from triggering when we toggle or change the hash ourselves
    let ignoreEvent = null;

    // on load, check if the window location hash links to a modal and show it - so that we have bookmarkable modals
    if (window.location.hash.startsWith("#event-")) {
        // use modal from bootstrap, see https://getbootstrap.com/docs/4.3/components/modal/#via-javascript
        $(window.location.hash).modal('toggle');
    }

    // add event listener to all links with data-toggle="modal", to update the window location hash to the modal id so that
    // we have bookmarkable urls for our modals
    $(document).on('click', '[data-toggle="modal"]', function (e) {
        e.preventDefault();
        ignoreEvent = "hashchange";
        window.location.hash = this.hash;
        modalClicked = true;
    });

    // add event listener to reset the location.hash when a modal is closed
    $(document).on('hidden.bs.modal', function (e) {
        if (ignoreEvent === "hidden.bs.modal") {
            ignoreEvent = null;
            return;
        }

        // only go back in history if the modal was opened by clicking, and not e.g. because the modal
        // was shown because the user opened the bookmarkable url of the modal
        ignoreEvent = "hashchange";
        if (modalClicked) {
            window.history.back();
        } else {
            // if the modal was opened by following a bookmarkable url, go to the portfolio section
            window.location.hash = "portfolio";
        }
    });

    // detect browser back/forward navigation and close/open the modal accordingly
    $(window).on('hashchange', function(e) {
        if (ignoreEvent === "hashchange") {
            ignoreEvent = null;
            return;
        }

        if (e.originalEvent === undefined) {
            return;
        }

        // get location hash from previous page
        let previousHash = e.originalEvent.oldURL.split("#")[1];
        // get location hash from current page
        let currentHash = e.originalEvent.newURL.split("#")[1];
        // if the previous page was a modal, and the current page is not a modal, hide the modal
        if (previousHash && previousHash.startsWith("event-")) {
            ignoreEvent = "hidden.bs.modal";
            $('#' + previousHash).modal('toggle');
        }
        if (currentHash && currentHash.startsWith("event-")) {
            ignoreEvent = "hidden.bs.modal";
            $('#' + currentHash).modal('toggle');
        }
    });

    $('a[href*="#"]').bind('click', function(event) {
        if (this.hash.startsWith("#event-")) {
            return;
        }
        // Remove '#' from the hash.
        var hash = this.hash.replace(/^#/, '');
        if (this.pathname === location.pathname && hash) {
            event.preventDefault();
            // Change '#' (removed above) to '#/' so it doesn't jump without the smooth scrolling
            location.hash = '#/' + hash;
        }
    });

    // Scroll on page load if there is a hash in the URL.
    if (location.hash && !location.hash.startsWith("#event-")) {
        $.smoothScroll({
            // Replace '#/' with '#' to go to the correct target
            scrollTarget: location.hash.replace(/^\#\/?/, '#')
        });
    }

})(jQuery);