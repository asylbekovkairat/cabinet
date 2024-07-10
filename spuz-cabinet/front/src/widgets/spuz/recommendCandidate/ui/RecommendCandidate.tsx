import { AttestatCandidatesFilterView } from '~features/spuz/attestat';

export const RecommendCandidate = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
        <AttestatCandidatesFilterView />
      </div>
    </>
  );
};
