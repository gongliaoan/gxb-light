import DashboardContainer from "./components/Dashboard/DashboardContainer";
import Witnesses from "./components/Explorer/Witnesses";
import CommitteeMembers from "./components/Explorer/CommitteeMembers";
import FeesContainer from "./components/Blockchain/FeesContainer";
import BlocksContainer from "./components/Explorer/BlocksContainer";
import AssetsContainer from "./components/Explorer/AssetsContainer";
import AccountsContainer from "./components/Explorer/AccountsContainer";
import Explorer from "components/Explorer/Explorer";
import AccountPage from "./components/Account/AccountPage";
import AccountOverview from "./components/Account/AccountOverview";
// import AccountAssets from "./components/Account/AccountAssets";
// import {AccountAssetCreate} from "./components/Account/AccountAssetCreate";
// import AccountAssetUpdate from "./components/Account/AccountAssetUpdate";
import AccountMembership from "./components/Account/GXBAccountMembership";
// import AccountVesting from "./components/Account/AccountVesting";
// import AccountDepositWithdraw from "./components/Account/AccountDepositWithdraw";
// import AccountPermissions from "./components/Account/AccountPermissions";
import AccountWhitelist from "./components/Account/AccountWhitelist";
import AccountVoting from "./components/Account/AccountVoting";
// import AccountOrders from "./components/Account/AccountOrders";
// import ExchangeContainer from "./components/Exchange/ExchangeContainer";
// import MarketsContainer from "./components/Exchange/MarketsContainer";
import GXBMerchantVerify from './components/Account/GXBMerchantVerify';
import GXBDataSourceVerify from './components/Account/GXBDataSourceVerify';

import DataMarket from "./components/DataMarket/DataMarket"
import DataMarketDetail from "./components/DataMarket/DataMarketDetail"
import LeagueDetail from "./components/DataMarket/LeagueDetail"

import Transfer from "./components/Transfer/Transfer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import BlockContainer from "./components/Blockchain/BlockContainer";
import AssetContainer from "./components/Blockchain/AssetContainer";
import CreateAccount from "./components/Account/CreateAccount";
import {ExistingAccount, ExistingAccountOptions} from "./components/Wallet/ExistingAccount";
import { WalletCreate, CreateWalletFromBrainkey } from "./components/Wallet/WalletCreate";
import ImportKeys from "./components/Wallet/ImportKeys";
import Invoice from "./components/Transfer/Invoice";
import {BackupCreate, BackupRestore} from "./components/Wallet/Backup";
import WalletChangePassword from "./components/Wallet/WalletChangePassword";
import {WalletManager, WalletOptions, ChangeActiveWallet, WalletDelete} from "./components/Wallet/WalletManager";
import BalanceClaimActive from "./components/Wallet/BalanceClaimActive";
import BackupBrainkey from "./components/Wallet/BackupBrainkey";
import Brainkey from "./components/Wallet/Brainkey";
import Help from "./components/Help";
import InitError from "./components/InitError";
