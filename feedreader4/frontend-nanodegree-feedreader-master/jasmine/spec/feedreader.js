/* feedreader.js
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
         /* loops through each feed in the allFeeds object and
         * ensures it has a URL defined and that the URL is not
         * empty.
        */
        it('Feed URL defined and not empty', function() {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* loops through each feed in the allFeeds object and
         * ensures it has a URL undefined and that the URL is
         * empty.
        */
        it('Feed URL undefined and empty', function() {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* loops through each feed in the allFeeds object and
         * ensures it has a name defined and that the name is not
         * empty.
        */
        it('Feed Names defined and not empty', function() {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* a new test suite named "The menu" */
    describe('The menu', function() {
         /* ensure the menu changes visibility when the menu icon
          * is clicked. This test has two expectations: does the menu
          * display when clicked and does it hide when clicked again.
        */
        it('reveals/hides when clicked', function() {
            const bodyElement = document.getElementsByTagName('body');
            const menuElement = document.getElementsByClassName('menu-icon-link');
            /* first click should reveal the menu */
            menuElement[0].click();
            expect(bodyElement[0].className).not.toContain('menu-hidden');
            /* next click should re-hide the menu */
            menuElement[0].click();
            expect(bodyElement[0].className).toContain('menu-hidden');
        });

         /* ensures the menu element is hidden by default. */
        it('is hidden by default', function() {
            const bodyElement = document.getElementsByTagName('body');
            /* The 'menu-hidden' class hides the menu off screen to the left */
            expect(bodyElement[0].className).toContain('menu-hidden');
        });
    });

    /* a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* a test that ensures when the loadFeed function is called and
         * completes its work, there is at least a single .entry element
         * within the .feed container. Remember, loadFeed() is
         * asynchronous so this test will require the use of Jasmine's
         * beforeEach and asynchronous done() function.
        */
        /* Call loadFeed() and await async return */
        beforeEach(function(done) {
            loadFeed(0, function (){
                done();
            });
        });

        /* loadFeed() has returned, check for feed entries */
        it('loadFeed() loaded at least one article entry in the feed', function() {
            const feed = document.getElementsByClassName('feed');
            const entries = feed[0].getElementsByClassName('entry');
            /* entries should be greater than 0 */
            expect(entries.length).not.toBe(0);
        });
    });

    /* a test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* ensure that when a new feed is loaded by the loadFeed function
         * that the content actually changes. Remember, loadFeed() is
         * asynchronous.
        */
        /* variables to hold feed content */
        let initContent = '', subContent = '';

        /* check that at least 2 feeds are available for the following test */
        if (allFeeds.length < 2) {
            throw 'At least 2 feeds are required for this test';
        }

        /* get first feed */
        beforeEach(function(done) {
            loadFeed(0, function (){
                let initFeed = document.getElementsByClassName('feed');
                initContent = initFeed[0].innerHTML;
                done();
            });
        });

        /* get next feed */
        beforeEach(function(done) {
            loadFeed(1, function (){
                let subFeed = document.getElementsByClassName('feed');
                subContent = subFeed[0].innerHTML;
                done();
            });
        });

        /* loadFeed()s have returned, check feed innerHTML has changed */
        it('content changes following subsequent loadFeed()s', function() {
            expect(subContent).not.toBe(initContent);
        });
    });

}());