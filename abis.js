'use strict'

const fs = require('fs')

// copy & save RupayaValidator
let RupayaValidatorAbi = require('./build/contracts/RupayaValidator.json')
let networks = RupayaValidatorAbi.networks
networks['78'].address = '0x0000000000000000000000000000000000000088'
let data = JSON.stringify(RupayaValidatorAbi, null, 2)
fs.writeFileSync('./abis/RupayaValidator.json', data)

// copy & save BlockSigner
let BlockSignerAbi = require('./build/contracts/BlockSigner.json')
networks = BlockSignerAbi.networks
networks['78'].address = '0x0000000000000000000000000000000000000089'
data = JSON.stringify(BlockSignerAbi, null, 2)
fs.writeFileSync('./abis/BlockSigner.json', data)

// copy & save RupayaRandomize
let RupayaRandomizeAbi = require('./build/contracts/RupayaRandomize.json')
networks = RupayaRandomizeAbi.networks
networks['78'].address = '0x0000000000000000000000000000000000000090'
data = JSON.stringify(RupayaRandomizeAbi, null, 2)
fs.writeFileSync('./abis/RupayaRandomize.json', data)

// copy & save Migrations
let MigrationsAbi = require('./build/contracts/Migrations.json')
data = JSON.stringify(MigrationsAbi, null, 2)
fs.writeFileSync('./abis/Migrations.json', data)

// copy & save SafeMath
let SafeMathAbi = require('./build/contracts/SafeMath.json')
data = JSON.stringify(SafeMathAbi, null, 2)
fs.writeFileSync('./abis/SafeMath.json', data)
