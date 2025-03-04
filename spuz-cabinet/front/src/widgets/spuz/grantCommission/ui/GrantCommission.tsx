import { useEffect, useState } from 'react';

import { useUserInfo } from '~entities/shared/user';

import {
  GrantCommissionListView,
  useGrantCommissionList,
  useSetGrantCommissionList,
} from '~entities/spuz/grant-commission';
import { AddGrantCommissionView, removeGrantCommission } from '~features/spuz/grantCommission';

const GrantCommission = () => {
  const grantCommissionsList = useGrantCommissionList();
  const userInfo = useUserInfo();

  const setGrantCommissionList = useSetGrantCommissionList();

  const [grantId, setGrantId] = useState<number | null>(null);

  useEffect(() => {
    if (grantId) {
      loadGrantCommissionList(grantId);
    }
  }, [grantId]);

  const loadGrantCommissionList = (id_grant_position: number) => {
    if (userInfo?.id_university) {
      setGrantCommissionList({ id_university: userInfo?.id_university, id_grant_position });
    }
  };

  const onDeleteGrantCommission = async (id: number) => {
    await removeGrantCommission(id);

    if (grantId) {
      loadGrantCommissionList(grantId);
    }
  };

  return (
    <>
      <AddGrantCommissionView
        setGrantId={setGrantId}
        loadGrantCommissionList={loadGrantCommissionList}
      />
      <GrantCommissionListView
        list={grantCommissionsList || []}
        onDelete={onDeleteGrantCommission}
      />
    </>
  );
};

export default GrantCommission;
