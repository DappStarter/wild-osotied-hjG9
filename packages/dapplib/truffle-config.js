require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food warm response spider coach goddess light army gasp'; 
let testAccounts = [
"0x2e781faaea1713c41eab6309ddcf078ad0a17b5656e250ec811d322517966655",
"0xa7c0461177d574f6f2e7339d9c78c3914b8cac2c29f82e5c630307a23e4f2104",
"0x1ed79aad81eb611397893edd62287152055aaee287f17a00bb578a5f7a97ed3f",
"0xec41b73e49fec90693a7744e05e2dff4ae879d1a98dc69c7bd7948b10b3bb202",
"0x559a186d2ed671311a7f5c8553602a422c7064e908aebe7bea8f203a65094488",
"0x8c4d779cd3cd14eebdb1747c85d84d6e0da95c8440a5bcf7ef8c5b9b077141f3",
"0xfeb4cc9b9deb144cf4be2a51298a29c825a29bd94241cb7d9e01d9711a3b9b3b",
"0x9e8c48d21d9c61412e07121e2911a311366cd4061c97ca0599c9fea10ace1831",
"0x808d3188fcc25102f5c56ecbe7722a4cc1403178999546d51a752603a339510e",
"0xf8a552375b77d908e85fec0b0430aa637f6fb51cdfe2acfb3227e3f20b5b84cb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


