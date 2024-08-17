import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AppProvider } from "./presentation/contexts/app-context";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./core/config/query-client.config";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </QueryClientProvider>
  )
}