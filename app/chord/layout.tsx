import NavBtns from "../../components/NavBtns";
import "../../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBtns />
      {children}
    </>
  );
}
