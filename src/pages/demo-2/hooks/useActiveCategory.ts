import { useState } from "react";

export function useActiveCategory(initial = "chicken") {
  const [activeTab, setActiveTab] = useState<string>(initial);
  return { activeTab, setActiveTab };
}
