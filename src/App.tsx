import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Product from "./pages/Product";
import ContactLayout from "./layouts/ContactLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<Jobs />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
