# my eslint config

I have multiple projects with the same eslint config again and again.
Changing something means changing it in every project.
This hopefully simplifies it.

## Usage

```sh
npm i --save-dev eslint-config-edjopato
```

then adapt your package.json to include this:

```json
{
  "scripts": {
    "eslint-update": "eslint-update"
  }
}
```

then run the script:

```sh
npm run eslint-update
```
