# Web Development Project 5 - *American Brewery Explorer*

Submitted by: **Jonathan Chau**

This web app: **Allows users to search for different breweries around America. The app shows summary statistics with the dashboard, including number of breweries, average breweries per state, and the state with the most breweries. With a search bar and dropdown, users can filter breweries shown using the name of a select state and the type of brewery wanted.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard should display at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [X] **`useEffect` React hook and `async`/`await` are used**
- [X] **The app dashboard includes at least three summary statistics about the data** 
  - The app dashboard includes at least three summary statistics about the data, such as:
    - Total number of breweries featured in the API
    - Average number of breweries per state
    - The name of the state that contains the most breweries
- [X] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [X] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar 
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously
- [X] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [X] All the site's features are described above.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='/brewery.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with QuickTime Player, CloudConvert  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Challenges I faced while developing this app was trying out different APIs and identifying how I could use the different aspects of the API data to implement into the app. Additionally, I needed to use map and filter to interact with the front-end of the website and the API as well as figure out how to use the async, await, and UseEffect to use the API. Additionally, I needed to look into using new JavaScript features to create functions in order to make summary statistics for the application.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.