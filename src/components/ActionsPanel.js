import Tooltip from './Tooltip';

import {retry} from '../utils/commonFunctions';

import {HistoryIcon} from '@primer/octicons-react';
import {format, parse} from 'date-fns';
import {utcToZonedTime} from 'date-fns-tz';
import {useMemo, useCallback, lazy, Suspense} from 'react';


const Timeline = lazy(() => retry(() => import('./Timeline')));

const ActionsPanel = ({
  lastViewedLog,
  isTimelineMode,
  setIsTimelineMode,
  showUpdates,
  date,
  setDate,
  dates,
  setShowUpdates,
}) => {
  

  const trail = useMemo(() => {
    const styles = [];

    [0, 0, 0].map((element, index) => {
      styles.push({
        animationDelay: `${500 + index * 250}ms`,
      });
      return null;
    });
    return styles;
  }, []);

  const getTimeFromMilliseconds = (lastViewedLog) => {
    const lastViewedDate = utcToZonedTime(
      parse(lastViewedLog, 'T', new Date()),
      'Asia/Kolkata'
    );
    return format(lastViewedDate, 'dd MMM, p');
  };

  const handleTimelineClick = useCallback(() => {
    setIsTimelineMode(true);
    if (showUpdates) setShowUpdates(!showUpdates);
  }, [setIsTimelineMode, setShowUpdates, showUpdates]);

  

  return (
    <div className="ActionsPanel">
      <div
        className="actions"
        style={{
          opacity: isTimelineMode ? 0 : 1,
          transform: `perspective(600px) rotateX(${
            isTimelineMode ? 90 : 0
          }deg)`,
          pointerEvents: isTimelineMode ? 'none' : '',
        }}
      >
        <h5 className="fadeInUp" style={trail[0]}>{`${getTimeFromMilliseconds(
          lastViewedLog
        )} ${('IST')}`}</h5>


        <Tooltip message={'Timeline'} hold>
          <div
            className="timeline-icon fadeInUp"
            onClick={handleTimelineClick}
            style={trail[2]}
          >
            {<HistoryIcon />}
          </div>
        </Tooltip>
      </div>

      {isTimelineMode && (
        <Suspense fallback={<div />}>
          <Timeline
            {...{date, setDate, dates, isTimelineMode, setIsTimelineMode}}
          />
        </Suspense>
      )}
    </div>
  );
};

export default ActionsPanel;
