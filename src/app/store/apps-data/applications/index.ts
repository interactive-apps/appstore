import {dhisCloudDrive} from './dhis-cloud-drive';
import {healthPortal} from './health-portal';
import {touchDashboard} from './touch-dashboard';
import {touch} from './touch';
import {smtReports} from './smt-reports';
import {scorecard} from './scorecard';
import {mohGuidelines} from './moh-guidelines';
import {indicatorSearch} from './indicator-search';
import {iAssignments} from './i-assignments';
import {hisptzTouch} from './hisptz-touch';
import {IDashboard} from './i-dashboard';
import {functionMaintenance} from './function-maintenance';
import {metaBase} from './meta-base';
import {interactiveMaps} from './i-maps';
import {scorecardWidget} from './scorecard-widget';
import {dhisMenu} from './dhis-menu';
import {dhisHttpClient} from './dhis-httpClient';
import {dhisOrgunitTree} from './dhis-orgunit-tree';
import { touchMSDQI } from './touch-msdqi';
import { wisnPoa } from './wisn-poa';
import { userSupport } from './user-support';
import { indicatorDictionary } from './indicator-dictionary';
import { leagueTable } from './league-table';
import { leagueTableWidget } from './league-table-widget';
import { dhpApp } from './dhp-app';
import { startRating } from './star-rating';
import { malariaDashboard } from './malaria-dashboard';
import { nacpDashboard } from './nacp-dashboard';
import { bnaApp } from './bna-app';
import { bnaWidget } from './bna-widget';
import { brnDataentry } from './brn-dataEntry';
import { nationalDQA } from './national-dqa';
import { userImport } from './user-import';
import { cascadeWidget } from './909090-cascade-widget';
import { dataQualityWidget } from './data-quality-widget';

export const applications: any[] = [
  metaBase, functionMaintenance, healthPortal,
  hisptzTouch, iAssignments, indicatorSearch,
  mohGuidelines, scorecard, IDashboard,
  smtReports, touch, touchDashboard,
  interactiveMaps, scorecardWidget,
  dhisMenu, dhisHttpClient, dhisOrgunitTree,
  dhisCloudDrive, touchMSDQI, wisnPoa,
  userSupport, indicatorDictionary, leagueTable,
  leagueTableWidget, dhpApp, startRating, malariaDashboard,
  nacpDashboard, bnaApp, bnaWidget, brnDataentry,
  nationalDQA, userImport, cascadeWidget,
  dataQualityWidget
];
