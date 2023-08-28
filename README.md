# Main information
* Polygon platform address : [0x13f9b087eb902229cf172cEBe4aAE8C890E6a7FB](https://mumbai.polygonscan.com/address/0x13f9b087eb902229cf172cEBe4aAE8C890E6a7FB#code)
* BSC testnet platform address : [0x13f9b087eb902229cf172cEBe4aAE8C890E6a7FB](https://testnet.bscscan.com/address/0xB9766eb9B900Fc44AA7042f07f41aaB532B32AA3#code)

## Installation
Clone the repository and install the dependencies using the following command:
```
npm i
```

## Deployment
Fill in the .env file and use the command:
```
npx hardhat run scripts/deploy.ts --network polygon-mumbai
npx hardhat run scripts/deploy.ts --network bscTestnet
```

## Custom task

```
npx hardhat sign
npx hardhat swap
npx hardhat redeem
```
## Task running
Running a sign task: 
```
npx hardhat sign --from 0xb08A6d31689F15444f9F3060Ef6bB63E66Be76D2 --to 0xb08A6d31689F15444f9F3060Ef6bB63E66Be76D2 --amount 500000000000000000000000000000000000000000000000000000000000 --nfrom 97 --nto 4 --nonce 1 --network polygon-mumbai
```
## Test Running
Running contract tests: 
```
npx hardhat test
```
![test screenshot](https://github.com/danilpimankin/crosschain-bridge/blob/main/screenshot1.png)