export interface PropsChild {
  children: React.ReactNode;
}

export interface IBoard {
  code: string;
  name: string;
}

export interface IProductView {
  code: string;
  name: string;
  board: IBoard;
  board_code: string;
  commodity_code: string;
  location_basis_code: string;
  created: Date;
  commodity_image_url: string;
  is_virtual_security: string;
  volume_per_unit: string;
  security_type: string;
  season_to_date_change: string;
  best_buy: string;
  best_sell: string;
  no_of_deals: string;
  daily_change: string;
  can_be_bought: string;
  can_be_sold: string;
  show_on_demo: string;
  show_on_live: string;
  use_ecn_fees: string;
}

export interface ITransactionFeeConfiguration {
  order_type: string;
  fee_name: string;
  fee_description?: any;
  fee_value: string;
  fee_type: string;
  fee_structure_type: string;
}

export interface ILiveTicker {
  security_code: string;
  board: string;
  price: string;
  lowest_price: string;
  location_code: string;
  highest_price: string;
  created: Date;
  transaction_fee_configurations: ITransactionFeeConfiguration[];
}

export interface IClientSettings {
  client_cid: string;
  can_buy_securities: string;
  can_sell_securities: string;
  can_dispatch: string;
  transaction_limit: string;
  is_deactivated: string;
}

export interface IClient {
  cid: string;
  rnb: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  share_code?: any;
  shareable_link: string;
  account_type: string;
  user_account_type: string;
  viewable_markets: string[];
  client_settings: IClientSettings;
  is_certified: string;
  address: string;
  is_approved: string;
  is_kyc_complete: string;
  is_sub_account: string;
  referral_code: string;
  created: Date;
}

export interface ITrades {
  tid: string;
  cid: string;
  client: IClient;
  security_code: string;
  commodity_code: string;
  units: string;
  order_type: string;
  board_type: string;
  order_price: string;
  matched_qty: string;
  status: string;
  security_type: string;
  security_location_code: string;
  created: Date;
  updated: Date;
}

export interface IWallets {
  cid: string;
  full_name: string;
  total_balance: string;
  available_balance: string;
  lien_balance: string;
  is_active: string;
  email: string;
  available_transactable_cash: string;
  cash_advance_limit: string;
  cash_advance_spent: string;
  loan_repayment_balance: string;
}

export interface IPortfolio {
  pk: string;
  cid: string;
  full_name: string;
  security_code: string;
  commodity_name: string;
  board_code: string;
  board_name: string;
  total_units: string;
  available_units: string;
  units_on_hold: string;
  updated: Date;
  location_breakdown?: any;
  is_virtual_security: string;
  location_code: string;
}

export interface ICsd {
  cid: string;
  commodity_code: string;
  total_volume: string;
  available_volume: string;
  lien_volume: string;
  location_code: string;
  location_name: string;
  updated: Date;
}

export interface IStockCover {
  cid: string;
  balance: string;
  available: string;
  on_hold: string;
  created: Date;
  updated: Date;
}

export interface ICashCover {
  cid: string;
  cash_cover_balance: string;
  cash_cover_available: string;
  cash_cover_spent: string;
  created: Date;
  updated: Date;
}

export interface IClientSocket {
  last_update_on: string;
  wallets: Wallets;
  portfolio: IPortfolio[];
  csd: ICsd[];
  stock_covers: IStockCover[];
  cash_cover: ICashCover;
  is_post_connection: string;
}
export type IClientSocketType = {
  last_update_on: string;
  wallets: Wallets;
  portfolio: IPortfolio[];
  csd: ICsd[];
  stock_covers: IStockCover[];
  cash_cover: ICashCover;
  is_post_connection: string;
};

export interface ITransactionFeeConfiguration {
  order_type: string;
  fee_name: string;
  fee_description: string;
  fee_value: string;
  fee_type: string;
  fee_structure_type: string;
}

export interface ILiveTicker {
  security_code: string;
  board: string;
  price: string;
  lowest_price: string;
  location_code: string;
  highest_price: string;
  created: Date;
  transaction_fee_configurations: ITransactionFeeConfiguration[];
}

export type ProductContextType = {
  products: IProductView[];
  tradesData: ITrades[];
  clientData: IClientSocket[];
};
