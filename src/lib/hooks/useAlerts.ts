import { Alert, ImmunaEvent, ImmunaSeverity } from 'lib/types';
import React from 'react';
import { useDefiBalance } from './useDefiBalance';
import { atom, useRecoilState } from 'recoil';
import { utils } from 'lib/utils';

const alertState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: JSON.parse(window.localStorage.getItem('alerts') || '[]'), // default value (aka initial value)
});

export function useAlerts() {
  let initId = Date.now() + new Date().getMilliseconds();
  const newId = () => {
    initId += 1;
    return initId;
  };
  const [alerts, setAalerts] = useRecoilState<Alert[]>(alertState);
  const setAlerts = (data) => {
    //console.log({ data });
    window.localStorage.setItem('alerts', JSON.stringify(data));
    setAalerts(data);
  };
  const { balance } = useDefiBalance();
  React.useEffect(() => {
    //if (JSON.parse(window.localStorage.getItem('alerts') || '[]').length === 0)
    setAlerts(
      balance.map((b) => {
        return {
          ...b,
          id: newId(),
          severity: ImmunaSeverity[utils.randomIntFromInterval(1, 3)] as any,
          event: Object.values(ImmunaEvent)[utils.randomIntFromInterval(1, 9)],
        };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balance]);
  const getAlert = (id: number) => {
    return alerts.find((a) => a.id === id);
  };
  const getAlertByToken = (token: string) => {
    return alerts.find((a) => a.token === token);
  };
  const addAlert = (alert: Alert) => {
    setAlerts([...alerts, alert]);
  };
  // TODO make it work
  const removeAlert = (id: number) => {
    console.log(id);
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };
  const updateAlert = (alert: Alert) => {
    setAlerts(alerts.map((a) => (a.id === alert.id ? alert : a)));
  };
  return {
    alerts,
    addAlert,
    removeAlert,
    updateAlert,
    getAlert,
    getAlertByToken,
    setAlerts,
    newId,
  };
}
