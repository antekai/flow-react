# Flow react

View and manage workflows

![Image](/flow-preview.jpg "preview")

## Table of Contents

- [Installation](#installation)
- [Description](#description)
- [Development](#development)

## Installation

1)Clone the repository to your local machine and install required dependencies

> ```shell
> git clone
> cd flow-react
> yarn install
> ```

## Description

This is a a react single page application that allows users to view and manage workflows.

Features:

- View workflows with zoom in/out
- Search and add or remove nodes by input component
- Move and remove nodes and nodes-connections at the workflow panel

Technologies:

- Development server/tooling: vite
- Styles: styled-components
- Testing: eslint, vitest, @testing-library/react
- CI: github actions
- Hosting: S3 bucket (Amazon Web Services)

## Development

> ```shell
> yarn start # local development
> yarn lint # linting add --fix flag for automatic fixes
> yarn test # run tests
> yarn build # build app at folder /dist
> yarn preview # preview locally build files
> ```
