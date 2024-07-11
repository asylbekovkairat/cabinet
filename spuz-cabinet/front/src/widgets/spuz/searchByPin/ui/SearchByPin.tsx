import { CandidateByPinListView } from '~entities/candidate/byPin';
import { useCandidateByPin } from '~entities/candidate/byPin/model';
import { SearchCandidateView } from '~features/spuz/candidate';

const SearchByPin = () => {
  const candidatesByPin = useCandidateByPin();

  return (
    <>
      <SearchCandidateView />
      <CandidateByPinListView list={candidatesByPin || []} />
    </>
  );
};

export default SearchByPin;
