import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
import useNavigation from "~/hooks/useNavigation";
import navigationData from "~/lib/navigation";
import styles from "./styles/app.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "MVP Store Front App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar
          navigationData={navigationData}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute} />
        <Tabbar
          navigationData={navigationData}
          currentRoute={currentRoute}
          setCurrentRoute={setCurrentRoute} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
