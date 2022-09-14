# snapkit

## Usage

### Install from Github Tag

``` bash
yarn add git+ssh://git@github.com:KeystoneHQ/snapkit#[tagName]

example:
yarn add git+ssh://git@github.com:KeystoneHQ/snapkit#v0.1.2
```

### Import CSS

```js
import 'snapkit/dist/style.css'
```

### Import Component

```js
import { Tabs, Tab } from 'snapkit
```

### Document

There is no document open to the public, you need to use storybook to build it yourself.

## Use package in local and dev

### Install a local package manager

``` bash
npm i yalc -g
```

### Publish package

Execute in the snapkit directory:

``` bash
npm run publish:local
```

### Add dependency to the project

Execute in the project directory:
``` bash
yalc add snapkit --link
```

### Development

### Install

> enable pnpm `corepack prepare pnpm@7.11.0 --activate`

```bash
pnpm i
```

### Start

```bash
pnpm run dev
```

### Publish Component

```bash
pnpm run build
```

### Publish Document

```bash
pnpm run build:storybook
```

### Publish Component to the local package manager

```bash
npm run publish:local
```

### Publish to Github tag

> change package.json version and publish

```bash
npm run publish
```

## Development specification

1. The storybook file is named as "xxx.stories.tsx";
2. The css module is named as "xxx.module.scss";
