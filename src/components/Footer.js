const Footer = () => {
  return (
    <div className="flex mob:flex-col justify-around w-full shadow h-14 bg-red-500 text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40">
    <span className="text-left mob:text-xs mob:text-center text-white">Thanks for visiting us. </span>
    <span className="text-center mob:text-xs text-white">Developed with <span className="text-white">&#x2764;</span> by Sunny Saini</span>
  </div>
  );
};

export default Footer;