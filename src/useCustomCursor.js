// import { useEffect } from 'react';

// const useCustomCursor = () => {
//   useEffect(() => {
//     const cursor = document.querySelector('.cursor');
//     const cursorInner = document.querySelector('.cursor__inner');
//     const cursorOuter = document.querySelector('.cursor__outer');

//     const moveCursor = (e) => {
//       const { clientX: x, clientY: y } = e;
//       cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
//     };

//     const handleMouseEnter = () => {
//       cursorInner.classList.add('bg-white');
//       cursorOuter.classList.add('border-white');
//     };

//     const handleMouseLeave = () => {
//       cursorInner.classList.remove('bg-white');
//       cursorOuter.classList.remove('border-white');
//     };

//     document.addEventListener('mousemove', moveCursor);
//     document.querySelectorAll('a').forEach((el) => {
//       el.addEventListener('mouseenter', handleMouseEnter);
//       el.addEventListener('mouseleave', handleMouseLeave);
//     });

//     return () => {
//       document.removeEventListener('mousemove', moveCursor);
//       document.querySelectorAll('a').forEach((el) => {
//         el.removeEventListener('mouseenter', handleMouseEnter);
//         el.removeEventListener('mouseleave', handleMouseLeave);
//       });
//     };
//   }, []);
// };

// export default useCustomCursor;


var 