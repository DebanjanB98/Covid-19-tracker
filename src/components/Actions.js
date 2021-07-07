import ActionsPanel from './ActionsPanel';
import equal from 'fast-deep-equal';
import {memo, useState} from 'react';
import {useLocalStorage} from 'react-use';




const Actions = ({date, setDate, dates}) => {
  const [showUpdates, setShowUpdates] = useState(false);
  const [newUpdate, setNewUpdate] = useLocalStorage('newUpdate', false);
  const [lastViewedLog, setLastViewedLog] = useLocalStorage('lastViewedLog', 0);
  const [isTimelineMode, setIsTimelineMode] = useState(false);

  

  return (
    <>
      <ActionsPanel
        {...{
          lastViewedLog,
          isTimelineMode,
          setIsTimelineMode,
          showUpdates,
          date,
          setDate,
          dates,
          setShowUpdates,
        }}
      />
    </>
  );
};

const isEqual = (prevProps, currProps) => {
  if (!equal(currProps.date, prevProps.date)) {
    return false;
  } else if (!equal(currProps.dates, prevProps.dates)) {
    return false;
  }
  return true;
};

export default memo(Actions, isEqual);
