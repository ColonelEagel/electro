import Container from "@/components/ui/Container";
import saleBannerImg from "@/assets/images/SaleBanner/img1.jpg";
function SaleBanner() {
  return (
    <Container
      className={`flex items-center p-2 md:p-7 mb-10 bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${saleBannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="uppercase text-xl font-light pr-16 mr-16 border-r-2 h-full text-center pt-4 md:text-5xl ">
        Shop and <strong className="font-bold">save big</strong>
        <br /> on hottest tablets
      </div>
      <div className="bg-yellow-400 text-black p-2 px-4  lg:px-9 rounded-lg inline-flex flex-col items-center justify-center">
        <span className="text-xs uppercase">Starting at</span>
        <div className="flex items-start">
          <span className=" md:font-bold">$</span>
          <span className="text-2xl md:text-4xl md:font-bold leading-none">79</span>
          <span className=" md:font-bold">99</span>
        </div>
      </div>
    </Container>
  );
}

export default SaleBanner;
