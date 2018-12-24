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

export const applications: any[] = [
  ...metaBase, ...functionMaintenance, ...healthPortal,
  ...hisptzTouch, ...iAssignments, ...indicatorSearch,
  ...mohGuidelines, ...scorecard, ...IDashboard,
  ...smtReports, ...touch, ...touchDashboard,
  ...interactiveMaps, ...scorecardWidget,
  ...dhisMenu, ...dhisHttpClient, ...dhisOrgunitTree,
  ...dhisCloudDrive,
];
