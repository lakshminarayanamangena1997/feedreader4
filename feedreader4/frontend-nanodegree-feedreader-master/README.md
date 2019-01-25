# FEND - Feed Reader Testing Project

Udacity Front-End Web Dev Nano-Degree Exploring-JS project.
Test the Feed-Reader page using Jasmine.

## Table of Contents

* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Expected Test Results](#expected-results)

## Features

- Feed Reader
  - The Feed Reader page was pre-supplied.

- Menu
  - Nav Icon reveals/hides RSS Feed list when clicked.
  - Required Feed is displayed when selected.

- Test Results
  - Jasmine test results are displayed at the bottom of the page.
  - Tests performed:
    - RSS Feeds - allFeeds object exists and has 'name' & 'url' entries.
    - The Menu - default state is 'hidden' and that mouse click reveals/hides menu.
    - Initial Entries - Ensure loadFeed() returns at least one feed entry. (Async Test)
    - New Feed Selection - Content changes when new feed selected. (Async Test)

## Installation

Download all the files to your local machine.
```
git clone https://github.com/ColinAshley/frontend-nanodegree-feedreader
cd frontend-nanodegree-feedreader
```
## Usage

Open index.html using a browser.
The Jasmine tests will run automatically.

## Expected Results

```
Jasmine__TopLevel__Suite

  RSS Feeds
    are defined
    Feed URLs defined and not empty
    Feed Names defined and not empty

  The menu
    is hidden by default
    reveals/hides when clicked

  Initial Entries
    loadFeed() loaded at least one article entry in the feed

  New Feed Selection
    content changes following subsequent loadFeed()s
```

## License

Distributed under the MIT license.
