## Rupaya Governance DApp
[![GitHub version](https://badge.fury.io/gh/rupaya%2Fgov.svg)](https://badge.fury.io/gh/rupaya%2Fgov)
[![Build Status](https://travis-ci.org/rupaya-project/gov.svg?branch=master)](https://travis-ci.org/rupaya-project/gov)
[![devDependencies Status](https://david-dm.org/rupaya-project/gov.svg)](https://david-dm.org/dwyl/goodparts?type=dev)
[![JavaScript Style Guide: Good Parts](https://img.shields.io/badge/code%20style-goodparts-brightgreen.svg?style=flat)](https://github.com/dwyl/goodparts "JavaScript The Good Parts")
[![Coverage Status](https://coveralls.io/repos/github/rupaya-project/gov/badge.svg?branch=master)](https://coveralls.io/github/rupaya-project/gov?branch=master) [![Join the chat at https://gitter.im/rupaya-project/gov](https://badges.gitter.im/rupaya-project/gov.svg)](https://gitter.im/rupaya-project/gov?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is Governance Dapp for Rupaya. Full-Node can apply to become a candidate for masternode. Coin Holder can vote for candidates to become masternodes. See the detail from technical Whitepaper: https://docs.rupaya.com/whitepaper/](https://docs.rupaya.com/whitepaper/)

## Requirements
- NodeJS (If you get EACCES permission issue, please see: https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)
- MongoDB
- Truffle Framework

## Config
```
cp config/default.json config/local.json
```
- Update `local.json` file to support your environment
  - Update mnemonic
  - Update mongodb configuration:
      - For docker:
      `  "db": {
      "uri": "mongodb://mongodb:27017/governance"
      },
    `
      - For localhost: 
      `
      "db": {
      "uri": "mongodb://localhost:27017/governance"
    },
    `

## Install
```
npm install
truffle deploy --reset --network rupaya # only use this command if you want to connect to a private network
cp abis/*json build/contracts/
```
Note: before deploying to rupaya testnet, make sure you have RUPX in the wallet. If not, get free at [https://faucet.rupaya.com](https://faucet.rpc.testnet.rupx.io)

## Enable https
``` npm run dev-https```
## Run
- Start mongodb
- Start RupayaGov
```
npm run dev
```
The site will run at [`http://localhost:3000`](http://localhost:3000)

## Test
```
npm run test
```
Or run command
```
truffle test
``` 



#### Test a special file
```
npm run test path_to_file/file.js
```
Or run command
```
truffle test path_to_file/file.js
```

