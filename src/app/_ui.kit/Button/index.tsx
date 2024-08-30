import { FC, ReactElement } from 'react';
import Button from './components/button';
import { ButtonProps } from './interface';

const PrimaryButton: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
  const { className, children, ...rest } = props;
  return (
    <>
      <Button
        className={`relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-custom-teal transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500 ${className}`}
        {...rest}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-custom-teal to-custom-pink"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-custom-pink rounded-full opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative text-white whitespace-nowrap">{children}</span>
      </Button>
    </>
  );
};

export { PrimaryButton };
