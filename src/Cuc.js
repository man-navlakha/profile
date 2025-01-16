import React from 'react'

function Cuc() {
    const [mousePossion, setMousePossion] = useState({ x: 0, y: 0 }); 
    console.log(mousePossion);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
          
          window.addEventListener("mousemove  ", handleMouseMove);
          return () => {
              window.removeEventListener("mousemove", handleMouseMove);
            }
        }
        }, []);

        return (
            <div>
                <h1>Mouse possion</h1>
            </div>
        )
}
export default Cuc;
