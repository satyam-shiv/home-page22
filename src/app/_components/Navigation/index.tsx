import { ReactElement } from 'react';
import { NavigationProps } from './interface';
import { PrimaryButton } from '@/app/_ui.kit/Button';

const Navigation = (props: NavigationProps): ReactElement => {
  const { className } = props;
  return <div className={className}>
        <PrimaryButton className="">For Sellers</PrimaryButton>
  </div>;
};

export default Navigation;
