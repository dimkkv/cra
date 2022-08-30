export interface ImmunaDefiSdkResponse {
  name: string;
  description: string;
  websiteUrl: string;
  iconUrl: string;
  pool_address: string;
  type: string;
  amount: string;
  token: string; // address
  token_name: string;
  symbol: string;
  decimals: number;
  underlying: Array<{
    amount: string;
    decimals: number;
    iconUrl: string;
    name: string;
    symbol: string;
    token: string; // address
  }>;
}

export interface Alert extends ImmunaDefiSdkResponse {
  id: number;
  severity: ImmunaSeverity;
  event: ImmunaEvent;
}

export enum ImmunaSeverity {
  LOW = 1,
  MODERATE = 2,
  HIGH = 3,
}

export enum ImmunaEvent {
  tvl = 'Pool liquidity (TVL of pool)',
  tvl_underlying = 'Market liquidity of assets in this pool',
  price_flic = 'Price fluctuation of assets in this pool',
  slippage_for_colleteral = 'Market expectations of slippage for collateral to sell',
  trade_size = 'Trade size',
  volatility = 'Volatility',
  liquidation = 'Liquidation',
  outstanding_debot = 'Outstanding Debt',
  average_trading_volume = 'The average daily trading volume from the top 10 exchanges with well-functioning markets identified by Bitwise Investments',
  gov_liquidation = 'Liquidation incentive (Governance param)',
  gov_colleteral_factor = 'Collateral factor (Governance param)',
  gov_close_factor = 'Close factor (Governance param)',
}
