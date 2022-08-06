require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food ship rifle pizza solar inner enroll frame gate'; 
let testAccounts = [
"0x37c39a98761140bc4839569cc2b6e3c2366c4d0c53e13d2503417b54d16b06d7",
"0x2ce4bfbed3c1519873778529651b9a5f18323d816fb9e3616322da464cb3443e",
"0xc73e3a6605f25c940feb960c28abc1a310fd0cfd0ea7648044a354e2893a2c02",
"0xe4787756fbda0b2576fa66345184c09e7f8110fea3ab283b2fb39a6c16f6582a",
"0x605e1f16642c94e267697575207633db6bbd3e08262a4c5bb9ba8fadf878cdb3",
"0x228840e33546c582a32e8ec12c3ee38a552a1ce8a3a0601b04b030bd8aa7dc85",
"0x7f38573077715d2ef1a1b327af8fd5f86ec1d7dc4daf21e4ad759aa3fff6bdda",
"0x93c5958c9d03bdac43855c180a6c70409209fd791370f078efc41ff53295a3fc",
"0x11ec3fbfcbd54bc965892537421b12f75704570e555129cbd458c409ecd6b21e",
"0xaf1ec79fb7fc38bd22a313b79f4afe4a802592ac137947e5eecb161fc6c2a3a2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

