export async function layerzeroFetchWallet(wallet) {
    return fetchWallet(wallet, getKeyByValue(wallets, wallet), false, true)
}

export async function layerzeroClean() {
    await cleanByChecker('layerzero')
}
