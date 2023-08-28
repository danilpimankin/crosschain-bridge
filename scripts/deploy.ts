import {ethers, run, network} from 'hardhat'


const delay = async (time: number) => {
	return new Promise((resolve: any) => {
		setInterval(() => {
			resolve()
		}, time)
	})
}

async function main() {
	const validator = "0xc0e2a073872F0C90d8A3d19cC86F6A1EbF298964"   
	const BridgePlatform = await ethers.getContractFactory("Bridge");
	const bridge = await BridgePlatform.deploy(validator);

	await bridge.deployed();

	console.log(
		`Platform contract deployed to ${bridge.address}`
	);

	console.log('wait of delay...')
		await delay(15000) // delay 15 secons
		console.log('starting verify contract...')
		try {
			await run('verify:verify', {
				address: bridge!.address,
				contract: 'contracts/Bridge.sol:Bridge',
				constructorArguments: [validator],
			});
			console.log('verify success')
		} catch (e: any) {
			console.log(e.message)
		}
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
