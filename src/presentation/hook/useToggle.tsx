import { useState } from "react";

export default function useToggle() {
  const [active, setActive] = useState<boolean>(false)

  const toggle = () => setActive(prev => !prev)
  
  return { active, toggle }
}