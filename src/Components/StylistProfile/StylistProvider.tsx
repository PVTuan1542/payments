import React, { useEffect, useState } from "react";
import { getStylistProfile } from "../../Services/stylist/stylist.service";

export const StylistContext = React.createContext(null);

function StylistProvider({ children }: any) {
  const [stylist, setStylist] = useState<any>({});

  useEffect(() => {
    getStylistProfile().then((data) => {
      setStylist(data);
    });
  }, []);

  return (
    <StylistContext.Provider value={stylist}>
      {children}
    </StylistContext.Provider>
  );
}

export default StylistProvider
