Here are the  corresponding branches to each feature, this information is also listed in our Project Board in the comments of the corresponding issues:

      Code pertaining to the back end implementation of the **tag question** feature is located in the **tag_question branch**
      Code pertianing to the front end implementation of **view bookmarks on the topic list pages** is located in the **display_bookmarks branch**
      Code pertaining to the front end implementation of **access the bookmarks list** is located in the **add_bookmark branch**
      Code pertaining to the **resolve** feature is located in the **resolve branch**
      
      Using Bookmark Sort Feature:
      - make sure  "nodebb-plugin-sort-bookmarks": "0.1.0" is in the package.json file in the root directory and run npm install
      - run npm link
      - start instance of nodebb and go to admin panel 
            - navigate to plugins and activate the nodebb-plugin-sort-bookmarks plugin
      - log into user account for nodebb and the topics should be ordered by the number of bookmakrs
      - can also be tested locally by running the plugin tests 

      Using tag/post linking feature:
      - dependency: "nodebb-plugin-mentions", which should be installed and activated by default
      - type $<pid> in the composer, where <pid> represents the id of the target post 
      - when a suggestion pops up, hit TAB to select the suggestion
      - suggestion will autofill the entry for linking, in the format of [# <pid>](<url>)
      - done! link should be available in preview and after posting
