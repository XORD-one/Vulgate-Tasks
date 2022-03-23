const { getMaticPOSClient, from } = require("./config")
const token = "0xf9D9841aDb4F80F765dbFb1dEA09Fb0c6818d75Eg" //child erc20 (matic)

const execute = async () => {
  try {
    const maticPOSClient = getMaticPOSClient()
    const tx = await maticPOSClient.balanceOfERC20(from, token, {})

    console.log("ERC20 balance:: tx") // eslint-disable-line
    console.log(tx) // eslint-disable-line
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}


(async function() {
    await execute()
    process.exit(0)
})()

// execute().then(() => process.exit(0))