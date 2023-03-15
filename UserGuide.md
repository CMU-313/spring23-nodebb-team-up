Here are the  corresponding branches to each feature, this information is also listed in our Project Board in the comments of the corresponding issues:

1) Using Bookmark Sort Feature:
      - make sure          "nodebb-plugin-sort-bookmarks": "file:/plugins/nodebb-plugin-sort-bookmarks" is in the package.json file in the root directory and run npm install
      - run npm link
      - start instance of nodebb and go to admin panel
            - navigate to plugins and activate the nodebb-plugin-sort-bookmarks plugin
      - log into user account for nodebb and the topics should be ordered by the number of bookmakrs
      - can also be tested locally by running the plugin tests 

   Using Bookmark feature on the navigation bar:
      - make sure the user is logged in before starting nodebb
      - user can access all bookmarked posts by clicking the heart icon on the top navigation bar

      Tests for the Bookmark feature can be found in its specific plugins [test folder](plugins/nodebb-plugin-sort-bookmarks/test/sort-bookmarks-test.js). We decided to test the sorting function with automated tests that compared the expected output of a sample topic set with the actual output of the sorting function. This made sure that the sorting function was working as intended and looking at the correct attributes. We feel as though the tests are sufficient because we expanded the test suite to account for a set of topics that is empty. Due to the existing tests in the NodeBB codebase, there likely will be no edge cases beyond an empty test set and in convering the new methods, we have increased our coverage to our new feature.
      
      In addition to this, we manually tested the plugin because we felt it would be more comprehensive and less-involved than automated tests for the plugin. For the scope of our implementation, we felt as though it was enough because the feature would not compromise the integrity of the remainder of the code base and we could visually tell if the plugin was active based on if the topics were sorted correctly on the web page.


2) Using tag/post linking feature:
      - dependency: "nodebb-plugin-mentions", which should be installed and activated by default
      - type $<pid> in the composer, where <pid> represents the id of the target post 
      - when a suggestion pops up, hit TAB to select the suggestion
      - suggestion will autofill the entry for linking, in the format of [# <pid>](<url>)
      - done! link should be available in preview and after posting

      Tests for tagging posts feature can be found at the [plugin tests folder](/node_modules/nodebb-plugin-mentions/test/regex.js) upon installation of the patch. These tests are comprehensive and modeled around prior tests for the mentions plugin for usernames. As such, it was only necessary to add tag specific tests using regex to detect whether or not the leading string existed and referenced a possible number to a tagged post. In doing so, we kept our tests succinct, explainable, and comprehensive. Overall, the coverage on the new code goes up, while keeping the same properties for the plugin-patch the same. 
      
