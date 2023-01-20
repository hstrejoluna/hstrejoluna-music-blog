// import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { SunIcon } from "@heroicons/react/outline";

const ThemeSwitch = () => {
  //   const [mounted, setMounted] = useState(false);
  //   const { resolvedTheme, setTheme } = useTheme();
  const { theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setTheme("dark");
    }, []);

  return (
    <div className="inline-flex items-center">
      <SunIcon className="w-4 h-4 mr-2" />
      <select
        name="themeSwitch"
        value={theme}
        onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitch;
