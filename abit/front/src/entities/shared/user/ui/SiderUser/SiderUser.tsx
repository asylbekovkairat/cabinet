import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { useTranslation } from 'react-i18next';

import { Avatar } from '~shared/ui';
import { useCollapsed } from '~features/shared/collapse';

import styles from './siderUser.module.scss';

export interface SiderUserProps {
  photo?: string | null;
  fio?: string;
  role?: string | null;
  onError?: ReactNode;
  sertificateNum: number | null;
}

export const SiderUser: FC<SiderUserProps> = ({ photo, fio, sertificateNum, onError }) => {
  const collapsed = useCollapsed();
  const wrapperClass = classNames(styles.collapsed, !collapsed ? styles.closed : '');
  const { t } = useTranslation();

  return (
    <div className={wrapperClass}>
      <Avatar src={photo ? photo : null} size={40}>
        {onError}
      </Avatar>
      <div className={styles.fioRole}>
        <h2 className={styles.fio}>{fio}</h2>
        <p className={styles.role}>
          {t('cm:yourCipher')}&nbsp;{sertificateNum}
        </p>
      </div>
    </div>
  );
};
