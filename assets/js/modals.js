(function ($) {

    let modalClicked = false;

    // on load, check if the window location hash links to a modal and show it - so that we have bookmarkable modals
    if (window.location.hash.startsWith("#event-")) {
        // use modal from bootstrap, see https://getbootstrap.com/docs/4.3/components/modal/#via-javascript
        $(window.location.hash).modal('toggle');
    }

    // add event listener to all links with data-toggle="modal", to update the window location hash to the modal id so that
    // we have bookmarkable urls for our modals
    $(document).on('click', '[data-toggle="modal"]', function (e) {
        e.preventDefault();
        window.location.hash = this.hash;
        modalClicked = true;
    });

    // add event listener to reset the location.hash when a modal is closed
    $(document).on('hidden.bs.modal', function (e) {
        // only go back in history if the modal was opened by clicking, and not e.g. because the modal
        // was shown because the user opened the bookmarkable url of the modal
        if (modalClicked) {
            window.history.back();
        } else {
            // if the modal was opened by following a bookmarkable url, go to the portfolio section
            window.location.hash = "portfolio";
        }
    });

})(jQuery);