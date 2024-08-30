import { ImageProps } from './interface';

const TMImage = (props: ImageProps) => {
  const { src, alt } = props;
  return (
    <picture>
      <img src={src} alt={alt} />
    </picture>
  );
};

export default TMImage;
