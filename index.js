const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

const scanEnv = (
  envFile = ".env",
  exampleEnv = ".env.example",
  ignoreEnv = null
) => {
  // load envFile
  dotenv.config({ path: path.resolve(envFile) });

  // read and parse example env file
  let buf = Buffer.from(fs.readFileSync(path.resolve(exampleEnv), "utf-8"));
  const config = dotenv.parse(buf); // will return an object

  let ignoreConfig;
  if (ignoreEnv) {
    // read and parse ignore env file
    buf = Buffer.from(fs.readFileSync(path.resolve(ignoreEnv), "utf-8"));
    ignoreConfig = dotenv.parse(buf); // will return an object
  }

  const missingEnvs = [];

  for (let k in config) {
    // check if env is missing and not ignore
    if (!process.env[k] && !ignoreConfig[k]) {
      missingEnvs.push(k);
    }
  }

  if (missingEnvs.length) {
    console.warn(
      `Env Scan Report
------------------------------------------------------------------------
Total Missing Environment Variables:
${missingEnvs.length}

Missing Environment Variables: 
${missingEnvs.join("\n")}
------------------------------------------------------------------------
`
    );
    return false;
  }

  return true;
};

module.exports = scanEnv;
