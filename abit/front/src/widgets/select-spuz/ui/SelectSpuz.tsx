import { SpuzListView } from '~entities/spuz';
import { SpuzFilterView } from '~features/spuz-filter';

const SelectSpuz = () => {
  return (
    <>
      <SpuzFilterView />
      <SpuzListView />
    </>
  );
};

export default SelectSpuz;
