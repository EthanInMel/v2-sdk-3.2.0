import { Percent } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0xB8a040f25890A80363c1D82f6eF23322aAb46dF1'

export const INIT_CODE_HASH = 'd791fed674bf5115485e28b3ecf3febe345200063a5d9056ce39654010787fef'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
