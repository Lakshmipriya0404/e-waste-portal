import { useScrollContext } from "./context/ScrollContext";
import { useGetScrollHeight } from "./hooks/ScrollHeight";

const CalculateScrollPercent = () => {
  const scrollProgress = useScrollContext();
  const scrollHeight = useGetScrollHeight().getScrollHeight();
  const scrollPercentage =
    scrollHeight !== 0 ? (scrollProgress / scrollHeight) * 100 : 0;
  return scrollPercentage;
};

export default CalculateScrollPercent;
