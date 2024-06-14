import React, { useEffect } from 'react';

import { ToursListView, useSetTours, useTours } from '~entities/tours';

const Tours = () => {
  const tours = useTours();
  const setTours = useSetTours();

  useEffect(() => {
    setTours();
  }, []);

  return (
    <>
      <ToursListView list={tours || []} />
    </>
  );
};

export default Tours;
