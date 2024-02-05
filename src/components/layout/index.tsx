import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd'
import Header from "./header";

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
    Header={Header}
    Title={(tilteProps) => <ThemedTitleV2 {...tilteProps} text="Refine" />}
    >
      {children}
    </ThemedLayoutV2>
  )
}

export default Layout