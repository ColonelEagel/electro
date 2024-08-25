import billboardBg from "@/assets/images/billboard/billboardBg.jpg";
import Slider from "./Slider";
function Billboard() {
  return (
    <div className="h-[420px] bg-no-repeat bg-cover " style={{ backgroundImage: `url('${billboardBg}')`,backgroundPosition:"top center" }}>
      <Slider />
    </div>
  );
}

export default Billboard;
