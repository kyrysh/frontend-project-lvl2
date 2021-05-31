# Data Comparator :bookmark_tabs:
[![Actions Status](https://github.com/kyrysh/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/kyrysh/frontend-project-lvl2/actions)
[![Eslinter tests](https://github.com/kyrysh/frontend-project-lvl2/workflows/tests%20lint/badge.svg)](https://github.com/kyrysh/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/kyrysh/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/kyrysh/frontend-project-lvl2/test_coverage)

## Description

"Data Comparator" is a **CLI application**, which shows difference between two data structures.

The app supports different **entry data formats**: json, yaml.

The result can be generated in several formats: plain, stylish and json.

- **plain**
```sh
Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed
```

- **stylish**
```sh
{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
}
```
- **json**
```sh
[
  {
    "name": "common",
    "type": "nested",
    "children": [
      {
        "name": "follow",
        "type": "added"
      }
    ]
  }
]
```

## Install
```sh
$ git clone https://github.com/kyrysh/frontend-project-lvl2
$ cd frontend-project-lvl2
$ npm link
```

## Help
```sh
$ gendiff -h
```

## Usage
```sh
$ gendiff -f <formatter> <filepath1> <filepath2>
```

## Demos (asciinemas)

| Plain | Stylish | Json
|:-----:|:-----:|:-----:
| `$ gendiff -f plain <filepath1> <filepath2>` | `$ gendiff -f stylish <filepath1> <filepath2>` | `$ gendiff -f json <filepath1> <filepath2>`
| [![asciicast](https://asciinema.org/a/blpPp6UrKfqrtMu0alGoSjJwB.svg)](https://asciinema.org/a/blpPp6UrKfqrtMu0alGoSjJwB) | [![asciicast](https://asciinema.org/a/QJPXdtoMljEZ8ieUcAkxbGwk9.svg)](https://asciinema.org/a/QJPXdtoMljEZ8ieUcAkxbGwk9) | [![asciicast](https://asciinema.org/a/qb8zdEPOgzi3s7JSXXNLcluy7.svg)](https://asciinema.org/a/qb8zdEPOgzi3s7JSXXNLcluy7)