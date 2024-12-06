import { Suspense, ComponentType } from "react";
import Loader from "./Loader";

const Loadable = <P extends object>(
  Component: ComponentType<P>
) => ({ loading, ...props }: { loading?: boolean } & P) => (
  <Suspense fallback={<Loader />}>
    {loading ? <Loader /> : <Component {...(props as P)} />}
  </Suspense>
);

export default Loadable;