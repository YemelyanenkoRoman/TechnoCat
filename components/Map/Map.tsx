'use client';
import { YMaps, Map as DefaultMap, Placemark } from '@pbe/react-yandex-maps';
import { useState } from 'react';
import MapBacground from '@/public/map.svg';

export const Map = () => {
  const [isReady, setIsReady] = useState(false);
  const defaultState = {
    center: [52.436156, 31.002291],
    zoom: 14,
  };

  return (
    <>
      {!isReady && <MapBacground />}
      <YMaps query={{}}>
        <DefaultMap defaultState={defaultState} onLoad={() => setIsReady(true)}>
          <Placemark geometry={[52.436156, 31.002291]} />
        </DefaultMap>
      </YMaps>
    </>
  );
};
