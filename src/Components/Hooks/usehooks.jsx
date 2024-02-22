import React from "react";
import { Context } from "../Context/Theme";

const useTheme = () => {
  const contex = React.useContext(Context)

  return [contex.theme, contex.setTheme]
}


export default useTheme