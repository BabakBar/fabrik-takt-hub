/* eslint-disable react-refresh/only-export-components -- The tiny router exposes its provider, hooks, and link as one API. */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';

type Location = {
  pathname: string;
  search: string;
  hash: string;
};

type Destination =
  | string
  | {
      pathname: string;
      search?: string;
      hash?: string;
    };

type RouterContextValue = {
  location: Location;
  navigate: (destination: Destination, options?: { replace?: boolean }) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

const readLocation = (): Location => ({
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash,
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState(readLocation);

  useEffect(() => {
    const handlePopState = () => setLocation(readLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((destination: Destination, options?: { replace?: boolean }) => {
    const href =
      typeof destination === 'string'
        ? destination
        : `${destination.pathname}${destination.search ?? ''}${destination.hash ?? ''}`;
    const nextUrl = new URL(href, window.location.href);

    if (nextUrl.origin !== window.location.origin) {
      window.location.assign(nextUrl);
      return;
    }

    const nextLocation = `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
    if (options?.replace) {
      window.history.replaceState(null, '', nextLocation);
    } else {
      window.history.pushState(null, '', nextLocation);
    }
    setLocation(readLocation());
  }, []);

  const value = useMemo(() => ({ location, navigate }), [location, navigate]);

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) throw new Error('Router hooks must be used within RouterProvider');
  return context;
};

export const useLocation = () => useRouter().location;
export const useNavigate = () => useRouter().navigate;

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
};

export function Link({ to, onClick, target, ...props }: LinkProps) {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === '_blank'
    ) {
      return;
    }

    const destination = new URL(to, window.location.href);
    if (destination.origin !== window.location.origin) return;

    event.preventDefault();
    navigate(to);
  };

  return <a {...props} href={to} target={target} onClick={handleClick} />;
}
