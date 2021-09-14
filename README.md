# Scan Env

Scan Env is a simple npm package which reads required environment variables
from `.env.example` and scan those in `.env`. It uses `dotenv` in background to load the `.env` file.

It returns a boolean.

[npm package link](https://www.npmjs.com/package/scan-env)

## Install

```
npm install scan-env
```

## Use

### With default files

- Environment File Name: `.env`
- Env Example File Name: `.env.example`
- Env Ignored File Name: `.envignore`

```js
const scanEnv = require("scan-env");

const scanResult = scanEnv();

if (!scanResult) {
  console.error("Environment variables are missing.");
}
```

### With custom files

- Environment File Name: `.prod.env`
- Env Example File Name: `.prod.env.example`
- Env Ignored File Name: `.prod.envignore`

```js
const scanEnv = require("scan-env");

const scanResult = scanEnv(".prod.env", ".prod.env.example", ".prod.envignore");

if (!scanResult) {
  console.error("Environment variables are missing.");
}
```

## File Details

- `.env` file saves the original environment values.
- `.env.example` list all the env keys required by the application. Syntax of this env file must be like `.env`.
- `.envignore` list all the env keys which can be ignored if are missing.
