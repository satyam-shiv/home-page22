import Navigation from '../Navigation';

const Header = () => (
  <div className="flex w-full py-5 bg-tm-primary-bg sticky top-0 z-50">
    <div className="md:w-5/6 mx-auto flex justify-between">
      <div className="md:w-4/12 align-middle text-5xl font-euclidCircularBRegular">TrustMe</div>
      <Navigation className="md:w-8/12 flex justify-end" />
    </div>
  </div>
);

export default Header;
