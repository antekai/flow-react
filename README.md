# Flow react

View and manage workflows

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
- Search and display nodes
- Add nodes and connections to the workflow

Technologies:

- Development server/tooling: vite
- Styles: styled-components, ant-design
- Testing: eslint, vitest, @testing-library/react, playwright
- CI: github actions
- Hosting: S3 bucket (Amazon Web Services)

## Development

> ```shell
> yarn start # local development
> yarn lint # linting add --fix flag for automatic fixes
> yarn test # run tests
> yarn e2e # run e2e tests
> yarn build # build app at folder /dist
> yarn preview # preview locally build files
> ```
