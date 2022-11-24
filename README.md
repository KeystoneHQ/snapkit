# snapkit

## Usage

### Install from Github Tag

```bash
yarn add snapkit@git+ssh://git@github.com:KeystoneHQ/snapkit#[tagName]

example:
yarn add snapkit@git+ssh://git@github.com:KeystoneHQ/snapkit#v0.1.5
```

### Import CSS

```js
import 'snapkit/dist/style.css'
```

### Import Component

```js
import { Tabs, Tab } from 'snapkit'
```

### Document

There is no document open to the public, you need to use storybook to build it yourself.

## Development

### Install

```bash
yarn install
```

### Start

```bash
yarn run dev
```

### Build Components and Documents

```bash
yarn run build
```

### Build Document

```bash
yarn run build:storybook
```

## Use package in localhost proejct dependency

### Install a local package manager

```bash
npm i yalc -g
```

### Publish package

> publish snapkit package \
Execute in the project directory:

```bash
npm run publish:local
```

### Add dependency to the project

```bash
yalc add snapkit --link
```

### Publish update components to the local package manager

```bash
npm run publish:local
```

### Publish to Github tag

> changed package.json version \
  tip: only master branch publish:git

```bash
npm run publish:git
```

## Development specification

1. The storybook file is named as "xxx.stories.tsx";
2. The css module is named as "xxx.module.scss";
