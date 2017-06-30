import { LogonInfo } from '../shared/models/LogonInfo';

export class LogonService {
  static DEFAULT_LOGON_INFO : LogonInfo = {id:'sri', password:'sri@yahoo.com'};

  public getLogonInfo() : LogonInfo {
    return LogonService.DEFAULT_LOGON_INFO;
  }
}
