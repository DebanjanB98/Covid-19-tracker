import {UPDATES_COUNT} from '../constants';
import {capitalize} from '../utils/commonFunctions';

import {CrossReferenceIcon} from '@primer/octicons-react';
import {format, formatDistance} from 'date-fns';
import {Fragment, useLayoutEffect} from 'react';


const newDate = new Date();
let currentDate = newDate;

function Updates({updates}) {
  

  useLayoutEffect(() => {
    currentDate = newDate;
  });

  return (
    <div className="updates">
      <div className="updates-header">
        <h2>{format(currentDate, 'd MMM')}</h2>
      </div>

      {updates
        .slice(-UPDATES_COUNT)
        .reverse()
        .map(function (activity, index) {
          activity.update = activity.update.replace(/\n/g, '<br/>');
          const activityDate = new Date(activity.timestamp * 1000);
          const addHeader = () => {
            currentDate = activityDate;

            return (
              <>
                {index === 0 ? (
                  <div className="update">
                    <h4>{('No updates yet!')}</h4>
                  </div>
                ) : (
                  ''
                )}
                <div className="updates-header">
                  <h2>{format(activityDate, 'd MMM')}</h2>
                </div>
              </>
            );
          };

          return (
            <Fragment key={index}>
              {activityDate.getDate() !== currentDate.getDate()
                ? addHeader()
                : ' '}
              <div key={index} className="update">
                <h5>
                  {capitalize(
                    formatDistance(
                      new Date(activity.timestamp * 1000),
                      new Date()
                    )
                  ) + ` ${('ago')}`}
                </h5>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: activity.update,
                  }}
                ></h4>
              </div>
            </Fragment>
          );
        })}
      <div className="updates-footer">
        <a
          href="https://t.me/covid19indiaorg_updates"
          target="_blank"
          className="telegram"
          rel="noopener noreferrer"
        >
          <h4>
            {('Get updates on Telegram')}
            <CrossReferenceIcon />
          </h4>
        </a>
      </div>
    </div>
  );
}

export default Updates;
