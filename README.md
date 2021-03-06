# landscape
Landscape map visualisation of data.
![landscape map viewpoint](https://steelbreeze.net/images/landscape-map.png)
These visualisations conform to the [Archimate Landscape Map Viewpoint](https://pubs.opengroup.org/architecture/archimate2-doc/chap08.html#_Toc371945248).

These visualisations are an invaluable communication tool offering insight into the health of an application portfolio. High density areas indicate a fragmented portfolio, or redundancy; a wide scope may indicate over-extension.

If you like @steelbreeze/landscape, please star it.
## Installation
Download landscape.min.js from the Releases page. Once added into your project, the API will be available under the ```landscape``` global object.
## Usage
The API is split into four main functions:
1. getAxes: analyses an array of source data and returns a pair of axis (the set of distinct values for given property names).
2. getOptimalAxes: analyses the source data to return the optimal order of the axes values, where there is greatest adjacency across cells.
3. getTable: returns the source data in an intermediary format ready for rendering in #4 or some other method, such as D3.
4. getHTML: generates an array of HTML table rows for insertion into a table or table body.

Depending on your needs, you use a subset of these functions. For example, if you know the axes you want to display and their order, you can omit steps 1 and 2.

The full API documentation can be found [here](https://steelbreeze.net/landscape/api/v1/).

## License
MIT License

Copyright (c) 2020 David Mesquita-Morris
