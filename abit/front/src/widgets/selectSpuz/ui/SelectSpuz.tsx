import { SpuzListView } from '~entities/spuz';
import { SpuzFilterView } from '~features/spuzFilter';

const SelectSpuz = () => {
  return (
    <>
      <SpuzFilterView />
      <SpuzListView />
    </>
  );
};

export default SelectSpuz;
