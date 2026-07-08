import { useEffect, useState } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function atualizar() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener("resize", atualizar);

    return () => {
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  return isMobile;
}