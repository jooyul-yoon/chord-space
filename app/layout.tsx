import NavBtns from "../components/NavBtns";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head />
      <script
        async
        type="text/javascript"
        src="https://www.scales-chords.com/api/scales-chords-api.js"
      ></script>
      <body>
        <NavBtns />
        {children}
      </body>
    </html>
  );
}
