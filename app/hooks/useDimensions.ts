import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
// export const useDimensions = (ref) => {
//   const dimensions = useRef({ width: 0, height: 0 });

//   useIsomorphicLayoutEffect(() => {
//     dimensions.current.width = ref.current.offsetWidth;
//     dimensions.current.height = ref.current.offsetHeight;
//   }, []);

//   return dimensions.current;
// };
