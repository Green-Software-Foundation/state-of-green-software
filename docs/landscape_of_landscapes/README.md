# Readme
### State of Green Software: Landscape of Landscapes
This is a project run through the [Policy Working Group](https://grnsft.org/policy-wg) of the [Green Software Foundation](https://greensoftware.foundation) and can be viewed through https://TODO.greensoftware.foundation

## Description
As part of the preparation of the State of Green Software Report, and in the spirit of "working in the open", this repository is a curated "overview of overviews".

It is intended as a good starting point for anyone seeking a current Big Picture on the state, trends and evolution of the green software ecosystem around the world.

It is one of the data sources for the State of Green Software project, and a community resource in its own right.

## Curation Criteria

### Heuristic approach

All statements of approach below should be considered guidelines. Exceptions will be made when considered helpful. Definitions will not be static or overly strict. This is a fast changing, formative field, and the aim is to be agile rather than rigid in tracking its evolution. The repository is conceived as a living document which may evolve in format and parameters as data accrues.


### Inclusion critera

Within each category, the collection will include resources that attempt a comprehensive, high level overview of data relevant to Green Software, inclusively conceived.

Examples include:

- overview reports
- literature reviews
- awesome-lists
- collections of APIs
- regulatory datasets
- public datasets and dashboards (tableau, ITU, etc)
- Summative data collections and snippets (e.g. statista)
- summative graphs (wardley maps, gartner quadrants, trustmaps, etc)

All resources should be evidence-based, from a credible source and add significant knowledge to the overviews already collected. Any new entry should be no more than 2 years old OR the latest available date for the thematic area covered.

### Exclusion criteria

Overviews should be geographically global or, exceptionally, continental in scope, unless they focus on relevant topics for which there are minimal higher level overviews, or which have global significance even if more localised in scope.

Overviews should be thematically as high level as possible, or if they are specialist/niche, they should synthesise a large amount of resources not synthesised elsewhere in this collection.

## Copyright
This project is copyrighted under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/).

## Patent
No Patent License.

## License
This project is licensed under the MIT License - see the [LICENCE](LICENCE) file for details.

## Contributing

This project is open source and welcomes public contribution via issues, discussions and pull requests.

Members of the Green Software Foundation also meet and discuss aspects of this project either in-person or virtual via email or video.

Instructions for how to contribute to this project can be found in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Editing Content

This project is a static website based on the project https://docusaurus.io, you can find more information about docusaurus here: https://docusaurus.io/docs

The `docs` folder contains all of the material in this project, editing any file there in the `main` branch will update the website. If you are only interested in editing content on the website then you should not need to leave the `docs` folder.

The documentation files use a format called markdown and they end in `.md` which supports certain basic styling features like so: https://docusaurus.io/docs/markdown-features

## Developing Locally

To edit this project on your local machine and see the output as it would be rendered on the website you will need `node` at least version 14 installed.

We also recommend to use `yarn` as the package management solution as the deployment scripts use `yarn` not `npm`.

`npm -g install yarn`

`yarn install`

Then to run the project locally type

`yarn run docusaurus start`

and visit https://localhost:3000 in your favorite browser or whatever the command above prints out in the terminal.

## Site Configuration

To edit attributes of the website, customize the menu, sidebar and footer for example, you will need to edit the `docusaurus.config.js` file, more information about the options that are present there can be found here: https://docusaurus.io/docs/api/docusaurus-config